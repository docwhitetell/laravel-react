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

Route::get('/login', 'Api\PassportController@loginform');
Route::post('/login', 'Api\PassportController@login');
Route::get('/refresh', 'Api\PassportController@refresh');
Route::post('/register', 'Api\RegisterController@register');

Route::group(['middleware' => ['auth:api','cors']], function () {
/*user relate*/
    Route::get('/user', 'Api\UserController@getAllUser');
    Route::get('/current-user', 'Api\UserController@getCurrentUser');
    Route::get('/user/delete', 'Api\UserController@deleteUser');
/*user relate*/
/*user note*/
    Route::post('/user/addnote', 'Api\NoteController@addnote');
    Route::get('/user/notes', 'Api\NoteController@usernotes');
    Route::post('/user/note/update', 'Api\NoteController@update');
    Route::get('/user/notes/{id}', 'Api\NoteController@detail');
    Route::post('/user/note/delete', 'Api\NoteController@delete');
/*user note*/

/*files*/
    Route::get('/user/files', 'Api\FileController@userFiles');
    Route::get('/user/files/delete', 'Api\FileController@delete');
});


Route::middleware(['cors'])->any('/file/upload', 'Api\FileController@recieveFile');



