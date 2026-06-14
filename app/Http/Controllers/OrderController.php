<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        // Validasi input dari React frontend
        $validated = $request->validate([
            'namaLengkap' => 'required|string|max:255',
            'whatsapp' => 'required|string|max:20',
            'statusMember' => 'required|string',
            'produk' => 'required|string',
            'jumlah' => 'required|integer|min:1',
            'hargaSatuan' => 'required|integer',
            'subtotal' => 'required|integer',
            'ongkir' => 'required|integer',
            'totalPembayaran' => 'required|integer',
            'metodePengambilan' => 'required|string',
            'alamatPengiriman' => 'nullable|string',
            'catatan' => 'nullable|string',
        ]);

        // Simpan ke database (mapping ke format snake_case database)
        Order::create([
            'nama_lengkap' => $validated['namaLengkap'],
            'whatsapp' => $validated['whatsapp'],
            'status_member' => $validated['statusMember'],
            'produk' => $validated['produk'],
            'jumlah' => $validated['jumlah'],
            'harga_satuan' => $validated['hargaSatuan'],
            'subtotal' => $validated['subtotal'],
            'ongkir' => $validated['ongkir'],
            'total_pembayaran' => $validated['totalPembayaran'],
            'metode_pengambilan' => $validated['metodePengambilan'],
            'alamat_pengiriman' => $validated['alamatPengiriman'],
            'catatan' => $validated['catatan'],
            'status_pesanan' => 'pending',
        ]);

        // Kembalikan response sukses menggunakan Inertia back() redirect
        return back()->with('success', 'Pesananmu berhasil disimpan di database!');
    }
}