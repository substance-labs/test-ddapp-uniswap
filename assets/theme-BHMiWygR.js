import{__toESM as m}from"./chunk-DgAfPHQg.js";import{require_react as l}from"./react-CNoFhWkx.js";import{opacify as n,s as x}from"./src-DOOtfpHS.js";import{require_jsx_runtime as g}from"./jsx-runtime-D7bMTQeG.js";import{breakpoints as h}from"./breakpoints-B-pYqY7D.js";import{useIsDarkMode as f}from"./ThemeToggle-BcuKj11V.js";import{$e as _,Ae as p,Le as b}from"./styled-components-DbVO3u5J.js";import{curriedMix as T}from"./polished.es-BASfrnSv.js";import{colors as a,darkTheme as y,lightTheme as O}from"./colors-DAHeqJj_.js";function d(e){return{deprecated_yellow3:a.yellow600,deprecated_accentWarning:a.gold200,deprecated_accentFailureSoft:n(12,e?a.critical_dark:a.critical_light),deprecated_accentTextLightPrimary:a.gray50,deprecated_deepShadow:e?"12px 16px 24px rgba(0, 0, 0, 0.24), 12px 8px 12px rgba(0, 0, 0, 0.24), 4px 4px 8px rgba(0, 0, 0, 0.32);":"8px 12px 20px rgba(51, 53, 72, 0.04), 4px 6px 12px rgba(51, 53, 72, 0.02), 4px 4px 8px rgba(51, 53, 72, 0.04);",deprecated_shallowShadow:"0px 0px 10px 0px rgba(34, 34, 34, 0.04);",deprecated_stateOverlayHover:n(8,a.gray300),deprecated_stateOverlayPressed:n(24,a.gray200),deprecated_hoverDefault:n(8,a.gray300)}}const k=d(!1),w=d(!0),S=1.95;function D(e,t){return x(e,t)>=S}function W(e){return D(e,a.white)?a.white:a.black}function $(e,t){return T(.12,e,t)}var j=m(l()),H=m(g());const s={deprecated_upToExtraSmall:500,deprecated_upToSmall:720,deprecated_upToMedium:960,deprecated_upToLarge:1280},M=1200,N=Object.keys(s).reduce((e,t)=>(e[t]=(c,r,o)=>p`
    @media (max-width: ${s[t]}px) {
      ${p(c,r,o)}
    }
  `,e),{}),A={duration:{slow:"500ms",medium:"250ms",fast:"125ms"},timing:{ease:"ease",in:"ease-in",out:"ease-out",inOut:"ease-in-out"}},E={hover:.6,click:.4,disabled:.5,enabled:1},I={light:"blur(12px)"},L={code:"courier, courier new, serif"},v={xs:"4px",sm:"8px",md:"12px",lg:"24px",xl:"32px"};function P(e){return{darkMode:e,grids:v,fonts:L,shadow1:"#000",deprecated_mediaWidth:N,mobileBottomBarHeight:48,maxWidth:M,breakpoint:h,transition:A,blur:I,opacity:E,text:{heading:{fontFamily:"inherit",fontWeight:485}}}}function R(e,t){const[c,r]=e?[y,w]:[O,k];return{...q(c,t),...r,...P(e)}}function q(e,t){if(!t)return e;const c=Object.keys(t).reduce((o,u)=>{const i=u;return t[i]!==void 0&&(o[i]=t[i]),o},{}),r={...e,...c};return(t.accent1||t.surface1)&&!t.accent2&&(r.accent2=$(r.accent1,r.surface1)),t.accent1&&!t.neutralContrast&&(r.neutralContrast=W(r.accent1)),r}function U({children:e,...t}){const c=f(),r=(0,j.useMemo)(()=>R(c,t),[c,JSON.stringify(t)]);return(0,H.jsx)(b,{theme:r,children:e})}const Y=_`
  html {
    color: ${({theme:e})=>e.neutral1};
    background-color: ${({theme:e})=>e.background} !important;
  }

 summary::-webkit-details-marker {
    display:none;
  }

  a {
    color: ${({theme:e})=>e.accent1}; 
  }
`;export{U as ThemeProvider,Y as ThemedGlobalStyle};
