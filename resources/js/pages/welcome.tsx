import { Head, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
// import '../../css/styles.css';
// Import Semua Komponen
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import AboutView from '../components/Views/AboutView';
import HomeView from '../components/Views/HomeView';
import MembershipView from '../components/Views/MembershipView';
import MenuView from '../components/Views/MenuView';

export default function Welcome() {
    const { auth, products, promo, orders, defaultView, hampersImage } = usePage<any>().props;
    const user = auth?.user;
    
    const [currentView, setCurrentView] = useState(defaultView || 'view-home');
    const progressCount = user?.purchases_count || 0;
    const maxProgress = 5;

    const member = user ? {
        name: user.name,
        since: new Date(user.created_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
        id: `NTG-${user.id.toString().padStart(4, '0')}`,
    } : null;



    return (
        <>
            <Head title="Nitanggo Bitez" />

            {/* Global Layout Wrapper (Menggantikan styling `body` dari CSS) */}
            <div className="relative flex flex-col min-h-screen font-sans text-[#3d2f26] bg-[#fcf8f2]">
                
                {/* Background Blobs Converted to Tailwind Arbitrary Values */}
                <div className="absolute w-100 h-100 rounded-full -z-10 blur-[40px] -top-[100px] -left-[100px] bg-[radial-gradient(circle,rgba(245,185,43,0.1)_0%,rgba(252,248,242,0)_70%)] pointer-events-none"></div>
                <div className="absolute w-100 h-100 rounded-full -z-10 blur-[40px] top-[300px] -right-[100px] bg-[radial-gradient(circle,rgba(245,185,43,0.1)_0%,rgba(252,248,242,0)_70%)] pointer-events-none"></div>
                <div className="absolute w-100 h-100 rounded-full -z-10 blur-[40px] bottom-[100px] left-[10%] bg-[radial-gradient(circle,rgba(245,185,43,0.1)_0%,rgba(252,248,242,0)_70%)] pointer-events-none"></div>

                {/* Komponen Navigasi */}
                <Navbar currentView={currentView} setCurrentView={setCurrentView} user={user} />

                {/* Main Container (Menggantikan kombinasi style .container di css dengan utility grid & flex) */}
                <main className="grid flex-grow w-full grid-cols-1 mx-auto max-w-none gap-[40px]">
                    {/* Render Views Secara Dinamis berdasarkan State */}
                    <HomeView
                        isActive={currentView === 'view-home'}
                        setCurrentView={setCurrentView}
                        hampersImage={hampersImage}
                    />
                    <MenuView
                        isActive={currentView === 'view-menu'}
                        user={user}
                        products={products}
                        promo={promo}
                    />
                    <AboutView isActive={currentView === 'view-about'} />
                    <MembershipView
                        isActive={currentView === 'view-membership'}
                        user={user}
                        orders={auth?.orders || orders}
                        member={member}
                        progressCount={progressCount}
                        maxProgress={maxProgress}
                    />
                    
                    <AboutView isActive={currentView === 'view-about'} />
                </main>

                {/* Komponen Footer */}
                <Footer setCurrentView={setCurrentView} />
            </div>
        </>
    );
}