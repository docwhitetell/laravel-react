# Laravel-React 
作者：Doc.White
<br>
以 Laravel 制作后端API，使用 React 渲染。<br/>
###目录结构 
<br/>
front-antd文件夹为前端资源文件<br/>

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 测试使用的静态资源文件
│ ├── /components/   # UI组件及UI相关方法
│ ├── /routes/       # 路由组件
│ │ └── app.js       # 路由入口
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ │ └── request.js   # 自定义的axios异步请求函数，可自定义请求的headers，post-data，get-params
│ ├── /mock/         # 模拟数据mock
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数（本项目不使用）
│ │ └── theme.js     # 项目需要在js中使用到material-ui 主题色变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc       # roadhog配置
```
#一.目的<br/>
1.模拟在使用react全家桶构建中大型web应用中如何跟后端交互。<br/>
2.使用原生的material-ui（1.0）组件构建前端。<br/>
3.使用laravel构建应用真实API。<br/>
4.MockJs模拟随机数据API。<br/>
<br/>
<br/>

#二.涉及知识点<br/>
#1.前端部分主要使用到的技术<br/>
（1）Dva(https://github.com/dvajs/dva),由蚂蚁金服基于react全家桶封装的一套框架。使用起来更便捷。<br/>
（2）MockJs 模拟API，生成随机数据。<br/>
（3）动态加载方面没有使用官方推荐的require.ensure[],而是沿用dva自带的dva/dynamic 解决组件动态加载问题的方法，基于 react-async-component 实现。<br/>
（4）redux，Dva的model使开发者能更优雅直观的区分不同的state域以及编写reducer，由五个基本概念：<br/>
1.namespace(state的局域划分,命名空间)。2.state(当前namespace 的 state)。<br/>
3.reducer(用于处理同步操作，唯一可以修改 state 的地方。由 action 触发)。<br/>
4.effect(用于处理异步操作和业务逻辑，不直接修改 state。由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。)<br/>
5.subscriptions（用于订阅一个数据源，然后根据需要 dispatch 相应的 action。在 app.start() 时被执行，数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等）
router按需加载，单向数据流，数据源订阅<br/>
（5）Material-ui 后台dashboard大量应用material-ui这套UI库中的组件，同时使用它自带的theme配合redux动态覆盖重写theme变量达到自定义修改主题色的功能，<br/>
并通过localstorage维持数据持久化，长久保存用户设定。<br/>
 (6) antd UI库，使用蚂蚁金服开发Antd UI库配合material-ui弥补各自缺陷。
（7）使用Rechart 制作数据展示图标。

#2.后端部分<br/>
（1）.Laravel基础。<br/>
（2）.基于Laravel 官方包 Laravel Passport，构建Oauth2.0密码授权方式登录，为指定API提供中间件保护，以此保护授权API安全性。<br/>
（3）.ORM，Laravel所推荐的更优雅的数据库CURD操作方式。<br/>
（4）.使用模型关联从而完成更优雅的连表查询增删改等操作（比较适合直连查询，多表连查的时候还是推荐原生数据库操作模式，即左连接右连接等等）<br/>
（5）.允许API的跨域访问。<br/>
（6）.配合前端页面编写合适的API响应，以完成交互数据在数据库的增删差改。
（7）.文件上传，保存。






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