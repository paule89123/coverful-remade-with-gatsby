(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+S6C":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("vrFN"),l=(n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("f3/d"),n("91GP"),n("Wbzz")),o=n("J2m7"),c=n.n(o),d=n("Y+p1"),u=n.n(d),s=n("iGDP");function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(e){var t=e.product,n={borderBottom:"1px solid black",display:"inline-block",cursor:"pointer",paddingBottom:8,fontFamily:"AvenirBold",marginBottom:-1,marginRight:36,fontSize:13,letterSpacing:1},i={display:"inline-block",cursor:"pointer",paddingBottom:8,marginBottom:-1,marginRight:36,fontSize:13,letterSpacing:1},o=t.options,d=t.variants,m=t.variants[0],f=t.priceRange.minVariantPrice,g=Object(r.useState)(Object.assign({},m)),b=g[0],y=g[1],v=Object(r.useState)(1),h=v[0],E=(v[1],Object(r.useState)(!0)),x=E[0],S=E[1],w=Object(r.useState)(!1),k=w[0],O=w[1],F=Object(r.useContext)(s.a),I=F.addVariantToCart,B=F.store,R=B.client,j=B.adding,z=R.product.helpers.variantForOptions(t,b)||b,A=Object(r.useState)(z.availableForSale),C=A[0],H=A[1],G=Object(r.useCallback)((function(e){R.product.fetch(e).then((function(e){var t=e.variants.filter((function(e){return e.id===z.shopifyId}));t.length>0&&H(t[0].available)}))}),[R.product,z.shopifyId,d]);Object(r.useEffect)((function(){G(t.shopifyId)}),[z,G,t.shopifyId]);var P=function(e,t){var n=c()(d,{selectedOptions:[{name:e,value:t}]});return void 0===n||!0!==n.availableForSale},T=Intl.NumberFormat(void 0,{currency:f.currencyCode,minimumFractionDigits:2,style:"currency"}).format(b.price);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{fontSize:18,width:70,opacity:"0.65"}},T),a.a.createElement("br",null),a.a.createElement("div",{className:"pastel",style:{display:"inline-block",padding:"12px 24px",lineHeight:"1.4",backgroundColor:"rgba(197, 155, 141,0.1)",fontFamily:"AvenirBold",color:"rgba(197, 155, 141,1)",fontSize:16}},"Buy any 3 cushion covers, save £10"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("div",{style:{borderBottom:"1px solid rgba(0,0,0,0.2)",marginBottom:16}},a.a.createElement("div",{onClick:function(){S(!0),O(!1)},style:x?n:i},"DETAILS"),a.a.createElement("div",{onClick:function(){S(!1),O(!0)},style:k?n:i},"SHIPPING, RETURNS & REFUNDS")),x&&a.a.createElement("ul",{style:{lineHeight:"1.4",listStyleType:"disc",listStylePosition:"inside"}},a.a.createElement("li",null,"Cotton-linen blend cushion cover"),a.a.createElement("li",null,"45cm x 45cm"),a.a.createElement("li",null,"Inner cushion not included")),k&&a.a.createElement("div",{style:{fontSize:16,lineHeight:"1.4"}},"We offer FREE UK tracked delivery on all orders. Tracked airmail to the rest of the world is just £1.99. See ",a.a.createElement(l.Link,{style:{color:"#7e7e7e",borderBottom:"1px dashed #7e7e7e"},to:"/shipping-and-payment"},"Shipping & Payment")," for more info.",a.a.createElement("br",null),a.a.createElement("br",null),"We want you to be completely happy with your Coverful purchase. If you don’t love it, exchanges and returns are free for 30 days. See ",a.a.createElement(l.Link,{style:{color:"#7e7e7e",borderBottom:"1px dashed #7e7e7e"},to:"/returns-and-refunds"},"Returns & Refunds")," for more info.")),a.a.createElement("br",null),a.a.createElement("br",null),o.map((function(e,t){var n=e.id,r=e.name,i=e.values;return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement("label",{htmlFor:r,style:{lineHeight:"1.4",fontSize:13,letterSpacing:1,fontFamily:"AvenirBold",marginBottom:8,display:"inline-block"}},"DESIGN"),a.a.createElement("form",{style:{display:"flex",width:"100%",flexWrap:"nowrap"},name:r,key:n,onChange:function(e){return function(e,t){var n=t.target.value,r=p(b.selectedOptions);r[e]=Object.assign({},r[e],{value:n});var a=c()(d,(function(e){var t=e.selectedOptions;return u()(r,t)}));y(Object.assign({},a))}(t,e)}},i.map((function(e,t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{style:b.selectedOptions[0].value===e?{cursor:"pointer",lineHeight:"1.4",textAlign:"center",border:"2px solid #66afed",padding:"12px 24px",display:"inline-block",borderRadius:4,flexGrow:"1",width:"50%"}:{lineHeight:"1.4",textAlign:"center",border:"1px solid rgba(0,0,0,0.2)",marginLeft:1,marginRight:1,padding:"13px 24px",display:"inline-block",borderRadius:4,flexGrow:"1",width:"50%",cursor:"pointer"}},a.a.createElement("input",{type:"radio",name:r,value:e,key:r+"-"+e,disabled:P(r,e),style:{display:"none"}}),a.a.createElement("span",{style:{fontFamily:"AvenirBold"}},e),a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:14}},"£",d[t].price)),0===t&&a.a.createElement("div",{style:{width:12}}))}))),a.a.createElement("br",null))})),a.a.createElement("br",null),a.a.createElement("button",{className:"pastel2",type:"submit",disabled:!C||j,onClick:function(){I(z.shopifyId,h)},style:{background:"linear-gradient(145deg,HSL(127,72%,85%),HSL(213,93%,64%)",borderRadius:30,color:"white",border:"none",padding:2,cursor:"pointer",fontSize:15,fontWeight:"500",letterSpacing:.5}},a.a.createElement("div",{style:{padding:"9px 20px 10px",borderRadius:30,color:"black",background:"white"}},"Add to Bag")),a.a.createElement("br",null),!C&&a.a.createElement("p",null,"This Product is out of Stock!"))},f=n("oCA+"),g=n("5D9J");function b(){var e=v(["\n  margin-top: 40px;\n  line-height: 1.4;\n  font-weight: 300;\n  font-size: 14px;\n  color: rgb(68,68,68)\n"]);return b=function(){return e},e}function y(){var e=v(["\n  font-size: 28px;\n  word-wrap: break-word;\n  font-weight: 400;\n  margin-bottom: 6px;\n  font-family: 'PlayfairDisplay';\n  font-weight: 400;\n"]);return y=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),e.raw=t,e}var h=g.a.div(y()),E=g.a.div(b());n.d(t,"query",(function(){return x}));var x="1788158796";t.default=function(e){var t=e.data,n={cursor:"pointer",margin:"0px 6px",border:"1px solid rgba(0,0,0,0.65)",display:"inline-block",borderRadius:"50%"},l={cursor:"pointer",margin:"0px 6px",border:"1px solid rgba(0,0,0,0)",display:"inline-block",borderRadius:"50%"},o=Object(r.useState)(),c=o[0],d=o[1],u=Object(r.useState)(0),s=u[0],p=u[1],g=t.shopifyProduct,b=g.images.map((function(e,t){return 0===t?a.a.createElement("div",{style:{boxSizing:"border-box",padding:"54px 37px 38px 29px",background:"linear-gradient(140deg, rgba(220,225,255), rgba(10,10,30, 0.07))"}},a.a.createElement(f.e,{fluid:e.localFile.childImageSharp.fluid,key:e.id,alt:g.title})):a.a.createElement("div",{style:{height:461.375}},a.a.createElement(f.e,{fluid:e.localFile.childImageSharp.fluid,key:e.id,alt:g.title,style:{height:461.375}}))})),y=g.images.map((function(e,t){return 0===t?a.a.createElement("div",{style:s===t?n:l},a.a.createElement("div",{onClick:function(){return v(t)},style:{margin:2,borderRadius:"50%",width:36,height:36,overflow:"hidden",boxSizing:"border-box",padding:"4px 0px 0px 0px",background:"linear-gradient(140deg, rgba(220,225,255), rgba(10,10,30, 0.1))"}},a.a.createElement(f.e,{fluid:e.localFile.childImageSharp.fluid,key:e.id,alt:g.title}))):a.a.createElement("div",{style:s===t?n:l},a.a.createElement("div",{style:{margin:2,borderRadius:"50%",width:36,height:36,overflow:"hidden",boxSizing:"border-box"},onClick:function(){return v(t)}},a.a.createElement("div",{style:{width:68}},a.a.createElement(f.e,{fluid:e.localFile.childImageSharp.fluid,key:e.id,alt:g.title}))))}));function v(e){d(b[e]),p(e)}return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{title:g.title,description:g.description}),a.a.createElement(f.a,null,a.a.createElement(f.f,null,a.a.createElement(f.c,null,a.a.createElement("div",{style:{width:"100%",padding:"0px 72px 0px 0px"}},c||b[0]),b[1]&&a.a.createElement("div",{style:{margin:"28px auto",paddingRight:72}},y)),a.a.createElement(f.d,{style:{opacity:"1"}},a.a.createElement(h,{style:{}},g.title),a.a.createElement(m,{product:g}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{style:{fontSize:14,lineHeight:"1.4"}},a.a.createElement("span",{style:{fontFamily:"Avenir-Medium",fontSize:16}},"Our Happiness Promise"),a.a.createElement("br",null),"We stand behind our products. If you don’t love it, ",a.a.createElement("br",null),"exchanges and returns are free for 30 days."))),a.a.createElement(E,{dangerouslySetInnerHTML:{__html:g.descriptionHtml}})))}},J2m7:function(e,t,n){var r=n("XKAG")(n("UfWW"));e.exports=r},KwMD:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,i=n+(r?1:-1);r?i--:++i<a;)if(t(e[i],i,e))return i;return-1}},Sxd8:function(e,t,n){var r=n("ZCgT");e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},UfWW:function(e,t,n){var r=n("KwMD"),a=n("ut/Y"),i=n("Sxd8"),l=Math.max;e.exports=function(e,t,n){var o=null==e?0:e.length;if(!o)return-1;var c=null==n?0:i(n);return c<0&&(c=l(o+c,0)),r(e,a(t,3),c)}},XKAG:function(e,t,n){var r=n("ut/Y"),a=n("MMmD"),i=n("7GkX");e.exports=function(e){return function(t,n,l){var o=Object(t);if(!a(t)){var c=r(n,3);t=i(t),n=function(e){return c(o[e],e,o)}}var d=e(t,n,l);return d>-1?o[c?t[d]:d]:void 0}}},"Y+p1":function(e,t,n){var r=n("wF/u");e.exports=function(e,t){return r(e,t)}},ZCgT:function(e,t,n){var r=n("tLB3"),a=1/0,i=17976931348623157e292;e.exports=function(e){return e?(e=r(e))===a||e===-a?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},tLB3:function(e,t,n){n("pIFo");var r=n("GoyQ"),a=n("/9aa"),i=NaN,l=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=c.test(e);return n||d.test(e)?u(e.slice(2),n?2:8):o.test(e)?i:+e}}}]);
//# sourceMappingURL=component---src-templates-product-page-index-js-7c57d5cd607e2d4f351d.js.map