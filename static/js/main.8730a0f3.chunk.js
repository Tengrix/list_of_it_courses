(this.webpackJsonpcoursetask=this.webpackJsonpcoursetask||[]).push([[0],{15:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__1na2p",paginator:"Paginator_paginator__1BjiY",pageNumber:"Paginator_pageNumber__1dTYK",btn:"Paginator_btn__3qKQI"}},34:function(e,t,n){e.exports={newCourseImg:"SearchImg_newCourseImg__2abK_"}},40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(31),r=n.n(a),s=(n(40),n(11)),o=n(12),u=n(2),l=(n(41),n(9)),j=n(3),d=n(0),b=function(e){var t=e.course,n=e.changePrice,i=e.changeDescription,a=e.changeDate,r=Object(c.useState)(!1),s=Object(u.a)(r,2),o=s[0],l=s[1],j=Object(c.useState)(t.price),b=Object(u.a)(j,2),p=b[0],O=b[1],g=Object(c.useState)(t.description),h=Object(u.a)(g,2),m=h[0],f=h[1],x=Object(c.useState)(t.dateOfBeginning),v=Object(u.a)(x,2),C=v[0],N=v[1];return Object(d.jsxs)("div",{className:"course",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Description:"})," ",o?Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("textarea",{value:m,onChange:function(e){return f(e.currentTarget.value)}})]}):t.description]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Price:"})," ",o?Object(d.jsx)("input",{type:"number",value:p,onChange:function(e){return O(+e.currentTarget.value)}}):p,"$"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Beginning Date:"})," ",o?Object(d.jsx)("input",{type:"text",value:C,onChange:function(e){return N(e.currentTarget.value)}}):C]})]}),Object(d.jsx)("button",{onClick:function(){return l(!o)},children:"edit"}),Object(d.jsx)("button",{onClick:function(){n(p,t.id),i(m,t.id),a(C,t.id),l(!1)},children:"save"})]})},p=function(e){var t=e.courses,n=e.changePrice,c=e.changeDescription,i=e.changeDate,a=Object(j.f)().courseId;return Object(d.jsx)("div",{className:"course",children:t.map((function(e){return Object(d.jsx)("div",{children:e.id===+a&&Object(d.jsx)(b,{course:e,changePrice:n,changeDescription:c,changeDate:i})},e.id)}))})},O=function(e){for(var t=e.courses,n=e.editCourse,i=Object(c.useState)(1),a=Object(u.a)(i,2),r=a[0],s=a[1],o=Math.ceil(t.length/2),j=[],b=1;b<=o;b++)j.push(b);var p=Math.ceil(o/2),O=2*(r-1)+1,g=2*r;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"row",children:t.filter((function(e,t){return t>=O-1&&t<=g-1})).map((function(e){return Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("div",{className:"course",children:Object(d.jsx)(l.b,{to:"/course/".concat(e.id),children:Object(d.jsx)("img",{src:"".concat(e.picOfCourse),alt:""})})}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("b",{children:"Name of course:"}),e.name,Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Course description:"})," ",e.description]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Course price:"})," ",e.price,"$"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Date of beginning:"})," ",e.dateOfBeginning]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return n(e.id)},children:"del"})})]})]},e.id)}))}),Object(d.jsxs)("div",{className:"pagination",children:[r>1&&Object(d.jsx)("button",{onClick:function(){s(r-1)},children:"prev"}),j.map((function(e){return Object(d.jsx)("button",{className:e===r?"pages":"",onClick:function(){return s(e)},children:e},e)})),p>=r&&Object(d.jsx)("button",{onClick:function(){s(r+1)},children:"next"})]})]})},g=function(e){var t=e.courses,n=e.setSortType,c=e.editCourse;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"sort",children:["Sort by: ",Object(d.jsxs)("select",{onChange:function(e){return n(e.target.value)},children:[Object(d.jsx)("option",{value:"price-high",children:"Price(high-low)"}),Object(d.jsx)("option",{value:"price-low",children:"Price(low-high)"}),Object(d.jsx)("option",{value:"date",children:"Newest"})]})]}),Object(d.jsx)(O,{editCourse:c,courses:t})]})},h=n(34),m=n.n(h),f=function(e){var t=e.images,n=e.getPic;return Object(d.jsx)("span",{children:Object(d.jsx)("img",{className:m.a.newCourseImg,onClick:function(){return n(t.id)},src:t.urls.small,alt:""})})},x=n(15),v=n.n(x),C=function(e){for(var t=e.pageCount,n=e.currentPage,i=e.portionSize,a=e.onPageChanged,r=e.pic,s=e.title,o=e.totalCountOfImg,l=Math.ceil(o/t),j=[],b=1;b<=l;b++)j.push(b);var p=Math.ceil(l/i),O=Object(c.useState)(1),g=Object(u.a)(O,2),h=g[0],m=g[1],f=(h-1)*i+1,x=h*i;return Object(d.jsx)("div",{className:v.a.paginator,children:Object(d.jsxs)("div",{children:[h>1&&Object(d.jsx)("button",{className:v.a.btn,onClick:function(){return m(h-1)},children:" PREV"}),j.filter((function(e){return e>=f&&e<=x})).map((function(e){return Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:function(){return a("".concat(r),s,e,t)},className:n===e?v.a.selectedPage:"",children:e})},e)})),p>h&&Object(d.jsx)("button",{className:v.a.btn,onClick:function(){return m(h+1)},children:"NEXT"})]})})},N=function(e){var t=e.addCourse,n=e.uploadPic,i=e.find,a=e.totalCountOfImg,r=e.listOfImg,s=e.getPic,o=Object(c.useState)(""),l=Object(u.a)(o,2),j=l[0],b=l[1],p=Object(c.useState)(""),O=Object(u.a)(p,2),g=O[0],h=O[1],m=Object(c.useState)(0),x=Object(u.a)(m,2),v=x[0],N=x[1],S=Object(c.useState)(""),_=Object(u.a)(S,2),w=_[0],P=_[1],k=Object(c.useState)(""),y=Object(u.a)(k,2),T=y[0],D=y[1],B=Object(c.useState)(1),I=Object(u.a)(B,2),M=I[0],z=I[1],J=Object(c.useState)(),E=Object(u.a)(J,2),G=E[0];E[1];return Object(d.jsxs)("div",{className:"newCourse",children:[Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-sm",children:"Course name"}),Object(d.jsx)("input",{defaultValue:g,onChange:function(e){return h(e.currentTarget.value)},type:"text",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",children:"Course price"}),Object(d.jsx)("input",{defaultValue:v,onChange:function(e){return N(+e.currentTarget.value)},type:"text",className:"form-control","aria-label":"Dollar amount (with dot and two decimal places)"}),Object(d.jsx)("span",{className:"input-group-text",children:"$"}),Object(d.jsx)("span",{className:"input-group-text",children:"0.00"})]}),Object(d.jsxs)("div",{className:"input-group input-group-sm mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-sm",children:"Course date"}),Object(d.jsx)("input",{defaultValue:T,onChange:function(e){return D(e.currentTarget.value)},type:"text",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"input-group-text",children:"Course description"})}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsx)("textarea",{className:"form-control","aria-label":"With textarea",defaultValue:w,onChange:function(e){return P(e.currentTarget.value)}})}),Object(d.jsx)("div",{children:"Search image"}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("input",{onChange:function(e){return b(e.currentTarget.value)},type:"text",className:"form-control",placeholder:"Course image","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),Object(d.jsx)("button",{disabled:""===j,onClick:function(){return n("".concat(G),j,M,6)},className:"btn btn-outline-secondary",type:"button",id:"button-addon2",children:"Get Images"})]}),Object(d.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t(g,v,T,w,"".concat(G))},children:"add"}),Object(d.jsx)("div",{children:"Chose the course image below:"}),i?Object(d.jsx)(C,{currentPage:M,pageCount:6,onPageChanged:function(e,t,c,i){z(c),n(e,t,c,i)},totalCountOfImg:a,portionSize:5,title:j,pic:G}):"",r.map((function(e){return Object(d.jsx)("span",{children:Object(d.jsx)(f,{getPic:s,images:e})},e.id)}))]})},S=(n(48),n(35)),_=n.n(S);var w=function(){var e=Object(c.useState)([{id:1,name:"JS",description:"React",price:100,dateOfBeginning:"2021-06-28",picOfCourse:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"},{id:2,name:"Python",description:"MachineLearning",price:50,dateOfBeginning:"2020-05-8",picOfCourse:"https://roboschool.pro/content/uploads/2020/06/python-940x940.png"},{id:3,name:"HTML",description:"Tags",price:80,dateOfBeginning:"2021-06-2",picOfCourse:"https://media.proglib.io/wp-uploads/2019/03/html-output.jpg"},{id:4,name:"CSS",description:"Styles",price:105,dateOfBeginning:"2021-06-11",picOfCourse:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"},{id:5,name:"TS",description:"Types",price:101,dateOfBeginning:"2020-10-5",picOfCourse:"https://res.cloudinary.com/practicaldev/image/fetch/s--6McQQU7i--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j4hwcf7lntmqyha7ras5.png"},{id:6,name:"Java",description:"LearnJava",price:1e3,dateOfBeginning:"2021-10-17",picOfCourse:"https://www.comnews.ru/sites/default/files2019/articles/2021-02/Java.jpg"}]),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)("price-high"),r=Object(u.a)(a,2),b=r[0],O=r[1],h=Object(c.useState)(!1),m=Object(u.a)(h,2),f=m[0],x=m[1],v=Object(c.useState)(1),C=Object(u.a)(v,2),S=C[0],w=C[1],P=Object(c.useState)([]),k=Object(u.a)(P,2),y=k[0],T=k[1];return Object(c.useEffect)((function(){!function(e){switch(b){case"price-high":i(Object(o.a)(n).sort((function(e,t){return e.price>t.price?-1:1})));break;case"price-low":i(Object(o.a)(n).sort((function(e,t){return e.price<t.price?-1:1})));break;case"date":i(Object(o.a)(n).sort((function(e,t){return+new Date(e.dateOfBeginning)-+new Date(t.dateOfBeginning)})));break;default:;}}()}),[b]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsxs)("div",{className:"imgPlace",children:[Object(d.jsx)("img",{className:"img-fluid",src:"https://media.foxford.ru/wp-content/uploads/2020/02/%D0%B8%D1%82%D0%B2%D1%83%D0%B7.jpg",alt:""}),Object(d.jsx)("h1",{style:{color:"black"},className:"display-4",children:"IT-Courses"}),Object(d.jsxs)("span",{children:[Object(d.jsx)("nav",{children:Object(d.jsx)(l.b,{to:"/home",className:"mainMenu",children:"Home"})}),Object(d.jsx)("nav",{children:Object(d.jsx)(l.b,{to:"/new-course",className:"mainMenu",children:"New Course"})})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/home",children:Object(d.jsx)(g,{setSortType:O,courses:n,editCourse:function(e){var t=Object(o.a)(n).filter((function(t){return t.id!==e}));i(t)}})}),Object(d.jsx)(j.a,{path:"/course/:courseId",children:Object(d.jsx)(p,{changePrice:function(e,t){var c=n.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),{},{price:e}):n}));i(c)},changeDate:function(e,t){var c=n.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),{},{dateOfBeginning:e}):n}));i(c)},courses:n,changeDescription:function(e,t){var c=n.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),{},{description:e}):n}));i(c)}})}),Object(d.jsx)(j.a,{path:"/new-course",children:Object(d.jsx)(N,{uploadPic:function(e,t,n,c){e&&((new FormData).append("image",e),_.a.get("https://api.unsplash.com/search/photos?page=".concat(n,"&per_page=").concat(c,"&query=").concat(t,"&client_id=").concat("TjmARGkpjfymTRCvG-FSEMuhTEz4V6_oSpITSpqmmEg")).then((function(e){T(e.data.results),w(e.data.total)})).catch((function(e){return console.log(e)})));x(!0)},addCourse:function(e,t,c,a,r){var s={id:Math.random(),name:e,price:t,picOfCourse:r,dateOfBeginning:c,description:a};i([].concat(Object(o.a)(n),[s]))},find:f,totalCountOfImg:S,listOfImg:y,getPic:function(e){var t=y.filter((function(t){return t.id===e}));T(t),setPic(t[0].urls.full)}})})]})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),P()}},[[67,1,2]]]);
//# sourceMappingURL=main.8730a0f3.chunk.js.map