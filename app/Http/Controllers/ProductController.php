<?php


namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function create()
    {
        // You may need to pass additional data to the form view if required
        $categories = Category::all(); // Retrieve all categories from the database
        return view('products.form', compact('categories'));
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'pricing' => 'required|numeric',
            'description' => 'required|string',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Validate each uploaded image
        ]);

        // Further processing for storing the product...
    }
}
