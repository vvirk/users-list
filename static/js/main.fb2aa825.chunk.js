(this["webpackJsonpusers-list"]=this["webpackJsonpusers-list"]||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t),n.d(t,"configureStore",(function(){return _})),n.d(t,"store",(function(){return D}));var r=n(0),a=n.n(r),c=n(8),s=n.n(c),u=n(5),l=n(6),o=n(16),i=n(17),f=n(1),d={allUsers:[],currentPage:1,totalPages:0,userToEdit:null},p=function(e){return e>5?Math.ceil(e/5):1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALL_USERS":var n=t.allUsers,r=p(n.length);return Object(f.a)(Object(f.a)({},e),{},{allUsers:n,totalPages:r,currentPage:r<=5?1:e.currentPage,userToEdit:null});case"ADD_NEW_USER":var a=[].concat(Object(i.a)(e.allUsers),[Object(f.a)({},t.user)]);return Object(f.a)(Object(f.a)({},e),{},{allUsers:a,totalPages:p(a.length)});case"SET_CURRENT_PAGE":return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case"SET_USER_TO_EDIT":return Object(f.a)(Object(f.a)({},e),{},{userToEdit:t.user});case"ADD_EDITED_STATE":var c=e.allUsers.map((function(e){return e.id===t.editedState.id?Object(f.a)({},t.editedState):e}));return Object(f.a)(Object(f.a)({},e),{},{allUsers:c,userToEdit:null});default:return e}},E=(n(29),n(3)),h=n(2),v=n.n(h),b=n(4),g=function(e){return"https://cors-anywhere.herokuapp.com/77.120.241.80:8911/api/"+e},j=function(e){return{type:"ADD_ALL_USERS",allUsers:e}},O=function(e){var t=e.handleClick,n=e.desc,r=e.extraClass,c=e.title;return a.a.createElement("button",{className:"btn ".concat(r),onClick:t,title:c||""},n)},U=function(e){var t=e.usersList,n=e.deleteUser,r=e.setUserToEdit;return a.a.createElement("ul",{className:"users-list"},t.map((function(e){return a.a.createElement("li",{className:"user",key:e.id},a.a.createElement("h3",{className:"user-title"},"".concat(e.name," ").concat(e.surname)),a.a.createElement("p",{className:"user-desc"},e.desc),a.a.createElement("div",null,a.a.createElement(O,{handleClick:function(){window.scrollTo(0,0),r(e)},desc:"\u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",extraClass:"editBtn"}),a.a.createElement(O,{handleClick:function(){return n(e.id)},desc:"\u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438",extraClass:"editBtn"})))})))},T={setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}},x=Object(u.b)((function(e){return{currentPage:e.currentPage,totalPages:e.totalPages}}),T)((function(e){var t=e.totalPages,n=e.currentPage,c=e.setCurrentPage,s=Object(r.useState)(),u=Object(E.a)(s,2),l=u[0],o=u[1];Object(r.useEffect)((function(){o(function(e,t,n){var r=[];if(e<6)for(var a=1;a<=e;a+=1)r.push(a);else if(t<=3){for(var c=1;c<=4;c+=1)r.push(c);r.push(n,e)}else if(t>3&&t<e-2)r.push(1,n,t-1,t,t+1,n,e);else if(t>3&&t>e-3){r.push(1,n);for(var s=e-3;s<=e;s+=1)r.push(s)}return r}(t,n,"..."))}),[n,t]);var i=function(e){return e!==n?c(e):null},f=function(e,t){return e===t?"isActive":null};return a.a.createElement("div",{className:"pagination-wrap"},n>1&&a.a.createElement(O,{extraClass:"paginationBtn",handleClick:function(){return i(n-1)},title:n-1,desc:"\u25c4"}),a.a.createElement("ul",{className:"pagination"},l&&l.map((function(e,t){return a.a.createElement("li",{key:t},"..."===e?a.a.createElement("span",{className:"separator"},e):a.a.createElement(O,{extraClass:"paginationBtn ".concat(f(e,n)),handleClick:function(){return i(e)},desc:e}))}))),n<t&&a.a.createElement(O,{extraClass:"paginationBtn",handleClick:function(){return i(n+1)},title:n+1,desc:"\u25ba"}))})),S=n(10),P=function(e){var t=e.value,n=e.handleChange,r=e.placeholder;return a.a.createElement("input",{className:"inputText",required:!0,type:"text",value:t,onChange:n,placeholder:r})},y=function(e){var t=e.createUser,n=e.userToEdit,c=e.editUser,s=e.showUserForm,u={name:"",surname:"",desc:""},l=Object(r.useState)(n||u),o=Object(E.a)(l,2),i=o[0],d=o[1],p=i.name,m=i.surname,h=i.desc,g=function(e){return function(t){d(Object(f.a)(Object(f.a)({},i),{},Object(S.a)({},e,t.target.value)))}},j=function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p&&m&&h)){e.next=12;break}if(!n){e.next=7;break}return e.next=4,c(i);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t(i);case 9:e.t0=e.sent;case 10:e.t0&&(d(u),s(!1));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j()}},a.a.createElement(P,{value:p,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",handleChange:g("name")}),a.a.createElement(P,{value:m,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",handleChange:g("surname")}),a.a.createElement(P,{value:h,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",handleChange:g("desc")}),a.a.createElement("input",{className:"btn btnSubmit",type:"submit",placeholder:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}))},C={getAllUsers:function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(g("users"));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t(j(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},setUserToEdit:function(e){return{type:"SET_USER_TO_EDIT",user:e}},createUser:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(g("users"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,n({type:"ADD_NEW_USER",user:a}),t.abrupt("return",!0);case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},editUser:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(g("user/".concat(e.id)),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,n({type:"ADD_EDITED_STATE",editedState:a}),t.abrupt("return",!0);case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},deleteUser:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(g("user/".concat(e)),{method:"DELETE",body:e,headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,n(j(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}},k=Object(u.b)((function(e){return{allUsers:e.allUsers,currentPage:e.currentPage,totalPages:e.totalPages,userToEdit:e.userToEdit}}),C)((function(e){var t=e.getAllUsers,n=e.allUsers,c=e.currentPage,s=e.totalPages,u=e.userToEdit,l=e.setUserToEdit,o=e.createUser,i=e.editUser,f=e.deleteUser,d=Object(r.useState)(),p=Object(E.a)(d,2),m=p[0],h=p[1],v=Object(r.useState)(!1),b=Object(E.a)(v,2),g=b[0],j=b[1];return Object(r.useEffect)((function(){t()}),[t]),Object(r.useEffect)((function(){j(!!u)}),[u]),Object(r.useEffect)((function(){n&&function(){if(1!==c){var e=5*(c-1);h(n.slice(e,e+5))}else h(n.slice(0,5))}()}),[n,s,c]),a.a.createElement("div",{className:"users"},a.a.createElement(O,{handleClick:function(){l(null),j(!g)},desc:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0432\u0430"}),g&&a.a.createElement(y,{userToEdit:u,showUserForm:j,createUser:o,editUser:i}),m&&a.a.createElement(U,{usersList:m,deleteUser:f,setUserToEdit:l}),s>1&&a.a.createElement(x,null))})),w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"inner"},a.a.createElement("div",{className:"content"},a.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(){return Object(l.c)(m,d,Object(l.a)(o.a))}var D=_();s.a.render(a.a.createElement(u.a,{store:D},a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.fb2aa825.chunk.js.map