<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Activity;
use Illuminate\Support\Facades\Auth;

class ActivityController extends Controller
{
    
    
    public function edit($id)
    {
        $activity = Activity::findOrFail($id);
        return Inertia::render('Activity/edit', [
            'activity' => $activity,
            'auth' => Auth::user(),
        ]);
    } 

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update($id)
    {
        $activity = Activity::findOrFail($id);
        $activity->on_evidence ? $activity->on_evidence = false : $activity->on_evidence = true;
        $activity->save();

        return redirect()->back()->with('success', 'Evidence status updated successfully.');
    }
        
}