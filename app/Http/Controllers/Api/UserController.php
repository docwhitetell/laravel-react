<?php

namespace App\Http\Controllers\Api;

use App\Models\Logs;
use App\Models\Blogs;
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
            $pagesize=$request->get('rowsPerPage');
            $this->createLog('get all user',$request->user());
            return User::orderBy('id', 'desc')->paginate($pagesize);
        }
        public function deleteUser(Request $request){
            $usersId=$request->get('users');
            $users=[];
            if($request->user()->tokenCan('users-delete')){
                for($i=0;$i<count($usersId);$i++){
                    $users[]=(int)$usersId[$i];
                }
                if(User::destroy($users)){
                    $this->createLog('delete user',$request->user());
                    return response()->json(['action'=>'delete','status'=>true],200);
                }else{
                    $this->createLog('delete user',$request->user(),null,null,false);
                    return response()->json(['action'=>'delete','status'=>false],200);
                }
            }else{
                return $this->errorMsg('permission');
            }
        }
        public function getCurrentUser(Request $request){
            return $request->user();
        }


        public function addnote(Request $request){
            $data=$request->get('note');
            $note=new Blogs();
            $note->title=$data['title'];
            $note->content=$data['content'];
            if($note->save()){
                $request->user()->notes()->attach($note->id);
                $this->createLog('add user note',$request->user(),$note->id,'Notes');
            }
            return response()->json(['success',true],200);
        }

}
