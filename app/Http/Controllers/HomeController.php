<?php

namespace App\Http\Controllers;

use App\Models\Logs;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Relations\Concerns\InteractsWithPivotTable;
use Jenssegers\Agent\Agent;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $agent=new Agent();
        $platform=$agent->platform();
        $client=$agent->device().' '.$agent->platform().' '.$agent->version($platform);

        $isDesk=$agent->isDesktop();

        $browser=$agent->browser().' '.$agent->version($agent->browser());
        $res='client:'.$client.' browser:'.$browser;

        $ip=$request->header('referer');






        return view('home');
    }
}
