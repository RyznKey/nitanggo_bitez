import React from 'react';

type MenuViewProps = {
    isActive: boolean;
    handleOrderItem: (productName: string) => void;
};

export default function MenuView({ isActive, handleOrderItem }: MenuViewProps) {
    if (!isActive) return null;

    return (
        <div className="page-view active">
            <div className="section-title-center">
                <span className="home-tagline">DAFTAR MENU</span>
                <h3>Varian Best Seller Nitanggo Bitez ✨</h3>
            </div>
            <div className="featured-grid">
                {['Nyicheeze Tiramisu', 'Nyicheeze Premium Matcha', 'Creamy Chocolate Fudge'].map((item, index) => (
                    <div className="menu-card" key={index}>
                        <div className="menu-img-container">
                            <img src="/assets/produk.png" className="menu-item-img" alt={item} />
                        </div>
                        <div className="menu-card-body">
                            <h4>{item}</h4>
                            <div className="menu-footer">
                                <span className="menu-price">{item.includes('Matcha') ? 'Rp12.000' : 'Rp10.000'}</span>
                                <button className="btn-order-item" onClick={() => handleOrderItem(item)}>Pesan</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}