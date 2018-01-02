<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{$seo['title']??'Doctor White 个人技术分享'}}</title>
  <meta name="description" content="{{$seo['description']??'全栈工程师Doctor White个人技术分享网站,前端,React,后端,Laravel,Ubuntu,Nginx,Apache,由于使用AWS服务器搭建LNMP,网速有点慢,技术分享'}}">
  <meta name="Keywords" content="{{$seo['Keywords']??'个人博客,博客列表,技术分享,Doctor White,React,Laravel,Ubuntu,Nginx,LNMP,LANMP'}}">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="shortcut icon" href="{{asset('/app/favicon.ico')}}">
  <link rel="stylesheet" href="{{asset('/app/index.css')}}" />
  <link rel="stylesheet" href="{{asset('/app/filepicker.css')}}" />

<body>
<div id="root">

</div>

{{--
<script src="{{asset('/js/clipboard.min.js')}}"></script>

<script>
    new Clipboard('.copy-button')
</script>

--}}

<script type="text/javascript" src="{{asset('/app/index.js')}}"></script>
</body>
</html>
