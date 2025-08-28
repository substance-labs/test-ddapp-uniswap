import{__commonJS as O,__toCommonJS as v,__toESM as P}from"./chunk-DgAfPHQg.js";import{require_react as R}from"./react-CNoFhWkx.js";import{init_styled_components_browser_esm as B,styled_components_browser_esm_exports as b,styled_components_default as x}from"./styled-components-DbVO3u5J.js";import{index_esm_exports as W,index_esm_exports$1 as q,index_esm_exports$2 as C,init_index_esm as M,init_index_esm$1 as F,init_index_esm$2 as E}from"./index.esm-D6PJCa7X.js";var S=O({"../../node_modules/reflexbox/styled-components/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Flex=e.Box=void 0;var i=m(R()),u=m((B(),v(b))),l=(F(),v(q)),f=h((E(),v(C))),d=m((M(),v(W)));function p(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return p=function(){return r},r}function h(r){if(r&&r.__esModule)return r;var a=p();if(a&&a.has(r))return a.get(r);var o={};if(r!=null){var c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){var _=c?Object.getOwnPropertyDescriptor(r,s):null;_&&(_.get||_.set)?Object.defineProperty(o,s,_):o[s]=r[s]}}return o.default=r,a&&a.set(r,o),o}function m(r){return r&&r.__esModule?r:{default:r}}var y=function(a){return(0,f.default)(a.sx)(a.theme)},$=function(a){return(0,f.default)(a.__css)(a.theme)},w=function(a){var o=a.theme,c=a.variant,s=a.tx,_=s===void 0?"variants":s;return(0,f.default)((0,f.get)(o,_+"."+c,(0,f.get)(o,c)))(o)},t=(0,u.default)("div",{shouldForwardProp:d.default})({boxSizing:"border-box",margin:0,minWidth:0},$,w,y,function(r){return r.css},(0,l.compose)(l.space,l.layout,l.typography,l.color,l.flexbox));e.Box=t;var n=(0,u.default)(t)({display:"flex"});e.Flex=n}}),D=O({"../../node_modules/rebass/styled-components/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Box",{enumerable:!0,get:function(){return u.Box}}),Object.defineProperty(e,"Flex",{enumerable:!0,get:function(){return u.Flex}}),e.Card=e.Image=e.Button=e.Link=e.Heading=e.Text=void 0;var i=f(R()),u=S();function l(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return l=function(){return t},t}function f(t){if(t&&t.__esModule)return t;var n=l();if(n&&n.has(t))return n.get(t);var r={};if(t!=null){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var c=a?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=t[o]}}return r.default=t,n&&n.set(t,r),r}function d(){return d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},d.apply(this,arguments)}var p=(0,i.forwardRef)(function(t,n){return i.default.createElement(u.Box,d({ref:n,tx:"text"},t))});e.Text=p;var h=(0,i.forwardRef)(function(t,n){return i.default.createElement(u.Box,d({ref:n,as:"h2",tx:"text",variant:"heading"},t,{__css:{fontSize:4,fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))});e.Heading=h;var m=(0,i.forwardRef)(function(t,n){return i.default.createElement(u.Box,d({ref:n,as:"a",variant:"link"},t))});e.Link=m;var y=(0,i.forwardRef)(function(t,n){return i.default.createElement(u.Box,d({ref:n,as:"button",tx:"buttons",variant:"primary"},t,{__css:{appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",px:3,py:2,color:"white",bg:"primary",border:0,borderRadius:4}}))});e.Button=y;var $=(0,i.forwardRef)(function(t,n){return i.default.createElement(u.Box,d({ref:n,as:"img"},t,{__css:{maxWidth:"100%",height:"auto"}}))});e.Image=$;var w=(0,i.forwardRef)(function(t,n){return i.default.createElement(u.Box,d({ref:n,variant:"card"},t))});e.Card=w}}),H=P(D());const g=x(H.Box)`
  width: ${({width:e})=>e??"100%"};
  display: flex;
  padding: 0;
  align-items: ${({align:e})=>e??"center"};
  justify-content: ${({justify:e})=>e??"flex-start"};
  padding: ${({padding:e})=>e};
  border: ${({border:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  gap: ${({gap:e,theme:i})=>e&&(i.grids[e]||e)};
`,A=x(g)`
  justify-content: space-between;
`,J=x(g)`
  flex-wrap: wrap;
  margin: ${({gap:e})=>e&&`-${e}`};
  justify-content: ${({justify:e})=>e&&e};

  & > * {
    margin: ${({gap:e})=>e} !important;
  }
`,G=x(g)`
  position: relative;
  width: fit-content;
  margin: ${({gap:e})=>e&&`-${e}`};
`;var K=g;export{J as AutoRow,A as RowBetween,G as RowFixed,K as Row_default};
