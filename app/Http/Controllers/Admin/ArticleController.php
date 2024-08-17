<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Services\SocialPublishingService;

class ArticleController extends Controller
{
    protected $socialPublishingService;

    

    // Array delle attività
    protected $activities = [
        'EXPRESSION',
        'EQUITY',
        'ONLINE WELL BEING'
    ];
    protected $fillable = ['title', 'content', 'author', 'published_at', 'abstract', 'on_trending', 'activity'];

    public function __construct(SocialPublishingService $socialPublishingService)
    {
        $this->socialPublishingService = $socialPublishingService;
    }

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
            'activities' => $this->activities,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'published_at' => 'required|date',
            'postOnFacebook' => 'boolean',
            'postOnLinkedIn' => 'boolean',
            'postOnInstagram' => 'boolean'
        ]);

        if ($request->input('postOnFacebook')) {
            $this->socialPublishingService->postOnFacebook($request->input('facebookPostText'), $request->input('facebookPostImage'));
        }
        if ($request->input('postOnLinkedIn')) {
            $this->socialPublishingService->postOnLinkedIn($request->input('linkedInPostText'), $request->input('linkedInPostImage'));
        }
        if ($request->input('postOnInstagram')) {
            $this->socialPublishingService->postOnInstagram($request);
        }

        return redirect()->route('articles.index');
    }

    public function edit($id)
    {
        $article = Article::findOrFail($id);
        return Inertia::render('Article/edit', [
            'article' => $article,
            'auth' => Auth::user(),
            'activities' => $this->activities,
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
            'postOnFacebook' => 'boolean',
            'postOnLinkedIn' => 'boolean',
            'postOnInstagram' => 'boolean'
        ]);
        $article->update($request->all());
        
        if ($request->input('postOnFacebook')) {
            $this->socialPublishingService->postOnFacebook($request->input('facebookPostText'), $request->input('facebookPostImage'));
        }
        if ($request->input('postOnLinkedIn')) {
            $this->socialPublishingService->postOnLinkedIn($request->input('linkedInPostText'), $request->input('linkedInPostImage'));
        }
        if ($request->input('postOnInstagram')) {
            $this->socialPublishingService->postOnInstagram($request);
        }

        return redirect()->route('articles.index');
        
    }



}

