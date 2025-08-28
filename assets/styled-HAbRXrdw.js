import{styled_components_default as o}from"./styled-components-DbVO3u5J.js";import{AutoColumn as t}from"./Column-ekA0cfjc.js";var r="/assets/big_unicorn-DS6OGS7c.png",a="/assets/noise-uWoRcK07.png",n="/assets/xl_uni-C9U3LmhR.png";const p=o.span`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,d=o.span`
  background: url(${n});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=o.span`
  background: url(${a});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,l=o(t)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,c=o.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`;export{c as Break,p as CardBGImage,d as CardBGImageSmaller,u as CardNoise,l as CardSection};
