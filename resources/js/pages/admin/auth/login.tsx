import { Head, useForm, Link } from '@inertiajs/react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Checkbox } from '../../../components/ui/checkbox';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Spinner } from '../../../components/ui/spinner';

export default function AdminLogin() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-[#2B2118] font-sans flex flex-col items-center justify-center p-4">
            <Head title="Admin Portal" />
            
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center mb-8">
                    <img 
                        src="/assets/NITANGGO.png" 
                        alt="Nitanggo Bitez" 
                        className="w-16 h-16 rounded-full mx-auto shadow-md border-2 border-white object-cover mb-4" 
                    />
                    <h1 className="text-2xl font-bold text-white tracking-wider">ADMIN PORTAL</h1>
                    <p className="text-[#EBE3D5] text-sm mt-1">Nitanggo Bitez Management</p>
                </div>

                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl text-center text-[#4A3B32]">Login Khusus Admin</CardTitle>
                        <CardDescription className="text-center text-[#7A6A60]">
                            Masukkan email dan password untuk mengelola sistem.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[#4A3B32] font-semibold">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="border-[#EBE3D5] focus-visible:ring-[#E07A72]"
                                    placeholder="admin@example.com"
                                    autoComplete="email"
                                    autoFocus
                                />
                                {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-[#4A3B32] font-semibold">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="border-[#EBE3D5] focus-visible:ring-[#E07A72]"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                                {errors.password && <p className="text-sm text-red-500 font-medium">{errors.password}</p>}
                            </div>

                            <div className="flex items-center space-x-2 pt-2">
                                <Checkbox
                                    id="remember"
                                    checked={data.remember}
                                    onCheckedChange={(checked) => setData('remember', checked as boolean)}
                                    className="border-[#EBE3D5] data-[state=checked]:bg-[#E07A72] data-[state=checked]:border-[#E07A72]"
                                />
                                <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#7A6A60]">
                                    Ingat saya
                                </Label>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#E07A72] hover:bg-[#CC665E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E07A72] disabled:opacity-50 transition-colors mt-6"
                            >
                                {processing ? <Spinner className="text-white mr-2" /> : null}
                                Masuk ke Panel
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm">
                            <Link href="/" className="text-[#7A6A60] hover:text-[#4A3B32] transition-colors">
                                &larr; Kembali ke Beranda Utama
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
