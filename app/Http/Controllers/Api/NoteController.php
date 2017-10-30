<?php

namespace App\Http\Controllers\Api;

use App\Models\Logs;
use App\Models\Notes;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Http\Controllers\Api\CommonController as CommonFunc;
use Mockery\Matcher\Not;

class NoteController extends Controller
{
    /* CommonFunc 封装有一系列通用功能函数 */
    use CommonFunc;

    public function addnote(Request $request){
        $data=$request->get('note');
        $note=new Notes();
        $note->title=$data['title'];
        $note->content=$data['content'];
        if($note->save()){
            $request->user()->notes()->attach($note->id);
            $this->createLog('add user note',$request->user(),$note->id,'Notes');
        }
        return response()->json(['success',true],200);
    }
    public function usernotes(Request $request){
        return $request->user()->notes;
    }
    public function update(Request $request){
        $data=$request->get('note');
        $note=Notes::find($data['id']);
        $note->content=$data['content'];
        $note->title=$data['title'];
        $note->save();
        return response()->json($note,200);
    }
    public function detail($id){
        return Notes::find($id);
    }
    public function delete(Request $request){
        $shouldDelete=$request->get('note');
        if(Notes::destroy($shouldDelete)){
            return response()->json(['status'=>true],200);
        }else{
            return response()->json(['status'=>false],200);
        }

    }
}
