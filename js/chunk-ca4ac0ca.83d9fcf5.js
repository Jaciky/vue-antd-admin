(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca4ac0ca"],{cd07:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header-index-wide"},[n("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[n("div",{staticClass:"account-settings-info-main",class:t.device},[n("div",{staticClass:"account-settings-info-left"},[n("a-menu",{style:{border:"0",width:"mobile"==t.device?"560px":"auto"},attrs:{mode:"mobile"==t.device?"horizontal":"inline",selectedKeys:t.selectedKeys,type:"inner"},on:{openChange:t.onOpenChange}},[n("a-menu-item",{key:"/account/settings/base"},[n("router-link",{attrs:{to:{name:"BaseSettings"}}},[t._v(" 基本设置 ")])],1),n("a-menu-item",{key:"/account/settings/security"},[n("router-link",{attrs:{to:{name:"SecuritySettings"}}},[t._v(" 安全设置 ")])],1),n("a-menu-item",{key:"/account/settings/custom"},[n("router-link",{attrs:{to:{name:"CustomSettings"}}},[t._v(" 个性化 ")])],1),n("a-menu-item",{key:"/account/settings/binding"},[n("router-link",{attrs:{to:{name:"BindingSettings"}}},[t._v(" 账户绑定 ")])],1),n("a-menu-item",{key:"/account/settings/notification"},[n("router-link",{attrs:{to:{name:"NotificationSettings"}}},[t._v(" 新消息通知 ")])],1)],1)],1),n("div",{staticClass:"account-settings-info-right"},[n("div",{staticClass:"account-settings-info-title"},[n("span",[t._v(t._s(t.$route.meta.title))])]),n("route-view")],1)])])],1)},a=[],s=(n("99af"),n("680a")),o=n("ac0d"),c={components:{RouteView:s["d"],PageView:s["c"]},mixins:[o["c"]],data:function(){return{mode:"inline",openKeys:[],selectedKeys:[],preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:""}},mounted:function(){this.updateMenu()},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat();this.selectedKeys=[t.pop().path]}},watch:{$route:function(t){this.updateMenu()}}},u=c,r=(n("fc7a"),n("2877")),d=Object(r["a"])(u,i,a,!1,null,"7a1b29ae",null);e["default"]=d.exports},e4c5:function(t,e,n){},fc7a:function(t,e,n){"use strict";var i=n("e4c5"),a=n.n(i);a.a}}]);