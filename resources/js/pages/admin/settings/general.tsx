import { Head, useForm } from '@inertiajs/react';
import { Settings, Truck } from 'lucide-react';
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardTitle } from '../../../components/ui/card';

export default function GeneralSettings({ deliveryFee }: { deliveryFee: number }) {
    const { data, setData, post, processing, errors } = useForm({
        delivery_fee: deliveryFee,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/settings/general');
    };

    return (
        <AdminLayout title="Pengaturan Umum">
            <Head title="Pengaturan Umum" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                
                <div className="bg-gradient-to-r from-[#EBF7F6] to-[#D1F0ED] rounded-3xl p-6 mb-8 border border-[#BDE3DF] shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2C7A7B] shadow-sm">
                            <Settings size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#2C7A7B] text-lg mb-1">Pengaturan Umum Website</h3>
                            <p className="text-[#319795] text-sm leading-relaxed">
                                Kelola pengaturan dasar operasional toko Anda di sini, seperti ongkos kirim standar.
                            </p>
                        </div>
                    </div>
                </div>

                <Card className="bg-white border-[#FDE8E7] shadow-lg rounded-3xl overflow-hidden">
                    <div className="bg-gradient-to-r from-white to-[#FDFBF7] p-6 border-b border-[#EBE3D5] flex justify-between items-center">
                        <div>
                            <CardTitle className="text-xl text-[#4A3B32]">Ongkos Kirim (Delivery)</CardTitle>
                            <p className="text-sm text-[#7A6A60] mt-1">Biaya pengiriman yang dibebankan ke pembeli</p>
                        </div>
                        <div className="opacity-20 text-[#2B2118]">
                            <Truck size={40} />
                        </div>
                    </div>
                    <CardContent className="p-8">
                        <form onSubmit={submit} className="space-y-6">
                            
                            <div>
                                <label className="block text-sm font-bold text-[#4A3B32] mb-2">Nominal Ongkos Kirim (Rp)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="text-[#7A6A60] font-semibold">Rp</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        min="0"
                                        value={data.delivery_fee}
                                        onChange={e => setData('delivery_fee', Number(e.target.value))}
                                        className="w-full pl-12 pr-4 py-3 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] focus:border-[#E07A72] outline-none text-[#4A3B32] bg-white font-medium"
                                        placeholder="Contoh: 4000"
                                    />
                                </div>
                                <p className="text-sm text-[#7A6A60] mt-2">
                                    Masukkan nominal angka saja tanpa titik (contoh: 4000). Jika gratis ongkir, isi dengan 0.
                                </p>
                                {errors.delivery_fee && <div className="text-red-500 text-sm mt-1">{errors.delivery_fee}</div>}
                            </div>

                            <div className="pt-6 border-t border-[#EBE3D5]">
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="w-full bg-[#E07A72] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#CC665E] transition-colors disabled:opacity-50 hover:-translate-y-1"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Pengaturan'}
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
