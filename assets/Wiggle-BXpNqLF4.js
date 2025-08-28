import{__toESM as i}from"./chunk-DgAfPHQg.js";import{require_react as f}from"./react-CNoFhWkx.js";import{useSporeColors as g}from"./src-DOOtfpHS.js";import{require_jsx_runtime as u}from"./jsx-runtime-D7bMTQeG.js";import{Flex as c}from"./Loader-D83W8G1W.js";var a=i(f()),e=i(u());const d=`
  @keyframes wiggle {
    0% {
      transform: rotate(0deg) scale(1);
    }
    30% {
      transform: rotate(20deg) scale(1.1);
    }
    60% {
      transform: rotate(-10deg) scale(1.2);
    }
    100% {
      transform: rotate(0deg) scale(1.15);
    }
  }
`,p=(0,a.forwardRef)(({iconColor:n,children:s,...m},l)=>{const[r,o]=(0,a.useState)(!1),t=g();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:d}),(0,e.jsx)(c,{ref:l,onHoverIn:()=>o(!0),onHoverOut:()=>o(!1),...m,style:{animationName:r?"wiggle":"none",animationDuration:"0.5s",animationTimingFunction:"ease-in-out",animationFillMode:"forwards",animationIterationCount:1,animationDirection:"normal",transition:"fill 0.3s ease-in-out",fill:r&&n||t.neutral1.val},children:s})]})});p.displayName="Wiggle";export{p as Wiggle};
