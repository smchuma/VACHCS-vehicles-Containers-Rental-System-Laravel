<?php

use App\Http\Controllers\admin\AdminDashboard;
use App\Http\Controllers\admin\AdminLoginController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\CustomerController;
use App\Http\Controllers\admin\EmployeeController;
use App\Http\Controllers\admin\RentalController;
use App\Http\Controllers\admin\ReportController;
use App\Http\Controllers\admin\VehicleController;
use App\Http\Controllers\Employee\HomeController;
use App\Http\Controllers\Employee\RentalOrdersController;
use App\Http\Controllers\Employee\VehicleRentalController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// employing renting side

Route::group(['middleware' => 'auth'], function() {

Route::get('/', [HomeController::class,'index'])->name('index');
Route::get('/vehicles/{id}', [HomeController::class, 'show'])->name('vehicles.show');
Route::post('/rental', [HomeController::class, 'storeRental'])->name('rentals.store');

Route::get('/rentals-orders', [RentalOrdersController::class, 'index'])->name('rental-orders.index');
Route::delete('/rentals-orders/{id}', [RentalOrdersController::class, 'destroy'])->name('rental-orders.destroy');
Route::get('/rentals/{status}', [RentalOrdersController::class, 'getRentalsByStatus']);


Route::get('/customers', [CustomerController::class, 'EmpCustomers'] )->name('EmpCustomers');
Route::post('/customers', [CustomerController::class, 'postCustomer'] )->name('postCustomer');
Route::delete('/customers/{id}', [CustomerController::class, 'destroy'] )->name('customer.destroy');
Route::put('/customers/{id}', [CustomerController::class, 'update'] )->name('customer.update');

Route::get('/reports', [ReportController::class, 'empReport'] );




});

Route::get('/report/{status}', [ReportController::class, 'getStatus'])->name("report");



// admin side

Route::group(['prefix' => 'admin'], function() {

    Route::group(['middleware' => 'admin.guest'], function() {
        Route::get("/", [AdminLoginController::class,"index"])->name("admin.login");
        Route::post('/', [AdminLoginController:: class, 'authenticate'])->name('admin.authenticate');


    });

    Route::group(['middleware' => 'admin.auth'], function() {
    Route::get('/dashboard', [AdminDashboard::class, 'index'] )->name('admin.dashboard');

    Route::resource('/vehicle', VehicleController::class);

        //Category Routes
        Route::resource('/category', CategoryController::class);

        Route::get('/employees', [EmployeeController::class, 'index'] )->name('employee');
        Route::post('/employees', [EmployeeController::class, 'store'] )->name('employee.store');
        Route::delete('/employees/{id}', [EmployeeController::class, 'destroy'] )->name('employee.destroy');
        Route::put('/employees/{id}', [EmployeeController::class, 'update'] )->name('employee.update');


        Route::get('/rentals', [RentalOrdersController::class, 'rental'])->name('rental.index');
        Route::put('/rentals/{id}', [RentalOrdersController::class, 'update'])->name('rental.update');




        Route::get('/customers', [CustomerController::class, 'index'] )->name('customer');

        Route::get('/reports', [ReportController::class, 'index'] )->name('report');

        Route::post('/logout', [AdminDashboard::class, 'logout'])->name('admin.logout');


    });

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
