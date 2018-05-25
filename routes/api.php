<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['domain' => 'admin.docwhite.cn'], function () {
 /*   Route::get('/login', 'Api\PassportController@loginform');*/
    /*密码授权模式登录 API*/
    Route::post('/login', 'Api\PassportController@login');
    /*密码授权模式刷新token API*/
    Route::post('/refresh', 'Api\PassportController@refresh');
    /*注册 API*/
    Route::post('/register', 'Api\RegisterController@register');

    Route::get("/user/list",'Api\FrontController@RapFormData');
});



Route::group(['middleware' => ['auth:api','cors'],'domain'=>'admin.docwhite.cn'], function () {
    /* 以下路由访问需要带token */
/*user relate*/
    /*获取用户列表 API */
    Route::get('/user', 'Api\UserController@getAllUser');
    /*获取当前用户信息 API */
    Route::get('/current-user', 'Api\UserController@getCurrentUser');
    /*删除用户 API */
    Route::get('/user/delete', 'Api\UserController@deleteUser');
/*user relate*/
/*user blogs*/
    /*创建用户博客 API */
    Route::post('/user/blogs/create', 'Api\BlogController@create');
    /*获取用户博客列表 API */
    Route::get('/user/blogs', 'Api\BlogController@userblogs');
    /*更新博客内容 API */
    Route::post('/user/blogs/update', 'Api\BlogController@update');
    /*获取指定Id博客内容 API */
    Route::get('/user/blogs/{id}', 'Api\BlogController@detail');
    /*删除博客 API */
    Route::post('/user/blogs/delete', 'Api\BlogController@delete');
/*user blogs*/
/*user files*/
    /*获取用户图像文件 API */
    Route::get('/user/imgs', 'Api\FileController@userImgs');
    /*获取用户视频文件 API */
    Route::get('/user/videos', 'Api\FileController@userVideos');
    /*获取用户所有文件 API */
    Route::get('/user/files/all', 'Api\FileController@all');
    /*用户上传文件 API */
    Route::post('/file/upload', 'Api\FileController@recieveFile');
    /*用户文件删除 API */
    Route::get('/user/files/delete', 'Api\FileController@delete');
/*user files*/
});





