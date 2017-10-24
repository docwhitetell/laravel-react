# laravel-react
laravel (PHP) for backend， react for front

#一.目的<br/>
1.模拟在使用react全家桶构建中大型web应用中如何跟后端交互。<br/>
2.使用原生的material-ui（1.0）组件构建前端。<br/>
3.使用laravel构建应用真实API。<br/>
4.MockJs模拟随机数据API。<br/>
<br/>
<br/>

#二.涉及知识点<br/>
#1.前端部分<br/>
（1）Dva(https://github.com/dvajs/dva),由蚂蚁金服基于react全家桶封装的一套框架。使用起来更便捷。<br/>
（2）MockJs 模拟API，生成随机数据。<br/>
（3）dva/dynamic 解决组件动态加载问题的方法，基于 react-async-component 实现。<br/>
（4）redux，Dva的model使开发者能更优雅直观的区分不同的state域以及编写reducer，由五个基本概念：<br/>
1.namespace(state的局域划分,命名空间)。2.state(当前namespace 的 state)。<br/>
3.reducer(用于处理同步操作，唯一可以修改 state 的地方。由 action 触发)。<br/>
4.effect(用于处理异步操作和业务逻辑，不直接修改 state。由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。)<br/>
5.subscriptions（用于订阅一个数据源，然后根据需要 dispatch 相应的 action。在 app.start() 时被执行，数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等）
router按需加载，单向数据流，数据源订阅<br/>

#2.后端部分<br/>
（1）.Laravel基础。<br/>
（2）.基于Laravel 官方包 Laravel Passport，构建Oauth2.0密码授权方式登录，为指定API提供中间件保护，以此保护授权API安全性。<br/>
（3）.ORM，Laravel所推荐的更优雅的数据库CURD操作方式。<br/>
（4）.使用模型关联从而完成更优雅的连表查询增删改等操作（比较适合直连查询，多表连查的时候还是推荐原生数据库操作模式，即左连接右连接等等）<br/>
（5）.允许API的跨域访问。<br/>






#三.安装使用
<br/>
下载项目文件 <br/>
git clone https://github.com/docwhitetell/laravel-react.git

复制.env.example 改名成 .env 同时修改APP_URL为你本地设置的项目地址,配置database<br/>
1.安装laravel依赖<br/>
composer install<br/>

2.生成laravel app key<br/>
php artisan key:generate<br/>

3.生成迁移表<br/>
php artisan migrate<br/>

4.安装passport相关<br/>
php artisan passport:install --force<br/>

5.由于这个demo应用只需要Oauth中相对简易的密码授权模式，<br/>
登录成功后使用了默认生成的密码客户端发放access_token，如需使用其他方式的授权方式，<br/>
自行修改 App\Http\Controller\Api\PassportController中发放access_token的方式<br/>
   
6.命令行进入front-antd目录<br/>
npm install <br/>

7.修改src/utils/config文件<br/>
将api地址的域名字段改为您设置的本地laravel项目地址 <br/>

8.运行react <br/>
npm start


9.在开始体验React构建的前端应用之前，请先在你本地配置的laravel项目中注册账号，<br/>
然后就可以开始享受 Laravel 以及 基于React全家桶封装的dva框架带来的前后端分离的完整简单应用demo。