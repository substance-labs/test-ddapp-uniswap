import{__toESM as w}from"./chunk-DgAfPHQg.js";import{require_react as j}from"./react-CNoFhWkx.js";import{Unicon as E}from"./src-DOOtfpHS.js";import{ReactQueryCacheKey as O}from"./cache-BFZkIToX.js";import{require_jsx_runtime as N}from"./jsx-runtime-D7bMTQeG.js";import{MAX_REACT_QUERY_CACHE_TIME_MS as T,ONE_MINUTE_MS as F}from"./time-D_OqcZ4M.js";import{skipToken as L,useQuery as R}from"./useQuery-D_ZCw8XG.js";import{fetchAddress as U}from"./UnitagsApiClient-CvShPRCK.js";import{useENSAvatar as y}from"./api-u3dxy1Uz.js";import{Ae as u,We as v,Xe as $,styled_components_default as f}from"./styled-components-DbVO3u5J.js";function I({params:t,...n}){const i=[O.UnitagsApi,"address",t];return R({queryKey:i,queryFn:t?async()=>await U(t):L,staleTime:F,gcTime:T,...n})}const M=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=u`
  animation: 2s ${M} linear infinite;
`,x=f.svg`
  height: ${({size:t})=>t};
  width: ${({size:t})=>t};
  path {
    stroke: ${({stroke:t})=>t};
    background: ${({theme:t})=>t.neutral2};
    fill: ${({fill:t})=>t};
  }
`,h=f(x)`
  ${G}
`;var a=w(N());function xt({size:t="16px",stroke:n,strokeWidth:i,...r}){const e=$();return(0,a.jsx)(h,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:t,stroke:n??e.accent1,...r,children:(0,a.jsx)("path",{d:"M2,12 a10,10 0 0,1 10,-10 M12,22 a10,10 0 0,1 -10,-10 M22,12 a10,10 0 0,1 -10,10",strokeWidth:i??"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function $t(){const t=$();return(0,a.jsxs)(h,{size:"16px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)(x,{size:"16px",viewBox:"0 0 16 16",fill:t.surface3,xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2.66667C5.05448 2.66667 2.66667 5.05448 2.66667 8C2.66667 10.9455 5.05448 13.3333 8 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 8 2.66667ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"})}),(0,a.jsx)(x,{size:"16px",viewBox:"0 0 16 16",fill:t.accent1,xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.66669 1.33333C6.66669 0.596954 7.26364 0 8.00002 0C9.0506 0 10.0909 0.206926 11.0615 0.608964C12.0321 1.011 12.914 1.60028 13.6569 2.34315C14.3997 3.08601 14.989 3.96793 15.3911 4.93853C15.7931 5.90914 16 6.94943 16 8C16 8.73638 15.4031 9.33333 14.6667 9.33333C13.9303 9.33333 13.3334 8.73638 13.3334 8C13.3334 7.29962 13.1954 6.60609 12.9274 5.95902C12.6594 5.31195 12.2665 4.72401 11.7713 4.22876C11.276 3.73352 10.6881 3.34067 10.041 3.07264C9.39393 2.80462 8.7004 2.66667 8.00002 2.66667C7.26364 2.66667 6.66669 2.06971 6.66669 1.33333Z"})})]})}function b({size:t="16px",color:n,...i}){const r=$();return(0,a.jsxs)(h,{size:t,viewBox:"0 0 54 54",xmlns:"http://www.w3.org/2000/svg",fill:n??r.neutral3,stroke:n??r.neutral3,...i,children:[(0,a.jsx)("path",{opacity:"0.1",d:"M53.6666 26.9999C53.6666 41.7275 41.7276 53.6666 27 53.6666C12.2724 53.6666 0.333313 41.7275 0.333313 26.9999C0.333313 12.2723 12.2724 0.333252 27 0.333252C41.7276 0.333252 53.6666 12.2723 53.6666 26.9999ZM8.33331 26.9999C8.33331 37.3092 16.6907 45.6666 27 45.6666C37.3093 45.6666 45.6666 37.3092 45.6666 26.9999C45.6666 16.6906 37.3093 8.33325 27 8.33325C16.6907 8.33325 8.33331 16.6906 8.33331 26.9999Z",fill:n??r.neutral3}),(0,a.jsx)("path",{d:"M49.6666 26.9999C51.8758 26.9999 53.6973 25.1992 53.3672 23.0149C53.0452 20.884 52.4652 18.7951 51.6368 16.795C50.2966 13.5597 48.3324 10.62 45.8562 8.14374C43.3799 5.66751 40.4402 3.70326 37.2049 2.36313C35.2048 1.53466 33.1159 0.954747 30.985 0.632693C28.8007 0.30256 27 2.12411 27 4.33325C27 6.54239 28.8108 8.29042 30.9695 8.76019C32.0523 8.99585 33.1146 9.32804 34.1434 9.75417C36.4081 10.6923 38.4659 12.0672 40.1993 13.8006C41.9327 15.534 43.3076 17.5918 44.2457 19.8565C44.6719 20.8853 45.004 21.9476 45.2397 23.0304C45.7095 25.1891 47.4575 26.9999 49.6666 26.9999Z",fill:n??r.neutral3})]})}var C=w(j());const k=f.div`
  height: ${({iconSize:t})=>`${t}px`};
  width: ${({iconSize:t})=>`${t}px`};
  border-radius: 50%;
  background-color: ${({theme:t})=>t.surface3};
  font-size: initial;
`,P=f.img`
  height: inherit;
  width: inherit;
  border-radius: inherit;
`;function z({account:t,size:n}){const{data:i}=y(t),[r,e]=(0,C.useState)(!0),l=n??24,o=(0,C.useCallback)(()=>e(!1),[]);return(0,a.jsx)(k,{iconSize:l,children:i&&r&&(0,a.jsx)(P,{alt:"avatar",src:i,onError:o})})}const V=f.div`
  height: ${({$iconSize:t})=>`${t}px`};
  width: ${({$iconSize:t})=>`${t}px`};
  border-radius: 50%;
  background-color: ${({theme:t})=>t.surface3};
  font-size: initial;
`,D=f.img`
  height: inherit;
  width: inherit;
  border-radius: inherit;
  object-fit: cover;
`;function Y({account:t,size:n}){var i;const{data:r}=I({params:t?{address:t}:void 0});return(0,a.jsx)(V,{$iconSize:n,children:(r==null||(i=r.metadata)===null||i===void 0?void 0:i.avatar)&&(0,a.jsx)(D,{alt:r.username,src:r.metadata.avatar})})}function Z(t){return((t==null?void 0:t.getAnimations().length)??0)>0}function B({node:t,getAnimatingClass:n,animatedElements:i,skip:r=!1}){(0,C.useEffect)(()=>{const e=t.current,l=(i==null?void 0:i.map(m=>m.current))??[e],o=e==null?void 0:e.parentElement,c=o==null?void 0:o.removeChild;if(!(!(o&&c)||r))return o.removeChild=function(m){if(m===e){l.forEach(p=>p==null?void 0:p.classList.add(n()));const g=l.find(p=>Z(p??void 0));return g?g.addEventListener("animationend",p=>{p.target===g&&c.call(o,m)}):c.call(o,m),m}else return c.call(o,m)},()=>{o.removeChild=c}},[i,n,t,r])}const X=v`
  from { opacity: 0;}
  to { opacity: 1;}
`,q=v`
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
`,Q=v`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,S=u`
  animation: ${X}
    ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`}
    forwards;
`,W=u`
  animation: ${q}
    ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`}
    forwards;
