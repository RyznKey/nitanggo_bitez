import React, { useState } from 'react';

type NavbarProps = {
    currentView: string;
    setCurrentView: (view: string) => void;
};

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (view: string) => {
        setCurrentView(view);
        setIsMobileMenuOpen(false); 
    };

    return (
        <header className="flex justify-between items-center relative py-4 px-5 bg-transparent z-[9999] w-full max-w-[1440px] mx-auto">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 no-underline text-espresso" onClick={(e) => { e.preventDefault(); handleNavClick('view-home'); }}>
                <img src="/assets/NITANGGO.jpeg" alt="Nitanggo Bitez Logo" className="w-[44px] h-[44px] rounded-full object-cover bg-honey-light border-2 border-espresso" />
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
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-home' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-honey after:rounded-full' : ''}`} 
                           onClick={(e) => { e.preventDefault(); handleNavClick('view-home'); }}>
                           Beranda
                        </a>
                    </li>
                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-menu' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-honey after:rounded-full' : ''}`} 
                           onClick={(e) => { e.preventDefault(); handleNavClick('view-menu'); }}>
                           Menu
                        </a>
                    </li>
                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0 relative">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-membership' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-honey after:rounded-full' : ''}`} 
                           onClick={(e) => { e.preventDefault(); handleNavClick('view-membership'); }}>
                           Membership 
                           <span className="absolute -top-[8px] -right-[32px] bg-honey text-white text-[0.6rem] font-bold py-[2px] px-[7px] rounded-l-[10px] rounded-tr-[10px] leading-none whitespace-nowrap shadow-[0_4px_8px_rgba(245,185,43,0.25)] animate-bounce pointer-events-none">
                               Baru!
                           </span>
                        </a>
                    </li>
                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-about' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-honey after:rounded-full' : ''}`} 
                           onClick={(e) => { e.preventDefault(); handleNavClick('view-about'); }}>
                           Tentang Kami
                        </a>
                    </li>
                    <li className="w-full text-left border-b border-[#EBE3D5] pb-3 last:border-none last:pb-0 md:w-auto md:border-none md:pb-0">
                        <a href="#" 
                           className={`no-underline text-text-main font-medium text-[0.95rem] transition-all duration-300 py-2 inline-block relative hover:text-espresso ${currentView === 'view-order' ? 'text-espresso font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-honey after:rounded-full' : ''}`} 
                           onClick={(e) => { e.preventDefault(); handleNavClick('view-order'); }}>
                           Cara Order
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}