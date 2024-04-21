<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    //
    public function index(Request $request) {
        $query = Category::query();

        if($request->has('search')){
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%");
        }


        // $category = Category::latest()->paginate(10);
        return Inertia::render("Admin/Category", [
            "category"=> $query->orderByDesc('created_at')->paginate(10),
        ]);
    }

    public function store(Request $request) {


        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:'.Category::class,
        ]);

        Category::create([
            'name'=> $request->name,
            'slug'=> $request->slug,
            ]);
            return redirect()->route('category')->with('success','Category added successfully');





    }
}
