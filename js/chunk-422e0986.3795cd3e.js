(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-422e0986"],{"168c":function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),o={class:"container"},r={class:"py-3"},c=Object(n["createElementVNode"])("h3",null,"訂單管理",-1),l={class:"table mt-4"},d=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",{class:"text-center",width:"80"},"序號"),Object(n["createElementVNode"])("th",{width:"150"},"下單日期"),Object(n["createElementVNode"])("th",null,"訂單編號"),Object(n["createElementVNode"])("th",null,"訂購人"),Object(n["createElementVNode"])("th",null,"下單金額"),Object(n["createElementVNode"])("th",{width:"80"},"付款"),Object(n["createElementVNode"])("th",{width:"120"})])],-1),i={class:"text-center"},s={key:0,class:"text-success"},m={key:1},b=["onClick"],u=["onClick"],O=Object(n["createElementVNode"])("i",{class:"bi bi-trash-fill"},null,-1),p=[O];function j(e,t,a,O,j,f){var h=Object(n["resolveComponent"])("loading"),V=Object(n["resolveComponent"])("pagination"),N=Object(n["resolveComponent"])("order-modal"),E=Object(n["resolveComponent"])("del-order-modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(h,{active:j.isLoading},null,8,["active"]),Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",r,[c,Object(n["createElementVNode"])("table",l,[d,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(j.orders,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:e.id},[Object(n["createElementVNode"])("td",i,Object(n["toDisplayString"])(e.num),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.create_at),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.id),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.user.name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.total),1),e.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("td",s,"已付款")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("td",m,"未付款")),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",style:{color:"white"},onClick:function(t){return f.openModal(e)}}," 訂單詳情 ",8,b)]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return f.openDel(e)}},p,8,u)])])})),128))])]),Object(n["createVNode"])(V,{page:j.pagination,onSwitchPage:f.getOrders},null,8,["page","onSwitchPage"]),Object(n["createVNode"])(N,{ref:"orderModal",order:j.tempOrder,onUpdate:f.getOrders},null,8,["order","onUpdate"]),Object(n["createVNode"])(E,{ref:"delOrderModal",delItem:j.delItem,onUpdate:f.getOrders},null,8,["delItem","onUpdate"])])])],64)}a("99af"),a("e9c4");var f=function(e){return Object(n["pushScopeId"])("data-v-1a7b2684"),e=e(),Object(n["popScopeId"])(),e},h={"aria-label":"Page navigation example"},V={class:"pagination justify-content-center"},N=f((function(){return Object(n["createElementVNode"])("span",{"aria-hidden":"true"},[Object(n["createElementVNode"])("i",{class:"bi bi-caret-left-fill"})],-1)})),E=[N],g=["onClick"],v=f((function(){return Object(n["createElementVNode"])("span",{"aria-hidden":"true"},[Object(n["createElementVNode"])("i",{class:"bi bi-caret-right-fill"})],-1)})),y=[v];function k(e,t,a,o,r,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("nav",h,[Object(n["createElementVNode"])("ul",V,[Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])(["page-item",{"d-none":!a.page.has_pre}])},[Object(n["createElementVNode"])("a",{class:"page-link",href:"#",onClick:t[0]||(t[0]=Object(n["withModifiers"])((function(e){return c.insideEvent(a.page.current_page-1)}),["prevent"]))},E)],2),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(a.page.total_pages,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:Object(n["normalizeClass"])(["page-item",{active:e===a.page.current_page}]),key:e},[Object(n["createElementVNode"])("a",{class:"page-link",href:"#",onClick:Object(n["withModifiers"])((function(t){return c.insideEvent(e)}),["prevent"])},Object(n["toDisplayString"])(e),9,g)],2)})),128)),Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])(["page-item",{"d-none":!a.page.has_next}])},[Object(n["createElementVNode"])("a",{class:"page-link",href:"",onClick:t[1]||(t[1]=Object(n["withModifiers"])((function(e){return c.insideEvent(a.page.current_page+1)}),["prevent"]))},y)],2)])])])}var x={data:function(){return{}},props:["page"],methods:{insideEvent:function(e){this.$emit("switch-page",e)}}},M=(a("c82f"),a("d959")),w=a.n(M);const S=w()(x,[["render",k],["__scopeId","data-v-1a7b2684"]]);var C=S,B={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},D={class:"modal-dialog modal-lg"},F={class:"modal-content border-0"},I={class:"modal-header bg-dark text-white"},L={id:"orderModalLabel",class:"modal-title"},$={class:"modal-body"},_={class:"row"},J={class:"col-md-6"},U=Object(n["createElementVNode"])("h5",{class:"px-2"},"訂單明細",-1),T={class:"px-2"},z={id:"checkoutList",class:"w-100 mt-4"},q={width:"150"},P={class:"px-2"},A={width:"100",class:""},X={class:"px-3"},G={class:""},H={class:"my-5 text-end"},K=Object(n["createTextVNode"])(" 總金額"),Q={class:"mx-3 h5"},R={class:"col-md-6 customerInfo"},W=Object(n["createElementVNode"])("h6",null,"訂購人資料",-1),Y={class:"mb-3"},Z=Object(n["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),ee={class:"mb-3"},te=Object(n["createElementVNode"])("label",{for:"name",class:"form-label"},"訂購人姓名",-1),ae={class:"mb-3"},ne=Object(n["createElementVNode"])("label",{for:"tel",class:"form-label"},"訂購人電話",-1),oe={class:"mb-3"},re=Object(n["createElementVNode"])("label",{for:"address",class:"form-label"},"訂購人地址",-1),ce={class:"mb-3"},le=Object(n["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1),de=Object(n["createElementVNode"])("div",{class:"text-end"},[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary me-3","data-bs-dismiss":"modal"}," 取消 "),Object(n["createElementVNode"])("button",{type:"submit",class:"btn btn-primary",style:{color:"white"}},"確認")],-1),ie=Object(n["createElementVNode"])("div",{class:"modal-footer"},null,-1);function se(e,t,a,o,r,c){var l=Object(n["resolveComponent"])("Field"),d=Object(n["resolveComponent"])("ErrorMessage"),i=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("div",F,[Object(n["createElementVNode"])("div",I,[Object(n["createElementVNode"])("h5",L,[Object(n["createElementVNode"])("span",null,"訂單編號:"+Object(n["toDisplayString"])(r.form.id),1)])]),Object(n["createElementVNode"])("div",$,[Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("div",J,[U,Object(n["createElementVNode"])("h6",T,"訂單日期 ： "+Object(n["toDisplayString"])(r.form.create_at),1),Object(n["createElementVNode"])("table",z,[Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.form.products,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:e.id,class:"border-bottom"},[Object(n["createElementVNode"])("td",q,[Object(n["createElementVNode"])("div",P,Object(n["toDisplayString"])(e.product.category),1)]),Object(n["createElementVNode"])("td",A,[Object(n["createElementVNode"])("div",X,Object(n["toDisplayString"])(e.product.title),1)]),Object(n["createElementVNode"])("td",G,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.qty)+" ",1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.product.unit),1)])])})),128))])]),Object(n["createElementVNode"])("div",H,[K,Object(n["createElementVNode"])("span",Q,"NT."+Object(n["toDisplayString"])(r.form.total),1)])]),Object(n["createElementVNode"])("div",R,[W,Object(n["createVNode"])(i,{ref:"form",onSubmit:c.updateProduct},{default:Object(n["withCtx"])((function(e){var a=e.errors;return[Object(n["createElementVNode"])("div",Y,[Z,Object(n["createVNode"])(l,{id:"email",name:"email",type:"email",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:r.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.form.user.email=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(d,{name:"email",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",ee,[te,Object(n["createVNode"])(l,{id:"name",name:"姓名",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:r.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.user.name=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(d,{name:"姓名",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",ae,[ne,Object(n["createVNode"])(l,{id:"tel",name:"電話",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",rules:"numeric|required|min:8|max:10",modelValue:r.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.form.user.tel=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(d,{name:"電話",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",oe,[re,Object(n["createVNode"])(l,{id:"address",name:"地址",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:r.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.form.user.address=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(d,{name:"地址",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",ce,[le,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.form.message=e})},null,512),[[n["vModelText"],r.form.message]])]),de]})),_:1},8,["onSubmit"])])])])]),ie])],512)])}var me=a("7b17"),be={data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},props:["order"],inject:["emitter"],methods:{updateProduct:function(){var e=this,t=this.form,a="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/admin/order/").concat(this.order.id);this.$http.put(a,{data:t}).then((function(t){e.$emit("update"),e.hideModal()}))},openModal:function(){this.orderModal.show()},hideModal:function(){this.orderModal.hide()}},watch:{order:function(){this.form=JSON.parse(JSON.stringify(this.order)),console.log(this.form)}},mounted:function(){this.orderModal=new me["b"](this.$refs.orderModal)}};const ue=w()(be,[["render",se]]);var Oe=ue,pe={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},je={class:"modal-dialog"},fe={class:"modal-content border-0"},he=Object(n["createElementVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(n["createElementVNode"])("h5",{id:"ddelOrderModalLabel",class:"modal-title"},[Object(n["createElementVNode"])("span",null,"刪除產品")]),Object(n["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ve={class:"modal-body"},Ne=Object(n["createTextVNode"])(" 是否刪除 "),Ee={class:"text-danger"},ge=Object(n["createTextVNode"])(" 商品(刪除後將無法恢復)。 "),ve={class:"modal-footer"},ye=Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ke(e,t,a,o,r,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",pe,[Object(n["createElementVNode"])("div",je,[Object(n["createElementVNode"])("div",fe,[he,Object(n["createElementVNode"])("div",Ve,[Ne,Object(n["createElementVNode"])("strong",Ee,Object(n["toDisplayString"])(a.delItem.id),1),ge]),Object(n["createElementVNode"])("div",ve,[ye,Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=function(){return c.delOrder&&c.delOrder.apply(c,arguments)})}," 確認刪除 ")])])])],512)])}var xe={props:["delItem"],data:function(){return{delOrderModal:""}},methods:{delOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/admin/order/").concat(this.delItem.id);this.$http.delete(t).then((function(t){e.$emit("update"),e.hideModal()})).catch((function(e){alert(e.data.message)}))},openModal:function(){this.delOrderModal.show()},hideModal:function(){this.delOrderModal.hide()}},mounted:function(){this.delOrderModal=new me["b"](this.$refs.delOrderModal)}};const Me=w()(xe,[["render",ke]]);var we=Me,Se={components:{pagination:C,orderModal:Oe,delOrderModal:we},data:function(){return{orders:[],pagination:{},isLoading:!1,tempOrder:{},delItem:{}}},methods:{getOrders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/admin/orders?page=").concat(e),a=this;this.$http.get(t).then((function(e){a.isLoading=!1,a.orders=e.data.orders,a.pagination=e.data.pagination}))},openDel:function(e){var t=this.$refs.delOrderModal;this.delItem=JSON.parse(JSON.stringify(e)),console.log(this.delItem),t.openModal()},delOrder:function(e){this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/admin/order/").concat(e),a=this;this.$http.delete(t).then((function(e){a.isLoading=!1,a.orders=e.data.orders,a.pagination=e.data.pagination}))},openModal:function(e){var t=this.$refs.orderModal;this.tempOrder=JSON.parse(JSON.stringify(e)),t.openModal()}},mounted:function(){this.getOrders()}};const Ce=w()(Se,[["render",j]]);t["default"]=Ce},"1dde":function(e,t,a){var n=a("d039"),o=a("b622"),r=a("2d00"),c=o("species");e.exports=function(e){return r>=51||!n((function(){var t=[],a=t.constructor={};return a[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"514a":function(e,t,a){},8418:function(e,t,a){"use strict";var n=a("a04b"),o=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var c=n(t);c in e?o.f(e,c,r(0,a)):e[c]=a}},"99af":function(e,t,a){"use strict";var n=a("23e7"),o=a("da84"),r=a("d039"),c=a("e8b5"),l=a("861d"),d=a("7b0b"),i=a("07fa"),s=a("8418"),m=a("65f0"),b=a("1dde"),u=a("b622"),O=a("2d00"),p=u("isConcatSpreadable"),j=9007199254740991,f="Maximum allowed index exceeded",h=o.TypeError,V=O>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),N=b("concat"),E=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:c(e)},g=!V||!N;n({target:"Array",proto:!0,forced:g},{concat:function(e){var t,a,n,o,r,c=d(this),l=m(c,0),b=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?c:arguments[t],E(r)){if(o=i(r),b+o>j)throw h(f);for(a=0;a<o;a++,b++)a in r&&s(l,b,r[a])}else{if(b>=j)throw h(f);s(l,b++,r)}return l.length=b,l}})},b0c0:function(e,t,a){var n=a("83ab"),o=a("5e77").EXISTS,r=a("e330"),c=a("9bf2").f,l=Function.prototype,d=r(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=r(i.exec),m="name";n&&!o&&c(l,m,{configurable:!0,get:function(){try{return s(i,d(this))[1]}catch(e){return""}}})},c82f:function(e,t,a){"use strict";a("514a")},e9c4:function(e,t,a){var n=a("23e7"),o=a("da84"),r=a("d066"),c=a("2ba4"),l=a("e330"),d=a("d039"),i=o.Array,s=r("JSON","stringify"),m=l(/./.exec),b=l("".charAt),u=l("".charCodeAt),O=l("".replace),p=l(1..toString),j=/[\uD800-\uDFFF]/g,f=/^[\uD800-\uDBFF]$/,h=/^[\uDC00-\uDFFF]$/,V=function(e,t,a){var n=b(a,t-1),o=b(a,t+1);return m(f,e)&&!m(h,o)||m(h,e)&&!m(f,n)?"\\u"+p(u(e,0),16):e},N=d((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&n({target:"JSON",stat:!0,forced:N},{stringify:function(e,t,a){for(var n=0,o=arguments.length,r=i(o);n<o;n++)r[n]=arguments[n];var l=c(s,null,r);return"string"==typeof l?O(l,j,V):l}})}}]);
//# sourceMappingURL=chunk-422e0986.3795cd3e.js.map