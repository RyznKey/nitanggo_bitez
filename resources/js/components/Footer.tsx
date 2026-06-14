import React from 'react';

export default function Footer({ setCurrentView }: { setCurrentView: (v: string) => void }) {
    return (
        <footer className="bg-[#fcf8f2] pt-15 pb-5 px-5 text-[#5c4d43] font-sans mt-auto">
            <div className="max-w-275 mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-7.5">
                
                {/* Brand Column */}
                <div className="flex-[1.5] min-w-62.5">
                    <div className="flex items-center gap-3 mb-4">
                        <img src="/assets/NITANGGO.png" alt="Logo" className="w-11.25 h-11.25 rounded-full border-2 border-[#2B2118] p-1 object-contain" />
                        <div className="font-extrabold text-[1.1rem] leading-[1.1] text-[#2B2118] uppercase">
                            NITANGGO<br /><span className="font-medium">BITEZ</span>
                        </div>
                    </div>
                    <p className="text-[0.9rem] leading-[1.6] text-[#796C63] m-0">
                        Menyediakan aneka cake, dessert, dan minuman...
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex-1 min-w-37.5">
                    <h4 className="text-[0.9rem] font-extrabold mb-4 text-[#2B2118] uppercase tracking-[0.5px]">QUICK LINKS</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li><a href="#" onClick={(e) => {
 e.preventDefault(); setCurrentView('view-home'); 
}} className="text-[0.9rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800]">Beranda</a></li>
                        <li><a href="#" onClick={(e) => {
 e.preventDefault(); setCurrentView('view-menu'); 
}} className="text-[0.9rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800]">Menu</a></li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div className="flex-1 min-w-37.5">
                    <h4 className="text-[0.9rem] font-extrabold mb-4 text-[#2B2118] uppercase tracking-[0.5px]">CUSTOMER CARE</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li><a href="#" className="text-[0.9rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800]">FAQ</a></li>
                        <li><a href="#" className="text-[0.9rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800]">Syarat & Ketentuan</a></li>
                    </ul>
                </div>

                {/* Outlet Kami */}
                <div className="flex-1 min-w-37.5">
                    <h4 className="text-[0.9rem] font-extrabold mb-4 text-[#2B2118] uppercase tracking-[0.5px]">OUTLET KAMI</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li className="text-[0.9rem] text-[#7A6A60]">Kantin SMK Telkom Purwokerto</li>
                        <li className="text-[0.9rem] text-[#7A6A60]">Kantin DC Telkom Purwokerto</li>
                    </ul>
                </div>

                {/* Promo Card */}
                <div className="flex-2 min-w-[320px]">
                    <div className="bg-[#FDF1D5] rounded-[16px] p-6 flex items-center gap-5 border border-[#F8C83B]/30">
                        <div className="flex-1">
                            <h4 className="mt-0 mb-2 text-[1.1rem] text-[#2B2118] font-bold">Traktir teman? Pakai reward!</h4>
                            <p className="m-0 text-[0.85rem] leading-[1.5] text-[#7A6A60]">
                                Reward bisa digunakan untuk semua minuman kesukaanmu dan dibagikan bersama teman-teman terdekat.
                            </p>
                        </div>
                        <div>
                            <img src="/assets/produk.png" alt="Reward Drinks" className="w-[80px] h-auto object-contain" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="max-w-[1100px] mt-[50px] mx-auto pt-6 border-t border-[#EBE3D5] flex flex-col md:flex-row justify-between items-center gap-4 text-[0.85rem] text-[#A39B94] font-medium text-center md:text-left">
                <p className="m-0">&copy; 2026 Nitanggo Bitez. All Rights Reserved.</p>
                <div className="flex items-center gap-4 md:gap-6">
                    <p className="m-0">Designed with 💛 for members</p>
                    <a href="/admin/login" className="text-[#A39B94] hover:text-[#D49800] transition-colors no-underline border-l border-[#EBE3D5] pl-4 md:pl-6">
                        Admin Portal
                    </a>
                </div>
            </div>
        </footer>
    );
}