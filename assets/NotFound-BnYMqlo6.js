import{__toESM as x}from"./chunk-DgAfPHQg.js";import{Button as g,Trans as a}from"./src-DOOtfpHS.js";import{useNavigate as _}from"./chunk-QMGIS6GS-B91ZVkXt.js";import{require_jsx_runtime as f}from"./jsx-runtime-D7bMTQeG.js";import{InterfacePageName as u}from"./page-zDkoCQe4.js";import{useIsDarkMode as h}from"./ThemeToggle-BcuKj11V.js";import{useIsMobile as j}from"./useIsMobile-Cq3RSgOi.js";import{styled_components_default as r}from"./styled-components-DbVO3u5J.js";import{ThemedText as t}from"./text-CK4eXdYc.js";import{Trace_default as v}from"./Trace-DgHN3Ak9.js";var b="/assets/404-page-dark-n4B4o30n.png",y="/assets/404-page-light-DERjIa-D.png",e=x(f());const I="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignSelf-stretch ",k=r.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,n=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,H=r(n)`
  gap: 30px;
`,M=r(n)`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.lg}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function K({title:i,subtitle:s,actionButton:d}){const p=h(),o=j(),l=_(),m=o?t.LargeHeader:t.Hero,c=o?t.HeadlineMedium:t.HeadlineLarge;return(0,e.jsx)(M,{children:(0,e.jsxs)(v,{logImpression:!0,page:u.NotFound,children:[(0,e.jsxs)(H,{children:[(0,e.jsxs)(n,{children:[i??(0,e.jsx)(m,{children:"404"}),s??(0,e.jsx)(c,{color:"neutral2",children:(0,e.jsx)(a,{i18nKey:"common.pageNotFound"})})]}),(0,e.jsx)(k,{src:p?b:y,alt:"Liluni"})]}),d??(0,e.jsx)("div",{className:I,children:(0,e.jsx)(g,{onPress:()=>l("/"),variant:"branded",children:(0,e.jsx)(a,{i18nKey:"notFound.oops"})})})]})})}export{K as NotFound};
