<?php

use Illuminate\Http\Request;


Route::group(['middleware' => ['cors'],'domain'=>'admin.docwhite.cn'], function () {
    /*前台首页数据 api*/
    Route::get('/index', 'Api\FrontController@FrontIndex');

    /*博客文章列表 api*/
    Route::get('/blogs', 'Api\FrontController@FrontBlogs');
    /*文章数据统计 api*/
    Route::get('/blogs/data','Api\FrontController@FrontData');
    /*博客文章详情 api*/
    Route::get('/blogs/{id}', 'Api\FrontController@FrontBlogsDetail');

//dahudhada


});



