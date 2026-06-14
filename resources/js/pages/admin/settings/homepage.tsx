import { Head, useForm } from '@inertiajs/react';
import { Image as ImageIcon, LayoutTemplate } from 'lucide-react';
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardTitle } from '../../../components/ui/card';

export default function HomepageSettings({ 
    heroImage, 
    signatureImage, 
    membershipImage, 
    hampersImage 
}: { 
    heroImage: string | null,
    signatureImage: string | null,
    membershipImage: string | null,
    hampersImage: string | null 
}) {
    const { data, setData, post, processing, errors } = useForm({
        hero_image: null as File | null,
        signature_image: null as File | null,
        membership_image: null as File | null,
        hampers_image: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/settings/homepage');
    };

    const hasChanges = data.hero_image || data.signature_image || data.membership_image || data.hampers_image;

    const ImageUploadSection = ({ 
        title, 
        description, 
        field, 
        currentImage, 
        fallbackImage 
    }: { 
        title: string, 
        description: string, 
        field: 'hero_image' | 'signature_image' | 'membership_image' | 'hampers_image', 
        currentImage: string | null, 
        fallbackImage: string 
    }) => (
        <div className="border border-[#EBE3D5] rounded-2xl p-6 bg-[#FDFBF7]">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3">
                    <div className="relative w-40 h-40 rounded-3xl overflow-hidden border-4 border-white shadow-md mx-auto bg-gray-50 flex items-center justify-center">
                        {data[field] ? (
                            <img 
                                src={URL.createObjectURL(data[field] as File)} 
                                alt="Preview Upload" 
                                className="w-full h-full object-cover" 
                            />
                        ) : (
                            <img 
                                src={currentImage || fallbackImage} 
                                alt="Gambar Saat Ini" 
                                className="w-full h-full object-cover" 
                            />
                        )}
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h4 className="text-lg font-bold text-[#4A3B32] mb-1">{title}</h4>
                    <p className="text-sm text-[#7A6A60] mb-4">{description}</p>
                    
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={e => setData(field, e.target.files ? e.target.files[0] : null)}
                        className="w-full px-4 py-3 border border-[#EBE3D5] rounded-xl focus:ring-[#E07A72] focus:border-[#E07A72] outline-none text-[#4A3B32] bg-white cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FDF1D5] file:text-[#D49800] hover:file:bg-[#F8C83B] hover:file:text-white file:transition-colors"
                    />
                    {errors[field] && <div className="text-red-500 text-sm mt-1">{errors[field]}</div>}
                </div>
            </div>
        </div>
    );

    return (
        <AdminLayout title="Tampilan Beranda">
            <Head title="Pengaturan Tampilan Beranda" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-24">
                
                <div className="bg-gradient-to-r from-[#EBF7F6] to-[#D1F0ED] rounded-3xl p-6 mb-8 border border-[#BDE3DF] shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2C7A7B] shadow-sm">
                            <LayoutTemplate size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#2C7A7B] text-lg mb-1">Pengaturan Visual Halaman Utama</h3>
                            <p className="text-[#319795] text-sm leading-relaxed">
                                Sesuaikan 4 gambar utama yang muncul di halaman beranda pelanggan Anda. 
                                Anda tidak perlu mengunggah semuanya sekaligus, cukup pilih bagian mana yang ingin diubah.
                            </p>
                        </div>
                    </div>
                </div>

                <Card className="bg-white border-[#FDE8E7] shadow-lg rounded-3xl overflow-hidden">
                    <div className="bg-gradient-to-r from-white to-[#FDFBF7] p-6 border-b border-[#EBE3D5] flex justify-between items-center">
                        <div>
                            <CardTitle className="text-xl text-[#4A3B32]">Ubah Gambar Beranda</CardTitle>
                            <p className="text-sm text-[#7A6A60] mt-1">Disarankan rasio kotak (1:1), resolusi minimal 500x500 px. Maksimal 5MB.</p>
                        </div>
                        <div className="opacity-20 text-[#2B2118]">
                            <ImageIcon size={40} />
                        </div>
                    </div>
                    <CardContent className="p-8">
                        <form onSubmit={submit} className="space-y-6">
                            
                            <ImageUploadSection 
                                title="1. Gambar Hero Utama" 
                                description="Gambar paling atas yang pertama kali dilihat pelanggan (keranjang dessert besar)."
                                field="hero_image"
                                currentImage={heroImage}
                                fallbackImage="/assets/hero.png"
                            />

                            <ImageUploadSection 
                                title="2. Signature Nyicheeze" 
                                description="Gambar di bagian promosi kue signature (kiri atas)."
                                field="signature_image"
                                currentImage={signatureImage}
                                fallbackImage="/assets/menu_nyicheeze.png"
                            />

                            <ImageUploadSection 
                                title="3. Banner Membership" 
                                description="Gambar ilustrasi pendaftaran membership dan reward (kanan tengah)."
                                field="membership_image"
                                currentImage={membershipImage}
                                fallbackImage="/assets/membership_banner.png"
                            />

                            <ImageUploadSection 
                                title="4. Hantaran (Hampers)" 
                                description="Gambar promosi pesanan custom hampers atau hantaran (kiri bawah)."
                                field="hampers_image"
                                currentImage={hampersImage}
                                fallbackImage="/assets/catering_dessert.png"
                            />

                            <div className="pt-6 border-t border-[#EBE3D5] sticky bottom-0 bg-white p-4 -mx-4 shadow-[0_-10px_20px_rgba(255,255,255,0.9)]">
                                <button 
                                    type="submit" 
                                    disabled={processing || !hasChanges}
                                    className="w-full bg-[#E07A72] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#CC665E] transition-colors disabled:opacity-50 hover:-translate-y-1"
                                >
                                    {processing ? 'Mengunggah & Menyimpan...' : 'Simpan Semua Perubahan'}
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
