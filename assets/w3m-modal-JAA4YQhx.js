import"./preload-helper-CaakwtpC.js";import"./dist-Q7olfaoJ.js";import"./dist-QCpUvRkJ.js";import"./dist-ceZDlR1V.js";import"./isAddress-P2vaZgmG.js";import"./formatUnits-DkyMpOD7.js";import"./_u64-b_viZRi_.js";import"./recoverAddress-oPdWABRo.js";import"./esm-DSGHq0HW.js";import"./events-Bnkik2bI.js";import"./index.es-2xsffwdf.js";import"./basics-DA01Pp0C.js";import{i as v,i$1 as f,x as a}from"./lit-DG7NlYUS.js";import{n as w,o as X,r as d}from"./wui-text-Dy7AYz8M.js";import{AccountController as F,AlertController as U,ApiController as L,AssetController as me,AssetUtil as M,ChainController as m,ConnectorController as Y,ConstantsUtil as S,ConstantsUtil$2 as he,CoreHelperUtil as ve,EventsController as J,ModalController as g,OptionsController as k,RouterController as c,SnackController as _,ThemeController as fe,UiHelperUtil as ge,colorStyles as te,customElement as u,elementStyles as ie,initializeTheming as be,proxy as ye,resetStyles as I,subscribe as xe,subscribeKey as Ce,withErrorBoundary as ke}from"./ConstantsUtil-DWdkyivO.js";import{SIWXUtil as oe}from"./SIWXUtil-BcrNwiHE.js";const p=ye({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Se={state:p,subscribe(i){return xe(p,()=>i(p))},subscribeKey(i,e){return Ce(p,i,e)},showTooltip({message:i,triggerRect:e,variant:t}){p.open=!0,p.message=i,p.triggerRect=e,p.variant=t},hide(){p.open=!1,p.message="",p.triggerRect={width:0,height:0,top:0,left:0}}},T=ke(Se),re={isUnsupportedChainView(){return c.state.view==="UnsupportedChain"||c.state.view==="SwitchNetwork"&&c.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){g.shake();return}if(await oe.isSIWXCloseDisabled()){g.shake();return}g.close()}};var $e=f`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,Ne=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let G=class extends v{render(){return a`<slot></slot>`}};G.styles=[I,$e];G=Ne([u("wui-card")],G);var Re=f`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,P=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let $=class extends v{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,a`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){U.close()}};$.styles=[I,Re];P([w()],$.prototype,"message",void 0);P([w()],$.prototype,"backgroundColor",void 0);P([w()],$.prototype,"iconColor",void 0);P([w()],$.prototype,"icon",void 0);$=P([u("wui-alertbar")],$);var We=f`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,ae=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const Ae={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let z=class extends v{constructor(){super(),this.unsubscribe=[],this.open=U.state.open,this.onOpen(!0),this.unsubscribe.push(U.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=U.state,r=Ae[t];return a`
      <wui-alertbar
        message=${e}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};z.styles=We;ae([d()],z.prototype,"open",void 0);z=ae([u("w3m-alertbar")],z);var _e=f`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,B=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let N=class extends v{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,a`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};N.styles=[I,ie,te,_e];B([w()],N.prototype,"size",void 0);B([w({type:Boolean})],N.prototype,"disabled",void 0);B([w()],N.prototype,"icon",void 0);B([w()],N.prototype,"iconColor",void 0);N=B([u("wui-icon-link")],N);var Te=f`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,ne=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let H=class extends v{constructor(){super(...arguments),this.imageSrc=""}render(){return a`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?a`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:a`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};H.styles=[I,ie,te,Te];ne([w()],H.prototype,"imageSrc",void 0);H=ne([u("wui-select")],H);var Oe=f`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,y=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const Ee=["SmartSessionList"];function V(){var i,e,t,r;const n=(i=c.state.data)===null||i===void 0||(i=i.connector)===null||i===void 0?void 0:i.name,o=(e=c.state.data)===null||e===void 0||(e=e.wallet)===null||e===void 0?void 0:e.name,s=(t=c.state.data)===null||t===void 0||(t=t.network)===null||t===void 0?void 0:t.name,l=o??n,A=Y.getConnectors();return{Connect:`Connect ${A.length===1&&((r=A[0])===null||r===void 0?void 0:r.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:l??"Connect Wallet",ConnectingWalletConnect:l??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:l?`Get ${l}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:s??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:F.state.socialProvider?F.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let h=class extends v{constructor(){super(),this.unsubscribe=[],this.heading=V()[c.state.view],this.network=m.state.activeCaipNetwork,this.networkImage=M.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=c.state.view,this.viewDirection="",this.headerText=V()[c.state.view],this.unsubscribe.push(me.subscribeNetworkImages(()=>{this.networkImage=M.getNetworkImage(this.network)}),c.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=V()[e]},S.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),m.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=M.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){J.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),c.push("WhatIsAWallet")}async onClose(){await re.safeClose()}rightHeaderTemplate(){var e;const t=k===null||k===void 0||(e=k.state)===null||e===void 0||(e=e.features)===null||e===void 0?void 0:e.smartSessions;return c.state.view!=="Account"||!t?this.closeButtonTemplate():a`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>c.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return a`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=Ee.includes(this.view);return a`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?a`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var e;const{view:t}=c.state,r=t==="Connect",n=k.state.enableEmbedded,o=t==="ApproveTransaction",s=t==="ConnectingSiwe",l=t==="Account",A=k.state.enableNetworkSwitch,O=o||s||r&&n;return l&&A?a`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${X((e=this.network)===null||e===void 0?void 0:e.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${X(this.networkImage)}
      ></wui-select>`:this.showBack&&!O?a`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:a`<wui-icon-link
      data-hidden=${!r}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(J.sendEvent({type:"track",event:"CLICK_NETWORKS"}),c.push("Networks"))}isAllowedNetworkSwitch(){const e=m.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:n})=>{var o;return n===((o=this.network)===null||o===void 0?void 0:o.id)});return t||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=c.state;let t=S.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=S.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;const{history:t}=c.state,r=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&r?(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){c.goBack()}};h.styles=Oe;y([d()],h.prototype,"heading",void 0);y([d()],h.prototype,"network",void 0);y([d()],h.prototype,"networkImage",void 0);y([d()],h.prototype,"showBack",void 0);y([d()],h.prototype,"prevHistoryLength",void 0);y([d()],h.prototype,"view",void 0);y([d()],h.prototype,"viewDirection",void 0);y([d()],h.prototype,"headerText",void 0);h=y([u("w3m-header")],h);var Ie=f`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,W=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let b=class extends v{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return a`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?a`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?a`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:a`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};b.styles=[I,Ie];W([w()],b.prototype,"backgroundColor",void 0);W([w()],b.prototype,"iconColor",void 0);W([w()],b.prototype,"icon",void 0);W([w()],b.prototype,"message",void 0);W([w()],b.prototype,"loading",void 0);W([w()],b.prototype,"iconType",void 0);b=W([u("wui-snackbar")],b);var Pe=f`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,se=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const Be={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let K=class extends v{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=_.state.open,this.unsubscribe.push(_.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:r}=_.state,n=Be[t],{icon:o,iconColor:s}=r??n??{};return a`
      <wui-snackbar
        message=${e}
        backgroundColor=${n==null?void 0:n.backgroundColor}
        iconColor=${s}
        icon=${o}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),_.state.autoClose&&(this.timeout=setTimeout(()=>_.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};K.styles=Pe;se([d()],K.prototype,"open",void 0);K=se([u("w3m-snackbar")],K);var De=f`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,D=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let R=class extends v{constructor(){super(),this.unsubscribe=[],this.open=T.state.open,this.message=T.state.message,this.triggerRect=T.state.triggerRect,this.variant=T.state.variant,this.unsubscribe.push(T.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,a`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};R.styles=[De];D([d()],R.prototype,"open",void 0);D([d()],R.prototype,"message",void 0);D([d()],R.prototype,"triggerRect",void 0);D([d()],R.prototype,"variant",void 0);R=D([u("w3m-tooltip"),u("w3m-tooltip")],R);var je=f`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,q=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let E=class extends v{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=c.state.view,this.viewDirection="",this.unsubscribe.push(c.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver(([t])=>{const r=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",r),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=r,this.style.animation="unset"},S.ANIMATION_DURATIONS.ModalHeight)}),(e=this.resizeObserver)===null||e===void 0||e.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return a`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return a`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return a`<w3m-account-view></w3m-account-view>`;case"AllWallets":return a`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return a`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return a`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return a`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return a`<w3m-connect-view></w3m-connect-view>`;case"Create":return a`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return a`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return a`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return a`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return a`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return a`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return a`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return a`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return a`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return a`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return a`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return a`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return a`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return a`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return a`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return a`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return a`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return a`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return a`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return a`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return a`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return a`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return a`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return a`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return a`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return a`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return a`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return a`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return a`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return a`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return a`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return a`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return a`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return a`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return a`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return a`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return a`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return a`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return a`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return a`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return a`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return a`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return a`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return a`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return a`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return a`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return a`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return a`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return a`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){T.hide();let t=S.VIEW_DIRECTION.Next;const{history:r}=c.state;r.length<this.prevHistoryLength&&(t=S.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=t,setTimeout(()=>{this.view=e},S.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("div")}};E.styles=je;q([d()],E.prototype,"view",void 0);q([d()],E.prototype,"viewDirection",void 0);E=q([u("w3m-router")],E);var Le=f`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,C=function(i,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(s=i[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const Q="scroll-lock";var x=class extends v{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=k.state.enableEmbedded,this.open=g.state.open,this.caipAddress=m.state.activeCaipAddress,this.caipNetwork=m.state.activeCaipNetwork,this.shake=g.state.shake,this.filterByNamespace=Y.state.filterByNamespace,this.initializeTheming(),L.prefetchAnalyticsConfig(),this.unsubscribe.push(g.subscribeKey("open",i=>i?this.onOpen():this.onClose()),g.subscribeKey("shake",i=>this.shake=i),m.subscribeKey("activeCaipNetwork",i=>this.onNewNetwork(i)),m.subscribeKey("activeCaipAddress",i=>this.onNewAddress(i)),k.subscribeKey("enableEmbedded",i=>this.enableEmbedded=i),Y.subscribeKey("filterByNamespace",i=>{var e;this.filterByNamespace!==i&&!(!((e=m.getAccountData(i))===null||e===void 0)&&e.caipAddress)&&(L.fetchRecommendedWallets(),this.filterByNamespace=i)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){g.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(i=>i()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?a`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?a`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return a` <wui-card
      shake="${this.shake}"
      data-embedded="${X(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(i){i.target===i.currentTarget&&await this.handleClose()}async handleClose(){await re.safeClose()}initializeTheming(){const{themeVariables:i,themeMode:e}=fe.state,t=ge.getColorTheme(e);be(i,t)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),_.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const i=document.createElement("style");i.dataset.w3m=Q,i.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(i)}onScrollUnlock(){const i=document.head.querySelector(`style[data-w3m="${Q}"]`);i&&i.remove()}onAddKeyboardListener(){var i;this.abortController=new AbortController;const e=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",t=>{if(t.key==="Escape")this.handleClose();else if(t.key==="Tab"){const{tagName:r}=t.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var i;(i=this.abortController)===null||i===void 0||i.abort(),this.abortController=void 0}async onNewAddress(i){const e=m.state.isSwitchingNamespace,t=ve.getPlainAddress(i);!t&&!e?g.close():e&&t&&c.goBack(),await oe.initializeIfEnabled(),this.caipAddress=i,m.setIsSwitchingNamespace(!1)}onNewNetwork(i){var e,t,r;const n=this.caipNetwork,o=n==null||(e=n.caipNetworkId)===null||e===void 0?void 0:e.toString(),s=n==null?void 0:n.chainNamespace,l=i==null||(t=i.caipNetworkId)===null||t===void 0?void 0:t.toString(),A=i==null?void 0:i.chainNamespace,O=o!==l,le=O&&!(s!==A),ce=(n==null?void 0:n.name)===he.UNSUPPORTED_NETWORK_NAME,de=c.state.view==="ConnectingExternal",we=!(!((r=m.getAccountData(i==null?void 0:i.chainNamespace))===null||r===void 0)&&r.caipAddress),ue=c.state.view==="UnsupportedChain",pe=g.state.open;let j=!1;pe&&!de&&(we?O&&(j=!0):(ue||le&&!ce)&&(j=!0)),j&&c.state.view!=="SIWXSignMessage"&&c.goBack(),this.caipNetwork=i}prefetch(){this.hasPrefetched||(L.prefetch(),L.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}};x.styles=Le;C([w({type:Boolean})],x.prototype,"enableEmbedded",void 0);C([d()],x.prototype,"open",void 0);C([d()],x.prototype,"caipAddress",void 0);C([d()],x.prototype,"caipNetwork",void 0);C([d()],x.prototype,"shake",void 0);C([d()],x.prototype,"filterByNamespace",void 0);let Z=class extends x{};Z=C([u("w3m-modal")],Z);let ee=class extends x{};ee=C([u("appkit-modal")],ee);export{ee as AppKitModal,Z as W3mModal,x as W3mModalBase};
