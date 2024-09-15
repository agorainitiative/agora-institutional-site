<?php
namespace App\Models;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    public function activity()
    {
        return $this->morphOne(Activity::class, 'activitable');
    }
}