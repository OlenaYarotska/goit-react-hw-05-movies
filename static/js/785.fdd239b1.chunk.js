"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{8785:function(n,t,r){r.r(t),r.d(t,{MoviesPage:function(){return y}});var e,a,o,i=r(5861),c=r(885),u=r(7757),s=r.n(u),p=r(5448),f=r(2791),x=r(1398),l=r(501),d=r(1338),h=r(854),v=r(168),b=r(6444),g=b.ZP.form(e||(e=(0,v.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 30px;\n"]))),m=b.ZP.input(a||(a=(0,v.Z)(["\n    width: 260px;\n    height: 40px;\n    padding-left: 15px;\n    border: 1px solid rgba(32, 33, 32, 0.2);\n    font-size: 18px;\n    &:focus {\n        outline-color: #5c43b9;\n    }\n   &::placeholder {\n    color: #646464;\n    font-size: 16px;\n    font-weight: 500;\n }\n"]))),w=b.ZP.button(o||(o=(0,v.Z)(["\nborder: none;\nborder-radius: 0 4px;\noutline: none;\n    height: 45px;\n    padding: 10px 20px;\n    background-color:  #5c43b9;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: 700;\n    &:hover,\n    &:focus {\n        background-color: #3e288f;\n        color: #fff;\n        transition: opacity 250ms;\n        -webkit-box-shadow: 0px 10px 13px -7px #000000, 3px 8px 24px 3px rgba(0,0,0,0); \n        box-shadow: 0px 10px 13px -7px #000000, 4px 9px 25px 4px rgba(0,0,0,0);\n    }\n"]))),Z=r(184),y=function(){var n=(0,f.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,l.lr)(),o=(0,c.Z)(a,2),u=o[0],v=o[1],b=u.get("query"),y=(0,f.useState)(""),k=(0,c.Z)(y,2),j=k[0],_=k[1],P=(0,f.useState)(!1),S=(0,c.Z)(P,2),q=S[0],z=S[1],C=(0,f.useState)(null),L=(0,c.Z)(C,2),T=L[0],F=L[1];(0,f.useEffect)((function(){if(b){var n=function(){var n=(0,i.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return z(!0),n.prev=1,n.next=4,(0,d.qF)(b);case 4:if(0!==(t=n.sent).length){n.next=7;break}return n.abrupt("return",x.ZP.error("No movies found"));case 7:e(t),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),F(n.t0),x.ZP.error("Something went wrong");case 14:return n.prev=14,z(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,10,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}}),[b]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),""===j.trim())return x.ZP.error("Type your search request");v({query:j}),_("")},children:[(0,Z.jsx)(m,{onChange:function(n){var t=n.currentTarget.value.toLowerCase().trim();_(t)},value:j,type:"text",placeholder:"search movies"}),(0,Z.jsx)(w,{type:"submit",children:"Search"})]}),q&&(0,Z.jsx)(h.a,{}),!T&&r&&(0,Z.jsx)(p.w,{movies:r})]})}},854:function(n,t,r){r.d(t,{a:function(){return o}});var e=r(8748),a=r(184),o=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(e.iT,{ariaLabel:"loading-indicator",height:100,width:100,strokeWidth:5,strokeWidthSecondary:1,color:"black",secondaryColor:"white"})})}},5448:function(n,t,r){r.d(t,{w:function(){return h}});var e,a,o,i,c=r(501),u=r(168),s=r(6444),p=s.ZP.ul(e||(e=(0,u.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -20px;\n    margin-top:-20px;\n"]))),f=s.ZP.li(a||(a=(0,u.Z)(["\nflex-basis: calc(100% / 4 - 20px);\n    margin-left: 20px;\n    margin-top: 20px;\n"]))),x=s.ZP.img(o||(o=(0,u.Z)(["\n    box-shadow: 5px 5px 15px 5px rgba(204, 88, 71, 0.2);\n    transition: all .2s ease-in-out;\n    margin-bottom: 13px;\n    &:hover,\n    &:focus {\n    box-shadow: 5px 5px 10px 2px rgba(8, 8, 8, 0.5);\n    transform: scale(1.05);\n  }\n"]))),l=s.ZP.span(i||(i=(0,u.Z)(["\n    font-size: 20px;\n    font-weight: 500;\n    color: #110101;\n    &:hover {\n        color: #5c43b9;\n    }\n"]))),d=r(184),h=function(n){var t=n.movies;return(0,d.jsx)(p,{children:t.map((function(n){return(0,d.jsx)(f,{children:(0,d.jsxs)(c.OL,{to:"/movies/".concat(n.id),children:[(0,d.jsx)(x,{src:"https://image.tmdb.org/t/p/w500/"+n.poster_path,alt:n.title}),(0,d.jsx)(l,{children:n.title})]})},n.id)}))})}},1338:function(n,t,r){r.d(t,{Df:function(){return s},TP:function(){return p},qF:function(){return f},tx:function(){return l},zv:function(){return x}});var e=r(5861),a=r(7757),o=r.n(a),i=r(4569),c=r.n(i),u="e61d61238bf5efa24cb2963b7b46b5dc";c().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=785.fdd239b1.chunk.js.map