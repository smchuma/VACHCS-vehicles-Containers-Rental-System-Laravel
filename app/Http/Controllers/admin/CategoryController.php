<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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


        return Inertia::render("Admin/Category", [
            "category"=> $query->withCount("vehicles")->orderByDesc('created_at')->paginate(10),
        ]);
    }

    public function store(Request $request) {


        $request->validate([
            'name' => 'required|string|max:255',

        ]);

        Category::create([
            'name'=> $request->name,

            ]);
            return redirect()->back()->with('success','Category added successfully');



    }

    public function destroy(Category $category) {

    $category->delete();
    return redirect()->back()->with('success','successfully deleted');


}
}
