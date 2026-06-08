import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import '../../css/styles.css'; // Sesuaikan path CSS Anda

export default function Welcome() {
    // --- State Variables (Pengganti variabel let di app.js) ---
    const [currentView, setCurrentView] = useState('view-home');
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
    const [toast, setToast] = useState({ show: false, message: '' });

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
            setCurrentView('view-membership');
        }
    };

    const handleOrderItem = handleOrder;

    const handleClaimReward = () => {
        if (progressCount === maxProgress) {
            alert(
                'Selamat! Reward gratis sudah berhasil diklaim. Silakan ambil minuman gratis Anda di kasir.',
            );
            setProgressCount(0);
        } else {
            alert(
                `Reward belum bisa diklaim. Kumpulkan ${maxProgress - progressCount} pembelian lagi.`,
            );
        }
    };

    const progressFillPercent = (progressCount / maxProgress) * 100;

    return (
        <>
            <Head title="Nitanggo Bitez - Member Rewards Dashboard" />

            {/* Background Decorative Blobs */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
            <div className="bg-blob blob-3"></div>

            {/* Header Nav */}
            <header>
                <a
                    href="#"
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentView('view-home');
                    }}
                >
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
                                className={
                                    currentView === 'view-home' ? 'active' : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentView('view-home');
                                }}
                            >
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={
                                    currentView === 'view-menu' ? 'active' : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentView('view-menu');
                                }}
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={
                                    currentView === 'view-membership'
                                        ? 'active'
                                        : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentView('view-membership');
                                }}
                            >
                                Membership{' '}
                                <span className="badge-new">Baru!</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={
                                    currentView === 'view-about' ? 'active' : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentView('view-about');
                                }}
                            >
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={
                                    currentView === 'view-order' ? 'active' : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentView('view-order');
                                }}
                            >
                                Cara Order
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main Container */}
            <main className="container">
                {/* --- VIEW: BERANDA --- */}
                <div
                    className={`page-view ${currentView === 'view-home' ? 'active' : ''}`}
                >
                    <section className="home-hero">
                        <div className="home-hero-content">
                            <span className="home-tagline">
                                🍰 DESSERT PREMIUM RASA LOYALITAS
                            </span>
                            <h2>
                                Rasakan Sensasi Dessert Box Terbaik & Creamy
                            </h2>
                            <p>
                                Nitanggo Bitez menyajikan aneka Nyicheeze, cake,
                                dan minuman segar berkualitas tinggi yang dibuat
                                dengan cinta untuk menemani momen manismu.
                            </p>
                            <div className="cta-group">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setCurrentView('view-menu')}
                                >
                                    Lihat Menu Populer
                                </button>
                                <button
                                    className="btn btn-outline"
                                    onClick={() =>
                                        setCurrentView('view-membership')
                                    }
                                >
                                    Gabung Membership
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* --- CTA BANNER SECTION --- */}
                    <section className="cta-banner-section">
                        <div className="cta-banner-bg-shape"></div>
                        <div className="cta-banner-content">
                            <h2>
                                Gabung Member Nitanggo & Dapatkan
                                <br />
                                Reward Spesial!
                            </h2>
                            <p>
                                Kumpulkan progres setiap kali Anda berbelanja.
                                Dapatkan 2 Minuman Gratis setelah 5<br />
                                pembelian pertama!
                            </p>
                            <button
                                className="btn-join-now"
                                onClick={() =>
                                    setCurrentView('view-membership')
                                }
                            >
                                Gabung Member Gratis Sekarang
                            </button>
                        </div>
                    </section>
                </div>

                {/* --- VIEW: MENU --- */}
                <div
                    className={`page-view ${currentView === 'view-menu' ? 'active' : ''}`}
                >
                    <div className="section-title-center">
                        <span className="home-tagline">DAFTAR MENU</span>
                        <h3>Varian Best Seller Nitanggo Bitez ✨</h3>
                    </div>

                    <div className="featured-grid">
                        {/* Item 1 */}
                        <div className="menu-card">
                            <div className="menu-img-container">
                                <img
                                    src="/assets/produk.png"
                                    className="menu-item-img"
                                    alt="Nyicheeze Tiramisu"
                                />
                            </div>
                            <div className="menu-card-body">
                                <h4>Nyicheeze Tiramisu</h4>
                                <div className="menu-footer">
                                    <span className="menu-price">Rp10.000</span>
                                    <button
                                        className="btn-order-item"
                                        onClick={() =>
                                            handleOrderItem(
                                                'Nyicheeze Tiramisu',
                                            )
                                        }
                                    >
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="menu-card">
                            <div className="menu-img-container">
                                <img
                                    src="/assets/produk.png"
                                    className="menu-item-img"
                                    alt="Nyicheeze Matcha"
                                />
                            </div>
                            <div className="menu-card-body">
                                <h4>Nyicheeze Premium Matcha</h4>
                                <div className="menu-footer">
                                    <span className="menu-price">Rp12.000</span>
                                    <button
                                        className="btn-order-item"
                                        onClick={() =>
                                            handleOrderItem(
                                                'Nyicheeze Premium Matcha',
                                            )
                                        }
                                    >
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="menu-card">
                            <div className="menu-img-container">
                                <img
                                    src="/assets/produk.png"
                                    className="menu-item-img"
                                    alt="Chocolate Fudge"
                                />
                            </div>
                            <div className="menu-card-body">
                                <h4>Creamy Chocolate Fudge</h4>
                                <div className="menu-footer">
                                    <span className="menu-price">Rp10.000</span>
                                    <button
                                        className="btn-order-item"
                                        onClick={() =>
                                            handleOrderItem(
                                                'Creamy Chocolate Fudge',
                                            )
                                        }
                                    >
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- VIEW: MEMBERSHIP --- */}
                <div
                    className={`page-view ${currentView === 'view-membership' ? 'active' : ''}`}
                >
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
                                    id="btn-join"
                                    onClick={handleJoinMember}
                                >
                                    <span id="btn-join-text">
                                        Ubah Profil / Gabung Member
                                    </span>
                                </button>
                                <button
                                    className="btn btn-outline"
                                    id="btn-how"
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
                            <h3 id="user-name-title">Hai, {member.name}! 👋</h3>

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
                                        id="progress-bar-fill"
                                        style={{
                                            width: `${(progressCount / maxProgress) * 100}%`,
                                        }}
                                    ></div>
                                </div>

                                <div className="progress-steps-container">
                                    {[1, 2, 3, 4].map((step) => (
                                        <div
                                            key={step}
                                            className={`progress-step ${progressCount >= step ? 'completed' : ''}`}
                                        >
                                            {step}
                                        </div>
                                    ))}
                                    <div
                                        className={`progress-step final-step ${progressCount === maxProgress ? 'completed claimable' : ''}`}
                                        id="final-step"
                                        onClick={handleClaimReward}
                                    >
                                        🎁
                                    </div>
                                </div>

                                <div
                                    className="progress-hint"
                                    id="progress-hint-text"
                                >
                                    {progressCount === maxProgress
                                        ? 'Selamat! Kupon reward sudah aktif. Klik ikon kado di atas untuk klaim minuman gratis! 🥤'
                                        : `Kurang ${maxProgress - progressCount} pembelian lagi untuk mendapatkan reward gratis 2 minuman.`}
                                </div>
                            </div>
                        </div>

                        <div className="member-digital-card">
                            <div className="card-brand">NITANGGO BITEZ</div>
                            <div className="card-type">LOYALTY MEMBER</div>
                            <div className="card-user-info">
                                <div className="card-label">MEMBER SINCE</div>
                                <div
                                    className="card-value"
                                    id="card-member-since"
                                >
                                    {member.since}
                                </div>
                            </div>
                            <div className="card-user-info">
                                <div className="card-label">MEMBER ID</div>
                                <div className="card-value" id="card-member-id">
                                    {member.id}
                                </div>
                            </div>
                            <div
                                className="card-barcode-area"
                                onClick={() => setIsCardModalOpen(true)}
                            >
                                <div className="barcode-line-container">
                                    <div className="barcode-mock-line"></div>
                                </div>
                                <div
                                    className="barcode-id"
                                    id="barcode-id-text"
                                >
                                    {member.id}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Riwayat Pembelian */}
                    <section className="history-section">
                        <div className="section-title">
                            <h3>Riwayat Transaksi Terakhir</h3>
                            <span className="history-badge">
                                6 Sesi Terakhir
                            </span>
                        </div>

                        <div className="table-responsive">
                            <table className="history-table">
                                <thead>
                                    <tr>
                                        <th>Waktu & Tanggal</th>
                                        <th>Produk Dessert</th>
                                        <th>Lokasi Outlet</th>
                                        <th>Total Item</th>
                                    </tr>
                                </thead>
                                <tbody id="history-tbody">
                                    {orderHistory.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                style={{
                                                    textAlign: 'center',
                                                    color: 'var(--text-muted)',
                                                    padding: '24px',
                                                }}
                                                id="history-hint-text"
                                            >
                                                Belum ada riwayat transaksi.
                                                Lakukan pembelian pada tab Menu
                                                di atas!
                                            </td>
                                        </tr>
                                    ) : (
                                        orderHistory.map((row) => (
                                            <tr key={row.id}>
                                                <td>
                                                    {row.date}{' '}
                                                    <span
                                                        style={{
                                                            color: 'var(--text-light)',
                                                            fontSize: '0.8rem',
                                                            marginLeft: '4px',
                                                        }}
                                                    >
                                                        {row.time}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div
                                                        className="col-produk-cell"
                                                        style={{
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                            gap: '8px',
                                                        }}
                                                    >
                                                        <img
                                                            src="/assets/produk.png"
                                                            alt="produk"
                                                            style={{
                                                                width: '28px',
                                                                height: '28px',
                                                                objectFit:
                                                                    'contain',
                                                            }}
                                                        />
                                                        <div>
                                                            {row.productName}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{row.outlet}</td>
                                                <td>Rp{row.price}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="history-bottom-banner"
                            id="history-bottom-banner"
                            style={{
                                display:
                                    progressCount === maxProgress
                                        ? 'block'
                                        : 'none',
                            }}
                        >
                            🎉 Progres penuh! Silakan lakukan penukaran reward
                            Anda di kasir.
                        </div>
                    </section>
                </div>

                {/* --- VIEW: TENTANG KAMI --- */}
                <div
                    className={`page-view ${currentView === 'view-about' ? 'active' : ''}`}
                >
                    <div className="section-title-center">
                        <h3>Kisah Nitanggo Bitez 🤎</h3>
                    </div>
                    <p
                        style={{
                            textAlign: 'center',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.7',
                            color: 'var(--text-main)',
                        }}
                    >
                        Berawal dari dapur rumahan, Nitanggo Bitez berkomitmen
                        menghadirkan cita rasa dessert premium yang manisnya pas
                        dan tidak bikin enek. Kami percaya setiap momen manis
                        berhak dirayakan dengan kualitas rasa terbaik.
                    </p>
                </div>

                {/* --- VIEW: CARA ORDER --- */}
                <div
                    className={`page-view ${currentView === 'view-order' ? 'active' : ''}`}
                >
                    <div className="section-title-center">
                        <h3>
                            Langkah Mudah Menikmati Manisnya Kuliner Kami 📦
                        </h3>
                    </div>
                    <ol
                        style={{
                            maxWidth: '500px',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            color: 'var(--text-main)',
                        }}
                    >
                        <li>
                            Pilih varian dessert box favorit Anda di halaman
                            Menu.
                        </li>
                        <li>
                            Klik tombol <strong>Pesan</strong> untuk
                            mensimulasikan transaksi dan menambahkan progres
                            loyalitas.
                        </li>
                        <li>
                            Kunjungi outlet fisik kami di Margonda atau UI Depok
                            untuk pengambilan pesanan secara langsung.
                        </li>
                    </ol>
                </div>
            </main>
            {/* --- FOOTER --- */}
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            {/* Pastikan path gambar logo sesuai */}
                            <img
                                src="/assets/produk.png"
                                alt="Nitanggo Bitez Logo"
                                className="footer-logo-icon"
                            />
                            <div className="footer-logo-text">
                                NITANGGO
                                <br />
                                <span>BITEZ</span>
                            </div>
                        </div>
                        <p className="brand-desc">
                            Menyediakan aneka cake, dessert, dan minuman dengan
                            kualitas terbaik dan cinta rasa rumahan yang khas.
                        </p>
                    </div>

                    <div className="footer-col links-col">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentView('view-home');
                                    }}
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentView('view-menu');
                                    }}
                                >
                                    Menu
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col links-col">
                        <h4>CUSTOMER CARE</h4>
                        <ul>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Syarat & Ketentuan</a>
                            </li>
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
                                <p>
                                    Reward bisa digunakan untuk semua minuman
                                    kesukaanmu dan dibagikan bersama teman-teman
                                    terdekat.
                                </p>
                            </div>
                            <div className="promo-image">
                                {/* Ganti src ini dengan gambar ilustrasi minuman Anda jika ada */}
                                <img
                                    src="/assets/produk.png"
                                    alt="Reward Drinks"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Nitanggo Bitez. All Rights Reserved.</p>
                    <p>Designed with 💛 for members</p>
                </div>
            </footer>

            {/* --- TOAST NOTIFICATION CONTAINER --- */}
            <div
                className={`toast-container ${toast.show ? 'show' : ''}`}
                id="toast-container"
            >
                {toast.message}
            </div>

            {/* --- MODAL: CARA KERJA --- */}
            <div
                className={`modal-overlay ${isHowModalOpen ? 'active' : ''}`}
                id="modal-how"
                onClick={(e) => {
                    if (e.currentTarget.id === 'modal-how')
                        setIsHowModalOpen(false);
                }}
            >
                <div className="modal-content">
                    <button
                        className="modal-close"
                        onClick={() => setIsHowModalOpen(false)}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <path
                                fill="currentColor"
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                            />
                        </svg>
                    </button>
                    <div className="modal-title">Cara Kerja Member Reward</div>
                    <div
                        className="modal-body"
                        style={{
                            alignItems: 'flex-start',
                            gap: '16px',
                            fontSize: '0.9rem',
                            lineHeight: '1.6',
                            color: 'var(--text-main)',
                        }}
                    >
                        <p>
                            Selamat bergabung di program loyalitas Nitanggo
                            Bitez! Berikut adalah langkah-langkah mudah untuk
                            menikmati reward spesial kami:
                        </p>
                        <ol
                            style={{
                                paddingLeft: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}
                        >
                            <li>
                                <strong>Beli Menu Pilihan:</strong> Lakukan
                                transaksi pembelian produk dessert atau cake
                                kesukaanmu di outlet resmi Nitanggo Bitez.
                            </li>
                            <li>
                                <strong>Tunjukkan Barcode Member:</strong> Scan
                                barcode digital member card kamu di kasir saat
                                membayar untuk mencatat progres pembelian.
                            </li>
                            <li>
                                <strong>Kumpulkan 5 Pembelian:</strong> Setiap
                                transaksi Rp10.000 atau lebih akan dihitung
                                sebagai 1 poin progres pada sistem dashboard
                                ini.
                            </li>
                            <li>
                                <strong>Klaim Reward Gratis:</strong> Setelah
                                mencapai 5 pembelian, tombol reward kado akan
                                aktif. Klik tombol tersebut untuk menukarkan
                                kupon dengan 2 minuman segar pilihan gratis di
                                kasir!
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* --- MODAL: DIGITAL CARD BARCODE --- */}
            <div
                className={`modal-overlay ${isCardModalOpen ? 'active' : ''}`}
                id="modal-card"
                onClick={(e) => {
                    if ((e.target as HTMLElement).id === 'modal-card')
                        setIsCardModalOpen(false);
                }}
            >
                <div
                    className="modal-content"
                    style={{ maxWidth: '360px', textAlign: 'center' }}
                >
                    <button
                        className="modal-close"
                        onClick={() => setIsCardModalOpen(false)}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <path
                                fill="currentColor"
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                            />
                        </svg>
                    </button>
                    <div className="modal-title">Barcode Member Digital</div>
                    <div className="modal-body" style={{ gap: '16px' }}>
                        <p
                            style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-muted)',
                            }}
                        >
                            Tunjukkan barcode ini kepada kasir Nitanggo Bitez
                            setiap kali melakukan transaksi pembayaran.
                        </p>
                        <div
                            style={{
                                background: '#2e221c',
                                padding: '24px 16px',
                                borderRadius: '12px',
                                margin: '10px 0',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                alignItems: 'center',
                            }}
                        >
                            {/* Simulasi garis barcode tebal-tipis */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '60px',
                                    background:
                                        'repeating-linear-gradient(90deg, #fff, #fff 4px, #000 4px, #000 8px, #fff 8px, #fff 10px, #000 10px, #000 12px)',
                                }}
                            ></div>
                            <span
                                style={{
                                    color: '#fff',
                                    letterSpacing: '4px',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    marginTop: '8px',
                                }}
                            >
                                {member.id}
                            </span>
                        </div>
                        <div
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                color: 'var(--success)',
                            }}
                        >
                            Status Card: ACTIVE
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
