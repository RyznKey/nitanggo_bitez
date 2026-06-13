import React from 'react';

export default function AboutView({ isActive }: { isActive: boolean }) {
    if (!isActive) {
        return null;
    }

    return (
        <div className="relative min-h-screen bg-[#FFF5ED] overflow-hidden text-[#4A3B32] font-sans pb-20">
            
            {/* ====== KUSTOM ANIMASI ====== */}
            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                @keyframes pulse-soft {
                    0%, 100% { transform: scale(1); opacity: 0.9; }
                    50% { transform: scale(1.02); opacity: 1; }
                }
                .animate-float-1 { animation: float-slow 6s ease-in-out infinite; }
                .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
            `}</style>

            {/* ====== TABURAN SPRINKLES (Disembunyikan di HP kecil) ====== */}
            <div className="hidden sm:block absolute top-20 left-10 w-4 h-4 bg-[#FBC6C1] rounded-full opacity-70 animate-float-1"></div>
            <div className="hidden md:block absolute top-40 right-20 w-3 h-3 bg-[#FCD34D] rounded-full opacity-60 animate-float-1"></div>
            <div className="hidden lg:block absolute bottom-1/3 left-1/4 w-5 h-5 bg-[#C2E9E6] rounded-full opacity-50 animate-float-1"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 lg:pt-20">
                
                {/* ====== HERO TENTANG KAMI ====== */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <span className="inline-block bg-[#FFF9E6] border border-[#FCD34D] text-[#D97706] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase mb-4">
                        DESSERT PREMIUM YANG CREAMY
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A3B32] mb-6 tracking-tight">
                        Tentang <span className="text-[#E07A72]">Nyicheeze</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[#7A6A60] leading-relaxed">
                        Nyicheeze adalah dessert yang memadukan gurihnya cream cheese premium dengan kelembutan biskuit, 
                        disajikan dalam cube-cup sehingga siap santap dan mudah dibawa kemana saja.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* ====== KENAPA BANYAK DISUKAI ====== */}
                    <div className="lg:col-span-5 bg-white rounded-[32px] p-8 sm:p-10 shadow-sm border border-white/60 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                        {/* Dekorasi Latar Belakang */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#FFF9E6] rounded-full opacity-50 animate-pulse-soft"></div>
                        
                        <h4 className="text-2xl font-extrabold text-[#4A3B32] mb-4 relative z-10">Kenapa banyak disukai?</h4>
                        <p className="text-base text-[#7A6A60] leading-relaxed mb-8 relative z-10">
                            Setiap suapan menghadirkan sensasi manis-gurih yang lumer di mulut, cocok untuk teman santai, 
                            hadiah, atau camilan favorit di mana pun Anda berada.
                        </p>
                        
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF7F6] flex items-center justify-center text-[#2DD4BF] text-sm mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-[#4A3B32] font-medium">Cube-cup praktis dan siap santap</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF7F6] flex items-center justify-center text-[#2DD4BF] text-sm mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-[#4A3B32] font-medium">Rasa creamy dengan tekstur biskuit lembut</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF7F6] flex items-center justify-center text-[#2DD4BF] text-sm mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-[#4A3B32] font-medium">Pas untuk berbagai momen spesial</span>
                            </li>
                        </ul>
                    </div>

                    {/* ====== 3 VARIAN RASA UNGGULAN ====== */}
                    <div className="lg:col-span-7">
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-[#4A3B32] mb-8 text-center lg:text-left">
                            3 Varian Rasa Unggulan
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                            
                            {/* Varian 01 */}
                            <div className="group relative bg-white/70 backdrop-blur-md rounded-[24px] p-6 sm:p-8 flex items-center gap-6 overflow-hidden border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#FBC6C1]/20 hover:bg-white">
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[120px] font-black text-[#FDE8E7]/40 z-0 group-hover:text-[#FBC6C1]/30 transition-colors duration-300 pointer-events-none">01</div>
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#FDE8E7] rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-[#E07A72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <h5 className="text-xl font-bold text-[#4A3B32] mb-2 group-hover:text-[#E07A72] transition-colors duration-300">Choco Cheeze</h5>
                                    <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed m-0">Perpaduan cokelat dan cream cheese gurih serta biskuit yang lembut.</p>
                                </div>
                            </div>

                            {/* Varian 02 */}
                            <div className="group relative bg-white/70 backdrop-blur-md rounded-[24px] p-6 sm:p-8 flex items-center gap-6 overflow-hidden border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#D1F0ED]/40 hover:bg-white">
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[120px] font-black text-[#EBF7F6]/60 z-0 group-hover:text-[#C2E9E6]/40 transition-colors duration-300 pointer-events-none">02</div>
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#EBF7F6] rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-[#2DD4BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8h-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2H3v2h2v4a2 2 0 002 2h10a2 2 0 002-2v-4h2V8zM8 20v2m4-2v2m4-2v2" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <h5 className="text-xl font-bold text-[#4A3B32] mb-2 group-hover:text-[#2DD4BF] transition-colors duration-300">Tiramisu Cheeze</h5>
                                    <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed m-0">Kelezatan aroma dan rasa kopi yang dipadukan dengan cream cheese yang gurih.</p>
                                </div>
                            </div>

                            {/* Varian 03 */}
                            <div className="group relative bg-white/70 backdrop-blur-md rounded-[24px] p-6 sm:p-8 flex items-center gap-6 overflow-hidden border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#FCD34D]/20 hover:bg-white">
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[120px] font-black text-[#FFF9E6]/60 z-0 group-hover:text-[#FDE68A]/40 transition-colors duration-300 pointer-events-none">03</div>
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#FFF9E6] rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <h5 className="text-xl font-bold text-[#4A3B32] mb-2 group-hover:text-[#D97706] transition-colors duration-300">Double Cheeze</h5>
                                    <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed m-0">Varian andalan pecinta keju dengan rasa gurih, creamy, dan melimpah parutan keju.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}