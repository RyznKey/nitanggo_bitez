<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    protected $fillable = [
        'member_id',
        'full_name',
        'whatsapp',
        'email',
        'birth_date',
        'joined_at',
        'stamp_count',
        'reward_status',
        'purchase_history',
        'terms_accepted',
        'terms_accepted_at',
    ];

    protected $casts = [
        'birth_date' => 'date',
        'joined_at' => 'datetime',
        'terms_accepted' => 'boolean',
        'terms_accepted_at' => 'datetime',
        'purchase_history' => 'array',
    ];
}
