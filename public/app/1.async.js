webpackJsonp([1],{211:function(e,a,t){"use strict";function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(2),o=p(n),d=t(341),u=p(d);t(342);var r=t(95),s=(p(r),t(129),t(97)),i=p(s),l=t(130),c=(p(l),t(345),t(198));p(c);u.default.config({top:100});(0,i.default)("access_token");a.default={namespace:"ui",state:{},subscriptions:{setup:function(e){var a=e.dispatch;e.history.listen(function(e){var t=e.pathname;"/admin/UIElement/form"===t?a({type:"app/update",payload:{pageHeader:"Form Components"}}):"/admin/UIElement/table"===t?a({type:"app/update",payload:{pageHeader:"Table Components"}}):"/admin/UIElement/editor"===t&&a({type:"app/update",payload:{pageHeader:"Editor Components"}})})}},effects:{},reducers:{update:function(e,a){return(0,o.default)({},e,a.payload)}}},e.exports=a.default}});