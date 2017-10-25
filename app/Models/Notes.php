<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    //
    protected $fillable = [
        'title','content'
    ];
    protected $table='notes';


    public function user(){
        return $this->belongsToMany('App\User','users_notes','note_id','user_id');
    }
}
