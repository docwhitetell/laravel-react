<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Doctor White 的简历</title>
    <meta name="description" content="{{$seo['description']??'全栈工程师Doctor White个人技术分享网站,前端,React,后端,Laravel,Ubuntu,Nginx,Apache,由于使用AWS服务器搭建LNMP,网速有点慢,技术分享'}}">
    <meta name="Keywords" content="{{$seo['Keywords']??'个人博客,博客列表,技术分享,Doctor White,React,Laravel,Ubuntu,Nginx,LNMP,LANMP'}}">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{asset('/bower_components/scrollreveal/dist/scrollreveal.min.js')}}"></script>
    <script>
        window.sr = ScrollReveal({reset:true});
    </script>
    <!-- Link animate.css -->
    <link rel="stylesheet" href="{{asset('/bower_components/animate/animate.min.css')}}">

    <style>

        html,body,ul{
            margin: 0;padding: 0;
            background-color: #222222;
        }
        a{
            text-decoration: none;
            color: inherit;
        }
        #header{
            width:100%;
            height:100px;
            line-height: 100px;
            position: fixed;
            top:0;
        }
        #header ul{
            height:100%;
            line-height: inherit;
            text-align: right;
            padding-right: 60px;
        }
        #header ul li{
            list-style: none;display: inline-block;
            margin-right: 40px;
        }
        #header a{
            color: #ffffff;
        }
        #main{
        }
        #main .part{
            height: 100vh;
            text-align: center;
            font-size: 18px;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
    </style>
<body class="resume">
    <header id="header">
        <ul>
            <li class="header-link"><a href="http://www.docwhite.cn" target="_blank">博客</a></li>
            <li class="header-link"><a href="/slide">简历 II</a></li>
        </ul>
    </header>
    <div id="main">
        <section class="part">
            <div class="slideFromTop">Doc White</div>
        </section>
        <section class="part">
            <div class="slideFromTop">Doc White</div>
        </section>
    </div>
    <footer>

    </footer>

    <script>
        sr.reveal('.slideFromTop', { duration: 1000,origin:'top',distance:'200px',scale: 1, });
    </script>
</body>
</html>
