<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        // Apply filters
        if ($request->has('search') && $request->search != '') {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        if ($request->has('category') && $request->category != '' && $request->category != 'Semua Kategori') {
            $query->where('category', $request->category);
        }

        if ($request->has('stock_status') && $request->stock_status != '' && $request->stock_status != 'Status Stok') {
            $status = $request->stock_status;
            if ($status === 'Aman') {
                $query->whereRaw('stock > min_stock');
            } elseif ($status === 'Menipis') {
                $query->whereRaw('stock <= min_stock')->where('stock', '>', 0);
            } elseif ($status === 'Habis') {
                $query->where('stock', '<=', 0);
            }
        }

        $products = $query->paginate(10)->withQueryString();

        // Calculate statistics
        $totalProducts = Product::count();
        $totalStock = Product::sum('stock');
        $lowStock = Product::whereRaw('stock <= min_stock')->where('stock', '>', 0)->count();
        $outOfStock = Product::where('stock', '<=', 0)->count();

        // Get unique categories
        $categories = Product::select('category')->whereNotNull('category')->distinct()->pluck('category');

        // Get all products for the 'Tambah Stok' select option
        $allProductsForSelect = Product::select('id', 'name', 'stock')->orderBy('name')->get();

        return Inertia::render('admin/inventory/index', [
            'products' => $products,
            'stats' => [
                'total_products' => $totalProducts,
                'total_stock' => $totalStock,
                'low_stock' => $lowStock,
                'out_of_stock' => $outOfStock,
            ],
            'categories' => $categories,
            'filters' => $request->only(['search', 'category', 'stock_status']),
            'all_products' => $allProductsForSelect,
        ]);
    }

    public function addStock(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'amount' => 'required|integer|min:1',
        ]);

        $product = Product::findOrFail($request->product_id);
        $product->increment('stock', $request->amount);

        return back()->with('success', 'Stok berhasil ditambahkan.');
    }

    public function export(Request $request)
    {
        $products = Product::all();
        $csv = "ID,Produk,Kategori,Stok Tersedia,Batas Menipis,Status\n";
        foreach ($products as $p) {
            $status = 'Aman';
            if ($p->stock <= 0) $status = 'Habis';
            elseif ($p->stock <= $p->min_stock) $status = 'Menipis';
            $csv .= "{$p->id},\"{$p->name}\",\"{$p->category}\",{$p->stock},{$p->min_stock},{$status}\n";
        }

        return response($csv)
            ->header('Content-Type', 'text/csv')
            ->header('Content-Disposition', 'attachment; filename="stok_produk.csv"');
    }
}
