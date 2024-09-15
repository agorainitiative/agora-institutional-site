<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return Inertia::render('Project/index', [
            'projects' => $projects,
            'auth' => Auth::user()
        ]);
    }

    public function create()
    {
        return Inertia::render('Project/create',[
            'auth' => Auth::user(),
        ]);
    }

    public function show($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('Project/show', [
            'project' => $project,
            'auth' => Auth::user()
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);        

        Project::create($validatedData);
        return redirect()->route('projects.index');
    }

    public function edit($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('Project/edit', [
            'project' => $project,
            'auth' => Auth::user(),
        ]);
    }

    function update(Request $request, Project $project)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);
        $project->update($request->all());
        return redirect()->route('projects.index');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');
    }
}
