import{__toESM as c}from"./chunk-DgAfPHQg.js";import{require_jsx_runtime as f}from"./jsx-runtime-D7bMTQeG.js";import{iconSizes as u}from"./Loader-D83W8G1W.js";import{HeightAnimator as l}from"./HeightAnimator-DF8znv78.js";import{styled_components_default as r}from"./styled-components-DbVO3u5J.js";import{chevron_down_default as x}from"./chevron-down-D6qx6nnR.js";import{Column_default as e}from"./Column-ekA0cfjc.js";import{RowBetween as _,Row_default as j}from"./Row-D0lmZ56K.js";var o=c(f());const g=r(j)`
  cursor: pointer;
  justify-content: flex-end;
  width: unset;
`,h=r(x)`
  color: ${({theme:t})=>t.neutral2};
  transform: ${({$isOpen:t})=>t?"rotate(180deg)":"rotate(0deg)"};
  transition: transform ${({theme:t})=>t.transition.duration.medium};
`,$=r(e)`
  padding-top: ${({theme:t})=>t.grids.md};
`,w=r(e)`
  padding: ${({$padding:t})=>t};
`;function k({header:t,button:i,children:d,testId:m,isOpen:n,padding:a,onToggle:s,iconSize:p="icon24"}){return(0,o.jsxs)(w,{$padding:a,children:[(0,o.jsxs)(_,{children:[t,(0,o.jsxs)(g,{"data-testid":m,onClick:s,"aria-expanded":n,children:[i,(0,o.jsx)(h,{$isOpen:n,size:u[p]})]})]}),(0,o.jsx)(l,{open:n,children:(0,o.jsx)($,{gap:"md",children:d})})]})}export{k as Expand};
