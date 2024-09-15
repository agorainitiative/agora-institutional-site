<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{

    public function index()
    {
        $articles = Article::all();
        return Inertia::render('Article/index', [
            'articles' => $articles,
            'auth' => Auth::user()
        ]);
    }

    public function create()
    {
        return Inertia::render('Article/create',[
            'auth' => Auth::user(),
        ]);
    }

    public function show($id)
    {
        $article = Article::findOrFail($id);
        return Inertia::render('Topic', [
            'article' => $article,
            'auth' => Auth::user()
        ]);
    }

    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'abstract' => 'nullable|string',
            
        ]);
        $validatedData['author'] = Auth::user()->name;
        $validatedData['published_at'] = now();

        Article::create($validatedData);

        return redirect()->route('articles.index')->with('success', 'Article created successfully.');
    }

    public function edit($id)
    {
        $article = Article::findOrFail($id);
        return Inertia::render('Article/edit', [
            'article' => $article,
            'auth' => Auth::user(),
        ]);
    }

    function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'published_at' => 'required|date',
            'abstract' => 'nullable|string',

        ]);
        $article->update($request->all());
        return redirect()->route('articles.index');
    }


    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return redirect()->route('articles.index')->with('success', 'Article deleted successfully.');
    }
}

