import React from 'react';
import { OrderHistoryItem } from '../../../Pages/Welcome';

type MembershipProps = {
    isActive: boolean;
    member: { name: string; since: string; id: string };
    progressCount: number;
    maxProgress: number;
    orderHistory: OrderHistoryItem[];
    handleJoinMember: () => void;
    handleClaimReward: () => void;
    setIsHowModalOpen: (val: boolean) => void;
    setIsCardModalOpen: (val: boolean) => void;
};

export default function MembershipView({ 
    isActive, member, progressCount, maxProgress, orderHistory, 
    handleJoinMember, handleClaimReward, setIsHowModalOpen, setIsCardModalOpen 
}: MembershipProps) {
    if (!isActive) return null;

    return (
        <div className="page-view active">
            <section className="top-section">
                <div className="hero-content">
                    <h1>Buy 5,<br />Get 2 Drinks<br /><span className="free-badge">FREE!</span></h1>
                    <div className="cta-group">
                        <button className="btn btn-primary" onClick={handleJoinMember}><span>Ubah Profil / Gabung Member</span></button>
                        <button className="btn btn-outline" onClick={() => setIsHowModalOpen(true)}>Lihat Cara Kerja</button>
                    </div>
                </div>
                <div className="image-presentation">
                    <div className="hero-main-img-container">
                        <img src="/assets/produk.png" alt="Desserts Platter" className="hero-main-img" />
                    </div>
                </div>
            </section>

            <section className="dashboard-grid">
                <div className="user-card">
                    <h3>Hai, {member.name}! 👋</h3>
                    <div className="progress-section">
                        <div className="progress-header">
                            <span>Progres Rewardmu</span>
                            <span>{progressCount} / {maxProgress} Pembelian</span>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${(progressCount / maxProgress) * 100}%` }}></div>
                        </div>
                        <div className="progress-steps-container">
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className={`progress-step ${progressCount >= step ? 'completed' : ''}`}>{step}</div>
                            ))}
                            <div className={`progress-step final-step ${progressCount === maxProgress ? 'completed claimable' : ''}`} onClick={handleClaimReward}>🎁</div>
                        </div>
                        <div className="progress-hint">
                            {progressCount === maxProgress ? 'Selamat! Kupon reward sudah aktif. Klik ikon kado di atas untuk klaim minuman gratis! 🥤' : `Kurang ${maxProgress - progressCount} pembelian lagi untuk mendapatkan reward gratis 2 minuman.`}
                        </div>
                    </div>
                </div>

                <div className="member-digital-card">
                    <div className="card-brand">NITANGGO BITEZ</div>
                    <div className="card-type">LOYALTY MEMBER</div>
                    <div className="card-user-info"><div className="card-label">MEMBER SINCE</div><div className="card-value">{member.since}</div></div>
                    <div className="card-user-info"><div className="card-label">MEMBER ID</div><div className="card-value">{member.id}</div></div>
                    <div className="card-barcode-area" onClick={() => setIsCardModalOpen(true)}>
                        <div className="barcode-line-container"><div className="barcode-mock-line"></div></div>
                        <div className="barcode-id">{member.id}</div>
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="section-title">
                    <h3>Riwayat Transaksi Terakhir</h3><span className="history-badge">6 Sesi Terakhir</span>
                </div>
                <div className="table-responsive">
                    <table className="history-table">
                        <thead><tr><th>Waktu & Tanggal</th><th>Produk Dessert</th><th>Lokasi Outlet</th><th>Total Item</th></tr></thead>
                        <tbody>
                            {orderHistory.length === 0 ? (
                                <tr><td colSpan={4} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px' }}>Belum ada riwayat transaksi. Lakukan pembelian pada tab Menu di atas!</td></tr>
                            ) : (
                                orderHistory.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.date} <span style={{ color: 'var(--text-light)', fontSize: '0.8rem', marginLeft: '4px' }}>{row.time}</span></td>
                                        <td>
                                            <div className="col-produk-cell" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <img src="/assets/produk.png" alt="produk" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                                <div>{row.productName}</div>
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
                {progressCount === maxProgress && (
                    <div className="history-bottom-banner" style={{ display: 'block' }}>🎉 Progres penuh! Silakan lakukan penukaran reward Anda di kasir.</div>
                )}
            </section>
        </div>
    );
}