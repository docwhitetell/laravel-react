<?php

use Illuminate\Http\Request;


Route::group(['middleware' => ['cors'],'domain'=>'admin.docwhite.cn'], function () {
    /*user relate*/

    Route::get('/blogs', 'Api\BlogController@FrontBlogs');
});



