import{__toESM as s}from"./chunk-DgAfPHQg.js";import{require_react as p}from"./react-CNoFhWkx.js";import{Ae as n,styled_components_default as e}from"./styled-components-DbVO3u5J.js";import{Row_default as u}from"./Row-D0lmZ56K.js";import{MemoizedInput as l}from"./NumericalInput-wkthWxek.js";var a=s(p());const o=n`
  text-align: left;
  font-size: ${({$fontSize:t})=>`${t??70}px`};
  font-weight: 500;
  line-height: 60px;
`,x=e(u)`
  position: relative;
  max-width: 100%;
  width: max-content;
`,$=e(l)`
  max-height: 84px;
  max-width: ${({$hasPrefix:t})=>t?"calc(100% - 43px)":"100%"};
  width: ${({$width:t})=>`${t??43}px`}; // this value is from the size of a 0 which is the default value
  font-size: ${({$fontSize:t})=>`${t??70}px`};
  ${o}

  ::placeholder {
    opacity: 1;
  }
`,y=e.span`
  position: absolute;
  visibility: hidden;
  bottom: 0px;
  right: 0px;
  ${o}
`,w=e.span`
  user-select: none;
  color: ${({theme:t})=>t.neutral1};
  ${o}
  ${({showPlaceholder:t})=>t&&n`
      color: ${({theme:i})=>i.neutral3};
    `}
`;function _(t){const[i,r]=(0,a.useState)("");return(0,a.useLayoutEffect)(()=>{requestAnimationFrame(()=>r(t))},[t]),i}export{o as NumericalInputFontStyle,y as NumericalInputMimic,w as NumericalInputSymbolContainer,x as NumericalInputWrapper,$ as StyledNumericalInput,_ as useWidthAdjustedDisplayValue};
