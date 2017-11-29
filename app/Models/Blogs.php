<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blogs extends Model
{
    //
    protected $fillable = [
        'title','classes','poster','description','content'
    ];
    protected $table='blogs';


    public function user(){
        return $this->belongsToMany('App\User','users_blogs','blog_id','user_id');
    }
}
