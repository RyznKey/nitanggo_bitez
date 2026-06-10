import React, { useState } from 'react';

type NavbarProps = {
    currentView: string;
    setCurrentView: (view: string) => void;
};

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
    // State baru untuk mendeteksi menu terbuka/tertutup
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Fungsi klik menu: ubah tampilan halaman & tutup menu burger
    const handleNavClick = (view: string) => {
        setCurrentView(view);
        setIsMobileMenuOpen(false); 
    };

    return (
        <header className="main-header">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('view-home'); }}>
                <img src="/assets/produk.png" alt="Nitanggo Bitez Logo" className="logo-icon" />
                <div className="logo-text">NITANGGO <span>BITEZ</span></div>
            </a>

            {/* --- TOMBOL BURGER MENU (Hanya muncul di HP) --- */}
            <button 
                className="hamburger-btn" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation"
            >
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open-1' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open-2' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open-3' : ''}`}></span>
            </button>

            {/* --- NAVIGASI --- */}
            <nav className={isMobileMenuOpen ? 'nav-open' : ''}>
                <ul className="nav-links">
                    <li><a href="#" className={currentView === 'view-home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('view-home'); }}>Beranda</a></li>
                    <li><a href="#" className={currentView === 'view-menu' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('view-menu'); }}>Menu</a></li>
                    <li><a href="#" className={currentView === 'view-membership' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('view-membership'); }}>Membership <span className="badge-new">Baru!</span></a></li>
                    <li><a href="#" className={currentView === 'view-about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('view-about'); }}>Tentang Kami</a></li>
                    <li><a href="#" className={currentView === 'view-order' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('view-order'); }}>Cara Order</a></li>
                </ul>
            </nav>
        </header>
    );
}