/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-10-5 16:15:40
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de62"],{d2ec:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"permissions-container"},[a("el-divider",{attrs:{"content-position":"left"}},[e._v(" intelligence模式,前端根据permissions拦截路由(演示环境,默认使用此方案) ")]),a("el-form",{ref:"form",attrs:{model:e.form,inline:!0}},[a("el-form-item",{attrs:{label:"切换账号"}},[a("el-radio-group",{model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}},[a("el-radio",{attrs:{label:"admin"}},[e._v("admin")]),a("el-radio",{attrs:{label:"editor"}},[e._v("editor")]),a("el-radio",{attrs:{label:"test"}},[e._v("test")])],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleChangePermission}},[e._v(" 切换权限 ")])],1),a("el-form-item",{attrs:{label:"当前账号拥有的权限"}},[e._v(" "+e._s(JSON.stringify(e.permissions))+" ")])],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("按钮级权限演示")]),a("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["admin"],expression:"['admin']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["admin"]权限的按钮 ')]),a("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["editor"],expression:"['editor']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["editor"]权限的按钮 ')]),a("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["test"],expression:"['test']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["test"]权限的按钮 ')]),a("br"),a("br"),a("el-divider",{attrs:{"content-position":"left"}},[e._v(" all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案) ")]),a("p",[e._v(" settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种, 由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解 ")]),a("br"),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-table",{attrs:{data:e.tableData,"row-key":"path",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"name"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"path",label:"path"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"component",label:"component"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"redirect",label:"redirect"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"meta.title",label:"标题"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[o.meta?a("span",[o.meta.icon?a("vab-icon",{attrs:{icon:["fas",o.meta.icon]}}):e._e()],1):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否固定"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[o.meta?a("span",[e._v(" "+e._s(o.meta.affix)+" ")]):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否无缓存"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[o.meta?a("span",[e._v(" "+e._s(o.meta.noKeepAlive)+" ")]):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"badge"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[o.meta?a("span",[e._v(" "+e._s(o.meta.badge)+" ")]):e._e()]}}])})],1)],1)],1)],1)},r=[],n=(a("6a61"),a("cf7f")),s=a("e793"),l=a("9f3a"),i=a("778c"),c=a("2033"),m={name:"Permissions",data:function(){return{form:{account:""},tableData:[],res:[]}},computed:Object(s["a"])({},Object(l["c"])({username:"user/username",permissions:"user/permissions"})),created:function(){this.fetchData()},mounted:function(){this.form.account=this.username},methods:{handleChangePermission:function(){localStorage.setItem(i["tokenTableName"],"".concat(this.form.account,"-accessToken")),location.reload()},fetchData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["getRouterList"])();case 2:a=t.sent,e.tableData=a.data,e.res=a;case 5:case"end":return t.stop()}}),t)})))()}}},u=m,p=a("9ca4"),d=Object(p["a"])(u,o,r,!1,null,null,null);t["default"]=d.exports}}]);