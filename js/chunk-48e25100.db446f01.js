(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48e25100"],{"004c":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("page-view",{attrs:{avatar:t.avatar,title:!1}},[e("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.timeFix)+"，"+t._s(t.user.name)+" "),e("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome))])]),e("div",[t._v("前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台")])]),e("div",{attrs:{slot:"extra"},slot:"extra"},[e("a-row",{staticClass:"more-info"},[e("a-col",{attrs:{span:8}},[e("head-info",{attrs:{title:"项目",content:"56",center:!1,bordered:!1}})],1),e("a-col",{attrs:{span:8}},[e("head-info",{attrs:{title:"团队排名",content:"8/24",center:!1,bordered:!1}})],1),e("a-col",{attrs:{span:8}},[e("head-info",{attrs:{title:"项目数",content:"2,223",center:!1}})],1)],1)],1),e("div",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"进行中的项目","body-style":{padding:0}}},[e("a",{attrs:{slot:"extra"},slot:"extra"},[t._v("全部项目")]),e("div",t._l(t.projects,(function(a,r){return e("a-card-grid",{key:r,staticClass:"project-card-grid"},[e("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[e("a-card-meta",[e("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[e("a-avatar",{attrs:{size:"small",src:a.cover}}),e("a",[t._v(t._s(a.title))])],1),e("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[t._v(" "+t._s(a.description)+" ")])]),e("div",{staticClass:"project-item"},[e("a",{attrs:{href:"/#/"}},[t._v("科学搬砖组")]),e("span",{staticClass:"datetime"},[t._v("9小时前")])])],1)],1)})),1)]),e("a-card",{attrs:{loading:t.loading,title:"动态",bordered:!1}},[e("a-list",t._l(t.activities,(function(a,r){return e("a-list-item",{key:r},[e("a-list-item-meta",[e("a-avatar",{attrs:{slot:"avatar",src:a.user.avatar},slot:"avatar"}),e("div",{attrs:{slot:"title"},slot:"title"},[e("span",[t._v(t._s(a.user.nickname))]),t._v(" 在 "),e("a",{attrs:{href:"#"}},[t._v(t._s(a.project.name))]),t._v(" "),e("span",[t._v(t._s(a.project.action))]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v(t._s(a.project.event))])]),e("div",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(a.time))])],1)],1)})),1)],1)],1),e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"快速开始 / 便捷导航",bordered:!1,"body-style":{padding:0}}},[e("div",{staticClass:"item-group"},[e("a",[t._v("操作一")]),e("a",[t._v("操作二")]),e("a",[t._v("操作三")]),e("a",[t._v("操作四")]),e("a",[t._v("操作五")]),e("a",[t._v("操作六")]),e("a-button",{attrs:{size:"small",type:"primary",ghost:"",icon:"plus"}},[t._v("添加")])],1)]),e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"XX 指数",loading:t.radarLoading,bordered:!1,"body-style":{padding:0}}},[e("div",{staticStyle:{"min-height":"400px"}},[e("radar",{attrs:{data:t.radarData}})],1)]),e("a-card",{attrs:{loading:t.loading,title:"团队",bordered:!1}},[e("div",{staticClass:"members"},[e("a-row",t._l(t.teams,(function(a,r){return e("a-col",{key:r,attrs:{span:12}},[e("a",[e("a-avatar",{attrs:{size:"small",src:a.avatar}}),e("span",{staticClass:"member"},[t._v(t._s(a.name))])],1)])})),1)],1)])],1)],1)],1)])},i=[],s=e("f3f3"),n=e("ca00"),c=e("5880"),o=e("680a"),d=e("81d1"),l=e("2af9"),u=e("0fea"),v=e("5fd4"),m=e("7104"),f={name:"Workplace",components:{PageView:o["c"],HeadInfo:d["a"],Radar:l["n"]},data:function(){return{timeFix:Object(n["d"])(),avatar:"",user:{},projects:[],loading:!0,radarLoading:!0,activities:[],teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],radarData:[]}},computed:Object(s["a"])({},Object(c["mapState"])({nickname:function(t){return t.user.nickname},welcome:function(t){return t.user.welcome}}),{userInfo:function(){return this.$store.getters.userInfo}}),created:function(){this.user=this.userInfo,this.avatar=this.userInfo.avatar,Object(u["b"])().then((function(t){})),Object(u["c"])().then((function(t){}))},mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar()},methods:{getProjects:function(){var t=this;Object(v["c"])().then((function(a){var e,r;t.projects=null!==(e=null===(r=a.data)||void 0===r?void 0:r.data)&&void 0!==e?e:[],t.loading=!1}))},getActivity:function(){var t=this;Object(v["a"])().then((function(a){t.activities=a.data}))},getTeams:function(){var t=this;Object(v["e"])().then((function(a){t.teams=a.data}))},initRadar:function(){var t=this;this.radarLoading=!0,Object(v["d"])().then((function(a){var e=(new m.View).source(a.data);e.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=e.rows,t.radarLoading=!1}))}}},p=f,b=(e("4f66"),e("2877")),g=Object(b["a"])(p,r,i,!1,null,"2bdd78b5",null);a["default"]=g.exports},"0fea":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return o}));var r=e("b775"),i="",s={user:"".concat(i,"/user"),role:"".concat(i,"/role"),service:"".concat(i,"/service"),permission:"".concat(i,"/permission"),permissionNoPager:"".concat(i,"/permission/no-pager"),orgTree:"".concat(i,"/org/tree")};function n(t){return Object(r["b"])({url:s.role,method:"get",params:t})}function c(t){return Object(r["b"])({url:s.service,method:"get",params:t})}function o(t){return Object(r["b"])({url:s.orgTree,method:"get",params:t})}},"1f2f":function(t,a,e){},"4f66":function(t,a,e){"use strict";var r=e("1f2f"),i=e.n(r);i.a},"5fd4":function(t,a,e){"use strict";e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return c})),e.d(a,"e",(function(){return o})),e.d(a,"d",(function(){return d})),e.d(a,"b",(function(){return l}));var r=e("b775"),i="",s={Activity:"".concat(i,"/workplace/activity"),Teams:"".concat(i,"/workplace/teams"),Radar:"".concat(i,"/workplace/radar"),Projects:"".concat(i,"/list/search/projects"),ServerList:"".concat(i,"/service"),article:"".concat(i,"/list/article")};function n(){return Object(r["b"])({url:s.Projects,method:"get"})}function c(){return Object(r["b"])({url:s.Activity,method:"get"})}function o(){return Object(r["b"])({url:s.Teams,method:"get"})}function d(){return Object(r["b"])({url:s.Radar,method:"get"})}function l(t){return Object(r["b"])({url:s.article,method:"get",data:t})}}}]);