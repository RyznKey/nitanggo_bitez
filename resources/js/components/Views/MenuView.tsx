import React from 'react';

type MenuViewProps = {
    isActive: boolean;
    handleOrderItem: (productName: string) => void;
};

// 1. Data menu dengan properti gambar yang bisa diatur per menu
const daftarMenu = [
    {
        name: 'Nyicheeze Tiramisu',
        price: 'Rp15.000',
        image: '/assets/produk_tiramisu.png', // Ubah path gambar di sini
    },
    {
        name: 'Nyicheeze Premium Cheese',
        price: 'Rp15.000',
        image: '/assets/produk.png',  // Ubah path gambar di sini
    },
    {
        name: 'Creamy Chocolate Fudge',
        price: 'Rp15.000',
        image: '/assets/produk.png', // Ubah path gambar di sini
    },
    // Anda bisa tambah menu baru di sini...
];

export default function MenuView({ isActive, handleOrderItem }: MenuViewProps) {
    if (!isActive) return null;

    return (
        <div className="page-view active home-featured">
            
            <div className="section-title-center">
                <span className="home-tagline">DAFTAR MENU</span>
                <h3>Varian Best Seller Nitanggo Bitez ✨</h3>
            </div>
            
            <div className="featured-grid">
                {daftarMenu.map((item, index) => (
                    <div className="menu-card" key={index}>
                        
                        <div className="menu-img-container">
                            <img 
                                src={item.image} 
                                className="menu-item-img" 
                                alt={item.name} 
                                // Fallback otomatis ke produk.png jika gambar tidak ditemukan
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/public/assets/tiramisu.png';
                                }}
                            />
                        </div>
                        
                        <div className="menu-card-body">
                            <h4>{item.name}</h4>
                            {/* Jika Anda ingin menambahkan rating atau deskripsi, bisa dimasukkan di sini */}
                            {/* <p>Deskripsi singkat menu...</p> */}
                            
                            <div className="menu-footer">
                                <span className="menu-price">{item.price}</span>
                                <button 
                                    className="btn-order-item" 
                                    onClick={() => handleOrderItem(item.name)}
                                >
                                    Pesan
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}