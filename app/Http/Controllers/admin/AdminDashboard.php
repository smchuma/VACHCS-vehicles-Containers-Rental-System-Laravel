<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Rental;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminDashboard extends Controller
{
    //
    public function index(){
        $rentals = Rental::with(['customer', 'vehicle'])->get();
        $vehicles = Vehicle::get();

        return Inertia::render("Admin/AdminDashboard", [
            "rentals" => $rentals,
            "vehicles" => $vehicles
        ]);

    }

    public function logout() {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }

}
