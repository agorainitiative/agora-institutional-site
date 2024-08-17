<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\ArticleController;



Route::get('/who', [HomeController::class, 'whoWeAre'])->name('who-we-are');
Route::get('/take-action', [HomeController::class, 'takeAction'])->name('take-action');
Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/expression', [HomeController::class, 'expression'])->name('page.expression');
Route::get('/equity', [HomeController::class, 'equity'])->name('page.equity');
Route::get('/mental-health', [HomeController::class, 'mentalHealth'])->name('page.mentalHealth');
Route::get('/media-center', [HomeController::class, 'mediaCenter'])->name('media-center');

Route::resource('articles', ArticleController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



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
