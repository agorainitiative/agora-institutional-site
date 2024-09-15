<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\ArticleController;


Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/who', [HomeController::class, 'whoWeAre'])->name('who');
Route::get('/take-action', [HomeController::class, 'takeAction'])->name('take-action');
Route::get('/media-center', [HomeController::class, 'mediaCenter'])->name('media-center');



Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('articles', ArticleController::class)->except('show');
    Route::resource('projects', ProjectController::class)->except('show');
    Route::patch('/activity/{id}', [ActivityController::class, 'update'])->name('activity.update');
    Route::get('/activity/{id}/edit', [ActivityController::class, 'edit'])->name('activity.edit');
});

Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');

Route::get('/checkout', function (Request $request) {
    $stripePriceId = 'price_deluxe_album';
 
    $quantity = 1;
 
    return $request->user()->checkout([$stripePriceId => $quantity], [
        'success_url' => route('checkout-success'),
        'cancel_url' => route('checkout-cancel'),
    ]);
})->name('checkout');
 
Route::view('/checkout/success', 'checkout.success')->name('checkout-success');
Route::view('/checkout/cancel', 'checkout.cancel')->name('checkout-cancel');




require __DIR__.'/auth.php';
