<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    //
    public function index(Request $request) {

        $query = User::query();

        if($request->has('search')){
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%");
        }
        return Inertia::render("Admin/Employee",

        [
            "users"=> $query->orderByDesc('created_at')->paginate(10),
        ]

    );
    }

    public function store(Request $request) {



        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'role'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => $request->role,
        ]);

        event(new Registered($user));

        return redirect()->back()->with('success', 'User created successfully!');
    }


    public function destroy($id)
    {

        $user = User::findOrFail($id);

        $user->delete();
        return redirect()->back()->with('success', 'User deleted successfully.');
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->name = $request->input('name');

        // Check if a new password is provided
        if ($request->filled('password')) {
            $user->password = Hash::make($request->input('password'));
        }

        $user->save();

        return redirect()->back()->with('success', 'User updated successfully.');
    }
}
