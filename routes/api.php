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
    Route::post('/login', 'Api\PassportController@login');
    Route::post('/refresh', 'Api\PassportController@refresh');
    Route::post('/register', 'Api\RegisterController@register');
});



Route::group(['middleware' => ['auth:api','cors'],'domain'=>'admin.docwhite.cn'], function () {
/*user relate*/
    Route::get('/user', 'Api\UserController@getAllUser');
    Route::get('/current-user', 'Api\UserController@getCurrentUser');
    Route::get('/user/delete', 'Api\UserController@deleteUser');
/*user relate*/
/*user note*/
    Route::post('/user/blogs/create', 'Api\BlogController@create');
    Route::get('/user/blogs', 'Api\BlogController@userblogs');
    Route::post('/user/blogs/update', 'Api\BlogController@update');
    Route::get('/user/blogs/{id}', 'Api\BlogController@detail');
    Route::post('/user/blogs/delete', 'Api\BlogController@delete');
/*user note*/

/*files*/
    Route::get('/user/imgs', 'Api\FileController@userImgs');
    Route::get('/user/videos', 'Api\FileController@userVideos');
    Route::get('/user/files/all', 'Api\FileController@all');
    Route::post('/file/upload', 'Api\FileController@recieveFile');
    Route::get('/user/files/delete', 'Api\FileController@delete');
});





