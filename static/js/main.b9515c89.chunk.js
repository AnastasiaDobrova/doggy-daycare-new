(this["webpackJsonpdoggy-daycare"]=this["webpackJsonpdoggy-daycare"]||[]).push([[0],{24:function(e,s,t){},25:function(e,s,t){},26:function(e,s,t){},33:function(e,s,t){},35:function(e,s,t){},36:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),n=t(17),r=t.n(n),i=(t(24),t(25),t(26),t(7)),o=t(0);var j=function(){return Object(o.jsx)("div",{className:"Welcome",children:Object(o.jsxs)("main",{children:[Object(o.jsxs)("p",{className:"welcomeText",children:["Welcome to the Doggy Daycare!",Object(o.jsx)("br",{})," We help you keep track of your dogs."]}),Object(o.jsx)(i.b,{className:"Paw",to:"/overview",children:Object(o.jsx)("img",{src:"./images/paw.png"})})]})})},l=t(10),m=(t(33),t(15)),b=t.n(m),d=t(19),h=function(e){var s=Object(c.useState)([]),t=Object(l.a)(s,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){function s(){return(s=Object(d.a)(b.a.mark((function s(){var t,c,a,r;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(e);case 2:return t=s.sent,s.next=5,t.json();case 5:return c=s.sent,s.next=8,JSON.stringify(c);case 8:a=s.sent,localStorage.setItem("data",a),r=localStorage.getItem("data"),n(JSON.parse(r));case 12:case"end":return s.stop()}}),s)})))).apply(this,arguments)}!function(){s.apply(this,arguments)}()}),[]),{data:a}};var u=function(){var e=Object(c.useState)(""),s=Object(l.a)(e,2),t=s[0],a=s[1],n=h("https://api.jsonbin.io/b/6087ca445210f622be3ae6a4/1").data;return Object(o.jsxs)("div",{className:"Dogs",children:[Object(o.jsx)("input",{type:"search",placeholder:"Search here...",onChange:function(e){a(e.target.value)}}),Object(o.jsx)("main",{children:n.filter((function(e){return""===t||e.name.toLowerCase().includes(t.toLowerCase())||e.owner.name.toLowerCase().includes(t.toLowerCase())||e.owner.lastName.toLowerCase().includes(t.toLowerCase())?e:null})).map((function(e,s){return Object(o.jsxs)(i.b,{className:"DogItem",to:"/dog/"+e.chipNumber,children:[Object(o.jsx)("img",{src:e.img,alt:"dog"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"DogInfo",children:[Object(o.jsx)("p",{className:"name",children:e.name}),Object(o.jsx)("img",{className:"sex",src:"female"===e.sex?"/images/female.png":"/images/male.png",alt:"sex"})]}),Object(o.jsxs)("p",{children:["(",e.owner.name," ",e.owner.lastName,")"]})]})]},s)}))})]})},p=(t(35),t(2)),x=function(e){var s=Object(p.f)().chipNumber,t=h("https://api.jsonbin.io/b/6087ca445210f622be3ae6a4/1").data;return Object(o.jsx)("div",{className:"Dog",children:t.filter((function(e){return e.chipNumber.toLowerCase()===s.toLowerCase()?e:null})).map((function(e,s){return Object(o.jsxs)("div",{className:"Container",children:[Object(o.jsx)("img",{className:"Photo",src:e.img,alt:"dog"}),Object(o.jsxs)("div",{className:"Info",children:[Object(o.jsxs)("div",{className:"MyDog",children:[Object(o.jsx)("p",{className:"Name",children:e.name}),Object(o.jsx)("img",{className:"Sex",src:"female"===e.sex?"/images/female.png":"/images/male.png",alt:"sex"}),Object(o.jsxs)("h",{className:"Age",children:[e.age," y."]})]}),Object(o.jsx)("p",{className:"Breed",children:e.breed}),Object(o.jsxs)("p",{className:"Chip",children:["Chip number: ",e.chipNumber]}),Object(o.jsx)("p",{className:"Present",children:!0===e.present?"Present now":"Not present now"}),Object(o.jsxs)("div",{className:"Owner",children:[Object(o.jsxs)("p",{className:"OwnerName",children:[e.owner.name," ",e.owner.lastName]}),Object(o.jsxs)("div",{className:"Phone",children:[Object(o.jsx)("a",{href:"tel:"+e.owner.phoneNumber,children:Object(o.jsx)("img",{className:"Call",src:"/images/phone.png",alt:"phone"})}),Object(o.jsx)("p",{className:"PhoneNum",children:e.owner.phoneNumber})]})]})]})]})}))})};var O=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{id:"header1",children:Object(o.jsx)(i.b,{className:"Logo",to:"/",children:Object(o.jsx)("img",{src:"./images/paw.png"})})}),Object(o.jsx)("main",{children:Object(o.jsxs)(p.c,{children:[Object(o.jsxs)(p.a,{path:"/",exact:!0,children:[" ",Object(o.jsx)(j,{})]}),Object(o.jsxs)(p.a,{path:"/overview",children:[" ",Object(o.jsx)(u,{})," "]}),Object(o.jsxs)(p.a,{path:"/dog/:chipNumber",children:[" ",Object(o.jsx)(x,{})," "]})]})})]})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.b9515c89.chunk.js.map