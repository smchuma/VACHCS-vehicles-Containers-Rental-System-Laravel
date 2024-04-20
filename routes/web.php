<?php

use App\Http\Controllers\admin\AdminDashboard;
use App\Http\Controllers\admin\AdminLoginController;
use App\Http\Controllers\admin\CustomerController;
use App\Http\Controllers\admin\EmployeeController;
use App\Http\Controllers\admin\RentalController;
use App\Http\Controllers\admin\ReportController;
use App\Http\Controllers\admin\VehicleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// employing renting side

Route::group(['middleware' => 'auth'], function() {
Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

});


// admin side

Route::group(['prefix' => 'admin'], function() {

    Route::group(['middleware' => 'admin.guest'], function() {
        Route::get("/", [AdminLoginController::class,"index"])->name("admin.login");
        Route::post('/', [AdminLoginController:: class, 'authenticate'])->name('admin.authenticate');


    });

    Route::group(['middleware' => 'admin.auth'], function() {
        Route::get('/dashboard', [AdminDashboard::class, 'index'] )->name('admin.dashboard');
        Route::post('/logout', [AdminDashboard::class, 'logout'])->name('admin.logout');
        Route::get('/vehicle', [VehicleController::class, 'index'] )->name('admin.vehicle');
        Route::get('/employee', [EmployeeController::class, 'index'] )->name('admin.employee');
        Route::get('/rental', [RentalController::class, 'index'] )->name('admin.rental');
        Route::get('/customer', [CustomerController::class, 'index'] )->name('admin.customer');
        Route::get('/report', [ReportController::class, 'index'] )->name('admin.report');

    });

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
