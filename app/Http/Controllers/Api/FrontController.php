<?php

namespace App\Http\Controllers\Api;

use App\Models\Logs;
use App\Models\Blogs;
use App\Models\Resources;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DateTime;

use App\Http\Controllers\Api\CommonController as CommonFunc;


class FrontController extends Controller
{
    /* CommonFunc 封装有一系列通用功能函数 */
    use CommonFunc;
    /*前台控制器*/

    //首页数据API
    public function FrontIndex(Request $request){
        $data['blogs']=$this->FrontBlogs($request);
        //$data['video']=$this->GetVideos($request);
        return $data;
    }

    /*博客首页API */
    public function FrontData($beginTime=null){
        /* 1.strtotime 2.date */
        /*获取当前day的unix时间戳*/
        $nowDate = strtotime((new DateTime())->format('Y-m-d'));
        $nowTimestamp=$this->TimeTransfer($nowDate);
        /* 截止日期时间戳 ，同时转化为 年月日时分秒的 timestamp格式 */
        $deadTime = $nowDate - 7 * 24 * 60 * 60;
        $deadTimestamp =$this->TimeTransfer( ($nowDate - 7 * 24 * 60 * 60));
        /*数据查询域*/
        $query=Blogs::where('created_at','>',$beginTime?$beginTime:$deadTimestamp)->orderBy('created_at','desc')->get();
        $classes=[];

        foreach ($query as $val){
            if(!in_array($val->classes,$classes)){
                $blogs['class_'.$val->classes]=Blogs::where('classes',$val->classes)->select(['id','title','description','poster','classes','created_at'])->get();
                array_push($classes,$val->classes);
            }
        }
        $blogs['total']=Blogs::all()->count();
        $blogs['lastSevenDayPublish']=$query->count();
        //$blogs['latestPublishTime']=$query->first()->created_at;
        $blogs['classes']=$classes;
        $query=null;
        return $blogs;
    }


    public function FrontBlogs(Request $request){
        $data['record']=$this->FrontData();
        $limit=$request->get('limit')?$request->get('limit'):null;
        $classes=$request->get('classes')?$request->get('classes'):null;
        if($classes){
            $result=$limit?
                Blogs::orderBy('created_at','desc')->where('classes',$classes)->limit($limit)->select(['id','title','description','poster','created_at'])->get():
                Blogs::orderBy('created_at','desc')->where('classes',$classes)->select(['id','title','description','poster','created_at'])->get();
        }else{
            $result=$limit?
                Blogs::orderBy('created_at','desc')->limit($limit)->select(['id','title','description','poster','created_at'])->get():
                Blogs::orderBy('created_at','desc')->select(['id','title','description','poster','created_at'])->get();
        }
        $data['blogs']=$result;
        $result=null;
        return $data;
    }
    public function FrontBlogsDetail($id){
        return Blogs::find($id);
    }
    public function GetVideos(Request $request){
        $limit=$request->get('limit');
        if($limit){
            return Resources::where('type','video/mp4')->orderBy('created_at','desc')->limit($limit)->get();
        }else{
            return Resources::where('type','video/mp4')->orderBy('created_at','desc')->paginate(10);
        }
    }
    /*前台控制器*/
}
