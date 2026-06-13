<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function promo()
    {
        $promoActive = Setting::where('key', 'promo_active')->value('value') === 'true';
        $promoName = Setting::where('key', 'promo_name')->value('value') ?? '';
        $promoDiscount = Setting::where('key', 'promo_discount')->value('value') ?? 0;

        return Inertia::render('admin/settings/promo', [
            'promo' => [
                'is_active' => $promoActive,
                'name' => $promoName,
                'discount' => (int) $promoDiscount,
            ]
        ]);
    }

    public function updatePromo(Request $request)
    {
        $request->validate([
            'is_active' => 'required|boolean',
            'name' => 'nullable|string|max:255',
            'discount' => 'required|numeric|min:0|max:100', // Asumsi diskon berupa persen
        ]);

        Setting::updateOrCreate(['key' => 'promo_active'], ['value' => $request->is_active ? 'true' : 'false']);
        Setting::updateOrCreate(['key' => 'promo_name'], ['value' => $request->name]);
        Setting::updateOrCreate(['key' => 'promo_discount'], ['value' => $request->discount]);

        return redirect()->back()->with('success', 'Pengaturan Promo berhasil disimpan.');
    }
}
