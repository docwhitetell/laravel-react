<?php

namespace App\Http\Controllers\Api;

use App\Models\Logs;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;

use App\Http\Controllers\Api\CommonController as CommonFunc;
class UserController extends Controller
{
    /* CommonFunc 封装有一系列通用功能函数 */
        use CommonFunc;
        public function getAllUser(Request $request){
            $this->createLog('get all user',$request->user());
            return User::orderBy('created_at', 'desc')->paginate(8);
        }
        public function deleteUser($id,Request $request){
            $user=User::find($id);
            if($user->delete()){
                $this->createLog('delete user',$request->user(),$id,'User');
                return response()->json(['action'=>'delete','status'=>true],200);
            }else{
                $this->createLog('delete user',$request->user(),$id,'User',false);
                return response()->json(['action'=>'delete','status'=>false],200);
            }
        }

        public function getCurrentUser(Request $request){
            return $request->user();
        }

}
