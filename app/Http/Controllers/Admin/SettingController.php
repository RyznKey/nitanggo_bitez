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
            ],
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

    public function homepage()
    {
        $hampersImage = Setting::where('key', 'hampers_image')->value('value');

        return Inertia::render('admin/settings/homepage', [
            'hampersImage' => $hampersImage,
        ]);
    }

    public function updateHomepage(Request $request)
    {
        $request->validate([
            'hampers_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
        ]);

        if ($request->hasFile('hampers_image')) {
            $file = $request->file('hampers_image');
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            $result = $cloudinary->uploadApi()->upload($file->getRealPath(), [
                'folder' => 'nitanggo_settings'
            ]);
            Setting::updateOrCreate(['key' => 'hampers_image'], ['value' => $result['secure_url']]);
        }

        return redirect()->back()->with('success', 'Pengaturan Beranda berhasil disimpan.');
    }
}
