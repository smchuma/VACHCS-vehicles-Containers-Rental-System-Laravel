<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    use HasFactory;

    protected $fillable = [
        'rental_order_number',
        'customer_id',
        'vehicle_id',
        'start_date',
        'end_date',
        'total_price',
        'status'
    ];

    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function vehicle() {
        return $this->belongsTo(Vehicle::class);
    }


}
