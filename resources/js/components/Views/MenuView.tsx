import React, { useState } from 'react';

type MenuViewProps = {
    isActive: boolean;
    className?: string;
    user?: any;
    products?: any[];
    promo?: any;
};

    // Menampilkan menu dinamis dari database
export default function MenuView({
    isActive,
    className,
    user,
    products = [],
    promo
}: MenuViewProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [cart, setCart] = useState<{
        name: string;
        priceNumber: number;
        quantity: number;
    }[]>([]);

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [formData, setFormData] = useState({
        namaLengkap: user ? user.name : '',
        whatsapp: '',
        catatan: '',
        metodePengambilan: 'Ambil di Kantin',
        alamatPengiriman: '',
    });

    if (!isActive) {
        return null;
    }

    const isMember = !!user;
    const isEligibleForDiscount = isMember && !!promo?.is_active;
    
    const formatRupiah = (angka: number) =>
        `Rp${new Intl.NumberFormat('id-ID').format(angka)}`;

    // Handler klik pesan (Tambah ke Keranjang)
    const onOrderClick = (name: string, priceNumber: number) => {
        let finalPrice = priceNumber;

        if (isEligibleForDiscount && promo?.discount) {
            finalPrice -= (priceNumber * (promo.discount / 100));
        }

        setCart((prev) => {
            const existing = prev.find(item => item.name === name);

            if (existing) {
                return prev.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item);
            }

            return [...prev, { name, priceNumber: finalPrice, quantity: 1 }];
        });
    };

    const handleCartOpen = () => {
        if (cart.length === 0) {
return;
}

        setIsFormOpen(true);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const updateQuantity = (name: string, delta: number) => {
        setCart((prev) => {
            const updated = prev.map(item => {
                if (item.name === name) {
                    return { ...item, quantity: item.quantity + delta };
                }
                return item;
            }).filter(item => item.quantity > 0);

            if (updated.length === 0) {
                setIsFormOpen(false);
            }
            return updated;
        });
    };

    // Kalkulasi Harga
    const ongkir = formData.metodePengambilan === 'Delivery' ? 4000 : 0;
    const subtotal = cart.reduce((total, item) => total + (item.priceNumber * item.quantity), 0);
    const totalPembayaran = subtotal + ongkir;

    // Generate Pesan WhatsApp
    const waNumber = '6285700655072';
    const cartItemsText = cart.map(item => `- ${item.name} (${item.quantity} pcs) - ${formatRupiah(item.priceNumber * item.quantity)}`).join('\n');
    const waMessage = `Halo Nitanggo Bitez! Saya ingin memesan:

*DETAIL PESANAN*
${cartItemsText}

Catatan: ${formData.catatan || '-'}

*INFORMASI PEMESAN*
Nama: ${formData.namaLengkap}
WA: ${formData.whatsapp}
Status: ${isMember ? 'Member' : 'Non-Member'}

*PENGIRIMAN*
Metode: ${formData.metodePengambilan}
${formData.metodePengambilan === 'Delivery' ? `Alamat: ${formData.alamatPengiriman}` : ''}

*RINGKASAN PEMBAYARAN*
Subtotal: ${formatRupiah(subtotal)}
Ongkir: ${formatRupiah(ongkir)}
*Total Pembayaran: ${formatRupiah(totalPembayaran)}*

Saya akan melakukan pembayaran menggunakan QRIS. Mohon konfirmasinya ya!`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    return (
        <div
            className={`/* Base Styles */ w-full flex-col gap-10 transition-all duration-500 ease-in-out ${isActive ? 'flex translate-y-0 opacity-100' : 'hidden translate-y-4 opacity-0'} ${className} px-[5%] pt-32 pb-20`}
            // style={{ height: '100%', ...style }}
        >
            {/* TAMPILAN HEADER */}
            <div className="text-center">
                <span
                    className="p-2.5 px-6 inline-block rounded-full border border-[rgba(245,185,43,0.25)] bg-(--primary-light) text-center text-3xl font-extrabold tracking-[0.5px] text-(--dark)"
                    // style={{ padding: '0.5rem 1.5rem', marginBottom: '1rem' }}
                >
                    DAFTAR MENU
                </span>
                <h3
                    className={`text-[2.2rem] font-extrabold text-espresso ${className} text-shadow-xl`}
                >
                    Varian Best Seller Nitanggo Bitez
                </h3>
                {isEligibleForDiscount && (
                    <div className="mt-2 text-sm md:text-base font-semibold text-[#D49800] bg-[#FDF1D5] inline-block px-4 py-1.5 rounded-full">
                        Yeay! {promo?.name || 'Promo Spesial'} aktif untuk Member. Diskon {promo?.discount}%! 🎉
                    </div>
                )}
            </div>

            {/* TAMPILAN GRID & KARTU MENU (FULL TAILWIND) */}
            <div
                className="grid grid-cols-1 gap-7.5 px-[5%] py-0 sm:grid-cols-2 md:grid-cols-3"
                // style={{ maxWidth: '90%', margin: '0 auto' , paddingTop: '1rem', paddingBottom: '1rem' }}
            >
                {products.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500">Belum ada menu yang tersedia.</div>
                ) : products.map((item, index) => (
                    <div 
                        key={index}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-yellow-200"
                    >
                        {/* Tag/Badge (contoh: BEST SELLER) */}
                        {index === 0 && (
                            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                                Best Seller
                            </div>
                        )}
                        {index === 1 && (
                            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                                New
                            </div>
                        )}

                        {/* Img Container */}
                        <div className="relative h-60 w-full overflow-hidden bg-gray-100 p-2">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner">
                                <img
                                    src={item.image}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={item.name}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/assets/produk.png';
                                    }}
                                />
                            </div>
                            {/* Overlay Gradient for Image Bottom */}
                            <div className="absolute bottom-2 left-2 right-2 h-1/2 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                        
                        {/* Card Body */}
                        <div className="flex grow flex-col p-6 pt-5">
                            <h4 className="mb-2 text-xl font-extrabold text-[#3d2f26] capitalize">
                                {item.name}
                            </h4>
                            <p className="mb-6 grow text-sm leading-relaxed text-gray-500 line-clamp-3">
                                {item.description}
                            </p>
                            
                            {/* Card Footer */}
                            <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-5">
                                <div className="flex flex-col">
                                    {isEligibleForDiscount ? (
                                        <>
                                            <span className="text-xs text-gray-400 line-through mb-0.5">
                                                {formatRupiah(Number(item.price))}
                                            </span>
                                            <span className="text-xl font-black text-[#D49800]">
                                                {formatRupiah(Number(item.price) - (Number(item.price) * (promo?.discount || 0) / 100))}
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-xs text-gray-400 mb-0.5">Harga</span>
                                            <span className="text-xl font-black text-[#3d2f26]">
                                                {formatRupiah(Number(item.price))}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <button
                                    className="relative overflow-hidden cursor-pointer rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2.5 text-sm font-bold text-yellow-950 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 active:scale-95"
                                    onClick={() => onOrderClick(item.name, Number(item.price))}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Pesan
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ============================================================== */}
            {/* ============================================================== */}
            {isFormOpen && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
                >
                    <div className="bg-white w-full max-w-lg max-h-full overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col mx-auto">
                        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl border-b border-gray-100 bg-white px-5 py-4">
                            <h2 className="text-lg font-extrabold text-gray-800">Checkout</h2>
                            <button onClick={() => setIsFormOpen(false)} className="text-2xl text-gray-400 hover:text-red-500 leading-none">&times;</button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar space-y-6">
                            {/* CART SUMMARY */}
                            <div>
                                <div className="space-y-3">
                                    {cart.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
                                                    <button type="button" onClick={() => updateQuantity(item.name, -1)} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-md font-bold text-lg leading-none">-</button>
                                                    <span className="w-5 text-center text-xs font-bold text-gray-800">{item.quantity}</span>
                                                    <button type="button" onClick={() => updateQuantity(item.name, 1)} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-md font-bold text-lg leading-none">+</button>
                                                </div>
                                                <span className="font-semibold text-gray-800 capitalize text-sm">{item.name}</span>
                                            </div>
                                            <span className="font-bold text-gray-700 text-sm">{formatRupiah(item.priceNumber * item.quantity)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-between items-center text-sm px-1">
                                    <span className="text-gray-500 font-medium">Subtotal</span>
                                    <span className="font-bold text-gray-800">{formatRupiah(subtotal)}</span>
                                </div>
                            </div>

                            {/* DATA PEMESAN */}
                            <div className="border-t border-gray-100 pt-5">
                                <h3 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Informasi Pemesan</h3>
                                <div className="space-y-3">
                                    <input
                                        type="text" name="namaLengkap" placeholder="Nama Lengkap"
                                        value={formData.namaLengkap} onChange={handleInputChange}
                                        className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 font-medium text-gray-800"
                                    />
                                    <input
                                        type="text" name="whatsapp" placeholder="Nomor WhatsApp"
                                        value={formData.whatsapp} onChange={handleInputChange}
                                        className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 font-medium text-gray-800"
                                    />
                                    <textarea
                                        name="catatan" placeholder="Catatan Pesanan (Opsional)"
                                        value={formData.catatan} onChange={handleInputChange} rows={2}
                                        className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 font-medium text-gray-800"
                                    />
                                </div>
                            </div>

                            {/* PENGAMBILAN */}
                            <div className="border-t border-gray-100 pt-5 pb-2">
                                <h3 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Metode Pengambilan</h3>
                                <div className="flex gap-3 mb-4">
                                    {['Ambil di Kantin', 'Delivery'].map(method => (
                                        <button
                                            key={method}
                                            onClick={() => setFormData(prev => ({ ...prev, metodePengambilan: method }))}
                                            className={`flex-1 py-3 rounded-xl text-sm font-bold border transition-all ${formData.metodePengambilan === method ? 'border-yellow-400 bg-yellow-50 text-yellow-700 shadow-sm' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
                                
                                {formData.metodePengambilan === 'Delivery' && (
                                    <div className="animate-fadeIn mt-2">
                                        <textarea
                                            name="alamatPengiriman" placeholder="Alamat Pengiriman Lengkap"
                                            value={formData.alamatPengiriman} onChange={handleInputChange} rows={2}
                                            className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 font-medium text-gray-800"
                                        />
                                        <div className="mt-3 flex justify-between items-center text-sm px-1">
                                            <span className="text-gray-500 font-medium">Estimasi Ongkir</span>
                                            <span className="font-bold text-gray-800">{formatRupiah(ongkir)}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* PEMBAYARAN QRIS */}
                            <div className="border-t border-gray-100 pt-5 pb-2 text-center">
                                <h3 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Scan QRIS</h3>
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full shadow-sm">
                                    <p className="text-xs text-gray-500 mb-3">Silakan scan kode QRIS di bawah ini untuk membayar pesanan Anda.</p>
                                    <img 
                                        src="/assets/qris.jpeg" 
                                        alt="QRIS Nitanggo Bitez" 
                                        className="w-full max-w-[200px] h-auto mx-auto rounded-lg"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/assets/produk.png';
                                        }}
                                    />
                                    <p className="text-xs text-gray-500 mt-3 font-semibold tracking-wide">a.n. NITANGGO, HIBURAN</p>
                                </div>
                            </div>
                        </div>

                        <div className="sticky bottom-0 z-10 border-t border-gray-100 bg-white rounded-b-3xl p-5 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
                            <div className="flex justify-between items-end mb-4 px-1">
                                <span className="text-sm font-bold text-gray-500">Total Pembayaran</span>
                                <span className="text-2xl font-black text-yellow-600 leading-none">{formatRupiah(totalPembayaran)}</span>
                            </div>
                            <a
                                href={(!formData.namaLengkap || !formData.whatsapp) ? '#' : waLink}
                                target={(!formData.namaLengkap || !formData.whatsapp) ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className={`w-full flex justify-center py-3.5 rounded-xl font-bold text-yellow-950 transition-all ${
                                    (!formData.namaLengkap || !formData.whatsapp) 
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:shadow-[0_8px_20px_rgba(250,204,21,0.4)] hover:-translate-y-0.5'
                                }`}
                                onClick={(e) => {
                                    if (!formData.namaLengkap || !formData.whatsapp) {
                                        e.preventDefault();

                                        return;
                                    }

                                    setIsFormOpen(false);
                                    import('@inertiajs/react').then(({ router }) => {
                                        router.post('/checkout', {
                                            amount: totalPembayaran,
                                            customer_name: formData.namaLengkap,
                                            whatsapp: formData.whatsapp,
                                            items: cart,
                                            pickup_method: formData.metodePengambilan,
                                            delivery_address: formData.alamatPengiriman,
                                            notes: formData.catatan
                                        }, { 
                                            preserveScroll: true, 
                                            preserveState: true,
                                            onSuccess: () => {
                                                setCart([]);
                                                setShowSuccessModal(true);
                                            }
                                        });
                                    });
                                }}
                            >
                                Bayar Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* FLOATING CART BUTTON */}
            {!isFormOpen && cart.length > 0 && (
                <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4 animate-fade-in pointer-events-none">
                    <button 
                        onClick={handleCartOpen}
                        className="pointer-events-auto flex items-center gap-4 bg-gray-900 text-white px-6 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-gray-800 transition-all duration-300"
                    >
                        <div className="flex -space-x-2">
                            <div className="bg-yellow-400 text-yellow-950 font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 border-gray-900 z-10">
                                {cart.reduce((total, item) => total + item.quantity, 0)}
                            </div>
                            <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 border-gray-900">
                                🛒
                            </div>
                        </div>
                        <div className="flex flex-col items-start border-l border-white/20 pl-4">
                            <span className="text-xs text-gray-300 font-medium">Total Pesanan</span>
                            <span className="font-bold text-yellow-400 leading-none mt-1">
                                {formatRupiah(cart.reduce((total, item) => total + (item.priceNumber * item.quantity), 0))}
                            </span>
                        </div>
                        <div className="ml-2 bg-white/10 rounded-full p-2">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>
            )}

            {/* CUSTOM SUCCESS MODAL */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-[10010] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
                    <div className="bg-white w-full max-w-sm rounded-[2rem] p-8 text-center shadow-2xl relative animate-scaleIn transform transition-all">
                        {/* Ikon Sukses */}
                        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        
                        <h3 className="text-2xl font-extrabold text-[#2B2118] mb-2">Hore! Pesanan Tercatat 🎉</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Pesanan Anda telah berhasil masuk ke sistem kami. Silakan cek jendela obrolan WhatsApp Anda untuk mengirimkan bukti QRIS.
                        </p>
                        
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 font-bold py-3.5 rounded-2xl hover:scale-105 transition-transform shadow-md"
                        >
                            Tutup Notifikasi
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}