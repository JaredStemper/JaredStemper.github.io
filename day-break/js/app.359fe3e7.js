(function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/day-break/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1537:function(e,t,r){"use strict";var n=r("6eda"),s=r.n(n);s.a},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],o=r("2877"),c={},i=Object(o["a"])(c,s,a,!1,null,null,null),u=i.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[e._m(0),r("section",{staticClass:"section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-4-desktop is-6-touch is-offset-4-desktop is-offset-3-touch"},[r("LoginForm")],1)])])])])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-dark is-small"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v(" Day Break Chat ")]),r("h2",{staticClass:"subtitle"},[e._v(" Powered by Chatkit SDK and Buefy ")]),r("p",[e._v(" for more info visit: ")]),r("a",{staticClass:"button is-dark is-outlined is-inverted",attrs:{href:"https://github.com/franciscoh017"}},[e._v("Github")])])])])}],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-form"},[r("p",{staticClass:"is-size-5 has-text-centered"},[e._v("Login")]),r("hr"),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("b-message",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],attrs:{type:"is-danger"}},[e._v(" "+e._s(e.error)+" ")]),r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{label:"User Name",expanded:""}},[r("b-input",{attrs:{id:"userInput",type:"text",placeholder:"Enter user name",disabled:e.loading,autocomplete:"off",required:""},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}})],1)],1),r("button",{staticClass:"button is-info is-fullwidth",class:e.loading?"is-loading":"",attrs:{type:"submit",disabled:e.isValid}},[e._v(" Login ")])],1)])},p=[],m=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf"),r("1da1")),j=r("ade3"),v=r("2f62");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={name:"login-form",data:function(){return{userId:""}},computed:h({isValid:function(){var e=this.userId.length<3;return e||this.loading}},Object(v["e"])(["loading","error"]),{},Object(v["c"])(["hasError"])),methods:h({},Object(v["b"])(["login"]),{onSubmit:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.login(e.userId);case 2:r=t.sent,r&&e.$router.push("chat");case 4:case"end":return t.stop()}}),t)})))()}})},y=O,w=Object(o["a"])(y,b,p,!1,null,null,null),k=w.exports,_={name:"login",components:{LoginForm:k}},P=_,C=Object(o["a"])(P,d,f,!1,null,null,null),x=C.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chat-dashboard"},[r("ChatNavBar"),r("div",{staticClass:"container",staticStyle:{position:"relative"}},[r("b-loading",{attrs:{"is-full-page":!1,active:e.loading,"can-cancel":!1},on:{"update:active":function(t){e.loading=t}}}),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-2"},[r("RoomList")],1),r("div",{staticClass:"column is-2 is-hidden-desktop is-hidden-tablet"},[r("UserList")],1),r("div",{staticClass:"column is-8 chat-content"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("MessageList")],1)]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("MessageForm")],1)])]),r("div",{staticClass:"column is-2 is-hidden-mobile"},[r("UserList")],1)])],1)],1)},E=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar is-dark",attrs:{id:"chat-navbar",role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item is-size-4",attrs:{to:"/"}},[e._v(" Day Break ")]),e._m(0)],1),r("div",{staticClass:"navbar-menu is-active",attrs:{id:"navMenu"}},[r("div",{staticClass:"navbar-start"}),r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item"},[r("p",[e._v(e._s(e.user.name))])]),r("div",{staticClass:"navbar-item"},[r("a",{staticClass:"button",attrs:{href:"#"},on:{click:e.onLogout}},[e._v(" Logout ")])])])])])])},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"navbar-burger",attrs:{role:"button","data-target":"navMenu","aria-label":"menu","aria-expanded":"false"}},[r("span",{attrs:{"aria-hidden":"true"}}),r("span",{attrs:{"aria-hidden":"true"}}),r("span",{attrs:{"aria-hidden":"true"}})])}];r("fb6a");function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={name:"ChatNavBar",computed:z({},Object(v["e"])(["user","reconnect"])),methods:z({},Object(v["b"])(["logout","login"]),{},Object(v["d"])(["setReconnect"]),{onLogout:function(){this.$router.push({path:"/"}),this.logout()},unload:function(){this.user.username&&this.setReconnect(!0)}}),mounted:function(){document.addEventListener("DOMContentLoaded",(function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.target,r=document.getElementById(t);e.classList.toggle("is-active"),r.classList.toggle("is-active")}))}))})),window.addEventListener("beforeunload",this.unload),this.reconnect&&this.login(this.user.username)}},T=L,U=(r("1537"),Object(o["a"])(T,S,D,!1,null,null,null)),I=U.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"room-list"},[r("b-menu",[r("b-menu-list",{attrs:{label:"Channels"}},e._l(e.rooms,(function(t){return r("b-menu-item",{key:t.name,attrs:{active:e.activeRoom.id==t.id,label:"# "+t.name},on:{click:function(r){return e.onChange(t)}}})})),1)],1)],1)},N=[];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q={name:"RoomList",computed:A({},Object(v["e"])(["rooms","activeRoom"])),methods:A({},Object(v["b"])(["changeRoom"]),{onChange:function(e){this.changeRoom(e.id)}})},F=q,Y=Object(o["a"])(F,$,N,!1,null,null,null),G=Y.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-list"},[r("p",{staticClass:"is-size-4"},[e._v("Messages")]),r("hr"),r("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{smooth:!0},expression:"{ smooth: true }"}],staticClass:"message-group",attrs:{id:"chat-messages"}},[e._l(e.messages,(function(t,n){return r("b-message",{key:n},[r("p",[e._v(" "+e._s(t.name)+" ")]),r("p",{staticClass:"is-size-7 has-text-info"},[e._v("@"+e._s(t.username))]),r("p",[e._v(" "+e._s(t.text)+" ")]),r("p",{staticClass:"is-size-7 is-pulled-right has-text-grey"},[e._v(" "+e._s(t.date)+" ")])])})),r("div",{staticClass:"user-typing"},[e.userTyping?r("small",{staticClass:"text-muted"},[e._v("@"+e._s(e.userTyping)+" is typing....")]):e._e()])],2)])},V=[];function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q={name:"message-list",computed:K({},Object(v["e"])(["messages","userTyping"]))},W=Q,X=(r("e3b5"),Object(o["a"])(W,J,V,!1,null,null,null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-form"},[r("small",{staticClass:"has-text-info"},[e._v("@"+e._s(e.user.username))]),r("form",{staticStyle:{position:"relative"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("b-loading",{attrs:{"is-full-page":!1,active:e.sending,"can-cancel":!1},on:{"update:active":function(t){e.sending=t}}}),r("b-message",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],attrs:{type:"is-danger"}},[e._v(" "+e._s(e.error)+" ")]),r("b-field",[r("b-input",{attrs:{id:"message-input",type:"textarea",placeholder:"Enter Message",autocomplete:"off",required:""},on:{input:e.isTyping},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),r("b-field",[r("button",{staticClass:"button is-info is-pulled-right",attrs:{type:"submit"}},[e._v(" Send ")])])],1)])},te=[],re=(r("d81d"),r("b0c0"),r("a9e3"),r("726d")),ne=r("c1df"),se=r.n(ne),ae=r("bfa9"),oe={setError:function(e,t){e.error=t},setLoading:function(e,t){e.loading=t},setUser:function(e,t){e.user=t},setReconnect:function(e,t){e.reconnect=t},setActiveRoom:function(e,t){e.activeRoom=t},setRooms:function(e,t){e.rooms=t},setUsers:function(e,t){e.users=t},clearChatRoom:function(e){e.users=[],e.messages=[]},setMessages:function(e,t){e.messages=t},addMessage:function(e,t){e.messages.push(t)},setSending:function(e,t){e.sending=t},setUserTyping:function(e,t){e.userTyping=t},reset:function(e){e.error=null,e.users=[],e.messages=[],e.rooms=[],e.user=null}};function ce(e,t){var r=t.message||t.info.error_description;e("setError",r)}var ie={login:function(e,t){var r=e.commit,n=e.state;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r("setError",""),r("setLoading",!0),e.next=5,Ce.connectUser(t);case 5:return s=e.sent,r("setUser",{username:s.id,name:s.name}),a=s.rooms.map((function(e){return{id:e.id,name:e.name}})),r("setRooms",a),o=n.activeRoom||a[0],r("setActiveRoom",{id:o.id,name:o.name}),e.next=13,Ce.subscribeToRoom(o.id);case 13:return e.abrupt("return",!0);case 16:e.prev=16,e.t0=e["catch"](0),ce(r,e.t0);case 19:return e.prev=19,r("setLoading",!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,16,19,22]])})))()},changeRoom:function(e,t){var r=e.commit;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ce.subscribeToRoom(t);case 3:n=e.sent,s=n.id,a=n.name,r("setActiveRoom",{id:s,name:a}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),ce(r,e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},sendMessage:function(e,t){var r=e.commit;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r("setError",""),r("setSending",!0),e.next=5,Ce.sendMessage(t);case 5:return n=e.sent,e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](0),ce(r,e.t0);case 12:return e.prev=12,r("setSending",!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},logout:function(e){var t=e.commit;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t("reset"),Ce.disconnectUser(),window.localStorage.clear();case 3:case"end":return e.stop()}}),e)})))()}};n["a"].use(v["a"]);var ue=!1,le=new ae["a"]({storage:window.localStorage}),de=new v["a"].Store({state:{loading:!1,sending:!1,error:null,user:[],reconnect:!1,activeRoom:null,rooms:[],users:[],messages:[],userTyping:null},mutations:oe,actions:ie,getters:{hasError:function(e){return!!e.error}},plugins:[le.plugin],strict:ue}),fe="v1:us1:26cdfe3a-325d-4894-9550-9dafd143de94",be="https://us1.pusherplatform.io/services/chatkit_token_provider/v1/26cdfe3a-325d-4894-9550-9dafd143de94/token",pe=Number("10")||10,me=null,je=null;function ve(e){return ge.apply(this,arguments)}function ge(){return ge=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new re["ChatManager"]({instanceLocator:fe,tokenProvider:new re["TokenProvider"]({url:be}),userId:t}),e.next=3,r.connect();case 3:return me=e.sent,e.abrupt("return",me);case 5:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}function he(){var e=je.users.map((function(e){return{username:e.id,name:e.name,presence:e.presence.state}}));de.commit("setUsers",e)}function Oe(e){return ye.apply(this,arguments)}function ye(){return ye=Object(m["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return de.commit("clearChatRoom"),e.next=3,me.subscribeToRoom({roomId:t,messageLimit:pe,hooks:{onMessage:function(e){de.commit("addMessage",{name:e.sender.name,username:e.senderId,text:e.text,date:se()(e.createdAt).format("h:mm:ss a D-MM-YYYY")})},onPresenceChanged:function(){he()},onUserStartedTyping:function(e){de.commit("setUserTyping",e.id)},onUserStoppedTyping:function(){de.commit("setUserTyping",null)}}});case 3:return je=e.sent,he(),e.abrupt("return",je);case 6:case"end":return e.stop()}}),e)}))),ye.apply(this,arguments)}function we(e){return ke.apply(this,arguments)}function ke(){return ke=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,me.sendMessage({text:t,roomId:je.id});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),ke.apply(this,arguments)}function _e(e){me.isTypingIn({roomId:e})}function Pe(){me.disconnect()}var Ce={connectUser:ve,subscribeToRoom:Oe,sendMessage:we,disconnectUser:Pe};function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ee={name:"message-form",data:function(){return{message:""}},computed:Re({},Object(v["e"])(["user","sending","error","activeRoom"]),{},Object(v["c"])(["hasError"])),methods:Re({},Object(v["b"])(["sendMessage"]),{onSubmit:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sendMessage(e.message);case 2:r=t.sent,r&&(e.message="");case 4:case"end":return t.stop()}}),t)})))()},isTyping:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_e(e.activeRoom.id);case 2:case"end":return t.stop()}}),t)})))()}})},Se=Ee,De=Object(o["a"])(Se,ee,te,!1,null,null,null),Me=De.exports,ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-list"},[r("b-menu",[r("b-menu-list",{attrs:{label:"Members"}},e._l(e.users,(function(t){return r("b-menu-item",{key:t.name},[r("template",{slot:"label"},[r("div",[r("span",[e._v(" "+e._s(t.name)+" ")]),t.presence?r("span",{staticClass:"tag is-rounded",class:e.statusColor(t.presence)},[e._v(" "+e._s(t.presence)+" ")]):e._e()])])],2)})),1)],1)],1)},Le=[];function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ie={name:"user-list",computed:Ue({},Object(v["e"])(["loading","users"])),methods:{statusColor:function(e){return"online"===e?"is-success":"is-warning"}}},$e=Ie,Ne=Object(o["a"])($e,ze,Le,!1,null,null,null),Be=Ne.exports;function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){Object(j["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Fe={name:"Chat",components:{ChatNavBar:I,RoomList:G,UserList:Be,MessageList:Z,MessageForm:Me},computed:qe({},Object(v["e"])(["loading"]))},Ye=Fe,Ge=Object(o["a"])(Ye,R,E,!1,null,null,null),Je=Ge.exports;n["a"].use(l["a"]);var Ve=[{path:"/",name:"login",component:x},{path:"/chat",name:"chat",component:Je}],He=new l["a"]({mode:"hash",base:"/day-break/",routes:Ve}),Ke=He,Qe=r("123d"),We=r.n(Qe),Xe=r("289d");r("5abe");n["a"].use(Xe["a"]),n["a"].use(We.a),n["a"].config.productionTip=!1;var Ze="The .native modifier for v-on is onlyvalid on components but it was used on <a>.";n["a"].config.warnHandler=function(e){e===Ze&&(e=null)},new n["a"]({router:Ke,store:de,render:function(e){return e(u)}}).$mount("#app")},"59fc":function(e,t,r){},"6eda":function(e,t,r){},e3b5:function(e,t,r){"use strict";var n=r("59fc"),s=r.n(n);s.a}});
//# sourceMappingURL=app.359fe3e7.js.map