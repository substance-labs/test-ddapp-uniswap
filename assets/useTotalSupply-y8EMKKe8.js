import{__toESM as t}from"./chunk-DgAfPHQg.js";import{require_react as n}from"./react-CNoFhWkx.js";import{Trans as m}from"./src-DOOtfpHS.js";import{require_jsx_runtime as s}from"./jsx-runtime-D7bMTQeG.js";import{CurrencyAmount as a,init_sdk_core_esm as l}from"./utils-BX1Fu73x.js";import{erc20Abi as p}from"./call-CTDbaN-t.js";import{assume0xAddress as u}from"./wagmi-CsUiFCSO.js";import{useReadContract as c}from"./useReadContract-DodDFlY8.js";import{styled_components_default as f}from"./styled-components-DbVO3u5J.js";import{ThemedText as x}from"./text-CK4eXdYc.js";import{AutoColumn as e}from"./Column-ekA0cfjc.js";var i=t(s());const v=f.div`
  border: 1px solid ${({theme:r})=>r.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function I(){return(0,i.jsx)(e,{gap:"lg",justify:"center",children:(0,i.jsx)(e,{gap:"md",style:{width:"100%"},children:(0,i.jsx)(v,{children:(0,i.jsx)(x.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,i.jsx)(m,{i18nKey:"v2.notAvailable"})})})})})}l();var _=t(n());function M(r){const d=r!=null&&r.isToken?u(r.address):void 0,{data:o}=c({address:d,chainId:r==null?void 0:r.chainId,abi:p,functionName:"totalSupply"});return(0,_.useMemo)(()=>r!=null&&r.isToken&&o?a.fromRawAmount(r,o.toString()):void 0,[r,o])}export{I as V2Unsupported,M as useTotalSupply};
