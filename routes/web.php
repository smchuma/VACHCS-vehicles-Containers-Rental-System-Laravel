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
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// employing renting side

Route::group(['middleware' => 'auth'], function() {

Route::get('/', [HomeController::class,'index'])->name('index');

});


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

        Route::get('/rentals', [RentalController::class, 'index'] )->name('rental');

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
