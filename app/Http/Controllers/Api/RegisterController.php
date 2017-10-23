<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Auth\Events\Registered;
class RegisterController extends Controller
{

    use RegistersUsers;

    public function register(Request $request){
        //
        $errors=$this->validator($request->all())->errors();
        if(count($errors)!==0){
            return response()->json(['error'=>true,'msg'=>$errors],200);
        }
        else{
            $this->validator($request->all())->validate();
            event(new Registered($user = $this->create($request->all())));
            return $this->registered($request, $user);
        }
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    protected function registered(Request $request, $user)
    {
        return response()->json(['status'=>true],200);
    }
}
