import { Head, Link, router } from '@inertiajs/react';
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card } from '../../../components/ui/card';

export default function Index({ products }: { products: any[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            router.delete(`/admin/products/${id}`);
        }
    };

    return (
        <AdminLayout title="Manajemen Produk">
            <Head title="Manajemen Produk" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-end mb-6">
                    <Link href="/admin/products/create" className="bg-[#E07A72] text-white px-4 py-2 rounded-xl font-bold shadow-sm hover:bg-[#CC665E] transition-colors hover:-translate-y-0.5">
                        + Tambah Produk
                    </Link>
                </div>

                <Card className="bg-white border-none shadow-md rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#FDFBF7] text-[#7A6A60] text-sm">
                                    <th className="p-4 font-semibold border-b border-[#EBE3D5]">Nama Produk</th>
                                    <th className="p-4 font-semibold border-b border-[#EBE3D5]">Harga</th>
                                    <th className="p-4 font-semibold border-b border-[#EBE3D5]">Status</th>
                                    <th className="p-4 font-semibold border-b border-[#EBE3D5] text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-[#7A6A60]">Belum ada produk.</td>
                                    </tr>
                                ) : (
                                    products.map((product) => (
                                        <tr key={product.id} className="border-b border-[#EBE3D5] hover:bg-[#FFF9E6]/30 transition-colors">
                                            <td className="p-4 font-bold text-[#4A3B32]">{product.name}</td>
                                            <td className="p-4 text-[#7A6A60] font-medium">Rp {Number(product.price).toLocaleString('id-ID')}</td>
                                            <td className="p-4">
                                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${product.is_active ? 'bg-[#EBF7F6] text-[#2DD4BF]' : 'bg-[#FDE8E7] text-[#E07A72]'}`}>
                                                    {product.is_active ? 'Aktif' : 'Nonaktif'}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right flex justify-end gap-2">
                                                <Link href={`/admin/products/${product.id}/edit`} className="text-sm bg-[#FDFBF7] text-[#4A3B32] border border-[#EBE3D5] px-4 py-1.5 rounded-lg hover:bg-[#EBE3D5] font-bold transition-colors">
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDelete(product.id)} className="text-sm bg-[#FDE8E7] text-[#E07A72] border border-[#FBC6C1] px-4 py-1.5 rounded-lg hover:bg-[#FBC6C1] hover:text-white font-bold transition-colors">
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
}
