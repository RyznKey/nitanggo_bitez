<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap');
            $table->string('whatsapp');
            $table->string('status_member');
            $table->string('produk');
            $table->integer('jumlah');
            $table->integer('harga_satuan');
            $table->integer('subtotal');
            $table->integer('ongkir');
            $table->integer('total_pembayaran');
            $table->string('metode_pengambilan');
            $table->text('alamat_pengiriman')->nullable();
            $table->text('catatan')->nullable();
            $table->string('status_pesanan')->default('pending'); // pending, diproses, selesai, batal
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};