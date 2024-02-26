"use strict";(globalThis.webpackChunkreact_a11y_tools_docs=globalThis.webpackChunkreact_a11y_tools_docs||[]).push([[332],{9644:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=s(2540),i=s(8453),t=(s(9269),s(2594)),r=s(4200);const c={sidebar_position:1,title:"Messages Announcer"},l=void 0,o={id:"feedback/messages-announcer",title:"Messages Announcer",description:"Announce content changes.",source:"@site/docs/feedback/messages-announcer.mdx",sourceDirName:"feedback",slug:"/feedback/messages-announcer",permalink:"/react-a11y-tools/docs/feedback/messages-announcer",draft:!1,unlisted:!1,editUrl:"https://github.com/feedzai/react-a11y-tools/docs/feedback/messages-announcer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Messages Announcer"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-a11y-tools/docs/getting-started"},next:{title:"Route Announcer",permalink:"/react-a11y-tools/docs/feedback/route-announcer"}},d={},h=[{value:"Usage",id:"usage",level:3},{value:"useMessageAnnouncer",id:"usemessageannouncer",level:3},{value:"Global State",id:"global-state",level:3},{value:"Working alongside Route Announcer",id:"working-alongside-route-announcer",level:3}];function u(e){const a={admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Pd,{children:"Announce content changes."}),"\n",(0,n.jsx)(a.p,{children:"It is common on single-page web apps that assistive technologies completely ignore significant changes happening inside a page, mainly because we manipulate the DOM with JavasScript."}),"\n",(0,n.jsxs)(a.p,{children:["Like the ",(0,n.jsx)(a.code,{children:"RouteAnnouncer"}),", with the ",(0,n.jsx)(a.code,{children:"MessagesAnnoucer"}),", we create an ARIA live region that the assistive technologies will monitor. So, any changes that you push to this component, a screen-reader will announce them."]}),"\n",(0,n.jsx)(t.Zx,{children:(0,n.jsx)(r.X,{})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(a.admonition,{title:"How to",type:"note",children:(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Start your screen-reader (like ",(0,n.jsx)(a.code,{children:"VoiceOver"})," or ",(0,n.jsx)(a.code,{children:"Narrator"}),")"]}),"\n",(0,n.jsx)(a.li,{children:'Focus on the "Pay" button.'}),"\n",(0,n.jsx)(a.li,{children:"Notice that a message will be displayed."}),"\n",(0,n.jsx)(a.li,{children:"However, the screen-reader will output a different and more meaningful message."}),"\n"]})}),"\n",(0,n.jsx)(a.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.p,{children:"You can use component to wrap the contents of a form, for instance.\nThis renders the form and, alongside it, the ARIA live region."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";\n...\nreturn (\n\t<MessagesAnnouncer>\n\t\t<form onSubmit={handleOnSubmit}>\n\t\t\t...\n\t\t</form>\n\t</MessagesAnnouncer>\n);\n'})}),"\n",(0,n.jsx)(a.h3,{id:"usemessageannouncer",children:"useMessageAnnouncer"}),"\n",(0,n.jsxs)(a.p,{children:["To dispatch messages inside a functional component, you can take advantage of the ",(0,n.jsx)(a.code,{children:"useMessageAnnouncer"})," custom hook."]}),"\n",(0,n.jsx)(a.p,{children:"First, import the hook at the top of the file:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'import { useMessageAnnouncer } from "@feedzai/react-a11y-tools";\n'})}),"\n",(0,n.jsx)(a.p,{children:"Then, after you've defined your component, save the hook to a constant:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"function YourComponent(props) {\n\tconst setMessage = useMessageAnnouncer();\n"})}),"\n",(0,n.jsx)(a.p,{children:"Finally, use the function whenever you'd like to announce something."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'function onClick() {\n\tsetMessage({\n\t\tmessage: "The user has performed an action that it will be announced!",\n\t\tpoliteness: "assertive",\n\t});\n}\n\nreturn (\n\t<button type="button" onClick={onClick}>\n\t\tSend Message\n\t</button>\n);\n'})}),"\n",(0,n.jsx)(a.h3,{id:"global-state",children:"Global State"}),"\n",(0,n.jsxs)(a.p,{children:["The component takes advantage of React's ",(0,n.jsx)(a.code,{children:"Context"})," API to use the updater function anywhere inside the ",(0,n.jsx)(a.code,{children:"MessagesAnnouncer"})," children.\nTo have the announcer available for the whole app, consider wrapping the content with it. This way, you can access the ",(0,n.jsx)(a.code,{children:"setMessage"})," function from any component inside."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";\n...\nreturn (\n\t<MessagesAnnouncer>\n\t\t<YourComponent />\n\t</MessagesAnnouncer>\n);\n'})}),"\n",(0,n.jsx)(a.h3,{id:"working-alongside-route-announcer",children:"Working alongside Route Announcer"}),"\n",(0,n.jsxs)(a.p,{children:["You can use the ",(0,n.jsx)(a.code,{children:"MessageAnnouncer"})," along with the ",(0,n.jsx)(a.code,{children:"RouteAnnouncer"}),".\nHowever, we recommend that you still place the ",(0,n.jsx)(a.code,{children:"RouteAnnouncer"})," at the top and then inside it, the ",(0,n.jsx)(a.code,{children:"MessagesAnnouncer"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";\n...\nreturn (\n\t<RouteAnnouncer pathname={pathname}>\n\t\t<MessagesAnnouncer>\n\t\t\t<YourComponent />\n\t\t</MessagesAnnouncer>\n\t</RouteAnnouncer>\n);\n'})})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4200:(e,a,s)=>{s.d(a,{X:()=>m,h:()=>y});var n=s(3696),i=s(4164),t=s(9269);const r="page-wrapper_JXLQ",c="card_zrhy",l="card__inputs_T5QB",o="card__form_ZqS_",d="error-message_U3Sz";var h=s(2540);const u=({hasSubmitted:e,onSubmit:a})=>{const{setMessage:s}=(0,t.v2)();return(0,h.jsxs)("form",{className:o,onSubmit:e=>e.preventDefault(),children:[(0,h.jsxs)("fieldset",{children:[(0,h.jsx)("legend",{children:"Credit Card Form"}),(0,h.jsxs)("div",{className:"lg-input",children:[(0,h.jsx)("label",{htmlFor:"cardNumber",children:"Card Number"}),(0,h.jsx)("input",{className:"number-input",id:"cardNumber",maxLength:19,style:{backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"16px 18px",backgroundPosition:"98% 50%",cursor:"auto"},type:"text",defaultValue:"4111111111111111"})]}),(0,h.jsxs)("div",{className:"lg-input",children:[(0,h.jsx)("label",{htmlFor:"cardName",children:"Card Holder's Name"}),(0,h.jsx)("input",{className:"name-input",id:"cardName",maxLength:24,type:"text",defaultValue:"Jo\xe3o Dias"})]}),(0,h.jsxs)("div",{className:"med-input",children:[(0,h.jsx)("label",{htmlFor:"cardMonth",children:"Expiration Date"}),(0,h.jsxs)("select",{"aria-label":"Month",className:"month-input",id:"cardMonth",children:[(0,h.jsx)("option",{disabled:!0,value:8,children:"Month"}),(0,h.jsx)("option",{value:1,children:"01 - January"}),(0,h.jsx)("option",{value:2,children:"02 - February"}),(0,h.jsx)("option",{value:3,children:"03 - March"}),(0,h.jsx)("option",{value:4,children:"04 - April"}),(0,h.jsx)("option",{value:5,children:"05 - May"}),(0,h.jsx)("option",{value:6,children:"06 - June"}),(0,h.jsx)("option",{value:7,children:"07 - July"}),(0,h.jsx)("option",{value:8,children:"08 - August"}),(0,h.jsx)("option",{value:9,children:"09 - September"}),(0,h.jsx)("option",{value:10,children:"10 - October"}),(0,h.jsx)("option",{value:11,children:"11 - November"}),(0,h.jsx)("option",{value:12,children:"12 - December"})]}),(0,h.jsxs)("select",{"aria-label":"Year",className:"year-input",id:"cardYear",children:[(0,h.jsx)("option",{disabled:!0,value:0,children:"Year"}),(0,h.jsx)("option",{value:2021,children:"2021"}),(0,h.jsx)("option",{value:2022,children:"2022"}),(0,h.jsx)("option",{value:2023,children:"2023"}),(0,h.jsx)("option",{value:2024,children:"2024"}),(0,h.jsx)("option",{value:2025,children:"2025"}),(0,h.jsx)("option",{value:2026,children:"2026"}),(0,h.jsx)("option",{value:2027,children:"2027"}),(0,h.jsx)("option",{value:2028,children:"2028"}),(0,h.jsx)("option",{value:2029,children:"2029"}),(0,h.jsx)("option",{value:2030,children:"2030"}),(0,h.jsx)("option",{value:2031,children:"2031"}),(0,h.jsx)("option",{value:2032,children:"2032"}),(0,h.jsx)("option",{value:2033,children:"2033"})]})]}),(0,h.jsxs)("div",{className:"sm-input",children:[(0,h.jsx)("label",{htmlFor:"cardCvv",children:"CVV"}),(0,h.jsx)("input",{className:"cvv-input",id:"cardCvv",maxLength:3,defaultValue:"123"})]}),(0,h.jsx)("button",{type:"button",className:"lg-input",disabled:e,onClick:()=>{a(),s({message:"The money it's on the way! Thank you!",politeness:"assertive"})},children:"Pay 9.99\u20ac"})]}),e&&(0,h.jsx)("fieldset",{children:(0,h.jsx)("p",{className:(0,i.A)(d,"lg-input"),children:"Sent!"})})]})},m=()=>{const[e,a]=n.useState(!1);return(0,h.jsx)("div",{className:r,children:(0,h.jsx)("div",{className:c,children:(0,h.jsx)("div",{className:l,children:(0,h.jsx)(t.yq,{children:(0,h.jsx)(u,{hasSubmitted:e,onSubmit:()=>a(!0)})})})})})};var x=s(4625),p=s(6347),_=s(8112);const g={"visually-hidden":"visually-hidden_sHhs",page:"page_yzo3",wrapper:"wrapper_RNfb",container:"container_M3Pt",product:"product_MOdx",product__detail:"product__detail_0aSS",product__detail__wrapper:"product__detail__wrapper_WXdu",rating:"rating_FRiw",rating__wrapper:"rating__wrapper_PiOY",rating__container:"rating__container_CcMP",rating__list:"rating__list_QA0_",rating__item:"rating__item_Eie9",rating__link:"rating__link_g7Do","call-to-action":"call-to-action_aXq6",rating__range:"rating__range_DXK3",rating__range__input:"rating__range__input_qYaw",rating__range__right:"rating__range__right_cFmp",rating__range__left:"rating__range__left_tZzI",rating__input__wrapper:"rating__input__wrapper_eSKp",rating__button:"rating__button_TMG0","images-list":"images-list_IYu1",image:"image_AfIt",image__item:"image__item_H05l",image__figure:"image__figure_igB9",title:"title_Os7g",metadata:"metadata_gX2R","description-list":"description-list_SQn5",intro:"intro_AH01","read-more":"read-more__loq",cover:"cover_ay6T",anchor:"anchor_dZSj",nav:"nav_RpHR","featured-articles":"featured-articles_kgg9",card:"card__O0i",card__container:"card__container_G1gl",card__image:"card__image_E_9q",card__content:"card__content_hIKk",card__tag:"card__tag_pxRz",card__heading:"card__heading_x2TC",card__heading__link:"card__heading__link_HZIB",card__summary:"card__summary_e_j0",card__metadata:"card__metadata_Y359",card__author:"card__author_fGaL",card__duration:"card__duration_vgtE"},j=()=>(0,h.jsx)("div",{className:g.page,children:(0,h.jsxs)("article",{className:g.wrapper,children:[(0,h.jsx)("div",{className:g.container,children:(0,h.jsx)("h1",{className:g.title,children:"Blog"})}),(0,h.jsx)("div",{className:g.container,children:(0,h.jsxs)("div",{className:g["featured-articles"],children:[(0,h.jsx)("article",{className:g.card,children:(0,h.jsxs)("div",{className:g.card__container,children:[(0,h.jsx)("img",{alt:"7 Steps to Get Professional Facial Results At Home",className:g.card__image,src:"https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),(0,h.jsxs)("div",{className:g.card__content,children:[(0,h.jsx)("p",{className:g.card__tag,children:"Fashion"}),(0,h.jsx)("h3",{className:g.card__heading,children:(0,h.jsx)(x.k2,{to:"/article-1",className:g.card__heading__link,"data-testid":"fdz-js-route-announcer-card-link",children:"7 Steps to Get Professional Facial Results At Home"})}),(0,h.jsx)("p",{className:g.card__summary,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}),(0,h.jsxs)("div",{className:g.card__metadata,children:[(0,h.jsx)("p",{className:g.card__author,children:"By Segun Adebayo"}),(0,h.jsxs)(x.k2,{className:g.card__duration,to:"/article-1",children:[(0,h.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z",clipRule:"evenodd"})}),"3 min read"]})]})]})]})}),(0,h.jsx)("article",{className:g.card,children:(0,h.jsxs)("div",{className:g.card__container,children:[(0,h.jsx)("img",{alt:"The Best Excuses To Spend A Cozy Valentine\u2019s Day In",className:g.card__image,src:"https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),(0,h.jsxs)("div",{className:g.card__content,children:[(0,h.jsx)("p",{className:g.card__tag,children:"Valentine"}),(0,h.jsx)("h3",{className:g.card__heading,children:(0,h.jsx)(x.k2,{to:"/article-2",className:g.card__heading__link,children:"The Best Excuses To Spend A Cozy Valentine\u2019s Day In"})}),(0,h.jsx)("p",{className:g.card__summary,children:"As much as I love an over-the-top, romantic Valentine\u2019s date, part of me is looking"}),(0,h.jsxs)("div",{className:g.card__metadata,children:[(0,h.jsx)("p",{className:g.card__author,children:"By Segun Adebayo"}),(0,h.jsxs)(x.k2,{to:"/article-2",className:g.card__duration,children:[(0,h.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z",clipRule:"evenodd"})}),"3 min read"]})]})]})]})}),(0,h.jsx)("article",{className:g.card,children:(0,h.jsxs)("div",{className:g.card__container,children:[(0,h.jsx)("img",{alt:"Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020",className:g.card__image,src:"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),(0,h.jsxs)("div",{className:g.card__content,children:[(0,h.jsx)("p",{className:g.card__tag,children:"My Style"}),(0,h.jsx)("h3",{className:g.card__heading,children:(0,h.jsx)(x.k2,{to:"/product",className:g.card__heading__link,children:"Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"})}),(0,h.jsx)("p",{className:g.card__summary,children:"HAAAAPPY 2021! It\u2019s the first Monday of the year and I have never been so ready for"}),(0,h.jsxs)("div",{className:g.card__metadata,children:[(0,h.jsx)("p",{className:g.card__author,children:"By Segun Adebayo"}),(0,h.jsxs)("p",{className:g.card__duration,children:[(0,h.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z",clipRule:"evenodd"})}),"3 min read"]})]})]})]})})]})})]})}),v=()=>((0,n.useEffect)((()=>{document.title=""}),[]),(0,h.jsx)("div",{className:g.page,children:(0,h.jsxs)("article",{className:g.wrapper,children:[(0,h.jsxs)("div",{className:g.container,children:[(0,h.jsx)("h2",{className:g.title,children:"7 Steps to Get Professional Facial Results At Home"}),(0,h.jsxs)("div",{className:g.metadata,children:[(0,h.jsxs)("dl",{className:g["description-list"],children:[(0,h.jsx)("dt",{children:(0,h.jsx)("strong",{children:"Date"})}),(0,h.jsx)("dd",{children:(0,h.jsx)("time",{dateTime:"2020-06-17",children:"June 17, 2020"})}),(0,h.jsx)("dt",{children:(0,h.jsx)("strong",{children:"Author"})}),(0,h.jsx)("dd",{children:(0,h.jsx)("a",{href:"/0",rel:"author",children:"Segun Adebayo"})})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:g.intro,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam accusamus voluptate! Accusantium aperiam totam voluptatum at fugiat doloribus odit dolore fuga."}),(0,h.jsx)("p",{className:g.intro,children:(0,h.jsxs)(x.k2,{className:g["read-more"],to:"/","data-testid":"fdz-js-route-announer-go-back",children:[(0,h.jsx)("span",{children:"Go Back"}),(0,h.jsx)("svg",{className:"icon",viewBox:"0 0 32 32","aria-hidden":"true",children:(0,h.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:16,cy:16,r:"15.5"}),(0,h.jsx)("line",{x1:10,y1:18,x2:16,y2:12}),(0,h.jsx)("line",{x1:16,y1:12,x2:22,y2:18})]})})]})})]})]})]}),(0,h.jsx)("div",{className:g.container,children:(0,h.jsx)("img",{className:g.cover,src:"https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=60",width:"640",alt:"",loading:"lazy"})})]})})),f=()=>(0,h.jsx)("div",{className:g.page,children:(0,h.jsxs)("article",{className:g.wrapper,children:[(0,h.jsxs)("div",{className:g.container,children:[(0,h.jsx)("h1",{className:g.title,children:"The Best Excuses To Spend A Cozy Valentine\u2019s Day In"}),(0,h.jsxs)("div",{className:g.metadata,children:[(0,h.jsxs)("dl",{className:g["description-list"],children:[(0,h.jsx)("dt",{children:(0,h.jsx)("strong",{children:"Date"})}),(0,h.jsx)("dd",{children:(0,h.jsx)("time",{dateTime:"2020-06-17",children:"June 17, 2020"})}),(0,h.jsx)("dt",{children:(0,h.jsx)("strong",{children:"Author"})}),(0,h.jsx)("dd",{children:(0,h.jsx)("a",{href:"/article",rel:"author",children:"Olivia Gribben"})})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:g.intro,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam accusamus voluptate! Accusantium aperiam totam voluptatum at fugiat doloribus odit dolore fuga."}),(0,h.jsx)("p",{className:g.intro,children:(0,h.jsxs)(x.k2,{className:g["read-more"],to:"/","data-testid":"fdz-js-route-announer-go-back",children:[(0,h.jsx)("span",{children:"Go Back"}),(0,h.jsx)("svg",{className:"icon",viewBox:"0 0 32 32","aria-hidden":"true",children:(0,h.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:16,cy:16,r:"15.5"}),(0,h.jsx)("line",{x1:10,y1:18,x2:16,y2:12}),(0,h.jsx)("line",{x1:16,y1:12,x2:22,y2:18})]})})]})})]})]})]}),(0,h.jsx)("div",{className:g.container,children:(0,h.jsx)("img",{className:g.cover,src:"https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&h=360&q=60",width:"640",height:"360",alt:"",loading:"lazy"})})]})}),N=()=>((0,n.useEffect)((()=>{document.title="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"}),[]),(0,h.jsx)("div",{className:g.page,children:(0,h.jsx)("article",{className:g.wrapper,children:(0,h.jsxs)("div",{className:g.product,children:[(0,h.jsxs)("ul",{className:g["images-list"],children:[(0,h.jsx)("li",{className:g.image__item,children:(0,h.jsx)("figure",{className:g.image__figure,children:(0,h.jsx)("img",{src:"https://images.unsplash.com/photo-1610177635157-90812f61c5a5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480",width:560,height:560,alt:"A kitchen table",className:g.image,loading:"lazy"})})}),(0,h.jsx)("li",{className:g.image__item,children:(0,h.jsx)("figure",{className:g.image__figure,children:(0,h.jsx)("img",{src:"https://images.unsplash.com/photo-1610415958517-e320250c90d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480",width:560,height:560,alt:"A basket of tropical fruits",className:g.image,loading:"lazy"})})}),(0,h.jsx)("li",{className:g.image__item,children:(0,h.jsx)("figure",{className:g.image__figure,children:(0,h.jsx)("img",{src:"https://images.unsplash.com/photo-1612155690984-dd460cf41838?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480",width:560,height:560,alt:"A woman wearing a backpack in the snow",className:g.image,loading:"lazy"})})})]}),(0,h.jsx)("div",{className:g.product__detail__wrapper,children:(0,h.jsxs)("div",{className:g.product__detail,children:[(0,h.jsx)("h2",{className:g.title,children:"Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"}),(0,h.jsxs)("div",{className:g.rating,children:[(0,h.jsxs)("div",{className:g.rating__wrapper,children:[(0,h.jsxs)("p",{className:g["visually-hidden"],children:["The rating of this product is"," ",(0,h.jsx)("span",{className:g.rating__value,children:"4.5"})," out of 5"]}),(0,h.jsx)("div",{className:g.rating__container,children:(0,h.jsxs)("ul",{className:g.rating__list,children:[(0,h.jsx)("li",{className:g.rating__item,children:(0,h.jsx)("div",{className:g.rating__icon,children:(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:(0,h.jsx)("polygon",{points:"12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489",fill:"currentColor"})})})}),(0,h.jsx)("li",{className:g.rating__item,children:(0,h.jsx)("div",{className:g.rating__icon,children:(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:(0,h.jsx)("polygon",{points:"12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489",fill:"currentColor"})})})}),(0,h.jsx)("li",{className:g.rating__item,children:(0,h.jsx)("div",{className:g.rating__icon,children:(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:(0,h.jsx)("polygon",{points:"12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489",fill:"currentColor"})})})}),(0,h.jsx)("li",{className:g.rating__item,children:(0,h.jsx)("div",{className:g.rating__icon,children:(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:(0,h.jsx)("polygon",{points:"12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489",fill:"currentColor"})})})}),(0,h.jsx)("li",{className:g.rating__item,children:(0,h.jsx)("div",{className:g.rating__icon,children:(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:(0,h.jsx)("polygon",{points:"12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489",fill:"currentColor"})})})})]})})]}),(0,h.jsx)("a",{href:"/0",className:g.rating__link,children:"65 reviews"})]}),(0,h.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae sapiente eaque!"}),(0,h.jsxs)("div",{className:g.rating__cta,children:[(0,h.jsxs)("div",{className:g.rating__range,children:[(0,h.jsx)("label",{className:g["visually-hidden"],htmlFor:"product-qty-input",children:"Quantity:"}),(0,h.jsxs)("div",{className:g.rating__input__wrapper,children:[(0,h.jsx)("input",{className:g.rating__range__input,type:"number",name:"product-qty-input",id:"product-qty-input",min:0,max:10,step:1,defaultValue:1}),(0,h.jsx)("div",{className:g.rating__range__left,children:(0,h.jsx)("button",{type:"button","aria-label":"Increase Number",children:(0,h.jsx)("svg",{className:"icon",viewBox:"0 0 12 12","aria-hidden":"true",children:(0,h.jsx)("path",{d:"M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z"})})})}),(0,h.jsx)("div",{className:g.rating__range__right,children:(0,h.jsx)("button",{type:"button","aria-label":"Decrease Number",children:(0,h.jsx)("svg",{className:"icon",viewBox:"0 0 12 12","aria-hidden":"true",children:(0,h.jsx)("path",{d:"M11,7H1A1,1,0,0,1,1,5H11a1,1,0,0,1,0,2Z"})})})})]})]}),(0,h.jsx)("button",{className:g.rating__button,children:"Add to Cart - $49"})]})]})})]})})})),b=()=>{const{pathname:e}=(0,p.zy)();return(0,h.jsx)(_.jD,{pathname:e,children:(0,h.jsxs)("div",{className:g.page,children:[(0,h.jsx)("header",{children:(0,h.jsxs)("nav",{className:g.nav,children:[(0,h.jsx)(x.k2,{className:g.anchor,to:"/",children:"Blog"}),(0,h.jsx)(x.k2,{className:g.anchor,to:"/article-1",children:"Article 1"}),(0,h.jsx)(x.k2,{className:g.anchor,to:"/article-2",children:"Article 2"}),(0,h.jsx)(x.k2,{className:g.anchor,to:"/product",children:"Product"})]})}),(0,h.jsx)("main",{children:(0,h.jsxs)(p.dO,{children:[(0,h.jsx)(p.qh,{exact:!0,path:"/",component:j}),(0,h.jsx)(p.qh,{exact:!0,path:"/article-1",component:v}),(0,h.jsx)(p.qh,{exact:!0,path:"/article-2",component:f}),(0,h.jsx)(p.qh,{exact:!0,path:"/product",component:N})]})})]})})},y=()=>(0,h.jsx)(x.I9,{basename:"/",children:(0,h.jsx)(b,{})})}}]);