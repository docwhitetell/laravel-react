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
        window.sr = ScrollReveal();
    </script>
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="{{asset('/bower_components/swiper/dist/css/swiper.min.css')}}">
    <!-- Link animate.css -->
    <link rel="stylesheet" href="{{asset('/bower_components/animate/animate.min.css')}}">

{{--    <link rel="stylesheet" href="{{asset('/bower_components/reveal/css/reveal.css')}}">
    <link rel="stylesheet" href="{{asset('/bower_components/reveal/css/theme/black.css')}}">--}}
<!-- Demo styles -->
    <style>
        html, body {
            position: relative;
            height: 100%;
        }
        body {
            background: #eee;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color:#000;
            margin: 0;
            padding: 0;
        }
        .swiper-container {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
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
<body>

   {{--        <div class="reveal">
             <div class="slides">
                 <section>
                     <img src="{{asset('/assets/blogs/authorimg.jpg')}}" width="68" alt="">
                     <h2>Doctor White</h2>
                     <span style="font-size: 16px">走在成为全栈工程师的路上</span>
                 </section>
                 <section>
                     <p>
                         是一个既对后端PHP，mysql略知一二。<br>
                         又对前端web世界有点自我理解的程序员
                     </p>
                 </section>
                 <section>
                     <p>我会的可就多了</p>
                     <h1>先说前端吧</h1>
                 </section>
                 <section>
                     <p>HTML，JavaScript，CSS</p>
                     <h5>这可是基础呢，怎么能不会呢</h5>
                 </section>
             </div>
         </div>--}}

           <div class="swiper-container">
               <div class="swiper-wrapper">
                   <div class="swiper-slide" data-history="slide1" id="slide1">
                       <div class="wow slideInLeft slide1" data-wow-duration="2s">31321</div>
                       <div class="wow slideInRight slide1" data-wow-duration="2s">32313</div>
                   </div>
                   <div class="swiper-slide" data-history="slide2" id="slide2">
                       <div class="wow slideInLeft slide2" data-wow-duration="2s">31321</div>
                       <div class="wow slideInRight slide2" data-wow-duration="2s">32313</div>
                   </div>
                   <div class="swiper-slide" data-history="slide3" id="slide3">
                       <div class="wow slideInLeft slide3" data-wow-duration="2s">31321</div>
                       <div class="wow slideInRight slide3" data-wow-duration="2s">32313</div>
                   </div>
               </div>
               <!-- Add Pagination -->
               <div class="swiper-pagination"></div>
           </div>


<script src="{{asset('/bower_components/reveal/js/reveal.js')}}"></script>
           <!-- Swiper JS -->
<script src="{{asset('/bower_components/swiper/dist/js/swiper.min.js')}}"></script>
   <script src="{{asset('/bower_components/wow/dist/wow.min.js')}}"></script>
<script>
/*
    Reveal.initialize({
        controlsLayout:'edges',
        mouseWheel: true,
        controlsTutorial: false,
        center: true,
        rtl: false,
        history:true,
    });
*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    history: {
        replaceState: true,
        key:'#'
    },
    mousewheel: {
        invert: false,
    },
    on:{
        init:function () {

        },
        slideChange:function () {
            console.log('change')
            var nowSlide=swiper.slides[this.activeIndex]
            var lastId=swiper.slides[this.previousIndex].id
            var clientHeight= window.innerHeight


            //console.log(nowSlide.querySelectorAll('.wow'))
            var currentClass=nowSlide.id
            var offset=0
            switch (currentClass){
                case 'slide1':
                     offset=0;
                    break;
                case 'slide2':
                     offset=clientHeight;
                    break;
                case 'slide3':
                     offset=clientHeight*2;
                    break;
                default:
                     offset=0;
            }
            console.log(offset)
            console.log(currentClass)
            var wow=new WOW({
                boxClass:  currentClass,
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null // optional scroll container selector, otherwise use window
            });
            //console.log(wow)
            wow.init();
        }
    }
});
/*var wow = new WOW(
    {
        boxClass:     'slide1',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();*/
</script>
</body>
</html>
