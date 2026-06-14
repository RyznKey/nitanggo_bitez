<?php

use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;

Route::inertia('/', 'welcome')->name('home');

// --- RUTE BAWAAN STARTER KIT (TEAMS) ---
Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        // Dashboard utama (Sudah terhubung ke Dashboard.jsx yang memiliki fitur Multi-Role)
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
});

// --- RUTE ORDERS ---
Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');


// --- RUTE MULTI-ROLE (SISTEM MEMBERSHIP) ---
Route::middleware(['auth', 'verified'])->group(function () {
    
    // 1. Rute Khusus Admin
    Route::middleware('role:admin')->prefix('admin')->name('admin.')->group(function () {
        Route::get('/kelola-pengguna', function () {
            return Inertia::render('Admin/KelolaPengguna'); 
        })->name('users');
    });

    // 2. Rute Khusus Reseller
    Route::middleware('role:reseller')->prefix('reseller')->name('reseller.')->group(function () {
        Route::get('/jaringan-saya', function () {
            /** @var \App\Models\User $user */
            $user = \Illuminate\Support\Facades\Auth::user();
            
            // Mengambil data member di bawah reseller ini
            $downlines = $user->downlines; 
            
            return Inertia::render('Reseller/Jaringan', ['downlines' => $downlines]);
        })->name('jaringan');
    });

    // 3. Rute Member & Reseller (Bisa akses materi yang sama)
    Route::middleware('role:member,reseller')->group(function () {
        Route::get('/materi-premium', function () {
            return Inertia::render('Member/Materi'); 
        })->name('materi');
    });

    // 4. Rute Khusus Non-Member
    Route::middleware('role:non-member')->group(function () {
        Route::get('/upgrade-akun', function () {
            return Inertia::render('NonMember/Upgrade'); 
        })->name('upgrade');
    });

});

require __DIR__.'/settings.php';