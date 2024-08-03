<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_number',
        'name',
        'phone_number',
        'email',
        'address',
        'user_id',
        'city',
        'id'
    ];

    public function rentals() {
        return $this->hasMany(Rental::class);
    }
}
