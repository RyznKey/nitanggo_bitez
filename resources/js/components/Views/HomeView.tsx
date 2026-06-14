

type HomeViewProps = {
    isActive: boolean;
    setCurrentView: (view: string) => void;
    heroImage?: string;
    signatureImage?: string;
    membershipImage?: string;
    hampersImage?: string;
};

export default function HomeView({ isActive, setCurrentView, heroImage, signatureImage, membershipImage, hampersImage }: HomeViewProps) {
    if (!isActive) {
        return null;
    }

    return (
        <div className="relative min-h-screen bg-[#fcf8f2] overflow-hidden text-[#4A3B32] font-sans">
            
            {/* ====== KUSTOM ANIMASI ====== */}
            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(8px) rotate(-2deg); }
                }
                @keyframes pulse-soft {
                    0%, 100% { transform: scale(1); opacity: 0.9; }
                    50% { transform: scale(1.02); opacity: 1; }
                }
                .animate-float-1 { animation: float-slow 6s ease-in-out infinite; }
                .animate-float-2 { animation: float-delayed 7s ease-in-out infinite; }
                .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
            `}</style>

            {/* ====== TABURAN SPRINKLES (Disembunyikan di HP kecil agar tidak menutupi teks) ====== */}
            <div className="hidden sm:block absolute top-20 left-10 w-4 h-4 bg-[#F8C83B] rounded-full opacity-70 animate-float-1"></div>
            <div className="hidden md:block absolute top-40 right-20 w-3 h-3 bg-[#FCD34D] rounded-full opacity-60 animate-float-2"></div>
            <div className="hidden lg:block absolute top-1/3 left-1/4 w-5 h-5 bg-[#C2E9E6] rounded-full opacity-50 animate-float-2"></div>
            <div className="hidden sm:block absolute top-1/2 right-12 w-4 h-4 bg-[#F8C83B] rounded-full opacity-70 animate-float-1"></div>

            {/* ====== 1. HERO SECTION ====== */}
            {/* Menggunakan padding kecil di mobile (pt-24 pb-12) dan membesar di desktop (lg:pt-32 lg:pb-24) untuk kompensasi fixed navbar */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 lg:pt-32 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
                
                {/* Visual Utama: Di HP tampil di ATAS (order-1), di Desktop pindah ke KANAN (lg:order-2) */}
                <div className="relative flex justify-center items-center order-1 lg:order-2 animate-float-1 w-full">
                    {/* Piring diatur menggunakan max-w bertahap agar mengikuti lebar layar smartphone */}
                    <div className="relative w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[480px] aspect-[4/3] bg-[#F8C83B] rounded-[40px] sm:rounded-[80px] rotate-[-4deg] shadow-xl shadow-[#4A3B32]/5 flex items-center justify-center p-3 sm:p-4 transition-transform duration-500 hover:scale-105">
                        <div className="absolute inset-1.5 sm:inset-2 border border-white/40 rounded-[32px] sm:rounded-[70px]"></div>
                        <img 
                            src={heroImage || "/assets/hero.png"} 
                            alt="Cupcake Premium" 
                            className="w-[85%] h-auto rounded-[24px] sm:rounded-[40px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] transform rotate-[4deg] object-cover" 
                        />
                    </div>
                </div>

                {/* Konten Teks: Di HP tampil di BAWAH gambar (order-2), di Desktop pindah ke KIRI (lg:order-1) */}
                <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
                    <span className="inline-block bg-[#FDF1D5] border border-[#F8C83B] text-[#D49800] text-[10px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full tracking-wider uppercase">
                        🍰 DESSERT PREMIUM RASA LOYALITAS
                    </span>
                    {/* Font size bertahap dari text-3xl sampai text-6xl */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4A3B32] leading-[1.2] lg:leading-[1.15] tracking-tight">
                        Rasakan Sensasi <br />
                        <span className="text-[#D49800]">Dessert Box</span> Terbaik & Creamy
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-[#7A6A60] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Nitanggo Bitez menyajikan aneka Nyicheeze, cake, dan minuman segar berkualitas tinggi yang dibuat dengan cinta untuk menemani momen manismu.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                        <button 
                            onClick={() => setCurrentView('view-menu')}
                            className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#F8C83B] text-white font-bold rounded-2xl shadow-md shadow-[#E07A72]/20 transition-all duration-300 hover:bg-[#eab308] hover:-translate-y-0.5 cursor-pointer"
                        >
                            Lihat Menu Populer
                        </button>
                        <button 
                            onClick={() => setCurrentView('view-membership')}
                            className="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-[#D49800] font-bold rounded-2xl border-2 border-[#F8C83B] shadow-sm transition-all duration-300 hover:bg-[#FDF1D5] hover:-translate-y-0.5 cursor-pointer"
                        >
                            Gabung Membership
                        </button>
                    </div>
                </div>
            </section>

            {/* ====== 2. FEATURE BADGES ROW ====== */}
            {/* Di HP baris berbaris ke bawah (grid-cols-1), di tablet ke samping (md:grid-cols-3) */}
            <section className="relative max-w-5xl mx-auto px-4 sm:px-6 mb-16 lg:mb-24 z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 bg-white/70 backdrop-blur-md border border-white/60 p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] shadow-sm">
                    <div className="flex items-center gap-4 p-2 sm:p-3 rounded-2xl hover:bg-white/90 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDF1D5] flex items-center justify-center text-xl shadow-inner">🌟</div>
                        <div>
                            <h4 className="font-bold text-sm text-[#4A3B32]">Bahan Premium</h4>
                            <p className="text-xs text-[#9E8E83]">Kualitas bahan impor pilihan</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 sm:p-3 rounded-2xl hover:bg-white/90 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFF9E6] flex items-center justify-center text-xl shadow-inner">⏰</div>
                        <div>
                            <h4 className="font-bold text-sm text-[#4A3B32]">Selalu Segar</h4>
                            <p className="text-xs text-[#9E8E83]">Dibuat baru setiap harinya</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 sm:p-3 rounded-2xl hover:bg-white/90 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EBF7F6] flex items-center justify-center text-xl shadow-inner">💖</div>
                        <div>
                            <h4 className="font-bold text-sm text-[#4A3B32]">Rasa Otentik</h4>
                            <p className="text-xs text-[#9E8E83]">Resep rahasia super creamy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PEMISAH GELOMBANG (Tinggi diatur responsif h-[30px] ke h-[60px]) */}
            <div className="w-full overflow-hidden leading-[0] transform rotate-180 bg-[#fcf8f2]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] sm:h-[60px] fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.17,14.71,81.43,21.5c64.12,16.56,130,24.08,196,23.59A364.13,364.13,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            {/* ====== SECTION AREA PUTIH (SECTIONS BERSELING) ====== */}
            <div className="bg-white pt-6 pb-12 sm:pb-20 space-y-16 sm:space-y-24 lg:space-y-32">
                
                {/* SUB-SECTION 1 */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Gambar di atas pada mobile (order-1) */}
                    <div className="relative flex justify-center order-1">
                        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-[#FDF1D5] rounded-full -left-2 top-0 -z-0 animate-pulse-soft"></div>
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-[#FDF1D5] shadow-md z-10">
                            <img src={signatureImage || "/assets/menu_nyicheeze.png"} alt="Signature Nyicheeze" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* Teks di bawah pada mobile (order-2) */}
                    <div className="space-y-3 text-center md:text-left order-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A3B32]">Nyicheeze & Cake Signature</h3>
                        <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed">
                            Nikmati kelembutan krim keju berlapis premium berpadu dengan biskuit renyah dan buah segar pilihan di setiap lapisan wadah saji kami.
                        </p>
                    </div>
                </section>

                {/* SUB-SECTION 2 (Bagian yang bertukar posisi di Desktop) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Gambar tetap tampil di ATAS pada mobile (order-1), tapi di kanan pada desktop (md:order-2) */}
                    <div className="relative flex justify-center order-1 md:order-2">
                        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-[#FFF9E6] rounded-full -right-2 top-0 -z-0 animate-pulse-soft"></div>
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-[#FFF2CC] shadow-md z-10 animate-float-2">
                            <img src={membershipImage || "/assets/membership_banner.png"} alt="Reward Membership" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* Teks tampil di bawah gambar pada mobile (order-2), tapi di kiri pada desktop (md:order-1) */}
                    <div className="space-y-3 text-center md:text-left order-2 md:order-1">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A3B32]">Gabung Member Nitanggo & Dapatkan Reward Spesial!</h3>
                        <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed">
                            Kumpulkan progres poin otomatis setiap kali Anda berbelanja. Dapatkan bonus langsung berupa <span className="font-bold text-[#D49800]">2 Minuman Gratis</span> setelah melakukan 5 pembelian pertama!
                        </p>
                        <div className="pt-2">
                            <button 
                                onClick={() => setCurrentView('view-membership')}
                                className="w-full sm:w-auto inline-block bg-[#2C211A] text-white font-bold px-6 py-3 rounded-xl transition-colors hover:bg-[#1A130E] cursor-pointer"
                            >
                                Gabung Member Gratis Sekarang
                            </button>
                        </div>
                    </div>
                </section>

                {/* SUB-SECTION 3 */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative flex justify-center order-1">
                        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-[#EBF7F6] rounded-full -left-2 top-0 -z-0 animate-pulse-soft"></div>
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-[#D1F0ED] shadow-md z-10">
                            <img src={hampersImage || "/assets/catering_dessert.png"} alt="Custom Hampers" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-3 text-center md:text-left order-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A3B32]">Hantaran & Momen Manismu</h3>
                        <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed">
                            Nitanggo Bitez siap memeriahkan hari ulang tahun, pesta pernikahan, atau kumpul keluarga Anda melalui paket hampers dan box kustom yang didesain cantik penuh estetika.
                        </p>
                    </div>
                </section>
                
                {/* ====== NEW SECTION: CARA ORDER ====== */}
                <section id="cara-order" className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 lg:pt-16 pb-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block bg-[#FFF9E6] border border-[#FCD34D] text-[#D97706] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase mb-3">
                            MUDAH & CEPAT
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A3B32]">
                            Langkah Mudah Menikmati <br className="hidden sm:block" />
                            <span className="text-[#D49800]">Manisnya Kuliner Kami</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                        {/* Step 1 */}
                        <div className="group relative bg-[#fcf8f2] rounded-[32px] p-8 sm:p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-[#F8C83B]/30 border border-transparent hover:border-[#F8C83B]">
                            <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-black text-[#D49800] shadow-sm">1</div>
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-white rounded-full flex items-center justify-center text-5xl sm:text-6xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#D49800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#4A3B32] mb-3">Pilih Varian</h3>
                            <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed">
                                Telusuri halaman <strong>Menu</strong> kami dan temukan dessert box atau minuman segar favorit Anda.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="group relative bg-[#FDF1D5] rounded-[32px] p-8 sm:p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-[#F8C83B]/20 border border-transparent hover:border-[#F8C83B]">
                            <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-black text-[#D49800] shadow-sm">2</div>
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-white rounded-full flex items-center justify-center text-5xl sm:text-6xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#D49800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#4A3B32] mb-3">Pesan & Bayar</h3>
                            <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed">
                                Klik tombol <strong>Pesan</strong>, isi data, dan selesaikan pembayaran dengan mudah menggunakan QRIS.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="group relative bg-[#FFF9E6] rounded-[32px] p-8 sm:p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-[#FCD34D]/30 border border-transparent hover:border-[#FCD34D]">
                            <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-black text-[#D49800] shadow-sm">3</div>
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-white rounded-full flex items-center justify-center text-5xl sm:text-6xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#D49800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#4A3B32] mb-3">Nikmati Langsung</h3>
                            <p className="text-sm sm:text-base text-[#7A6A60] leading-relaxed">
                                Kunjungi outlet kami di <strong>Margonda atau UI Depok</strong> untuk menikmati pesanan Anda, atau tunggu di rumah!
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* ====== FOOTER BOUNDARY ====== */}
            
        </div>
    );
}