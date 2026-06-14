import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Heart, Sparkles, Instagram, MessageCircle } from 'lucide-react';

export default function AboutView({ isActive = true }: { isActive?: boolean }) {
    // --- STATE UNTUK INSTAGRAM FEED ---
    const [instaPosts, setInstaPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulasi Fetch API Instagram
    useEffect(() => {
        // NANTI GANTI URL INI DENGAN ENDPOINT LARAVEL ANDA
        // Contoh: fetch('/api/instagram-feed')
        const fetchInstagramFeed = async () => {
            try {
                // Simulasi delay jaringan
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Data dummy yang meniru response Instagram Basic Display API
                const dummyData = [
                    { id: 1, media_url: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=400', permalink: '#', likes: 120, comments: 14 },
                    { id: 2, media_url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=400', permalink: '#', likes: 89, comments: 5 },
                    { id: 3, media_url: 'https://images.unsplash.com/photo-1621304561081-30db76939e6a?q=80&w=400', permalink: '#', likes: 256, comments: 32 },
                    { id: 4, media_url: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400', permalink: '#', likes: 45, comments: 2 },
                ];
                
                setInstaPosts(dummyData);
            } catch (error) {
                console.error("Gagal mengambil data Instagram:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (isActive) {
            fetchInstagramFeed();
        }
    }, [isActive]);

    if (!isActive) return null;

    // Variabel animasi
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full min-h-screen bg-white font-sans overflow-hidden text-gray-800">
            
            {/* --- HERO SECTION (Tetap sama seperti sebelumnya) --- */}
            <section className="relative bg-pink-300 pt-28 pb-32 px-6 lg:px-20 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: -6, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="bg-white p-4 pb-16 shadow-2xl rounded-sm transform -rotate-6 max-w-sm">
                            <img 
                                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop" 
                                alt="Nyicheeze Dessert" 
                                className="w-full h-auto object-cover rounded"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-white">
                            <Sparkles size={24} />
                            <span className="text-xl font-bold tracking-widest uppercase">Dessert premium yang creamy</span>
                            <Sparkles size={24} />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-md mb-6 leading-none">
                            Nyicheeze 🧀
                        </h1>
                        <p className="text-lg md:text-xl text-pink-50 leading-relaxed font-medium">
                            Nyicheeze adalah dessert yang memadukan gurihnya cream cheese premium dengan kelembutan biskuit, disajikan dalam cube-cup sehingga siap santap dan mudah dibawa kemana saja.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 transform translate-y-1">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.9,122.9,197.6,110.15,242.45,101.55,283.47,75.46,321.39,56.44Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* --- KENAPA BANYAK DISUKAI SECTION (Tetap sama) --- */}
            <section className="py-20 px-6 lg:px-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center relative"
                >
                    <div className="absolute inset-0 bg-pink-100 rounded-full scale-110 -z-10 blur-xl"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop" 
                        alt="Kenapa disukai" 
                        className="w-full max-w-md h-auto object-cover rounded-[3rem] border-8 border-pink-200 shadow-xl"
                    />
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-6">Kenapa banyak disukai?</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Setiap suapan menghadirkan sensasi manis-gurih yang lumer di mulut, cocok untuk teman santai, hadiah, atau camilan favorit di mana pun Anda berada.
                    </p>
                    <div className="flex flex-col gap-4 text-left">
                        {["Cube-cup praktis dan siap santap", "Rasa creamy dengan tekstur biskuit lembut", "Pas untuk berbagai momen spesial"].map((item, index) => (
                            <motion.div key={index} whileHover={{ x: 10 }} className="flex items-center gap-4 bg-pink-50 p-4 rounded-xl shadow-sm border border-pink-100">
                                <div className="bg-pink-400 p-2 rounded-full text-white"><Star size={20} /></div>
                                <span className="font-semibold text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* --- FITUR BANNER (Tetap sama) --- */}
            <section className="bg-pink-300 py-12 px-6 mt-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                    {/* ... (Isi banner fitur tetap sama) ... */}
                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3">
                        <Heart size={48} strokeWidth={1.5} />
                        <h4 className="text-xl font-bold">Dibuat dengan Cinta</h4>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3">
                        <Gift size={48} strokeWidth={1.5} />
                        <h4 className="text-xl font-bold">Hadiah Sempurna</h4>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3">
                        <Star size={48} strokeWidth={1.5} />
                        <h4 className="text-xl font-bold">Rasa Bintang 5</h4>
                    </motion.div>
                </div>
            </section>

            {/* --- INSTAGRAM FEED SECTION (BARU) --- */}
            <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto text-center">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex justify-center mb-4">
                        <div className="bg-pink-100 text-pink-500 p-4 rounded-full">
                            <Instagram size={40} />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 uppercase tracking-wide">
                        Ikuti Keseruannya
                    </h2>
                    <p className="text-gray-500 mb-12 text-lg">Intip momen manis Nyicheeze di Instagram <a href="#" className="text-pink-400 font-bold hover:underline">@nyicheeze</a></p>
                </motion.div>

                {/* Grid Instagram */}
                {isLoading ? (
                    // Tampilan Loading (Skeleton)
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-pink-100 aspect-square rounded-2xl"></div>
                        ))}
                    </div>
                ) : (
                    // Tampilan Feed Asli
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                            hidden: { opacity: 0 }
                        }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {instaPosts.map((post) => (
                            <motion.div 
                                key={post.id}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-square group rounded-2xl overflow-hidden cursor-pointer shadow-md"
                            >
                                {/* Gambar Postingan */}
                                <img 
                                    src={post.media_url} 
                                    alt="Instagram Post" 
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Overlay Hitam Transparan saat di-hover (meniru IG) */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 text-white">
                                    <div className="flex items-center gap-2">
                                        <Heart size={24} className="fill-white" />
                                        <span className="font-bold text-lg">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageCircle size={24} className="fill-white" />
                                        <span className="font-bold text-lg">{post.comments}</span>
                                    </div>
                                </div>
                                
                                {/* Ikon IG Kecil di pojok atas */}
                                <div className="absolute top-3 right-3 text-white opacity-80 drop-shadow-md">
                                    <Instagram size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Tombol Follow */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
                    <a 
                        href="https://instagram.com/nyicheeze" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        <Instagram size={20} />
                        Follow Kami di Instagram
                    </a>
                </motion.div>
            </section>

        </div>
    );
}