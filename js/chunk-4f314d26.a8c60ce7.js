(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f314d26"],{1344:function(e,t,c){"use strict";t["a"]=function(e){return{all:e=e||new Map,on:function(t,c){var a=e.get(t);a?a.push(c):e.set(t,[c])},off:function(t,c){var a=e.get(t);a&&(c?a.splice(a.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var a=e.get(t);a&&a.slice().map((function(e){e(c)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,c)}))}}}},"1dde":function(e,t,c){var a=c("d039"),n=c("b622"),r=c("2d00"),o=n("species");e.exports=function(e){return r>=51||!a((function(){var t=[],c=t.constructor={};return c[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"29f3":function(e,t,c){},"58bf":function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),n=function(e){return Object(a["pushScopeId"])("data-v-948bf552"),e=e(),Object(a["popScopeId"])(),e},r={class:"container"},o={class:"checkout_page"},l={class:"checkout-contain"},s=n((function(){return Object(a["createElementVNode"])("div",{class:"step-panel d-flex"},[Object(a["createElementVNode"])("div",{class:"step"},"確認購物車內容"),Object(a["createElementVNode"])("div",{class:"step active"},"填寫訂購資料"),Object(a["createElementVNode"])("div",{class:"step"},"購物完成!")],-1)})),d={class:"row"},i={class:"col-md-6 orderlist"},u={id:"checkoutList",class:"w-100"},m=n((function(){return Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("th",null,"愛園名稱"),Object(a["createElementVNode"])("th",null,"商品"),Object(a["createElementVNode"])("th",null,"數量"),Object(a["createElementVNode"])("th",null,"小計")],-1)})),b={width:"150"},f={class:"cart-title"},O={width:"80"},j={class:"cart-title"},p={width:"80"},V={width:"80"},v={class:"my-5 text-end"},N=Object(a["createTextVNode"])(" 小計"),h={class:"mx-3 h5"},E=n((function(){return Object(a["createElementVNode"])("div",{class:"checkImg"},[Object(a["createElementVNode"])("img",{src:"https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwdGhhbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",alt:"狗狗感謝您"})],-1)})),g={class:"col-md-6 customerInfo"},x=n((function(){return Object(a["createElementVNode"])("h6",null,"訂購人資料",-1)})),w={class:"mb-3"},y=n((function(){return Object(a["createElementVNode"])("label",{for:"email",class:"form-label"},[Object(a["createElementVNode"])("small",{class:"text-danger"},"**"),Object(a["createTextVNode"])("Email")],-1)})),k={class:"mb-3"},D=n((function(){return Object(a["createElementVNode"])("label",{for:"name",class:"form-label"},[Object(a["createElementVNode"])("small",{class:"text-danger"},"**"),Object(a["createTextVNode"])("訂購人姓名")],-1)})),S={class:"mb-3"},C=n((function(){return Object(a["createElementVNode"])("label",{for:"tel",class:"form-label"},[Object(a["createElementVNode"])("small",{class:"text-danger"},"**"),Object(a["createTextVNode"])("訂購人電話")],-1)})),T={class:"mb-3"},B=n((function(){return Object(a["createElementVNode"])("label",{for:"address",class:"form-label"},[Object(a["createElementVNode"])("small",{class:"text-danger"},"**"),Object(a["createTextVNode"])("訂購人地址")],-1)})),I={class:"mb-3"},L=n((function(){return Object(a["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1)})),M=n((function(){return Object(a["createElementVNode"])("div",{class:"text-end"},[Object(a["createElementVNode"])("button",{type:"submit",class:"btn sendOrder"},"送出訂單")],-1)}));function q(e,t,c,n,q,z){var F=Object(a["resolveComponent"])("loading"),U=Object(a["resolveComponent"])("Field"),_=Object(a["resolveComponent"])("ErrorMessage"),A=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(F,{active:q.isLoading},null,8,["active"]),Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",l,[s,Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("table",u,[m,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(q.cartData,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:e.id},[Object(a["createElementVNode"])("td",b,[Object(a["createElementVNode"])("div",f,Object(a["toDisplayString"])(e.product.category),1)]),Object(a["createElementVNode"])("td",O,[Object(a["createElementVNode"])("div",j,Object(a["toDisplayString"])(e.product.title),1)]),Object(a["createElementVNode"])("td",p,Object(a["toDisplayString"])(e.qty),1),Object(a["createElementVNode"])("td",V,"NT."+Object(a["toDisplayString"])(e.total),1)])})),128))])]),Object(a["createElementVNode"])("div",v,[N,Object(a["createElementVNode"])("span",h,"NT."+Object(a["toDisplayString"])(q.data.total),1)]),E]),Object(a["createElementVNode"])("div",g,[x,Object(a["createVNode"])(A,{ref:"form",onSubmit:z.createOrder},{default:Object(a["withCtx"])((function(e){var c=e.errors;return[Object(a["createElementVNode"])("div",w,[y,Object(a["createVNode"])(U,{id:"email",name:"email",type:"email",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:q.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return q.form.user.email=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(_,{name:"email",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",k,[D,Object(a["createVNode"])(U,{id:"name",name:"姓名",type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:q.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return q.form.user.name=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(_,{name:"姓名",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",S,[C,Object(a["createVNode"])(U,{id:"tel",name:"電話",type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["電話"]}]),placeholder:"請輸入電話",rules:"numeric|required|min:8|max:10",modelValue:q.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return q.form.user.tel=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(_,{name:"電話",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",T,[B,Object(a["createVNode"])(U,{id:"address",name:"地址",type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:q.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return q.form.user.address=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(_,{name:"地址",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",I,[L,Object(a["withDirectives"])(Object(a["createElementVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=function(e){return q.form.message=e})},null,512),[[a["vModelText"],q.form.message]])]),M]})),_:1},8,["onSubmit"])])])])])])])}c("99af");var z=c("6be2"),F={data:function(){return{isLoading:!1,data:[],cartData:[],products:[],isLoadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/cart");this.isLoading=!0;var c=this;this.$http.get(t).then((function(t){e.isLoading=!1,c.data=t.data.data,c.cartData=t.data.data.carts}))},createOrder:function(){var e=this,t=this.form,c="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/order");this.$http.post(c,{data:t}).then((function(t){z["a"].emit("get-cart"),e.$router.push("/order/".concat(t.data.orderId))}))}},mounted:function(){this.getCart()}},U=(c("6e89"),c("d959")),_=c.n(U);const A=_()(F,[["render",q],["__scopeId","data-v-948bf552"]]);t["default"]=A},"6be2":function(e,t,c){"use strict";var a=c("1344"),n=Object(a["a"])();t["a"]=n},"6e89":function(e,t,c){"use strict";c("29f3")},8418:function(e,t,c){"use strict";var a=c("a04b"),n=c("9bf2"),r=c("5c6c");e.exports=function(e,t,c){var o=a(t);o in e?n.f(e,o,r(0,c)):e[o]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),n=c("da84"),r=c("d039"),o=c("e8b5"),l=c("861d"),s=c("7b0b"),d=c("07fa"),i=c("8418"),u=c("65f0"),m=c("1dde"),b=c("b622"),f=c("2d00"),O=b("isConcatSpreadable"),j=9007199254740991,p="Maximum allowed index exceeded",V=n.TypeError,v=f>=51||!r((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),N=m("concat"),h=function(e){if(!l(e))return!1;var t=e[O];return void 0!==t?!!t:o(e)},E=!v||!N;a({target:"Array",proto:!0,forced:E},{concat:function(e){var t,c,a,n,r,o=s(this),l=u(o,0),m=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?o:arguments[t],h(r)){if(n=d(r),m+n>j)throw V(p);for(c=0;c<n;c++,m++)c in r&&i(l,m,r[c])}else{if(m>=j)throw V(p);i(l,m++,r)}return l.length=m,l}})},b0c0:function(e,t,c){var a=c("83ab"),n=c("5e77").EXISTS,r=c("e330"),o=c("9bf2").f,l=Function.prototype,s=r(l.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=r(d.exec),u="name";a&&!n&&o(l,u,{configurable:!0,get:function(){try{return i(d,s(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-4f314d26.a8c60ce7.js.map