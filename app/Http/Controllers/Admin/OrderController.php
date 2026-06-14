<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::latest()->get();

        return Inertia::render('admin/orders/index', [
            'orders' => $orders,
        ]);
    }

    public function update(Request $request, Order $order)
    {
        $request->validate([
            'status' => 'required|in:pending,completed,cancelled',
        ]);

        $order->update(['status' => $request->status]);

        // Jika pesanan selesai, catat sebagai pemasukan otomatis
        if ($request->status === 'completed') {
            Transaction::create([
                'type' => 'income',
                'amount' => $order->total_amount,
                'description' => 'Pesanan Selesai: '.$order->customer_name,
                'date' => now()->toDateString(),
            ]);
        }

        return back()->with('success', 'Status pesanan berhasil diperbarui.');
    }
}
