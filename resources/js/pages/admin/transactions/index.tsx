import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';


export default function Transactions({ transactions, stats }: { transactions: any[], stats: any }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        type: 'income',
        amount: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/transactions', {
            onSuccess: () => reset('amount', 'description')
        });
    };

    return (
        <AdminLayout title="Arus Kas (Cash Flow)">
            <Head title="Arus Kas" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="border-none shadow-sm bg-white rounded-3xl">
                        <CardContent className="p-6">
                            <p className="text-sm font-bold text-[#7A6A60] uppercase mb-2">Total Pemasukan</p>
                            <h3 className="text-2xl font-bold text-[#10B981]">Rp {new Intl.NumberFormat('id-ID').format(stats.income)}</h3>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm bg-white rounded-3xl">
                        <CardContent className="p-6">
                            <p className="text-sm font-bold text-[#7A6A60] uppercase mb-2">Total Pengeluaran</p>
                            <h3 className="text-2xl font-bold text-[#EF4444]">Rp {new Intl.NumberFormat('id-ID').format(stats.expense)}</h3>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md bg-gradient-to-br from-[#E07A72] to-[#F5B92B] text-white rounded-3xl">
                        <CardContent className="p-6">
                            <p className="text-sm font-bold text-white/90 uppercase mb-2">Saldo Bersih</p>
                            <h3 className="text-3xl font-extrabold text-white">Rp {new Intl.NumberFormat('id-ID').format(stats.balance)}</h3>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="bg-white border-[#FDE8E7] shadow-sm lg:col-span-1 rounded-3xl h-fit overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-lg text-[#4A3B32]">Catat Transaksi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#4A3B32] mb-1">Jenis Transaksi</label>
                                    <select 
                                        value={data.type} 
                                        onChange={e => setData('type', e.target.value)}
                                        className="w-full px-4 py-2 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] focus:border-[#E07A72] outline-none bg-white text-[#4A3B32]"
                                    >
                                        <option value="income">Pemasukan (Income)</option>
                                        <option value="expense">Pengeluaran (Expense)</option>
                                    </select>
                                    {errors.type && <div className="text-red-500 text-sm">{errors.type}</div>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-[#4A3B32] mb-1">Tanggal</label>
                                    <input 
                                        type="date" 
                                        value={data.date} 
                                        onChange={e => setData('date', e.target.value)}
                                        className="w-full px-4 py-2 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] outline-none bg-white text-[#4A3B32]"
                                    />
                                    {errors.date && <div className="text-red-500 text-sm">{errors.date}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#4A3B32] mb-1">Nominal (Rp)</label>
                                    <input 
                                        type="number" 
                                        value={data.amount} 
                                        onChange={e => setData('amount', e.target.value)}
                                        placeholder="Contoh: 50000"
                                        className="w-full px-4 py-2 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] outline-none bg-white text-[#4A3B32]"
                                    />
                                    {errors.amount && <div className="text-red-500 text-sm">{errors.amount}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#4A3B32] mb-1">Keterangan</label>
                                    <textarea 
                                        value={data.description} 
                                        onChange={e => setData('description', e.target.value)}
                                        placeholder="Contoh: Beli bahan baku / Penjualan dari kasir"
                                        className="w-full px-4 py-2 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] outline-none h-20 bg-white text-[#4A3B32]"
                                    />
                                    {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="w-full bg-[#E07A72] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#CC665E] transition-colors disabled:opacity-50 mt-2"
                                >
                                    Catat Transaksi
                                </button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#FDE8E7] shadow-sm lg:col-span-2 rounded-3xl overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-lg text-[#4A3B32]">Riwayat Transaksi Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-[#EBE3D5] text-[#7A6A60] text-sm">
                                            <th className="pb-3 px-4 font-semibold">Tanggal</th>
                                            <th className="pb-3 px-4 font-semibold">Keterangan</th>
                                            <th className="pb-3 px-4 font-semibold text-right">Nominal</th>
                                            <th className="pb-3 px-4 font-semibold text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="text-center py-8 text-[#7A6A60]">Belum ada transaksi dicatat.</td>
                                            </tr>
                                        ) : transactions.map(t => (
                                            <tr key={t.id} className="border-b border-[#EBE3D5] hover:bg-[#FDFBF7] transition-colors">
                                                <td className="py-4 px-4 text-[#4A3B32]">{t.date}</td>
                                                <td className="py-4 px-4 text-[#4A3B32]">
                                                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${t.type === 'income' ? 'bg-[#10B981]' : 'bg-[#EF4444]'}`}></span>
                                                    {t.description}
                                                </td>
                                                <td className={`py-4 px-4 text-right font-bold ${t.type === 'income' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                                                    {t.type === 'income' ? '+' : '-'} Rp {new Intl.NumberFormat('id-ID').format(t.amount)}
                                                </td>
                                                <td className="py-4 px-4 text-center">
                                                    <Link 
                                                        href={`/admin/transactions/${t.id}`} 
                                                        method="delete" 
                                                        as="button"
                                                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                                                    >
                                                        Hapus
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
