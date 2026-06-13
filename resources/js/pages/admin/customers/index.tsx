import { Head, Link } from '@inertiajs/react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Gift } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Customers({ customers }: { customers: any[] }) {
    return (
        <AdminLayout title="Pelanggan & Member">
            <Head title="Pelanggan & Member" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <Card className="bg-white border-[#FDE8E7] shadow-sm rounded-3xl overflow-hidden">
                    <CardHeader className="flex flex-row justify-between items-center border-b border-[#EBE3D5] pb-4">
                        <CardTitle className="text-lg text-[#4A3B32]">Daftar Member Terdaftar</CardTitle>
                        <span className="bg-[#E07A72] text-white text-xs font-bold px-3 py-1 rounded-full">
                            {customers.length} Member
                        </span>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#FDFBF7]">
                                    <tr className="text-[#7A6A60] text-sm border-b border-[#EBE3D5]">
                                        <th className="py-4 px-6 font-semibold">Nama</th>
                                        <th className="py-4 px-6 font-semibold">Email</th>
                                        <th className="py-4 px-6 font-semibold text-center">Bergabung Pada</th>
                                        <th className="py-4 px-6 font-semibold text-center">Jumlah Pembelian</th>
                                        <th className="py-4 px-6 font-semibold text-center">Status Reward</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="text-center py-10 text-[#7A6A60]">Belum ada pelanggan/member.</td>
                                        </tr>
                                    ) : customers.map((customer, index) => {
                                        const progress = customer.purchases_count % 5;
                                        const hasReward = customer.purchases_count >= 5;
                                        
                                        return (
                                        <tr key={customer.id} className={`border-b border-[#EBE3D5] hover:bg-[#FDFBF7] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-[#FFF9E6] text-[#F5B92B] flex items-center justify-center rounded-full font-bold">
                                                        {customer.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span className="font-bold text-[#4A3B32]">{customer.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-[#7A6A60]">{customer.email}</td>
                                            <td className="py-4 px-6 text-center text-[#7A6A60]">
                                                {new Date(customer.created_at).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <span className="font-bold text-lg text-[#E07A72]">{customer.purchases_count}</span>
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                {hasReward ? (
                                                    <span className="bg-[#EBF7F6] text-[#2DD4BF] text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                                        <Gift size={14} /> 2 Drinks Free
                                                    </span>
                                                ) : (
                                                    <span className="text-[#7A6A60] text-xs font-medium">
                                                        Kurang {5 - progress} pembelian
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    )})}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
