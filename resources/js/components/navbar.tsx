import React from 'react';

type NavbarProps = {
    currentView: string;
    setCurrentView: (view: string) => void;
};

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
    return (
        <header>
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); setCurrentView('view-home'); }}>
                <img src="/assets/produk.png" alt="Nitanggo Bitez Logo" className="logo-icon" />
                <div className="logo-text">
                    NITANGGO <span>BITEZ</span>
                </div>
            </a>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="#" className={currentView === 'view-home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentView('view-home'); }}>Beranda</a>
                    </li>
                    <li>
                        <a href="#" className={currentView === 'view-menu' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentView('view-menu'); }}>Menu</a>
                    </li>
                    <li>
                        <a href="#" className={currentView === 'view-membership' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentView('view-membership'); }}>
                            Membership <span className="badge-new">Baru!</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={currentView === 'view-about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentView('view-about'); }}>Tentang Kami</a>
                    </li>
                    <li>
                        <a href="#" className={currentView === 'view-order' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentView('view-order'); }}>Cara Order</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}