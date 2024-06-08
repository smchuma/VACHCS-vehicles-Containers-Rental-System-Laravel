<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
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
}
