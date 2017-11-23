<?php

namespace App\Http\Controllers\Api;

use App\Models\Logs;
use App\Models\Blogs;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Http\Controllers\Api\CommonController as CommonFunc;
use Mockery\Matcher\Not;

class BlogController extends Controller
{
    /* CommonFunc 封装有一系列通用功能函数 */
    use CommonFunc;


    /*后台控制器*/
    public function create(Request $request){
        $data=$request->get('note');
        $blog=new Blogs();
        $blog->title=$data['title'];
        $blog->content=$data['content'];
        if($blog->save()){
            $request->user()->blogs()->attach($blog->id);
            $this->createLog('add user blog',$request->user(),$blog->id,'Notes');
        }
        return response()->json(['success',true],200);
    }
    public function userblogs(Request $request){
        return $request->user()->blogs;
    }
    public function update(Request $request){
        $data=$request->get('blog');
        $note=Blogs::find($data['id']);
        $note->content=$data['content'];
        $note->title=$data['title'];
        $note->save();
        return response()->json($note,200);
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


    /*前台控制器*/
    public function FrontBlogs(){
        return Blogs::paginate(6);
    }
    /*前台控制器*/
}
