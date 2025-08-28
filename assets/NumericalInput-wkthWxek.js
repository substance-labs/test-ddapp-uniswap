import{__toESM as p}from"./chunk-DgAfPHQg.js";import{require_react as w}from"./react-CNoFhWkx.js";import{useCurrentLocale as $}from"./constants-CrXoXfFH.js";import{require_jsx_runtime as _}from"./jsx-runtime-D7bMTQeG.js";import{styled_components_default as u}from"./styled-components-DbVO3u5J.js";import{loadingOpacityMixin as v}from"./styled-qLLlrMEu.js";function b(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var s=p(w()),k=p(_());const C=u.input`
  color: ${({error:e,theme:o})=>e?o.critical:o.neutral1};
  pointer-events: ${({disabled:e})=>e?"none":"auto"};
  width: 0;
  position: relative;
  font-weight: 485;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  font-size: ${({fontSize:e})=>e??"28px"};
  text-align: ${({align:e})=>e&&e};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  -webkit-appearance: textfield;
  text-align: right;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`;function L(e){return new Intl.NumberFormat(e).format(1.1)[1]===","}const S=RegExp("^\\d*(?:\\\\[.])?\\d*$");function V(e,o){const n=e.split(".");return!!o&&n.length>1&&n[1].length>o}const f=(0,s.forwardRef)(({value:e,onUserInput:o,placeholder:n,prependSymbol:a,maxDecimals:m,testId:g,...d},h)=>{const x=$(),l=t=>{if(t===""||S.test(b(t))){if(V(t,m))return;o(t)}},c=(t=>{const[r,i]=L(x)?[/\./g,","]:[/,/g,"."];return t.toString().replace(r,i)})(e);return(0,k.jsx)(C,{...d,ref:h,value:a&&e?a+c:c,"data-testid":g,onChange:t=>{if(a){const r=t.target.value,i=r.toString().includes(a)?r.toString().slice(a.length,r.toString().length+1):r;l(i.replace(/,/g,"."))}else l(t.target.value.replace(/,/g,"."))},inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:n||"0",minLength:1,maxLength:79,spellCheck:"false"})});f.displayName="Input";const z=s.memo(f),W=u(z)`
  ${v};
  text-align: left;
  font-size: 36px;
  font-weight: 485;
  max-height: 44px;
`;export{z as MemoizedInput,C as StyledInput,W as StyledNumericalInput,V as isInputGreaterThanDecimals,L as localeUsesComma};
