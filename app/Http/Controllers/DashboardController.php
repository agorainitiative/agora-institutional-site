<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Activity;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $activities = Activity::with(['activitable'])->get();

        return Inertia::render('Dashboard', [
            'activities' => $activities
        ]);
    }
}
