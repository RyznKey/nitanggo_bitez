import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Gift, Lightbulb } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function PromoSettings({ promo }: { promo: any }) {
    const { data, setData, post, processing, errors } = useForm({
        is_active: promo?.is_active || false,
        name: promo?.name || '',
        discount: promo?.discount || 0,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/settings/promo');
    };

    return (
        <AdminLayout title="Promo Hari Spesial (Khusus Member)">
            <Head title="Pengaturan Promo Hari Spesial" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                
                <div className="bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] rounded-3xl p-6 mb-8 border border-[#DDD6FE] shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#5B21B6] shadow-sm">
                            <Lightbulb size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#5B21B6] text-lg mb-1">Bagaimana cara kerjanya?</h3>
                            <p className="text-[#6D28D9] text-sm leading-relaxed">
                                Fitur ini memungkinkan Anda mengatur diskon otomatis untuk semua produk secara global.
                                Cukup aktifkan saklar, tentukan nama momen (misal: "Promo Akhir Pekan"), dan tentukan persentase diskonnya.
                                Saat aktif, pelanggan yang login akan langsung melihat harga yang sudah didiskon.
                            </p>
                        </div>
                    </div>
                </div>

                <Card className="bg-white border-[#FDE8E7] shadow-lg rounded-3xl overflow-hidden">
                    <div className="bg-gradient-to-r from-white to-[#FFF9E6] p-6 border-b border-[#EBE3D5] flex justify-between items-center">
                        <div>
                            <CardTitle className="text-xl text-[#4A3B32]">Konfigurasi Promo</CardTitle>
                            <p className="text-sm text-[#7A6A60] mt-1">Atur detail promosi yang sedang berlangsung</p>
                        </div>
                        <div className="opacity-20 text-[#2B2118]">
                            <Gift size={40} />
                        </div>
                    </div>
                    <CardContent className="p-8">
                        <form onSubmit={submit} className="space-y-6">
                            
                            {/* Toggle Switch */}
                            <div className="flex items-center justify-between p-4 bg-[#FDFBF7] rounded-2xl border border-[#EBE3D5]">
                                <div>
                                    <label className="font-bold text-[#4A3B32] text-lg cursor-pointer select-none" htmlFor="is_active">
                                        Status Promo Member
                                    </label>
                                    <p className="text-sm text-[#7A6A60]">Matikan atau hidupkan promo global</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        id="is_active"
                                        className="sr-only peer"
                                        checked={data.is_active}
                                        onChange={e => setData('is_active', e.target.checked)}
                                    />
                                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FBC6C1] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#E07A72]"></div>
                                </label>
                            </div>

                            <div className={`transition-opacity duration-300 ${data.is_active ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#4A3B32] mb-2">Nama Hari Spesial / Promo</label>
                                        <input 
                                            type="text" 
                                            value={data.name} 
                                            onChange={e => setData('name', e.target.value)}
                                            placeholder="Contoh: Promo Akhir Pekan, Kemerdekaan, dll"
                                            className="w-full px-4 py-3 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] focus:border-[#E07A72] outline-none text-lg text-[#4A3B32] bg-white"
                                            required={data.is_active}
                                        />
                                        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#4A3B32] mb-2">Persentase Diskon Member (%)</label>
                                        <div className="relative">
                                            <input 
                                                type="number" 
                                                min="0"
                                                max="100"
                                                value={data.discount} 
                                                onChange={e => setData('discount', Number(e.target.value))}
                                                className="w-full px-4 py-3 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] focus:border-[#E07A72] outline-none text-lg pr-12 font-bold text-[#E07A72] bg-white"
                                                required={data.is_active}
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 font-bold text-lg">
                                                %
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#7A6A60] mt-2">
                                            Contoh: Jika harga normal Rp 50.000 dan diskon 10%, maka harga member menjadi Rp 45.000.
                                        </p>
                                        {errors.discount && <div className="text-red-500 text-sm mt-1">{errors.discount}</div>}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-[#EBE3D5]">
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="w-full bg-[#E07A72] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#CC665E] transition-colors disabled:opacity-50 hover:-translate-y-1"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Pengaturan Promo'}
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
