<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth; // Import Auth facade
use App\Models\Rental; // Import the Rental model
use Illuminate\Http\Request;
use Inertia\Inertia;

class MyOrdersController extends Controller
{
    //
   public function index() {

    $user = Auth::user();


    $orders = Rental::with(['customer', 'vehicle'])->where('customer_id', $user->id)->get();

    return Inertia::render("Employee/Orders", [

        "rentals" => $orders
    ]);
   }

}
