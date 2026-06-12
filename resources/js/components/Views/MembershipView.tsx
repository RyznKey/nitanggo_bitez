import React from 'react';

type OrderHistoryItem = {
    id: number;
    productName: string;
    outlet: string;
    price: string;
    date: string;
    time: string;
};

type MembershipProps = {
    isActive: boolean;
    member: { name: string; since: string; id: string };
    progressCount: number;
    maxProgress: number;
    orderHistory: OrderHistoryItem[];
    handleJoinMember: () => void;
    setIsHowModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MembershipView({ 
    isActive, member, progressCount, maxProgress, orderHistory, handleJoinMember, setIsHowModalOpen, setIsCardModalOpen
}: MembershipProps) {
    if (!isActive) return null;

    return (
        <div className="page-view active animate-fadeIn">
            {/* --- HEADER USER --- */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-extrabold text-[#2B2118]">Hai, {member.name}! 👋</h2>
                    <p className="text-gray-500 text-sm">Selamat datang kembali di Nitanggo Bitez</p>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                    <img src="/assets/produk.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* --- SECTION: PROGRESS --- */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="font-bold text-[#2B2118]">Progress Member Kamu</h3>
                        <p className="text-[#E68A00] text-sm font-semibold mt-1">
                            {maxProgress - progressCount} pembelian lagi untuk mendapatkan <span className="underline">2 Drinks FREE!</span>
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-gray-400 font-bold">{progressCount} / {maxProgress} Pembelian</span>
                    </div>
                </div>

                {/* Progress Bar Line */}
                <div className="relative flex items-center justify-between mt-10 mb-4 px-2">
                    {/* Gray Background Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                    {/* Active Orange Line */}
                    <div 
                        className="absolute top-1/2 left-0 h-1 bg-[#F8C83B] -translate-y-1/2 z-0 transition-all duration-500" 
                        style={{ width: `${(progressCount / (maxProgress)) * 100}%` }}
                    ></div>

                    {/* Step Nodes */}
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className="relative z-10">
                            {step <= progressCount ? (
                                // Node Selesai (Checkmark)
                                <div className="w-8 h-8 rounded-full bg-[#F8C83B] flex items-center justify-center border-4 border-white shadow-sm">
                                    {step === 5 ? '🎁' : (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            ) : (
                                // Node Belum Selesai
                                <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center border-4 border-gray-100 text-gray-300 font-bold text-xs`}>
                                    {step === 5 ? '🎁' : step}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SECTION: CARD & BARCODE --- */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-[#2B2118]">Kartu Member Digital</h3>
                    <a href="#" className="text-gray-400 text-sm hover:text-gray-600 font-medium">Lihat Kartu &gt;</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Digital Card (Kiri) */}
                    <div className="relative group cursor-pointer">
                        <div className="bg-[#F8C83B] rounded-[2rem] p-8 h-64 flex flex-col justify-between text-[#2B2118] relative overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                            {/* Logo Top */}
                            <div className="flex items-center gap-2">
                                <div className="bg-[#2B2118] p-1.5 rounded-lg">
                                    <img src="/public/assets/tiramisu.png" className="w-5 h-5 invert" alt="Logo" />
                                </div>
                                <span className="font-black text-xs tracking-widest">NITANGGO BITEZ</span>
                            </div>

                            {/* Center Info */}
                            <div className="mb-4">
                                <h4 className="text-2xl font-black tracking-tight leading-none">MEMBER CARD</h4>
                                <p className="text-sm font-bold opacity-80">Buy 5 Get 2 Drinks FREE!</p>
                            </div>

                            {/* Bottom Info */}
                            <div className="flex justify-between items-end border-t border-[#2B2118]/10 pt-4">
                                <div>
                                    <p className="text-[10px] uppercase font-bold opacity-60">Member Since</p>
                                    <p className="text-xs font-bold">{member.since}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase font-bold opacity-60">Member ID</p>
                                    <p className="text-xs font-bold">{member.id}</p>
                                </div>
                            </div>

                            {/* Floating Badge Kado (Icon bawah kanan kartu) */}
                            <div className="absolute bottom-6 right-6 w-14 h-14 bg-[#FAF6EE] rounded-2xl shadow-xl flex items-center justify-center border-4 border-[#F8C83B] transform rotate-3">
                                <span className="text-2xl">🍰</span>
                            </div>
                        </div>
                    </div>

                    {/* Barcode Area (Kanan) */}
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-100 rounded-[2rem] p-8">
                        <p className="text-xs font-bold text-gray-500 mb-4">Tunjukkan barcode ini saat pembayaran</p>
                        
                        {/* Simulasi Barcode Realistis */}
                        <div className="flex items-center gap-[2px] bg-white p-4 h-24 mb-4">
                            {[2, 1, 4, 1, 2, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 2, 4, 2].map((w, i) => (
                                <div key={i} className={`bg-black h-full`} style={{ width: `${w}px` }}></div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-lg font-black tracking-[0.3em] text-[#2B2118]">{member.id}</p>
                            <p className="text-[10px] text-gray-400 mt-1">Berlaku di seluruh outlet Nitanggo Bitez</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}