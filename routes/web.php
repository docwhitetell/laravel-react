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
        $seo['title']="Doctor White 个人技术分享网站";
        $seo['Keywords']="Doctor White,技术分享,React,Laravel,Ubuntu,Nginx";
        $seo['description']="全栈工程师Doctor White个人技术分享网站,前端,React,后端,Laravel,Ubuntu,Nginx,Apache,由于使用AWS服务器搭建LNMP,网速有点慢,技术分享";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/blogs', function () {
        $seo['title']="个人博客 - Doctor White 个人技术分享";
        $seo['Keywords']=null;
        $seo['description']=null;
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/blogs/{id}', function ($id) {
        $blog=\App\Models\Blogs::fint($id);
        $seo['title']=$blog->title;
        $seo['title']=$seo['title']." - Doctor White 个人技术分享";
        $seo['Keywords']=null;
        $seo['description']=$blog->description;
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/login', function () {
        $seo['title']="登录 - Doctor White 个人技术分享";
        return view('app.index',['seo'=>$seo]);
    });
    Route::get('/admin/dashboard', function () {
        return view('app.index');
    });
    Route::get('/admin/user', function () {
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