(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)},placeholder:"Categorias",className:"search"})})},j=n(10),l=n(6),d=n.n(l),b=n(8),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=15&api_key=sTLr5nr0ZEaLHw3URwkLKYeYAybJHpbx"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsx)("div",{className:"card animate__animated animate__fadeIn animate__slow",children:Object(u.jsx)("img",{src:n,alt:t})})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),2500)}))}),[e]),c}(t),c=n.data,r=n.loading;return console.log(c),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),r?Object(u.jsx)("p",{children:"Caricamento..."}):Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"menu-categorias",children:[Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("ul",{className:"list-categorias invisible-movil",children:n.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]}),Object(u.jsx)("div",{className:"contenido",children:n.map((function(e){return Object(u.jsx)(f,{category:e},e)}))})]})},O=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"animate__animated animate__lightSpeedInLeft animate__slow",children:"GifExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(h,{})]})};n(17);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2fc2acbd.chunk.js.map