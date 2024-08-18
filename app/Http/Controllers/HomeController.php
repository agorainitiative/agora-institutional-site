<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function home()
    {
        
        $articles = Article::where('on_trending', true)
            ->orderBy('published_at', 'desc')
            ->take(4)
            ->get()
            ->toArray();
            
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'articles' => $articles, 
        ]);
    }

    public function mentalHealth()
    {
        // Filtra gli articoli con activity 'mental_health'
        $articles = Article::where('activity', 'mental_health')->get()->toArray();

        // Passa gli articoli filtrati al componente MentalHealth
        return Inertia::render('MentalHealth', [
            'articles' => $articles,
        ]);
    }

    public function expression()
    {
        // Filtra gli articoli con activity 'expression'
        $articles = Article::where('activity', 'expression')->get()->toArray();

        // Passa gli articoli filtrati al componente Expression
        return Inertia::render('Expression', [
            'articles' => $articles,
        ]);
    }


    public function equity()
    {
        $articles = Article::where('activity', 'EQUITY')->get()->toArray();
        return Inertia::render('Equity', [
            'articles' => $articles,
        ]);
    }

   
    

    public function mediaCenter()
    {
        $articles = Article::all()->toArray();

        return Inertia::render('MediaCenter',[  
            'articles' => $articles, 
        ]);
    }

    public function takeAction()
    {
        return Inertia::render('TakeAction');
    }

    public function whoWeAre()
    {
        return Inertia::render('WhoWeAre');
    }
}
