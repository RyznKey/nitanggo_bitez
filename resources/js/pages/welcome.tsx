import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
// import '../../css/styles.css';
// Import Semua Komponen
import Navbar from '../components/navbar';
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

    return (
        <>
            <Head title="Nitanggo Bitez" />

            {/* Global Layout Wrapper (Menggantikan styling `body` dari CSS) */}
            <div className="relative flex flex-col min-h-screen overflow-x-hidden font-sans text-[#3d2f26] bg-[#fcf8f2]">
                
                {/* Background Blobs Converted to Tailwind Arbitrary Values */}
                <div className="absolute w-100 h-100 rounded-full -z-10 blur-[40px] -top-[100px] -left-[100px] bg-[radial-gradient(circle,rgba(245,185,43,0.1)_0%,rgba(252,248,242,0)_70%)] pointer-events-none"></div>
                <div className="absolute w-100 h-100 rounded-full -z-10 blur-[40px] top-[300px] -right-[100px] bg-[radial-gradient(circle,rgba(245,185,43,0.1)_0%,rgba(252,248,242,0)_70%)] pointer-events-none"></div>
                <div className="absolute w-100 h-100 rounded-full -z-10 blur-[40px] bottom-[100px] left-[10%] bg-[radial-gradient(circle,rgba(245,185,43,0.1)_0%,rgba(252,248,242,0)_70%)] pointer-events-none"></div>

                {/* Komponen Navigasi */}
                <Navbar currentView={currentView} setCurrentView={setCurrentView} />

                {/* Main Container (Menggantikan kombinasi style .container di css dengan utility grid & flex) */}
                <main className="grid flex-grow w-full grid-cols-1 mx-auto max-w-none gap-[40px]">
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
                        setIsHowModalOpen={setIsHowModalOpen}
                        setIsCardModalOpen={setIsCardModalOpen}
                    />
                    
                    <AboutView isActive={currentView === 'view-about'} />
                    <OrderGuideView isActive={currentView === 'view-order'} />
                </main>

                {/* Komponen Footer */}
                <Footer setCurrentView={setCurrentView} />
            </div>
        </>
    );
}