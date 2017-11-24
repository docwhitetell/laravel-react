<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['domain' => 'admin.docwhite.cn'], function () {
    Auth::routes();
    Route::get('/home', 'HomeController@index')->name('home');

    Route::get('/', function () {
        return view('welcome');
    });
    Route::post('/fileupload', 'Api\FileController@recieveFile');
});

Route::group(['domain' => 'www.docwhite.cn'], function () {
    Route::get('/', function () {
        return view('app.index');
    });
    Route::get('/blogs', function () {
        return view('app.index');
    });
    Route::get('/blogs/{id}', function () {
        return view('app.index');
    });
    Route::get('/login', function () {
        return view('app.index');
    });
    Route::get('/admin/dashboard', function () {
        return view('app.index');
    });
    Route::get('/admin/user', function () {
        return view('app.index');
    });
    Route::get('/admin/news', function () {
        return view('app.index');
    });
    Route::get('/admin/blogs/create', function () {
        return view('app.index');
    });
    Route::get('/admin/blogs/edit/{id}', function () {
        return view('app.index');
    });
    Route::get('/admin/blogs', function () {
        return view('app.index');
    });
    Route::get('/admin/UIElement/editor', function () {
        return view('app.index');
    });
    Route::get('/admin/UIElement/table', function () {
        return view('app.index');
    });
    Route::get('/admin/UIElement/form', function () {
        return view('app.index');
    });
    Route::get('/admin/multi-upload', function () {
        return view('app.index');
    });
    Route::get('/admin/my-files', function () {
        return view('app.index');
    });
    Route::get('/admin/files-lists', function () {
        return view('app.index');
    });
});