(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e789016"],{1344:function(e,t,n){"use strict";t["a"]=function(e){return{all:e=e||new Map,on:function(t,n){var a=e.get(t);a?a.push(n):e.set(t,[n])},off:function(t,n){var a=e.get(t);a&&(n?a.splice(a.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var a=e.get(t);a&&a.slice().map((function(e){e(n)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,n)}))}}}},"1dde":function(e,t,n){var a=n("d039"),c=n("b622"),o=n("2d00"),r=c("species");e.exports=function(e){return o>=51||!a((function(){var t=[],n=t.constructor={};return n[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25b8":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=function(e){return Object(a["pushScopeId"])("data-v-67821345"),e=e(),Object(a["popScopeId"])(),e},o={class:"wrapper"},r={class:"content"},i=c((function(){return Object(a["createElementVNode"])("footer",null,[Object(a["createElementVNode"])("div",{class:"my-4"},[Object(a["createElementVNode"])("p",{style:{margin:"0"}},[Object(a["createTextVNode"])("僅供學習使用 無商業用途 "),Object(a["createElementVNode"])("span",null,"2022")])]),Object(a["createElementVNode"])("img",{src:"https://imgur.com/kVMAQk8.jpg",alt:""})],-1)}));function l(e,t,n,c,l,s){var d=Object(a["resolveComponent"])("FrontNavBar"),u=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(d),Object(a["createVNode"])(u)])]),i],64)}var s=function(e){return Object(a["pushScopeId"])("data-v-1809590e"),e=e(),Object(a["popScopeId"])(),e},d={class:"navbar navbar-expand-lg navbar-light sticky-top bg-light"},u={class:"container"},b=Object(a["createTextVNode"])("PetPal"),p={class:"cart dropdown ms-auto order-lg-3",style:{cursor:"pointer"}},m={class:"",id:"cartDropdown","data-bs-toggle":"dropdown","aria-expanded":"false"},f={class:"position-relative me-md-2"},v=s((function(){return Object(a["createElementVNode"])("i",{class:"bi bi-cart-fill"},null,-1)})),O=s((function(){return Object(a["createElementVNode"])("span",{class:"d-none d-md-block"},null,-1)})),j={class:"dropdown-content","aria-labelledby":"cartDropdown"},h={class:"minicart"},g=s((function(){return Object(a["createElementVNode"])("h6",{class:"minicart-header"},"購物車",-1)})),N={class:"minicart-body"},V={style:{"font-size":"16px","font-weight":"bold"}},E={class:"d-flex"},w=s((function(){return Object(a["createElementVNode"])("div",null,null,-1)})),x={style:{"font-size":"14px"}},k={class:"d-flex justify-content-between",style:{"font-size":"14px"}},y=s((function(){return Object(a["createElementVNode"])("span",null,"數量：",-1)})),C=["disabled","onUpdate:modelValue","onChange"],B=["onClick"],S=s((function(){return Object(a["createElementVNode"])("i",{class:"bi bi-trash-fill"},null,-1)})),D=[S],T={key:0,class:"text-end"},$=Object(a["createTextVNode"])(" 小計 "),I=Object(a["createTextVNode"])(" 元 "),_={key:1,class:"text-center"},L=s((function(){return Object(a["createElementVNode"])("h6",null,"購物車內尚無商品",-1)})),P=[L],q={class:"cart-body overflow-auto h-100 p-2",style:{"max-height":"70vh"}},z=Object(a["createTextVNode"])("結帳"),F=s((function(){return Object(a["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1)})),M={class:"collapse navbar-collapse",id:"navbarSupportedContent"},J={class:"navbar-nav me-auto mb-2 mb-lg-0"},Q={class:"nav-item"},A=s((function(){return Object(a["createElementVNode"])("span",null,[Object(a["createElementVNode"])("i",{class:"bi bi-file-earmark-image"}),Object(a["createTextVNode"])(" 愛園一覽")],-1)})),U={class:"nav-item"},H=s((function(){return Object(a["createElementVNode"])("span",null,[Object(a["createElementVNode"])("i",{class:"bi bi-suit-heart-fill"}),Object(a["createTextVNode"])(" 收藏")],-1)}));function G(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",d,[Object(a["createElementVNode"])("div",u,[Object(a["createVNode"])(i,{class:"navbar-brand",to:"/"},{default:Object(a["withCtx"])((function(){return[b]})),_:1}),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",{onClick:t[0]||(t[0]=function(e){return r.gocart()})},[Object(a["createElementVNode"])("div",f,[v,Object(a["createElementVNode"])("span",{class:Object(a["normalizeClass"])([{"d-none":!o.carts.length},"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"])},Object(a["toDisplayString"])(o.carts.length),3)]),O])]),Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("div",h,[g,Object(a["createElementVNode"])("ul",N,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(o.carts,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"d-flex justify-content-between align-items-center border-bottom-1 p-2",key:e.id},[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("div",V,Object(a["toDisplayString"])(e.product.category),1),Object(a["createElementVNode"])("div",E,[w,Object(a["createElementVNode"])("div",x,Object(a["toDisplayString"])(e.product.title),1)]),Object(a["createElementVNode"])("div",k,[y,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{style:{width:"100px",height:"30px"},disabled:!0===o.disabled,min:"1",type:"number",class:"form-control","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(t){return r.updateCart(e.id,e.qty)}},null,40,C),[[a["vModelText"],e.qty,void 0,{number:!0}]])])]),Object(a["createElementVNode"])("div",{class:"delCart",onClick:function(t){return r.delProduct(e.id,e.product.category)}},D,8,B)])})),128))]),o.cartData.total>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",T,[Object(a["createElementVNode"])("p",null,[$,Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(o.cartData.total),1),I])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",_,P))]),Object(a["createElementVNode"])("div",q,[Object(a["createVNode"])(i,{to:"/checkout"},{default:Object(a["withCtx"])((function(){return[z]})),_:1})])])])]),F,Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("ul",J,[Object(a["createElementVNode"])("li",Q,[Object(a["createVNode"])(i,{class:"nav-link",to:"/shelter/allselter",onClick:r.hideDropdown},{default:Object(a["withCtx"])((function(){return[A]})),_:1},8,["onClick"])]),Object(a["createElementVNode"])("li",U,[Object(a["createVNode"])(i,{class:"nav-link",to:"/favorite",onClick:r.hideDropdown},{default:Object(a["withCtx"])((function(){return[H]})),_:1},8,["onClick"])])])])])])}n("99af");var K=n("6be2"),R=n("7b17"),W={data:function(){return{isLoadingItem:"",cartData:{},carts:{},hearted:[],heartQuantity:"",disabled:!1}},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/cart");this.$http.get(t).then((function(t){e.cartData=t.data.data,e.carts=t.data.data.carts}))},getHearted:function(){this.hearted=JSON.parse(localStorage.getItem("hearted"))||[],this.heartQuantity=this.hearted.length},delProduct:function(e,t){var n=this,a="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/cart/").concat(e);this.$http.delete(a).then((function(e){K["a"].emit("update-cart"),n.getCart();var a=n.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!1,didOpen:function(e){e.addEventListener("mouseenter",n.$swal.stopTimer),e.addEventListener("mouseleave",n.$swal.resumeTimer)}});a.fire({icon:"success",title:"已刪除".concat(t)})}))},gocart:function(){this.$router.push("/cart")},updateCart:function(e,t){var n=this,a="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("houhsuan","/cart/").concat(e);this.disabled=!0;var c={product_id:e,qty:t};this.$http.put(a,{data:c}).then((function(e){n.disabled=!1,n.getCart();var t=n.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!1,didOpen:function(e){e.addEventListener("mouseenter",n.$swal.stopTimer),e.addEventListener("mouseleave",n.$swal.resumeTimer)}});t.fire({icon:"success",title:"已更新購物車"})}))},hideDropdown:function(){var e=document.getElementById("navbarSupportedContent"),t=new R["a"](e,{toggle:!1});t.hide()}},mounted:function(){var e=this;this.getCart(),K["a"].on("get-cart",(function(){e.getCart()}))}},X=(n("b535"),n("d959")),Y=n.n(X);const Z=Y()(W,[["render",G],["__scopeId","data-v-1809590e"]]);var ee=Z,te={components:{FrontNavBar:ee}};n("4b83");const ne=Y()(te,[["render",l],["__scopeId","data-v-67821345"]]);t["default"]=ne},"4b83":function(e,t,n){"use strict";n("5e61")},"5e61":function(e,t,n){},6310:function(e,t,n){},"6be2":function(e,t,n){"use strict";var a=n("1344"),c=Object(a["a"])();t["a"]=c},8418:function(e,t,n){"use strict";var a=n("a04b"),c=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var r=a(t);r in e?c.f(e,r,o(0,n)):e[r]=n}},"99af":function(e,t,n){"use strict";var a=n("23e7"),c=n("da84"),o=n("d039"),r=n("e8b5"),i=n("861d"),l=n("7b0b"),s=n("07fa"),d=n("8418"),u=n("65f0"),b=n("1dde"),p=n("b622"),m=n("2d00"),f=p("isConcatSpreadable"),v=9007199254740991,O="Maximum allowed index exceeded",j=c.TypeError,h=m>=51||!o((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),g=b("concat"),N=function(e){if(!i(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},V=!h||!g;a({target:"Array",proto:!0,forced:V},{concat:function(e){var t,n,a,c,o,r=l(this),i=u(r,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?r:arguments[t],N(o)){if(c=s(o),b+c>v)throw j(O);for(n=0;n<c;n++,b++)n in o&&d(i,b,o[n])}else{if(b>=v)throw j(O);d(i,b++,o)}return i.length=b,i}})},b535:function(e,t,n){"use strict";n("6310")}}]);
//# sourceMappingURL=chunk-7e789016.74720bba.js.map