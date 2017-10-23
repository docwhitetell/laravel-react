<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('action')->nullable()->comment('用户执行过的操作');
            $table->string('target')->nullable()->comment('被该操作影响的模型的id');
            $table->string('target_model')->nullable()->comment('被该操作影响的模型');
            $table->string('action_ip')->nullable()->comment('本次登录ip地址');
            $table->string('action_host')->nullable()->comment('本次操作所属域名');
            $table->string('user_client')->nullable()->comment('用户使用的客户端');
            $table->boolean('action_status')->nullable()->comment('操作状态(成功/失败)');
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
        Schema::dropIfExists('logs');
    }
}
