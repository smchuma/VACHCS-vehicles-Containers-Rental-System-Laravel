<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class VehicleController extends Controller
{
    //
    public function index(Request $request) {
        $query = Vehicle::query();

        if($request->has('search')){
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%");
        }

        // $category = Category::latest()->paginate(10);
        return Inertia::render("Admin/vehicle/list", [
            "vehicle"=> $query->orderByDesc('created_at')->paginate(10),
        ]);
    }


    public function create() {
        $categories = Category::all();
        $statuses = Vehicle::getStatuses();

        return Inertia::render('Admin/vehicle/create', [
            'categories' => $categories,
            'statuses' => $statuses,
        ]);
    }




    public function store(Request $request)
    {
       $request->validate([
            'Vehicle_No' => 'required|string|max:255|unique:'.Vehicle::class,
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'manufacture' => 'required|string|max:255',
            'capacity' => 'required|integer',
            'price_per_day' => 'required|integer',
            'status' => 'required',
            'category_id' => 'required|exists:categories,id',
            'image' => ['image']
        ]);

        if($request->has('image')){
            $image = Storage::disk('public')->put('vehicles', $request->file('image'));

        }

        Vehicle::create([
            'Vehicle_No' => $request->Vehicle_No,
            'name' => $request->name,
            'type' => $request->type,
            'manufacture' => $request->manufacture,
            'capacity' => $request->capacity,
            'price_per_day' => $request->price_per_day,
            'status' => $request->status,
            'category_id' => $request->category_id,
            'image' => $image
        ]);

        return redirect()->route("vehicle.index")->with('success', 'Vehicle created successfully!');
    }

    //update
    public function update(Request $request, $id)
    {

        $vehicle = Vehicle::findOrFail($id);
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'manufacture' => 'required|string|max:255',
            'capacity' => 'required|integer',
            'price_per_day' => 'required|integer',
            'status' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',

        ]);


        $vehicle->name = $request->input('name');
        $vehicle->type = $request->input('type');
        $vehicle->capacity = $request->input('capacity');
        $vehicle->manufacture = $request->input('manufacture');
        $vehicle->status = $request->input('status');
        $vehicle->price_per_day = $request->input('price_per_day');
        if ($request->hasFile('image')) {
            if ($vehicle->image) {
                Storage::delete('public/' . $vehicle->image);
            }

            $path = $request->file('image')->store('images', 'public');
            $vehicle->image = $path;
        }

        $vehicle->save();
        return redirect()->back()->with('success', 'Vehicle updated successfully.');

    }


    public function destroy($id)
    {
        $vehicle = Vehicle::findOrFail($id);
        if ($vehicle->image) {
            Storage::disk('public')->delete($vehicle->image);
        }
        $vehicle->delete();
        return redirect()->back()->with('success', 'Vehicle deleted successfully.');
    }
}
