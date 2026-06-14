<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Setting;
use App\Models\Transaction;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalIncome = Transaction::where('type', 'income')->sum('amount');
        $totalExpense = Transaction::where('type', 'expense')->sum('amount');

        $promoActive = Setting::where('key', 'promo_active')->value('value') === 'true';

        $stats = [
            'total_products' => Product::count(),
            'total_users' => User::where('is_admin', 'false')->count(),
            'active_products' => Product::where('is_active', 'true')->count(),
            'balance' => $totalIncome - $totalExpense,
            'income' => $totalIncome,
            'promo_active' => $promoActive,
        ];

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
        ]);
    }
}
