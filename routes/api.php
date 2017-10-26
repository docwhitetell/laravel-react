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

/*Route::middleware(['auth:api','cors'])->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::middleware(['auth:api','cors'])->get('/user', 'Api\UserController@getAllUser');
Route::middleware(['auth:api','cors'])->get('/current-user', 'Api\UserController@getCurrentUser');
Route::get('/login', 'Api\PassportController@loginform');
Route::post('/login', 'Api\PassportController@login');
Route::post('/register', 'Api\RegisterController@register');


Route::middleware(['auth:api','cors'])->get('/user/delete', 'Api\UserController@deleteUser');
Route::middleware(['auth:api','cors'])->post('/user/addnote', 'Api\NoteController@addnote');
Route::middleware(['auth:api','cors'])->get('/user/notes', 'Api\NoteController@usernotes');
Route::middleware(['auth:api','cors'])->post('/user/note/update', 'Api\NoteController@update');
Route::middleware(['auth:api','cors'])->get('/user/notes/{id}', 'Api\NoteController@detail');