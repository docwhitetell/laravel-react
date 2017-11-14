<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Client;
use Laravel\Passport\Token;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Cookie;
class PassportController extends Controller
{
    public function loginform(){
        return response()->json(['data'=>'123'],200);
    }
    /*处理 api登录 */
    public function login(Request $request){
        $http = new GuzzleHttp\Client;
        if (Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')])) {
            // 认证通过...
            $this->cleanExpiresAccessToken();
            $this->cleanExpiresRefreshToken();
            $passwordClient=Client::find(2);
            if($request->email=='example@react.com'){
               $scopes='';
            }else{
                $scopes='*';
            }
            $response = $http->post(env('APP_URL').'/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $passwordClient->id,
                    //请替换为你自己的client_secret
                    'client_secret' => $passwordClient->secret,
                    'username' => $request->get('email'),
                    'password' =>  $request->get('password'),
                    'scope' => $scopes,
                ],
            ]);
            $data=json_decode((string) $response->getBody(), true);
            return response()->json(['success'=>true,'token'=>$data]);
        }else{
            return response()->json(['error'=>'Email or Password not Match!'],200);
        }

    }
    /*处理 api登录 */

    /* 带上refresh_token 刷新 access_token      */
    public function refresh(Request $request){
        $refreshToken=$request->get('refresh');
        $http = new GuzzleHttp\Client;
        $passwordClient=Client::find(2);
        $user=$request->get('user');
        if($user['email']==='example@react.com'){
            $scopes='';
        }else{
            $scopes='*';
        }
        $response = $http->post(env('APP_URL').'/oauth/token', [
            'form_params' => [
                'grant_type' => 'refresh_token',
                'refresh_token' => $refreshToken,
                'client_id' => 2,
                //请替换为你自己的client_secret
                'client_secret' =>$passwordClient->secret,
                'scope' => $scopes,
            ],
        ]);

        return json_decode((string) $response->getBody(), true);
    }
    /* 带上refresh_token 刷新 access_token */

    /* 清除数据库过期access_token */
    public function cleanExpiresAccessToken(){
        $nowtime=date('Y-m-d H:i:s',time());
        $expiresTokens=Token::where('expires_at','<',$nowtime)->delete();
    }
    /* 清除数据库过期refresh_token */
    public function cleanExpiresRefreshToken(){
        $nowtime=date('Y-m-d H:i:s',time());
        $expiresTokens = DB::table('oauth_refresh_tokens')->where('expires_at','<',$nowtime)->delete();
    }


}
