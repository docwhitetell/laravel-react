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
use PhpParser\Node\Expr\Cast\Object_;


class FrontController extends Controller
{
    /* CommonFunc 封装有一系列通用功能函数 */
    use CommonFunc;
    /*前台控制器*/

    //首页数据API
    public function FrontIndex(Request $request){
        $data['blogs']=$this->FrontBlogs($request);
        $data['record']=$this->FrontData();
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
        $classes=['undefined'];

        //发布日期统计
        $dateCount=[];
        $classCount=[];
        $all = Blogs::all();
        foreach ($all as $val){
            array_push($dateCount,$val->created_at->format('Y-m-d'));
            if(!in_array($val->classes,$classes)){
                if (!is_null($val->classes)){
                    $clsBlogs=Blogs::where('classes',$val->classes)->select(['id','title','classes','created_at'])->get();
                    //$blogs['class_'.$val->classes]=$clsBlogs;
                    array_push($classes,$val->classes);
                }else{
                    //$blogs['class_undefined']=Blogs::where('classes',$val->classes)->select(['id','title','classes','created_at'])->get();
                }
            }
        }

        foreach($classes as $cls){
            if($cls!='undefined'){
                $classobj['name']=$cls;
                $classobj['value']=Blogs::where('classes',$cls)->get()->count();
                array_push($classCount,$classobj);
            }else{
                $classobj['name']='NEC';
                $classobj['value']=Blogs::where('classes',null)->get()->count();
                array_push($classCount,$classobj);
            }
        }

        sort($dateCount);//升序排序

        $blogs['total']=Blogs::all()->count();
        $blogs['lastSevenDayPublish']=$query->count();
        //$blogs['latestPublishTime']=$query->first()->created_at;
        $blogs['classes']=$classes;

        $blogs['dateCount']= $dateCount;
        $blogs['classCount']= $classCount;
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


    /*
     * Rap 嵌入测试
     * */
    public function RapFormData(Request $request){
        // dd($request->json('formData'));
        $data = User::all();
        return $data;
    }
}
