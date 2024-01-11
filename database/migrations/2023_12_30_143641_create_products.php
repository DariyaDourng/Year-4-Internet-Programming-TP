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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->sting(' name');
            $table->bigInteger('category_id')->unsigned();
            $table-> double(' pricing');
            $table->text(' description')->nullable();
            $table->jsonb('images')->nullable();
             $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
