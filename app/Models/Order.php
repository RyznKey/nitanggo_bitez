<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_lengkap',
        'whatsapp',
        'status_member',
        'produk',
        'jumlah',
        'harga_satuan',
        'subtotal',
        'ongkir',
        'total_pembayaran',
        'metode_pengambilan',
        'alamat_pengiriman',
        'catatan',
        'status_pesanan'
    ];
}