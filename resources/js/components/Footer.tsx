import React from 'react';

export default function Footer({ setCurrentView }: { setCurrentView: (v: string) => void }) {
    return (
        <footer className="bg-[#fcf8f2] pt-15 pb-8 px-5 text-[#5c4d43] font-sans mt-auto border-t border-[#EBE3D5]">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/assets/NITANGGO.png" alt="Logo" className="w-12 h-12 rounded-full border-2 border-[#2B2118] p-1 object-contain bg-white" />
                        <div className="font-extrabold text-[1.1rem] leading-[1.1] text-[#2B2118] uppercase">
                            NITANGGO<br /><span className="font-medium">BITEZ</span>
                        </div>
                        <div className="font-extrabold text-[1.1rem] leading-[1.1] text-[#2B2118] uppercase">
                            NITANGGO<br /><span className="font-medium">BITEZ</span>
                        </div>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed text-[#796C63] m-0 pr-4">
                        Dessert homemade yang dibuat dengan cinta untuk menemani manismu.
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                        {/* Logo Instagram */}
                        <a href="https://www.instagram.com/nitanggo.bitez?igsh=MWN6NnU2ejh4MzN2cg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#FDF1D5] text-[#D49800] flex items-center justify-center hover:bg-[#F8C83B] hover:text-white transition-colors shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </a>
                        {/* Logo WhatsApp */}
                        <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-[#FDF1D5] text-[#D49800] flex items-center justify-center hover:bg-[#F8C83B] hover:text-white transition-colors shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-[1rem] font-extrabold mb-5 text-[#2B2118] uppercase tracking-[0.5px]">Quick Links</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('view-home'); }} className="text-[0.95rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F8C83B]"></span> Beranda
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('view-menu'); }} className="text-[0.95rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F8C83B]"></span> Menu
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('view-membership'); }} className="text-[0.95rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F8C83B]"></span> Membership
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('view-about'); }} className="text-[0.95rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F8C83B]"></span> Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[0.95rem] text-[#7A6A60] no-underline transition-colors duration-300 hover:text-[#D49800] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F8C83B]"></span> Kontak
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Outlet Kami */}
                <div>
                    <h4 className="text-[1rem] font-extrabold mb-5 text-[#2B2118] uppercase tracking-[0.5px]">Mitra Kami</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-[#FDF1D5] p-1.5 rounded-full shrink-0">
                                <svg className="w-4 h-4 text-[#D49800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <span className="text-[0.95rem] text-[#7A6A60] leading-tight pt-1">Kantin SMK Telkom Purwokerto</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-[#FDF1D5] p-1.5 rounded-full shrink-0">
                                <svg className="w-4 h-4 text-[#D49800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <span className="text-[0.95rem] text-[#7A6A60] leading-tight pt-1">Kantin DC Telkom Purwokerto</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-[#FDF1D5] p-1.5 rounded-full shrink-0">
                                <svg className="w-4 h-4 text-[#D49800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <span className="text-[0.95rem] text-[#7A6A60] leading-tight pt-1">Kantin TT Telkom University</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="max-w-[1100px] mx-auto pt-6 border-t border-[#EBE3D5] flex flex-col md:flex-row justify-between items-center gap-4 text-[0.85rem] text-[#A39B94] font-medium text-center md:text-left">
                <p className="m-0">&copy; 2025 Nitanggo Bitez. All Rights Reserved.</p>
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