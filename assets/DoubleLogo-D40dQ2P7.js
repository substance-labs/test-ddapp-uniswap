import{__toESM as _}from"./chunk-DgAfPHQg.js";import{require_react as b}from"./react-CNoFhWkx.js";import{useColorSchemeFromSeed as C,zIndexes as L}from"./src-DOOtfpHS.js";import{isMobileApp as j}from"./index.web-BqgtOHN3.js";import{require_jsx_runtime as k}from"./jsx-runtime-D7bMTQeG.js";import{UniverseChainId as U}from"./utils-BX1Fu73x.js";import{buildCurrencyId as g,currencyAddress as I}from"./currencyId-Ci6selsx.js";import{Flex as w}from"./Loader-D83W8G1W.js";import{SplitLogo as S}from"./SplitLogo-Ct--07LT.js";import{useCurrencyInfo as h}from"./useCurrencyInfo-Bxa3J04d.js";import{NetworkLogo as M,STATUS_RATIO as z,TokenLogo as x}from"./TokenLogo-JlSSDr3Q.js";import{styled_components_default as A}from"./styled-components-DbVO3u5J.js";var T=_(b()),t=_(k());const N=A.div`
  --size: ${({$size:o})=>o};
  border-radius: 100px;
  color: ${({$textColor:o})=>o};
  background-color: ${({$backgroundColor:o})=>o};
  font-size: calc(var(--size) / 3);
  font-weight: 535;
  height: ${({$size:o})=>o??"24px"};
  line-height: ${({$size:o})=>o??"24px"};
  text-align: center;
  width: ${({$size:o})=>o??"24px"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;function q({currency:o,size:r,includeNetwork:e=!0}){var l;const{foreground:a,background:d}=C((o==null?void 0:o.name)??(o==null?void 0:o.symbol)??""),i=o==null?void 0:o.chainId,s=e&&i&&i!==U.Mainnet,u=Math.round(r*z),c=j?2:1.5;return(0,t.jsxs)(N,{$size:r+"px",$textColor:a,$backgroundColor:d,children:[o==null||(l=o.symbol)===null||l===void 0?void 0:l.toUpperCase().replace("$","").replace(/\s+/g,"").slice(0,3),s&&(0,t.jsx)(w,{bottom:-2,position:"absolute",right:-3,zIndex:L.mask,children:(0,t.jsx)(M,{borderWidth:c,chainId:i,size:u})})]})}const Q=(0,T.memo)(function({currencies:r,size:e=32,customIcon:l,includeNetwork:a=!0}){var d,i,s,u,c,f;const $=r[0]?g(r[0].chainId,I(r[0])):void 0,y=r[1]?g(r[1].chainId,I(r[1])):void 0,n=[h($),h(y)],p=!(!((d=n[0])===null||d===void 0)&&d.logoUrl),v=!(!((i=n[1])===null||i===void 0)&&i.logoUrl),m=a?((s=n[0])===null||s===void 0?void 0:s.currency.chainId)??null:null;return p&&v?(0,t.jsx)(q,{currency:r[0],size:e,includeNetwork:!!m}):p&&(!((u=n[1])===null||u===void 0)&&u.logoUrl)?(0,t.jsx)(x,{url:n[1].logoUrl,size:e,chainId:m}):v&&(!((c=n[0])===null||c===void 0)&&c.logoUrl)?(0,t.jsx)(x,{url:(f=n[0])===null||f===void 0?void 0:f.logoUrl,size:e,chainId:m}):(0,t.jsx)(S,{chainId:m,inputCurrencyInfo:n[0],outputCurrencyInfo:n[1],customIcon:l,size:e})});export{Q as DoubleCurrencyLogo};
