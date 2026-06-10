<?php

namespace App\Http\Controllers;

use App\Models\Membership;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MembershipController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'whatsapp' => ['required', 'string', 'max:30', 'regex:/^\+?[0-9\s\-]{9,15}$/'],
            'birth_date' => ['required', 'date'],
            'email' => ['required', 'email', 'max:255', 'unique:memberships,email'],
            'terms' => ['accepted'],
        ], [
            'full_name.required' => 'Nama lengkap wajib diisi.',
            'whatsapp.required' => 'Nomor WhatsApp wajib diisi.',
            'whatsapp.regex' => 'Format nomor WhatsApp tidak valid.',
            'birth_date.required' => 'Tanggal lahir wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email sudah terdaftar sebagai member.',
            'terms.accepted' => 'Anda harus menyetujui syarat dan ketentuan membership.',
        ]);

        $member = Membership::create([
            'member_id' => 'NTG-'.Str::upper(Str::random(6)),
            'full_name' => $validated['full_name'],
            'whatsapp' => $validated['whatsapp'],
            'email' => $validated['email'],
            'birth_date' => $validated['birth_date'],
            'joined_at' => now(),
            'stamp_count' => 0,
            'reward_status' => 'active',
            'purchase_history' => [],
            'terms_accepted' => true,
            'terms_accepted_at' => now(),
        ]);

        return redirect()->route('membership.register')->with('success', 'Pendaftaran member berhasil! Member ID Anda: '.$member->member_id);
    }
}
