(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],m=0,b=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/hamburgerAnimation/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Hamburger")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"nav-animate__header"},[a("div",{staticClass:"nav-animate__hamburger-container",on:{click:this.runAnimation}},[a("div",{staticClass:"nav-animate__hamburger-bar nav-animate__hamburger-bar--top",class:{"nav-animate__hamburger-bar--top-animated":this.animate,"nav-animate__hamburger-bar--top-close":this.close}}),a("div",{staticClass:"nav-animate__hamburger-bar nav-animate__hamburger-bar--center",class:{"nav-animate__hamburger-bar--center-animated":this.animate,"nav-animate__hamburger-bar--center-close":this.close}}),a("div",{staticClass:"nav-animate__hamburger-bar nav-animate__hamburger-bar--bottom",class:{"nav-animate__hamburger-bar--bottom-animated":this.animate,"nav-animate__hamburger-bar--bottom-close":this.close}})])])},c=[],s={name:"Hamburger",data:function(){return{animate:!1,close:!1}},methods:{runAnimation:function(){this.animate?(this.animate=!this.animate,this.close=!this.close):(this.animate=!this.animate,this.close=!1),console.log("animate: ".concat(this.animate)),console.log("close: ".concat(this.close))}}},u=s,l=(a("68d2"),a("2877")),m=Object(l["a"])(u,o,c,!1,null,null,null),b=m.exports,h={name:"App",components:{Hamburger:b}},p=h,f=Object(l["a"])(p,r,i,!1,null,null,null),d=f.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(d)}}).$mount("#app")},"68d2":function(e,t,a){"use strict";var n=a("c2bc"),r=a.n(n);r.a},c2bc:function(e,t,a){}});
//# sourceMappingURL=app.f527685a.js.map