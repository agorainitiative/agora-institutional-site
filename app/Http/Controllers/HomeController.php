<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function home()
    {
        $articles = Article::all()->toArray();

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'articles' => $articles, 
        ]);
    }

    public function expression()
    {
        return Inertia::render('Expression');
    }

    public function regulation()
    {
        return Inertia::render('Regulation');
    }

    public function equity()
    {
        return Inertia::render('Equity');
    }

    public function mentalHealth()
    {
        return Inertia::render('MentalHealth');
    }
}
