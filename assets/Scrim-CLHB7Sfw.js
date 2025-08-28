import{__toESM as p}from"./chunk-DgAfPHQg.js";import{require_react as u}from"./react-CNoFhWkx.js";import{require_jsx_runtime as d}from"./jsx-runtime-D7bMTQeG.js";import{Z_INDEX as c}from"./zIndex-CmEE31Ab.js";import{useDeviceDimensions as v}from"./Loader-D83W8G1W.js";import{breakpoints as y}from"./breakpoints-B-pYqY7D.js";import{styled_components_default as h}from"./styled-components-DbVO3u5J.js";import{require_prop_types as g}from"./prop-types-BL9JsGr9.js";var a=p(u()),s=p(g());function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},l.apply(this,arguments)}function _(e,t){if(e==null)return{};var o=b(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}var m=(0,a.forwardRef)(function(e,t){var o=e.color,r=o===void 0?"currentColor":o,n=e.size,i=n===void 0?24:n,f=_(e,["color","size"]);return a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});m.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])};m.displayName="Plus";var W=m,w=p(d());const x=h.div`
  z-index: ${({$zIndex:e})=>e??c.modalBackdrop};
  overflow: hidden;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.scrim};

  opacity: 0;
  pointer-events: none;
  @media only screen and (max-width: ${({theme:e,$maxWidth:t})=>`${t??e.breakpoint.md}px`}) {
    opacity: ${({$open:e})=>e?1:0};
    pointer-events: ${({$open:e})=>e?"auto":"none"};
    transition: opacity ${({theme:e})=>e.transition.duration.medium} ease-in-out;
  }
`,q=e=>{const{fullWidth:t}=v();return(0,a.useEffect)(()=>(t&&t<y.md&&e.$open&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="visible"}),[e.$open,t]),(0,w.jsx)(x,{...e})};export{q as Scrim,W as plus_default};
