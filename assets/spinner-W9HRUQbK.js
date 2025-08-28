import{Ae as o,We as r,init_styled_components_browser_esm as s,styled_components_browser_esm_default as e}from"./styled-components-DbVO3u5J.js";s();const i=r`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,n=o`
  animation: 2s ${i} linear infinite;
`,m=e.img`
  ${n}
  width: 16px;
  height: 16px;
`,a=e.svg`
  ${n}
`,_=e(m)`
  height: ${({size:t})=>t};
  width: ${({size:t})=>t};
`;export{_ as CustomLightSpinner,a as SpinnerSVG};
