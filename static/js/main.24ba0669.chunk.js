(this.webpackJsonpsolitaria=this.webpackJsonpsolitaria||[]).push([[0],{38:function(e,r,t){e.exports={square:"Square_square__1x4Sp",block:"Square_block__1_Zjb",ball:"Square_ball__22ruA",selected:"Square_selected__2h2I_"}},55:function(e,r,t){e.exports={game:"Game_game__1VLAV","game-grid":"Game_game-grid__3Y1JZ"}},70:function(e,r,t){},71:function(e,r,t){},81:function(e,r,t){"use strict";t.r(r);var n=t(0),c=t.n(n),i=t(57),a=t.n(i),o=(t(70),t(71),t(40)),l=t(6),u=t(3),s=function(e){e.history;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"React \u7fd2\u4f5c"}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/solitaria",children:"\u30da\u30b0\u30bd\u30ea\u30c6\u30a3\u30a2"})})})]})},j=t(8),f=t(10),b=t(54),d=t(38),h=t.n(d),v=function(e){var r=[];1==e.value&&r.push(h.a.ball),e.selected&&r.push(h.a.selected);var t=[h.a.square];return e.value<0&&t.push(h.a.block),Object(u.jsx)("div",{className:t.join(" "),onClick:e.onClick,children:Object(u.jsx)("div",{className:r.join(" ")})})},O=function(e){for(var r=[],t=function(t){for(var c=function(c){var i=Boolean(e.selectedPos&&e.selectedPos[0]==t&&e.selectedPos[1]==c),a={row:t,col:c,selected:i,value:e.grid[t][c],onClick:function(){e.onClick(t,c)}};r.push(Object(n.createElement)(v,Object(b.a)(Object(b.a)({},a),{},{key:7*t+c})))},i=0;i<7;i++)c(i)},c=0;c<7;c++)t(c);return Object(u.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 80px)",gridTemplateRows:"repeat(7, 80px)"},children:r})},x=33,g=[0,1,0,-1],p=[1,0,-1,0],m=Array.from(new Array(7),(function(){return new Array(7).fill(0)}));function k(e,r){return m[e][r]}!function(){for(var e=0,r=0;r<2;r++)for(var t=2;t<5;t++)m[r][t]=e,e++;for(var n=2;n<5;n++)for(var c=0;c<7;c++)m[n][c]=e++;for(var i=5;i<7;i++)for(var a=2;a<5;a++)m[i][a]=e,e++}();var B=function(e,r,t,n){if(1!=e[r][t])return!1;for(var c=0;c<2;c++){var i=r+p[n]*(c+1),a=t+g[n]*(c+1);if(i<0||i>=7||a<0||a>=7)return!1;if(-1==e[i][a])return!1;if(e[i][a]==c)return!1}return!0},_=function(e,r,t,n){for(var c=-1,i=Math.sign(n-r),a=Math.sign(t-e),o=0;o<4;o++)if(p[o]==a&&g[o]==i){c=o;break}return c};function y(e,r,t,n){for(var c=0;c<2;c++){var i=t+g[n]*(c+1);e[r+p[n]*(c+1)][i]=c}return e[r][t]=0,e}var I=function(e){if(e<6)return[Math.floor(e/3),Math.floor(e%3)+2];if(e>=27){var r=e-27;return[Math.floor(r/3)+5,Math.floor(r%3)+2]}return e-=6,[Math.floor(e/7)+2,Math.floor(e%7)]},w=function(e){for(var r=0,t=0;t<x;t++){var n=I(t),c=Object(j.a)(n,2),i=c[0],a=c[1];if(1==e[i][a]){for(var o=0;o<4;o++)if(B(e,i,a,o))return 0;r++}}return r<=1?1:-1};function C(e){for(var r=BigInt(0),t=BigInt(1),n=0;n<x;n++)if(r>>BigInt(n)&t){var c=I(n),i=Object(j.a)(c,2),a=i[0],o=i[1],l=a;a=6-o,o=l,r|=t<<BigInt(k(a,o))}return r}function S(e){for(var r=BigInt(0),t=BigInt(1),n=0;n<x;n++)if(r>>BigInt(n)&t){var c=I(n),i=Object(j.a)(c,2),a=i[0],o=i[1];o=6-o,r|=t<<BigInt(k(a,o))}return r}function E(e,r,t,n){for(var c=0;c<2;c++){var i=t+g[n]*(c+1);e[r+p[n]*(c+1)][i]=(c+1)%2}e[r][t]=1}function A(e,r){var t=function(e){for(var r=BigInt(0),t=BigInt(1),n=0;n<x;n++){var c=I(n),i=Object(j.a)(c,2),a=i[0],o=i[1];1==e[a][o]&&(r|=t<<BigInt(n))}return r}(e);if(r.has(t))return null;if(r.size>=4e6)return null;var n=w(e);if(1==n)return[];if(-1==n)return null;for(var c=0;c<x;c++)for(var i=I(c),a=Object(j.a)(i,2),o=a[0],l=a[1],u=0;u<4;u++)if(B(e,o,l,u)){y(e,o,l,u);var s=A(e,r);if(null!==s)return s.push(e.map((function(e){return Object(f.a)(e)}))),E(e,o,l,u),s;E(e,o,l,u)}for(var b=t,d=0;d<4;d++)r.add(b),r.add(S()),b=C();return null}var M=t(114),q=t(112),P=t(113),N=t(55),F=t.n(N),T=t(116),J=t(28),L=t(108),D=t(110),G=function(){for(var e=["##111##","##111##","1111111","1110111","1111111","##111##","##111##"],r=[],t=0;t<e.length;t++){for(var n=[],c=0;c<e.length;c++)"#"==e[t][c]?n.push(-1):n.push(Number(e[t][c]));r.push(n)}return r},R=function(){var e=Object(n.useState)(null),r=Object(j.a)(e,2),t=r[0],c=r[1],i=Object(n.useState)([G()]),a=Object(j.a)(i,2),o=a[0],l=a[1],s=Object(n.useState)(0),b=Object(j.a)(s,2),d=b[0],h=b[1],v=Object(n.useState)(!1),x=Object(j.a)(v,2),m=x[0],k=x[1],I=function(){return o[d]};Object(n.useEffect)((function(){var e=setInterval((function(){m&&(d+1<o.length?h((function(e){return e+1})):k((function(){return!1})))}),300);return function(){return clearInterval(e)}}));return Object(u.jsxs)("div",{className:F.a.game,children:[Object(u.jsx)("div",{className:F.a["game-grid"],children:Object(u.jsx)(O,{grid:I(),selectedPos:t,onClick:function(e,r){var n=I();if(0==w(n))if(t){if(function(e,r,t,n,c){var i=_(r,t,n,c);return!(i<0)&&t+2*g[i]==c&&r+2*p[i]==n&&B(e,r,t,i)}(I(),t[0],t[1],e,r)){var i=function(e){return e.map((function(e){return Object(f.a)(e)}))}(I());!function(e,r,t,n,c){y(e,r,t,_(r,t,n,c))}(i,t[0],t[1],e,r),l([].concat(Object(f.a)(o.slice(0,d+1)),[i])),h(d+1)}c(null)}else 1==n[e][r]&&c([e,r])}})}),Object(u.jsx)("div",{style:{marginBottom:"10px"},children:function(){var e,r=w(I()),t="inherit";0==r?e="\u3042\u3068 ".concat(32-d-1," \u30b3"):1==r?(e="\u6210\u529f",t=J.a.A400):(e="\u5931\u6557",t=Object(L.a)().palette.error.main);return Object(u.jsx)("div",{style:{color:t},children:Object(u.jsx)(D.a,{variant:"h5",color:"inherit",align:"center",children:e})})}()}),Object(u.jsxs)(T.a,{spacing:2,direction:"row",children:[Object(u.jsx)(M.a,{"aria-label":"back",color:"primary",onClick:function(){d<=0||h(d-1)},children:Object(u.jsx)(q.a,{})}),Object(u.jsx)(M.a,{"aria-label":"forward",color:"primary",onClick:function(){d+1>=o.length||h(d+1)},children:Object(u.jsx)(P.a,{})}),Object(u.jsx)(M.a,{variant:"outlined",color:"primary",onClick:function(){h(0),l([G()])},children:"\u30ea\u30bb\u30c3\u30c8"}),Object(u.jsx)(M.a,{variant:"outlined",color:"primary",onClick:function(){var e=function(e){var r=A(e=e.map((function(e){return Object(f.a)(e)})),new Set);return null!=r?r.reverse():r}(I());e?(l([].concat(Object(f.a)(o.slice(0,d+1)),Object(f.a)(e))),k(!0)):alert("\u3053\u306e\u72b6\u614b\u304b\u3089\u306f\u89e3\u3051\u306a\u3044\u304b\u3001\u6642\u9593\u304c\u304b\u304b\u308b\u305f\u3081\u63a2\u7d22\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f")},children:"\u7d9a\u304d\u3092\u81ea\u52d5\u3067\u89e3\u304f"})]})]})},V=function(e){e.history;return Object(u.jsxs)("div",{style:{width:"800px",margin:"0 auto"},children:[Object(u.jsx)("h1",{children:"\u30da\u30b0\u30bd\u30ea\u30c6\u30a3\u30a2"}),Object(u.jsx)("div",{children:Object(u.jsx)(R,{})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"\u904a\u3073\u65b9"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u76e4\u4e0a\u306b\u99d2\uff08\u30da\u30b0\u307e\u305f\u306f\u30dc\u30fc\u30eb\uff09\u3092\u914d\u7f6e\u3059\u308b\u3002"}),Object(u.jsx)("li",{children:"\u99d2\u304c\u7e26\u6a2a\u306b\u4e26\u3093\u3067\u3044\u3066\u304b\u3064\u305d\u306e\u96a3\u306b\u99d2\u304c\u306a\u3044\u3068\u304d\u3001\u99d2\u306f\u4ed6\u306e\u99d2\u3092\u98db\u3073\u8d8a\u3048\u308b\u3053\u3068\u304c\u51fa\u6765\u308b\u3002"}),Object(u.jsx)("li",{children:"\u98db\u3073\u8d8a\u3048\u3089\u308c\u305f\u99d2\u306f\u76e4\u304b\u3089\u53d6\u308a\u9664\u304f\u3002"}),Object(u.jsx)("li",{children:"\u99d2\u304c1\u3064\u306b\u306a\u3063\u305f\u3089\u6210\u529f\u3002\u4e2d\u592e\u306b1\u3064\u6b8b\u3059\u306e\u304c\u6700\u5584\u3068\u3055\u308c\u308b\u3002"})]}),Object(u.jsx)("a",{href:"https://ja.wikipedia.org/wiki/%E3%83%9A%E3%82%B0%E3%83%BB%E3%82%BD%E3%83%AA%E3%83%86%E3%83%BC%E3%83%AB",children:"https://ja.wikipedia.org/wiki/\u30da\u30b0\u30fb\u30bd\u30ea\u30c6\u30fc\u30eb"}),"\u3088\u308a\u5f15\u7528"]})]})},Z=function(){return Object(u.jsx)(o.a,{basename:"/react_tutorial",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:s}),Object(u.jsx)(l.a,{exact:!0,path:"/solitaria",component:V})]})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,117)).then((function(r){var t=r.getCLS,n=r.getFID,c=r.getFCP,i=r.getLCP,a=r.getTTFB;t(e),n(e),c(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),z()}},[[81,1,2]]]);
//# sourceMappingURL=main.24ba0669.chunk.js.map