<?php

namespace App\Models;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'content', 'author', 'published_at', 'abstract'];

    public function activity()
    {
        return $this->morphOne(Activity::class, 'activitable');
    }

    protected static function booted()
    {
        static::created(function ($article) {
            $article->activity()->create([
                'on_evidence' => false, 
            ]);
        });
    }

}
