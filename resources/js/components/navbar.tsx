import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

type NavbarProps = {
    currentView: string;
    setCurrentView: (view: string) => void;
    user?: any;
};

export default function Navbar({ currentView, setCurrentView, user }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (view: string) => {
        setCurrentView(view);
        setIsMobileMenuOpen(false); 
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${scrolled ? 'bg-[#fcf8f2]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'}`}>
            <div className="max-w-[1440px] mx-auto px-5 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 no-underline text-espresso" onClick={(e) => {
 e.preventDefault(); handleNavClick('view-home'); 
}}>
                <img src="/assets/NITANGGO.png" alt="Nitanggo Bitez Logo" className="w-[44px] h-[44px] rounded-full object-cover border border-espresso" />
                <div className="font-extrabold text-[1.4rem] tracking-[0.5px] uppercase leading-none">
                    NITANGGO <span className="block text-[0.85rem] font-medium text-text-muted mt-1">BITEZ</span>
                </div>
            </a>

            {/* Hamburger Button (Mobile) */}
            <button 
                className="md:hidden flex flex-col justify-around w-[30px] h-[24px] bg-transparent border-none cursor-pointer z-[10000] p-[5px] -m-[5px]" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation"
            >
                <span className={`w-full h-[3px] bg-[#2B2118] rounded-full transition-all duration-300 ease-in-out origin-left ${isMobileMenuOpen ? 'rotate-45' : ''}`}></span>
                <span className={`w-full h-[3px] bg-[#2B2118] rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 w-0' : ''}`}></span>
                <span className={`w-full h-[3px] bg-[#2B2118] rounded-full transition-all duration-300 ease-in-out origin-left ${isMobileMenuOpen ? '-rotate-45' : ''}`}></span>
            </button>

            {/* Navigation Links */}
            <nav className={`
                absolute top-full left-0 w-full bg-[#FAF6EE] shadow-md p-5 rounded-b-[16px] z-[9998] transition-all duration-300 ease-in-out 
                md:static md:w-auto md:bg-transparent md:shadow-none md:p-0 md:rounded-none md:opacity-100 md:visible md:pointer-events-auto md:translate-y-0
                ${isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-5'}
            `}>
                <ul className="flex flex-col gap-5 w-full m-0 p-0 md:flex-row md:gap-8 md:items-center">
                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-home' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F8C83B] after:rounded-full' : ''}`} 
                           onClick={(e) => {
 e.preventDefault(); handleNavClick('view-home'); 
}}>
                           Beranda
                        </a>
                    </li>
                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-menu' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F8C83B] after:rounded-full' : ''}`} 
                           onClick={(e) => {
 e.preventDefault(); handleNavClick('view-menu'); 
}}>
                           Menu
                        </a>
                    </li>

                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-membership' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F8C83B] after:rounded-full' : ''}`} 
                           onClick={(e) => {
                               e.preventDefault(); handleNavClick('view-membership'); 
                           }}>
                           Membership
                        </a>
                    </li>

                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-about' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F8C83B] after:rounded-full' : ''}`} 
                           onClick={(e) => {
                               e.preventDefault(); handleNavClick('view-about'); 
                           }}>
                           Tentang Kami
                        </a>
                    </li>
                    
                    {/* User Auth Links */}
                    <li className="w-full text-left md:w-auto md:ml-4 flex flex-col md:flex-row gap-3 pt-2 md:pt-0 border-t border-[#EBE3D5] md:border-t-0">
                        {user ? (
                            <div className="flex items-center gap-3 flex-wrap">
                                {!!user.is_admin && (
                                    <Link href="/admin/dashboard" className="text-sm font-semibold text-white bg-[#2B2118] px-4 py-2 rounded-full transition hover:bg-[#4A3B32]">
                                        Admin Panel
                                    </Link>
                                )}
                                <button 
                                    onClick={() => handleNavClick('view-membership')} 
                                    className="text-sm font-semibold text-[#D49800] bg-[#FDF1D5] px-4 py-2 rounded-full transition hover:bg-[#F8C83B] hover:text-[#2B2118] cursor-pointer border-none"
                                >
                                    Halo, {user.name.split(' ')[0]}
                                </button>
                                <Link href="/logout" method="post" as="button" className="text-sm font-medium text-[#7A6A60] hover:text-[#4A3B32]">
                                    Logout
                                </Link>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href="/login" className="text-sm font-medium text-[#4A3B32] hover:text-[#D49800]">
                                    Log in
                                </Link>
                                <Link href="/register" className="text-sm font-semibold text-[#2B2118] bg-[#F8C83B] px-4 py-2 rounded-full transition hover:bg-[#eab308]">
                                    Daftar Member
                                </Link>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
}