`,K=u`
  animation: ${Q}
    ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`}
    forwards;
`,H=v`
  from { opacity: 1; }
  to { opacity: 0;  }
`,J=v`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0); }
`,tt=v`
  from {opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(10px); }
`,nt=u`
  animation: ${H}
    ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`};
`,it=u`
  animation: ${J}
    ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`};
`,at=u`
  animation: ${tt}
    ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`};
`;let _=(function(t){return t.EXITING="exiting",t})({}),s=(function(t){return t.Fade="fade",t.FadeAndScale="scale",t.FadeAndTranslate="translate",t})({});function rt(t){switch(t){case s.FadeAndScale:return W;case s.FadeAndTranslate:return K;case s.Fade:default:return S}}function et(t){switch(t){case s.FadeAndScale:return it;case s.FadeAndTranslate:return at;case s.Fade:default:return nt}}function ot(t,n){switch(n){case s.FadeAndTranslate:return u`
        animation-delay: ${t};
        opacity: 0;
        translate: translateY(10px);
      `;case s.FadeAndScale:case s.Fade:default:return u`
        animation-delay: ${t};
        opacity: 0;
      `}}const st=f.div`
  transition:
    display
      ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`},
    transform
      ${({theme:t,$transitionDuration:n})=>`${n??t.transition.duration.medium} ${t.transition.timing.inOut}`};
  ${({animationType:t})=>rt(t)}

  ${({$animationDelay:t,animationType:n})=>t&&ot(t,n)};

  &.${_.EXITING} {
    ${({animationType:t})=>et(t)}
  }
  ${({$zIndex:t})=>t&&`z-index: ${t};`}
`;function ht({children:t,className:n,animationType:i=s.Fade,$transitionDuration:r,$delay:e,$zIndex:l,...o}){const c=(0,C.useRef)(null);return B({node:c,getAnimatingClass:()=>_.EXITING}),(0,a.jsx)(st,{ref:c,className:n,$transitionDuration:r,$animationDelay:e,animationType:i,$zIndex:l,...o,children:t})}let d=(function(t){return t.LOADING="loading",t.UNITAG_PROFILE_PICTURE="unitagProfilePicture",t.ENS_AVATAR="ensAvatar",t.UNICON="unicon",t})({});function dt(t){var n;const{data:i,isLoading:r}=I({params:t?{address:t}:void 0}),{data:e,isLoading:l}=y(t);if(t)return r?d.LOADING:!(i==null||(n=i.metadata)===null||n===void 0)&&n.avatar?d.UNITAG_PROFILE_PICTURE:e?d.ENS_AVATAR:l?d.LOADING:d.UNICON}const A=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${S}
`;function wt({account:t,size:n}){const i=dt(t);if(!t)return null;switch(i){case d.LOADING:return(0,a.jsx)(b,{size:n+"px","data-testid":"IdenticonLoader"});case d.UNITAG_PROFILE_PICTURE:return(0,a.jsx)(A,{children:(0,a.jsx)(Y,{account:t,size:n})});case d.ENS_AVATAR:return(0,a.jsx)(A,{children:(0,a.jsx)(z,{account:t,size:n})});case d.UNICON:return(0,a.jsx)(A,{children:(0,a.jsx)(E,{address:t,size:n})});default:return null}}export{_ as AnimationType,ht as FadePresence,s as FadePresenceAnimationType,wt as Identicon,d as IdenticonType,xt as Loader,$t as LoaderV2,b as LoaderV3,x as StyledSVG,dt as useIdenticonType,I as useUnitagsAddressQuery,B as useUnmountingAnimation};
