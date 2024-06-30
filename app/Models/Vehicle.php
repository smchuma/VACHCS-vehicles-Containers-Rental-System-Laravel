<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'Vehicle_No',
        'name',
        'type',
        'manufacture',
        'capacity',
        'price_per_day',
        'status',
        'image',
        'category_id'
    ];


    public static function getStatuses(): array
    {
        return [
           'Available',
            'Rented',
            'Under Maintenance',
        ];
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }
}


