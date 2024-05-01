<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('Vehicle_No')->unique();
            $table->string('name');
            $table->string('type')->nullable();
            $table->integer('capacity')->nullable();
            $table->integer('price_per_day')->nullable();
            $table->string('image')->nullable();
            $table->enum('status',['Available', 'Rented', 'Under Maintenance'])->nullable();
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
