(this.webpackJsonptodo_timer=this.webpackJsonptodo_timer||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),i=(n(10),n(11),n(1)),l=n(4),u=n.n(l),s=function(e){var t,n=(t=e.sec,u.a.utc(1e3*t).format("mm:ss"));return c.a.createElement("div",{style:{fontSize:100}},n)},m=(n(13),function(e){var t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],s=l[1],m=Object(a.useState)(!1),f=Object(i.a)(m,2),E=f[0],b=f[1];return Object(a.useEffect)((function(){c<0&&(alert("FINISHED"),clearInterval(u),r(e),b(!1))}),[c]),Object(a.useEffect)((function(){clearInterval(u)}),[]),[[c,E],[function(){window.confirm("RESET TIMER?")&&(clearInterval(u),r(e),b(!1))},function(){b(!1),clearInterval(u)},function(){E||(clearInterval(u),E||s(setInterval((function(){r((function(e){return e-1}))}),1e3)),b(!0))},function(){r((function(e){return e+60}))},function(){r((function(e){return e-60}))}]]}),f=function(){var e=m(1500),t=Object(i.a)(e,2),n=Object(i.a)(t[0],2),a=n[0],r=(n[1],Object(i.a)(t[1],5)),o=r[0],l=r[1],u=r[2],f=r[3],E=r[4];return c.a.createElement("div",{className:"Timer"},c.a.createElement(s,{sec:a}),c.a.createElement("button",{onClick:u},"start"),c.a.createElement("button",{onClick:l},"stop"),c.a.createElement("button",{onClick:o},"reset"),c.a.createElement("button",{onClick:f},"+1"),c.a.createElement("button",{onClick:E},"-1"))};var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Simple Timer"),c.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.ebf720d1.chunk.js.map