<?php

namespace App\Http\Middleware;

use Closure;


class AccessControlAllowOrigin
{
    /**
     *
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Origin', '*');
        $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Cookie, Accept,X-CSRF-TOKEN,X-Requested-With,Authorization,Cache-Control');
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, OPTIONS,X-CSRF-TOKEN');
        $response->header('Access-Control-Allow-Credentials', 'true');
        $response->header('Cache-Control', 'true');
        //$response->header('Content-Type', '*');
        return $response;
    }


}