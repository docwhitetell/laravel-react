<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_information', function (Blueprint $table) {
            $table->integer('user_id')->unique()->nullable()->comment('用户id');
            $table->bigInteger('phone')->unique()->comment('用户phone');
            //$table->string('using_client')->nullable()->comment('用户上次登录使用的客户端');
            //$table->string('last_login_ip')->nullable();
            $table->text('scope')->nullable()->comment('用户权限范围 以空格区分');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_information');
    }
}
