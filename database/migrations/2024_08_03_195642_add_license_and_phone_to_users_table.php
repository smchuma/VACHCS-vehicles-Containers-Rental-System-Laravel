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
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('license_number')->unique()->nullable();
            $table->string('phone_number')->unique()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropUnique(['license_number']);
            $table->dropUnique(['phone_number']);
            $table->dropColumn('license_number');
            $table->dropColumn('phone_number');
        });
    }
};
