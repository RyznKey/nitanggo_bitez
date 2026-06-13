import React from 'react';

type OrderModalProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedMenu: string;
};

export default function OrderModal({ isOpen, onClose, selectedMenu }: OrderModalProps) {
    // Jika isOpen false, jangan render apapun
    if (!isOpen) {
return null;
}

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            {/* Container dengan background gradient */}
            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-purple-800 to-blue-600 p-8 shadow-2xl flex items-center justify-center">
                
                {/* Tombol Close (X) */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-6 text-white/70 hover:text-white text-2xl font-bold z-50 transition-colors"
                >
                    &times;
                </button>

                {/* Elemen Latar Belakang Abstrak */}
                <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-cyan-400 opacity-50 shadow-lg pointer-events-none"></div>
                <div className="absolute top-24 left-32 w-10 h-10 rounded-full bg-purple-600 opacity-70 pointer-events-none"></div>
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border-8 border-white opacity-20 shadow-xl pointer-events-none"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-cyan-400 opacity-50 shadow-xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full border-8 border-white opacity-20 shadow-xl pointer-events-none"></div>
                
                {/* Elemen Garis Diagonal */}
                <div className="absolute top-1/4 -right-20 transform -rotate-45 flex flex-col gap-3 pointer-events-none">
                    <div className="w-64 h-3 bg-white opacity-30 rounded-full"></div>
                    <div className="w-80 h-3 bg-white opacity-30 rounded-full"></div>
                </div>

                {/* Kontainer Formulir Glassmorphism */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 relative z-10 my-4">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 tracking-widest uppercase">
                        FORM PESANAN
                    </h2>
                    <p className="text-center text-cyan-200 mb-6 font-semibold">
                        {selectedMenu}
                    </p>

                    {/* Input Formulir */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Nama Depan" className="p-3.5 rounded-full bg-white/10 placeholder:text-gray-300 text-white w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all border border-white/20 shadow-inner" />
                            <input type="text" placeholder="Nama Belakang" className="p-3.5 rounded-full bg-white/10 placeholder:text-gray-300 text-white w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all border border-white/20 shadow-inner" />
                        </div>
                        <input type="text" placeholder="Nomor WhatsApp" className="p-3.5 rounded-full bg-white/10 placeholder:text-gray-300 text-white w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all border border-white/20 shadow-inner" />
                        <input type="number" placeholder="Jumlah Pesanan (Porsi)" min="1" className="p-3.5 rounded-full bg-white/10 placeholder:text-gray-300 text-white w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all border border-white/20 shadow-inner" />
                        <textarea placeholder="Alamat Pengiriman lengkap..." rows={3} className="p-3.5 rounded-2xl bg-white/10 placeholder:text-gray-300 text-white w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all border border-white/20 shadow-inner resize-none"></textarea>
                    </div>

                    <button 
                        onClick={() => {
                            alert(`Pesanan ${selectedMenu} berhasil diproses!`);
                            onClose(); // Tutup modal setelah pesan
                        }}
                        className="w-full mt-6 p-4 rounded-full bg-cyan-400 text-white font-bold text-lg hover:bg-cyan-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                    >
                        KONFIRMASI PESANAN
                    </button>
                </div>
            </div>
        </div>
    );
}