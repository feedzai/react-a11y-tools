"use strict";(globalThis.webpackChunkreact_a11y_tools_docs=globalThis.webpackChunkreact_a11y_tools_docs||[]).push([[48],{2559:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(3696),o=n(4164),i=n(1003),s=n(7559),r=n(1754),c=n(6588),l=n(1312),d=n(3104),u=n(5062);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(2540);function h(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,d.gk)();return(0,d.Mq)((({scrollY:t},a)=>{const i=a?.scrollY;i&&(o.current?o.current=!1:t>=i?(s(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,u.$)((e=>{e.location.hash&&(o.current=!0,n(!1))})),{shown:t,scrollToTop:()=>i(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,l.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(3109),x=n(6347),j=n(4581),f=n(6342),_=n(3465);function v(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function A({onClick:e}){return(0,b.jsx)("button",{type:"button",title:(0,l.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,l.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",g.collapseSidebarButton),onClick:e,children:(0,b.jsx)(v,{className:g.collapseSidebarButtonIcon})})}var k=n(5041),C=n(9532);const S=Symbol("EmptyContext"),T=a.createContext(S);function N({children:e}){const[t,n]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return(0,b.jsx)(T.Provider,{value:o,children:e})}var I=n(1422),B=n(9169),y=n(8774),w=n(2303);function L({collapsed:e,categoryLabel:t,onClick:n}){return(0,b.jsx)("button",{"aria-label":e?(0,l.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,l.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),"aria-expanded":!e,type:"button",className:"clean-btn menu__caret",onClick:n})}function E({item:e,onItemClick:t,activePath:n,level:i,index:c,...l}){const{items:d,label:u,collapsible:m,className:h,href:p}=e,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,f.p)(),j=function(e){const t=(0,w.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.Nr)(e):void 0),[e,t])}(e),_=(0,r.w8)(e,n),v=(0,B.ys)(p,n),{collapsed:g,setCollapsed:A}=(0,I.u)({initialState:()=>!!m&&(!_&&e.collapsed)}),{expandedItem:k,setExpandedItem:N}=function(){const e=(0,a.useContext)(T);if(e===S)throw new C.dV("DocSidebarItemsExpandedStateProvider");return e}(),E=(e=!g)=>{N(e?null:c),A(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const o=(0,C.ZC)(e);(0,a.useEffect)((()=>{e&&!o&&t&&n(!1)}),[e,o,t,n])}({isActive:_,collapsed:g,updateCollapsed:E}),(0,a.useEffect)((()=>{m&&null!=k&&k!==c&&x&&A(!0)}),[m,k,c,A,x]),(0,b.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":g},h),children:[(0,b.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v}),children:[(0,b.jsx)(y.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!p&&m,"menu__link--active":_}),onClick:m?n=>{t?.(e),p?E(!1):(n.preventDefault(),E())}:()=>{t?.(e)},"aria-current":v?"page":void 0,role:m&&!p?"button":void 0,"aria-expanded":m&&!p?!g:void 0,href:m?j??"#":j,...l,children:u}),p&&m&&(0,b.jsx)(L,{collapsed:g,categoryLabel:u,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(I.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(U,{items:d,tabIndex:g?-1:0,onItemClick:t,activePath:n,level:i+1})})]})}var M=n(6654),H=n(3186);const G={menuExternalLink:"menuExternalLink_NmtK"};function W({item:e,onItemClick:t,activePath:n,level:a,index:i,...c}){const{href:l,label:d,className:u,autoAddBaseUrl:m}=e,h=(0,r.w8)(e,n),p=(0,M.A)(l);return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(a),"menu__list-item",u),children:(0,b.jsxs)(y.A,{className:(0,o.A)("menu__link",!p&&G.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:m,"aria-current":h?"page":void 0,to:l,...p&&{onClick:t?()=>t(e):void 0},...c,children:[d,!p&&(0,b.jsx)(H.A,{})]})},d)}const P={menuHtmlItem:"menuHtmlItem_M9Kj"};function R({item:e,level:t,index:n}){const{value:a,defaultStyle:i,className:r}=e;return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(t),i&&[P.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:a}},n)}function D({item:e,...t}){switch(e.type){case"category":return(0,b.jsx)(E,{item:e,...t});case"html":return(0,b.jsx)(R,{item:e,...t});default:return(0,b.jsx)(W,{item:e,...t})}}function F({items:e,...t}){const n=(0,r.Y)(e,t.activePath);return(0,b.jsx)(N,{children:n.map(((e,n)=>(0,b.jsx)(D,{item:e,index:n,...t},n)))})}const U=(0,a.memo)(F),V={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Y({path:e,sidebar:t,className:n}){const i=function(){const{isActive:e}=(0,k.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,l.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",V.menu,i&&V.menuWithAnnouncementBar,n),children:(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(U,{items:t,activePath:e,level:1})})})}const K="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",q="sidebarHidden_VK0M",O="sidebarLogo_isFc";function J({path:e,sidebar:t,onCollapse:n,isHidden:a}){const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:s}}}=(0,f.p)();return(0,b.jsxs)("div",{className:(0,o.A)(K,i&&z,a&&q),children:[i&&(0,b.jsx)(_.A,{tabIndex:-1,className:O}),(0,b.jsx)(Y,{path:e,sidebar:t}),s&&(0,b.jsx)(A,{onClick:n})]})}const Q=a.memo(J);var X=n(5600),Z=n(9876);const $=({sidebar:e,path:t})=>{const n=(0,Z.M)();return(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(U,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function ee(e){return(0,b.jsx)(X.GX,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(Q,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe({toggleSidebar:e}){return(0,b.jsx)("div",{className:ae.expandButton,title:(0,l.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,l.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e,children:(0,b.jsx)(v,{className:ae.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function se({children:e}){const t=(0,c.t)();return(0,b.jsx)(a.Fragment,{children:e},t?.name??"noSidebar")}function re({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:i}=(0,x.zy)(),[r,c]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,p.O)()&&c(!0),n((e=>!e))}),[n,r]);return(0,b.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,ie.docSidebarContainer,t&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&t&&c(!0)},children:(0,b.jsx)(se,{children:(0,b.jsxs)("div",{className:(0,o.A)(ie.sidebarViewport,r&&ie.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:e,path:i,onCollapse:l,isHidden:r}),r&&(0,b.jsx)(oe,{toggleSidebar:l})]})})})}const ce={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function le({hiddenSidebarContainer:e,children:t}){const n=(0,c.t)();return(0,b.jsx)("main",{className:(0,o.A)(ce.docMainContainer,(e||!n)&&ce.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,e&&ce.docItemWrapperEnhanced),children:t})})}const de={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue({children:e}){const t=(0,c.t)(),[n,o]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[t&&(0,b.jsx)(re,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}),(0,b.jsx)(le,{hiddenSidebarContainer:n,children:e})]})]})}var me=n(3363);function be(e){const t=(0,r.B5)(e);if(!t)return(0,b.jsx)(me.A,{});const{docElement:n,sidebarName:a,sidebarItems:l}=t;return(0,b.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,b.jsx)(c.V,{name:a,items:l,children:(0,b.jsx)(ue,{children:n})})})}},3363:(e,t,n)=>{n.d(t,{A:()=>r});n(3696);var a=n(4164),o=n(1312),i=n(1107),s=n(2540);function r({className:e}){return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",e),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);