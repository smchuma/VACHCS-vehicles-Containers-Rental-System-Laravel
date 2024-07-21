<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Mail\RentalApprovalRequest;
use App\Models\Category;
use App\Models\Customer;
use App\Models\Rental;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    //
    public function index(Request $request) {
        $query = Vehicle::query();
        $categories = Category::all();

        if($request->has('search')){
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%");
        }

        return Inertia::render("Employee/Home", [
            "vehicles"=> $query->orderByDesc('created_at')->paginate(10),
            "categories" => $categories
        ]);
    }

    public function show($id , Request $request)
    {
        $vehicle = Vehicle::findOrFail($id);
        $query = Customer::query();

        if($request->has('search')){
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%");
        }

        return Inertia::render('Employee/VehicleShow', [
            'vehicle' => $vehicle,
            'customers' => $query->orderByDesc('created_at')->paginate(10)

        ]);
    }

    public function storeRental(Request $request)
    {

        $request->validate([
            'rental_order_number' => 'required|string|max:255',
            'vehicle_id' => 'required|exists:vehicles,id',
            'customer_id' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'total_price' => 'required|integer',

        ]);

        $vehicle = Vehicle::findOrFail($request->vehicle_id);


        if ($vehicle->status === 'Rented') {
            return redirect()->back()->withErrors(['vehicle_id' => 'This vehicle is already rented.']);
        }


        // Create the rental
        $rental = Rental::create([
            'rental_order_number' => $request->rental_order_number,
            'customer_id' => $request->customer_id,
            'vehicle_id' => $request->vehicle_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'total_price' => $request->total_price,
        ]);

        Mail::to('admin@vaches.com')->send(new RentalApprovalRequest($rental));


        $vehicle = Vehicle::findOrFail($request->vehicle_id);
        $vehicle->status = 'Rented';
        $vehicle->save();

        return redirect()->route('rental-orders.index')->with('success', 'Rental created successfully.');
    }
}
