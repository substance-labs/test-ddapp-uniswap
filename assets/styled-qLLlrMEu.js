import{Ae as a,We as e,styled_components_default as n}from"./styled-components-DbVO3u5J.js";const s=e`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,o=a`
  animation: ${s} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:i})=>i.surface1} 25%,
    ${({theme:i})=>i.surface3} 50%,
    ${({theme:i})=>i.surface1} 75%
  );
  background-size: 400%;
  will-change: background-position;
`,c=n.div`
  display: grid;

  & > div {
    ${o}
    border-radius: 12px;
    height: 2.4em;
  }
`,g=n.div`
  ${o}
  border-radius: 12px;
  height: ${({height:i})=>i}px;
  width: ${({width:i})=>i}px;
`,d=a`
  filter: ${({$loading:i})=>i?"grayscale(1)":"none"};
  opacity: ${({$loading:i})=>i?"0.6":"1"};
  transition: ${({$loading:i,theme:t})=>i?"none":`opacity ${t.transition.duration.medium} ${t.transition.timing.inOut}`};
`,l=n.div`
  ${d}
`,p=n.div`
  ${o}
  inset: 0;
  position: absolute;
`;export{p as LoadingFullscreen,l as LoadingOpacityContainer,g as LoadingRow,c as LoadingRows,d as loadingOpacityMixin};
