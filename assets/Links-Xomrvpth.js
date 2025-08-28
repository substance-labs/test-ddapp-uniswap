import{__toESM as c}from"./chunk-DgAfPHQg.js";import{require_react as u}from"./react-CNoFhWkx.js";import{Link as p}from"./chunk-QMGIS6GS-B91ZVkXt.js";import{require_jsx_runtime as f}from"./jsx-runtime-D7bMTQeG.js";import{InterfaceEventName as k}from"./interface-BdpC4qOF.js";import{sendAnalyticsEvent as h}from"./send.web-CrSXW2rw.js";import{Ae as _,styled_components_default as l}from"./styled-components-DbVO3u5J.js";import{ClickableStyle as m}from"./clickable-D5qUCIhr.js";const y={"bscscan.com":!0,"etherscan.io":!0,"sepolia.etherscan.io":!0,"optimistic.etherscan.io":!0,"goerli-optimism.etherscan.io":!0,"arbiscan.io":!0,"snowtrace.io":!0};function d(t){try{const e=new URL(t);if(y[e.hostname]){const n=e.pathname.split("/").map(o=>/0x[a-fA-F0-9]+/.test(o)?"***":o).join("/");return`${e.protocol}//${e.hostname}${n}`}return t}catch{return t}}var L=c(u()),b=c(f());const s=_`
  color: ${({theme:t})=>t.accent1};
  stroke: ${({theme:t})=>t.accent1};
  font-weight: 500;
`,z=l(p)`
  ${m}
  ${s}
`;function a({label:t}){h(k.ExternalLinkClicked,{label:t})}function E(t){const{target:e,href:r}=t.currentTarget,n=d(r);e==="_blank"||t.ctrlKey||t.metaKey?a({label:n}):(t.preventDefault(),a({label:n}))}const $=l.a`
  ${m}
  ${s}
`;function R({target:t="_blank",href:e,rel:r="noopener noreferrer",...n}){const o=(0,L.useCallback)(i=>{E(i),n.onClick&&n.onClick(i)},[n]);return(0,b.jsx)($,{target:t,rel:r,href:e,onClick:o,...n})}export{R as ExternalLink,z as StyledInternalLink};
