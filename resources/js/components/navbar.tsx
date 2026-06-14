// resources/js/Components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { usePage, Link } from '@inertiajs/react';

type NavbarProps = {
    currentView: string;
    setCurrentView: (view: string) => void;
};

const navLinks = [
    { name: 'Beranda', view: 'view-home' },
    { name: 'Menu', view: 'view-menu' },
    { name: 'Membership', view: 'view-membership', badge: 'Baru!' },
    { name: 'Tentang Kami', view: 'view-about' },
];

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Mengambil global props dari Inertia (termasuk status Auth User)
    const { auth } = usePage().props as any; 

    // Mencegah halaman belakang bisa di-scroll saat menu mobile terbuka
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const handleNavClick = (view: string) => {
        setCurrentView(view);
        setIsMobileMenuOpen(false); 
    };

    // Menentukan URL Dashboard berdasarkan struktur web.php kamu {current_team}
    // Catatan: Pastikan current_team_id/slug dilempar dari backend (HandleInertiaRequests.php)
    const dashboardUrl = auth?.user?.current_team_id 
        ? `/${auth.user.current_team_id}/dashboard` 
        : '/1/dashboard'; // Fallback default team ID jika belum di-set

    return (
        <>
            {/* ====== HEADER UTAMA ====== */}
            <header className="fixed top-0 left-0 w-full z-[1000] bg-[#FAF6EE] shadow-sm md:bg-transparent md:shadow-none transition-all duration-300 ease-in-out">
                <div className="flex justify-between items-center py-4 px-5 max-w-[1440px] mx-auto w-full relative">
                    
                    {/* Logo Section */}
                    <a href="#" className="flex items-center gap-3 no-underline transition-all duration-300 hover:scale-105 group" onClick={(e) => { e.preventDefault(); handleNavClick('view-home'); }}>
                        <img 
                            src="/assets/NITANGGO.jpeg" 
                            alt="Nitanggo Bitez Logo" 
                            className="w-[44px] h-[44px] rounded-full object-cover bg-honey-light border-2 border-espresso transition-all duration-300 group-hover:border-pink-400 shadow-sm" 
                        />
                        <div className="text-left">
                            <div className="font-extrabold text-[1.4rem] tracking-[0.5px] uppercase leading-none text-espresso group-hover:text-pink-600 transition-colors duration-300">
                                NITANGGO
                            </div>
                            <span className="block text-[0.85rem] font-medium text-text-muted mt-1">BITEZ</span>
                        </div>
                    </a>

                    {/* Navigasi Desktop */}
                    <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
                        <ul className="flex items-center gap-6 lg:gap-8 m-0 p-0">
                            {navLinks.map((link) => (
                                <li key={link.view} className="relative group">
                                    <a href="#" 
                                       className={`no-underline font-medium text-[0.95rem] transition-all duration-300 py-2 inline-flex gap-2 items-center relative hover:text-pink-600 ${currentView === link.view ? 'text-pink-600 font-semibold' : 'text-espresso'}`} 
                                       onClick={(e) => { e.preventDefault(); handleNavClick(link.view); }}>
                                       
                                       {link.name}
                                       
                                       {link.badge && (
                                           <span className="absolute -top-[8px] -right-[32px] bg-[#F5B92B] text-white text-[0.6rem] font-bold py-[2px] px-[7px] rounded-l-[10px] rounded-tr-[10px] leading-none whitespace-nowrap shadow-[0_4px_8px_rgba(245,185,43,0.25)] animate-bounce pointer-events-none">
                                               {link.badge}
                                           </span>
                                       )}
                                       <span className={`absolute bottom-0 left-0 h-[3px] bg-pink-400 rounded-full transition-all duration-300 ease-in-out ${currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Area Tombol Kanan (Cek Status Auth) */}
                        <div className="flex items-center gap-3 ml-2 pl-6 border-l border-gray-300">
                            {auth?.user ? (
                                /* Jika sudah login: Tampilkan tombol Dashboard */
                                <Link 
                                    href={dashboardUrl}
                                    className="bg-pink-500 text-white font-semibold text-[0.95rem] py-2 px-6 rounded-full shadow-[0_4px_14px_0_rgba(236,72,153,0.39)] transition-all duration-300 hover:bg-pink-600 hover:scale-105 hover:shadow-[0_6px_20px_rgba(236,72,153,0.23)] focus:outline-none"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                /* Jika belum login: Tampilkan Masuk & Daftar */
                                <>
                                    <Link 
                                        href="/login" 
                                        className="text-espresso font-semibold text-[0.95rem] py-2 px-4 rounded-full hover:bg-gray-100 hover:text-pink-600 transition-all duration-300"
                                    >
                                        Masuk
                                    </Link>
                                    <Link 
                                        href="/register" 
                                        className="bg-pink-500 text-white font-semibold text-[0.95rem] py-2 px-6 rounded-full shadow-[0_4px_14px_0_rgba(236,72,153,0.39)] transition-all duration-300 hover:bg-pink-600 hover:scale-105 hover:shadow-[0_6px_20px_rgba(236,72,153,0.23)] focus:outline-none"
                                    >
                                        Daftar
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>

                    {/* Tombol Hamburger (Mobile) */}
                    <button 
                        className="md:hidden p-2 -mr-2 text-espresso hover:text-pink-500 transition-colors focus:outline-none z-[1100]" 
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Toggle Navigation"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* ====== BAGIAN MOBILE RESPONSIVE (SIDE DRAWER) ====== */}
            
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001] md:hidden transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel Mobile */}
            <div 
                className={`fixed top-0 right-0 h-[100dvh] w-[80%] max-w-[320px] bg-[#FAF6EE] z-[1002] shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header Mobile Menu */}
                <div className="flex items-center justify-between p-5 border-b border-[#EBE3D5]">
                    <span className="font-extrabold text-lg text-espresso tracking-wide">MENU</span>
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="p-2 -mr-2 text-text-muted hover:text-pink-500 transition-colors bg-gray-100 rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* List Menu Mobile */}
                <div className="flex-1 overflow-y-auto py-4 px-5 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <a 
                            key={link.view}
                            href="#"
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.view); }}
                            className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 no-underline ${currentView === link.view ? 'bg-pink-100 text-pink-600 font-bold' : 'text-espresso hover:bg-gray-100 font-medium'}`}
                        >
                            {link.name}
                            
                            {link.badge && (
                                <span className="bg-[#F5B92B] text-white text-[0.65rem] font-bold py-1 px-2 rounded-lg shadow-sm">
                                    {link.badge}
                                </span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Footer Mobile Menu (Cek Status Auth) */}
                <div className="p-5 border-t border-[#EBE3D5] bg-white flex flex-col gap-3">
                    {auth?.user ? (
                        <Link 
                            href={dashboardUrl}
                            className="flex justify-center items-center w-full bg-pink-500 text-white font-bold text-[1rem] py-3.5 rounded-xl shadow-md transition-all hover:bg-pink-600 active:scale-95 border-none"
                        >
                            Dashboard Profil
                        </Link>
                    ) : (
                        <>
                            <Link 
                                href="/login"
                                className="flex justify-center items-center w-full border-2 border-pink-500 text-pink-600 font-bold text-[1rem] py-3 rounded-xl transition-all hover:bg-pink-50 active:scale-95"
                            >
                                Masuk
                            </Link>
                            <Link 
                                href="/register"
                                className="flex justify-center items-center w-full bg-pink-500 text-white font-bold text-[1rem] py-3.5 rounded-xl shadow-md transition-all hover:bg-pink-600 active:scale-95 border-none"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}