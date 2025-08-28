import{Ae as e,We as s}from"./styled-components-DbVO3u5J.js";const m=e`
  display: flex;
  flex-flow: column nowrap;
`,f=e`
  display: flex;
  flex-flow: row nowrap;
`;let t=(function(o){return o[o.slow=500]="slow",o[o.medium=250]="medium",o[o.fast=125]="fast",o})({});const n={duration:{slow:`${t.slow}ms`,medium:`${t.medium}ms`,fast:`${t.fast}ms`},timing:{ease:"ease",in:"ease-in",out:"ease-out",inOut:"ease-in-out"}},a=s`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,l=e`
  animation: ${a} ${n.duration.fast} ${n.timing.in};
`;export{t as TRANSITION_DURATIONS,m as flexColumnNoWrap,f as flexRowNoWrap,l as textFadeIn,n as transitions};
