<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Rental;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentalOrdersController extends Controller
{
    //
    public function index(Request $request) {
        $query = Rental::with(['customer', 'vehicle']);

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

        return Inertia::render("Employee/RentalOrders", [
            "rentals" => $query->orderByDesc('created_at')->paginate(10),
            "search" => $request->get('search')
        ]);
    }

    public function destroy($id , Request $request)
    {
        $rental = Rental::findOrFail($id);
        $vehicle = Vehicle::findOrFail($rental->vehicle_id);
        $vehicle->status = 'Available';
        $vehicle->save();
        $rental->delete();
        return redirect()->back()->with('success', 'Rental order deleted successfully.');
    }
}
