import React, { useEffect } from 'react';

type MembershipProps = {
    isActive: boolean;
    user?: any;
    member: { name: string; since: string; id: string } | null;
    orders?: any[];
    progressCount: number;
    maxProgress: number;
};

export default function MembershipView({ 
    isActive, member, orders, progressCount, maxProgress
}: MembershipProps) {
    useEffect(() => {
        if (isActive && !member) {
            window.location.href = '/login';
        }
    }, [isActive, member]);

    if (!isActive || !member) {
        return null;
    }

    const currentProgress = progressCount % maxProgress;
    const remaining = maxProgress - currentProgress;

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 animate-fadeIn">
            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* ========================================= */}
                {/* TOP LEFT: HERO BANNER (COL SPAN 7) */}
                {/* ========================================= */}
                <div className="lg:col-span-7 flex flex-col justify-center relative">
                    <div className="inline-flex items-center gap-2 bg-[#FDF1D5] text-[#D49800] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest w-max mb-6">
                        <span className="text-lg">✨</span> NITANGGO MEMBER REWARD
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#2B2118] leading-[1.1] tracking-tight mb-2">
                        Buy 5,<br/>
                        Get 2 Drinks<br/>
                        <span className="text-[#F8C83B]">FREE!</span>
                    </h1>
                    

                    {/* Dessert Image Placement */}
                    <div className="hidden md:block absolute -right-10 top-0 w-[550px] pointer-events-none z-[-1]">
                        <img src="/assets/hero.png" alt="Dessert Banner" className="w-full h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-105" onError={(e) => (e.currentTarget.style.display = 'none')} />
                        {/* Fallback floating elements if image fails */}
                        <div className="absolute top-10 right-20 text-4xl opacity-20">🍰</div>
                        <div className="absolute bottom-20 left-20 text-5xl opacity-20">🧋</div>
                    </div>
                </div>

                {/* ========================================= */}
                {/* TOP RIGHT: USER DASHBOARD (COL SPAN 5) */}
                {/* ========================================= */}
                <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col gap-8">
                    
                    {/* Header User */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-extrabold text-[#2B2118] mb-1">Hai, {member.name}! 👋</h2>
                            <p className="text-[#7A6A60] text-sm font-medium">Selamat datang kembali di Nitanggo Bitez</p>
                        </div>
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F8C83B] bg-yellow-50 flex items-center justify-center text-xl">
                            🧑‍🍳
                        </div>
                    </div>

                    {/* Progress Area */}
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <h3 className="font-bold text-[#2B2118] text-sm">Progress Member Kamu</h3>
                            <span className="text-[#2B2118] font-bold text-xs">{currentProgress} / {maxProgress} Pembelian</span>
                        </div>
                        
                        <div className="relative flex items-center justify-between px-2 mb-4">
                            {/* Gray Background Line */}
                            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-100 -translate-y-1/2 z-0"></div>
                            {/* Active Yellow Line */}
                            <div 
                                className="absolute top-1/2 left-0 h-[3px] bg-[#F8C83B] -translate-y-1/2 z-0 transition-all duration-500" 
                                style={{ width: `${(currentProgress / maxProgress) * 100}%` }}
                            ></div>

                            {/* Step Nodes */}
                            {[1, 2, 3, 4, 5].map((step) => (
                                <div key={step} className="relative z-10 bg-white rounded-full p-1">
                                    {step <= currentProgress || (progressCount > 0 && currentProgress === 0) ? (
                                        <div className="w-7 h-7 rounded-full bg-[#F8C83B] flex items-center justify-center text-white shadow-sm">
                                            {step === 5 ? '🎁' : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                    ) : (
                                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border-2 border-gray-200 text-gray-400 font-bold text-xs">
                                            {step}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className="text-[#7A6A60] text-xs font-medium text-center bg-gray-50 py-2 rounded-lg">
                            {currentProgress === 0 && progressCount > 0 
                                ? "Selamat! Kamu bisa menukarkan 2 Drinks FREE!" 
                                : `${remaining} pembelian lagi untuk mendapatkan 2 Drinks FREE!`}
                        </p>
                    </div>

                    {/* Member Card & Barcode */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-[#2B2118] text-sm">Kartu Member Digital</h3>
                            <a href="#" className="text-gray-400 text-xs hover:text-gray-600 font-medium">Lihat Kartu &gt;</a>
                        </div>
                        
                        <div className="flex gap-4">
                            {/* Card Visual */}
                            <div className="bg-[#F8C83B] rounded-2xl p-4 flex-1 flex flex-col justify-between relative overflow-hidden shadow-md">
                                <div className="flex items-center gap-1.5">
                                    <div className="bg-[#2B2118] p-1 rounded">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                                    </div>
                                    <span className="font-black text-[9px] tracking-widest text-[#2B2118]">NITANGGO BITEZ</span>
                                </div>
                                <div className="my-3">
                                    <h4 className="text-lg font-black tracking-tight leading-none text-[#2B2118]">MEMBER CARD</h4>
                                    <p className="text-[10px] font-bold text-[#2B2118]/80">Buy 5 Get 2 Drinks FREE!</p>
                                </div>
                                <div className="flex justify-between items-end border-t border-[#2B2118]/10 pt-2 text-[#2B2118]">
                                    <div>
                                        <p className="text-[8px] uppercase font-bold opacity-60">Member Since</p>
                                        <p className="text-[10px] font-bold">{member.since}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] uppercase font-bold opacity-60">Member ID</p>
                                        <p className="text-[10px] font-bold">{member.id}</p>
                                    </div>
                                </div>
                                {/* Small floating cake */}
                                <div className="absolute bottom-2 right-2 text-3xl opacity-80 mix-blend-overlay">🍰</div>
                            </div>
                            

                        </div>
                    </div>
                </div>

                {/* ========================================= */}
                {/* BOTTOM LEFT: KEUNTUNGAN (COL SPAN 4) */}
                {/* ========================================= */}
                <div className="lg:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-[#2B2118] mb-8 text-lg">Keuntungan Menjadi Member</h3>
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-[#FDF1D5] rounded-full flex items-center justify-center text-xl mb-3 shadow-inner">🧋</div>
                            <h4 className="font-bold text-[#2B2118] text-sm mb-1 leading-tight">Buy 5 Get<br/>2 Drinks FREE</h4>
                            <p className="text-[10px] text-[#7A6A60]">Dapatkan 2 minuman gratis setiap 5 pembelian.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-[#FDF1D5] rounded-full flex items-center justify-center text-xl mb-3 shadow-inner">🎁</div>
                            <h4 className="font-bold text-[#2B2118] text-sm mb-1 leading-tight">Promo Spesial<br/>Member</h4>
                            <p className="text-[10px] text-[#7A6A60]">Akses promo dan diskon khusus untuk member.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-[#FDF1D5] rounded-full flex items-center justify-center text-xl mb-3 shadow-inner">🎂</div>
                            <h4 className="font-bold text-[#2B2118] text-sm mb-1 leading-tight">Reward<br/>Ulang Tahun</h4>
                            <p className="text-[10px] text-[#7A6A60]">Kejutan spesial di hari ulang tahunmu!</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-[#FDF1D5] rounded-full flex items-center justify-center text-xl mb-3 shadow-inner">🏅</div>
                            <h4 className="font-bold text-[#2B2118] text-sm mb-1 leading-tight">Poin Tidak<br/>Kedaluwarsa</h4>
                            <p className="text-[10px] text-[#7A6A60]">Progress pembelianmu tersimpan selamanya.</p>
                        </div>
                    </div>
                </div>

                {/* ========================================= */}
                {/* BOTTOM MIDDLE: RIWAYAT (COL SPAN 5) */}
                {/* ========================================= */}
                <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="font-bold text-[#2B2118] mb-6 text-lg">Riwayat Pembelian</h3>
                    
                    <div className="flex-1 overflow-auto pr-2">
                        <table className="w-full text-left text-xs">
                            <thead className="text-[#7A6A60] font-semibold border-b border-gray-100">
                                <tr>
                                    <th className="pb-3 font-medium">Tanggal</th>
                                    <th className="pb-3 font-medium">Produk</th>
                                    <th className="pb-3 font-medium">Outlet</th>
                                    <th className="pb-3 font-medium">Total</th>
                                    <th className="pb-3 font-medium text-center">Status</th>
                                    <th className="pb-3 font-medium text-center">Progress</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {!orders || orders.length === 0 ? (
                                    <tr><td colSpan={6} className="py-8 text-center text-gray-400">Belum ada riwayat pesanan.</td></tr>
                                ) : (
                                    orders.slice(0, 4).map((order: any, idx: number) => {
                                        // Fake progress calculation for visual purposes
                                        const fakeProgress = (progressCount - idx) > 0 ? ((progressCount - idx - 1) % 5) + 1 : 1;
                                        
                                        return (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded bg-yellow-50 flex items-center justify-center text-[10px]">☕</div>
                                                        <div>
                                                            <p className="font-bold text-[#2B2118] whitespace-nowrap">
                                                                {new Date(order.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                            </p>
                                                            <p className="text-[9px] text-[#7A6A60]">
                                                                {new Date(order.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 text-[#2B2118] font-medium max-w-[100px] truncate">
                                                    {Array.isArray(order.items) ? order.items.map((i:any) => i.name).join(', ') : 'Produk'}
                                                </td>
                                                <td className="py-3 text-[#7A6A60]">
                                                    Nitanggo Bitez<br/><span className="text-[9px]">{order.pickup_method || 'Margonda'}</span>
                                                </td>
                                                <td className="py-3 font-bold text-[#2B2118]">
                                                    Rp{new Intl.NumberFormat('id-ID').format(order.total_amount)}
                                                </td>
                                                <td className="py-3 text-center">
                                                    <span className="text-[#10B981] font-bold text-[10px]">{order.status === 'completed' ? 'Selesai' : order.status}</span>
                                                </td>
                                                <td className="py-3 text-center">
                                                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F8C83B] text-white font-bold text-[10px]">
                                                        {fakeProgress}/5
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                        <p className="text-[#D49800] text-xs font-bold flex items-center justify-center gap-2">
                            🎁 {currentProgress === 0 && progressCount > 0 ? 'Klaim 2 Drinks FREE kamu sekarang!' : `${remaining} pembelian lagi untuk mendapatkan 2 Drinks FREE!`}
                        </p>
                    </div>
                </div>

                {/* ========================================= */}
                {/* BOTTOM RIGHT: PROMO BANNER (COL SPAN 3) */}
                {/* ========================================= */}
                <div className="lg:col-span-3 bg-[#F8C83B] rounded-[2rem] p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
                    
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl font-extrabold text-[#2B2118] mb-2 leading-tight">
                            {currentProgress === 0 && progressCount > 0 ? 'Selamat! 🎁' : 'Yeaayy! 🎉'}
                        </h3>
                        <p className="text-[#2B2118] text-sm font-medium">
                            {currentProgress === 0 && progressCount > 0 ? (
                                <>
                                    Saatnya menukarkan<br/>
                                    <span className="text-xl font-black">Reward Kamu!</span><br/>
                                    Dapatkan 2 Drinks FREE
                                </>
                            ) : (
                                <>
                                    Kamu tinggal<br/>
                                    <span className="text-xl font-black">{remaining} pembelian lagi</span><br/>
                                    untuk dapat 2 Drinks FREE!
                                </>
                            )}
                        </p>
                    </div>
                    
                    <div className="relative z-10 flex justify-center py-6">
                        <img src="/assets/cups_illustration.png" alt="Drinks" className="w-32 h-auto drop-shadow-xl" onError={(e) => (e.currentTarget.style.display = 'none')} />
                        {/* Fallback floating icons */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 text-5xl opacity-40 mix-blend-overlay">
                            🥤🧋
                        </div>
                    </div>

                    <button className="relative z-10 w-full bg-[#2B2118] hover:bg-black text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                        Pesan Sekarang 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

                {/* ========================================= */}
                {/* FULL WIDTH: SYARAT & KETENTUAN (COL SPAN 12) */}
                {/* ========================================= */}
                <div className="lg:col-span-12 bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100 mt-2">
                    <h3 className="font-bold text-[#2B2118] mb-6 text-xl flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#D49800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Syarat & Ketentuan
                    </h3>
                    <ul className="space-y-3 text-[#7A6A60] text-sm md:text-base leading-relaxed pl-5 list-decimal marker:font-bold marker:text-[#F8C83B]">
                        <li className="pl-2">Setiap pembelian produk mendapatkan 1 stamp.</li>
                        <li className="pl-2">Reward dapat diklaim setelah mencapai 5 stamp.</li>
                        <li className="pl-2">Reward berupa 2 minuman GRATIS.</li>
                        <li className="pl-2">Stamp berlaku selama 30 hari sejak stamp pertama diperoleh.</li>
                        <li className="pl-2">Setelah reward diklaim, jumlah stamp akan kembali ke 0.</li>
                        <li className="pl-2">Reward tidak dapat diuangkan atau dipindahtangankan.</li>
                        <li className="pl-2">Jenis minuman mengikuti ketersediaan menu Nitanggo Bitez.</li>
                        <li className="pl-2">Nitanggo Bitez berhak mengubah program membership sewaktu-waktu dengan pemberitahuan sebelumnya.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}