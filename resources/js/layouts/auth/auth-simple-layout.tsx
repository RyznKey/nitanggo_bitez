import { Link } from '@inertiajs/react';

import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FFF5ED] p-6 md:p-10 font-sans text-[#4A3B32]">
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
