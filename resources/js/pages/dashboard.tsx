import { Head, usePage } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShoppingCart, DollarSign, Users, Utensils, TrendingUp, Clock, CreditCard, ArrowUpRight, Flame, Coffee, Drumstick, CupSoda } from 'lucide-react';
import { dashboard } from '@/routes';

export default function Dashboard() {
    const { auth } = usePage<any>().props;
    const userName = auth?.user?.name || 'Admin';

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6 bg-muted/20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Selamat Datang, {userName}!</h1>
                        <p className="text-muted-foreground mt-1">
                            Berikut adalah ringkasan performa Nitanggo Bitez hari ini.
                        </p>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
                            <DollarSign className="h-4 w-4 text-emerald-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Rp 2.450.000</div>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                <span className="text-emerald-500 font-medium flex items-center mr-1">
                                    <ArrowUpRight className="h-3 w-3 mr-1" />
                                    +12.5%
                                </span>
                                dari bulan lalu
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pesanan Baru</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+145</div>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                <span className="text-emerald-500 font-medium flex items-center mr-1">
                                    <ArrowUpRight className="h-3 w-3 mr-1" />
                                    +8%
                                </span>
                                dari minggu lalu
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Menu Terjual</CardTitle>
                            <Utensils className="h-4 w-4 text-orange-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">324 Porsi</div>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                <span className="text-emerald-500 font-medium flex items-center mr-1">
                                    <ArrowUpRight className="h-3 w-3 mr-1" />
                                    +15%
                                </span>
                                dari bulan lalu
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pelanggan Aktif</CardTitle>
                            <Users className="h-4 w-4 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+89</div>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                <span className="text-emerald-500 font-medium flex items-center mr-1">
                                    <ArrowUpRight className="h-3 w-3 mr-1" />
                                    +4%
                                </span>
                                dari bulan lalu
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Lower Section */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    {/* Recent Orders Chart / Table */}
                    <Card className="col-span-1 lg:col-span-4 flex flex-col">
                        <CardHeader>
                            <CardTitle>Pesanan Terbaru</CardTitle>
                            <CardDescription>
                                Anda memiliki 14 pesanan baru yang perlu diproses hari ini.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="space-y-6">
                                {[
                                    { name: 'Budi Santoso', item: 'Nasi Goreng Spesial, Es Teh Manis', total: 'Rp 45.000', status: 'Pending', time: '10 menit lalu' },
                                    { name: 'Siti Aminah', item: 'Mie Ayam Bakso, Jus Jeruk', total: 'Rp 35.000', status: 'Proses', time: '25 menit lalu' },
                                    { name: 'Andi Wijaya', item: 'Ayam Geprek Level 3, Es Kosong', total: 'Rp 25.000', status: 'Selesai', time: '1 jam lalu' },
                                    { name: 'Rina Melati', item: 'Kopi Susu Gula Aren, Croissant', total: 'Rp 40.000', status: 'Selesai', time: '2 jam lalu' },
                                    { name: 'Dimas Anggara', item: 'Paket Komplit Bitez 1', total: 'Rp 65.000', status: 'Selesai', time: '3 jam lalu' },
                                ].map((order, i) => (
                                    <div key={i} className="flex items-center">
                                        <Avatar className="h-9 w-9">
                                            <AvatarFallback className="bg-primary/10 text-primary">
                                                {order.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">{order.name}</p>
                                            <p className="text-sm text-muted-foreground line-clamp-1">{order.item}</p>
                                        </div>
                                        <div className="ml-auto text-right">
                                            <div className="text-sm font-medium">{order.total}</div>
                                            <Badge variant={order.status === 'Selesai' ? 'default' : order.status === 'Proses' ? 'secondary' : 'outline'} className="mt-1 text-[10px] px-1.5 py-0">
                                                {order.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Popular Items */}
                    <Card className="col-span-1 lg:col-span-3 flex flex-col">
                        <CardHeader>
                            <CardTitle>Menu Terlaris</CardTitle>
                            <CardDescription>
                                Menu yang paling banyak dipesan bulan ini.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {[
                                    { name: 'Nasi Goreng Bitez', sales: 124, trend: '+12%', icon: <Flame size={20} className="text-orange-500" /> },
                                    { name: 'Mie Ayam Spesial', sales: 98, trend: '+5%', icon: <Utensils size={20} className="text-yellow-500" /> },
                                    { name: 'Kopi Susu Aren', sales: 85, trend: '+18%', icon: <Coffee size={20} className="text-amber-700" /> },
                                    { name: 'Ayam Geprek Mozzarella', sales: 72, trend: '-2%', icon: <Drumstick size={20} className="text-amber-500" /> },
                                    { name: 'Es Teh Kampul', sales: 64, trend: '+4%', icon: <CupSoda size={20} className="text-orange-400" /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20 text-xl">
                                            {item.icon}
                                        </div>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">{item.name}</p>
                                            <p className="text-xs text-muted-foreground">{item.sales} pesanan</p>
                                        </div>
                                        <div className={`ml-auto text-sm font-medium ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                            {item.trend}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (props: { currentTeam?: { slug: string } | null }) => ({
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: props.currentTeam ? dashboard(props.currentTeam.slug) : '/dashboard',
        },
    ],
});
