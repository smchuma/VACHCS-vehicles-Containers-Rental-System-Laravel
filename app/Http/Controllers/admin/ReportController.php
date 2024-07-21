<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Rental;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    //
    public function index() {
        return Inertia::render("Admin/Report");
    }

    public function empReport() {
        return Inertia::render("Employee/Report");
    }


    public function getStatus($status)
{

    $rentals = Rental::where('status', $status)->with(['customer', 'vehicle'])->get();


    return Inertia::render("Admin/ReportStatus",
    [
        "rentals" => $rentals,
        "status" => $status

    ]
    );

}
}
