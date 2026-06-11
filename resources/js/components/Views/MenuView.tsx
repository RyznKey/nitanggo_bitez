import React, { useState } from 'react';

type MenuViewProps = {
    isActive: boolean;
    handleOrderItem: (productName: string) => void;
    className?: string;
    style?: React.CSSProperties;
};

// Data menu
const daftarMenu = [
    {
        name: 'choco cheeze',
        price: 'Rp12.000',
        image: '/assets/chocolate.jpeg',
        description: 'Perpaduan cokelat dan cream cheese gurih serta biskuit yang lembut.',
    },
    {
        name: 'Tiramisu Cheeze',
        price: 'Rp12.000',
        image: '/assets/tiramisu.jpeg',
        description:'kelezatan aroma dan rasa kopi yang dipadukan dengan cream cheese yang gurih.',
    },
    {
        name: 'Double Cheeze',
        price: 'Rp12.000',
        image: '/assets/cheese.jpeg',
        description: 'varian andalan pecinta keju karena rasanya gurih, creamy, dan melimpah parutan keju sampai cheezy level maksimal',
    },
];

export default function MenuView({
    isActive,
    handleOrderItem,
    className,
    style,
}: MenuViewProps) {
    // State Modal & Form
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{
        name: string;
        priceNumber: number;
    } | null>(null);
    const [showQRIS, setShowQRIS] = useState(false);

    // STATE BARU UNTUK MULTI-STEP FORM (1 = Isi Data, 2 = Estimasi Harga)
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

    // Handler klik pesan
    const onOrderClick = (name: string, priceString: string) => {
        // MATIKAN TRIGGER REWARD AGAR ALERT TIDAK MUNCUL
        // handleOrderItem(name);

        const priceNumber = parseInt(priceString.replace(/[^0-9]/g, ''), 10);

        setSelectedItem({ name, priceNumber });
        setIsFormOpen(true);
        setShowQRIS(false);
        setFormStep(1); // Set kembali ke step 1 saat buka menu baru
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

    // Kalkulasi Harga
    const ongkir = formData.metodePengambilan === 'Delivery' ? 4000 : 0;
    const subtotal = selectedItem
        ? selectedItem.priceNumber * formData.jumlah
        : 0;
    const totalPembayaran = subtotal + ongkir;
    const formatRupiah = (angka: number) =>
        `Rp${new Intl.NumberFormat('id-ID').format(angka)}`;

    // Generate Pesan WhatsApp
    const waNumber = '6285700655072';
    const waMessage = `Halo Nitanggo Bitez! Saya ingin memesan:

🛒 *DETAIL PESANAN*
Produk: ${selectedItem?.name}
Jumlah: ${formData.jumlah} pcs
Catatan: ${formData.catatan || '-'}

👤 *INFORMASI PEMESAN*
Nama: ${formData.namaLengkap}
WA: ${formData.whatsapp}
Status: ${formData.statusMember}

🚚 *PENGIRIMAN*
Metode: ${formData.metodePengambilan}
${formData.metodePengambilan === 'Delivery' ? `Alamat: ${formData.alamatPengiriman}` : ''}

💰 *RINGKASAN PEMBAYARAN*
Subtotal: ${formatRupiah(subtotal)}
Ongkir: ${formatRupiah(ongkir)}
*Total Pembayaran: ${formatRupiah(totalPembayaran)}*

Saya akan melakukan pembayaran menggunakan QRIS. Mohon konfirmasinya ya!`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    return (
        <div
            className={`/* Base Styles */ w-full flex-col gap-25 transition-all duration-500 ease-in-out ${isActive ? 'flex translate-y-0 opacity-100' : 'hidden translate-y-3.75 opacity-0'} ${className} px-[5%] py-25`}
            style={{ height: '100%', ...style }}
        >
            {/* TAMPILAN HEADER */}
            <div className="text-center">
                <span
                    className="inline-block rounded-full border border-[rgba(245,185,43,0.25)] bg-(--primary-light) text-center text-3xl font-extrabold tracking-[0.5px] text-(--dark)"
                    style={{ padding: '0.5rem 1.5rem', marginBottom: '1rem' }}
                >
                    DAFTAR MENU
                </span>
                <h3
                    className={`text-[2.2rem] font-extrabold text-espresso ${className} text-shadow-xl`}
                >
                    Varian Best Seller Nitanggo Bitez ✨
                </h3>
            </div>

            {/* TAMPILAN GRID & KARTU MENU */}
            <div
                className="grid grid-cols-1 gap-7.5 px-[5%] py-0 sm:grid-cols-2 md:grid-cols-3"
                style={{ maxWidth: '90%', margin: '0 auto' , paddingTop: '1rem', paddingBottom: '1rem' }}
            >
                {daftarMenu.map((item, index) => (
                    <div className="menu-card" key={index}>
                        <div className="menu-img-container">
                            <img
                                src={item.image}
                                className="menu-item-img"
                                alt={item.name}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        '/assets/produk.png';
                                }}
                            />

                        </div>
                        <div className="menu-card-body">
                            <h4>{item.name}</h4>
                            <h5>{item.description}</h5>
                            <div className="menu-footer">
                                <span className="menu-price">{item.price}</span>
                                <button
                                    className="btn-order-item"
                                    onClick={() =>
                                        onOrderClick(item.name, item.price)
                                    }
                                >
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ============================================================== */}
            {/* MODAL CHECKOUT BESAR (MULTI-STEP) */}
            {/* ============================================================== */}
            {isFormOpen && selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
                    style={{ paddingTop: '8px', paddingBottom: '8px' }}
                >
                    <div className="bg-gray-50 w-full max-w-2xl max-h-full overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col" style={{ margin: '2%' }}>
                        <div
                            className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl border-b border-gray-200 bg-white px-6 py-4 shadow-sm"
                            style={{ padding: '5%' }}
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {formStep === 1
                                        ? '🛒 Isi Data Pesanan'
                                        : '🧾 Estimasi & Pembayaran'}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {formStep === 1
                                        ? 'Lengkapi detail pesanan dan pengirimanmu di bawah ini.'
                                        : 'Periksa kembali pesananmu sebelum lanjut ke WhatsApp.'}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="text-3xl font-bold text-gray-400 hover:text-red-500"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="flex-1 space-y-6 p-6">
                            {/* ================= STEP 1: ISI DATA ================= */}
                            {formStep === 1 && (
                                <div
                                    className="animate-fade-in space-y-6 px-4 py-0"
                                    style={{
                                        maxWidth: '90%',
                                        margin: '0 auto',
                                    }}
                                >
                                    {/* 1. INFORMASI PEMESAN */}
                                    <div
                                        className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                        style={{ padding: '5%' }}
                                    >
                                        <h3 className="mb-4 flex items-center justify-center gap-2 text-lg font-bold text-gray-800">
                                            Informasi Pemesan
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="mb-1 block text-sm font-semibold text-gray-600">
                                                    Nama Lengkap *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="namaLengkap"
                                                    value={formData.namaLengkap}
                                                    onChange={handleInputChange}
                                                    className="w-full h-10 rounded-xl border border-gray-300 p-3 text-base outline-none focus:ring-2 focus:ring-yellow-400"
                                                    placeholder="Masukkan nama..."
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-semibold text-gray-600">
                                                    Nomor WhatsApp *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="whatsapp"
                                                    value={formData.whatsapp}
                                                    onChange={handleInputChange}
                                                    className="w-full h-10 rounded-xl border border-gray-300 p-3 text-base outline-none focus:ring-2 focus:ring-yellow-400"
                                                    placeholder="Contoh: 08123456789"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-600">
                                                    Status Member
                                                </label>
                                                <div className="flex gap-4">
                                                    <label className="flex cursor-pointer items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="statusMember"
                                                            value="Member"
                                                            checked={
                                                                formData.statusMember ===
                                                                'Member'
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            className="h-4 w-4 text-yellow-500"
                                                        />
                                                        <span>Member</span>
                                                    </label>
                                                    <label className="flex cursor-pointer items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="statusMember"
                                                            value="Non-Member"
                                                            checked={
                                                                formData.statusMember ===
                                                                'Non-Member'
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            className="h-4 w-4 text-yellow-500"
                                                        />
                                                        <span>Non-Member</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. DETAIL PESANAN */}
                                    <div
                                        className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                        style={{ padding: '5%' }}
                                    >
                                        <h3 className="mb-4 text-lg font-bold text-gray-800">
                                            Detail Pesanan
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-3">
                                                <span className="font-medium text-gray-700">
                                                    {selectedItem.name}
                                                </span>
                                                <span className="font-bold text-yellow-600">
                                                    {formatRupiah(
                                                        selectedItem.priceNumber,
                                                    )}
                                                </span>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-600">
                                                    Jumlah Pesanan *
                                                </label>
                                                <div className="flex items-center gap-4">
                                                    <button
                                                        onClick={() =>
                                                            setFormData(
                                                                (p) => ({
                                                                    ...p,
                                                                    jumlah: Math.max(
                                                                        1,
                                                                        p.jumlah -
                                                                            1,
                                                                    ),
                                                                }),
                                                            )
                                                        }
                                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center text-xl font-bold">
                                                        {formData.jumlah}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            setFormData(
                                                                (p) => ({
                                                                    ...p,
                                                                    jumlah:
                                                                        p.jumlah +
                                                                        1,
                                                                }),
                                                            )
                                                        }
                                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold hover:bg-yellow-500"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-semibold text-gray-600">
                                                    Catatan Tambahan
                                                </label>
                                                <textarea
                                                    name="catatan"
                                                    value={formData.catatan}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                                    rows={2}
                                                    placeholder="Opsional (Misal: Jangan terlalu manis)"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. METODE PENGAMBILAN */}
                                    <div
                                        className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                        style={{ padding: '5%' }}
                                    >
                                        <h3 className="mb-4 text-lg font-bold text-gray-800">
                                            Metode Pengambilan
                                        </h3>
                                        <div className="mb-4 flex gap-4">
                                            <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3">
                                                <input
                                                    type="radio"
                                                    name="metodePengambilan"
                                                    value="Ambil di Kantin"
                                                    checked={
                                                        formData.metodePengambilan ===
                                                        'Ambil di Kantin'
                                                    }
                                                    onChange={handleInputChange}
                                                    className="h-4 w-4 text-yellow-500"
                                                />
                                                <span className="font-medium">
                                                    Ambil di Kantin
                                                </span>
                                            </label>
                                            <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3">
                                                <input
                                                    type="radio"
                                                    name="metodePengambilan"
                                                    value="Delivery"
                                                    checked={
                                                        formData.metodePengambilan ===
                                                        'Delivery'
                                                    }
                                                    onChange={handleInputChange}
                                                    className="h-4 w-4 text-yellow-500"
                                                />
                                                <span className="font-medium">
                                                    Delivery
                                                </span>
                                            </label>
                                        </div>

                                        {formData.metodePengambilan ===
                                            'Delivery' && (
                                            <div className="animate-fade-in space-y-4">
                                                <div>
                                                    <label className="mb-1 block text-sm font-semibold text-gray-600">
                                                        Alamat Pengiriman *
                                                    </label>
                                                    <textarea
                                                        name="alamatPengiriman"
                                                        value={
                                                            formData.alamatPengiriman
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                                        rows={2}
                                                        placeholder="Masukkan alamat lengkap pengiriman..."
                                                    ></textarea>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* ================= STEP 2: ESTIMASI & PEMBAYARAN ================= */}
                            {formStep === 2 && (
                                <div className="animate-fade-in space-y-6">
                                    {/* 4. REWARD MEMBERSHIP */}
                                    <div
                                        className="rounded-2xl border border-purple-200 bg-linear-to-r from-purple-100 to-pink-100 p-5 shadow-sm"
                                        style={{ padding: '5%' }}
                                    >
                                        <h3 className="mb-2 flex items-center gap-2 font-bold text-purple-800">
                                            🎁 Nitanggo Member Reward
                                        </h3>
                                        <p className="mb-3 text-sm text-purple-700">
                                            Kumpulkan 5 stamp dan dapatkan 2
                                            minuman GRATIS!
                                        </p>
                                        <div className="rounded-xl bg-white/60 p-3">
                                            <div className="mb-2 text-xs font-bold text-purple-800 uppercase">
                                                Progress Saat Ini
                                            </div>
                                            <div className="mb-1 flex gap-2 text-2xl">
                                                🧀 🧀 🧀 ⬜ ⬜
                                            </div>
                                            <div className="text-sm font-bold text-purple-900">
                                                3/5 Stamp
                                            </div>
                                            <p className="mt-1 text-xs text-purple-600">
                                                Tinggal 2 pembelian lagi untuk
                                                mendapatkan reward.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 5. PEMBAYARAN & RINGKASAN */}
                                    <div
                                        className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                        style={{ padding: '5%' }}
                                    >
                                        <h3 className="mb-4 text-lg font-bold text-gray-800">
                                            Ringkasan Pesanan
                                        </h3>
                                        <div className="mb-4 space-y-2 text-sm text-gray-600">
                                            <div className="flex justify-between">
                                                <span>Produk:</span>{' '}
                                                <span>{selectedItem.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Harga:</span>{' '}
                                                <span>
                                                    {formatRupiah(
                                                        selectedItem.priceNumber,
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Jumlah:</span>{' '}
                                                <span>
                                                    {formData.jumlah} pcs
                                                </span>
                                            </div>
                                            <div className="mt-2 flex justify-between font-medium">
                                                <span>Subtotal:</span>{' '}
                                                <span>
                                                    {formatRupiah(subtotal)}
                                                </span>
                                            </div>

                                            {/* Info Ongkir hanya muncul jika Delivery */}
                                            {formData.metodePengambilan ===
                                                'Delivery' && (
                                                <>
                                                    <div className="flex justify-between font-medium">
                                                        <span>
                                                            Ongkir (Estimasi
                                                            2km):
                                                        </span>{' '}
                                                        <span>
                                                            {formatRupiah(
                                                                ongkir,
                                                            )}
                                                        </span>
                                                    </div>
                                                </>
                                            )}

                                            <div className="mt-2 flex justify-between border-t border-gray-200 pt-3 text-lg font-bold text-gray-900">
                                                <span>Total Pembayaran:</span>{' '}
                                                <span className="text-yellow-600">
                                                    {formatRupiah(
                                                        totalPembayaran,
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                                            <h4 className="mb-2 flex items-center gap-2 font-bold text-gray-800">
                                                💳 Metode Pembayaran: QRIS
                                            </h4>
                                            <p className="mb-3 text-xs leading-relaxed text-gray-600">
                                                Seluruh pesanan dibayarkan
                                                melalui QRIS. Setelah pembayaran
                                                berhasil, sistem akan
                                                mengirimkan kode pesanan
                                                digital.
                                            </p>
                                            <button
                                                onClick={() =>
                                                    setShowQRIS(!showQRIS)
                                                }
                                                className="w-full rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold transition hover:bg-gray-100"
                                            >
                                                {showQRIS
                                                    ? 'Sembunyikan QRIS'
                                                    : 'Tampilkan QRIS'}
                                            </button>
                                            {showQRIS && (
                                                <div className="mt-4 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4">
                                                    <div className="mb-2 flex h-40 w-40 items-center justify-center bg-gray-200 text-gray-400">
                                                        [ Gambar QRIS ]
                                                    </div>
                                                    <span className="text-xs font-bold text-gray-500">
                                                        Scan untuk membayar{' '}
                                                        {formatRupiah(
                                                            totalPembayaran,
                                                        )}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-1 text-xs text-gray-500">
                                            <p className="font-bold text-gray-700">
                                                Ketentuan Delivery:
                                            </p>
                                            <p>• Tarif pengiriman Rp2.000/km</p>
                                            <p>
                                                • Jarak dihitung dari lokasi
                                                Nitanggo Bitez
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* FOOTER MULTI-STEP */}
                        <div
                            className="sticky bottom-0 z-10 mt-auto flex items-center justify-between rounded-b-3xl border-t border-gray-100 bg-white/90 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
                            style={{ padding: '4% 5%' }}
                        >
                            {formStep === 1 ? (
                                <>
                                    {/* Tombol Kiri (Batal) */}
                                    <button
                                        onClick={() => setIsFormOpen(false)}
                                        className="group flex items-center justify-center gap-2 rounded-2xl bg-gray-50 px-5 py-3.5 font-bold text-gray-500 transition-all duration-300 hover:bg-red-50 hover:text-red-500"
                                    >
                                        <span className="m-4-1 text-xl leading-none transition-transform duration-300 group-hover:rotate-45">
                                            &times;
                                        </span>{' '}
                                        Batal
                                    </button>

                                    {/* Tombol Kanan (Selanjutnya) */}
                                    <button
                                        onClick={() => setFormStep(2)}
                                        className="group flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-8 py-3.5 font-extrabold text-gray-900 shadow-[0_4px_15px_rgba(250,204,21,0.4)] transition-all duration-300 group-hover:translate-x-1 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-[0_6px_20px_rgba(250,204,21,0.6)] disabled:cursor-not-allowed disabled:opacity-50"
                                        disabled={
                                            !formData.namaLengkap ||
                                            !formData.whatsapp ||
                                            !formData.metodePengambilan
                                        }
                                        style={{ padding: '12px 32px' }}
                                    >
                                        Selanjutnya
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            &rarr;
                                        </span>
                                    </button>
                                </>
                            ) : (
                                <>
                                    {/* Tombol Kiri (Kembali) */}
                                    <button
                                        onClick={() => setFormStep(1)}
                                        className="group flex items-center justify-center gap-2 rounded-2xl bg-gray-50 px-5 py-3.5 font-bold text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                            &larr;
                                        </span>{' '}
                                        Kembali
                                    </button>

                                    {/* Tombol Kanan (Bayar Sekarang) */}
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-8 py-3.5 font-extrabold text-gray-900 shadow-[0_4px_15px_rgba(250,204,21,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-[0_6px_20px_rgba(250,204,21,0.6)]"
                                        onClick={() => setIsFormOpen(false)}
                                    >
                                        Bayar Sekarang
                                        <span className="text-lg">💳</span>
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
