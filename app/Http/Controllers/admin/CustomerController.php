<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Rental;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    //
    public function index() {
        return Inertia::render("Admin/Customer");
    }


    public function EmpCustomers(Request $request) {

        $query = Customer::query();

        if($request->has('search')){
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%");
        }

        return Inertia::render("Employee/Customer",
            [
                "customers"=> $query->orderByDesc('created_at')->paginate(10),
            ]
        );

    }

    public function postCustomer(Request $request) {

        $request->validate([
            'customer_id_number' => 'required|string|max:255',
            'customer_name' => 'required|string|max:255',
            'customer_email' => 'required|string|email|max:255',
            'customer_phone' => 'required|string|max:15',
        ]);

        Customer::create([
            'id_number' => $request->customer_id_number,
            'name' => $request->customer_name,
            'phone_number' => $request->customer_phone,
            'email' => $request->customer_email,
            'address' => $request->customer_address,
            'city' => $request->customer_city,
        ]);

        return redirect()->back()->with('success', 'Customer added successfully');
    }


    public function destroy($id , Request $request)
    {
        $customer = Customer::findOrFail($id);

        $rentalOrders = Rental::where('customer_id', $id)->get();

        foreach ($rentalOrders as $rentalOrder) {
        $vehicle = Vehicle::find($rentalOrder->vehicle_id);
        if ($vehicle) {
            $vehicle->status = 'Available';
            $vehicle->save();
        }
    }
        Rental::where('customer_id', $id)->delete();

        $customer->delete();
        return redirect()->back()->with('success', 'Customer deleted successfully.');
    }


    //update

    public function update(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);
        $request->validate([
            'id_number' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone_number' => 'required|string|max:15',

        ]);

        $customer->id_number = $request->input('id_number');
        $customer->name = $request->input('name');
        $customer->phone_number = $request->input('phone_number');
        $customer->email = $request->input('email');
        $customer->address = $request->input('address');
        $customer->city = $request->input('city');

        $customer->save();


        return redirect()->back()->with('success', 'Customer updated successfully.');

    }

}
