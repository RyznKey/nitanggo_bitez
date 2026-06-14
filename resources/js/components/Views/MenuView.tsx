import React, { useState } from 'react';
import { router } from '@inertiajs/react';

type MenuViewProps = {
    isActive: boolean;
    handleOrderItem?: (productName: string) => void;
    className?: string;
    style?: React.CSSProperties;
};

// Data menu yang disesuaikan dengan fitur badge
const daftarMenu = [
    {
        name: 'Choco Cheeze',
        badge: 'BEST SELLER',
        badgeColor: 'bg-[#F2A900]',
        price: 'Rp 12.000',
        priceNumber: 12000,
        image: '/assets/chocolate.jpeg',
        description: 'Perpaduan cokelat dan cream cheese gurih serta biskuit yang lembut.',
    },
    {
        name: 'Tiramisu Cheeze',
        badge: 'REKOMENDASI',
        badgeColor: 'bg-[#8B5A2B]',
        price: 'Rp 12.000',
        priceNumber: 12000,
        image: '/assets/tiramisu.jpeg',
        description: 'Kelezatan aroma dan rasa kopi yang dipadukan dengan cream cheese yang gurih.',
    },
    {
        name: 'Double Cheeze',
        badge: 'NEW',
        badgeColor: 'bg-[#E54B4B]',
        price: 'Rp 12.000',
        priceNumber: 12000,
        image: '/assets/cheese.jpeg',
        description: 'Varian andalan pecinta keju dengan rasanya gurih, creamy, dan melimpah parutan keju maksimal.',
    },
];

