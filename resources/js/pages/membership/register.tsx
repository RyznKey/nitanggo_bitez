import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import '../../../css/styles.css';

export default function MembershipRegister() {
    const { flash } = usePage<{ flash?: { success?: string } }>().props;

    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        whatsapp: '',
        birth_date: '',
        email: '',
        terms: false,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post('/membership/register');
    };

    return (
        <>
            <Head title="Daftar Membership Nitanggo Bitez" />

            <main className="container py-10 md:py-14">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
                    <section className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-8 md:p-10">
                        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E68A00]">Membership</p>
                        <h1 className="mt-4 text-3xl md:text-4xl font-black text-[#2B2118] leading-tight">
                            Daftar member dan nikmati reward eksklusif Nitanggo Bitez.
                        </h1>
                        <p className="mt-4 text-gray-600 leading-7 max-w-xl">
                            Isi form singkat ini untuk mendapatkan Member ID, promo khusus, birthday reward, dan status stamp digital.
                        </p>

                        <div className="mt-8 rounded-3xl bg-[#FFF7E6] border border-[#F8C83B]/60 p-6">
                            <h2 className="text-xl font-black text-[#2B2118]">Benefit membership</h2>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                <li>🎁 Buy 5 Get 2 Drinks FREE</li>
                                <li>🎂 Birthday Reward</li>
                                <li>⭐ Promo eksklusif member</li>
                                <li>📱 Informasi promo melalui WhatsApp</li>
                                <li>📧 Pemulihan akun melalui email</li>
                            </ul>
                        </div>

                        <div className="mt-8 rounded-3xl border border-dashed border-gray-200 p-6 text-sm text-gray-600">
                            <p className="font-semibold text-[#2B2118]">Data yang akan tersimpan sistem</p>
                            <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-gray-700">
                                <li>• Member ID</li>
                                <li>• Nama Lengkap</li>
                                <li>• Nomor WhatsApp</li>
                                <li>• Email</li>
                                <li>• Tanggal Lahir</li>
                                <li>• Tanggal Bergabung</li>
                                <li>• Jumlah Stamp</li>
                                <li>• Status Reward</li>
                                <li>• Riwayat Pembelian</li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-8 md:p-10">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E68A00]">Form registrasi</p>
                                <h2 className="mt-1 text-2xl font-black text-[#2B2118]">Daftar Sekarang</h2>
                            </div>
                            <Link href="/" className="text-sm text-gray-500 hover:text-[#2B2118] transition-colors">Kembali</Link>
                        </div>

                        {flash?.success && (
                            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                                {flash.success}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <label className="block text-sm font-semibold text-gray-700">
                                Nama Lengkap
                                <input
                                    type="text"
                                    value={data.full_name}
                                    onChange={(e) => setData('full_name', e.target.value)}
                                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-[#2B2118] outline-none transition focus:border-[#F8C83B] focus:bg-white"
                                    placeholder="Contoh: Anisa Rahma"
                                />
                                {errors.full_name && <span className="mt-1 block text-xs text-rose-500">{errors.full_name}</span>}
                            </label>

                            <label className="block text-sm font-semibold text-gray-700">
                                Nomor WhatsApp
                                <input
                                    type="text"
                                    value={data.whatsapp}
                                    onChange={(e) => setData('whatsapp', e.target.value)}
                                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-[#2B2118] outline-none transition focus:border-[#F8C83B] focus:bg-white"
                                    placeholder="Contoh: 0812xxxx"
                                />
                                {errors.whatsapp && <span className="mt-1 block text-xs text-rose-500">{errors.whatsapp}</span>}
                            </label>

                            <label className="block text-sm font-semibold text-gray-700">
                                Tanggal Lahir
                                <input
                                    type="date"
                                    value={data.birth_date}
                                    onChange={(e) => setData('birth_date', e.target.value)}
                                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-[#2B2118] outline-none transition focus:border-[#F8C83B] focus:bg-white"
                                />
                                {errors.birth_date && <span className="mt-1 block text-xs text-rose-500">{errors.birth_date}</span>}
                            </label>

                            <label className="block text-sm font-semibold text-gray-700">
                                Email
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-[#2B2118] outline-none transition focus:border-[#F8C83B] focus:bg-white"
                                    placeholder="contoh@email.com"
                                />
                                {errors.email && <span className="mt-1 block text-xs text-rose-500">{errors.email}</span>}
                            </label>

                            <label className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={data.terms}
                                    onChange={(e) => setData('terms', e.target.checked)}
                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#F8C83B] focus:ring-[#F8C83B]"
                                />
                                <span>
                                    Saya menyetujui syarat dan ketentuan membership Nitanggo Bitez.
                                </span>
                            </label>
                            {errors.terms && <span className="block text-xs text-rose-500">{errors.terms}</span>}

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-2xl bg-[#2B2118] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#1d1711] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {processing ? 'Menyimpan...' : 'Daftar Sekarang'}
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
}
