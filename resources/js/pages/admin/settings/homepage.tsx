import { Head, useForm } from '@inertiajs/react';
import { Image as ImageIcon, LayoutTemplate } from 'lucide-react';
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardTitle } from '../../../components/ui/card';

export default function HomepageSettings({ hampersImage }: { hampersImage: string | null }) {
    const { data, setData, post, processing, errors } = useForm({
        hampers_image: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/settings/homepage');
    };

    return (
        <AdminLayout title="Tampilan Beranda">
            <Head title="Pengaturan Tampilan Beranda" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                
                <div className="bg-gradient-to-r from-[#EBF7F6] to-[#D1F0ED] rounded-3xl p-6 mb-8 border border-[#BDE3DF] shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2C7A7B] shadow-sm">
                            <LayoutTemplate size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#2C7A7B] text-lg mb-1">Pengaturan Visual Halaman Utama</h3>
                            <p className="text-[#319795] text-sm leading-relaxed">
                                Sesuaikan gambar yang muncul di halaman utama pelanggan Anda. 
                                Saat ini Anda dapat mengubah gambar pada bagian promosi "Hantaran & Momen Manismu".
                            </p>
                        </div>
                    </div>
                </div>

                <Card className="bg-white border-[#FDE8E7] shadow-lg rounded-3xl overflow-hidden">
                    <div className="bg-gradient-to-r from-white to-[#FDFBF7] p-6 border-b border-[#EBE3D5] flex justify-between items-center">
                        <div>
                            <CardTitle className="text-xl text-[#4A3B32]">Gambar Hantaran (Hampers)</CardTitle>
                            <p className="text-sm text-[#7A6A60] mt-1">Muncul di halaman depan bagian bawah</p>
                        </div>
                        <div className="opacity-20 text-[#2B2118]">
                            <ImageIcon size={40} />
                        </div>
                    </div>
                    <CardContent className="p-8">
                        <form onSubmit={submit} className="space-y-6">
                            
                            <div>
                                <label className="block text-sm font-bold text-[#4A3B32] mb-4">Gambar Saat Ini</label>
                                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-[#D1F0ED] shadow-md mx-auto mb-6 bg-gray-50 flex items-center justify-center">
                                    {data.hampers_image ? (
                                        <img 
                                            src={URL.createObjectURL(data.hampers_image)} 
                                            alt="Preview Upload" 
                                            className="w-full h-full object-cover" 
                                        />
                                    ) : (
                                        <img 
                                            src={hampersImage || "/assets/catering_dessert.png"} 
                                            alt="Gambar Saat Ini" 
                                            className="w-full h-full object-cover" 
                                        />
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[#4A3B32] mb-2">Upload Gambar Baru</label>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    onChange={e => setData('hampers_image', e.target.files ? e.target.files[0] : null)}
                                    className="w-full px-4 py-3 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] focus:border-[#E07A72] outline-none text-[#4A3B32] bg-white cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FDF1D5] file:text-[#D49800] hover:file:bg-[#F8C83B] hover:file:text-white file:transition-colors"
                                />
                                <p className="text-sm text-[#7A6A60] mt-2">
                                    Disarankan rasio kotak (1:1), resolusi minimal 500x500 px. Maksimal 5MB.
                                </p>
                                {errors.hampers_image && <div className="text-red-500 text-sm mt-1">{errors.hampers_image}</div>}
                            </div>

                            <div className="pt-6 border-t border-[#EBE3D5]">
                                <button 
                                    type="submit" 
                                    disabled={processing || !data.hampers_image}
                                    className="w-full bg-[#E07A72] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#CC665E] transition-colors disabled:opacity-50 hover:-translate-y-1"
                                >
                                    {processing ? 'Mengunggah & Menyimpan...' : 'Simpan Gambar Beranda'}
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
