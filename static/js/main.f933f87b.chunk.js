(this.webpackJsonptodo_timer=this.webpackJsonptodo_timer||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),u=(n(14),n(15),n(2)),i=n(5),l=n.n(i),s=function(e){var t,n=(t=e.sec,l.a.utc(1e3*t).format("mm:ss"));return r.a.createElement("div",{style:{fontSize:100}},n)},m=(n(17),function(e){var t=r.a.useState(new Audio(e)),n=Object(u.a)(t,1)[0],a=r.a.useState(!1),c=Object(u.a)(a,2)[1],o=function(){return c((function(e){return!e}))};r.a.useEffect((function(){return n.addEventListener("play",o),n.addEventListener("pause",o),n.addEventListener("ended",o),n.addEventListener("timeupdate",o),function(){n.removeEventListener("play",o),n.removeEventListener("pause",o),n.removeEventListener("ended",o),n.addEventListener("timeupdate",o)}}),[]);return[n,!n.paused,n.currentTime,function(){return n.play()},function(){return n.pause()},function(e){return n.currentTime+=e}]}),f=n(6),d=function(e){var t=m(v),n=Object(u.a)(t,6),r=n[0],c=(n[1],n[2],n[3],n[4],n[5],Object(a.useState)(!0)),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(a.useState)(e),f=Object(u.a)(s,2),d=f[0],E=f[1],p=Object(a.useState)(0),b=Object(u.a)(p,2),j=b[0],O=b[1],h=Object(a.useState)(""),y=Object(u.a)(h,2),S=y[0],k=y[1],w=Object(a.useState)(!1),L=Object(u.a)(w,2),g=L[0],I=L[1];return Object(a.useEffect)((function(){d<0&&(r.play(),O((function(e){return e+1})),i?E(j%2===1?e:300):(clearInterval(S),E(j%2===1?e:300),I(!1)))}),[d,S]),Object(a.useEffect)((function(){clearInterval(S)}),[]),[[d,g,j,i],[function(){clearInterval(S),E(e),I(!1)},function(){I(!1),clearInterval(S)},function(){r.play(),g||(clearInterval(S),g||k(setInterval((function(){E((function(e){return e-1}))}),1e3)),I(!0))},function(){E((function(e){return e+60}))},function(){E((function(e){return e-60}))},function(){l((function(e){return!e}))},function(){r.play()}]]},v="https://on-jin.com/sound/ag/s74f90/se/e/ani_ge_suzume01.mp3",E=function(){var e=d(1500),t=Object(u.a)(e,2),n=Object(u.a)(t[0],4),a=n[0],c=n[1],o=n[2],i=n[3],l=Object(u.a)(t[1],7),m=l[0],v=l[1],E=l[2],p=l[3],b=l[4],j=l[5];l[6];return r.a.createElement("div",{className:"Timer"},r.a.createElement(f.a,null,r.a.createElement("title",null,"Timer")),r.a.createElement(s,{sec:a}),r.a.createElement("button",{onClick:c?v:E},c?"stop":"start"),r.a.createElement("button",{onClick:m},"reset"),r.a.createElement("button",{onClick:p},"+1"),r.a.createElement("button",{onClick:b},"-1"),r.a.createElement("button",{onClick:j},i?"auto":"manual"),r.a.createElement("p",null,Math.floor(o/2)," cycle"))};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Simple Timer"),r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.f933f87b.chunk.js.map