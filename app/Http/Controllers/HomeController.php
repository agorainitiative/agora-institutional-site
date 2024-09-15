<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use App\Models\Activity;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function home()
    {
        
        $activities = Activity::with(['activitable'])->where('on_evidence', true)->get();
            
        return Inertia::render('Home/Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'activities' => $activities
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
