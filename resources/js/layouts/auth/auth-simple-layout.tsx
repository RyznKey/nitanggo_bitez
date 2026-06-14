import { Link } from '@inertiajs/react';

import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FFF5ED] p-6 md:p-10 font-sans text-[#4A3B32]">
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <Link 
                    href={home()} 
                    className="flex items-center gap-2 text-sm font-bold text-[#D49800] bg-white px-4 py-2 rounded-full shadow-sm border border-[#FDE8E7] hover:bg-[#FFF9E6] hover:-translate-x-1 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Kembali
                </Link>
            </div>
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#FDE8E7] p-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="flex flex-col items-center gap-2 font-medium no-underline"
                        >
                            <img 
                                src="/assets/NITANGGO.png" 
                                alt="Logo" 
                                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-white/50" 
                            />
                            <div className="font-extrabold text-2xl tracking-[0.5px] uppercase leading-none text-[#2B2118]">
                                NITANGGO <span className="block text-sm font-medium text-[#7A6A60] mt-1 text-center">BITEZ</span>
                            </div>
                        </Link>

                        <div className="space-y-2 text-center mt-2">
                            <h1 className="text-2xl font-extrabold text-[#4A3B32]">{title}</h1>
                            <p className="text-center text-sm text-[#7A6A60]">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
