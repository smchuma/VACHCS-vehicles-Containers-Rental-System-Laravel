<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Customer;
use App\Models\Rental;
use App\Models\Vehicle;
use Illuminate\Http\Request;
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

    public function show($id)
    {
        $vehicle = Vehicle::findOrFail($id);
        return Inertia::render('Employee/VehicleShow', ['vehicle' => $vehicle]);
    }

    public function storeRental(Request $request)
    {
        $request->validate([
            'customer_id' => 'required|string|max:255',
            'customer_name' => 'required|string|max:255',
            'customer_email' => 'required|string|email|max:255',
            'customer_phone' => 'required|string|max:15',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'total_price' => 'required|integer',
            'vehicle_id' => 'required|exists:vehicles,id'
        ]);

        dd($request->all());


        // Create the customer
        $customer = Customer::create([
            'id_number' => $request->customer_id,
            'name' => $request->customer_name,
            'phone_number' => $request->customer_phone,
            'email' => $request->customer_email,
            'address' => $request->customer_address,
            'city' => $request->customer_city,
        ]);

        // Generate a unique rental order number
        $rentalOrderNumber = 'RO24-' . Str::random(8);

        // Create the rental
        $rental = Rental::create([
            'rental_order_number' => $rentalOrderNumber,
            'customer_id' => $customer->id,
            'vehicle_id' => $request->vehicle_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'total_price' => $request->total_price,
        ]);

        return redirect()->route('index')->with('success', 'Rental created successfully.');
    }
}
