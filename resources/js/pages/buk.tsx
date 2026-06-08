import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import '../../css/styles.css'; // Sesuaikan path CSS Anda

export default function Welcome() {
    // --- State Variables (Pengganti variabel let di app.js) ---
    const [view, setView] = useState('membership'); // 'home' atau 'membership'
    const [progressCount, setProgressCount] = useState(4);
    const maxProgress = 5;

    const [member, setMember] = useState({
        name: 'Rizki',
        since: 'Mei 2024',
        id: 'NTG2412-5678',
    });

    type OrderHistoryItem = {
        id: number;
        productName: string;
        outlet: string;
        price: string;
        date: string;
        time: string;
    };

    // State untuk Modal
    const [isHowModalOpen, setIsHowModalOpen] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);

    // STATE BARU: Untuk menggantikan `insertHistoryRow` di Vanilla JS
    const [orderHistory, setOrderHistory] = useState<OrderHistoryItem[]>([]);

    // --- Handlers ---
    const handleJoinMember = () => {
        const inputName = prompt('Siapa nama lengkap Anda?', member.name);
        if (inputName && inputName.trim() !== '') {
            setMember({
                name: inputName.trim(),
                since: 'Hari Ini', // Anda bisa gunakan logic Date di sini
                id:
                    'NTG' +
                    Math.floor(1000 + Math.random() * 9000) +
                    '-' +
                    Math.floor(1000 + Math.random() * 9000),
            });
            alert(`Akun Member Anda berhasil diperbarui! 🎉`);
        }
    };

    const handleOrder = (productName: string) => {
        if (progressCount < maxProgress) {
            // Tambah progres
            setProgressCount((prev) => prev + 1);

            // Generate data outlet random (Sesuai dengan logika Vanilla JS Anda)
            const outlets = [
                'Nitanggo Bitez Margonda',
                'Nitanggo Bitez UI Depok',
            ];
            const randomOutlet =
                outlets[Math.floor(Math.random() * outlets.length)];

            // Buat objek riwayat baru
            const now = new Date();
            const newOrder = {
                id: Date.now(), // ID unik untuk React key
                productName: productName, // Ini productName yang sebelumnya error
                outlet: randomOutlet,
                price: '10.000',
                date: now.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                }),
                time: now.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
            };

            // Masukkan ke array history di urutan paling atas (maksimal 6 riwayat seperti di Vanilla JS)
            setOrderHistory((prevHistory) =>
                [newOrder, ...prevHistory].slice(0, 6),
            );

            alert(`Pembelian ${productName} berhasil dicatat!`);
        } else {
            alert(
                `Progres reward kamu sudah penuh (5/5)! Silakan klaim reward gratis terlebih dahulu. 🥤`,
            );
            setView('membership');
        }
    };

    const progressFillPercent = (progressCount / maxProgress) * 100;

    return (
        <>
            <Head title="Nitanggo Bitez - Member Rewards" />

            {/* Background Decorative Blobs */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
            <div className="bg-blob blob-3"></div>

            {/* Header Nav */}
            <header>
                <a href="#" className="logo">
                    <img
                        src="/assets/produk.png"
                        alt="Nitanggo Bitez Logo"
                        className="logo-icon"
                    />
                    <div className="logo-text">
                        NITANGGO <span>BITEZ</span>
                    </div>
                </a>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a
                                href="#"
                                className={view === 'home' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setView('home');
                                }}
                            >
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={
                                    view === 'membership' ? 'active' : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setView('membership');
                                }}
                            >
                                Membership{' '}
                                <span className="badge-new">Baru!</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="container">
                {/* --- VIEW: BERANDA --- */}
                {view === 'home' && (
                    <div className="page-view active">
                        <section className="home-hero">
                            <div className="home-hero-content">
                                <span className="home-tagline">
                                    🍰 DESSERT PREMIUM RASA LOYALITAS
                                </span>
                                <h2>
                                    Rasakan Sensasi Dessert Box Terbaik & Creamy
                                </h2>
                                <p>
                                    Nitanggo Bitez menyajikan aneka Nyicheeze,
                                    cake, dan minuman segar...
                                </p>
                                <div className="cta-group">
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => setView('membership')}
                                    >
                                        Mulai Kumpulkan Reward
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="home-featured">
                            <div className="section-title-center">
                                <h3>Menu Terfavorit Kami 🌟</h3>
                            </div>
                            <div className="featured-grid">
                                <div className="menu-card">
                                    <div className="menu-img-container">
                                        <img
                                            src="/assets/produk.png"
                                            className="menu-item-img"
                                            alt="Menu"
                                        />
                                    </div>
                                    <div className="menu-card-body">
                                        <h4>Nyicheeze Tiramisu</h4>
                                        <div className="menu-footer">
                                            <span className="menu-price">
                                                Rp10.000
                                            </span>
                                            <button
                                                className="btn-order-item"
                                                onClick={() =>
                                                    handleOrder(
                                                        'Nyicheeze Tiramisu',
                                                    )
                                                }
                                            >
                                                Pesan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* --- VIEW: MEMBERSHIP --- */}
                {view === 'membership' && (
                    <div className="page-view active">
                        <section className="top-section">
                            <div className="hero-content">
                                <h1>
                                    Buy 5,
                                    <br />
                                    Get 2 Drinks
                                    <br />
                                    <span className="free-badge">FREE!</span>
                                </h1>
                                <div className="cta-group">
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleJoinMember}
                                    >
                                        <span id="btn-join-text">
                                            Ubah Profil / Gabung Member
                                        </span>
                                    </button>
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => setIsHowModalOpen(true)}
                                    >
                                        Lihat Cara Kerja
                                    </button>
                                </div>
                            </div>

                            <div className="image-presentation">
                                <div className="hero-main-img-container">
                                    <img
                                        src="/assets/produk.png"
                                        alt="Desserts Platter"
                                        className="hero-main-img"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="dashboard-grid">
                            <div className="user-card">
                                <h3 id="user-name-title">
                                    Hai, {member.name}! 👋
                                </h3>
                                <div className="progress-section">
                                    <div className="progress-header">
                                        <span>Progres Rewardmu</span>
                                        <span id="progress-text-ratio">
                                            {progressCount} / {maxProgress}{' '}
                                            Pembelian
                                        </span>
                                    </div>
                                    <div className="progress-bar-container">
                                        <div
                                            className="progress-bar-fill"
                                            style={{
                                                width: `${progressFillPercent}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Digital Card Preview */}
                            <div className="member-digital-card">
                                <div>Member Since: {member.since}</div>
                                <div>ID: {member.id}</div>
                                <button
                                    className="btn btn-outline"
                                    onClick={() => setIsCardModalOpen(true)}
                                >
                                    Lihat Barcode
                                </button>
                            </div>
                        </section>
                    </div>
                )}
            </main>

            {/* --- MODALS --- */}
            {isHowModalOpen && (
                <div
                    className="modal-overlay active"
                    onClick={(e) => {
                        if (
                            (e.target as HTMLElement).classList.contains(
                                'modal-overlay',
                            )
                        )
                            setIsHowModalOpen(false);
                    }}
                >
                    <div className="modal-content">
                        <button
                            className="modal-close"
                            onClick={() => setIsHowModalOpen(false)}
                        >
                            X
                        </button>
                        <div className="modal-title">
                            Cara Kerja Member Reward
                        </div>
                        <div className="modal-body">
                            <p>
                                Beli 5 menu pilihan, kumpulkan progres, dan
                                dapatkan 2 minuman gratis!
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {isCardModalOpen && (
                <div
                    className="modal-overlay active"
                    onClick={(e) => {
                        if (
                            (e.target as HTMLElement).classList.contains(
                                'modal-overlay',
                            )
                        )
                            setIsCardModalOpen(false);
                    }}
                >
                    <div className="modal-content">
                        <button
                            className="modal-close"
                            onClick={() => setIsCardModalOpen(false)}
                        >
                            X
                        </button>
                        <div className="modal-title">Barcode Member Anda</div>
                        <div
                            className="modal-body"
                            style={{ textAlign: 'center' }}
                        >
                            <h3>{member.id}</h3>
                            <p>Tunjukkan ID ini kepada kasir Nitanggo Bitez</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
