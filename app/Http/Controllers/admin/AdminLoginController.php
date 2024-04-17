<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;


class AdminLoginController extends Controller
{
    //
    public function index(){
        return Inertia::render("Admin/Auth/AdminLogin");
    }

    public function authenticate(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->passes()) {

            if(Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password],
            $request->has('remember'))) {

                $admin = Auth::guard('admin')->user();

                if($admin->role === 1) {
                return redirect()->route('admin.dashboard');
                } else {

                Auth::guard('admin')->logout();

                return Inertia::render('Admin/Auth/AdminLogin', [
                    'errors' => ['role' => 'Not authorized to access admin panel'],
                ]);
                }

            } else {

                return Inertia::render('Admin/Auth/AdminLogin', [
                    'errors' => ['login' => 'Your email or password is incorrect'],
                ]);
            }

        } else {
            return redirect()->route('admin.login')
                ->withErrors($validator)
                ->withInput($request->only('email'));
        }
    }

    public function logout() {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }
}
