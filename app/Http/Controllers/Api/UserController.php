<?php

namespace App\Http\Controllers\Api;

use App\Models\Logs;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;


class UserController extends Controller
{
        public function getAllUser(Request $request){
            return User::paginate(8);
        }
        public function deleteUser($id){
            $user=User::find($id);
            if($user->delete()){
                return response()->json(['action'=>'delete','status'=>true],200);
            }else{
                return response()->json(['action'=>'delete','status'=>false],200);
            }
        }

        public function getCurrentUser(Request $request){
          /*  $client=$this->getUserClient();
            $clientIp=$request->header('referer');
            $log=new Logs();
            $log->action='getCurrentUser';
            $log->action_ip=$clientIp;
            $log->user_client=$client;

            if($log->save()){
                $request->user()->logs()->attach($log->id);
            }*/
            return $request->user();
        }

        public function getUserClient(){
            $agent=new Agent();
            $platform=$agent->platform();
            $client=$agent->device().' '.$agent->platform().' '.$agent->version($platform);
            $isDesk=$agent->isDesktop();
            $browser=$agent->browser().' '.$agent->version($agent->browser());
            $res='client:'.$client.' browser:'.$browser;
            return $res;
        }
        public function getUserIp(){

        }
}
