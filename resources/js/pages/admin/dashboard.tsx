import { Head, Link } from '@inertiajs/react';
import { Wallet, TrendingUp, Users, Package, Gift } from 'lucide-react';
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default function Dashboard({ stats }: { stats: any }) {
    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-8">
                {/* Promo Status Banner */}
                {!!stats.promo_active && (
                    <div className="bg-gradient-to-r from-[#FBC6C1] to-[#E07A72] p-4 rounded-2xl shadow-lg shadow-[#E07A72]/20 text-white flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Gift size={32} />
                            <div>
                                <h3 className="font-extrabold text-lg">Promo Hari Spesial Sedang Aktif!</h3>
                                <p className="text-white/80 text-sm">Semua harga member mendapatkan diskon otomatis.</p>
                            </div>
                        </div>
                        <Link href="/admin/settings/promo" className="bg-white text-[#E07A72] px-4 py-2 rounded-xl font-bold hover:bg-[#FFF5ED] transition-colors shadow-sm">
                            Kelola Promo
                        </Link>
                    </div>
                )}

                {/* Main Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-white border-none shadow-xl shadow-[#E07A72]/5 bg-gradient-to-br from-white to-[#FFF9E6] rounded-3xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-[#2B2118]">
                            <Wallet size={48} />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold text-[#E07A72] uppercase tracking-wider">Saldo Kas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-extrabold text-[#2B2118]">
                                Rp {numberFormat(stats.balance)}
                            </div>
                            <p className="text-xs text-[#7A6A60] mt-2 font-medium">Total pemasukan - pengeluaran</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-xl shadow-[#FBC6C1]/10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-[#2B2118]">
                            <TrendingUp size={48} />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold text-[#7A6A60] uppercase tracking-wider">Pemasukan Kotor</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-[#4A3B32]">
                                Rp {numberFormat(stats.income)}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-xl shadow-[#C2E9E6]/20 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-[#2B2118]">
                            <Users size={48} />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold text-[#7A6A60] uppercase tracking-wider">Total Pelanggan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-extrabold text-[#4A3B32]">{stats.total_users}</div>
                            <p className="text-xs text-[#7A6A60] mt-2 font-medium">Member terdaftar</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-xl shadow-[#EBE3D5]/20 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-[#2B2118]">
                            <Package size={48} />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold text-[#7A6A60] uppercase tracking-wider">Produk Aktif</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-extrabold text-[#4A3B32]">
                                {stats.active_products} <span className="text-lg font-medium text-gray-400">/ {stats.total_products}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}

function numberFormat(val: number) {
    return new Intl.NumberFormat('id-ID').format(val || 0);
}
