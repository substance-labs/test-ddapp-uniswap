import{__toESM as i}from"./chunk-DgAfPHQg.js";import{require_react as v}from"./react-CNoFhWkx.js";import{useCurrentLocale as I}from"./constants-CrXoXfFH.js";import{require_jsx_runtime as R}from"./jsx-runtime-D7bMTQeG.js";import{init_styled_components_browser_esm as S,styled_components_browser_esm_default as w}from"./styled-components-DbVO3u5J.js";import{StyledInput as C,localeUsesComma as L}from"./NumericalInput-wkthWxek.js";import{NumericalInputFontStyle as $}from"./shared-EXoQIK7V.js";var c=i(v());S();var V=i(R());const p=(0,c.forwardRef)(({value:r,onUserInput:l,placeholder:m,testId:s,maxDecimals:o=2,...u},f)=>{const n=`^\\d*(\\.\\d{0,${o}})?$`,a="^\\d*$",d=RegExp(n),h=RegExp(a),_=I(),g=e=>{const t=e.replace(/,/g,".");(t===""||(o<=0?h:d).test(t))&&l(t)},x=(e=>{const[t,y]=L(_)?[/\./g,","]:[/,/g,"."];return e.toString().replace(t,y)})(r);return(0,V.jsx)(C,{minLength:1,maxLength:o+2,...u,ref:f,value:x,"data-testid":s,onChange:e=>{g(e.target.value)},inputMode:"numeric",autoComplete:"off",autoCorrect:"off",type:"text",pattern:o<=0?a:n,placeholder:m||"0",spellCheck:"false"})});p.displayName="Input";const j=c.memo(p),P=w(j)`
  max-height: 84px;
  max-width: 100%;
  width: ${({$width:r})=>`${r??43}px`}; // this value is from the size of a 0 which is the default value
  ${$}

  ::placeholder {
    opacity: 1;
  }
`;export{P as StyledPercentInput};
