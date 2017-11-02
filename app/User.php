<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function logs(){
        return $this->belongsToMany('App\Models\Logs','users_logs','user_id','log_id');
    }
    public function notes(){
        return $this->belongsToMany('App\Models\Notes','users_notes','user_id','note_id');
    }
    public function resources(){
        return $this->belongsToMany('App\Models\Resources','users_resources','user_id','resource_id');
    }

}
