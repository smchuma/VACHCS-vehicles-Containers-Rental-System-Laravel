<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
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
}
