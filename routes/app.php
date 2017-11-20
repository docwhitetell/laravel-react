<?php

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