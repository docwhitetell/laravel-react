<?php
use Illuminate\Http\Request;
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
        $seo['title']="Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/blogs', function () {
        $seo['title']="个人博客 - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/blogs/{id}', function ($id) {
        $seo['title']=\App\Models\Blogs::find($id)->title;
        $seo['title']=$seo['title']." - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/login', function () {
        $seo['title']="登录 - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/admin/dashboard', function () {
        $seo['title']="Dashboard - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/admin/user', function () {
        $seo['title']="用户列表 - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/admin/blogs/create', function () {
        $seo['title']="新文章 - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/admin/blogs/edit/{id}', function () {
        $seo['title']="编辑 - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/admin/blogs', function () {
        $seo['title']="博客文章列表 - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/admin/UIElement/editor', function () {
        $seo['title']="用户列表 - Doctor White 个人技术分享";
        $seo['Keywords']="";
        $seo['description']="";
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