<?php

namespace App\Http\Controllers\Api;

use App\Models\Logs;
use App\Models\Blogs;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DateTime;

use App\Http\Controllers\Api\CommonController as CommonFunc;
use Mockery\Matcher\Not;

class BlogController extends Controller
{
    /* CommonFunc 封装有一系列通用功能函数 */
    use CommonFunc;


    /*后台控制器*/
    public function create(Request $request){
        $data=$request->get('blog');
        $blog=new Blogs();
        $blog->title=$data['title'];
        $blog->classes=$data['classes'];
        $blog->poster=$data['poster'];
        $blog->description=$data['description'];
        $blog->content=$data['content'];
        if($blog->save()){
            //文章用户关联，创建用户操作日志
            $request->user()->blogs()->attach($blog->id);
            $this->createLog('add user blog',$request->user(),$blog->id,'Blogs');
        }
        return response()->json(['success',true],200);
    }
    public function userblogs(Request $request){
        return $request->user()->blogs()->orderBy('created_at','desc')->select(['id','title','description','poster','classes','created_at'])->get();
    }
    public function update(Request $request){
        $data=$request->get('blog');
        $blog=Blogs::find($data['id']);
        $blog->title=$data['title'];
        $blog->classes=$data['classes'];
        $blog->poster=$data['poster'];
        $blog->description=$data['description'];
        $blog->content=$data['content'];
        $blog->save();
        return response()->json($blog,200);
    }
    public function detail($id){
        return Blogs::find($id);
    }
    public function delete(Request $request){
        $shouldDelete=$request->get('blog');
        $request->user()->blogs()->detach($shouldDelete);
        if(Blogs::destroy($shouldDelete)){
            return response()->json(['status'=>true],200);
        }else{
            return response()->json(['status'=>false],200);
        }
    }

    /*后台控制器*/


}
