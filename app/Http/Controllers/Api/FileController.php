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
            $path = $file->storeAs('/',$file->getClientOriginalName() , 'uploads');
            $resource=new Resources();
            $resource->name=$file->getClientOriginalName();
            $resource->type=$file->getClientMimeType();
            $resource->path=env('APP_URL').'/react/'.$path;
           /* $resource->save();*/
            if($resource->save()){
                $user->resources()->attach($resource->id);
                return response()->json(['path'=>$path],200);
            }else{
               return response()->json(['error'=>'something wrong'],200);
            }
        }
    }
    function userFiles(Request $request){
        return $request->user()->resources;
    }


}
