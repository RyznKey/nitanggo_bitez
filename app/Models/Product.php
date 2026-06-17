<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
        'is_active',
        'stock',
        'min_stock',
        'category',
        'weight',
    ];

    /**
     * Mutator for Postgres boolean compatibility.
     */
    protected function isActive(): \Illuminate\Database\Eloquent\Casts\Attribute
    {
        return \Illuminate\Database\Eloquent\Casts\Attribute::make(
            get: fn ($value) => $value === true || $value === 1 || $value === '1' || $value === 'true' || $value === 't',
            set: fn ($value) => $value ? 'true' : 'false',
        );
    }
}
