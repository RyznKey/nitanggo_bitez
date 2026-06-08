import React from 'react';
export default function OrderGuideView({ isActive }: { isActive: boolean }) {
    if (!isActive) return null;
    return (
        <div className="page-view active">
            <div className="section-title-center"><h3>Langkah Mudah Menikmati Manisnya Kuliner Kami 📦</h3></div>
            <ol style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-main)' }}>
                <li>Pilih varian dessert box favorit Anda di halaman Menu.</li>
                <li>Klik tombol <strong>Pesan</strong> untuk mensimulasikan transaksi.</li>
                <li>Kunjungi outlet fisik kami di Margonda atau UI Depok.</li>
            </ol>
        </div>
    );
}