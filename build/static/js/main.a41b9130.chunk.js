(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),l=t(2),o=t(3),m=t.n(o),i="/api/persons",f=function(){return m.a.get(i).then((function(e){return e.data}))},s=function(e){return m.a.post(i,e).then((function(e){return e.data}))},d=function(e,n){return m.a.put("".concat(i,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(i,"/").concat(e))},h=(t(36),function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"message"},n)}),E=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},v=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})," ",r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(e){return r.a.createElement("div",null,r.a.createElement("strong",null,"Filter by name"),r.a.createElement("input",{value:e.newFilter,onChange:e.handleFilterChange}),r.a.createElement("br",null),r.a.createElement("br",null))},w=function(e){var n=e.persons,t=e.filter,a=e.deletePerson;return""===t?r.a.createElement("div",null,n.map((function(e){return r.a.createElement(g,{key:e.name,name:e.name,number:e.number,remove:function(){return a(e)}})}))):r.a.createElement("div",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(g,{key:e.name,name:e.name,number:e.number,remove:function(){return a(e)}})})))},g=function(e){var n=e.name,t=e.number,a=e.remove;return r.a.createElement("div",null,r.a.createElement("ul",{className:"note"},r.a.createElement("li",null,n," ",t," ",r.a.createElement("button",{onClick:a},"delete"))))},C=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),m=o[0],i=o[1],g=Object(a.useState)(""),C=Object(l.a)(g,2),N=C[0],j=C[1],O=Object(a.useState)(""),S=Object(l.a)(O,2),k=S[0],y=S[1],L=Object(a.useState)(null),F=Object(l.a)(L,2),P=F[0],T=F[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),J=I[0],x=I[1];Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]);var A=function(e,n){T(e),setTimeout((function(){T(null)}),5e3)},B=function(e,n){d(e,n).then((function(a){var r=t.filter((function(n){return n.id!==e}));u(r.concat(n).sort((function(e,n){return e.id>n.id?1:e.id<n.id?-1:0}))),A("Number updated for ".concat(n.name))})).catch((function(e){x("Information ".concat(n.name," has already been deleted from server")),setTimeout((function(){return x(null)}),5e3)}))};return r.a.createElement("div",null,r.a.createElement(E,{message:J}),r.a.createElement(h,{message:P}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{newFilter:k,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement(v,{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}))){var n=t.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}));if(""===n.number){var a={name:n.name,number:N};A("Number added for ".concat(n.name)),B(n.id,a),j(""),i("")}else if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with new one? "))){var r={name:n.name,number:N};B(n.id,r),j(""),i("")}}else{s({name:m,number:N}).then((function(e){u(t.concat(e),i(""),j(""),A("Added ".concat(e.name)))})).catch((function(e){x(e.response.data.error),setTimeout((function(){return x(null)}),7e3)}))}},newName:m,newNumber:N,handleNameChange:function(e){i(e.target.value)},handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(w,{persons:t,filter:k,deletePerson:function(e){window.confirm("Delete ".concat(e.name," ?"))&&b(e.id).then((function(n){var a=t.filter((function(n){return n.id!==e.id}));u(a),A("".concat(e.name," has now been deleted from phonebook"))}))}}))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a41b9130.chunk.js.map