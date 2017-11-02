<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resources extends Model
{
    //
    protected $fillable = [
        'name','type','path'
    ];
    protected $table='resources';


    public function user(){
        return $this->belongsToMany('App\User','users_resources','resource_id','user_id');
    }
}
