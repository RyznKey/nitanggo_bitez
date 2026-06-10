<?php

use App\Http\Controllers\MembershipController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/membership/register', fn () => inertia('membership/register'))->name('membership.register');
Route::post('/membership/register', [MembershipController::class, 'store'])->name('membership.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
