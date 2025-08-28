const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-BRnDt7Kj.js","assets/lit-DG7NlYUS.js","assets/all-wallets-CTEI_fgh.js","assets/arrow-bottom-circle-s9y-6lWh.js","assets/app-store-BnpA1jtS.js","assets/apple-CBYs8Qul.js","assets/arrow-bottom-Ckg8I6P6.js","assets/arrow-left-CtcNOPg9.js","assets/arrow-right-BmK9_Q-5.js","assets/arrow-top-CcXfnnQd.js","assets/bank-Dyt8JJif.js","assets/browser-B0Dmdjiw.js","assets/card-CDlI0k_K.js","assets/checkmark-CokY7YBb.js","assets/checkmark-bold-nk_ANK91.js","assets/chevron-bottom-394aCpdj.js","assets/chevron-left-BDnHFHBM.js","assets/chevron-right-C0ATVAoJ.js","assets/chevron-top-D1wdN8jW.js","assets/chrome-store-BAV5q5T5.js","assets/clock-BPr5yqMf.js","assets/close-BMeMqfIQ.js","assets/compass-DWsE7OCj.js","assets/coinPlaceholder-CLGEL1Gk.js","assets/copy-CgU4hwdi.js","assets/cursor-Br5Rrp33.js","assets/cursor-transparent-G-8s712i.js","assets/desktop-CcuGuR89.js","assets/disconnect-DR-pwI1Q.js","assets/discord-CZNr5C_Q.js","assets/etherscan-DifwXapF.js","assets/extension-E1T88NCx.js","assets/external-link-4fnl4TnL.js","assets/facebook-CUIOaw_G.js","assets/farcaster-Cay88l4Y.js","assets/filters-Byd5BAHB.js","assets/github-BC6hFsCB.js","assets/google-Bnw9eT3M.js","assets/help-circle-DNHQcDRf.js","assets/image-BqGhDNpf.js","assets/id-CEWgxMV1.js","assets/info-circle-BYPJc6Yc.js","assets/lightbulb-BFKBvOqh.js","assets/mail-BDEOF9b6.js","assets/mobile-DbhSryD6.js","assets/more-D54SsOGF.js","assets/network-placeholder-CQUCJm7j.js","assets/nftPlaceholder-Ly-p1vMc.js","assets/off-Wc8uVpRP.js","assets/play-store-Di2NnNbu.js","assets/plus-DV9vzz-r.js","assets/qr-code-BHganWbB.js","assets/recycle-horizontal-CDv7e9XI.js","assets/refresh-BxSwB_4Q.js","assets/search-Bs5HZMKj.js","assets/send-CwM7LMUy.js","assets/swapHorizontal-B8Ik6zIC.js","assets/swapHorizontalMedium-BZnMFWBv.js","assets/swapHorizontalBold-YjcgXNTH.js","assets/swapHorizontalRoundedBold-dYpxZTvn.js","assets/swapVertical-DtHyLFpg.js","assets/telegram-Co-EPRyG.js","assets/three-dots-CGZpE82O.js","assets/twitch-D6UAueSj.js","assets/x-C2vWLY4y.js","assets/twitterIcon-DliEElIQ.js","assets/verify-CVKhDtuy.js","assets/verify-filled-CVZgbBJi.js","assets/wallet-CwTOcL-M.js","assets/walletconnect-CO2pVc7t.js","assets/wallet-placeholder--OgA6EqD.js","assets/warning-circle-DIn33P71.js","assets/info-CaqM1c0Y.js","assets/exclamation-triangle-bzFwtHsE.js","assets/reown-logo-B3efPQIv.js"])))=>i.map(i=>d[i]);
import{__vitePreload as o}from"./preload-helper-CaakwtpC.js";import{E as N,T as V,Z as Y,f as q,i as m,i$1 as S,u as F,x as w}from"./lit-DG7NlYUS.js";import{UiHelperUtil as g,colorStyles as H,customElement as E,elementStyles as Z,resetStyles as $}from"./ConstantsUtil-DWdkyivO.js";/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const X={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:q},K=(t=X,i,r)=>{const{kind:a,metadata:n}=r;let e=globalThis.litPropertyMetadata.get(n);if(e===void 0&&globalThis.litPropertyMetadata.set(n,e=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),e.set(r.name,t),a==="accessor"){const{name:s}=r;return{set(c){const h=i.get.call(this);i.set.call(this,c),this.requestUpdate(s,h,t)},init(c){return c!==void 0&&this.C(s,void 0,t,c),c}}}if(a==="setter"){const{name:s}=r;return function(c){const h=this[s];i.call(this,c),this.requestUpdate(s,h,t)}}throw Error("Unsupported decorator location: "+a)};function l(t){return(i,r)=>typeof r=="object"?K(t,i,r):((a,n,e)=>{const s=n.hasOwnProperty(e);return n.constructor.createProperty(e,a),s?Object.getOwnPropertyDescriptor(n,e):void 0})(t,i,r)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function St(t){return l({...t,state:!0,attribute:!1})}var Q=S`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,v=function(t,i,r,a){var n=arguments.length,e=n<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,r,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(e=(n<3?s(e):n>3?s(i,r,e):s(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};let u=class extends m{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&g.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&g.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&g.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&g.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&g.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&g.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&g.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&g.getSpacingStyles(this.margin,3)};
    `,w`<slot></slot>`}};u.styles=[$,Q];v([l()],u.prototype,"flexDirection",void 0);v([l()],u.prototype,"flexWrap",void 0);v([l()],u.prototype,"flexBasis",void 0);v([l()],u.prototype,"flexGrow",void 0);v([l()],u.prototype,"flexShrink",void 0);v([l()],u.prototype,"alignItems",void 0);v([l()],u.prototype,"justifyContent",void 0);v([l()],u.prototype,"columnGap",void 0);v([l()],u.prototype,"rowGap",void 0);v([l()],u.prototype,"gap",void 0);v([l()],u.prototype,"padding",void 0);v([l()],u.prototype,"margin",void 0);u=v([E("wui-flex")],u);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const $t=t=>t??N;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:bt}=Y,J=t=>t===null||typeof t!="object"&&typeof t!="function";const tt=t=>t.strings===void 0;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},W=t=>(...i)=>({_$litDirective$:t,values:i});var G=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const A=(t,i)=>{var r;const a=t._$AN;if(a===void 0)return!1;for(const n of a)(r=n._$AO)===null||r===void 0||r.call(n,i,!1),A(n,i);return!0},O=t=>{let i,r;do{if((i=t._$AM)===void 0)break;r=i._$AN,r.delete(t),t=i}while((r==null?void 0:r.size)===0)},U=t=>{for(let i;i=t._$AM;t=i){let r=i._$AN;if(r===void 0)i._$AN=r=new Set;else if(r.has(t))break;r.add(t),rt(i)}};function it(t){this._$AN!==void 0?(O(this),this._$AM=t,U(this)):this._$AM=t}function et(t,i=!1,r=0){const a=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(i)if(Array.isArray(a))for(let e=r;e<a.length;e++)A(a[e],!1),O(a[e]);else a!=null&&(A(a,!1),O(a));else A(this,t)}const rt=t=>{t.type==M.CHILD&&(t._$AP??(t._$AP=et),t._$AQ??(t._$AQ=it))};var ot=class extends G{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),U(this),this.isConnected=t._$AU}_$AO(t,i=!0){var r,a;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(a=this.disconnected)===null||a===void 0||a.call(this)),i&&(A(this,t),O(this))}setValue(t){if(tt(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}},at=class{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}},nt=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(t=>this.Z=t))}resume(){var t;(t=this.Z)===null||t===void 0||t.call(this),this.Y=this.Z=void 0}};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const k=t=>!J(t)&&typeof t.then=="function",B=1073741823;var st=class extends ot{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new at(this),this._$CX=new nt}render(...t){return t.find(i=>!k(i))??V}update(t,i){const r=this._$Cbt;let a=r.length;this._$Cbt=i;const n=this._$CK,e=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const c=i[s];if(!k(c))return this._$Cwt=s,c;s<a&&c===r[s]||(this._$Cwt=B,a=0,Promise.resolve(c).then(async h=>{for(;e.get();)await e.get();const _=n.deref();if(_!==void 0){const L=_._$Cbt.indexOf(c);L>-1&&L<_._$Cwt&&(_._$Cwt=L,_.setValue(h))}}))}return V}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ct=W(st);var lt=class{constructor(){this.cache=new Map}set(t,i){this.cache.set(t,i)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};const D=new lt;var ut=S`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,P=function(t,i,r,a){var n=arguments.length,e=n<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,r,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(e=(n<3?s(e):n>3?s(i,r,e):s(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};const j={add:async()=>(await o(async()=>{const{addSvg:t}=await import("./add-BRnDt7Kj.js");return{addSvg:t}},__vite__mapDeps([0,1]))).addSvg,allWallets:async()=>(await o(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-CTEI_fgh.js");return{allWalletsSvg:t}},__vite__mapDeps([2,1]))).allWalletsSvg,arrowBottomCircle:async()=>(await o(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-s9y-6lWh.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([3,1]))).arrowBottomCircleSvg,appStore:async()=>(await o(async()=>{const{appStoreSvg:t}=await import("./app-store-BnpA1jtS.js");return{appStoreSvg:t}},__vite__mapDeps([4,1]))).appStoreSvg,apple:async()=>(await o(async()=>{const{appleSvg:t}=await import("./apple-CBYs8Qul.js");return{appleSvg:t}},__vite__mapDeps([5,1]))).appleSvg,arrowBottom:async()=>(await o(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-Ckg8I6P6.js");return{arrowBottomSvg:t}},__vite__mapDeps([6,1]))).arrowBottomSvg,arrowLeft:async()=>(await o(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-CtcNOPg9.js");return{arrowLeftSvg:t}},__vite__mapDeps([7,1]))).arrowLeftSvg,arrowRight:async()=>(await o(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-BmK9_Q-5.js");return{arrowRightSvg:t}},__vite__mapDeps([8,1]))).arrowRightSvg,arrowTop:async()=>(await o(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-CcXfnnQd.js");return{arrowTopSvg:t}},__vite__mapDeps([9,1]))).arrowTopSvg,bank:async()=>(await o(async()=>{const{bankSvg:t}=await import("./bank-Dyt8JJif.js");return{bankSvg:t}},__vite__mapDeps([10,1]))).bankSvg,browser:async()=>(await o(async()=>{const{browserSvg:t}=await import("./browser-B0Dmdjiw.js");return{browserSvg:t}},__vite__mapDeps([11,1]))).browserSvg,card:async()=>(await o(async()=>{const{cardSvg:t}=await import("./card-CDlI0k_K.js");return{cardSvg:t}},__vite__mapDeps([12,1]))).cardSvg,checkmark:async()=>(await o(async()=>{const{checkmarkSvg:t}=await import("./checkmark-CokY7YBb.js");return{checkmarkSvg:t}},__vite__mapDeps([13,1]))).checkmarkSvg,checkmarkBold:async()=>(await o(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-nk_ANK91.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([14,1]))).checkmarkBoldSvg,chevronBottom:async()=>(await o(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-394aCpdj.js");return{chevronBottomSvg:t}},__vite__mapDeps([15,1]))).chevronBottomSvg,chevronLeft:async()=>(await o(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-BDnHFHBM.js");return{chevronLeftSvg:t}},__vite__mapDeps([16,1]))).chevronLeftSvg,chevronRight:async()=>(await o(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-C0ATVAoJ.js");return{chevronRightSvg:t}},__vite__mapDeps([17,1]))).chevronRightSvg,chevronTop:async()=>(await o(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-D1wdN8jW.js");return{chevronTopSvg:t}},__vite__mapDeps([18,1]))).chevronTopSvg,chromeStore:async()=>(await o(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-BAV5q5T5.js");return{chromeStoreSvg:t}},__vite__mapDeps([19,1]))).chromeStoreSvg,clock:async()=>(await o(async()=>{const{clockSvg:t}=await import("./clock-BPr5yqMf.js");return{clockSvg:t}},__vite__mapDeps([20,1]))).clockSvg,close:async()=>(await o(async()=>{const{closeSvg:t}=await import("./close-BMeMqfIQ.js");return{closeSvg:t}},__vite__mapDeps([21,1]))).closeSvg,compass:async()=>(await o(async()=>{const{compassSvg:t}=await import("./compass-DWsE7OCj.js");return{compassSvg:t}},__vite__mapDeps([22,1]))).compassSvg,coinPlaceholder:async()=>(await o(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-CLGEL1Gk.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([23,1]))).coinPlaceholderSvg,copy:async()=>(await o(async()=>{const{copySvg:t}=await import("./copy-CgU4hwdi.js");return{copySvg:t}},__vite__mapDeps([24,1]))).copySvg,cursor:async()=>(await o(async()=>{const{cursorSvg:t}=await import("./cursor-Br5Rrp33.js");return{cursorSvg:t}},__vite__mapDeps([25,1]))).cursorSvg,cursorTransparent:async()=>(await o(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-G-8s712i.js");return{cursorTransparentSvg:t}},__vite__mapDeps([26,1]))).cursorTransparentSvg,desktop:async()=>(await o(async()=>{const{desktopSvg:t}=await import("./desktop-CcuGuR89.js");return{desktopSvg:t}},__vite__mapDeps([27,1]))).desktopSvg,disconnect:async()=>(await o(async()=>{const{disconnectSvg:t}=await import("./disconnect-DR-pwI1Q.js");return{disconnectSvg:t}},__vite__mapDeps([28,1]))).disconnectSvg,discord:async()=>(await o(async()=>{const{discordSvg:t}=await import("./discord-CZNr5C_Q.js");return{discordSvg:t}},__vite__mapDeps([29,1]))).discordSvg,etherscan:async()=>(await o(async()=>{const{etherscanSvg:t}=await import("./etherscan-DifwXapF.js");return{etherscanSvg:t}},__vite__mapDeps([30,1]))).etherscanSvg,extension:async()=>(await o(async()=>{const{extensionSvg:t}=await import("./extension-E1T88NCx.js");return{extensionSvg:t}},__vite__mapDeps([31,1]))).extensionSvg,externalLink:async()=>(await o(async()=>{const{externalLinkSvg:t}=await import("./external-link-4fnl4TnL.js");return{externalLinkSvg:t}},__vite__mapDeps([32,1]))).externalLinkSvg,facebook:async()=>(await o(async()=>{const{facebookSvg:t}=await import("./facebook-CUIOaw_G.js");return{facebookSvg:t}},__vite__mapDeps([33,1]))).facebookSvg,farcaster:async()=>(await o(async()=>{const{farcasterSvg:t}=await import("./farcaster-Cay88l4Y.js");return{farcasterSvg:t}},__vite__mapDeps([34,1]))).farcasterSvg,filters:async()=>(await o(async()=>{const{filtersSvg:t}=await import("./filters-Byd5BAHB.js");return{filtersSvg:t}},__vite__mapDeps([35,1]))).filtersSvg,github:async()=>(await o(async()=>{const{githubSvg:t}=await import("./github-BC6hFsCB.js");return{githubSvg:t}},__vite__mapDeps([36,1]))).githubSvg,google:async()=>(await o(async()=>{const{googleSvg:t}=await import("./google-Bnw9eT3M.js");return{googleSvg:t}},__vite__mapDeps([37,1]))).googleSvg,helpCircle:async()=>(await o(async()=>{const{helpCircleSvg:t}=await import("./help-circle-DNHQcDRf.js");return{helpCircleSvg:t}},__vite__mapDeps([38,1]))).helpCircleSvg,image:async()=>(await o(async()=>{const{imageSvg:t}=await import("./image-BqGhDNpf.js");return{imageSvg:t}},__vite__mapDeps([39,1]))).imageSvg,id:async()=>(await o(async()=>{const{idSvg:t}=await import("./id-CEWgxMV1.js");return{idSvg:t}},__vite__mapDeps([40,1]))).idSvg,infoCircle:async()=>(await o(async()=>{const{infoCircleSvg:t}=await import("./info-circle-BYPJc6Yc.js");return{infoCircleSvg:t}},__vite__mapDeps([41,1]))).infoCircleSvg,lightbulb:async()=>(await o(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-BFKBvOqh.js");return{lightbulbSvg:t}},__vite__mapDeps([42,1]))).lightbulbSvg,mail:async()=>(await o(async()=>{const{mailSvg:t}=await import("./mail-BDEOF9b6.js");return{mailSvg:t}},__vite__mapDeps([43,1]))).mailSvg,mobile:async()=>(await o(async()=>{const{mobileSvg:t}=await import("./mobile-DbhSryD6.js");return{mobileSvg:t}},__vite__mapDeps([44,1]))).mobileSvg,more:async()=>(await o(async()=>{const{moreSvg:t}=await import("./more-D54SsOGF.js");return{moreSvg:t}},__vite__mapDeps([45,1]))).moreSvg,networkPlaceholder:async()=>(await o(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-CQUCJm7j.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([46,1]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await o(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-Ly-p1vMc.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([47,1]))).nftPlaceholderSvg,off:async()=>(await o(async()=>{const{offSvg:t}=await import("./off-Wc8uVpRP.js");return{offSvg:t}},__vite__mapDeps([48,1]))).offSvg,playStore:async()=>(await o(async()=>{const{playStoreSvg:t}=await import("./play-store-Di2NnNbu.js");return{playStoreSvg:t}},__vite__mapDeps([49,1]))).playStoreSvg,plus:async()=>(await o(async()=>{const{plusSvg:t}=await import("./plus-DV9vzz-r.js");return{plusSvg:t}},__vite__mapDeps([50,1]))).plusSvg,qrCode:async()=>(await o(async()=>{const{qrCodeIcon:t}=await import("./qr-code-BHganWbB.js");return{qrCodeIcon:t}},__vite__mapDeps([51,1]))).qrCodeIcon,recycleHorizontal:async()=>(await o(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-CDv7e9XI.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([52,1]))).recycleHorizontalSvg,refresh:async()=>(await o(async()=>{const{refreshSvg:t}=await import("./refresh-BxSwB_4Q.js");return{refreshSvg:t}},__vite__mapDeps([53,1]))).refreshSvg,search:async()=>(await o(async()=>{const{searchSvg:t}=await import("./search-Bs5HZMKj.js");return{searchSvg:t}},__vite__mapDeps([54,1]))).searchSvg,send:async()=>(await o(async()=>{const{sendSvg:t}=await import("./send-CwM7LMUy.js");return{sendSvg:t}},__vite__mapDeps([55,1]))).sendSvg,swapHorizontal:async()=>(await o(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-B8Ik6zIC.js");return{swapHorizontalSvg:t}},__vite__mapDeps([56,1]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await o(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-BZnMFWBv.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([57,1]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await o(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-YjcgXNTH.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([58,1]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await o(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-dYpxZTvn.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([59,1]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await o(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-DtHyLFpg.js");return{swapVerticalSvg:t}},__vite__mapDeps([60,1]))).swapVerticalSvg,telegram:async()=>(await o(async()=>{const{telegramSvg:t}=await import("./telegram-Co-EPRyG.js");return{telegramSvg:t}},__vite__mapDeps([61,1]))).telegramSvg,threeDots:async()=>(await o(async()=>{const{threeDotsSvg:t}=await import("./three-dots-CGZpE82O.js");return{threeDotsSvg:t}},__vite__mapDeps([62,1]))).threeDotsSvg,twitch:async()=>(await o(async()=>{const{twitchSvg:t}=await import("./twitch-D6UAueSj.js");return{twitchSvg:t}},__vite__mapDeps([63,1]))).twitchSvg,twitter:async()=>(await o(async()=>{const{xSvg:t}=await import("./x-C2vWLY4y.js");return{xSvg:t}},__vite__mapDeps([64,1]))).xSvg,twitterIcon:async()=>(await o(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-DliEElIQ.js");return{twitterIconSvg:t}},__vite__mapDeps([65,1]))).twitterIconSvg,verify:async()=>(await o(async()=>{const{verifySvg:t}=await import("./verify-CVKhDtuy.js");return{verifySvg:t}},__vite__mapDeps([66,1]))).verifySvg,verifyFilled:async()=>(await o(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-CVZgbBJi.js");return{verifyFilledSvg:t}},__vite__mapDeps([67,1]))).verifyFilledSvg,wallet:async()=>(await o(async()=>{const{walletSvg:t}=await import("./wallet-CwTOcL-M.js");return{walletSvg:t}},__vite__mapDeps([68,1]))).walletSvg,walletConnect:async()=>(await o(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-CO2pVc7t.js");return{walletConnectSvg:t}},__vite__mapDeps([69,1]))).walletConnectSvg,walletConnectLightBrown:async()=>(await o(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-CO2pVc7t.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([69,1]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await o(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-CO2pVc7t.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([69,1]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await o(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder--OgA6EqD.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([70,1]))).walletPlaceholderSvg,warningCircle:async()=>(await o(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-DIn33P71.js");return{warningCircleSvg:t}},__vite__mapDeps([71,1]))).warningCircleSvg,x:async()=>(await o(async()=>{const{xSvg:t}=await import("./x-C2vWLY4y.js");return{xSvg:t}},__vite__mapDeps([64,1]))).xSvg,info:async()=>(await o(async()=>{const{infoSvg:t}=await import("./info-CaqM1c0Y.js");return{infoSvg:t}},__vite__mapDeps([72,1]))).infoSvg,exclamationTriangle:async()=>(await o(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-bzFwtHsE.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([73,1]))).exclamationTriangleSvg,reown:async()=>(await o(async()=>{const{reownSvg:t}=await import("./reown-logo-B3efPQIv.js");return{reownSvg:t}},__vite__mapDeps([74,1]))).reownSvg};async function vt(t){if(D.has(t))return D.get(t);const r=(j[t]??j.copy)();return D.set(t,r),r}let f=class extends m{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,w`${ct(vt(this.name),w`<div class="fallback"></div>`)}`}};f.styles=[$,H,ut];P([l()],f.prototype,"size",void 0);P([l()],f.prototype,"name",void 0);P([l()],f.prototype,"color",void 0);P([l()],f.prototype,"aspectRatio",void 0);f=P([E("wui-icon")],f);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const dt=W(class extends G{constructor(t){var i;if(super(t),t.type!==M.ATTRIBUTE||t.name!=="class"||((i=t.strings)===null||i===void 0?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){if(this.st===void 0){var r;this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in i)i[e]&&!(!((r=this.nt)===null||r===void 0)&&r.has(e))&&this.st.add(e);return this.render(i)}const a=t.element.classList;for(const e of this.st)e in i||(a.remove(e),this.st.delete(e));for(const e in i){var n;const s=!!i[e];s===this.st.has(e)||!((n=this.nt)===null||n===void 0)&&n.has(e)||(s?(a.add(e),this.st.add(e)):(a.remove(e),this.st.delete(e)))}return V}});var _t=S`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,R=function(t,i,r,a){var n=arguments.length,e=n<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,r,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(e=(n<3?s(e):n>3?s(i,r,e):s(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};let y=class extends m{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const i={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,w`<slot class=${dt(i)}></slot>`}};y.styles=[$,_t];R([l()],y.prototype,"variant",void 0);R([l()],y.prototype,"color",void 0);R([l()],y.prototype,"align",void 0);R([l()],y.prototype,"lineClamp",void 0);y=R([E("wui-text")],y);var pt=S`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,p=function(t,i,r,a){var n=arguments.length,e=n<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,r,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(e=(n<3?s(e):n>3?s(i,r,e):s(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};let d=class extends m{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const i=this.iconSize||this.size,r=this.size==="lg",a=this.size==="xl",n=r?"12%":"16%",e=r?"xxs":a?"s":"3xl",s=this.background==="gray",c=this.background==="opaque",h=this.backgroundColor==="accent-100"&&c||this.backgroundColor==="success-100"&&c||this.backgroundColor==="error-100"&&c||this.backgroundColor==="inverse-100"&&c;let _=`var(--wui-color-${this.backgroundColor})`;return h?_=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(_=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${_};
       --local-bg-mix: ${h||s?"100%":n};
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,w` <wui-icon color=${this.iconColor} size=${i} name=${this.icon}></wui-icon> `}};d.styles=[$,Z,pt];p([l()],d.prototype,"size",void 0);p([l()],d.prototype,"backgroundColor",void 0);p([l()],d.prototype,"iconColor",void 0);p([l()],d.prototype,"iconSize",void 0);p([l()],d.prototype,"background",void 0);p([l({type:Boolean})],d.prototype,"border",void 0);p([l()],d.prototype,"borderColor",void 0);p([l()],d.prototype,"icon",void 0);d=p([E("wui-icon-box")],d);var ht=S`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,I=function(t,i,r,a){var n=arguments.length,e=n<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,r,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(e=(n<3?s(e):n>3?s(i,r,e):s(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};let b=class extends m{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,w`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};b.styles=[$,H,ht];I([l()],b.prototype,"src",void 0);I([l()],b.prototype,"alt",void 0);I([l()],b.prototype,"size",void 0);b=I([E("wui-image")],b);var gt=S`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,C=function(t,i,r,a){var n=arguments.length,e=n<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,r,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(e=(n<3?s(e):n>3?s(i,r,e):s(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};let T=class extends m{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const i=this.size==="md"?"mini-700":"micro-700";return w`
      <wui-text data-variant=${this.variant} variant=${i} color="inherit">
        <slot></slot>
      </wui-text>
    `}};T.styles=[$,gt];C([l()],T.prototype,"variant",void 0);C([l()],T.prototype,"size",void 0);T=C([E("wui-tag")],T);var wt=S`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,z=function(t,i,r,a){var n=arguments.length,e=n<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,r,a);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(e=(n<3?s(e):n>3?s(i,r,e):s(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};let x=class extends m{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,w`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};x.styles=[$,wt];z([l()],x.prototype,"color",void 0);z([l()],x.prototype,"size",void 0);x=z([E("wui-loading-spinner")],x);export{dt as e,W as e$1,ot as f,l as n,$t as o,St as r};
