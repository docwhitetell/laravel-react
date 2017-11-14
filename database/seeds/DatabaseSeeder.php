<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         //$this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            'name' => 'example',
            'email' => 'example@react.com',
            'experience'=>true,
            'password' => bcrypt(123456),
        ]);
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => '510559413@qq.com',
            'experience'=>false,
            'password' => bcrypt(123456),
        ]);
        factory('App\User', 1000)->create()->make();

    }
}
