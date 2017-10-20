<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
    //
    protected $fillable = [
        'action','action_ip','user_client'
    ];
    protected $table='logs';


    public function user(){
        return $this->belongsToMany('App\User','users_logs','log_id','user_id');
    }
}
