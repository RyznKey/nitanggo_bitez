<?php

Route::get('/migrate-db-force', function () {
    \Illuminate\Support\Facades\Artisan::call('migrate:fresh', ['--force' => true, '--seed' => true]);
    return 'Migrated and seeded successfully!';
});

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use App\Models\Order;
use App\Models\Product;
use App\Models\Setting;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('welcome', [
        'products' => Product::where('is_active', true)->latest()->get(),
        'orders' => request()->user() ? Order::where('user_id', request()->user()->id)->latest()->get() : [],
        'promo' => [
            'is_active' => Setting::where('key', 'promo_active')->value('value') === 'true',
            'name' => Setting::where('key', 'promo_name')->value('value'),
            'discount' => (int) Setting::where('key', 'promo_discount')->value('value'),
        ],
    ]);
})->name('home');

// Admin Routes
Route::prefix('admin')->name('admin.')->group(function () {
    // Admin Guest Routes
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
        Route::post('/login', [AuthController::class, 'login']);
    });

    // Admin Protected Routes
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::resource('products', ProductController::class);
        Route::resource('transactions', TransactionController::class);
        Route::resource('orders', OrderController::class)->only(['index', 'update']);
        Route::get('customers', [CustomerController::class, 'index'])->name('customers.index');
        Route::get('settings/promo', [SettingController::class, 'promo'])->name('settings.promo');
        Route::post('settings/promo', [SettingController::class, 'updatePromo']);
        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    });
});

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
});

Route::post('/checkout', function (Request $request) {
    $user = $request->user();
    if ($user) {
        $user->increment('purchases_count');
    }

    // Simpan pesanan ke tabel orders dan catat transaksi
    if ($request->has('items')) {
        $amount = $request->input('amount') ?? 0;
        $customerName = $request->input('customer_name') ?: 'Guest';
        $whatsapp = $request->input('whatsapp') ?? '';

        Order::create([
            'user_id' => $user ? $user->id : null,
            'customer_name' => $customerName,
            'whatsapp' => $whatsapp,
            'items' => $request->input('items') ?? [],
            'total_amount' => $amount,
            'pickup_method' => $request->input('pickup_method') ?? 'Ambil di Kantin',
            'delivery_address' => $request->input('delivery_address'),
            'notes' => $request->input('notes'),
            'status' => 'completed',
        ]);

        Transaction::create([
            'type' => 'income',
            'amount' => $amount,
            'description' => 'Pesanan Otomatis: '.$customerName,
            'date' => now()->toDateString(),
        ]);
    }

    return back()->with('success', 'Pesanan berhasil dibuat!');
})->name('checkout');

require __DIR__.'/settings.php';
