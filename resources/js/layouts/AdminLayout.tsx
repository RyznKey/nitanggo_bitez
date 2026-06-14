import { Link, usePage } from '@inertiajs/react';
import { Menu, X, LayoutDashboard, Package, Wallet, Users, Gift, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';

export default function AdminLayout({ children, title }: { children: React.ReactNode, title?: string }) {
    const { url } = usePage();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinks = [
        { name: 'Dashboard', href: '/admin/dashboard', active: url === '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Pesanan', href: '/admin/orders', active: url.startsWith('/admin/orders'), icon: <ShoppingCart size={20} /> },
        { name: 'Produk', href: '/admin/products', active: url.startsWith('/admin/products'), icon: <Package size={20} /> },
        { name: 'Arus Kas', href: '/admin/transactions', active: url.startsWith('/admin/transactions'), icon: <Wallet size={20} /> },
        { name: 'Pelanggan', href: '/admin/customers', active: url.startsWith('/admin/customers'), icon: <Users size={20} /> },
        { name: 'Promo', href: '/admin/settings/promo', active: url.startsWith('/admin/settings/promo'), icon: <Gift size={20} /> },
    ];

    return (
        <div className="flex h-screen bg-[#FFF5ED] font-sans overflow-hidden">
            
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r border-[#FDE8E7] shadow-sm z-20">
                <div className="p-6 border-b border-[#FDE8E7] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E07A72] text-white flex items-center justify-center rounded-xl font-bold shadow-md shadow-[#E07A72]/20">NB</div>
                    <span className="text-xl font-extrabold text-[#4A3B32]">Admin Panel</span>
                </div>
                
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                                link.active 
                                ? 'bg-[#FDE8E7] text-[#E07A72]' 
                                : 'text-[#7A6A60] hover:bg-[#FFF5ED] hover:text-[#4A3B32]'
                            }`}
                        >
                            <span className="text-xl">{link.icon}</span>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-[#FDE8E7] space-y-2">
                    <Link href="/" className="flex items-center justify-center w-full bg-[#FFF9E6] text-[#F5B92B] px-4 py-3 rounded-xl font-bold text-sm hover:bg-[#F5B92B] hover:text-white transition-colors">
                        Lihat Website
                    </Link>
                    <Link href="/admin/logout" method="post" as="button" className="flex items-center justify-center w-full text-red-500 hover:bg-red-50 px-4 py-3 rounded-xl font-bold text-sm transition-colors border border-transparent hover:border-red-100">
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Mobile Header & Overlay */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <header className="bg-white shadow-sm border-b border-[#FDE8E7] flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-30">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#E07A72] text-white flex items-center justify-center rounded-lg font-bold">NB</div>
                        <span className="font-extrabold text-[#4A3B32]">Admin</span>
                    </div>
                    <button onClick={() => setSidebarOpen(true)} className="p-2 text-[#4A3B32] bg-[#FFF5ED] rounded-lg">
                        <Menu size={20} />
                    </button>
                </header>

                {/* Mobile Sidebar Overlay */}
                {sidebarOpen && (
                    <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)}></div>
                )}

                {/* Mobile Sidebar Content */}
                <aside className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4 flex justify-between items-center border-b border-[#FDE8E7]">
                        <span className="font-extrabold text-[#4A3B32]">Menu Admin</span>
                        <button onClick={() => setSidebarOpen(false)} className="p-2 text-[#7A6A60] bg-[#FFF5ED] rounded-lg hover:text-red-500">
                            <X size={20} />
                        </button>
                    </div>
                    
                    <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                                    link.active 
                                    ? 'bg-[#FDE8E7] text-[#E07A72]' 
                                    : 'text-[#7A6A60] hover:bg-[#FFF5ED]'
                                }`}
                            >
                                <span className="text-lg">{link.icon}</span>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-[#FDE8E7] space-y-2">
                        <Link href="/" className="flex items-center justify-center w-full bg-[#FFF9E6] text-[#F5B92B] px-4 py-3 rounded-xl font-bold text-sm">
                            Lihat Website
                        </Link>
                        <Link href="/admin/logout" method="post" as="button" className="flex items-center justify-center w-full text-red-500 bg-red-50 px-4 py-3 rounded-xl font-bold text-sm">
                            Logout
                        </Link>
                    </div>
                </aside>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden pt-[73px] md:pt-0">
                {title && (
                    <header className="bg-white/50 backdrop-blur-md border-b border-[#FDE8E7] px-6 py-5 sticky top-0 z-10 hidden md:block">
                        <h1 className="text-2xl font-extrabold text-[#4A3B32]">{title}</h1>
                    </header>
                )}
                
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">
                    {/* Mobile Title */}
                    {title && (
                        <h1 className="text-xl font-extrabold text-[#4A3B32] mb-6 md:hidden">{title}</h1>
                    )}
                    
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
