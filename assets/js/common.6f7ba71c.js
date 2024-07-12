"use strict";(globalThis.webpackChunkreact_a11y_tools_docs=globalThis.webpackChunkreact_a11y_tools_docs||[]).push([[76],{2594:(e,t,n)=>{n.d(t,{Zx:()=>c,Xy:()=>l,Pd:()=>a});var o=n(3696);const r={browser:"browser_y9Ks",browser__header:"browser__header_w5dH","browser__address-bar":"browser__address-bar_Il1i","browser__menu-icon":"browser__menu-icon_vWG4",browser__body:"browser__body_m1YU",row:"row_QhZw",buttons:"buttons_oLl9",right:"right_qGsg",dot:"dot_vm3H",bar:"bar_cvx5"};var s=n(2540);function c({children:e,minHeight:t}){return(0,s.jsxs)("article",{className:r.browser,style:{minHeight:t},"data-testid":"fdz-js-docs-browser-window",tabIndex:-1,children:[(0,s.jsxs)("div",{className:r.browser__header,children:[(0,s.jsxs)("div",{className:r.buttons,children:[(0,s.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:r["browser__address-bar"]}),(0,s.jsx)("div",{className:r["browser__menu-icon"],children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar})]})})]}),(0,s.jsx)("div",{className:r.browser__body,children:e})]})}const i="subtitle_HHy5",a=({children:e})=>(0,s.jsx)("h2",{className:i,children:e});var d=n(3622);const u="table_PmtG",l=({name:e})=>{const{props:t}=(e=>{const[t,r]=(0,o.useState)({});return(0,d.U)((()=>{let t=!1;try{Promise.resolve().then(n.t.bind(n,9568,19)).then((n=>{if(!t){t=!0;const o=n.default["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e)).map((e=>({props:e.props,description:e.description})));r(o[0])}})).catch((()=>console.error(`Not found DocgenInfo for ${e}.`)))}catch(o){console.error(o)}return()=>{t=!0}}),[e]),t})(e);return!t||Object.keys(t).length<=0?null:(0,s.jsxs)("table",{className:u,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:Object.keys(t).map((e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:e})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:t[e].type?.name})}),(0,s.jsx)("td",{children:t[e].defaultValue?(0,s.jsx)("code",{children:t[e].defaultValue.value}):(0,s.jsx)("span",{children:"-"})}),(0,s.jsx)("td",{children:t[e].required?"Yes":"No"}),(0,s.jsx)("td",{children:t[e].description})]},e)))})]})}},7225:(e,t,n)=>{n.d(t,{e:()=>s});n(3696);var o=n(2540);const r={id:"fdz-js-route-announcer",styles:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"},s=({id:e=r.id,styles:t=r.styles,"aria-live":n=r["aria-live"],"aria-atomic":s=r["aria-atomic"],message:c=r.message})=>{return console.log,(0,o.jsx)("div",{id:e,"aria-live":n,"aria-atomic":s,className:"fdz-css-announcer","data-testid":"fdz-js-announcer",style:t,children:("string"==typeof(i=c)||i instanceof String)&&0!==c.length?(0,o.jsx)("p",{children:c}):null});var i}},2267:(e,t,n)=>{n.d(t,{jD:()=>d});var o=n(3696);var r=n(7225),s=n(2540);const c="content-focus-wrapper",i=c,a={navigation:"Navigated to",fallback:"new page at"};const d=({id:e=i,pathname:t,action:n=a,children:d})=>{const[u,l]=(0,o.useState)(""),f=function(e){const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current=e})),t.current}(t),p=(0,o.useCallback)((()=>{const o=!!document.title,r=function(e){const t=document.querySelector(`#${e} h1`);return t&&t.textContent?t.textContent:void 0}(e||c);let s=`${n.fallback} ${t}`;o&&(s=document.title),"string"==typeof r&&r.length>1&&(s=r);const i=`${n.navigation} ${s}`;l(i)}),[n,e,t]);return(0,o.useEffect)((()=>{f&&f!==t&&p()}),[t,f,p]),(0,s.jsxs)("div",{id:e,style:{outline:"none"},tabIndex:-1,children:[d,(0,s.jsx)(r.e,{message:u})]})}},2187:(e,t,n)=>{n.d(t,{A:()=>s});n(3696);var o=n(3622),r=n(2540);const s=()=>((0,o.U)((()=>{var e;return e="fdz-css-no-mouse",document.documentElement.classList.add(e),()=>{(e=>{document.documentElement.classList.remove(e)})("fdz-css-no-mouse")}}),[]),(0,r.jsx)("div",{"data-testid":"fdz-js-audit"}))},1691:(e,t,n)=>{n.d(t,{Wp:()=>p,iQ:()=>b,OC:()=>_});var o=n(3696);const r={direction:"horizontal",selectedId:null,lastActionOrigin:null,tabStops:[]},s=(0,o.createContext)({state:{...r},dispatch:()=>{}}),c=2;function i(e,t){const{tabStops:n}=e,o=t.payload;if(0===n.length)return{...e,selectedId:o.id,tabStops:[o]};if(n.findIndex((e=>e.id===o.id))>=0)return e;let r=n.findIndex((e=>!!(e.domElementRef.current.compareDocumentPosition(o.domElementRef.current)&c)));-1===r&&(r=n.length);const s=[...n.slice(0,r),o,...n.slice(r)];return{...e,tabStops:s}}function a(e,t){const{id:n}=t.payload,o=e.tabStops.filter((e=>e.id!==n));return o.length===e.tabStops.length?e:{...e,selectedId:e.selectedId===n?0===o.length?null:o[0].id:e.selectedId,tabStops:o}}function d(e,t){const{id:n}=t.payload,o=e.tabStops.findIndex((e=>e.id===n));if(-1===o)return e;const r="TAB_TO_PREVIOUS"===t.type?o<=0?e.tabStops.length-1:o-1:o>=e.tabStops.length-1?0:o+1;return{...e,lastActionOrigin:"keyboard",selectedId:e.tabStops[r].id}}function u(e,t){if(!e.tabStops.length)return e;const n=e.tabStops.length-1,o="TAB_TO_FIRST"===t.type?0:n;return{...e,lastActionOrigin:"keyboard",selectedId:e.tabStops[o].id}}function l(e,t){switch(t.type){case"REGISTER":return{...i(e,t)};case"UNREGISTER":return{...a(e,t)};case"TAB_TO_PREVIOUS":case"TAB_TO_NEXT":return{...d(e,t)};case"TAB_TO_FIRST":case"TAB_TO_LAST":return{...u(e,t)};case"CLICKED":return{...e,lastActionOrigin:"mouse",selectedId:t.payload.id};case"UPDATE_SELECTED":return{...e,lastActionOrigin:"keyboard",selectedId:t.payload.id};case"CHANGE_DIRECTION":return{...e,direction:t.payload.direction};default:return e}}var f=n(2540);function p({children:e,direction:t="vertical"}){const[n,c]=(0,o.useReducer)(l,r);(0,o.useEffect)((()=>{c({type:"CHANGE_DIRECTION",payload:{direction:t}})}),[t,c]);const i={state:n,dispatch:c};return(0,f.jsx)(s.Provider,{value:i,children:e})}var m=n(3622);let h=0;function _(e,t,n){const r=(0,o.useRef)(n||`${"react-a11y-tools-rover-index_"}_${++h}`);const c=(0,o.useContext)(s);(0,m.U)((()=>{if(t)return;const n=r.current;return c.dispatch({type:"REGISTER",payload:{id:n,domElementRef:e}}),()=>{c.dispatch({type:"UNREGISTER",payload:{id:n}})}}),[t]);const i=(0,o.useCallback)((e=>{const t={id:r.current};switch(function(e,t){if("horizontal"===t||"both"===t){if("ArrowLeft"===e.key)return"PREVIOUS";if("ArrowRight"===e.key)return"NEXT"}if("vertical"===t||"both"===t){if("ArrowUp"===e.key)return"PREVIOUS";if("ArrowDown"===e.key)return"NEXT"}return null}(e,c.state.direction)){case"PREVIOUS":c.dispatch({type:"TAB_TO_PREVIOUS",payload:t});break;case"NEXT":c.dispatch({type:"TAB_TO_NEXT",payload:t})}switch(e.key){case"Home":c.dispatch({type:"TAB_TO_FIRST"}),e.preventDefault();break;case"End":c.dispatch({type:"TAB_TO_LAST"}),e.preventDefault()}}),[c.state.direction,c.dispatch]),a=(0,o.useCallback)((()=>{c.dispatch({type:"CLICKED",payload:{id:r.current}})}),[c.dispatch]),d=!t&&r.current===c.state.selectedId;return[d?0:-1,d&&null!==c.state.lastActionOrigin,i,a,c]}var v=n(1689);function b(e,t=!0,n=!0){(0,o.useEffect)((()=>{if(t){const t="current"in e?e.current:e;t&&(n?t.focus():(0,v.e)(t))}}),[e,t])}},3420:(e,t,n)=>{n.d(t,{DZ:()=>u,$t:()=>d});var o=n(3696);const r=1,s=6;function c(e){return!0===function(e,t,n=0){return t<e&&e<n||n<e&&e<t}(e,r,s)?e:Math.min(Math.max(r,e),s)}const i=(0,o.createContext)(r);var a=n(2540);function d({dangerouslySetHeadingLevel:e,children:t}){const n=(0,o.useContext)(i),r=c(void 0!==e?e:n+1);return(0,a.jsx)(i.Provider,{value:r,children:t})}const u=(0,o.forwardRef)((({children:e,offset:t,...n},r)=>{const s=`h${c((0,o.useContext)(i)+(void 0!==t?t:0))}`,a={"data-testid":"fdz-js-heading",...n,ref:r};return(0,o.createElement)(s,a,e)}))},9534:(e,t,n)=>{function o(e){if(function(){if(null==r){r=!1;try{document.createElement("div").focus({get preventScroll(){return r=!0,!0}})}catch(e){}}return r}())e.focus({preventScroll:!0});else{const t=function(e){let t=e.parentNode;const n=[],o=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==o;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return o instanceof HTMLElement&&n.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),n}(e);e.focus(),function(e){for(const{element:t,scrollTop:n,scrollLeft:o}of e)t.scrollTop=n,t.scrollLeft=o}(t)}}n.d(t,{e:()=>o});let r=null},1689:(e,t,n)=>{n.d(t,{e:()=>o.e});n(7791);var o=n(9534)},7791:(e,t,n)=>{n.d(t,{v:()=>s});const o=new Map,r=new Set;function s(e){requestAnimationFrame((()=>{0===o.size?e():r.add(e)}))}},292:(e,t,n)=>{n.d(t,{c_:()=>j,DZ:()=>N.DZ,yq:()=>d,Dw:()=>C,s6:()=>M,v2:()=>u,bc:()=>Y});var o=n(3696),r=n(7225);const s={message:"",politeness:"polite",setMessage:()=>{}},c=(0,o.createContext)(s);var i=n(2540);function a(e,t){switch(t.politeness){case"polite":case"assertive":return{politeness:t.politeness,message:t.message};default:return e}}const d=({children:e})=>{const[t,n]=(0,o.useReducer)(a,{message:s.message,politeness:s.politeness});return(0,i.jsxs)(c.Provider,{value:{...t,setMessage:n},children:[e,(0,i.jsx)(r.e,{"aria-live":t.politeness,id:"notifications-announcer",message:t.message})]})};function u(){return(0,o.useContext)(c)}n(2267),n(2187);var l=n(3622),f=n(430),p=n(9534),m=n(7791);function h(e,t){return t?.some((t=>t.contains(e)))}function _(e,t){for(const n of t.values())if(h(e,n.current))return!0;return!1}const v=(0,o.createContext)(null),b=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],y=b.join(",")+",[tabindex]";b.push('[tabindex]:not([tabindex="-1"])');const E=b.join(':not([tabindex="-1"]),');function w(e,{tabbable:t}){const n=[],o=t?E:y;if(e)for(const r of e){r.matches(o)&&n.push(r);const e=Array.from(r.querySelectorAll(o));n.push(...e)}return n}function x(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(n){}}else try{!function(e){const t=document.activeElement;(0,m.v)((()=>{document.activeElement===t&&document.contains(e)&&(0,p.e)(e)}))}(e)}catch(n){}}function g(e){x(w(e,{tabbable:!0})[0])}function T({items:e,restoreFocus:t,contain:n}){(0,l.U)((()=>{const o=e.current,r=document.activeElement,s=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return;const t=document.activeElement;if(!h(t,o))return;const n=function(e,t){const n=t?.tabbable?E:y,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>t?.from?.contains(e)?NodeFilter.FILTER_REJECT:e.matches(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});t?.from&&(o.currentNode=t.from);return o}(document.body,{tabbable:!0});n.currentNode=t;let s=e.shiftKey?n.previousNode():n.nextNode();if((!s||!h(s,o))&&r){n.currentNode=r;do{s=e.shiftKey?n.previousNode():n.nextNode()}while(h(s,o));e.preventDefault(),e.stopPropagation(),s?s.focus():t.blur()}};return n||document.addEventListener("keydown",s,!0),()=>{n||document.removeEventListener("keydown",s,!0),t&&r&&requestAnimationFrame((()=>{document.body.contains(r)&&x(r)}))}}),[e,t,n])}const j=({children:e,contain:t,restoreFocus:n,autoFocus:r})=>{const s=(0,o.useRef)(null),c=(0,o.useRef)(null),a=(0,o.useRef)([]);(0,l.U)((()=>{let e=s?.current?.nextSibling;const t=[];for(;e&&e!==c.current;)t.push(e),e=e.nextSibling;return a.current=t,window.__react_a11y_tools_scopes__.add(a),()=>{window.__react_a11y_tools_scopes__.delete(a)}}),[e]),function(e,t){const n=(0,o.useRef)(),r=(0,o.useRef)(null);(0,o.useEffect)((()=>{const o=e.current;if(!t)return;const s=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return;const t=document.activeElement;if(!h(t,o))return;const n=w(o,{tabbable:!0}),r=n.indexOf(t),s=n.length-1;let c=null;c=e.shiftKey?r<=0?n[s]:n[r-1]:r===s?n[0]:n[r+1],e.preventDefault(),c&&x(c,!0)},c=t=>{const{__react_a11y_tools_scopes__:o}=window;let{__react_a11y_tools_activeScope__:r}=window;_(t.target,o)?(r=e,n.current=t.target):n.current?n.current.focus():r&&g(r.current)},i=t=>{const{__react_a11y_tools_scopes__:o}=window;r.current=requestAnimationFrame((()=>{_(document.activeElement,o)||(window.__react_a11y_tools_activeScope__=e,n.current=t.target,n?.current?.focus())}))};return document.addEventListener("keydown",s,!1),document.addEventListener("focusin",c,!1),o?.forEach((e=>e.addEventListener("focusin",c,!1))),o?.forEach((e=>e.addEventListener("focusout",i,!1))),()=>{document.removeEventListener("keydown",s,!1),document.removeEventListener("focusin",c,!1),o?.forEach((e=>e.removeEventListener("focusin",c,!1))),o?.forEach((e=>e.removeEventListener("focusout",i,!1)))}}),[e,t]),(0,o.useEffect)((()=>()=>{if(r.current)return cancelAnimationFrame(r.current)}),[r])}(a,t),T({items:a,restoreFocus:n,contain:t}),function(e,t){let{__react_a11y_tools_activeScope__:n}=window;(0,o.useEffect)((()=>{t&&(n=e,h(document.activeElement,n.current)||g(e.current))}),[e,t])}(a,r);const d=function(e){return{focusFirst(t={}){const n=w(e.current,t);if(n){const e=n[0];return e.focus(),e}},focusPrevious(t={}){const n=t.from||document.activeElement,o=w(e.current,t).reverse();let r=o.find((e=>!!(n&&n.compareDocumentPosition(e)&(Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINED_BY))));if(!r&&t.wrap&&(r=o[0]),r)return r.focus(),r},focusNext(t={}){const n=t.from||document.activeElement,o=w(e.current,t);let r=o.find((e=>!!(n&&n.compareDocumentPosition(e)&(Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY))));if(!r&&t.wrap&&(r=o[0]),r)return r.focus(),r},focusLast(t={}){const n=w(e.current,t);if(n){const e=n[n.length-1];return e.focus(),e}}}}(a);return(0,i.jsxs)(v.Provider,{value:d,children:[(0,i.jsx)("span",{hidden:!0,ref:s,"data-testid":"fdz-js-focus-manager-guard-initial"}),e,(0,i.jsx)("span",{hidden:!0,ref:c,"data-testid":"fdz-js-focus-manager-guard-final"})]})};f.B&&(window.__react_a11y_tools_scopes__||(window.__react_a11y_tools_scopes__=new Set));var N=n(3420);function S(e){let t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){for(const n of e)if(n){const e=S(n);e&&(t+=t?" "+e:e)}}else for(const[n,o]of Object.entries(e))o&&(t+=t?" "+n:n);return t}const k="item_S90d",I={target:"#content",text:"Skip to main content",as:"link"},L=({target:e,text:t,as:n})=>{const r=function(e){const t=(0,o.useRef)();return t.current||(t.current={instance:e()}),t.current.instance}((()=>function(...e){let t="";for(const n of e){const e=S(n);e&&(t+=t?" "+e:e)}return t}(k,"fdz-css-skip-links__item"))),s=(0,o.useCallback)((t=>{if("Enter"===t.key||" "===t.key){const t=document.querySelector(e);t?.focus()}}),[e]);return"button"===n?(0,i.jsx)("button",{role:"link",type:"button",onKeyUp:s,className:r,"data-testid":"fdz-js-skip-link",children:t}):(0,i.jsx)("a",{href:e,className:r,"data-testid":"fdz-js-skip-link",children:t})};L.defaultProps=I;const O={items:[{...I}]},C=({items:e})=>function(){const t=e&&e.length>0?e.map((e=>(0,i.jsx)(L,{...e},e.target))):(0,i.jsx)(L,{as:I.as,target:I.target,text:I.text});return(0,i.jsx)("div",{className:"fdz-css-skip-links","data-testid":"fdz-js-skip-links",children:t})}();C.defaultProps=O;n(1691);var R=n(6579),A=n(2218);const P={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",margin:"-1px",overflow:"hidden",height:"1px",width:"1px",padding:"0",position:"absolute",whiteSpace:"nowrap"},D="fdz-js-visually-hidden",M=({as:e,id:t,"data-testid":n=D,style:r,children:s,...c})=>{const a=(0,A.u)(t),{current:d}=(0,o.useRef)((0,R.M)(n,a)),u={...P,...r},l=e||"span";return(0,i.jsx)(l,{id:d,"data-testid":n,...c,style:u,children:s})};n(1689);function U(e){return(0,o.useCallback)((t=>{t.defaultPrevented||e&&(t.stopPropagation(),t.preventDefault())}),[e])}const z=new Set;let F=null,K=!1,H=!1,B=!1;function G(e,t){for(const n of z)n(e,t)}function q(e){H=!0,function(e){return!(e.metaKey||!/^Mac/i.test((window.navigator.userAgentData||window.navigator).platform)&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(F="keyboard",G("keyboard",e))}function $(e){F="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(H=!0,G("pointer",e))}function V(e){(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType})(e)&&(H=!0,F="virtual")}function W(e){e.target!==window&&e.target!==document&&(H||B||(F="virtual",G("virtual",e)),H=!1,B=!1)}function X(){H=!1,B=!0}function Z(){if("undefined"==typeof window||K)return;const e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){H=!0,e.apply(this,arguments)},document.addEventListener("keydown",q,!0),document.addEventListener("keyup",q,!0),document.addEventListener("click",V,!0),window.addEventListener("focus",W,!0),window.addEventListener("blur",X,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",$,!0),document.addEventListener("pointermove",$,!0),document.addEventListener("pointerup",$,!0)):(document.addEventListener("mousedown",$,!0),document.addEventListener("mousemove",$,!0),document.addEventListener("mouseup",$,!0)),K=!0}"undefined"!=typeof document&&("loading"!==document.readyState?Z():document.addEventListener("DOMContentLoaded",Z));function Y(e){const t=(0,o.useMemo)((()=>function(e,t){switch(!0){case!t&&e:return{disabled:!0,"aria-disabled":void 0};case t&&e:return{"aria-disabled":!0,disabled:void 0};default:return{"aria-disabled":void 0,disabled:!1}}}(e.disabled,e.focusable)),[e.disabled,e.focusable]),n=U(e.disabled),r=U(e.disabled),s=U(e.disabled);return{...e,...t,onClickCapture:n,onMouseDownCapture:r,onKeyPressCapture:s}}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(3696);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}},430:(e,t,n)=>{n.d(t,{B:()=>o});const o=typeof window<"u"&&typeof window.document<"u"},6579:(e,t,n)=>{function o(...e){return e.filter((e=>null!==e)).join("--")}n.d(t,{M:()=>o})},2218:(e,t,n)=>{n.d(t,{u:()=>l});var o=n(3696);var r=n(3622);function s(e){!function(e){(0,o.useEffect)(e,[])}((()=>{e()}))}var c=n(6579);let i=!1,a=0;const d=function(e){return"function"==typeof e}(o.useId);function u(){return++a}function l(e,t){var n,a;const{current:l}=(0,o.useRef)(t),f=d&&!e?null==(a=(n=o).useId)?void 0:a.call(n):null,p=e??(i?u():null),[m,h]=(0,o.useState)(p),_=f||m;return(0,r.U)((()=>{null===m&&h(u())}),[]),s((()=>{!1===i&&(i=!0)})),(0,o.useMemo)((()=>{if(!_)return;const e=String(_);return l?(0,c.M)(l,e):e}),[_,l])}},3622:(e,t,n)=>{n.d(t,{U:()=>r});var o=n(3696);const r=n(430).B?o.useLayoutEffect:o.useEffect}}]);