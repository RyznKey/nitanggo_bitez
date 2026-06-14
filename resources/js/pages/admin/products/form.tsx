import { Head, router, useForm } from '@inertiajs/react';
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';


export default function Form({ product }: { product?: any }) {
    const isEdit = !!product;
    const { data, setData, post, processing, errors } = useForm({
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        image: product?.image || '',
        is_active: product?.is_active ?? true,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEdit) {
            router.post(`/admin/products/${product.id}`, {
                _method: 'put',
                ...data,
            });
        } else {
            post('/admin/products');
        }
    };

    return (
        <AdminLayout title={isEdit ? 'Edit Produk' : 'Tambah Produk Baru'}>
            <Head title={isEdit ? "Edit Produk" : "Tambah Produk"} />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Card className="bg-white border-[#FDE8E7] shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg text-[#4A3B32]">Informasi Produk</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[#4A3B32] mb-1">Nama Produk</label>
                                <input 
                                    type="text" 
                                    value={data.name} 
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full px-4 py-2 border border-[#EBE3D5] rounded-lg focus:ring-[#E07A72] focus:border-[#E07A72] outline-none text-[#4A3B32] bg-white"
                                />
                                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#4A3B32] mb-1">Harga (Rp)</label>
                                <input 
                                    type="number" 
                                    value={data.price} 
                                    onChange={e => setData('price', e.target.value)}
                                    className="w-full px-4 py-2 border border-[#EBE3D5] rounded-lg focus:ring-[#E07A72] focus:border-[#E07A72] outline-none text-[#4A3B32] bg-white"
                                />
                                {errors.price && <div className="text-red-500 text-sm mt-1">{errors.price}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#4A3B32] mb-1">Deskripsi</label>
                                <textarea 
                                    value={data.description} 
                                    onChange={e => setData('description', e.target.value)}
                                    className="w-full px-4 py-2 border border-[#EBE3D5] rounded-lg focus:ring-[#E07A72] focus:border-[#E07A72] outline-none h-24 text-[#4A3B32] bg-white"
                                />
                                {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#4A3B32] mb-1">Gambar Produk</label>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                                    className="w-full px-4 py-2 border border-[#EBE3D5] rounded-lg focus:ring-[#E07A72] focus:border-[#E07A72] outline-none bg-white text-[#4A3B32]"
                                />
                                {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                                
                                {data.image && (
                                    <div className="mt-3">
                                        <p className="text-sm text-gray-500 mb-2">Preview:</p>
                                        <img 
                                            src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} 
                                            alt="Preview" 
                                            className="h-32 object-contain rounded-lg border border-gray-200 bg-gray-50" 
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    id="is_active"
                                    checked={data.is_active} 
                                    onChange={e => setData('is_active', e.target.checked)}
                                    className="w-4 h-4 text-[#E07A72] rounded border-gray-300 focus:ring-[#E07A72]"
                                />
                                <label htmlFor="is_active" className="text-sm font-medium text-[#4A3B32]">Aktif (Tampilkan di Beranda)</label>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="bg-[#E07A72] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#CC665E] transition-colors disabled:opacity-50"
                                >
                                    {isEdit ? 'Simpan Perubahan' : 'Tambah Produk'}
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
