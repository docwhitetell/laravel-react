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
        $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Cookie, Accept,X-XSRF-TOKEN,X-Requested-With,Authorization');
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, OPTIONS,X-CSRF-TOKEN');
        $response->header('Access-Control-Allow-Credentials', 'true');
        return $response;
    }


}