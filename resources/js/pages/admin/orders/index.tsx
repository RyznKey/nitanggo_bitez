import { Head, router } from '@inertiajs/react';
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';


export default function Orders({ orders }: { orders: any[] }) {
    return (
        <AdminLayout title="Kelola Pesanan">
            <Head title="Kelola Pesanan" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                
                <Card className="bg-white border-[#FDE8E7] shadow-sm rounded-3xl overflow-hidden">
                    <CardHeader className="bg-[#FFF5ED] border-b border-[#FDE8E7] flex flex-row justify-between items-center">
                        <CardTitle className="text-xl text-[#4A3B32] font-extrabold">Daftar Pesanan</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-[#FFF9E6] text-[#7A6A60] font-semibold border-b border-[#FDE8E7]">
                                    <tr>
                                        <th className="px-6 py-4">Tanggal</th>
                                        <th className="px-6 py-4">Pelanggan</th>
                                        <th className="px-6 py-4">Pesanan</th>
                                        <th className="px-6 py-4">Total</th>
                                        <th className="px-6 py-4">Pengambilan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length === 0 ? (
                                        <tr>
                                            <td colSpan={7} className="px-6 py-8 text-center text-[#7A6A60]">
                                                Belum ada pesanan masuk.
                                            </td>
                                        </tr>
                                    ) : (
                                        orders.map((order) => (
                                            <tr key={order.id} className="border-b border-[#EBE3D5]/30 hover:bg-[#FFF5ED]/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-[#4A3B32]">
                                                    {new Date(order.created_at).toLocaleDateString('id-ID', {
                                                        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute:'2-digit'
                                                    })}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="font-bold text-[#4A3B32]">{order.customer_name}</p>
                                                    <p className="text-xs text-[#7A6A60]">{order.whatsapp}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <ul className="list-disc pl-4 text-xs text-[#7A6A60]">
                                                        {Array.isArray(order.items) ? order.items.map((item:any, i:number) => (
                                                            <li key={i}>{item.quantity}x {item.name}</li>
                                                        )) : 'Item tidak valid'}
                                                    </ul>
                                                    {order.notes && <p className="mt-1 text-[10px] italic text-[#E07A72]">Catatan: {order.notes}</p>}
                                                </td>
                                                <td className="px-6 py-4 font-bold text-[#10B981]">
                                                    Rp {new Intl.NumberFormat('id-ID').format(order.total_amount)}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">
                                                        {order.pickup_method}
                                                    </span>
                                                    {order.pickup_method === 'Delivery' && order.delivery_address && (
                                                        <p className="text-xs mt-1 text-[#7A6A60] w-32 truncate" title={order.delivery_address}>
                                                            {order.delivery_address}
                                                        </p>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
