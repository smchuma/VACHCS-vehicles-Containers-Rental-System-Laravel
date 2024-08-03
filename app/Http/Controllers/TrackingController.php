<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrackingController extends Controller
{
    //

    public function index(Request $request) {

        $query = Rental::with(['customer', 'vehicle'])->where('status', 'Approved');

        if ($request->has('search')) {
            $search = $request->get('search');
            $query->where('rental_order_number', 'LIKE', "%{$search}%")
                  ->orWhereHas('customer', function($q) use ($search) {
                      $q->where('name', 'LIKE', "%{$search}%");
                  })
                  ->orWhereHas('vehicle', function($q) use ($search) {
                      $q->where('name', 'LIKE', "%{$search}%");
                  });
        }

        return Inertia::render("Admin/Tracking", [
            "rentals" => $query->orderByDesc('created_at')->paginate(10),
            "search" => $request->get('search')
        ]);
    }


}
