<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        // Get all non-admin users
        $customers = User::where('is_admin', false)
            ->orderBy('purchases_count', 'desc')
            ->latest()
            ->get();

        return Inertia::render('admin/customers/index', [
            'customers' => $customers,
        ]);
    }
}
