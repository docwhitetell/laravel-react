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

    public function recieveFile(Request $request)
    {
        $files = $request->file();
        $path = null;
        $user=$request->user();
        if($request->user()->tokenCan('files-upload')){
            foreach ($files as $key => $file) {
                $newName = md5(date('Ymd') . $file->getClientOriginalName()) . '.' . ($file->getClientOriginalExtension());
                $path = $file->storeAs('/user/' . $user->id, $newName, 'uploads');
                $resource = new Resources();
                $resource->name = $newName;
                $resource->original_name = $file->getClientOriginalName();
                $resource->size = 'not sure';
                $resource->type = $file->getClientMimeType();
                $resource->path = env('APP_URL') . '/react/' . $path;
                /* $resource->save();*/
                $data['link'] = $resource->path;
                if ($resource->save()) {
                    $user->resources()->attach($resource->id);
                    return response()->json(['data' => $data], 200);
                } else {
                    return response()->json(['error' => 'something wrong'], 200);
                }
            }
        }else{
            $msg=['error'=>"You dont have permisiion"];
            return response()->json($msg,403);
        }

    }

    public function userImgs(Request $request){
        if($request->get('pageSize')){
            $files=$request->user()->resources()->where('type','!=','video/mp4')->orderBy('id', 'desc')->paginate($request->get('pageSize'));
        }else{
            $files=$request->user()->resources()->where('type','!=','video/mp4')->orderBy('id', 'desc')->get();
        }
        return $files;
    }
    public function userVideos(Request $request){
        if($request->get('pageSize')){
            $files=$request->user()->resources()->where('type','=','video/mp4')->orderBy('id', 'desc')->paginate($request->get('pageSize'));
        }else{
            $files=$request->user()->resources()->where('type','=','video/mp4')->orderBy('id', 'desc')->get();
        }
        return $files;
    }

    public function all(Request $request){
        return $request->user()->resources;
    }
    public function delete(Request $request){
        $file=Resources::find($request->get('id'));
        $id=$file->id;$name=$file->name;
        $user=$request->user();
        if($user->tokenCan('files-delete')){
            if($file->delete()){
                Storage::disk('uploads')->delete($name);
                $request->user()->resources()->detach($id);
                $msg=['success'=>'Delete success!'];
                return $msg;
            }else{
                $msg=['error'=>'Delete Error!Something Wrong!'];
                return $msg;
            }
        }else{
            $msg = ['error' => 'Delete Error!You Dont Have Permission!'];
            return $msg;
        }
    }

    public function FrontVideos(Request $request)
    {
        $limit = $request->get('limit');
        if ($limit) {
            return Resources::where('type','video/mp4')->limit($limit)->get();
        } else {
            return Resources::where('type','video/mp4')->paginate(10);
        }
    }

}
