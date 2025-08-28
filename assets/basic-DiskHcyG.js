import{__commonJS as D,__toESM as vi}from"./chunk-DgAfPHQg.js";import"./preload-helper-CaakwtpC.js";import"./dist-QCpUvRkJ.js";import"./formatUnits-DkyMpOD7.js";import{require_encode_utf8 as yi}from"./encode-utf8-DiSL6KQ9.js";import{require_dijkstra as xi}from"./dijkstra-6umg7ymP.js";import{E as He,b as zt,i as L,i$1 as M,x as c}from"./lit-DG7NlYUS.js";import{e as $i,e$1 as Ci,f as _i,n as u,o as I,r as _}from"./wui-text-Dy7AYz8M.js";import{ApiController as N,AssetController as Ke,AssetUtil as G,ChainController as Ie,ConnectionController as A,ConnectorController as U,ConstantsUtil$1 as ei,ConstantsUtil$2 as Ri,CoreHelperUtil as O,EventsController as ot,ModalController as ii,OptionsController as it,RouterController as q,SnackController as Yt,StorageUtil as ue,ThemeController as We,UiHelperUtil as pt,colorStyles as Ii,customElement as T,elementStyles as J,resetStyles as V}from"./ConstantsUtil-DWdkyivO.js";import{ConnectorUtil as Nt,WalletUtil as de}from"./ConnectorUtil-BidIfr3U.js";var Wi=M`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,Rt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let wt=class extends L{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:c`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};wt.styles=[J,V,Wi];Rt([u()],wt.prototype,"size",void 0);Rt([u()],wt.prototype,"name",void 0);Rt([u()],wt.prototype,"imageSrc",void 0);Rt([u()],wt.prototype,"walletIcon",void 0);Rt([u({type:Boolean})],wt.prototype,"installed",void 0);Rt([u()],wt.prototype,"badgeSize",void 0);wt=Rt([T("wui-wallet-image")],wt);var Ei=M`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,oi=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};const Ce=4;let Jt=class extends L{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Ce;return c`${this.walletImages.slice(0,Ce).map(({src:i,walletName:n})=>c`
            <wui-wallet-image
              size="inherit"
              imageSrc=${i}
              name=${I(n)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(Ce-this.walletImages.length)].map(()=>c` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Jt.styles=[V,Ei];oi([u({type:Array})],Jt.prototype,"walletImages",void 0);Jt=oi([T("wui-all-wallets-image")],Jt);var Si=M`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,Q=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let F=class extends L{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return c`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?c` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?c` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?c`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?c`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?c`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?c`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?c`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};F.styles=[V,J,Si];Q([u({type:Array})],F.prototype,"walletImages",void 0);Q([u()],F.prototype,"imageSrc",void 0);Q([u()],F.prototype,"name",void 0);Q([u()],F.prototype,"tagLabel",void 0);Q([u()],F.prototype,"tagVariant",void 0);Q([u()],F.prototype,"icon",void 0);Q([u()],F.prototype,"walletIcon",void 0);Q([u()],F.prototype,"tabIdx",void 0);Q([u({type:Boolean})],F.prototype,"installed",void 0);Q([u({type:Boolean})],F.prototype,"disabled",void 0);Q([u({type:Boolean})],F.prototype,"showAllWallets",void 0);Q([u({type:Boolean})],F.prototype,"loading",void 0);Q([u({type:String})],F.prototype,"loadingSpinnerColor",void 0);F=Q([T("wui-list-wallet")],F);var Ot=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let yt=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.count=N.state.count,this.filteredCount=N.state.filteredWallets.length,this.isFetchingRecommendedWallets=N.state.isFetchingRecommendedWallets,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t),N.subscribeKey("count",t=>this.count=t),N.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),N.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(l=>l.id==="walletConnect"),{allWallets:i}=it.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!O.isMobile())return null;const n=N.state.featured.length,o=this.count+n,e=o<10?o:Math.floor(o/10)*10,a=this.filteredCount>0?this.filteredCount:e;let s=`${a}`;return this.filteredCount>0?s=`${this.filteredCount}`:a<o&&(s=`${a}+`),c`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${I(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){ot.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),q.push("AllWallets")}};Ot([u()],yt.prototype,"tabIdx",void 0);Ot([_()],yt.prototype,"connectors",void 0);Ot([_()],yt.prototype,"count",void 0);Ot([_()],yt.prototype,"filteredCount",void 0);Ot([_()],yt.prototype,"isFetchingRecommendedWallets",void 0);yt=Ot([T("w3m-all-wallets-widget")],yt);var Pe=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Qt=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(i=>i.type==="ANNOUNCED");return t!=null&&t.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(Nt.showConnector).map(i=>c`
              <wui-list-wallet
                imageSrc=${I(G.getConnectorImage(i))}
                name=${i.name??"Unknown"}
                @click=${()=>this.onConnector(i)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${i.id}`}
                .installed=${!0}
                tabIdx=${I(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?O.isMobile()?q.push("AllWallets"):q.push("ConnectingWalletConnect"):q.push("ConnectingExternal",{connector:t})}};Pe([u()],Qt.prototype,"tabIdx",void 0);Pe([_()],Qt.prototype,"connectors",void 0);Qt=Pe([T("w3m-connect-announced-widget")],Qt);var he=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Dt=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.loading=!1,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t)),O.isTelegram()&&O.isIos()&&(this.loading=!A.state.wcUri,this.unsubscribe.push(A.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=it.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(t);return c`<wui-flex flexDirection="column" gap="xs">
      ${i.map(n=>c`
          <wui-list-wallet
            imageSrc=${I(G.getWalletImage(n))}
            name=${n.name??"Unknown"}
            @click=${()=>this.onConnectWallet(n)}
            data-testid=${`wallet-selector-${n.id}`}
            tabIdx=${I(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const i=ue.getRecentWallets(),n=this.connectors.map(s=>{var l;return(l=s.info)===null||l===void 0?void 0:l.rdns}).filter(Boolean),o=i.map(s=>s.rdns).filter(Boolean),e=n.concat(o);if(e.includes("io.metamask.mobile")&&O.isMobile()){const s=e.indexOf("io.metamask.mobile");e[s]="io.metamask"}return t.filter(s=>!e.includes(String(s==null?void 0:s.rdns)))}onConnectWallet(t){this.loading||q.push("ConnectingWalletConnect",{wallet:t})}};he([u()],Dt.prototype,"tabIdx",void 0);he([_()],Dt.prototype,"connectors",void 0);he([_()],Dt.prototype,"loading",void 0);Dt=he([T("w3m-connect-custom-widget")],Dt);var Oe=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Xt=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const n=this.connectors.filter(o=>o.type==="EXTERNAL").filter(Nt.showConnector).filter(o=>o.id!==Ri.CONNECTOR_ID.COINBASE_SDK);return n!=null&&n.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map(o=>c`
            <wui-list-wallet
              imageSrc=${I(G.getConnectorImage(o))}
              .installed=${!0}
              name=${o.name??"Unknown"}
              data-testid=${`wallet-selector-external-${o.id}`}
              @click=${()=>this.onConnector(o)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){q.push("ConnectingExternal",{connector:t})}};Oe([u()],Xt.prototype,"tabIdx",void 0);Oe([_()],Xt.prototype,"connectors",void 0);Xt=Oe([T("w3m-connect-external-widget")],Xt);var je=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Zt=class extends L{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>c`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${I(G.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){U.selectWalletConnector(t)}};je([u()],Zt.prototype,"tabIdx",void 0);je([u()],Zt.prototype,"wallets",void 0);Zt=je([T("w3m-connect-featured-widget")],Zt);var ke=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let te=class extends L{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const t=this.connectors.filter(Nt.showConnector);return t.length===0?(this.style.cssText="display: none",null):c`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(i=>c`
            <wui-list-wallet
              imageSrc=${I(G.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(t){U.setActiveConnector(t),q.push("ConnectingExternal",{connector:t})}};ke([u()],te.prototype,"tabIdx",void 0);ke([u()],te.prototype,"connectors",void 0);te=ke([T("w3m-connect-injected-widget")],te);var Ae=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let ee=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return t!=null&&t.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(i=>c`
            <wui-list-wallet
              imageSrc=${I(G.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){U.setActiveConnector(t),q.push("ConnectingMultiChain")}};Ae([u()],ee.prototype,"tabIdx",void 0);Ae([_()],ee.prototype,"connectors",void 0);ee=Ae([T("w3m-connect-multi-chain-widget")],ee);var pe=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Mt=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.loading=!1,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t)),O.isTelegram()&&O.isIos()&&(this.loading=!A.state.wcUri,this.unsubscribe.push(A.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const i=ue.getRecentWallets().filter(n=>!de.isExcluded(n)).filter(n=>!this.hasWalletConnector(n)).filter(n=>this.isWalletCompatibleWithCurrentChain(n));return i.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(n=>c`
            <wui-list-wallet
              imageSrc=${I(G.getWalletImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnectWallet(n)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||U.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(i=>i.id===t.id||i.name===t.name)}isWalletCompatibleWithCurrentChain(t){const i=Ie.state.activeChain;return i&&t.chains?t.chains.some(n=>{const o=n.split(":")[0];return i===o}):!0}};pe([u()],Mt.prototype,"tabIdx",void 0);pe([_()],Mt.prototype,"connectors",void 0);pe([_()],Mt.prototype,"loading",void 0);Mt=pe([T("w3m-connect-recent-widget")],Mt);var we=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Ut=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,O.isTelegram()&&O.isIos()&&(this.loading=!A.state.wcUri,this.unsubscribe.push(A.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=U.state,{customWallets:i,featuredWalletIds:n}=it.state,o=ue.getRecentWallets(),e=t.find(W=>W.id==="walletConnect"),s=t.filter(W=>W.type==="INJECTED"||W.type==="ANNOUNCED"||W.type==="MULTI_CHAIN").filter(W=>W.name!=="Browser Wallet");if(!e)return null;if(n||i||!this.wallets.length)return this.style.cssText="display: none",null;const l=s.length+o.length,d=Math.max(0,2-l),h=de.filterOutDuplicateWallets(this.wallets).slice(0,d);return h.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${h.map(W=>c`
            <wui-list-wallet
              imageSrc=${I(G.getWalletImage(W))}
              name=${(W==null?void 0:W.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(W)}
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const i=U.getConnector(t.id,t.rdns);i?q.push("ConnectingExternal",{connector:i}):q.push("ConnectingWalletConnect",{wallet:t})}};we([u()],Ut.prototype,"tabIdx",void 0);we([u()],Ut.prototype,"wallets",void 0);we([_()],Ut.prototype,"loading",void 0);Ut=we([T("w3m-connect-recommended-widget")],Ut);var fe=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let qt=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.connectorImages=Ke.state.connectorImages,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t),Ke.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(O.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(n=>n.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const i=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return c`
      <wui-list-wallet
        imageSrc=${I(i)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${I(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){U.setActiveConnector(t),q.push("ConnectingWalletConnect")}};fe([u()],qt.prototype,"tabIdx",void 0);fe([_()],qt.prototype,"connectors",void 0);fe([_()],qt.prototype,"connectorImages",void 0);qt=fe([T("w3m-connect-walletconnect-widget")],qt);var Ti=M`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Vt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let xt=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=U.state.connectors,this.recommended=N.state.recommended,this.featured=N.state.featured,this.unsubscribe.push(U.subscribeKey("connectors",t=>this.connectors=t),N.subscribeKey("recommended",t=>this.recommended=t),N.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:i,announced:n,injected:o,multiChain:e,recommended:a,featured:s,external:l}=Nt.getConnectorsByType(this.connectors,this.recommended,this.featured);return Nt.getConnectorTypeOrder({custom:t,recent:i,announced:n,injected:o,multiChain:e,recommended:a,featured:s,external:l}).map(h=>{switch(h){case"injected":return c`
            ${e.length?c`<w3m-connect-multi-chain-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${n.length?c`<w3m-connect-announced-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?c`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return c`<w3m-connect-walletconnect-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return c`<w3m-connect-recent-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return c`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return c`<w3m-connect-custom-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return c`<w3m-connect-external-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return c`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${h}`),null}})}};xt.styles=Ti;Vt([u()],xt.prototype,"tabIdx",void 0);Vt([_()],xt.prototype,"connectors",void 0);Vt([_()],xt.prototype,"recommended",void 0);Vt([_()],xt.prototype,"featured",void 0);xt=Vt([T("w3m-connector-list")],xt);var Bi=M`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,vt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let at=class extends L{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,i)=>{var n;const o=i===this.activeTab;return c`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(i)}
          data-active=${o}
          data-testid="tab-${(n=t.label)===null||n===void 0?void 0:n.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?c`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,i){const n=this.buttons[this.activeTab],o=this.buttons[t],e=n==null?void 0:n.querySelector("wui-text"),a=o==null?void 0:o.querySelector("wui-text"),s=o==null?void 0:o.getBoundingClientRect(),l=a==null?void 0:a.getBoundingClientRect();n&&e&&!i&&t!==this.activeTab&&(e.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&s&&l&&a&&(t!==this.activeTab||i)&&(this.localTabWidth=`${Math.round(s.width+l.width)+6}px`,o.animate([{width:`${s.width+l.width}px`}],{duration:i?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:i?0:125,delay:i?0:200,fill:"forwards",easing:"ease"}))}};at.styles=[V,J,Bi];vt([u({type:Array})],at.prototype,"tabs",void 0);vt([u()],at.prototype,"onTabChange",void 0);vt([u({type:Array})],at.prototype,"buttons",void 0);vt([u({type:Boolean})],at.prototype,"disabled",void 0);vt([u()],at.prototype,"localTabWidth",void 0);vt([_()],at.prototype,"activeTab",void 0);vt([_()],at.prototype,"isDense",void 0);at=vt([T("wui-tabs")],at);var ze=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let ie=class extends L{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return c`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){var i;const n=this.platformTabs[t];n&&((i=this.onSelectPlatfrom)===null||i===void 0||i.call(this,n))}};ze([u({type:Array})],ie.prototype,"platforms",void 0);ze([u()],ie.prototype,"onSelectPlatfrom",void 0);ie=ze([T("w3m-connecting-header")],ie);var Li=M`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,st=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};const Ge={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Pi={lg:"paragraph-600",md:"small-600"},Oi={lg:"md",md:"md"};let Z=class extends L{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??Pi[this.size];return c`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=Oi[this.size],i=this.disabled?Ge.disabled:Ge[this.variant];return c`<wui-loading-spinner color=${i} size=${t}></wui-loading-spinner>`}return c``}};Z.styles=[V,J,Li];st([u()],Z.prototype,"size",void 0);st([u({type:Boolean})],Z.prototype,"disabled",void 0);st([u({type:Boolean})],Z.prototype,"fullWidth",void 0);st([u({type:Boolean})],Z.prototype,"loading",void 0);st([u()],Z.prototype,"variant",void 0);st([u({type:Boolean})],Z.prototype,"hasIconLeft",void 0);st([u({type:Boolean})],Z.prototype,"hasIconRight",void 0);st([u()],Z.prototype,"borderRadius",void 0);st([u()],Z.prototype,"textVariant",void 0);Z=st([T("wui-button")],Z);var ji=M`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,ge=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Tt=class extends L{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return c`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Tt.styles=[V,J,ji];ge([u()],Tt.prototype,"tabIdx",void 0);ge([u({type:Boolean})],Tt.prototype,"disabled",void 0);ge([u()],Tt.prototype,"color",void 0);Tt=ge([T("wui-link")],Tt);var ki=M`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,ni=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let oe=class extends L{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,n=36-t,o=116+n,e=245+n,a=360+n*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${e}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};oe.styles=[V,ki];ni([u({type:Number})],oe.prototype,"radius",void 0);oe=ni([T("wui-loading-thumbnail")],oe);var Ai=M`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,It=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let ft=class extends L{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return c`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?c`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ft.styles=[V,J,Ai];It([u()],ft.prototype,"variant",void 0);It([u()],ft.prototype,"imageSrc",void 0);It([u({type:Boolean})],ft.prototype,"disabled",void 0);It([u()],ft.prototype,"icon",void 0);It([u()],ft.prototype,"size",void 0);It([u()],ft.prototype,"text",void 0);ft=It([T("wui-chip-button")],ft);var zi=M`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,me=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Bt=class extends L{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Bt.styles=[V,J,zi];me([u({type:Boolean})],Bt.prototype,"disabled",void 0);me([u()],Bt.prototype,"label",void 0);me([u()],Bt.prototype,"buttonLabel",void 0);Bt=me([T("wui-cta-button")],Bt);var Ni=M`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,ri=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let ne=class extends L{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:n,chrome_store:o,homepage:e}=this.wallet,a=O.isMobile(),s=O.isIos(),l=O.isAndroid(),d=[i,n,e,o].filter(Boolean).length>1,h=pt.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>q.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&e?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&s?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&l?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;!((t=this.wallet)===null||t===void 0)&&t.app_store&&O.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;!((t=this.wallet)===null||t===void 0)&&t.play_store&&O.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;!((t=this.wallet)===null||t===void 0)&&t.homepage&&O.openHref(this.wallet.homepage,"_blank")}};ne.styles=[Ni];ri([u({type:Object})],ne.prototype,"wallet",void 0);ne=ri([T("w3m-mobile-download-links")],ne);var Di=M`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,lt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e},H=class extends L{constructor(){var r,t,i,n,o;super(),this.wallet=(r=q.state.data)===null||r===void 0?void 0:r.wallet,this.connector=(t=q.state.data)===null||t===void 0?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=G.getWalletImage(this.wallet)??G.getConnectorImage(this.connector),this.name=((i=this.wallet)===null||i===void 0?void 0:i.name)??((n=this.connector)===null||n===void 0?void 0:n.name)??"Wallet",this.isRetrying=!1,this.uri=A.state.wcUri,this.error=A.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(A.subscribeKey("wcUri",e=>{if(this.uri=e,this.isRetrying&&this.onRetry){var a;this.isRetrying=!1,(a=this.onConnect)===null||a===void 0||a.call(this)}}),A.subscribeKey("wcError",e=>this.error=e)),(O.isTelegram()||O.isSafari())&&O.isIos()&&A.state.wcUri&&((o=this.onConnect)===null||o===void 0||o.call(this))}firstUpdated(){var r;(r=this.onAutoConnect)===null||r===void 0||r.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(r=>r()),A.setWcError(!1),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)===null||r===void 0||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.error&&(i="Connection declined"),c`
      <wui-flex
        data-error=${I(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${I(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?c`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){var r;this.showRetry=!0;const t=(r=this.shadowRoot)===null||r===void 0?void 0:r.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var r;if(A.setWcError(!1),this.onRetry){var t;this.isRetrying=!0,(t=this.onRetry)===null||t===void 0||t.call(this)}else(r=this.onConnect)===null||r===void 0||r.call(this)}loaderTemplate(){const r=We.state.themeVariables["--w3m-border-radius-master"],t=r?parseInt(r.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(O.copyToClopboard(this.uri),Yt.showSuccess("Link copied"))}catch{Yt.showError("Failed to copy")}}};H.styles=Di;lt([_()],H.prototype,"isRetrying",void 0);lt([_()],H.prototype,"uri",void 0);lt([_()],H.prototype,"error",void 0);lt([_()],H.prototype,"ready",void 0);lt([_()],H.prototype,"showRetry",void 0);lt([_()],H.prototype,"secondaryBtnLabel",void 0);lt([_()],H.prototype,"secondaryLabel",void 0);lt([_()],H.prototype,"isLoading",void 0);lt([u({type:Boolean})],H.prototype,"isMobile",void 0);lt([u()],H.prototype,"onRetry",void 0);var Mi=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Ye=class extends H{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{var t;this.error=!1;const{connectors:i}=U.state,n=i.find(o=>{var e,a,s;return o.type==="ANNOUNCED"&&((e=o.info)===null||e===void 0?void 0:e.rdns)===((a=this.wallet)===null||a===void 0?void 0:a.rdns)||o.type==="INJECTED"||o.name===((s=this.wallet)===null||s===void 0?void 0:s.name)});if(n)await A.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ii.close(),ot.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)===null||t===void 0?void 0:t.name)||"Unknown"}})}catch(i){ot.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),this.error=!0}}};Ye=Mi([T("w3m-connecting-wc-browser")],Ye);var Ui=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Je=class extends H{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){if(!this.ready&&this.uri){var t;this.ready=!0,(t=this.onConnect)===null||t===void 0||t.call(this)}}onConnectProxy(){var t;if(!((t=this.wallet)===null||t===void 0)&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:n}=this.wallet,{redirect:o,href:e}=O.formatNativeUrl(i,this.uri);A.setWcLinking({name:n,href:e}),A.setRecentWallet(this.wallet),O.openHref(o,"_blank")}catch{this.error=!0}}};Je=Ui([T("w3m-connecting-wc-desktop")],Je);var jt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let $t=class extends H{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=it.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var t;if(!((t=this.wallet)===null||t===void 0)&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:i,link_mode:n,name:o}=this.wallet,{redirect:e,redirectUniversalLink:a,href:s}=O.formatNativeUrl(i,this.uri,n);this.redirectDeeplink=e,this.redirectUniversalLink=a,this.target=O.isIframe()?"_top":"_self",A.setWcLinking({name:o,href:s}),A.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?O.openHref(this.redirectUniversalLink,this.target):O.openHref(this.redirectDeeplink,this.target)}catch(i){ot.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:i instanceof Error?i.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ei.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(A.subscribeKey("wcUri",()=>{this.onHandleURI()})),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){if(this.isLoading=!this.uri,!this.ready&&this.uri){var t;this.ready=!0,(t=this.onConnect)===null||t===void 0||t.call(this)}}onTryAgain(){var t;A.setWcError(!1),(t=this.onConnect)===null||t===void 0||t.call(this)}};jt([_()],$t.prototype,"redirectDeeplink",void 0);jt([_()],$t.prototype,"redirectUniversalLink",void 0);jt([_()],$t.prototype,"target",void 0);jt([_()],$t.prototype,"preferUniversalLinks",void 0);jt([_()],$t.prototype,"isLoading",void 0);$t=jt([T("w3m-connecting-wc-mobile")],$t);var qi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/can-promise.js"(r,t){t.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}}}),Wt=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/utils.js"(r){let t;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];r.getSymbolSize=function(o){if(!o)throw new Error('"version" cannot be null or undefined');if(o<1||o>40)throw new Error('"version" should be in range from 1 to 40');return o*4+17},r.getSymbolTotalCodewords=function(o){return i[o]},r.getBCHDigit=function(n){let o=0;for(;n!==0;)o++,n>>>=1;return o},r.setToSJISFunction=function(o){if(typeof o!="function")throw new Error('"toSJISFunc" is not a valid function.');t=o},r.isKanjiModeEnabled=function(){return typeof t<"u"},r.toSJIS=function(o){return t(o)}}}),Ne=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/error-correction-level.js"(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+i)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,o){if(r.isValid(n))return n;try{return t(n)}catch{return o}}}}),Vi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/bit-buffer.js"(r,t){function i(){this.buffer=[],this.length=0}i.prototype={get:function(n){const o=Math.floor(n/8);return(this.buffer[o]>>>7-n%8&1)===1},put:function(n,o){for(let e=0;e<o;e++)this.putBit((n>>>o-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),n&&(this.buffer[o]|=128>>>this.length%8),this.length++}},t.exports=i}}),Fi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/bit-matrix.js"(r,t){function i(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}i.prototype.set=function(n,o,e,a){const s=n*this.size+o;this.data[s]=e,a&&(this.reservedBit[s]=!0)},i.prototype.get=function(n,o){return this.data[n*this.size+o]},i.prototype.xor=function(n,o,e){this.data[n*this.size+o]^=e},i.prototype.isReserved=function(n,o){return this.reservedBit[n*this.size+o]},t.exports=i}}),Hi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/alignment-pattern.js"(r){const t=Wt().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,e=t(n),a=e===145?26:Math.ceil((e-13)/(2*o-2))*2,s=[e-7];for(let l=1;l<o-1;l++)s[l]=s[l-1]-a;return s.push(6),s.reverse()},r.getPositions=function(n){const o=[],e=r.getRowColCoords(n),a=e.length;for(let s=0;s<a;s++)for(let l=0;l<a;l++)s===0&&l===0||s===0&&l===a-1||s===a-1&&l===0||o.push([e[s],e[l]]);return o}}}),Ki=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/finder-pattern.js"(r){const t=Wt().getSymbolSize,i=7;r.getPositions=function(o){const e=t(o);return[[0,0],[e-i,0],[0,e-i]]}}}),Gi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/mask-pattern.js"(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};r.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},r.from=function(o){return r.isValid(o)?parseInt(o,10):void 0},r.getPenaltyN1=function(o){const e=o.size;let a=0,s=0,l=0,d=null,h=null;for(let W=0;W<e;W++){s=l=0,d=h=null;for(let m=0;m<e;m++){let f=o.get(W,m);f===d?s++:(s>=5&&(a+=t.N1+(s-5)),d=f,s=1),f=o.get(m,W),f===h?l++:(l>=5&&(a+=t.N1+(l-5)),h=f,l=1)}s>=5&&(a+=t.N1+(s-5)),l>=5&&(a+=t.N1+(l-5))}return a},r.getPenaltyN2=function(o){const e=o.size;let a=0;for(let s=0;s<e-1;s++)for(let l=0;l<e-1;l++){const d=o.get(s,l)+o.get(s,l+1)+o.get(s+1,l)+o.get(s+1,l+1);(d===4||d===0)&&a++}return a*t.N2},r.getPenaltyN3=function(o){const e=o.size;let a=0,s=0,l=0;for(let d=0;d<e;d++){s=l=0;for(let h=0;h<e;h++)s=s<<1&2047|o.get(d,h),h>=10&&(s===1488||s===93)&&a++,l=l<<1&2047|o.get(h,d),h>=10&&(l===1488||l===93)&&a++}return a*t.N3},r.getPenaltyN4=function(o){let e=0;const a=o.data.length;for(let l=0;l<a;l++)e+=o.data[l];return Math.abs(Math.ceil(e*100/a/5)-10)*t.N4};function i(n,o,e){switch(n){case r.Patterns.PATTERN000:return(o+e)%2===0;case r.Patterns.PATTERN001:return o%2===0;case r.Patterns.PATTERN010:return e%3===0;case r.Patterns.PATTERN011:return(o+e)%3===0;case r.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(e/3))%2===0;case r.Patterns.PATTERN101:return o*e%2+o*e%3===0;case r.Patterns.PATTERN110:return(o*e%2+o*e%3)%2===0;case r.Patterns.PATTERN111:return(o*e%3+(o+e)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(o,e){const a=e.size;for(let s=0;s<a;s++)for(let l=0;l<a;l++)e.isReserved(l,s)||e.xor(l,s,i(o,l,s))},r.getBestMask=function(o,e){const a=Object.keys(r.Patterns).length;let s=0,l=1/0;for(let d=0;d<a;d++){e(d),r.applyMask(d,o);const h=r.getPenaltyN1(o)+r.getPenaltyN2(o)+r.getPenaltyN3(o)+r.getPenaltyN4(o);r.applyMask(d,o),h<l&&(l=h,s=d)}return s}}}),ai=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/error-correction-code.js"(r){const t=Ne(),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];r.getBlocksCount=function(e,a){switch(a){case t.L:return i[(e-1)*4+0];case t.M:return i[(e-1)*4+1];case t.Q:return i[(e-1)*4+2];case t.H:return i[(e-1)*4+3];default:return}},r.getTotalCodewordsCount=function(e,a){switch(a){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}}}}),Yi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/galois-field.js"(r){const t=new Uint8Array(512),i=new Uint8Array(256);(function(){let o=1;for(let e=0;e<255;e++)t[e]=o,i[o]=e,o<<=1,o&256&&(o^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),r.log=function(o){if(o<1)throw new Error("log("+o+")");return i[o]},r.exp=function(o){return t[o]},r.mul=function(o,e){return o===0||e===0?0:t[i[o]+i[e]]}}}),Ji=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/polynomial.js"(r){const t=Yi();r.mul=function(n,o){const e=new Uint8Array(n.length+o.length-1);for(let a=0;a<n.length;a++)for(let s=0;s<o.length;s++)e[a+s]^=t.mul(n[a],o[s]);return e},r.mod=function(n,o){let e=new Uint8Array(n);for(;e.length-o.length>=0;){const a=e[0];for(let l=0;l<o.length;l++)e[l]^=t.mul(o[l],a);let s=0;for(;s<e.length&&e[s]===0;)s++;e=e.slice(s)}return e},r.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let e=0;e<n;e++)o=r.mul(o,new Uint8Array([1,t.exp(e)]));return o}}}),Qi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/reed-solomon-encoder.js"(r,t){const i=Ji();function n(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const a=new Uint8Array(e.length+this.degree);a.set(e);const s=i.mod(a,this.genPoly),l=this.degree-s.length;if(l>0){const d=new Uint8Array(this.degree);return d.set(s,l),d}return s},t.exports=n}}),si=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/version-check.js"(r){r.isValid=function(i){return!isNaN(i)&&i>=1&&i<=40}}}),li=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/regex.js"(r){const t="[0-9]+",i="[A-Z $%*+\\-./:]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const o="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+`)(?:.|[\r
]))+`;r.KANJI=new RegExp(n,"g"),r.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),r.BYTE=new RegExp(o,"g"),r.NUMERIC=new RegExp(t,"g"),r.ALPHANUMERIC=new RegExp(i,"g");const e=new RegExp("^"+n+"$"),a=new RegExp("^"+t+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");r.testKanji=function(d){return e.test(d)},r.testNumeric=function(d){return a.test(d)},r.testAlphanumeric=function(d){return s.test(d)}}}),Et=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/mode.js"(r){const t=si(),i=li();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(e,a){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?e.ccBits[0]:a<27?e.ccBits[1]:e.ccBits[2]},r.getBestModeForData=function(e){return i.testNumeric(e)?r.NUMERIC:i.testAlphanumeric(e)?r.ALPHANUMERIC:i.testKanji(e)?r.KANJI:r.BYTE},r.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},r.isValid=function(e){return e&&e.bit&&e.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+o)}}r.from=function(e,a){if(r.isValid(e))return e;try{return n(e)}catch{return a}}}}),Xi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/version.js"(r){const t=Wt(),i=ai(),n=Ne(),o=Et(),e=si(),a=7973,s=t.getBCHDigit(a);function l(m,f,R){for(let y=1;y<=40;y++)if(f<=r.getCapacity(y,R,m))return y}function d(m,f){return o.getCharCountIndicator(m,f)+4}function h(m,f){let R=0;return m.forEach(function(y){const S=d(y.mode,f);R+=S+y.getBitsLength()}),R}function W(m,f){for(let R=1;R<=40;R++)if(h(m,R)<=r.getCapacity(R,f,o.MIXED))return R}r.from=function(f,R){return e.isValid(f)?parseInt(f,10):R},r.getCapacity=function(f,R,y){if(!e.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const S=t.getSymbolTotalCodewords(f),g=i.getTotalCodewordsCount(f,R),p=(S-g)*8;if(y===o.MIXED)return p;const b=p-d(y,f);switch(y){case o.NUMERIC:return Math.floor(b/10*3);case o.ALPHANUMERIC:return Math.floor(b/11*2);case o.KANJI:return Math.floor(b/13);case o.BYTE:default:return Math.floor(b/8)}},r.getBestVersionForData=function(f,R){let y;const S=n.from(R,n.M);if(Array.isArray(f)){if(f.length>1)return W(f,S);if(f.length===0)return 1;y=f[0]}else y=f;return l(y.mode,y.getLength(),S)},r.getEncodedBits=function(f){if(!e.isValid(f)||f<7)throw new Error("Invalid QR Code version");let R=f<<12;for(;t.getBCHDigit(R)-s>=0;)R^=a<<t.getBCHDigit(R)-s;return f<<12|R}}}),Zi=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/format-info.js"(r){const t=Wt(),i=1335,n=21522,o=t.getBCHDigit(i);r.getEncodedBits=function(a,s){const l=a.bit<<3|s;let d=l<<10;for(;t.getBCHDigit(d)-o>=0;)d^=i<<t.getBCHDigit(d)-o;return(l<<10|d)^n}}}),to=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/numeric-data.js"(r,t){const i=Et();function n(o){this.mode=i.NUMERIC,this.data=o.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let a,s,l;for(a=0;a+3<=this.data.length;a+=3)s=this.data.substr(a,3),l=parseInt(s,10),e.put(l,10);const d=this.data.length-a;d>0&&(s=this.data.substr(a),l=parseInt(s,10),e.put(l,d*3+1))},t.exports=n}}),eo=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/alphanumeric-data.js"(r,t){const i=Et(),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(a){return 11*Math.floor(a/2)+6*(a%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(a){let s;for(s=0;s+2<=this.data.length;s+=2){let l=n.indexOf(this.data[s])*45;l+=n.indexOf(this.data[s+1]),a.put(l,11)}this.data.length%2&&a.put(n.indexOf(this.data[s]),6)},t.exports=o}}),io=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/byte-data.js"(r,t){const i=yi(),n=Et();function o(e){this.mode=n.BYTE,typeof e=="string"&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(a){return a*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let a=0,s=this.data.length;a<s;a++)e.put(this.data[a],8)},t.exports=o}}),oo=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/kanji-data.js"(r,t){const i=Et(),n=Wt();function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(a){return a*13},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let a;for(a=0;a<this.data.length;a++){let s=n.toSJIS(this.data[a]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[a]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),e.put(s,13)}},t.exports=o}}),no=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/segments.js"(r){const t=Et(),i=to(),n=eo(),o=io(),e=oo(),a=li(),s=Wt(),l=xi();function d(g){return unescape(encodeURIComponent(g)).length}function h(g,p,b){const w=[];let z;for(;(z=g.exec(b))!==null;)w.push({data:z[0],index:z.index,mode:p,length:z[0].length});return w}function W(g){const p=h(a.NUMERIC,t.NUMERIC,g),b=h(a.ALPHANUMERIC,t.ALPHANUMERIC,g);let w,z;return s.isKanjiModeEnabled()?(w=h(a.BYTE,t.BYTE,g),z=h(a.KANJI,t.KANJI,g)):(w=h(a.BYTE_KANJI,t.BYTE,g),z=[]),p.concat(b,w,z).sort(function(x,B){return x.index-B.index}).map(function(x){return{data:x.data,mode:x.mode,length:x.length}})}function m(g,p){switch(p){case t.NUMERIC:return i.getBitsLength(g);case t.ALPHANUMERIC:return n.getBitsLength(g);case t.KANJI:return e.getBitsLength(g);case t.BYTE:return o.getBitsLength(g)}}function f(g){return g.reduce(function(p,b){const w=p.length-1>=0?p[p.length-1]:null;return w&&w.mode===b.mode?(p[p.length-1].data+=b.data,p):(p.push(b),p)},[])}function R(g){const p=[];for(let b=0;b<g.length;b++){const w=g[b];switch(w.mode){case t.NUMERIC:p.push([w,{data:w.data,mode:t.ALPHANUMERIC,length:w.length},{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.ALPHANUMERIC:p.push([w,{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.KANJI:p.push([w,{data:w.data,mode:t.BYTE,length:d(w.data)}]);break;case t.BYTE:p.push([{data:w.data,mode:t.BYTE,length:d(w.data)}])}}return p}function y(g,p){const b={},w={start:{}};let z=["start"];for(let K=0;K<g.length;K++){const x=g[K],B=[];for(let C=0;C<x.length;C++){const v=x[C],j=""+K+C;B.push(j),b[j]={node:v,lastCount:0},w[j]={};for(let E=0;E<z.length;E++){const $=z[E];b[$]&&b[$].node.mode===v.mode?(w[$][j]=m(b[$].lastCount+v.length,v.mode)-m(b[$].lastCount,v.mode),b[$].lastCount+=v.length):(b[$]&&(b[$].lastCount=v.length),w[$][j]=m(v.length,v.mode)+4+t.getCharCountIndicator(v.mode,p))}}z=B}for(let K=0;K<z.length;K++)w[z[K]].end=0;return{map:w,table:b}}function S(g,p){let b;const w=t.getBestModeForData(g);if(b=t.from(p,w),b!==t.BYTE&&b.bit<w.bit)throw new Error('"'+g+'" cannot be encoded with mode '+t.toString(b)+`.
 Suggested mode is: `+t.toString(w));switch(b===t.KANJI&&!s.isKanjiModeEnabled()&&(b=t.BYTE),b){case t.NUMERIC:return new i(g);case t.ALPHANUMERIC:return new n(g);case t.KANJI:return new e(g);case t.BYTE:return new o(g)}}r.fromArray=function(p){return p.reduce(function(b,w){return typeof w=="string"?b.push(S(w,null)):w.data&&b.push(S(w.data,w.mode)),b},[])},r.fromString=function(p,b){const w=W(p,s.isKanjiModeEnabled()),z=R(w),K=y(z,b),x=l.find_path(K.map,"start","end"),B=[];for(let C=1;C<x.length-1;C++)B.push(K.table[x[C]].node);return r.fromArray(f(B))},r.rawSplit=function(p){return r.fromArray(W(p,s.isKanjiModeEnabled()))}}}),ro=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/core/qrcode.js"(r){const t=Wt(),i=Ne(),n=Vi(),o=Fi(),e=Hi(),a=Ki(),s=Gi(),l=ai(),d=Qi(),h=Xi(),W=Zi(),m=Et(),f=no();function R(x,B){const C=x.size,v=a.getPositions(B);for(let j=0;j<v.length;j++){const E=v[j][0],$=v[j][1];for(let k=-1;k<=7;k++)if(!(E+k<=-1||C<=E+k))for(let P=-1;P<=7;P++)$+P<=-1||C<=$+P||(k>=0&&k<=6&&(P===0||P===6)||P>=0&&P<=6&&(k===0||k===6)||k>=2&&k<=4&&P>=2&&P<=4?x.set(E+k,$+P,!0,!0):x.set(E+k,$+P,!1,!0))}}function y(x){const B=x.size;for(let C=8;C<B-8;C++){const v=C%2===0;x.set(C,6,v,!0),x.set(6,C,v,!0)}}function S(x,B){const C=e.getPositions(B);for(let v=0;v<C.length;v++){const j=C[v][0],E=C[v][1];for(let $=-2;$<=2;$++)for(let k=-2;k<=2;k++)$===-2||$===2||k===-2||k===2||$===0&&k===0?x.set(j+$,E+k,!0,!0):x.set(j+$,E+k,!1,!0)}}function g(x,B){const C=x.size,v=h.getEncodedBits(B);let j,E,$;for(let k=0;k<18;k++)j=Math.floor(k/3),E=k%3+C-8-3,$=(v>>k&1)===1,x.set(j,E,$,!0),x.set(E,j,$,!0)}function p(x,B,C){const v=x.size,j=W.getEncodedBits(B,C);let E,$;for(E=0;E<15;E++)$=(j>>E&1)===1,E<6?x.set(E,8,$,!0):E<8?x.set(E+1,8,$,!0):x.set(v-15+E,8,$,!0),E<8?x.set(8,v-E-1,$,!0):E<9?x.set(8,15-E-1+1,$,!0):x.set(8,15-E-1,$,!0);x.set(v-8,8,1,!0)}function b(x,B){const C=x.size;let v=-1,j=C-1,E=7,$=0;for(let k=C-1;k>0;k-=2)for(k===6&&k--;;){for(let P=0;P<2;P++)if(!x.isReserved(j,k-P)){let mt=!1;$<B.length&&(mt=(B[$]>>>E&1)===1),x.set(j,k-P,mt),E--,E===-1&&($++,E=7)}if(j+=v,j<0||C<=j){j-=v,v=-v;break}}}function w(x,B,C){const v=new n;C.forEach(function(P){v.put(P.mode.bit,4),v.put(P.getLength(),m.getCharCountIndicator(P.mode,x)),P.write(v)});const j=t.getSymbolTotalCodewords(x),E=l.getTotalCodewordsCount(x,B),$=(j-E)*8;for(v.getLengthInBits()+4<=$&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const k=($-v.getLengthInBits())/8;for(let P=0;P<k;P++)v.put(P%2?17:236,8);return z(v,x,B)}function z(x,B,C){const v=t.getSymbolTotalCodewords(B),j=l.getTotalCodewordsCount(B,C),E=v-j,$=l.getBlocksCount(B,C),k=v%$,P=$-k,mt=Math.floor(v/$),At=Math.floor(E/$),gi=At+1,qe=mt-At,mi=new d(qe);let ve=0;const Gt=new Array($),Ve=new Array($);let ye=0;const bi=new Uint8Array(x.buffer);for(let St=0;St<$;St++){const $e=St<P?At:gi;Gt[St]=bi.slice(ve,ve+$e),Ve[St]=mi.encode(Gt[St]),ve+=$e,ye=Math.max(ye,$e)}const xe=new Uint8Array(v);let Fe=0,ut,dt;for(ut=0;ut<ye;ut++)for(dt=0;dt<$;dt++)ut<Gt[dt].length&&(xe[Fe++]=Gt[dt][ut]);for(ut=0;ut<qe;ut++)for(dt=0;dt<$;dt++)xe[Fe++]=Ve[dt][ut];return xe}function K(x,B,C,v){let j;if(Array.isArray(x))j=f.fromArray(x);else if(typeof x=="string"){let mt=B;if(!mt){const At=f.rawSplit(x);mt=h.getBestVersionForData(At,C)}j=f.fromString(x,mt||40)}else throw new Error("Invalid data");const E=h.getBestVersionForData(j,C);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(!B)B=E;else if(B<E)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+E+`.
`);const $=w(B,C,j),k=t.getSymbolSize(B),P=new o(k);return R(P,B),y(P),S(P,B),p(P,C,0),B>=7&&g(P,B),b(P,$),isNaN(v)&&(v=s.getBestMask(P,p.bind(null,P,C))),s.applyMask(v,P),p(P,C,v),{modules:P,version:B,errorCorrectionLevel:C,maskPattern:v,segments:j}}r.create=function(B,C){if(typeof B>"u"||B==="")throw new Error("No input text");let v=i.M,j,E;return typeof C<"u"&&(v=i.from(C.errorCorrectionLevel,i.M),j=h.from(C.version),E=s.from(C.maskPattern),C.toSJISFunc&&t.setToSJISFunction(C.toSJISFunc)),K(B,j,v,E)}}}),ci=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/renderer/utils.js"(r){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let n=i.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+i);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(e){return[e,e]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,e=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:e,scale:e?4:a,margin:o,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},r.getImageWidth=function(n,o){const e=r.getScale(n,o);return Math.floor((n+o.margin*2)*e)},r.qrToImageData=function(n,o,e){const a=o.modules.size,s=o.modules.data,l=r.getScale(a,e),d=Math.floor((a+e.margin*2)*l),h=e.margin*l,W=[e.color.light,e.color.dark];for(let m=0;m<d;m++)for(let f=0;f<d;f++){let R=(m*d+f)*4,y=e.color.light;if(m>=h&&f>=h&&m<d-h&&f<d-h){const S=Math.floor((m-h)/l),g=Math.floor((f-h)/l);y=W[s[S*a+g]?1:0]}n[R++]=y.r,n[R++]=y.g,n[R++]=y.b,n[R]=y.a}}}}),ao=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/renderer/canvas.js"(r){const t=ci();function i(o,e,a){o.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=a,e.width=a,e.style.height=a+"px",e.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(e,a,s){let l=s,d=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(d=n()),l=t.getOptions(l);const h=t.getImageWidth(e.modules.size,l),W=d.getContext("2d"),m=W.createImageData(h,h);return t.qrToImageData(m.data,e,l),i(W,d,h),W.putImageData(m,0,0),d},r.renderToDataURL=function(e,a,s){let l=s;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const d=r.render(e,a,l),h=l.type||"image/png",W=l.rendererOpts||{};return d.toDataURL(h,W.quality)}}}),so=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/renderer/svg-tag.js"(r){const t=ci();function i(e,a){const s=e.a/255,l=a+'="'+e.hex+'"';return s<1?l+" "+a+'-opacity="'+s.toFixed(2).slice(1)+'"':l}function n(e,a,s){let l=e+a;return typeof s<"u"&&(l+=" "+s),l}function o(e,a,s){let l="",d=0,h=!1,W=0;for(let m=0;m<e.length;m++){const f=Math.floor(m%a),R=Math.floor(m/a);!f&&!h&&(h=!0),e[m]?(W++,m>0&&f>0&&e[m-1]||(l+=h?n("M",f+s,.5+R+s):n("m",d,0),d=0,h=!1),f+1<a&&e[m+1]||(l+=n("h",W),W=0)):d++}return l}r.render=function(a,s,l){const d=t.getOptions(s),h=a.modules.size,W=a.modules.data,m=h+d.margin*2,f=d.color.light.a?"<path "+i(d.color.light,"fill")+' d="M0 0h'+m+"v"+m+'H0z"/>':"",R="<path "+i(d.color.dark,"stroke")+' d="'+o(W,h,d.margin)+'"/>',y='viewBox="0 0 '+m+" "+m+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(d.width?'width="'+d.width+'" height="'+d.width+'" ':"")+y+' shape-rendering="crispEdges">'+f+R+`</svg>
`;return typeof l=="function"&&l(null,g),g}}}),lo=D({"../../node_modules/@reown/appkit-ui/node_modules/qrcode/lib/browser.js"(r){const t=qi(),i=ro(),n=ao(),o=so();function e(a,s,l,d,h){const W=[].slice.call(arguments,1),m=W.length,f=typeof W[m-1]=="function";if(!f&&!t())throw new Error("Callback required as last argument");if(f){if(m<2)throw new Error("Too few arguments provided");m===2?(h=l,l=s,s=d=void 0):m===3&&(s.getContext&&typeof h>"u"?(h=d,d=void 0):(h=d,d=l,l=s,s=void 0))}else{if(m<1)throw new Error("Too few arguments provided");return m===1?(l=s,s=d=void 0):m===2&&!s.getContext&&(d=l,l=s,s=void 0),new Promise(function(R,y){try{const S=i.create(l,d);R(a(S,s,d))}catch(S){y(S)}})}try{const R=i.create(l,d);h(null,a(R,s,d))}catch(R){h(R)}}r.create=i.create,r.toCanvas=e.bind(null,n.render),r.toDataURL=e.bind(null,n.renderToDataURL),r.toString=e.bind(null,function(a,s,l){return o.render(a,l)})}}),co=vi(lo());const uo=.1,Qe=2.5,ht=7;function _e(r,t,i){return r===t?!1:(r-t<0?t-r:r-t)<=i+uo}function ho(r,t){const i=Array.prototype.slice.call(co.create(r,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(i.length);return i.reduce((o,e,a)=>(a%n===0?o.push([e]):o[o.length-1].push(e))&&o,[])}const po={generate({uri:r,size:t,logoSize:i,dotColor:n="#141414"}){const o="transparent",a=[],s=ho(r,"Q"),l=t/s.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:y,y:S})=>{const g=(s.length-ht)*l*y,p=(s.length-ht)*l*S,b=.45;for(let w=0;w<d.length;w+=1){const z=l*(ht-w*2);a.push(zt`
            <rect
              fill=${w===2?n:o}
              width=${w===0?z-5:z}
              rx= ${w===0?(z-5)*b:z*b}
              ry= ${w===0?(z-5)*b:z*b}
              stroke=${n}
              stroke-width=${w===0?5:0}
              height=${w===0?z-5:z}
              x= ${w===0?p+l*w+5/2:p+l*w}
              y= ${w===0?g+l*w+5/2:g+l*w}
            />
          `)}});const h=Math.floor((i+25)/l),W=s.length/2-h/2,m=s.length/2+h/2-1,f=[];s.forEach((y,S)=>{y.forEach((g,p)=>{if(s[S][p]&&!(S<ht&&p<ht||S>s.length-(ht+1)&&p<ht||S<ht&&p>s.length-(ht+1))&&!(S>W&&S<m&&p>W&&p<m)){const b=S*l+l/2,w=p*l+l/2;f.push([b,w])}})});const R={};return f.forEach(([y,S])=>{var g;R[y]?(g=R[y])===null||g===void 0||g.push(S):R[y]=[S]}),Object.entries(R).map(([y,S])=>{const g=S.filter(p=>S.every(b=>!_e(p,b,l)));return[Number(y),g]}).forEach(([y,S])=>{S.forEach(g=>{a.push(zt`<circle cx=${y} cy=${g} fill=${n} r=${l/Qe} />`)})}),Object.entries(R).filter(([y,S])=>S.length>1).map(([y,S])=>{const g=S.filter(p=>S.some(b=>_e(p,b,l)));return[Number(y),g]}).map(([y,S])=>{S.sort((p,b)=>p<b?-1:1);const g=[];for(const p of S){const b=g.find(w=>w.some(z=>_e(p,z,l)));b?b.push(p):g.push([p])}return[y,g.map(p=>[p[0],p[p.length-1]])]}).forEach(([y,S])=>{S.forEach(([g,p])=>{a.push(zt`
              <line
                x1=${y}
                x2=${y}
                y1=${g}
                y2=${p}
                stroke=${n}
                stroke-width=${l/(Qe/2)}
                stroke-linecap="round"
              />
            `)})}),a}};var wo=M`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,gt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};const fo="#3396ff";let nt=class extends L{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??fo}
    `,c`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return zt`
      <svg height=${t} width=${t}>
        ${po.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};nt.styles=[V,wo];gt([u()],nt.prototype,"uri",void 0);gt([u({type:Number})],nt.prototype,"size",void 0);gt([u()],nt.prototype,"theme",void 0);gt([u()],nt.prototype,"imageSrc",void 0);gt([u()],nt.prototype,"alt",void 0);gt([u()],nt.prototype,"color",void 0);gt([u({type:Boolean})],nt.prototype,"arenaClear",void 0);gt([u({type:Boolean})],nt.prototype,"farcaster",void 0);nt=gt([T("wui-qr-code")],nt);var go=M`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Ft=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Ct=class extends L{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,c`<slot></slot>`}};Ct.styles=[go];Ft([u()],Ct.prototype,"width",void 0);Ft([u()],Ct.prototype,"height",void 0);Ft([u()],Ct.prototype,"borderRadius",void 0);Ft([u()],Ct.prototype,"variant",void 0);Ct=Ft([T("wui-shimmer")],Ct);const mo="https://reown.com";var bo=M`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`,vo=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Ee=class extends L{render(){return c`
      <a
        data-testid="ux-branding-reown"
        href=${mo}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};Ee.styles=[V,J,bo];Ee=vo([T("wui-ux-by-reown")],Ee);var yo=M`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,xo=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Se=class extends H{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)===null||t===void 0?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)===null||t===void 0||t.forEach(i=>i()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return A.setWcLinking(void 0),A.setRecentWallet(this.wallet),c` <wui-qr-code
      size=${t}
      theme=${We.state.themeMode}
      uri=${this.uri}
      imageSrc=${I(G.getWalletImage(this.wallet))}
      color=${I(We.state.themeVariables["--w3m-qr-color"])}
      alt=${I(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return c`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Se.styles=yo;Se=xo([T("w3m-connecting-wc-qrcode")],Se);var $o=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Xe=class extends L{constructor(){var t;if(super(),this.wallet=(t=q.state.data)===null||t===void 0?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${I(G.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Xe=$o([T("w3m-connecting-wc-unsupported")],Xe);var ui=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Te=class extends H{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ei.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(A.subscribeKey("wcUri",()=>{this.updateLoadingState()})),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if(!((t=this.wallet)===null||t===void 0)&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:n}=this.wallet,{redirect:o,href:e}=O.formatUniversalUrl(i,this.uri);A.setWcLinking({name:n,href:e}),A.setRecentWallet(this.wallet),O.openHref(o,"_blank")}catch{this.error=!0}}};ui([_()],Te.prototype,"isLoading",void 0);Te=ui([T("w3m-connecting-wc-web")],Te);var Ht=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Lt=class extends L{constructor(){var t;super(),this.wallet=(t=q.state.data)===null||t===void 0?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!it.state.siwx,this.remoteFeatures=it.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(it.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return!((t=this.remoteFeatures)===null||t===void 0)&&t.reownBranding?c`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(t=!1){if(!(this.platform==="browser"||it.state.manualWCControl&&!t))try{const{wcPairingExpiry:i,status:n}=A.state;(t||it.state.enableEmbedded||O.isPairingExpired(i)||n==="connecting")&&(await A.connectWalletConnect(),this.isSiwxEnabled||ii.close())}catch(i){ot.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),A.setWcError(!0),Yt.showError(i.message??"Connection error"),A.resetWcConnection(),q.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:n,injected:o,rdns:e}=this.wallet,a=o==null?void 0:o.map(({injected_id:R})=>R).filter(Boolean),s=[...e?[e]:a??[]],l=it.state.isUniversalProvider?!1:s.length,d=t,h=n,W=A.checkInstalled(s),m=l&&W,f=i&&!O.isMobile();m&&!Ie.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(O.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),f&&this.platforms.push("desktop"),!m&&l&&!Ie.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var i;const n=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ht([_()],Lt.prototype,"platform",void 0);Ht([_()],Lt.prototype,"platforms",void 0);Ht([_()],Lt.prototype,"isSiwxEnabled",void 0);Ht([_()],Lt.prototype,"remoteFeatures",void 0);Lt=Ht([T("w3m-connecting-wc-view")],Lt);var di=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Be=class extends L{constructor(){super(...arguments),this.isMobile=O.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:i}=N.state,{customWallets:n}=it.state,o=ue.getRecentWallets(),e=t.length||i.length||(n==null?void 0:n.length)||o.length;return c`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${e?c`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};di([_()],Be.prototype,"isMobile",void 0);Be=di([T("w3m-connecting-wc-basic-view")],Be);/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const De=()=>new Co;var Co=class{};const Re=new WeakMap,Me=Ci(class extends _i{render(r){return He}update(r,[t]){var i;const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=(i=r.options)===null||i===void 0?void 0:i.host,this.rt(this.ct=r.element)),He}rt(r){if(this.isConnected||(r=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Re.get(t);i===void 0&&(i=new WeakMap,Re.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,t;return typeof this.G=="function"?(r=Re.get(this.ht??globalThis))===null||r===void 0?void 0:r.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var _o=M`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,hi=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let re=class extends L{constructor(){super(...arguments),this.inputElementRef=De(),this.checked=void 0}render(){return c`
      <label>
        <input
          ${Me(this.inputElementRef)}
          type="checkbox"
          ?checked=${I(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)===null||t===void 0?void 0:t.checked,bubbles:!0,composed:!0}))}};re.styles=[V,J,Ii,_o];hi([u({type:Boolean})],re.prototype,"checked",void 0);re=hi([T("wui-switch")],re);var Ro=M`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,pi=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let ae=class extends L{constructor(){super(...arguments),this.checked=void 0}render(){return c`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${I(this.checked)}></wui-switch>
      </button>
    `}};ae.styles=[V,J,Ro];pi([u({type:Boolean})],ae.prototype,"checked",void 0);ae=pi([T("wui-certified-switch")],ae);var Io=M`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,wi=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let se=class extends L{constructor(){super(...arguments),this.icon="copy"}render(){return c`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};se.styles=[V,J,Io];wi([u()],se.prototype,"icon",void 0);se=wi([T("wui-input-element")],se);var Wo=M`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,ct=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let tt=class extends L{constructor(){super(...arguments),this.inputElementRef=De(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,n={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return c`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Me(this.inputElementRef)}
        class=${$i(n)}
        type=${this.type}
        enterkeyhint=${I(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${I(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?c`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)===null||t===void 0?void 0:t.value,bubbles:!0,composed:!0}))}};tt.styles=[V,J,Wo];ct([u()],tt.prototype,"size",void 0);ct([u()],tt.prototype,"icon",void 0);ct([u({type:Boolean})],tt.prototype,"disabled",void 0);ct([u()],tt.prototype,"placeholder",void 0);ct([u()],tt.prototype,"type",void 0);ct([u()],tt.prototype,"keyHint",void 0);ct([u()],tt.prototype,"value",void 0);ct([u()],tt.prototype,"inputRightPadding",void 0);ct([u()],tt.prototype,"tabIdx",void 0);tt=ct([T("wui-input-text")],tt);var Eo=M`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,So=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Le=class extends L{constructor(){super(...arguments),this.inputComponentRef=De()}render(){return c`
      <wui-input-text
        ${Me(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,i=t==null?void 0:t.inputElementRef.value;i&&(i.value="",i.focus(),i.dispatchEvent(new Event("input")))}};Le.styles=[V,Eo];Le=So([T("wui-search-bar")],Le);const To=zt`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var Bo=M`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,fi=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let le=class extends L{constructor(){super(...arguments),this.type="wallet"}render(){return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?c` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${To}`:c`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};le.styles=[V,J,Bo];fi([u()],le.prototype,"type",void 0);le=fi([T("wui-card-select-loader")],le);var Lo=M`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,et=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Y=class extends L{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&pt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&pt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&pt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&pt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&pt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&pt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&pt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&pt.getSpacingStyles(this.margin,3)};
    `,c`<slot></slot>`}};Y.styles=[V,Lo];et([u()],Y.prototype,"gridTemplateRows",void 0);et([u()],Y.prototype,"gridTemplateColumns",void 0);et([u()],Y.prototype,"justifyItems",void 0);et([u()],Y.prototype,"alignItems",void 0);et([u()],Y.prototype,"justifyContent",void 0);et([u()],Y.prototype,"alignContent",void 0);et([u()],Y.prototype,"columnGap",void 0);et([u()],Y.prototype,"rowGap",void 0);et([u()],Y.prototype,"gap",void 0);et([u()],Y.prototype,"padding",void 0);et([u()],Y.prototype,"margin",void 0);Y=et([T("wui-grid")],Y);var Po=M`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,Kt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let _t=class extends L{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t,i;const n=((t=this.wallet)===null||t===void 0?void 0:t.badge_type)==="certified";return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${I(n?"certified":void 0)}
            >${(i=this.wallet)===null||i===void 0?void 0:i.name}</wui-text
          >
          ${n?c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():c`
      <wui-wallet-image
        size="md"
        imageSrc=${I(this.imageSrc)}
        name=${(t=this.wallet)===null||t===void 0?void 0:t.name}
        .installed=${(i=this.wallet)===null||i===void 0?void 0:i.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return c`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=G.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await G.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};_t.styles=Po;Kt([_()],_t.prototype,"visible",void 0);Kt([_()],_t.prototype,"imageSrc",void 0);Kt([_()],_t.prototype,"imageLoading",void 0);Kt([u()],_t.prototype,"wallet",void 0);_t=Kt([T("w3m-all-wallets-list-item")],_t);var Oo=M`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,kt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};const Ze="local-paginator";let bt=class extends L{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!N.state.wallets.length,this.wallets=N.state.wallets,this.recommended=N.state.recommended,this.featured=N.state.featured,this.filteredWallets=N.state.filteredWallets,this.unsubscribe.push(N.subscribeKey("wallets",t=>this.wallets=t),N.subscribeKey("recommended",t=>this.recommended=t),N.subscribeKey("featured",t=>this.featured=t),N.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(i=>i()),(t=this.paginationObserver)===null||t===void 0||t.disconnect()}render(){return c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;this.loading=!0;const i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("wui-grid");i&&(await N.fetchWalletsByPage({page:1}),await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>c`
        <wui-card-select-loader type="wallet" id=${I(i)}></wui-card-select-loader>
      `)}walletsTemplate(){var t;const i=((t=this.filteredWallets)===null||t===void 0?void 0:t.length)>0?O.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):O.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return de.markWalletsAsInstalled(i).map(o=>c`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(o)}
          .wallet=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:n,count:o}=N.state,e=window.innerWidth<352?3:4,a=t.length+i.length;let l=Math.ceil(a/e)*e-a+e;return l-=t.length?n.length%e:0,o===0&&n.length>0?null:o===0||[...n,...t,...i].length<o?this.shimmerTemplate(l,Ze):null}createPaginationObserver(){var t;const i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(`#${Ze}`);i&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.loading){const{page:o,count:e,wallets:a}=N.state;a.length<e&&N.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(i))}onConnectWallet(t){U.selectWalletConnector(t)}};bt.styles=Oo;kt([_()],bt.prototype,"loading",void 0);kt([_()],bt.prototype,"wallets",void 0);kt([_()],bt.prototype,"recommended",void 0);kt([_()],bt.prototype,"featured",void 0);kt([_()],bt.prototype,"filteredWallets",void 0);bt=kt([T("w3m-all-wallets-list")],bt);var jo=M`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,be=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let Pt=class extends L{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?c`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=N.state,i=de.markWalletsAsInstalled(t);return t.length?c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${i.map(n=>c`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(n)}
              .wallet=${n}
              data-testid="wallet-search-item-${n.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){U.selectWalletConnector(t)}};Pt.styles=jo;be([_()],Pt.prototype,"loading",void 0);be([u()],Pt.prototype,"query",void 0);be([u()],Pt.prototype,"badge",void 0);Pt=be([T("w3m-all-wallets-search")],Pt);var Ue=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let ce=class extends L{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=O.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return c`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?c`<w3m-all-wallets-search
            query=${this.search}
            badge=${I(this.badge)}
          ></w3m-all-wallets-search>`:c`<w3m-all-wallets-list badge=${I(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Yt.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return O.isMobile()?c`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){q.push("ConnectingWalletConnect")}};Ue([_()],ce.prototype,"search",void 0);Ue([_()],ce.prototype,"badge",void 0);ce=Ue([T("w3m-all-wallets-view")],ce);var ko=M`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,rt=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let X=class extends L{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return c`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${I(this.iconVariant)}
        tabindex=${I(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return c`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return c`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",i=this.iconVariant==="square-blue"?"mdl":"md",n=this.iconSize?this.iconSize:i;return c`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${i}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?c`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:c``}chevronTemplate(){return this.chevron?c`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};X.styles=[V,J,ko];rt([u()],X.prototype,"icon",void 0);rt([u()],X.prototype,"iconSize",void 0);rt([u()],X.prototype,"tabIdx",void 0);rt([u()],X.prototype,"variant",void 0);rt([u()],X.prototype,"iconVariant",void 0);rt([u({type:Boolean})],X.prototype,"disabled",void 0);rt([u()],X.prototype,"imageSrc",void 0);rt([u()],X.prototype,"alt",void 0);rt([u({type:Boolean})],X.prototype,"chevron",void 0);rt([u({type:Boolean})],X.prototype,"loading",void 0);X=rt([T("wui-list-item")],X);var Ao=function(r,t,i,n){var o=arguments.length,e=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(e=(o<3?a(e):o>3?a(t,i,e):a(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let ti=class extends L{constructor(){var t;super(...arguments),this.wallet=(t=q.state.data)===null||t===void 0?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return c`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return!((t=this.wallet)===null||t===void 0)&&t.chrome_store?c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return!((t=this.wallet)===null||t===void 0)&&t.app_store?c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return!((t=this.wallet)===null||t===void 0)&&t.play_store?c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return!((t=this.wallet)===null||t===void 0)&&t.homepage?c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;!((t=this.wallet)===null||t===void 0)&&t.chrome_store&&O.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;!((t=this.wallet)===null||t===void 0)&&t.app_store&&O.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;!((t=this.wallet)===null||t===void 0)&&t.play_store&&O.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;!((t=this.wallet)===null||t===void 0)&&t.homepage&&O.openHref(this.wallet.homepage,"_blank")}};ti=Ao([T("w3m-downloads-view")],ti);export{ce as W3mAllWalletsView,Be as W3mConnectingWcBasicView,ti as W3mDownloadsView};
