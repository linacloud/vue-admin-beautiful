/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-10-5 16:15:40
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea13a68c"],{"23dc":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tree-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[r("el-divider",{attrs:{"content-position":"left"}},[e._v("常规树")]),r("el-input",{attrs:{placeholder:"输入关键字过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),r("el-tree",{ref:"demoTree",staticClass:"vab-filter-tree",attrs:{data:e.data2,"default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":e.defaultExpendedKeys,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"highlight-current":!0,props:e.defaultProps,"node-key":"id","show-checkbox":""},on:{check:e.checkNode,"node-click":e.nodeClick,"node-collapse":e.nodeCollapse,"node-expand":e.nodeExpand},scopedSlots:e._u([{key:"defalut",fn:function(t){var l=t.node,a=t.data;return[r("span",{staticClass:"vab-tree-item"},[4==l.data.rank?r("i",{staticClass:"el-icon-s-custom"}):e._e(),e._v(" "+e._s(l.label)+" ")]),r("span",{staticClass:"vab-tree-options"},[4!==l.data.rank?r("a",{staticClass:"vab-tree-btn",attrs:{title:"添加"},on:{click:function(){return e.append(l,a,0)}}},[r("i",{staticClass:"el-icon-plus"})]):e._e(),r("a",{staticClass:"vab-tree-btn",attrs:{title:"编辑"},on:{click:function(){return e.edit(l,a,1)}}},[r("i",{staticClass:"el-icon-edit"})]),1!==l.data.rank?r("a",{staticClass:"vab-tree-btn",attrs:{title:"刪除"},on:{click:function(){return e.remove(l,a)}}},[r("i",{staticClass:"el-icon-delete"})]):e._e()])]}}])})],1),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[r("el-divider",{attrs:{"content-position":"left"}},[e._v("懒加载树")]),r("el-input",{staticClass:"input-with-select",attrs:{value:e.keyW,placeholder:"请输入内容"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.showTreeList(t)}},model:{value:e.keyW,callback:function(t){e.keyW=t},expression:"keyW"}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"blur-tree"},[r("el-tree",{ref:"treeFilter",staticClass:"vab-filter-tree",attrs:{data:e.filterDevLlist,"expand-on-click-node":!1,props:e.defaultProps,"default-expand-all":"","highlight-current":"","node-key":"indexCode"},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"defalut",fn:function(t){var l=t.node;return[r("span",{staticClass:"vab-tree-item"},[4==l.data.rank?r("i",{staticClass:"el-icon-s-custom"}):e._e(),e._v(" "+e._s(l.label)+" ")]),r("span",{staticClass:"vab-tree-options"},[4!==l.data.rank?r("a",{staticClass:"vab-tree-btn",attrs:{title:"添加"}},[r("i",{staticClass:"el-icon-plus"})]):e._e(),r("a",{staticClass:"vab-tree-btn",attrs:{title:"编辑"}},[r("i",{staticClass:"el-icon-edit"})]),1!==l.data.rank?r("a",{staticClass:"vab-tree-btn",attrs:{title:"刪除"}},[r("i",{staticClass:"el-icon-delete"})]):e._e()])]}}])})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"el-tree-wrap"},[r("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"tree",staticClass:"vab-filter-tree",attrs:{"expand-on-click-node":!1,load:e.loadNode,props:e.defaultProps,"highlight-current":"",lazy:"","node-key":"indexCode"},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"defalut",fn:function(t){var l=t.node;return[r("span",{staticClass:"vab-tree-item"},[4==l.data.rank?r("i",{staticClass:"el-icon-s-custom"}):e._e(),e._v(" "+e._s(l.label)+" ")]),r("span",{staticClass:"vab-tree-options"},[r("a",{staticClass:"vab-tree-btn",attrs:{title:"编辑"}},[r("i",{staticClass:"el-icon-edit"})]),1!==l.data.rank?r("a",{staticClass:"vab-tree-btn",attrs:{title:"刪除"}},[r("i",{staticClass:"el-icon-delete"})]):e._e()])]}}])})],1)],1),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[r("el-divider",{attrs:{"content-position":"left"}},[e._v("单选树")]),r("el-select",{ref:"singleTree",staticClass:"vab-tree-select",attrs:{clearable:"","popper-class":"select-tree-popper","value-key":"id"},on:{clear:function(t){return e.selectTreeClearHandle("single")}},model:{value:e.singleSelectTreeVal,callback:function(t){e.singleSelectTreeVal=t},expression:"singleSelectTreeVal"}},[r("el-option",{attrs:{value:e.singleSelectTreeKey}},[r("el-tree",{ref:"singleSelectTree",attrs:{id:"singleSelectTree","current-node-key":e.singleSelectTreeKey,data:e.selectTreeData,"default-expanded-keys":e.selectTreeDefaultSelectedKeys,"highlight-current":!0,props:e.selectTreeDefaultProps,"node-key":"id"},on:{"node-click":e.selectTreeNodeClick},scopedSlots:e._u([{key:"defalut",fn:function(t){var l=t.node;return[r("span",{staticClass:"vab-tree-item"},[e._v(e._s(l.label))])]}}])})],1)],1)],1),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[r("el-divider",{attrs:{"content-position":"left"}},[e._v("多选树")]),r("el-select",{staticClass:"vab-tree-select",attrs:{clearable:"","collapse-tags":"",multiple:"","popper-class":"select-tree-popper"},on:{change:e.changeMultipleSelectTreeHandle,clear:function(t){return e.selectTreeClearHandle("multiple")},"remove-tag":e.removeSelectTreeTag},model:{value:e.multipleSelectTreeVal,callback:function(t){e.multipleSelectTreeVal=t},expression:"multipleSelectTreeVal"}},[r("el-option",{attrs:{value:e.multipleSelectTreeKey}},[r("el-tree",{ref:"multipleSelectTree",attrs:{id:"multipleSelectTree","current-node-key":e.multipleSelectTreeKey,data:e.selectTreeData,"default-checked-keys":e.selectTreeDefaultSelectedKeys,"default-expanded-keys":e.selectTreeDefaultSelectedKeys,"highlight-current":!0,props:e.selectTreeDefaultProps,"node-key":"id","show-checkbox":""},on:{check:e.multipleSelectTreeCheckNode}})],1)],1)],1)],1),r("el-dialog",{staticClass:"tree-operate-dialog",attrs:{title:e.dialogTitle,visible:e.treeDialogVisible,width:"400px"},on:{"update:visible":function(t){e.treeDialogVisible=t},close:function(t){e.treeDialogVisible=!1}}},[r("el-form",{ref:"treeForm",attrs:{model:e.treeForm}},[r("el-form-item",{attrs:{label:"节点名称",required:""}},[r("el-input",{model:{value:e.treeForm.name,callback:function(t){e.$set(e.treeForm,"name",t)},expression:"treeForm.name"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.treeDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveTree}},[e._v("确 定")])],1)],1)],1)},a=[],s=(r("dbb3"),r("3466"),r("fe59"),r("ecb4"),r("9302"),r("ea69"),r("053b"),r("e35a"),r("0d7a"),r("6db4"),r("08ba"),r("5748")),n=(r("6a61"),r("cf7f")),i=r("8610"),c={name:"Tree",data:function(){return{dialogTitle:"添加节点",treeFlag:0,treeDialogVisible:!1,treeForm:{id:"",name:""},checkNodeKeys:[],filterText:"",data2:[],defaultProps:{children:"children",label:"name"},defaultExpendedKeys:[],defaultCheckedKeys:[],loading:!0,keyW:"",filterDevLlist:[],isShow:!1,updateTree:!0,selectLevel:4,singleSelectTreeVal:"",singleSelectTreeKey:"",selectTreeData:[],selectTreeDefaultSelectedKeys:[],selectTreeDefaultProps:{children:"children",label:"name"},multipleSelectTreeVal:[],multipleSelectTreeKey:""}},watch:{filterText:function(e){this.$refs.demoTree.filter(e)}},mounted:function(){var e=this;this.$nextTick((function(){e.getTreeListFuc(1),e.setCheckedKeys(),e.initSingleTree("single"),e.initSingleTree("multiple")}))},methods:{openTree:function(e,t){var r=this,l=function e(l){l.forEach((function(l){l.rank<=t&&r.defaultExpendedKeys.push(l.id),l.children.length>0&&e(l.children)}))};l(e)},getTreeListFuc:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var l,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(i["getTreeList"])();case 2:l=r.sent,a=l.data,t.data2=a,e&&t.openTree(t.data2,2);case 6:case"end":return r.stop()}}),r)})))()},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},append:function(e,t,r){this.treeFlag=r,this.dialogTitle="添加节点",this.treeForm={id:"",name:""},this.treeDialogVisible=!0},edit:function(e,t,r){this.treeFlag=r,this.dialogTitle="编辑节点",this.treeForm={id:t.id,name:t.name},this.treeDialogVisible=!0},remove:function(e,t){var r=this;this.$baseConfirm("你确定要删除该节点?",null,Object(n["a"])(regeneratorRuntime.mark((function e(){var t,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object(i["getTreeList"])(),l=t.msg,r.$baseMessage(l,"success"),r.getTreeListFuc(0);case 3:case"end":return e.stop()}}),e)}))))},saveTree:function(){var e=this;this.$refs.treeForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var l,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=8;break}return t.next=3,Object(i["getTreeList"])();case 3:l=t.sent,a=l.msg,e.$baseMessage(a,"success"),e.treeDialogVisible=!1,e.getTreeListFuc(0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},setCheckedKeys:function(){this.$refs.demoTree.setCheckedKeys([1])},nodeClick:function(e,t,r){},checkNode:function(e,t,r){this.checkNodeKeys=t.checkedKeys},nodeExpand:function(e,t,r){this.defaultExpendedKeys.push(e.id)},nodeCollapse:function(e,t,r){this.defaultExpendedKeys.splice(this.defaultExpendedKeys.findIndex((function(t){return t.id===e.id})),1)},loadNode:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function l(){var a,s,n;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(0!==e.level){l.next=9;break}return l.next=3,Object(i["getTreeList"])();case 3:return a=l.sent,s=a.data,r.loading=!1,l.abrupt("return",t(s));case 9:return l.next=11,Object(i["getTreeList"])();case 11:return n=l.sent,n.data,l.abrupt("return",t(res.data));case 14:case"end":return l.stop()}}),l)})))()},showTreeList:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var l,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("string"===typeof e&&(t.keyW=e.trim()),0===t.keyW.length){r.next=12;break}return{},{keyWord:t.keyW},r.next=6,Object(i["getTreeList"])();case 6:l=r.sent,a=l.data,t.filterDevLlist=a,t.isShow=!0,r.next=13;break;case 12:t.isShow=!1;case 13:case"end":return r.stop()}}),r)})))()},initSingleTree:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var l,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(i["getTreeList"])();case 2:l=r.sent,a=l.data,t.selectTreeData=a,t.$nextTick((function(){t.selectTreeDefaultSelectedKeys=t.singleSelectTreeKey.split(","),"single"==e?t.$refs.singleSelectTree.setCurrentKey(t.singleSelectTreeKey):t.$refs.multipleSelectTree.setCheckedKeys(t.selectTreeDefaultSelectedKeys)}));case 6:case"end":return r.stop()}}),r)})))()},selectTreeClearHandle:function(e){this.selectTreeDefaultSelectedKeys=[],this.clearSelected(),"single"==e?(this.singleSelectTreeVal="",this.singleSelectTreeKey="",this.$refs.singleSelectTree.setCurrentKey("")):(this.multipleSelectTreeVal=[],this.multipleSelectTreeKey="",this.$refs.multipleSelectTree.setCheckedKeys([]))},clearSelected:function(){var e=document.querySelectorAll("#singleSelectTree .el-tree-node");e.forEach((function(e){return e.classList.remove("is-current")}))},removeSelectTreeTag:function(e){var t=JSON.parse(JSON.stringify(this.selectTreeData));while(t.length){var r=t.shift();if(r.name==e)return this.$refs.multipleSelectTree.setChecked(r.id,!1);r.children&&r.children.length&&t.unshift.apply(t,Object(s["a"])(r.children))}},changeMultipleSelectTreeHandle:function(e){},selectTreeNodeClick:function(e,t,r){e.rank>=this.selectLevel&&(this.singleSelectTreeVal=e.name,this.singleSelectTreeKey=e.id,this.$refs.singleTree.blur())},multipleSelectTreeCheckNode:function(e,t,r){var l=this,a=this.$refs.multipleSelectTree.getCheckedNodes(),s=[],n=[];a.forEach((function(e){e.rank>=l.selectLevel&&(s.push(e.id),n.push(e.name))})),this.multipleSelectTreeVal=n,this.multipleSelectTreeKey=s.join(",")}}},o=c,d=r("9ca4"),u=Object(d["a"])(o,l,a,!1,null,null,null);t["default"]=u.exports},3466:function(e,t,r){"use strict";var l=r("1c8b"),a=r("5dfd").findIndex,s=r("258f"),n=r("ff9c"),i="findIndex",c=!0,o=n(i);i in[]&&Array(1)[i]((function(){c=!1})),l({target:"Array",proto:!0,forced:c||!o},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s(i)},8610:function(e,t,r){"use strict";r.r(t),r.d(t,"getTreeList",(function(){return a}));var l=r("b775");function a(e){return Object(l["default"])({url:"/tree/list",method:"post",data:e})}}}]);