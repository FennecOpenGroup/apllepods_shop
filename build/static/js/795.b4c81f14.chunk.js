"use strict";(self.webpackChunkapplepods_react=self.webpackChunkapplepods_react||[]).push([[795,268],{1488:function(e,i,r){r.d(i,{Z:function(){return d}});var s=r(9439),c=r(2791);function n(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function d(){var e=(0,c.useState)(n()),i=(0,s.Z)(e,2),r=i[0],d=i[1];return(0,c.useEffect)((function(){function e(){d(n())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r}},4207:function(e,i,r){r.r(i),r.d(i,{default:function(){return a}});var s=r(7762),c=r(9439),n=r(8870),d=r(9705),t=(r(3268),r.p,r(1488),r(2791)),l=(r(6497),r(7576),r(184));var a=function(){var e=(0,t.useState)(["\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","\u0446\u0435\u043d\u0430",["url","url"]]),i=(0,c.Z)(e,2),r=i[0],a=i[1],o=(0,t.useState)(0),u=(0,c.Z)(o,2),h=u[0],p=u[1],j=(0,t.useState)("RUB"),x=(0,c.Z)(j,2),v=x[0],f=x[1];return(0,t.useEffect)((function(){fetch("https://pop.applepodsblack.ru/api/products?populate=deep").then((function(e){return e.json()})).then((function(e){var i=e.data,r=[],c=[];r[0]=i[window.GlobalProductId-1].attributes.name,r[1]=i[window.GlobalProductId-1].attributes.rub_price,c[0]="https://pop.applepodsblack.ru/"+i[window.GlobalProductId-1].attributes.main_photo.data.attributes.url;var n,d=(0,s.Z)(i[window.GlobalProductId-1].attributes.photo.data);try{for(d.s();!(n=d.n()).done;){var t=n.value;c.push("https://pop.applepodsblack.ru/"+t.attributes.url)}}catch(l){d.e(l)}finally{d.f()}r[2]=c,r[3]=i[window.GlobalProductId-1].attributes.eur_price,r[4]=i[window.GlobalProductId-1].attributes.byn_price,a(r),p(r[1])}))}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsxs)(d.tq,{slidesPerView:1,modules:[n.Rv],freeMode:!0,children:[(0,l.jsx)(d.o5,{children:(0,l.jsx)("img",{className:"product_img_carousel",src:r[2][0]})}),(0,l.jsx)(d.o5,{children:(0,l.jsx)("img",{className:"product_img_carousel",src:r[2][1]})}),(0,l.jsx)(d.o5,{children:(0,l.jsx)("img",{className:"product_img_carousel",src:r[2][2]})})]})}),(0,l.jsxs)("div",{id:"main_product_info",children:[(0,l.jsx)("p",{id:"main_info_product_name",children:r[0]}),(0,l.jsx)("div",{className:"select_currency",children:(0,l.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"})}),(0,l.jsxs)("div",{id:"main_info_product_price",children:[(0,l.jsx)("p",{id:"gold_price",children:h}),(0,l.jsxs)("div",{id:"main_info_currencylogo",children:[v,(0,l.jsxs)("select",{id:"currency_choose",onChange:function(e){f(e.target.value.toUpperCase()),"rub"==e.target.value?p(r[1]):"eur"==e.target.value?p(r[3]):p(r[4])},children:[(0,l.jsx)("option",{value:"rub",children:"\u20bd"}),(0,l.jsx)("option",{value:"eur",children:"\u20ac"}),(0,l.jsx)("option",{value:"byn",children:"Br"})]})]})]}),(0,l.jsxs)("div",{id:"choose_color",children:[(0,l.jsx)("p",{children:"\u0426\u0432\u0435\u0442 \u043a\u043e\u0440\u043f\u0443\u0441\u0430"}),(0,l.jsxs)("div",{className:"color_variants",children:[(0,l.jsx)("img",{className:"variant",src:r[2][0]}),(0,l.jsx)("img",{className:"variant",src:r[2][1]}),(0,l.jsx)("img",{className:"variant",src:r[2][2]})]})]}),(0,l.jsxs)("div",{id:"stories",children:[(0,l.jsx)("p",{children:"\u041f\u043e\u043b\u0435\u0437\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),(0,l.jsxs)(d.tq,{slidesPerView:3,children:[(0,l.jsx)(d.o5,{children:(0,l.jsx)("div",{className:"story_block",children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,l.jsx)(d.o5,{children:(0,l.jsx)("div",{className:"story_block",children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,l.jsx)(d.o5,{children:(0,l.jsx)("div",{className:"story_block",children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})})]})]})]})]})}},3268:function(e,i,r){r.r(i);var s=r(9439),c=r(8870),n=r(9705),d=r(2791),t=(r(6497),r(7576),r(1488)),l=r(184);i.default=function(){var e=(0,t.Z)(),i=(e.height,e.width),r=(0,d.useState)("teletype_block"),a=(0,s.Z)(r,2),o=a[0],u=a[1];return(0,d.useEffect)((function(){i<410?u("teletype_block_small"):i>=410&&u("teletype_block")})),(0,l.jsxs)("div",{id:"teletype_carousel_div",children:[(0,l.jsx)("div",{}),(0,l.jsxs)(n.tq,{modules:[c.Rv],freeMode:!0,slidesPerView:3,children:[(0,l.jsx)(n.o5,{children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,l.jsx)(n.o5,{children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,l.jsx)(n.o5,{children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,l.jsx)(n.o5,{children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,l.jsx)(n.o5,{children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})})]})]})}}}]);
//# sourceMappingURL=795.b4c81f14.chunk.js.map