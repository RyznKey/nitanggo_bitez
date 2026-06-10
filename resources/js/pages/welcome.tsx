import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import '../../css/styles.css';

// Import Semua Komponen
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeView from '../components/Views/HomeView';
import MenuView from '../components/Views/MenuView';
import MembershipView from '../components/Views/MembershipView';
import AboutView from '../components/Views/AboutView';
import OrderGuideView from '../components/Views/OrderGuideView';

// Export Type agar bisa diakses oleh MembershipView
export type OrderHistoryItem = {
    id: number;
    productName: string;
    outlet: string;
    price: string;
    date: string;
    time: string;
};

export default function Welcome() {
    const [currentView, setCurrentView] = useState('view-home');
    const [progressCount, setProgressCount] = useState(4);
    const maxProgress = 5;

    const [member, setMember] = useState({
        name: 'Rizki',
        since: 'Mei 2024',
        id: 'NTG2412-5678',
    });

    const [isHowModalOpen, setIsHowModalOpen] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });
    const [orderHistory, setOrderHistory] = useState<OrderHistoryItem[]>([]);

    // --- Handlers (Fungsi Logika Tetap Di Sini) ---
    const handleJoinMember = () => {
        const inputName = prompt('Siapa nama lengkap Anda?', member.name);
        if (inputName && inputName.trim() !== '') {
            setMember({
                name: inputName.trim(),
                since: 'Hari Ini',
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
            setProgressCount((prev) => prev + 1);
            const outlets = [
                'Nitanggo Bitez Margonda',
                'Nitanggo Bitez UI Depok',
            ];
            const randomOutlet =
                outlets[Math.floor(Math.random() * outlets.length)];
            const now = new Date();

            const newOrder = {
                id: Date.now(),
                productName: productName,
                outlet: randomOutlet,
                price: '10.000',
                date: now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
                time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            };

            setOrderHistory((prevHistory) => [newOrder, ...prevHistory].slice(0, 6));
            alert(`Pembelian ${productName} berhasil dicatat!`);
        } else {
            alert(
                `Progres reward kamu sudah penuh (5/5)! Silakan klaim reward gratis terlebih dahulu. 🥤`,
            );
            setCurrentView('view-membership');
        }
    };

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

    return (
        <>
            <Head title="Nitanggo Bitez - Member Rewards Dashboard" />

            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
            <div className="bg-blob blob-3"></div>

            {/* Komponen Navigasi */}
            <Navbar currentView={currentView} setCurrentView={setCurrentView} />

            <main className="container">
                {/* Render Views Secara Dinamis berdasarkan State */}
                <HomeView
                    isActive={currentView === 'view-home'}
                    setCurrentView={setCurrentView}
                />
                <MenuView
                    isActive={currentView === 'view-menu'}
                    handleOrderItem={handleOrder}
                />
                <MembershipView
                    isActive={currentView === 'view-membership'}
                    member={member}
                    progressCount={progressCount}
                    maxProgress={maxProgress}
                    orderHistory={orderHistory}
                    handleJoinMember={handleJoinMember}
                    handleClaimReward={handleClaimReward}
                    setIsHowModalOpen={setIsHowModalOpen}
                    setIsCardModalOpen={setIsCardModalOpen}
                />
                
                <AboutView isActive={currentView === 'view-about'} />
                <OrderGuideView isActive={currentView === 'view-order'} />
            </main>

            {/* Komponen Footer */}
            <Footer setCurrentView={setCurrentView} />

            {/* Catatan: Untuk Modals (isHowModalOpen dan isCardModalOpen) Anda juga dapat 
                memisahkannya ke file /Components/Modals/ jika diinginkan menggunakan pola yang sama */}
        </>
    );
}
