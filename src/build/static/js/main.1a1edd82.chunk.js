(this["webpackJsonpfull-stack"]=this["webpackJsonpfull-stack"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);n(23);var c=n(1),r=n.n(c),s=n(17),i=n.n(s),a=(n(28),n(18)),o=n(19),j=n(22),l=n(21),u=(n(29),n(0)),b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" Welcome to my page!"}),Object(u.jsx)("p",{children:"Hello, welcome, THis is my new webpage that i bulit for the purpose of my study"})]})},h=n(8),d=n(2),p=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" About me!"}),Object(u.jsx)("p",{children:"Hello, welcome, THis is my new webpage that i bulit for the purpose of my study"})]})},O=[{name:"apple",title:"Apple",content:["Apple is a good fruit"]},{name:"tomato",title:"Tomato",content:["Tomato is a vegetable and fruit"]},{name:"brinjal",title:"Brinjal",content:["Brinjal is a Vegetable"]}],m=function(e){var t=e.articles;return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsxs)(h.b,{className:"atricle-list-item",to:"/article/".concat(e.name),children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("p",{children:[" ",e.content[0].substring(0,5),"..."]})]},t)}))})},x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" Article"}),Object(u.jsx)(m,{articles:O})]})},f=n(7),v=n.n(f),g=n(10),y=n(12),w=function(e){var t=e.comments;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:" Comments : "}),t.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:[" ",e.userName]}),Object(u.jsx)("h4",{children:e.text})]},t)}))]})},A=function(e){var t=e.articleName,n=e.upvotes,c=e.setArticleInfo,r=function(){var e=Object(g.a)(v.a.mark((function e(){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return r()},children:"Upvote"}),Object(u.jsxs)("p",{children:[" This post has been upvoted ",n," times"]})]})},C=function(e){var t=e.articleName,n=e.setArticleInfo,r=Object(c.useState)(""),s=Object(y.a)(r,2),i=s[0],a=s[1],o=Object(c.useState)(""),j=Object(y.a)(o,2),l=j[0],b=j[1],h=function(){var e=Object(g.a)(v.a.mark((function e(){var c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({userName:i,text:l}),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,n(r),a(""),b("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"add-comment-form",children:[Object(u.jsx)("h3",{children:" Add a Comment"}),Object(u.jsxs)("label",{children:["Name:",Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)("label",{children:["Comment:",Object(u.jsx)("textarea",{rows:"4",cols:"50",value:l,onChange:function(e){return b(e.target.value)}})]}),Object(u.jsx)("button",{onClick:function(){return h()},children:" Add Comment "})]})},N=function(e){var t=e.match.params.name,n=O.find((function(e){return e.name===t})),r=Object(c.useState)({upvotes:0,comments:[]}),s=Object(y.a)(r,2),i=s[0],a=s[1];if(Object(c.useEffect)((function(){(function(){var e=Object(g.a)(v.a.mark((function e(){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return Object(u.jsx)("h1",{children:" No Article!!!"});var o=O.filter((function(e){return e.name!==t}));return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[" ",n.title," "]}),Object(u.jsx)(A,{articleName:t,upvotes:i.upvotes,setArticleInfo:a}),n.content.map((function(e,t){return Object(u.jsx)("p",{children:e},t)})),Object(u.jsx)(w,{comments:i.comments}),Object(u.jsx)(C,{articleName:t,setArticleInfo:a}),Object(u.jsx)("h2",{children:" Other Related Articles"}),Object(u.jsx)(m,{articles:o})]})},k=function(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/",children:" Home "})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/about",children:" About "})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/articlelist",children:" Articles "})})]})})},T=function(){return Object(u.jsx)("h1",{children:" 404!  Page not found!!"})},F=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)(h.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{id:"page-body",children:[Object(u.jsx)(k,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",component:b,exact:!0}),Object(u.jsx)(d.a,{path:"/about",component:p}),Object(u.jsx)(d.a,{path:"/articlelist",component:x}),Object(u.jsx)(d.a,{path:"/article/:name",component:N}),Object(u.jsx)(d.a,{component:T})]})]})})})}}]),n}(c.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.1a1edd82.chunk.js.map