<?php

namespace App\Providers;
use Carbon\Carbon;
use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
        Passport::routes();
        Passport::tokensExpireIn(Carbon::now()->addHours(2));
        Passport::refreshTokensExpireIn(Carbon::now()->addHours(4));


        Passport::tokensCan([
            'files-upload'=>'Can upload files',
            'files-delete'=>'Can delete his/her files on the server',
            'users-lists'=>'Can see users lists',
            'users-delete'=>'Can delete users',
            'notes-lists'=>'Can see himself/herself notes',
            'notes-create'=>'Can create notes',
            'notes-update'=>'Can update his/her noetes',

        ]);
    }
}
