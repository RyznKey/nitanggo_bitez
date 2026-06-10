import React from 'react';

export default function Footer({ setCurrentView }: { setCurrentView: (v: string) => void }) {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Isi dari elemen Footer yang sama persis dengan yang ada di gambar & kode Anda sebelumnya */}
                <div className="footer-col brand-col">
                     <div className="footer-logo">
                          <img src="/assets/produk.png" className="footer-logo-icon" />
                          <div className="footer-logo-text">NITANGGO<br /><span>BITEZ</span></div>
                     </div>
                     <p className="brand-desc">Menyediakan aneka cake, dessert, dan minuman...</p>
                </div>
                <div className="footer-col links-col">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('view-home'); }}>Beranda</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('view-menu'); }}>Menu</a></li>
                        </ul>
                    </div>
                    <div className="footer-col links-col">
                        <h4>CUSTOMER CARE</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Syarat & Ketentuan</a></li>
                        </ul>
                    </div>
                    <div className="footer-col links-col">
                        <h4>OUTLET KAMI</h4>
                        <ul>
                            <li>Kantin SMK Telkom Purwokerto</li>
                            <li>Kantin DC Telkom Purwokerto</li>
                        </ul>
                    </div>
                    <div className="footer-col promo-col">
                        <div className="footer-promo-card">
                            <div className="promo-text">
                                <h4>Traktir teman? Pakai reward!</h4>
                                <p>Reward bisa digunakan untuk semua minuman kesukaanmu dan dibagikan bersama teman-teman terdekat.</p>
                            </div>
                            <div className="promo-image">
                                {/* Ganti src ini dengan gambar ilustrasi minuman Anda jika ada */}
                                <img src="/assets/produk.png" alt="Reward Drinks" />
                            </div>
                        </div>
                    </div>

            </div>
            <div className="footer-bottom">
                    <p>&copy; 2026 Nitanggo Bitez. All Rights Reserved.</p>
                    <p>Designed with 💛 for members</p>
                </div>
        </footer>
    );
}