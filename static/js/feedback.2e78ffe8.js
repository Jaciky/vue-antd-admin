(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["feedback"],{a7e0:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"msg-wrapper"},[e("h3",{staticClass:"title"},[t._v("Alert 警告提示")]),e("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(0),e("a-alert",{attrs:{message:"Success Text",type:"success"}}),e("a-alert",{attrs:{message:"Very long warning text warning text text text text text text text",banner:"",closable:""}}),e("a-alert",{attrs:{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success","show-icon":""}}),e("a-alert",{attrs:{message:"Error Text",type:"error"}})],1),e("a-divider"),e("div",{staticClass:"msg-wrapper"},[e("h3",{staticClass:"title"},[t._v("Modal 对话框")]),e("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(1),e("div",{staticClass:"btns"},[e("a-button",{on:{click:t.success}},[t._v("Success")]),e("a-button",{on:{click:t.error}},[t._v("Error")]),e("a-button",{on:{click:t.warning}},[t._v("Warning")])],1)]),e("a-divider"),e("div",{staticClass:"msg-wrapper"},[e("h3",{staticClass:"title"},[t._v("全局顶部提示")]),e("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(2),e("div",{staticClass:"btns"},[e("a-button",{on:{click:t.success}},[t._v("Success")]),e("a-button",{on:{click:t.error}},[t._v("Error")]),e("a-button",{on:{click:t.warning}},[t._v("Warning")])],1)]),e("a-divider"),e("div",{staticClass:"msg-wrapper"},[e("h3",{staticClass:"title"},[t._v("通知提醒框")]),e("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(3),e("div",{staticClass:"btns"},[e("a-button",{on:{click:t.success}},[t._v("Success")]),e("a-button",{on:{click:t.error}},[t._v("Error")]),e("a-button",{on:{click:t.warning}},[t._v("Warning")])],1)])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"features"},[e("li",[t._v("当某个页面需要向用户显示警告的信息时。")]),e("li",[t._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"features"},[e("li",[t._v("可提供成功、警告和错误等反馈信息。")]),e("li",[t._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"features"},[e("li",[t._v("可提供成功、警告和错误等反馈信息。")]),e("li",[t._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"features"},[e("li",[t._v("较为复杂的通知内容。")]),e("li",[t._v("带有交互的通知，给出用户下一步的行动点")]),e("li",[t._v("系统主动推送。")])])}],r=e("1da1"),c={name:"Feedback",components:{},filters:{},mixins:[],data(){return{}},computed:{},watch:{},created(){},methods:{success(){var t=this;return Object(r["a"])((function*(){t.$createElement;yield t.$g.confirm(t=>t("div",{style:"color:red;"},["Some descriptions"]),{okType:"danger"})}))()},error(){this.$success("This is an error message")},warning(){this.$message.warning("This is a warning message")}}},n=c,l=(e("e04a"),e("2877")),o=Object(l["a"])(n,a,i,!1,null,"0b53abd3",null);s["default"]=o.exports},ac35:function(t,s,e){},e04a:function(t,s,e){"use strict";var a=e("ac35"),i=e.n(a);i.a}}]);