export default function MenuView({ isActive, className = '', style }: MenuViewProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{
        name: string;
        priceNumber: number;
    } | null>(null);
    const [showQRIS, setShowQRIS] = useState(false);
    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState({
        namaLengkap: '',
        whatsapp: '',
        statusMember: 'Non-Member',
        jumlah: 1,
        catatan: '',
        metodePengambilan: 'Ambil di Kantin',
        alamatPengiriman: '',
    });

    if (!isActive) return null;

    const onOrderClick = (name: string, priceNumber: number) => {
        setSelectedItem({ name, priceNumber });
        setIsFormOpen(true);
        setShowQRIS(false);
        setFormStep(1);
        setFormData({
            namaLengkap: '',
            whatsapp: '',
            statusMember: 'Non-Member',
            jumlah: 1,
            catatan: '',
            metodePengambilan: 'Ambil di Kantin',
            alamatPengiriman: '',
        });
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const ongkir = formData.metodePengambilan === 'Delivery' ? 4000 : 0;
    const subtotal = selectedItem ? selectedItem.priceNumber * formData.jumlah : 0;
    const totalPembayaran = subtotal + ongkir;
    const formatRupiah = (angka: number) => `Rp${new Intl.NumberFormat('id-ID').format(angka)}`;

    const waNumber = '6285700655072';
    const waMessage = `Halo Nitanggo Bitez! Saya ingin memesan:\n\n🛒 *DETAIL PESANAN*\nProduk: ${selectedItem?.name}\nJumlah: ${formData.jumlah} pcs\nCatatan: ${formData.catatan || '-'}\n\n👤 *INFORMASI PEMESAN*\nNama: ${formData.namaLengkap}\nWA: ${formData.whatsapp}\nStatus: ${formData.statusMember}\n\n🚚 *PENGIRIMAN*\nMetode: ${formData.metodePengambilan}\n${formData.metodePengambilan === 'Delivery' ? `Alamat: ${formData.alamatPengiriman}` : ''}\n\n💰 *RINGKASAN PEMBAYARAN*\nSubtotal: ${formatRupiah(subtotal)}\nOngkir: ${formatRupiah(ongkir)}\n*Total Pembayaran: ${formatRupiah(totalPembayaran)}*\n\nSaya akan melakukan pembayaran menggunakan QRIS. Mohon konfirmasinya ya!`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    const handleSubmitPesanan = (e: React.MouseEvent) => {
        e.preventDefault();

        const payload = {
            namaLengkap: formData.namaLengkap,
            whatsapp: formData.whatsapp,
            statusMember: formData.statusMember,
            produk: selectedItem?.name,
            jumlah: formData.jumlah,
            hargaSatuan: selectedItem?.priceNumber,
            subtotal: subtotal,
            ongkir: ongkir,
            totalPembayaran: totalPembayaran,
            metodePengambilan: formData.metodePengambilan,
            alamatPengiriman: formData.alamatPengiriman,
            catatan: formData.catatan,
        };
    // Mengirimkan request POST menggunakan Inertia ke router Laravel
        router.post('/orders', payload, {
            onSuccess: () => {
                // Tutup Modal
                setIsFormOpen(false);
                // Buka link WhatsApp setelah data sukses tersimpan di database
                window.open(waLink, '_blank');
            },
            onError: (errors) => {
                alert('Gagal memproses pesanan. Silakan periksa kembali data form Anda.');
                console.error(errors);
            }
        });
    };
    
    return (
        <div 
            className={`w-full min-h-screen bg-[#F9F8F3] relative overflow-hidden font-sans transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={style}
        >
            {/* Dekorasi Background Hijau khas referensi */}
            <div className="absolute top-20 left-0 w-3/4 h-[800px] bg-[#3B5B41] rounded-r-full opacity-10 blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-[500px] bg-[#F2A900] rounded-l-full opacity-5 blur-3xl -z-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 py-16 pt-28">
                
                {/* HEADER SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-6 md:space-y-0">
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#2A4B35] uppercase tracking-tight leading-none mb-2 hover:scale-105 transition-transform duration-500 origin-left">
                            NITANGGO
                            <br className="hidden md:block"/> BITEZ
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#5A7A60] uppercase tracking-widest">
                            Varian Best Seller
                        </h2>
                        <div className="flex items-center gap-2 mt-4 text-[#2A4B35] font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#F2A900]"></span> GURIH
                            <span className="w-2 h-2 rounded-full bg-[#F2A900] ml-2"></span> CREAMY
                            <span className="w-2 h-2 rounded-full bg-[#F2A900] ml-2"></span> NIKMAT
                        </div>
                    </div>
                </div>

                {/* MENU LIST */}
                <div className="space-y-24 md:space-y-32 relative">
                    {/* Garis Vertikal Dekoratif */}
                    <div className="absolute left-[50%] top-10 bottom-10 w-0.5 bg-[#3B5B41] opacity-20 hidden lg:block -z-10"></div>

                    {daftarMenu.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div 
                                key={index} 
                                className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-8 lg:gap-16`}
                            >
                                {/* Kartu Informasi */}
                                <div className="w-full lg:w-5/12 relative z-10 transition-transform duration-500 hover:-translate-y-3">
                                    <div className="bg-[#FFFFFC] rounded-[2rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(42,75,53,0.08)] border border-[#E8E6DF] relative overflow-hidden">
                                        {/* Aksen sudut */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F9F8F3] rounded-full opacity-50"></div>
                                        
                                        <div className="flex items-center gap-3 mb-4">
                                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#2A4B35] uppercase">
                                                {item.name}
                                            </h3>
                                        </div>
                                        
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-6 uppercase tracking-wider ${item.badgeColor} shadow-md`}>
                                            • {item.badge}
                                        </span>

                                        <p className="text-[#5A7A60] text-base md:text-lg leading-relaxed mb-8">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#E8E6DF]">
                                            <div className="bg-[#3B5B41] text-white px-6 py-2.5 rounded-full text-xl font-bold shadow-lg shadow-[#3B5B41]/30">
                                                {item.price}
                                            </div>
                                            <button
                                                onClick={() => onOrderClick(item.name, item.priceNumber)}
                                                className="bg-transparent border-2 border-[#F2A900] text-[#F2A900] hover:bg-[#F2A900] hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform active:scale-95"
                                            >
                                                Pesan Sekarang
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Gambar Produk */}
                                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] relative z-20 transition-all duration-700 hover:rotate-3 hover:scale-105">
                                    {/* Bayangan/Glow Image */}
                                    <div className="absolute inset-0 bg-[#3B5B41] rounded-full opacity-20 blur-2xl transform translate-y-6"></div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover rounded-full border-8 border-[#FFFFFC] shadow-2xl relative z-10"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/assets/produk.png';
                                        }}
                                    />
                                    {/* Daun dekoratif (opsional, menggunakan shape SVG atau CSS) */}
                                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#81A263] rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm rotate-45 z-0 opacity-80 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* BOTTOM FEATURES */}
                <div className="mt-32 border-t border-[#D5D2C4] pt-12 flex flex-wrap justify-center gap-8 md:gap-16">
                    {[
                        { icon: '🌿', text: 'BAHAN SEGAR' },
                        { icon: '⏱️', text: 'PENYAJIAN CEPAT' },
                        { icon: '🧀', text: 'KAYA RASA' },
                        { icon: '✨', text: 'DIBUAT DENGAN CINTA' },
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-[#5A7A60] hover:-translate-y-2 transition-transform duration-300">
                            <span className="text-3xl mb-3 block">{feature.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-center w-24">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ============================================================== */}
            {/* MODAL CHECKOUT BESAR (MULTI-STEP) - Disesuaikan Warnanya */}
            {/* ============================================================== */}
            {isFormOpen && selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6 transition-opacity duration-300">
                    <div className="bg-[#FFFFFC] w-full max-w-2xl max-h-full overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col transform transition-all scale-100 animate-fade-in-up">
                        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl border-b border-[#E8E6DF] bg-[#FFFFFC] px-8 py-6 shadow-sm">
                            <div>
                                <h2 className="text-2xl font-extrabold text-[#2A4B35]">
                                    {formStep === 1 ? '🛒 Isi Data Pesanan' : '🧾 Estimasi Pembayaran'}
                                </h2>
                                <p className="text-sm text-[#5A7A60] font-medium mt-1">
                                    {formStep === 1 ? 'Lengkapi detail pesanan dan pengirimanmu.' : 'Periksa kembali pesananmu sebelum konfirmasi.'}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="text-3xl font-bold text-[#A3B19B] hover:text-[#E54B4B] transition-colors"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="flex-1 space-y-6 p-8">
                            {/* STEP 1: ISI DATA */}
                            {formStep === 1 && (
                                <div className="space-y-6 animate-fade-in">
                                    {/* 1. INFORMASI PEMESAN */}
                                    <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-sm">
                                        <h3 className="mb-4 text-lg font-bold text-[#2A4B35]">Informasi Pemesan</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="mb-1 block text-sm font-semibold text-[#5A7A60]">Nama Lengkap *</label>
                                                <input
                                                    type="text"
                                                    name="namaLengkap"
                                                    value={formData.namaLengkap}
                                                    onChange={handleInputChange}
                                                    className="w-full h-11 rounded-xl border border-[#D5D2C4] bg-[#F9F8F3] p-3 text-base outline-none focus:ring-2 focus:ring-[#F2A900] transition-shadow"
                                                    placeholder="Masukkan nama..."
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-semibold text-[#5A7A60]">Nomor WhatsApp *</label>
                                                <input
                                                    type="text"
                                                    name="whatsapp"
                                                    value={formData.whatsapp}
                                                    onChange={handleInputChange}
                                                    className="w-full h-11 rounded-xl border border-[#D5D2C4] bg-[#F9F8F3] p-3 text-base outline-none focus:ring-2 focus:ring-[#F2A900] transition-shadow"
                                                    placeholder="Contoh: 08123456789"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-[#5A7A60]">Status Member</label>
                                                <div className="flex gap-6">
                                                    {['Member', 'Non-Member'].map((status) => (
                                                        <label key={status} className="flex cursor-pointer items-center gap-2">
                                                            <input
                                                                type="radio"
                                                                name="statusMember"
                                                                value={status}
                                                                checked={formData.statusMember === status}
                                                                onChange={handleInputChange}
                                                                className="h-4 w-4 text-[#F2A900] focus:ring-[#F2A900]"
                                                            />
                                                            <span className="font-medium text-[#2A4B35]">{status}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. DETAIL PESANAN */}
                                    <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-sm">
                                        <h3 className="mb-4 text-lg font-bold text-[#2A4B35]">Detail Pesanan</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between rounded-xl border border-[#E8E6DF] bg-[#F9F8F3] p-4">
                                                <span className="font-bold text-[#2A4B35]">{selectedItem.name}</span>
                                                <span className="font-bold text-[#F2A900]">{formatRupiah(selectedItem.priceNumber)}</span>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-[#5A7A60]">Jumlah Pesanan *</label>
                                                <div className="flex items-center gap-4">
                                                    <button
                                                        onClick={() => setFormData((p) => ({ ...p, jumlah: Math.max(1, p.jumlah - 1) }))}
                                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8E6DF] text-[#2A4B35] text-xl font-bold hover:bg-[#D5D2C4] transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center text-xl font-bold text-[#2A4B35]">{formData.jumlah}</span>
                                                    <button
                                                        onClick={() => setFormData((p) => ({ ...p, jumlah: p.jumlah + 1 }))}
                                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B5B41] text-white text-xl font-bold hover:bg-[#2A4B35] transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. METODE PENGAMBILAN */}
                                    <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-sm">
                                        <h3 className="mb-4 text-lg font-bold text-[#2A4B35]">Metode Pengambilan</h3>
                                        <div className="mb-4 flex gap-4">
                                            {['Ambil di Kantin', 'Delivery'].map((metode) => (
                                                <label key={metode} className={`flex flex-1 cursor-pointer items-center gap-2 rounded-xl border p-4 transition-colors ${formData.metodePengambilan === metode ? 'border-[#F2A900] bg-[#FFFBF0]' : 'border-[#E8E6DF] bg-[#F9F8F3]'}`}>
                                                    <input
                                                        type="radio"
                                                        name="metodePengambilan"
                                                        value={metode}
                                                        checked={formData.metodePengambilan === metode}
                                                        onChange={handleInputChange}
                                                        className="h-4 w-4 text-[#F2A900]"
                                                    />
                                                    <span className="font-bold text-[#2A4B35]">{metode}</span>
                                                </label>
                                            ))}
                                        </div>

                                        {formData.metodePengambilan === 'Delivery' && (
                                            <div className="animate-fade-in">
                                                <label className="mb-1 block text-sm font-semibold text-[#5A7A60]">Alamat Pengiriman *</label>
                                                <textarea
                                                    name="alamatPengiriman"
                                                    value={formData.alamatPengiriman}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-[#D5D2C4] bg-[#F9F8F3] p-3 outline-none focus:ring-2 focus:ring-[#F2A900]"
                                                    rows={3}
                                                    placeholder="Masukkan detail lokasi/gedung..."
                                                ></textarea>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: ESTIMASI & PEMBAYARAN */}
                            {formStep === 2 && (
                                <div className="space-y-6 animate-fade-in">
                                    <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-sm">
                                        <h3 className="mb-4 text-lg font-bold text-[#2A4B35]">Ringkasan Pesanan</h3>
                                        <div className="mb-6 space-y-3 text-sm text-[#5A7A60] font-medium">
                                            <div className="flex justify-between items-center">
                                                <span>Produk:</span> <span className="font-bold text-[#2A4B35]">{selectedItem.name}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Jumlah:</span> <span className="font-bold text-[#2A4B35]">{formData.jumlah} pcs</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Subtotal:</span> <span>{formatRupiah(subtotal)}</span>
                                            </div>
                                            {formData.metodePengambilan === 'Delivery' && (
                                                <div className="flex justify-between items-center">
                                                    <span>Ongkos Kirim:</span> <span>{formatRupiah(ongkir)}</span>
                                                </div>
                                            )}
                                            <div className="mt-4 flex justify-between border-t border-[#E8E6DF] pt-4 text-xl font-extrabold text-[#2A4B35]">
                                                <span>Total:</span> <span className="text-[#3B5B41]">{formatRupiah(totalPembayaran)}</span>
                                            </div>
                                        </div>

                                        <div className="rounded-xl border border-[#E8E6DF] bg-[#F9F8F3] p-5">
                                            <h4 className="mb-2 font-bold text-[#2A4B35]">💳 Pembayaran via QRIS</h4>
                                            <p className="mb-4 text-xs text-[#5A7A60] leading-relaxed">
                                                Scan QRIS untuk pembayaran otomatis. Simpan bukti transfer untuk dikirimkan melalui WhatsApp.
                                            </p>
                                            <button
                                                onClick={() => setShowQRIS(!showQRIS)}
                                                className="w-full rounded-xl bg-white border border-[#D5D2C4] py-2.5 text-sm font-bold text-[#2A4B35] transition hover:bg-[#E8E6DF]"
                                            >
                                                {showQRIS ? 'Tutup QRIS' : 'Buka Kode QRIS'}
                                            </button>
                                            {showQRIS && (
                                                <div className="mt-4 flex flex-col items-center p-4 bg-white rounded-xl border border-[#E8E6DF] animate-fade-in">
                                                    <div className="h-40 w-40 flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg mb-3">
                                                        [ Gambar QRIS ]
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* FOOTER MULTI-STEP */}
                        <div className="sticky bottom-0 z-10 flex items-center justify-between border-t border-[#E8E6DF] bg-white p-6 shadow-sm">
                            {formStep === 1 ? (
                                <>
                                    <button onClick={() => setIsFormOpen(false)} className="font-bold text-[#A3B19B] px-4 py-2 hover:text-[#E54B4B] transition-colors">
                                        Batal
                                    </button>
                                    <button
                                        onClick={() => setFormStep(2)}
                                        disabled={!formData.namaLengkap || !formData.whatsapp}
                                        className="bg-[#3B5B41] text-white px-8 py-3 rounded-xl font-bold shadow-md disabled:opacity-50"
                                    >
                                        Lanjut &rarr;
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setFormStep(1)} className="font-bold text-[#5A7A60] px-4 py-2 hover:text-[#2A4B35] transition-colors">
                                        &larr; Kembali
                                    </button>
                                    
                                    {/* 3. UBAH TOMBOL DIAKAHIR DARI TAG <a> MENJADI <button> DENGAN ONCLICK HANDLE SUBMIT */}
                                    <button
                                        onClick={handleSubmitPesanan}
                                        className="bg-[#F2A900] text-white px-8 py-3 rounded-xl font-extrabold shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
                                    >
                                        Kirim ke WA <span className="text-xl">📲</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}