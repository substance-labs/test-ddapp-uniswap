import{__toESM as s}from"./chunk-DgAfPHQg.js";import{require_react as u}from"./react-CNoFhWkx.js";import{require_jsx_runtime as p}from"./jsx-runtime-D7bMTQeG.js";import{SOCKS_CONTROLLER_ADDRESSES as f,Token as x,UniverseChainId as i,init_sdk_core_esm as h}from"./utils-BX1Fu73x.js";import{useWallet as c}from"./useWallet-CL5owP9P.js";import{useAccount as _}from"./useAccount-C5hwiBwN.js";import{useTokenBalance as v}from"./useCurrencyBalance-BuHM_Z2M.js";import{CONNECTOR_ICON_OVERRIDE_MAP as g}from"./constants-CGJJmXwV.js";import{breakpoints as M}from"./breakpoints-B-pYqY7D.js";import{Identicon as S}from"./Identicon-SnsLMqUD.js";import{styled_components_default as r}from"./styled-components-DbVO3u5J.js";import{flexColumnNoWrap as j}from"./styles-nntGSkOP.js";var I="/assets/socks-BtOo4hIw.svg";h();var w=s(u());const k=new x(i.Mainnet,f[i.Mainnet],0);function $(){const t=_(),e=v(t.address,t.chainId===i.Mainnet?k:void 0);return(0,w.useMemo)(()=>!!(e!=null&&e.greaterThan(0)),[e])}var o=s(p());const C=r.div`
  position: relative;
  ${j};
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: ${M.xl}px) {
    margin-right: 4px;
  }
  & > img,
  span {
    height: ${({size:t})=>t?t+"px":"32px"};
    width: ${({size:t})=>t?t+"px":"32px"};
  }
  ${({theme:t})=>t.deprecated_mediaWidth.deprecated_upToMedium`
    align-items: flex-end;
  `};
`,a=r.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  bottom: -4px;
  ${({side:t})=>`${t==="left"?"left":"right"}: -4px;`}
  border-radius: 50%;
  outline: 2px solid ${({theme:t})=>t.surface1};
  outline-offset: -0.1px;
  background-color: ${({theme:t})=>t.surface1};
  overflow: hidden;
  @supports (overflow: clip) {
    overflow: clip;
  }
`,l=r.img`
  width: 16px;
  height: 16px;
`;function O(){return(0,o.jsx)(a,{side:"left",children:(0,o.jsx)(l,{src:I})})}function E(){const t=c().evmAccount;if(!t)return null;const e=g[t.walletMeta.name??""]??t.walletMeta.icon;return(0,o.jsx)(a,{side:"right","data-testid":"MiniIcon",children:(0,o.jsx)(l,{src:e,alt:`${t.walletMeta.name} icon`})})}function H({size:t=16,showMiniIcons:e=!0,address:d}){const n=c().evmAccount,m=$();return(0,o.jsxs)(C,{size:t,"data-testid":"StatusIconRoot",children:[(0,o.jsx)(S,{account:d??(n==null?void 0:n.address),size:t}),e&&(0,o.jsx)(E,{}),m&&e&&(0,o.jsx)(O,{})]})}export{H as StatusIcon};
