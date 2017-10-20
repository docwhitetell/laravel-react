# laravel-react
laravel (PHP) for backend， react for front

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


请开始享受 Laravel 以及 基于React全家桶封装的dva框架带来的前后端分离的完整简单应用demo。