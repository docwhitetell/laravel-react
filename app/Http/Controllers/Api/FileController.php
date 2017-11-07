<?php

namespace App\Http\Controllers\Api;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Resources;
use App\Http\Controllers\Api\CommonController as CommonFunc;
class FileController extends Controller
{
    /* CommonFunc 封装有一系列通用功能函数 */
    use CommonFunc;

    function recieveFile(Request $request){
        $files=$request->file();
        $path=null;
        $user=User::find($request->get('user'));
        foreach ($files as $key=>$file){
            $newName=md5(date('Ymd').$file->getClientOriginalName()).'.'.($file->getClientOriginalExtension());
            $path = $file->storeAs('/user/'.$user->id,$newName , 'uploads');
            $resource=new Resources();
            $resource->name=$newName;
            $resource->original_name=$file->getClientOriginalName();
            $resource->size='not sure';
            $resource->type=$file->getClientMimeType();
            $resource->path=env('APP_URL').'/react/'.$path;
           /* $resource->save();*/
            $data['link']=$resource->path;
            if($resource->save()){
                $user->resources()->attach($resource->id);
                return response()->json(['data'=>$data],200);
            }else{
               return response()->json(['error'=>'something wrong'],200);
            }
        }
    }
    function userFiles(Request $request){
        return $request->user()->resources;
    }
    function delete(Request $request){
        $file=Resources::find($request->get('id'));
        $id=$file->id;$name=$file->name;
        if($file->delete()){
            Storage::disk('uploads')->delete($name);
            $request->user()->resources()->detach($id);
            $msg=['status'=>'success'];
            return $msg;
        }else{
            $msg=['status'=>'false'];
            return $msg;
        }

    }

}
