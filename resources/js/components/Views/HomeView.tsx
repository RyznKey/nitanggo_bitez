import React from 'react';
import MenuView from './MenuView';

type HomeViewProps = {
    isActive: boolean;
    setCurrentView: (view: string) => void;
};

export default function HomeView({ isActive, setCurrentView }: HomeViewProps) {
    if (!isActive) return null;

    return (
        <div className="page-view active" style={{ backgroundImage: 'url(/assets/hero_dessert.png)', backgroundSize: 'cover', backgroundPosition: 'top', backgroundColor: 'var(--primary-light)' }}>
            <section className="home-hero" >
                <div className="home-hero-content">
                    <span className="home-tagline">🍰 DESSERT PREMIUM RASA LOYALITAS</span>
                    <h2>Rasakan Sensasi Dessert Box Terbaik & Creamy</h2>
                    <p>Nitanggo Bitez menyajikan aneka Nyicheeze, cake, dan minuman segar berkualitas tinggi yang dibuat dengan cinta untuk menemani momen manismu.</p>
                    <div className="cta-group">
                        <button className="btn btn-primary" onClick={() => setCurrentView('view-menu')}>Lihat Menu Populer</button>
                        <button className="btn btn-outline" onClick={() => setCurrentView('view-membership')}>Gabung Membership</button>
                    </div>
                </div>
            </section>
            
            {/* Bagian ini sudah diperbaiki (}} dihapus) */}
            <MenuView isActive={isActive} handleOrderItem={() => {}} />
            
            <section className="cta-banner-section">
                <div className="cta-banner-bg-shape"></div>
                <div className="cta-banner-content">
                    <h2>Gabung Member Nitanggo & Dapatkan<br />Reward Spesial!</h2>
                    <p>Kumpulkan progres setiap kali Anda berbelanja. Dapatkan 2 Minuman Gratis setelah 5<br />pembelian pertama!</p>
                    <button className="btn-join-now" onClick={() => setCurrentView('view-membership')}>Gabung Member Gratis Sekarang</button>
                </div>
            </section>
        </div>
    );
}