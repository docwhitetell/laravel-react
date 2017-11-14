<?php

namespace App\Http\Controllers\Api;

use Jenssegers\Agent\Agent;
use App\Models\Logs;

trait CommonController
{
    /* 方法列表
     *  1.创建用户日志并绑定用户       2.获取用户访问所使用的客户端        3.获取用户发起访问请求所在你的站点
     *  4.获取用户的Ip地址            5.
     *
     * */
    /* 创建用户日志并绑定用户 参数 （操作类型，执行操作的用户，受影响的数据id，受影响数据所属的模型） */
    public function createLog($logtype,$user,$target=null,$target_model=null,$status=true){
        $log=new Logs();
        $log->action=$logtype;
        $log->action_status=$status;
        $log->action_host=$this->getUserHost();
        $log->user_client=$this->getUserClient();
        $log->action_ip=$this->getUserIp();
        $log->target=$target;
        $log->target_model=$target_model;
        if($log->save()){
            $user->logs()->attach($log->id);
        }
    }
    /* 获取用户访问所使用的客户端 */
    public function getUserClient(){
        $agent=new Agent();
        $platform=$agent->platform();
        $client=$agent->device().' '.$agent->platform().' '.$agent->version($platform);
        $browser=$agent->browser().' '.$agent->version($agent->browser());
        $res='client:'.$client.' browser:'.$browser;
        return $res;
    }
    /* 获取用户发起访问请求所在你的站点 */
    public function getUserHost(){
        $host=$_SERVER['HTTP_REFERER'];
        return $host;
    }
    /* 获取用户的Ip地址 */
    public function getUserIp(){
        $ip = $_SERVER["REMOTE_ADDR"];
        return $ip;
    }

    public function errorMsg($type){
        switch ($type){
            case 'permission':
                return ['error'=>'You Dont Have Permission'];
                break;
            default:
        }
    }



}
