<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="{{asset('/rap/index.css')}}">
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
    {{--<iframe src="//localhost:8000" frameborder="0" width="100%" height="700px"></iframe>--}}
    <div id="root"></div>
    <div class="flex-center position-ref full-height">
        @if (Route::has('login'))
            <div class="top-right links">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                        @endauth
            </div>
        @endif

        <div class="content">
            <div class="title m-b-md">
                Laravel
            </div>
            <form action="/fileupload" method="post" enctype="multipart/form-data">
                {{csrf_field()}}
                <input type="file" name="img1">
                <input type="file" name="img2">
                <button type="submit">submit</button>
            </form>
            <div class="links">
                <a href="https://laravel.com/docs">Documentation</a>
                <a href="https://laracasts.com">Laracasts</a>
                <a href="https://laravel-news.com">News</a>
                <a href="https://forge.laravel.com">Forge</a>
                <a href="https://github.com/laravel/laravel">GitHub</a>
            </div>
        </div>
    </div>

    <script src="{{asset('/rap/index.js')}}"></script>
    <script>
        // windchill 提交数据回调
        window.onload = function () {
            function submitDataCallback(data) {
                console.log(data);
                var req = null;
                var res = null;
                req = new XMLHttpRequest();
                req.onreadystatechange = function () {
                    if (req.readyState === 4 && req.status === 200) {
                        res = JSON.parse(req.response);
                        /*
                        * success Callback
                        * */
                    }
                }
                req.open("POST", "//admin.docwhite.cn/v1/form/data"); // 将ajax请求设置为同步请求
                req.setRequestHeader('Content-Type', 'application/json');
                req.send(JSON.stringify(data))
            }

            // 注册进入 Rap系统
            rap.submitDataCallback = submitDataCallback;
            rap.form = {
                schemaInfoId:16,
                // formDataId:37
            }
            rap.start('#root');
        }
    </script>
    </body>
</html>
