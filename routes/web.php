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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/',function (){
    return view('welcome');
} );
Route::post('/fileupload', 'Api\FileController@recieveFile');


Route::group(['domain' => 'www.docwhite.cn'], function () {
    Route::get('/', function () {
        return view('app.index');
    });
    Route::get('/login', function () {
        return view('app.index');
    });
    Route::get('/dashboard', function () {
        return view('app.index');
    });
    Route::get('/user', function () {
        return view('app.index');
    });
    Route::get('/news', function () {
        return view('app.index');
    });
    Route::get('/note/add', function () {
        return view('app.index');
    });
    Route::get('/edit/{id}', function () {
        return view('app.index');
    });
    Route::get('/notes', function () {
        return view('app.index');
    });
    Route::get('/UIElement/editor', function () {
        return view('app.index');
    });
    Route::get('/UIElement/table', function () {
        return view('app.index');
    });
    Route::get('/UIElement/form', function () {
        return view('app.index');
    });
    Route::get('/multi-upload', function () {
        return view('app.index');
    });
    Route::get('/my-files', function () {
        return view('app.index');
    });
    Route::get('/files-lists', function () {
        return view('app.index');
    });
});