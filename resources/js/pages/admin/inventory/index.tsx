import { Head, router, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Package, AlertTriangle, XCircle, Search, Filter, Download, Plus, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Inventory({ products, stats, categories, filters, all_products }: any) {
    const [searchTerm, setSearchTerm] = useState(filters?.search || '');
    const [selectedCategory, setSelectedCategory] = useState(filters?.category || 'Semua Kategori');
    const [stockStatus, setStockStatus] = useState(filters?.stock_status || 'Status Stok');
    const [showAddStockModal, setShowAddStockModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [addAmount, setAddAmount] = useState('');

    const handleFilter = () => {
        router.get('/admin/inventory', {
            search: searchTerm,
            category: selectedCategory === 'Semua Kategori' ? '' : selectedCategory,
            stock_status: stockStatus === 'Status Stok' ? '' : stockStatus,
        }, { preserveState: true, preserveScroll: true });
    };

    const submitAddStock = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/admin/inventory/add-stock', {
            product_id: selectedProduct?.id,
            amount: parseInt(addAmount),
        }, {
            onSuccess: () => {
                setShowAddStockModal(false);
                setAddAmount('');
                setSelectedProduct(null);
            }
        });
    };

    return (
        <AdminLayout title="Inventori">
            <Head title="Stok Produk" />

            <div className="max-w-7xl mx-auto py-2 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-extrabold text-[#2B2118]">Stok Produk</h2>
                        <p className="text-[#7A6A60] text-sm mt-1">Pantau dan kelola stok produk secara real-time</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="/admin/inventory/export" target="_blank" className="flex items-center gap-2 px-4 py-2 border border-[#EBE3D5] rounded-xl text-[#4A3B32] font-bold hover:bg-[#FFF9E6] transition-colors bg-white">
                            <Download size={18} /> Export
                        </a>
                        <button 
                            onClick={() => { setSelectedProduct(null); setShowAddStockModal(true); }}
                            className="flex items-center gap-2 px-4 py-2 bg-[#4A3B32] text-white rounded-xl font-bold hover:bg-[#2B2118] transition-colors"
                        >
                            <Plus size={18} /> Tambah Stok
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card className="border-none shadow-xl shadow-[#EBE3D5]/20 rounded-3xl relative overflow-hidden bg-white">
                        <CardContent className="p-6 flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-[#7A6A60]">Total Produk</p>
                                <div className="text-3xl font-extrabold text-[#2B2118] mt-1">{stats.total_products}</div>
                                <p className="text-xs text-[#7A6A60] mt-1">Varian</p>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-[#FFF5ED] border border-[#FDE8E7] flex items-center justify-center text-[#4A3B32]">
                                <Package size={28} />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-xl shadow-[#EBE3D5]/20 rounded-3xl relative overflow-hidden bg-white">
                        <CardContent className="p-6 flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-[#7A6A60]">Stok Tersedia</p>
                                <div className="text-3xl font-extrabold text-[#2B2118] mt-1">{stats.total_stock}</div>
                                <p className="text-xs text-[#7A6A60] mt-1">pcs</p>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-[#E5F7ED] border border-[#C3E8D5] flex items-center justify-center text-[#0E9F6E]">
                                <Package size={28} />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-xl shadow-[#EBE3D5]/20 rounded-3xl relative overflow-hidden bg-white">
                        <CardContent className="p-6 flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-[#7A6A60]">Stok Menipis</p>
                                <div className="text-3xl font-extrabold text-[#2B2118] mt-1">{stats.low_stock}</div>
                                <p className="text-xs text-[#7A6A60] mt-1">Varian</p>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-[#FFF4ED] border border-[#FDE8E7] flex items-center justify-center text-[#D49800]">
                                <AlertTriangle size={28} />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-xl shadow-[#EBE3D5]/20 rounded-3xl relative overflow-hidden bg-white">
                        <CardContent className="p-6 flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-[#7A6A60]">Stok Habis</p>
                                <div className="text-3xl font-extrabold text-[#2B2118] mt-1">{stats.out_of_stock}</div>
                                <p className="text-xs text-[#7A6A60] mt-1">Varian</p>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-[#FDE8E8] border border-[#FBD5D5] flex items-center justify-center text-[#F05252]">
                                <XCircle size={28} />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Cari produk..." 
                            className="w-full pl-11 pr-4 py-2.5 border border-[#EBE3D5] rounded-xl focus:outline-none focus:border-[#F8C83B] focus:ring-1 focus:ring-[#F8C83B] bg-white"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleFilter()}
                        />
                    </div>
                    <select 
                        className="py-2.5 px-4 border border-[#EBE3D5] rounded-xl focus:outline-none focus:border-[#F8C83B] focus:ring-1 focus:ring-[#F8C83B] bg-white text-[#4A3B32]"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option>Semua Kategori</option>
                        {categories.map((c: string) => <option key={c}>{c}</option>)}
                    </select>
                    <select 
                        className="py-2.5 px-4 border border-[#EBE3D5] rounded-xl focus:outline-none focus:border-[#F8C83B] focus:ring-1 focus:ring-[#F8C83B] bg-white text-[#4A3B32]"
                        value={stockStatus}
                        onChange={(e) => setStockStatus(e.target.value)}
                    >
                        <option>Status Stok</option>
                        <option>Aman</option>
                        <option>Menipis</option>
                        <option>Habis</option>
                    </select>
                    <button 
                        onClick={handleFilter}
                        className="flex items-center gap-2 px-5 py-2.5 border border-[#EBE3D5] rounded-xl text-[#4A3B32] font-bold hover:bg-[#FFF9E6] transition-colors bg-white"
                    >
                        <Filter size={18} /> Filter
                    </button>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-[#EBE3D5]/20 border border-[#FDE8E7] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#FFF9E6]/50 text-[#7A6A60] font-bold border-b border-[#FDE8E7]">
                                <tr>
                                    <th className="px-6 py-4">Produk</th>
                                    <th className="px-6 py-4">Kategori</th>
                                    <th className="px-6 py-4">Stok Tersedia</th>
                                    <th className="px-6 py-4">Stok Menipis</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.data.map((product: any) => {
                                    let statusColor = "bg-[#E5F7ED] text-[#0E9F6E]";
                                    let statusText = "Aman";
                                    if (product.stock <= 0) {
                                        statusColor = "bg-[#FDE8E8] text-[#F05252]";
                                        statusText = "Habis";
                                    } else if (product.stock <= product.min_stock) {
                                        statusColor = "bg-[#FFF4ED] text-[#D49800]";
                                        statusText = "Menipis";
                                    }

                                    return (
                                        <tr key={product.id} className="border-b border-[#FDE8E7] last:border-0 hover:bg-[#FFF9E6]/30 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#EBE3D5] bg-[#FFF5ED]">
                                                        {product.image ? (
                                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <Package size={20} className="text-[#D49800]" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="font-extrabold text-[#2B2118]">{product.name}</div>
                                                        <div className="text-xs text-[#7A6A60] mt-0.5">{product.weight || 'N/A'}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-[#4A3B32] font-medium">{product.category || '-'}</td>
                                            <td className="px-6 py-4 text-[#0E9F6E] font-extrabold">{product.stock} pcs</td>
                                            <td className="px-6 py-4 text-[#D49800] font-medium">{product.min_stock} pcs</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor}`}>
                                                    {statusText}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex justify-center items-center gap-2">
                                                    <button 
                                                        className="px-3 py-1.5 border border-[#EBE3D5] rounded-lg text-xs font-bold text-[#4A3B32] hover:bg-[#FFF9E6] transition-colors"
                                                        onClick={() => { setSelectedProduct(product); setShowAddStockModal(true); }}
                                                    >
                                                        Detail
                                                    </button>
                                                    <Link href={`/admin/products/${product.id}/edit`} className="p-1.5 text-[#7A6A60] hover:text-[#2B2118] transition-colors" title="Edit Produk">
                                                        <MoreVertical size={18} />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {products.data.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-[#7A6A60]">
                                            <Package size={48} className="mx-auto text-[#EBE3D5] mb-3" />
                                            <p className="font-medium">Tidak ada produk ditemukan.</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="px-6 py-4 border-t border-[#FDE8E7] flex items-center justify-between text-sm bg-[#FFF9E6]/20">
                        <span className="text-[#7A6A60] font-medium">Menampilkan {products.from || 0} - {products.to || 0} dari {products.total} data</span>
                        <div className="flex gap-2">
                            {products.links.map((link: any, i: number) => {
                                let label = link.label;
                                if (label.includes('&laquo;')) label = '&laquo;';
                                if (label.includes('&raquo;')) label = '&raquo;';
                                
                                return (
                                    <Link
                                        key={i}
                                        href={link.url || '#'}
                                        className={`min-w-[32px] h-8 px-2 flex items-center justify-center rounded-lg border font-bold ${
                                            link.active 
                                            ? 'bg-[#4A3B32] text-white border-[#4A3B32]' 
                                            : 'border-[#EBE3D5] text-[#4A3B32] hover:bg-[#FFF9E6]'
                                        } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                        dangerouslySetInnerHTML={{ __html: label }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {showAddStockModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
                        <div className="p-5 border-b border-[#FDE8E7] flex justify-between items-center bg-[#FFF9E6]/50">
                            <h3 className="font-extrabold text-xl text-[#2B2118]">Tambah Stok</h3>
                            <button onClick={() => setShowAddStockModal(false)} className="text-[#7A6A60] hover:text-[#F05252] transition-colors p-1 bg-white rounded-full shadow-sm">
                                <XCircle size={24} />
                            </button>
                        </div>
                        <form onSubmit={submitAddStock}>
                            <div className="p-6 space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-[#4A3B32] mb-2">Produk Terpilih</label>
                                    {selectedProduct ? (
                                        <div className="p-3 bg-[#FFF5ED] rounded-xl border border-[#FDE8E7] text-[#2B2118] font-bold flex items-center gap-3">
                                            <Package size={20} className="text-[#D49800]" />
                                            {selectedProduct.name}
                                        </div>
                                    ) : (
                                        <select 
                                            className="w-full p-3 border border-[#EBE3D5] rounded-xl focus:outline-none focus:border-[#F8C83B] focus:ring-2 focus:ring-[#F8C83B]/50 font-medium text-[#2B2118] bg-white"
                                            onChange={(e) => {
                                                const prod = all_products?.find((p: any) => p.id === parseInt(e.target.value));
                                                setSelectedProduct(prod);
                                            }}
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>Pilih produk...</option>
                                            {all_products?.map((p: any) => (
                                                <option key={p.id} value={p.id}>{p.name} (Stok: {p.stock})</option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#4A3B32] mb-2">Jumlah Tambahan Stok</label>
                                    <input 
                                        type="number" 
                                        min="1"
                                        required
                                        className="w-full p-3.5 border border-[#EBE3D5] rounded-xl focus:outline-none focus:border-[#F8C83B] focus:ring-2 focus:ring-[#F8C83B]/50 font-medium text-[#2B2118]"
                                        value={addAmount}
                                        onChange={(e) => setAddAmount(e.target.value)}
                                        placeholder="Contoh: 50"
                                    />
                                    <p className="text-xs text-[#7A6A60] mt-2 font-medium">Stok saat ini: {selectedProduct?.stock || 0} pcs</p>
                                </div>
                            </div>
                            <div className="p-5 bg-[#FFF9E6]/50 border-t border-[#FDE8E7] flex justify-end gap-3">
                                <button type="button" onClick={() => setShowAddStockModal(false)} className="px-5 py-2.5 font-bold text-[#7A6A60] hover:text-[#4A3B32] transition-colors">
                                    Batal
                                </button>
                                <button type="submit" className="px-6 py-2.5 bg-[#4A3B32] text-white rounded-xl font-bold hover:bg-[#2B2118] transition-colors shadow-lg shadow-[#4A3B32]/20">
                                    Simpan Stok
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
