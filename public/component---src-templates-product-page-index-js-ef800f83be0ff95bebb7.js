(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+S6C":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("vrFN"),o=(n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("f3/d"),n("91GP"),n("J2m7")),l=n.n(o),c=n("Y+p1"),u=n.n(c),s=n("iGDP");function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(e){var t=e.product,n=t.options,i=t.variants,o=t.variants[0],c=t.priceRange.minVariantPrice,f=Object(r.useState)(Object.assign({},o)),p=f[0],m=f[1],g=Object(r.useState)(1),v=g[0],b=g[1],h=Object(r.useContext)(s.a),y=h.addVariantToCart,x=h.store,E=x.client,w=x.adding,S=E.product.helpers.variantForOptions(t,p)||p,O=Object(r.useState)(S.availableForSale),k=O[0],A=O[1],C=Object(r.useCallback)((function(e){E.product.fetch(e).then((function(e){var t=e.variants.filter((function(e){return e.id===S.shopifyId}));t.length>0&&A(t[0].available)}))}),[E.product,S.shopifyId,i]);Object(r.useEffect)((function(){C(t.shopifyId)}),[S,C,t.shopifyId]);var L=function(e,t){var n=l()(i,{selectedOptions:[{name:e,value:t}]});return void 0===n||!0!==n.availableForSale},j=Intl.NumberFormat(void 0,{currency:c.currencyCode,minimumFractionDigits:2,style:"currency"}).format(p.price);function F(e){"increase"===e&&b((function(e){return e+1})),"decrease"===e&&v>0&&b((function(e){return e-1}))}return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{fontSize:16,opacity:"0.6",textAlign:"center"}},j),a.a.createElement("br",null),a.a.createElement("div",{className:"pastel",style:{textAlign:"center",padding:16,lineHeight:"1.4"}},a.a.createElement("span",{style:{fontFamily:"AvenirBold"}},"Just for you:"),a.a.createElement("br",null),"Buy 3 cushion covers, save £10"),a.a.createElement("br",null),n.map((function(e,t){var n=e.id,r=e.name,o=e.values;return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement("label",{htmlFor:r},r," "),a.a.createElement("select",{name:r,key:n,onChange:function(e){return function(e,t){var n=t.target.value,r=d(p.selectedOptions);r[e]=Object.assign({},r[e],{value:n});var a=l()(i,(function(e){var t=e.selectedOptions;return u()(r,t)}));m(Object.assign({},a))}(t,e)}},o.map((function(e){return a.a.createElement("option",{value:e,key:r+"-"+e,disabled:L(r,e)},e)}))),a.a.createElement("br",null))})),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement("input",{"aria-label":"quantity",type:"number",id:"quantity",name:"quantity",min:"1",step:"1",onChange:function(e){var t=e.target;b(t.value)},value:v,style:{boxSizing:"border-box",position:"absolute",padding:"16px 0px",marginLeft:4,marginTop:2,color:"rgb(38,38,38)",border:"none",width:188,fontSize:13,textAlign:"center",fontWeight:"500"}}),a.a.createElement("div",{style:{position:"relative",border:"1px solid rgb(38,38,38)",width:"48%",height:50,display:"flex",alignItems:"center"}},a.a.createElement("div",{style:{cursor:"pointer",position:"relative",width:"50%",textAlign:"center",top:3,right:3},onClick:function(){return F("decrease")}},a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fill:"#2B1453","fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 13H17V11H7V13Z"}))),a.a.createElement("div",{style:{cursor:"pointer",position:"relative",width:"50%",textAlign:"center",top:3},onClick:function(){return F("increase")}},a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.2496 12.7494L7 12.7454L7.001 11.2456L11.2506 11.2496L11.2546 7L12.7544 7.001L12.7504 11.2506L17 11.2546L16.999 12.7544L12.7494 12.7504L12.7454 17L11.2456 16.999L11.2496 12.7494Z",fill:"#2B1453"})))),a.a.createElement("button",{className:"pastel2",type:"submit",disabled:!k||w,onClick:function(){y(S.shopifyId,v)},style:{backgroundColor:"rgb(38,38,38)",color:"white",border:"1px solid rgb(38,38,38)",borderRadius:0,width:"48%",display:"inline-block",padding:"16px 0px",fontSize:13,fontWeight:"500",letterSpacing:.5}},"Add To Bag")),!k&&a.a.createElement("p",null,"This Product is out of Stock!"))},p=n("oCA+"),m=n("5D9J");function g(){var e=b(["\n  margin-top: 40px;\n  line-height: 1.4;\n  font-weight: 300;\n  font-size: 14px;\n  color: rgb(68,68,68)\n"]);return g=function(){return e},e}function v(){var e=b(["\n  font-size: 24px;\n  word-wrap: break-word;\n  font-weight: 400;\n  margin-bottom: 10px;\n  font-family: 'PlayfairDisplay';\n  font-weight: 560;\n"]);return v=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),e.raw=t,e}var h=m.a.div(v()),y=m.a.div(g());n.d(t,"query",(function(){return x}));var x="1788158796";t.default=function(e){var t=e.data,n=Object(r.useState)(),o=n[0],l=n[1],c=t.shopifyProduct,u=c.images.map((function(e){return a.a.createElement(p.e,{fluid:e.localFile.childImageSharp.fluid,key:e.id,alt:c.title})})),s=u.map((function(e,t){return 0===t?a.a.createElement("div",{style:{marginBottom:28,position:"relative",height:"0px",width:"100%",paddingTop:"100%",overflow:"hidden",boxSizing:"border-box",background:"linear-gradient(140deg, rgba(220,225,255), rgba(10,10,30, 0.6))"},onClick:function(){return d(t)}},a.a.createElement("div",{style:{height:"140%",width:"140%",position:"absolute",top:0,left:0,paddingTop:12}},u[t])):a.a.createElement("div",{style:{marginBottom:28,position:"relative",height:"0px",width:"100%",paddingTop:"100%",overflow:"hidden",boxSizing:"border-box"},onClick:function(){return d(t)}},a.a.createElement("div",{style:{height:"140%",width:"140%",position:"absolute",top:0,left:0,margin:0}},u[t]))}));function d(e){l(u[e])}return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{title:c.title,description:c.description}),a.a.createElement(p.a,null,a.a.createElement(p.f,null,a.a.createElement(p.c,null,u[1]&&a.a.createElement("div",{style:{width:"16.85%",paddingRight:"14px"}},s),a.a.createElement("div",{style:{width:"83.15%",padding:"0px",paddingLeft:"14px",boxSizing:"border-box"}},o||u[0])),a.a.createElement(p.d,null,a.a.createElement(h,{style:{textAlign:"center"}},c.title),a.a.createElement(f,{product:c}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{style:{fontSize:13,textAlign:"center"}},a.a.createElement("span",{style:{fontWeight:700}},"Our Happiness Promise"),a.a.createElement("br",null),"We stand behind our products. If you don’t love it, ",a.a.createElement("br",null),"exchanges and returns are free for 60 days."))),a.a.createElement(y,{dangerouslySetInnerHTML:{__html:c.descriptionHtml}})))}},J2m7:function(e,t,n){var r=n("XKAG")(n("UfWW"));e.exports=r},KwMD:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,i=n+(r?1:-1);r?i--:++i<a;)if(t(e[i],i,e))return i;return-1}},Sxd8:function(e,t,n){var r=n("ZCgT");e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},UfWW:function(e,t,n){var r=n("KwMD"),a=n("ut/Y"),i=n("Sxd8"),o=Math.max;e.exports=function(e,t,n){var l=null==e?0:e.length;if(!l)return-1;var c=null==n?0:i(n);return c<0&&(c=o(l+c,0)),r(e,a(t,3),c)}},XKAG:function(e,t,n){var r=n("ut/Y"),a=n("MMmD"),i=n("7GkX");e.exports=function(e){return function(t,n,o){var l=Object(t);if(!a(t)){var c=r(n,3);t=i(t),n=function(e){return c(l[e],e,l)}}var u=e(t,n,o);return u>-1?l[c?t[u]:u]:void 0}}},"Y+p1":function(e,t,n){var r=n("wF/u");e.exports=function(e,t){return r(e,t)}},ZCgT:function(e,t,n){var r=n("tLB3"),a=1/0,i=17976931348623157e292;e.exports=function(e){return e?(e=r(e))===a||e===-a?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},tLB3:function(e,t,n){n("pIFo");var r=n("GoyQ"),a=n("/9aa"),i=NaN,o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=c.test(e);return n||u.test(e)?s(e.slice(2),n?2:8):l.test(e)?i:+e}}}]);
//# sourceMappingURL=component---src-templates-product-page-index-js-ef800f83be0ff95bebb7.js.map