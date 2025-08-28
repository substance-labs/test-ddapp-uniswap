import{init_dist as Ye,process$1 as Ue}from"./dist-QCpUvRkJ.js";import{formatUnits as Ct}from"./formatUnits-DkyMpOD7.js";import{i$1 as _e,r as te}from"./lit-DG7NlYUS.js";const yr=Symbol(),Nt=Symbol();const lt=Object.getPrototypeOf,at=new WeakMap,At=e=>e&&(at.has(e)?at.get(e):lt(e)===Object.prototype||lt(e)===Array.prototype);const Et=e=>At(e)&&e[Nt]||null,dt=(e,t=!0)=>{at.set(e,t)};const Ge={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Ze=e=>typeof e=="object"&&e!==null,we=new WeakMap,De=new WeakSet,It=(e=Object.is,t=(l,p)=>new Proxy(l,p),r=l=>Ze(l)&&!De.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),o=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},n=new WeakMap,a=(l,p,w=o)=>{const L=n.get(l);if((L==null?void 0:L[0])===p)return L[1];const V=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return dt(V,!0),n.set(l,[p,V]),Reflect.ownKeys(l).forEach(ie=>{if(Object.getOwnPropertyDescriptor(V,ie))return;const U=Reflect.get(l,ie),{enumerable:j}=Reflect.getOwnPropertyDescriptor(l,ie),M={value:U,enumerable:j,configurable:!0};if(De.has(U))dt(U,!1);else if(U instanceof Promise)delete M.value,M.get=()=>w(U);else if(we.has(U)){const[he,le]=we.get(U);M.value=a(he,le(),w)}Object.defineProperty(V,ie,M)}),Object.preventExtensions(V)},s=new WeakMap,i=[1,1],d=l=>{if(!Ze(l))throw new Error("object required");const p=s.get(l);if(p)return p;let w=i[0];const L=new Set,V=(k,E=++i[0])=>{w!==E&&(w=E,L.forEach(N=>N(k,E)))};let ie=i[1];const U=(k=++i[1])=>(ie!==k&&!L.size&&(ie=k,M.forEach(([E])=>{const N=E[1](k);N>w&&(w=N)})),w),j=k=>(E,N)=>{const z=[...E];z[1]=[k,...z[1]],V(z,N)},M=new Map,he=(k,E)=>{if((Ge?"production":void 0)!=="production"&&M.has(k))throw new Error("prop listener already exists");if(L.size){const N=E[3](j(k));M.set(k,[E,N])}else M.set(k,[E])},le=k=>{var E;const N=M.get(k);N&&(M.delete(k),(E=N[1])==null||E.call(N))},be=k=>(L.add(k),L.size===1&&M.forEach(([N,z],Se)=>{if((Ge?"production":void 0)!=="production"&&z)throw new Error("remove already exists");const Pe=N[3](j(Se));M.set(Se,[N,Pe])}),()=>{L.delete(k),L.size===0&&M.forEach(([N,z],Se)=>{z&&(z(),M.set(Se,[N]))})}),Qe=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),Ve=t(Qe,{deleteProperty(k,E){const N=Reflect.get(k,E);le(E);const z=Reflect.deleteProperty(k,E);return z&&V(["delete",[E],N]),z},set(k,E,N,z){const Se=Reflect.has(k,E),Pe=Reflect.get(k,E,z);if(Se&&(e(Pe,N)||s.has(N)&&e(Pe,s.get(N))))return!0;le(E),Ze(N)&&(N=Et(N)||N);let ze=N;if(N instanceof Promise)N.then(de=>{N.status="fulfilled",N.value=de,V(["resolve",[E],de])}).catch(de=>{N.status="rejected",N.reason=de,V(["reject",[E],de])});else{!we.has(N)&&r(N)&&(ze=d(N));const de=!De.has(ze)&&we.get(ze);de&&he(E,de)}return Reflect.set(k,E,ze,z),V(["set",[E],N,Pe]),!0}});s.set(l,Ve);const bt=[Qe,U,a,be];return we.set(Ve,bt),Reflect.ownKeys(l).forEach(k=>{const E=Object.getOwnPropertyDescriptor(l,k);"value"in E&&(Ve[k]=l[k],delete E.value,delete E.writable),Object.defineProperty(Qe,k,E)}),Ve})=>[d,we,De,e,t,r,o,n,a,s,i],[yt]=It();function W(e={}){return yt(e)}function ee(e,t,r){const o=we.get(e);(Ge?"production":void 0)!=="production"&&!o&&console.warn("Please use proxy object");let n;const a=[],s=o[3];let i=!1;const l=s(p=>{if(a.push(p),r){t(a.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,i&&t(a.splice(0))}))});return i=!0,()=>{i=!1,l()}}function Fe(e,t){const r=we.get(e);(Ge?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");const[o,n,a]=r;return a(o,n(),t)}function Oe(e){return De.add(e),e}function X(e,t,r,o){let n=e[t];return ee(e,()=>{const a=e[t];Object.is(n,a)||r(n=a)},o)}const Sr=Symbol();function St(e){const t=W({data:Array.from(e||[]),has(r){return this.data.some(o=>o[0]===r)},set(r,o){const n=this.data.find(a=>a[0]===r);return n?n[1]=o:this.data.push([r,o]),this},get(r){var o;return(o=this.data.find(n=>n[0]===r))==null?void 0:o[1]},delete(r){const o=this.data.findIndex(n=>n[0]===r);return o===-1?!1:(this.data.splice(o,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(o=>{r(o[1],o[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}Ye();const G={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(typeof Ue<"u"?{}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org"},kt={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace(e,t){return(e==null?void 0:e.filter(r=>r.chainNamespace===t))||[]},getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,t){var r;if(!t)return;const o=e.find(a=>a.caipNetworkId===t);if(o)return o.name;const[n]=t.split(":");return((r=G.CHAIN_NAME_MAP)===null||r===void 0?void 0:r[n])||void 0}};var _t=20,Tt=1,Ae=1e6,ut=1e6,xt=-7,Ot=21,Ut=!1,He="[big.js] ",Ee=He+"Invalid ",Je=Ee+"decimal places",Pt=Ee+"rounding mode",ft=He+"Division by zero",O={},ae=void 0,Rt=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function mt(){function e(t){var r=this;if(!(r instanceof e))return t===ae?mt():new e(t);if(t instanceof e)r.s=t.s,r.e=t.e,r.c=t.c.slice();else{if(typeof t!="string"){if(e.strict===!0&&typeof t!="bigint")throw TypeError(Ee+"value");t=t===0&&1/t<0?"-0":String(t)}Bt(r,t)}r.constructor=e}return e.prototype=O,e.DP=_t,e.RM=Tt,e.NE=xt,e.PE=Ot,e.strict=Ut,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function Bt(e,t){var r,o,n;if(!Rt.test(t))throw Error(Ee+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(o=t.search(/e/i))>0?(r<0&&(r=o),r+=+t.slice(o+1),t=t.substring(0,o)):r<0&&(r=t.length),n=t.length,o=0;o<n&&t.charAt(o)=="0";)++o;if(o==n)e.c=[e.e=0];else{for(;n>0&&t.charAt(--n)=="0";);for(e.e=r-o-1,e.c=[],r=0;o<=n;)e.c[r++]=+t.charAt(o++)}return e}function Ie(e,t,r,o){var n=e.c;if(r===ae&&(r=e.constructor.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(Pt);if(t<1)o=r===3&&(o||!!n[0])||t===0&&(r===1&&n[0]>=5||r===2&&(n[0]>5||n[0]===5&&(o||n[1]!==ae))),n.length=1,o?(e.e=e.e-t+1,n[0]=1):n[0]=e.e=0;else if(t<n.length){if(o=r===1&&n[t]>=5||r===2&&(n[t]>5||n[t]===5&&(o||n[t+1]!==ae||n[t-1]&1))||r===3&&(o||!!n[0]),n.length=t,o){for(;++n[--t]>9;)if(n[t]=0,t===0){++e.e,n.unshift(1);break}}for(t=n.length;!n[--t];)n.pop()}return e}function ye(e,t,r){var o=e.e,n=e.c.join(""),a=n.length;if(t)n=n.charAt(0)+(a>1?"."+n.slice(1):"")+(o<0?"e":"e+")+o;else if(o<0){for(;++o;)n="0"+n;n="0."+n}else if(o>0)if(++o>a)for(o-=a;o--;)n+="0";else o<a&&(n=n.slice(0,o)+"."+n.slice(o));else a>1&&(n=n.charAt(0)+"."+n.slice(1));return e.s<0&&r?"-"+n:n}O.abs=function(){var e=new this.constructor(this);return e.s=1,e};O.cmp=function(e){var t,r=this,o=r.c,n=(e=new r.constructor(e)).c,a=r.s,s=e.s,i=r.e,d=e.e;if(!o[0]||!n[0])return o[0]?a:n[0]?-s:0;if(a!=s)return a;if(t=a<0,i!=d)return i>d^t?1:-1;for(s=(i=o.length)<(d=n.length)?i:d,a=-1;++a<s;)if(o[a]!=n[a])return o[a]>n[a]^t?1:-1;return i==d?0:i>d^t?1:-1};O.div=function(e){var t=this,r=t.constructor,o=t.c,n=(e=new r(e)).c,a=t.s==e.s?1:-1,s=r.DP;if(s!==~~s||s<0||s>Ae)throw Error(Je);if(!n[0])throw Error(ft);if(!o[0])return e.s=a,e.c=[e.e=0],e;var i,d,l,p,w,L=n.slice(),V=i=n.length,ie=o.length,U=o.slice(0,i),j=U.length,M=e,he=M.c=[],le=0,be=s+(M.e=t.e-e.e)+1;for(M.s=a,a=be<0?0:be,L.unshift(0);j++<i;)U.push(0);do{for(l=0;l<10;l++){if(i!=(j=U.length))p=i>j?1:-1;else for(w=-1,p=0;++w<i;)if(n[w]!=U[w]){p=n[w]>U[w]?1:-1;break}if(p<0){for(d=j==i?n:L;j;){if(U[--j]<d[j]){for(w=j;w&&!U[--w];)U[w]=9;--U[w],U[j]+=10}U[j]-=d[j]}for(;!U[0];)U.shift()}else break}he[le++]=p?l:++l,U[0]&&p?U[j]=o[V]||0:U=[o[V]]}while((V++<ie||U[0]!==ae)&&a--);return!he[0]&&le!=1&&(he.shift(),M.e--,be--),le>be&&Ie(M,be,r.RM,U[0]!==ae),M};O.eq=function(e){return this.cmp(e)===0};O.gt=function(e){return this.cmp(e)>0};O.gte=function(e){return this.cmp(e)>-1};O.lt=function(e){return this.cmp(e)<0};O.lte=function(e){return this.cmp(e)<1};O.minus=O.sub=function(e){var t,r,o,n,a=this,s=a.constructor,i=a.s,d=(e=new s(e)).s;if(i!=d)return e.s=-d,a.plus(e);var l=a.c.slice(),p=a.e,w=e.c,L=e.e;if(!l[0]||!w[0])return w[0]?e.s=-d:l[0]?e=new s(a):e.s=1,e;if(i=p-L){for((n=i<0)?(i=-i,o=l):(L=p,o=w),o.reverse(),d=i;d--;)o.push(0);o.reverse()}else for(r=((n=l.length<w.length)?l:w).length,i=d=0;d<r;d++)if(l[d]!=w[d]){n=l[d]<w[d];break}if(n&&(o=l,l=w,w=o,e.s=-e.s),(d=(r=w.length)-(t=l.length))>0)for(;d--;)l[t++]=0;for(d=t;r>i;){if(l[--r]<w[r]){for(t=r;t&&!l[--t];)l[t]=9;--l[t],l[r]+=10}l[r]-=w[r]}for(;l[--d]===0;)l.pop();for(;l[0]===0;)l.shift(),--L;return l[0]||(e.s=1,l=[L=0]),e.c=l,e.e=L,e};O.mod=function(e){var t,r=this,o=r.constructor,n=r.s,a=(e=new o(e)).s;if(!e.c[0])throw Error(ft);return r.s=e.s=1,t=e.cmp(r)==1,r.s=n,e.s=a,t?new o(r):(n=o.DP,a=o.RM,o.DP=o.RM=0,r=r.div(e),o.DP=n,o.RM=a,this.minus(r.times(e)))};O.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e};O.plus=O.add=function(e){var t,r,o,n=this,a=n.constructor;if(e=new a(e),n.s!=e.s)return e.s=-e.s,n.minus(e);var s=n.e,i=n.c,d=e.e,l=e.c;if(!i[0]||!l[0])return l[0]||(i[0]?e=new a(n):e.s=n.s),e;if(i=i.slice(),t=s-d){for(t>0?(d=s,o=l):(t=-t,o=i),o.reverse();t--;)o.push(0);o.reverse()}for(i.length-l.length<0&&(o=l,l=i,i=o),t=l.length,r=0;t;i[t]%=10)r=(i[--t]=i[t]+l[t]+r)/10|0;for(r&&(i.unshift(r),++d),t=i.length;i[--t]===0;)i.pop();return e.c=i,e.e=d,e};O.pow=function(e){var t=this,r=new t.constructor("1"),o=r,n=e<0;if(e!==~~e||e<-ut||e>ut)throw Error(Ee+"exponent");for(n&&(e=-e);e&1&&(o=o.times(t)),e>>=1,!!e;)t=t.times(t);return n?r.div(o):o};O.prec=function(e,t){if(e!==~~e||e<1||e>Ae)throw Error(Ee+"precision");return Ie(new this.constructor(this),e,t)};O.round=function(e,t){if(e===ae)e=0;else if(e!==~~e||e<-Ae||e>Ae)throw Error(Je);return Ie(new this.constructor(this),e+this.e+1,t)};O.sqrt=function(){var e,t,r,o=this,n=o.constructor,a=o.s,s=o.e,i=new n("0.5");if(!o.c[0])return new n(o);if(a<0)throw Error(He+"No square root");a=Math.sqrt(+ye(o,!0,!0)),a===0||a===1/0?(t=o.c.join(""),t.length+s&1||(t+="0"),a=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new n((a==1/0?"5e":(a=a.toExponential()).slice(0,a.indexOf("e")+1))+s)):e=new n(a+""),s=e.e+(n.DP+=4);do r=e,e=i.times(r.plus(o.div(r)));while(r.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return Ie(e,(n.DP-=4)+e.e+1,n.RM)};O.times=O.mul=function(e){var t,r=this,o=r.constructor,n=r.c,a=(e=new o(e)).c,s=n.length,i=a.length,d=r.e,l=e.e;if(e.s=r.s==e.s?1:-1,!n[0]||!a[0])return e.c=[e.e=0],e;for(e.e=d+l,s<i&&(t=n,n=a,a=t,l=s,s=i,i=l),t=new Array(l=s+i);l--;)t[l]=0;for(d=i;d--;){for(i=0,l=s+d;l>d;)i=t[l]+a[d]*n[l-d-1]+i,t[l--]=i%10,i=i/10|0;t[l]=i}for(i?++e.e:t.shift(),d=t.length;!t[--d];)t.pop();return e.c=t,e};O.toExponential=function(e,t){var r=this,o=r.c[0];if(e!==ae){if(e!==~~e||e<0||e>Ae)throw Error(Je);for(r=Ie(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return ye(r,!0,!!o)};O.toFixed=function(e,t){var r=this,o=r.c[0];if(e!==ae){if(e!==~~e||e<0||e>Ae)throw Error(Je);for(r=Ie(new r.constructor(r),e+r.e+1,t),e=e+r.e+1;r.c.length<e;)r.c.push(0)}return ye(r,!1,!!o)};O[Symbol.for("nodejs.util.inspect.custom")]=O.toJSON=O.toString=function(){var e=this,t=e.constructor;return ye(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};O.toNumber=function(){var e=+ye(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(He+"Imprecise conversion");return e};O.toPrecision=function(e,t){var r=this,o=r.constructor,n=r.c[0];if(e!==ae){if(e!==~~e||e<1||e>Ae)throw Error(Ee+"precision");for(r=Ie(new o(r),e,t);r.c.length<e;)r.c.push(0)}return ye(r,e<=r.e||r.e<=o.NE||r.e>=o.PE,!!n)};O.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(He+"valueOf disallowed");return ye(e,e.e<=t.NE||e.e>=t.PE,!0)};var Dt=mt(),Re=Dt;const Lt={bigNumber(e){return e?new Re(e):new Re(0)},multiply(e,t){if(e===void 0||t===void 0)return new Re(0);const r=new Re(e),o=new Re(t);return r.times(o)},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},parseLocalStringToNumber(e){return e===void 0?0:parseFloat(e.replace(/,/gu,""))}},Mt=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Wt=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],Ft=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Ht={getERC20Abi:e=>G.USDT_CONTRACT_ADDRESSES.includes(e)?Ft:Mt,getSwapAbi:()=>Wt},v={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections"};function et(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const f={setItem(e,t){Le()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(Le())return localStorage.getItem(e)||void 0},removeItem(e){Le()&&localStorage.removeItem(e)},clear(){Le()&&localStorage.clear()}};function Le(){return typeof window<"u"&&typeof localStorage<"u"}function ge(e,t){return t==="light"?{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}Ye();const tt=(typeof Ue<"u"?{}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",kr=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],_r="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",J={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:tt,SECURE_SITE_DASHBOARD:`${tt}/dashboard`,SECURE_SITE_FAVICON:`${tt}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:["eip155","solana"],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["coinbase","meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}},C={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){const e=C.getActiveNamespace(),t=C.getActiveCaipNetworkId(),r=t?t.split(":")[1]:void 0,o=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:e,caipNetworkId:t,chainId:o}},setWalletConnectDeepLink({name:e,href:t}){try{f.setItem(v.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=f.getItem(v.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{f.removeItem(v.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{f.setItem(v.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{f.setItem(v.ACTIVE_CAIP_NETWORK_ID,e),C.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return f.getItem(v.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{f.removeItem(v.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=et(e);f.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=C.getRecentWallets();t.find(o=>o.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),f.setItem(v.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=f.getItem(v.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{const r=et(e);f.setItem(r,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return f.getItem(v.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=et(e);return f.getItem(t)}catch{console.info("Unable to get connected connector id in namespace ",e)}},setConnectedSocialProvider(e){try{f.setItem(v.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return f.getItem(v.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{f.removeItem(v.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return f.getItem(v.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var e;const t=f.getItem(v.ACTIVE_CAIP_NETWORK_ID);return t==null||(e=t.split(":"))===null||e===void 0?void 0:e[1]},setConnectionStatus(e){try{f.setItem(v.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return f.getItem(v.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const e=f.getItem(v.CONNECTED_NAMESPACES);return e!=null&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));f.setItem(v.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=C.getConnectedNamespaces();t.includes(e)||(t.push(e),C.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=C.getConnectedNamespaces(),r=t.indexOf(e);r>-1&&(t.splice(r,1),C.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return f.getItem(v.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{f.setItem(v.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{f.removeItem(v.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=f.getItem(v.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=C.getBalanceCache();f.setItem(v.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const r=C.getBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.portfolio))return r.balance;C.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=C.getBalanceCache();t[e.caipAddress]=e,f.setItem(v.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=f.getItem(v.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=C.getBalanceCache();f.setItem(v.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const r=C.getNativeBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.nativeBalance))return r;console.info("Discarding cache for address",e),C.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=C.getNativeBalanceCache();t[e.caipAddress]=e,f.setItem(v.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=f.getItem(v.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const r=C.getEnsCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.ens))return r.ens;C.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=C.getEnsCache();t[e.address]=e,f.setItem(v.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=C.getEnsCache();f.setItem(v.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=f.getItem(v.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const r=C.getIdentityCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.identity))return r.identity;C.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=C.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},f.setItem(v.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=C.getIdentityCache();f.setItem(v.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{f.removeItem(v.PORTFOLIO_CACHE),f.removeItem(v.NATIVE_BALANCE_CACHE),f.removeItem(v.ENS_CACHE),f.removeItem(v.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{f.setItem(v.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=f.getItem(v.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{const r={...C.getConnections(),[t]:e};f.setItem(v.CONNECTIONS,JSON.stringify(r))}catch(r){console.error("Unable to sync connections to storage",r)}},getConnections(){try{const e=f.getItem(v.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}}},y={isMobile(){var e,t;return this.isClient()?!!(typeof((e=window)===null||e===void 0?void 0:e.matchMedia)=="function"&&(!((t=window)===null||t===void 0||(t=t.matchMedia("(pointer:coarse)"))===null||t===void 0)&&t.matches)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e==null?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){var e;if(!this.isMobile())return!1;const t=(e=window)===null||e===void 0?void 0:e.navigator.userAgent.toLowerCase();return y.isMobile()&&t.includes("android")},isIos(){var e;if(!this.isMobile())return!1;const t=(e=window)===null||e===void 0?void 0:e.navigator.userAgent.toLowerCase();return t.includes("iphone")||t.includes("ipad")},isSafari(){var e;return this.isClient()?((e=window)===null||e===void 0?void 0:e.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=J.TEN_SEC_MS:!0},isAllowedRetry(e,t=J.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{var e,t;return((e=window)===null||e===void 0?void 0:e.self)!==((t=window)===null||t===void 0?void 0:t.top)}catch{return!1}},isSafeApp(){if(y.isClient()&&window.self!==window.top)try{var e;const t=(e=window)===null||e===void 0||(e=e.location)===null||e===void 0||(e=e.ancestorOrigins)===null||e===void 0?void 0:e[0],r="https://app.safe.global";if(t){const o=new URL(t),n=new URL(r);return o.hostname===n.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+J.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(":")[1]},getPlainAddress(e){return e==null?void 0:e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let r;return(...o)=>{function n(){e(...o)}r&&clearTimeout(r),r=setTimeout(n,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,r=null){if(y.isHttpUrl(e))return this.formatUniversalUrl(e,t);let o=e,n=r;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),n&&!(n!=null&&n.endsWith("/"))&&(n=`${n}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const a=encodeURIComponent(t);return{redirect:`${o}wc?uri=${a}`,redirectUniversalLink:n?`${n}wc?uri=${a}`:void 0,href:o}},formatUniversalUrl(e,t){if(!y.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);const o=encodeURIComponent(t);return{redirect:`${r}wc?uri=${o}`,href:r}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?C.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,r){var o;(o=window)===null||o===void 0||o.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},returnOpenHref(e,t,r){var o;return(o=window)===null||o===void 0?void 0:o.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){var e,t,r;if(typeof window>"u")return!1;const o=(e=(t=window).matchMedia)===null||e===void 0||(e=e.call(t,"(display-mode: standalone)"))===null||e===void 0?void 0:e.matches,n=(r=window)===null||r===void 0||(r=r.navigator)===null||r===void 0?void 0:r.standalone;return!!(o||n)},async preloadImage(e){const t=new Promise((r,o)=>{const n=new Image;n.onload=r,n.onerror=o,n.crossOrigin="anonymous",n.src=e});return Promise.race([t,y.wait(2e3)])},formatBalance(e,t){let r="0.000";if(typeof e=="string"){const o=Number(e);if(o){const n=Math.floor(o*1e3)/1e3;n&&(r=n.toString())}}return`${r}${t?` ${t}`:""}`},formatBalance2(e,t){let r;if(e==="0")r="0";else if(typeof e=="string"){var o;const n=Number(e);n&&(r=(o=n.toString().match(/^-?\d+(?:\.\d{0,3})?/u))===null||o===void 0?void 0:o[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:t}},getApiUrl(){return G.W3M_API_URL},getBlockchainApiUrl(){return G.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return G.PULSE_API_URL},getUUID(){var e;return!((e=crypto)===null||e===void 0)&&e.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const r=Math.random()*16|0;return(t==="x"?r:r&3|8).toString(16)})},parseError(e){var t;return typeof e=="string"?e:typeof(e==null||(t=e.issues)===null||t===void 0||(t=t[0])===null||t===void 0?void 0:t.message)=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const r={};return t&&e&&(e.forEach((o,n)=>{r[o]=n}),t.sort((o,n)=>{const a=r[o.id],s=r[n.id];return a!==void 0&&s!==void 0?a-s:a!==void 0?-1:s!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const r of e)t+=r.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[r,o]=t.split(".");return{dollars:r,pennies:o}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){const r=new Set;return e.filter(o=>{const n=o[t];return r.has(n)?!1:(r.add(n),!0)})},generateSdkVersion(e,t,r){const n=e.length===0?J.ADAPTER_TYPES.UNIVERSAL:e.map(a=>a.adapterType).join(",");return`${t}-${n}-${r}`},createAccount(e,t,r,o,n){return{namespace:e,address:t,type:r,publicKey:o,path:n}},isCaipAddress(e){if(typeof e!="string")return!1;const t=e.split(":"),r=t[0];return t.filter(Boolean).length===3&&r in G.CHAIN_NAME_MAP},isMac(){var e;const t=(e=window)===null||e===void 0?void 0:e.navigator.userAgent.toLowerCase();return t.includes("macintosh")&&!t.includes("safari")},formatTelegramSocialLoginUrl(e){var t;const r=`--${encodeURIComponent((t=window)===null||t===void 0?void 0:t.location.href)}`,o="state=";if(new URL(e).host==="auth.magic.link"){const a="provider_authorization_url=",s=e.substring(e.indexOf(a)+a.length),i=this.injectIntoUrl(decodeURIComponent(s),o,r);return e.replace(s,encodeURIComponent(i))}return this.injectIntoUrl(e,o,r)},injectIntoUrl(e,t,r){const o=e.indexOf(t);if(o===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);const n=e.indexOf("&",o),a=t.length,s=n!==-1?n:e.length,i=e.substring(0,o+a),d=e.substring(o+a,s),l=e.substring(n),p=d+r;return i+p+l}};async function Be(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}var je=class{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:r,...o}){const n=this.createUrl(o);return(await Be(n,{method:"GET",headers:e,signal:t,cache:r})).json()}async getBlob({headers:e,signal:t,...r}){const o=this.createUrl(r);return(await Be(o,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Be(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Be(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Be(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,n])=>{n&&r.searchParams.append(o,n)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}};const jt={getFeatureValue(e,t){const r=t==null?void 0:t[e];return r===void 0?J.DEFAULT_FEATURES[e]:r},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(y.isTelegram()){if(y.isIos())return e.filter(t=>t!=="google");if(y.isMac())return e.filter(t=>t!=="x");if(y.isAndroid())return e.filter(t=>!["facebook","x"].includes(t))}return e}},g=W({features:J.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:J.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}}),x={state:g,subscribeKey(e,t){return X(g,e,t)},setOptions(e){Object.assign(g,e)},setRemoteFeatures(e){var t;if(!e)return;const r={...g.remoteFeatures,...e};g.remoteFeatures=r,!((t=g.remoteFeatures)===null||t===void 0)&&t.socials&&(g.remoteFeatures.socials=jt.filterSocialsByPlatform(g.remoteFeatures.socials))},setFeatures(e){if(!e)return;g.features||(g.features=J.DEFAULT_FEATURES);const t={...g.features,...e};g.features=t},setProjectId(e){g.projectId=e},setCustomRpcUrls(e){g.customRpcUrls=e},setAllWallets(e){g.allWallets=e},setIncludeWalletIds(e){g.includeWalletIds=e},setExcludeWalletIds(e){g.excludeWalletIds=e},setFeaturedWalletIds(e){g.featuredWalletIds=e},setTokens(e){g.tokens=e},setTermsConditionsUrl(e){g.termsConditionsUrl=e},setPrivacyPolicyUrl(e){g.privacyPolicyUrl=e},setCustomWallets(e){g.customWallets=e},setIsSiweEnabled(e){g.isSiweEnabled=e},setIsUniversalProvider(e){g.isUniversalProvider=e},setSdkVersion(e){g.sdkVersion=e},setMetadata(e){g.metadata=e},setDisableAppend(e){g.disableAppend=e},setEIP6963Enabled(e){g.enableEIP6963=e},setDebug(e){g.debug=e},setEnableWalletConnect(e){g.enableWalletConnect=e},setEnableWalletGuide(e){g.enableWalletGuide=e},setEnableAuthLogger(e){g.enableAuthLogger=e},setEnableWallets(e){g.enableWallets=e},setPreferUniversalLinks(e){g.experimental_preferUniversalLinks=e},setHasMultipleAddresses(e){g.hasMultipleAddresses=e},setSIWX(e){g.siwx=e},setConnectMethodsOrder(e){g.features={...g.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){g.features={...g.features,walletFeaturesOrder:e}},setSocialsOrder(e){g.remoteFeatures={...g.remoteFeatures,socials:e}},setCollapseWallets(e){g.features={...g.features,collapseWallets:e}},setEnableEmbedded(e){g.enableEmbedded=e},setAllowUnsupportedChain(e){g.allowUnsupportedChain=e},setManualWCControl(e){g.manualWCControl=e},setEnableNetworkSwitch(e){g.enableNetworkSwitch=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,r])=>{r&&(g.defaultAccountTypes[t]=r)})},setUniversalProviderConfigOverride(e){g.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return g.universalProviderConfigOverride},getSnapshot(){return Fe(g)}},Vt=Object.freeze({enabled:!0,events:[]}),zt=new je({baseUrl:y.getAnalyticsUrl(),clientId:null}),Kt=5,qt=60*1e3,ue=W({...Vt}),$t={state:ue,subscribeKey(e,t){return X(ue,e,t)},async sendError(e,t){if(!ue.enabled)return;const r=Date.now();if(ue.events.filter(a=>{const s=new Date(a.properties.timestamp||"").getTime();return r-s<qt}).length>=Kt)return;const n={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};ue.events.push(n);try{if(typeof window>"u")return;const{projectId:a,sdkType:s,sdkVersion:i}=x.state;await zt.post({path:"/e",params:{projectId:a,st:s,sv:i||"html-wagmi-4.2.2"},body:{eventId:y.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){ue.enabled=!0},disable(){ue.enabled=!1},clearEvents(){ue.events=[]}};var it=class st extends Error{constructor(t,r,o){super(t),this.name="AppKitError",this.category=r,this.originalError=o,Object.setPrototypeOf(this,st.prototype);let n=!1;if(o instanceof Error&&typeof o.stack=="string"&&o.stack){const a=o.stack,s=a.indexOf(`
`);if(s>-1){const i=a.substring(s+1);this.stack=`${this.name}: ${this.message}
${i}`,n=!0}}n||(Error.captureStackTrace?Error.captureStackTrace(this,st):this.stack||(this.stack=`${this.name}: ${this.message}`))}};function pt(e,t){const r=e instanceof it?e:new it(e instanceof Error?e.message:String(e),t,e);throw $t.sendError(r,r.category),r}function oe(e,t="INTERNAL_SDK_ERROR"){const r={};return Object.keys(e).forEach(o=>{const n=e[o];if(typeof n=="function"){let a=n;n.constructor.name==="AsyncFunction"?a=async(...s)=>{try{return await n(...s)}catch(i){return pt(i,t)}}:a=(...s)=>{try{return n(...s)}catch(i){return pt(i,t)}},r[o]=a}else r[o]=n}),r}const ne={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"}},Gt={handleMobileDeeplinkRedirect(e,t){const r=window.location.href,o=encodeURIComponent(r);if(e===ne.PHANTOM.id&&!("phantom"in window)){const n=r.startsWith("https")?"https":"http",a=r.split("/")[2],s=encodeURIComponent(`${n}://${a}`);window.location.href=`${ne.PHANTOM.url}/ul/browse/${o}?ref=${s}`}e===ne.SOLFLARE.id&&!("solflare"in window)&&(window.location.href=`${ne.SOLFLARE.url}/ul/v1/browse/${o}?ref=${o}`),t===G.CHAIN.SOLANA&&e===ne.COINBASE.id&&!("coinbaseSolana"in window)&&(window.location.href=`${ne.COINBASE.url}/dapp?cb_url=${o}`)}},Y=W({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),Yt={state:Y,subscribeNetworkImages(e){return ee(Y.networkImages,()=>e(Y.networkImages))},subscribeKey(e,t){return X(Y,e,t)},subscribe(e){return ee(Y,()=>e(Y))},setWalletImage(e,t){Y.walletImages[e]=t},setNetworkImage(e,t){Y.networkImages[e]=t},setChainImage(e,t){Y.chainImages[e]=t},setConnectorImage(e,t){Y.connectorImages={...Y.connectorImages,[e]:t}},setTokenImage(e,t){Y.tokenImages[e]=t},setCurrencyImage(e,t){Y.currencyImages[e]=t}},re=oe(Yt),Jt={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:""},rt=W({networkImagePromises:{}}),Xt={async fetchWalletImage(e){if(e)return await m._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;const t=this.getNetworkImageById(e);return t||(rt.networkImagePromises[e]||(rt.networkImagePromises[e]=m._fetchNetworkImage(e)),await rt.networkImagePromises[e],this.getNetworkImageById(e))},getWalletImageById(e){if(e)return re.state.walletImages[e]},getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return re.state.walletImages[e.image_id]},getNetworkImage(e){var t,r,o;if(!(e==null||(t=e.assets)===null||t===void 0)&&t.imageUrl)return e==null||(r=e.assets)===null||r===void 0?void 0:r.imageUrl;if(!(e==null||(o=e.assets)===null||o===void 0)&&o.imageId)return re.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return re.state.networkImages[e]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return re.state.connectorImages[e.imageId]},getChainImage(e){return re.state.networkImages[Jt[e]]}},pe=W({message:"",variant:"info",open:!1}),Qt={state:pe,subscribeKey(e,t){return X(pe,e,t)},open(e,t){const{debug:r}=x.state,{shortMessage:o,longMessage:n}=e;r&&(pe.message=o,pe.variant=t,pe.open=!0),n&&console.error(typeof n=="function"?n():n)},close(){pe.open=!1,pe.message="",pe.variant="info"}},Zt=oe(Qt),er=y.getAnalyticsUrl(),tr=new je({baseUrl:er,clientId:null}),rr=["MODAL_CREATED"],se=W({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),Z={state:se,subscribe(e){return ee(se,()=>e(se))},getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:r}=x.state;return{projectId:e,st:t,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{const t=F.state.address;if(rr.includes(e.data.event)||typeof window>"u")return;await tr.post({path:"/e",params:Z.getSdkProperties(),body:{eventId:y.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t}}}),se.reportedErrors.FORBIDDEN=!1}catch(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===G.HTTP_STATUS_CODES.FORBIDDEN&&!se.reportedErrors.FORBIDDEN&&(Zt.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${Le()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),se.reportedErrors.FORBIDDEN=!0)}},sendEvent(e){var t;se.timestamp=Date.now(),se.data=e,!((t=x.state.features)===null||t===void 0)&&t.analytics&&Z._sendAnalyticsEvent(se)}},or=y.getApiUrl(),K=new je({baseUrl:or,clientId:null}),nr=40,wt=4,ar=20,h=W({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),m={state:h,subscribeKey(e,t){return X(h,e,t)},_getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:r}=x.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return x.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){const t=`${K.baseUrl}/getWalletImage/${e}`,r=await K.getBlob({path:t,params:m._getSdkProperties()});re.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${K.baseUrl}/public/getAssetImage/${e}`,r=await K.getBlob({path:t,params:m._getSdkProperties()});re.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${K.baseUrl}/public/getAssetImage/${e}`,r=await K.getBlob({path:t,params:m._getSdkProperties()});re.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){const t=`${K.baseUrl}/public/getCurrencyImage/${e}`,r=await K.getBlob({path:t,params:m._getSdkProperties()});re.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){const t=`${K.baseUrl}/public/getTokenImage/${e}`,r=await K.getBlob({path:t,params:m._getSdkProperties()});re.setTokenImage(e,URL.createObjectURL(r))},_filterWalletsByPlatform(e){return y.isMobile()?e==null?void 0:e.filter(r=>r.mobile_link||r.id===ne.COINBASE.id?!0:c.state.activeChain==="solana"&&(r.id===ne.SOLFLARE.id||r.id===ne.PHANTOM.id)):e},async fetchProjectConfig(){return(await K.get({path:"/appkit/v1/config",params:m._getSdkProperties()})).features},async fetchAllowedOrigins(){try{const{allowedOrigins:e}=await K.get({path:"/projects/v1/origins",params:m._getSdkProperties()});return e}catch{return[]}},async fetchNetworkImages(){const e=c.getAllRequestedCaipNetworks(),t=e==null?void 0:e.map(({assets:r})=>r==null?void 0:r.imageId).filter(Boolean).filter(r=>!Xt.getNetworkImageById(r));t&&await Promise.allSettled(t.map(r=>m._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:e}=A.state,t=e.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(t.map(r=>m._fetchConnectorImage(r)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>m._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>m._fetchTokenImage(t)))},async fetchWallets(e){var t;const r=e.exclude??[];m._getSdkProperties().sv.startsWith("html-core-")&&r.push(...Object.values(ne).map(s=>s.id));const n=await K.get({path:"/getWallets",params:{...m._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:(t=e.include)===null||t===void 0?void 0:t.join(","),exclude:r.join(",")}});return{data:m._filterWalletsByPlatform(n==null?void 0:n.data)||[],count:n==null?void 0:n.count}},async fetchFeaturedWallets(){const{featuredWalletIds:e}=x.state;if(e!=null&&e.length){const t={...m._getSdkProperties(),page:1,entries:(e==null?void 0:e.length)??wt,include:e},{data:r}=await m.fetchWallets(t),o=[...r].sort((a,s)=>e.indexOf(a.id)-e.indexOf(s.id)),n=o.map(a=>a.image_id).filter(Boolean);await Promise.allSettled(n.map(a=>m._fetchWalletImage(a))),h.featured=o,h.allFeatured=o}},async fetchRecommendedWallets(){try{h.isFetchingRecommendedWallets=!0;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=x.state,o=[...t??[],...r??[]].filter(Boolean),n=c.getRequestedCaipNetworkIds().join(","),a={page:1,entries:wt,include:e,exclude:o,chains:n},{data:s,count:i}=await m.fetchWallets(a),d=C.getRecentWallets(),l=s.map(w=>w.image_id).filter(Boolean),p=d.map(w=>w.image_id).filter(Boolean);await Promise.allSettled([...l,...p].map(w=>m._fetchWalletImage(w))),h.recommended=s,h.allRecommended=s,h.count=i??0}catch{}finally{h.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:o}=x.state,n=c.getRequestedCaipNetworkIds().join(","),a=[...h.recommended.map(({id:p})=>p),...r??[],...o??[]].filter(Boolean),s={page:e,entries:nr,include:t,exclude:a,chains:n},{data:i,count:d}=await m.fetchWallets(s),l=i.slice(0,ar).map(p=>p.image_id).filter(Boolean);await Promise.allSettled(l.map(p=>m._fetchWalletImage(p))),h.wallets=y.uniqueBy([...h.wallets,...m._filterOutExtensions(i)],"id").filter(p=>{var w;return(w=p.chains)===null||w===void 0?void 0:w.some(L=>n.includes(L))}),h.count=d>h.count?d:h.count,h.page=e},async initializeExcludedWallets({ids:e}){const t={page:1,entries:e.length,include:e},{data:r}=await m.fetchWallets(t);r&&r.forEach(o=>{h.excludedWallets.push({rdns:o.rdns,name:o.name})})},async searchWallet({search:e,badge:t}){const{includeWalletIds:r,excludeWalletIds:o}=x.state,n=c.getRequestedCaipNetworkIds().join(",");h.search=[];const a={page:1,entries:100,search:e==null?void 0:e.trim(),badge_type:t,include:r,exclude:o,chains:n},{data:s}=await m.fetchWallets(a);Z.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});const i=s.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...i.map(d=>m._fetchWalletImage(d)),y.wait(300)]),h.search=m._filterOutExtensions(s)},initPromise(e,t){const r=h.promises[e];return r||(h.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:o=!0}={}){const n=[e&&m.initPromise("connectorImages",m.fetchConnectorImages),t&&m.initPromise("featuredWallets",m.fetchFeaturedWallets),r&&m.initPromise("recommendedWallets",m.fetchRecommendedWallets),o&&m.initPromise("networkImages",m.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(n)},prefetchAnalyticsConfig(){var e;!((e=x.state.features)===null||e===void 0)&&e.analytics&&m.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:e}=await K.get({path:"/getAnalyticsConfig",params:m._getSdkProperties()});x.setFeatures({analytics:e})}catch{x.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!(e!=null&&e.length)){h.featured=h.allFeatured,h.recommended=h.allRecommended;return}const t=c.getRequestedCaipNetworkIds().join(",");h.featured=h.allFeatured.filter(r=>{var o;return(o=r.chains)===null||o===void 0?void 0:o.some(n=>t.includes(n))}),h.recommended=h.allRecommended.filter(r=>{var o;return(o=r.chains)===null||o===void 0?void 0:o.some(n=>t.includes(n))}),h.filteredWallets=h.wallets.filter(r=>{var o;return(o=r.chains)===null||o===void 0?void 0:o.some(n=>t.includes(n))})},clearFilterByNamespaces(){h.filteredWallets=[]},setFilterByNamespace(e){if(!e){h.featured=h.allFeatured,h.recommended=h.allRecommended;return}const t=c.getRequestedCaipNetworkIds().join(",");h.featured=h.allFeatured.filter(r=>{var o;return(o=r.chains)===null||o===void 0?void 0:o.some(n=>t.includes(n))}),h.recommended=h.allRecommended.filter(r=>{var o;return(o=r.chains)===null||o===void 0?void 0:o.some(n=>t.includes(n))}),h.filteredWallets=h.wallets.filter(r=>{var o;return(o=r.chains)===null||o===void 0?void 0:o.some(n=>t.includes(n))})}},P=W({view:"Connect",history:["Connect"],transactionStack:[]}),ir={state:P,subscribeKey(e,t){return X(P,e,t)},pushTransactionStack(e){P.transactionStack.push(e)},popTransactionStack(e){const t=P.transactionStack.pop();if(!t)return;const{onSuccess:r,onError:o,onCancel:n}=t;switch(e){case"success":r==null||r();break;case"error":o==null||o(),D.goBack();break;case"cancel":n==null||n(),D.goBack();break;default:}},push(e,t){e!==P.view&&(P.view=e,P.history.push(e),P.data=t)},reset(e,t){P.view=e,P.history=[e],P.data=t},replace(e,t){P.history.at(-1)===e||(P.view=e,P.history[P.history.length-1]=e,P.data=t)},goBack(){var e;const t=c.state.activeCaipAddress,r=D.state.view==="ConnectingFarcaster",o=!t&&r;if(P.history.length>1){P.history.pop();const[n]=P.history.slice(-1);n&&(t&&n==="Connect"?P.view="Account":P.view=n)}else ve.close();!((e=P.data)===null||e===void 0)&&e.wallet&&(P.data.wallet=void 0),setTimeout(()=>{if(o){var n,a,s;F.setFarcasterUrl(void 0,c.state.activeChain);const i=A.getAuthConnector();i==null||(n=i.provider)===null||n===void 0||n.reload();const d=Fe(x.state);i==null||(a=i.provider)===null||a===void 0||(s=a.syncDappData)===null||s===void 0||s.call(a,{metadata:d.metadata,sdkVersion:d.sdkVersion,projectId:d.projectId,sdkType:d.sdkType})}},100)},goBackToIndex(e){if(P.history.length>1){P.history=P.history.slice(0,e+1);const[t]=P.history.slice(-1);t&&(P.view=t)}},goBackOrCloseModal(){D.state.history.length>1?D.goBack():ve.close()}},D=oe(ir),ce=W({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),ct={state:ce,subscribe(e){return ee(ce,()=>e(ce))},setThemeMode(e){ce.themeMode=e;try{const t=A.getAuthConnector();if(t){const r=ct.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:ge(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){ce.themeVariables={...ce.themeVariables,...e};try{const t=A.getAuthConnector();if(t){const r=ct.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:r,w3mThemeVariables:ge(ce.themeVariables,ce.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Fe(ce)}},Ke=oe(ct),vt={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},S=W({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...vt},filterByNamespaceMap:{eip155:!0,solana:!0,polkadot:!0,bip122:!0,cosmos:!0}}),sr={state:S,subscribe(e){return ee(S,()=>{e(S)})},subscribeKey(e,t){return X(S,e,t)},initialize(e){e.forEach(t=>{const r=C.getConnectedConnectorId(t);r&&A.setConnectorId(r,t)})},setActiveConnector(e){e&&(S.activeConnector=Oe(e))},setConnectors(e){e.filter(n=>!S.allConnectors.some(a=>a.id===n.id&&A.getConnectorName(a.name)===A.getConnectorName(n.name)&&a.chain===n.chain)).forEach(n=>{n.type!=="MULTI_CHAIN"&&S.allConnectors.push(Oe(n))});const r=A.getEnabledNamespaces(),o=A.getEnabledConnectors(r);S.connectors=A.mergeMultiChainConnectors(o)},filterByNamespaces(e){Object.keys(S.filterByNamespaceMap).forEach(t=>{S.filterByNamespaceMap[t]=!1}),e.forEach(t=>{S.filterByNamespaceMap[t]=!0}),A.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){S.filterByNamespaceMap[e]=t,A.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){const e=A.getEnabledNamespaces(),t=A.getEnabledConnectors(e),r=A.areAllNamespacesEnabled();S.connectors=A.mergeMultiChainConnectors(t),r?m.clearFilterByNamespaces():m.filterByNamespaces(e)},getEnabledNamespaces(){return Object.entries(S.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e)},getEnabledConnectors(e){return S.allConnectors.filter(t=>e.includes(t.chain))},areAllNamespacesEnabled(){return Object.values(S.filterByNamespaceMap).every(e=>e)},mergeMultiChainConnectors(e){const t=A.generateConnectorMapByName(e),r=[];return t.forEach(o=>{const n=o[0],a=(n==null?void 0:n.id)===G.CONNECTOR_ID.AUTH;o.length>1&&n?r.push({name:n.name,imageUrl:n.imageUrl,imageId:n.imageId,connectors:[...o],type:a?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(n==null?void 0:n.id)||""}):n&&r.push(n)}),r},generateConnectorMapByName(e){const t=new Map;return e.forEach(r=>{const{name:o}=r,n=A.getConnectorName(o);if(!n)return;const a=t.get(n)||[];a.find(i=>i.chain===r.chain)||a.push(r),t.set(n,a)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){const t=[];return e.forEach(r=>{t.find(o=>o.chain===r.chain)||t.push(r)}),t},addConnector(e){if(e.id===G.CONNECTOR_ID.AUTH){var t,r,o;const n=e,a=Fe(x.state),s=Ke.getSnapshot().themeMode,i=Ke.getSnapshot().themeVariables;n==null||(t=n.provider)===null||t===void 0||(r=t.syncDappData)===null||r===void 0||r.call(t,{metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType}),n==null||(o=n.provider)===null||o===void 0||o.syncTheme({themeMode:s,themeVariables:i,w3mThemeVariables:ge(i,s)}),A.setConnectors([e])}else A.setConnectors([e])},getAuthConnector(e){var t;const r=e||c.state.activeChain,o=S.connectors.find(n=>n.id===G.CONNECTOR_ID.AUTH);if(o)return!(o==null||(t=o.connectors)===null||t===void 0)&&t.length?o.connectors.find(a=>a.chain===r):o},getAnnouncedConnectorRdns(){return S.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>{var t;return(t=e.info)===null||t===void 0?void 0:t.rdns})},getConnectorById(e){return S.allConnectors.find(t=>t.id===e)},getConnector(e,t){return S.allConnectors.filter(o=>o.chain===c.state.activeChain).find(o=>{var n;return o.explorerId===e||((n=o.info)===null||n===void 0?void 0:n.rdns)===t})},syncIfAuthConnector(e){var t,r;if(e.id!=="ID_AUTH")return;const o=e,n=Fe(x.state),a=Ke.getSnapshot().themeMode,s=Ke.getSnapshot().themeVariables;o==null||(t=o.provider)===null||t===void 0||(r=t.syncDappData)===null||r===void 0||r.call(t,{metadata:n.metadata,sdkVersion:n.sdkVersion,sdkType:n.sdkType,projectId:n.projectId}),o.provider.syncTheme({themeMode:a,themeVariables:s,w3mThemeVariables:ge(s,a)})},getConnectorsByNamespace(e){const t=S.allConnectors.filter(r=>r.chain===e);return A.mergeMultiChainConnectors(t)},selectWalletConnector(e){const t=A.getConnector(e.id,e.rdns),r=c.state.activeChain;Gt.handleMobileDeeplinkRedirect((t==null?void 0:t.explorerId)||e.id,r),t?D.push("ConnectingExternal",{connector:t}):D.push("ConnectingWalletConnect",{wallet:e})},getConnectors(e){return e?A.getConnectorsByNamespace(e):A.mergeMultiChainConnectors(S.allConnectors)},setFilterByNamespace(e){S.filterByNamespace=e,S.connectors=A.getConnectors(e),m.setFilterByNamespace(e)},setConnectorId(e,t){e&&(S.activeConnectorIds={...S.activeConnectorIds,[t]:e},C.setConnectedConnectorId(t,e))},removeConnectorId(e){S.activeConnectorIds={...S.activeConnectorIds,[e]:void 0},C.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return S.activeConnectorIds[e]},isConnected(e){return e?!!S.activeConnectorIds[e]:Object.values(S.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){S.activeConnectorIds={...vt}}},A=oe(sr);Ye();const cr="https://secure.walletconnect.org/sdk",Tr=(typeof Ue<"u"?{}.NEXT_PUBLIC_SECURE_SITE_SDK_URL:void 0)||cr,xr=(typeof Ue<"u"?{}.NEXT_PUBLIC_DEFAULT_LOG_LEVEL:void 0)||"error",Or=(typeof Ue<"u"?{}.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION:void 0)||"4",$e={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Ne=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),H=W({...Ne}),lr={state:H,subscribeKey(e,t){return X(H,e,t)},showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){const t=y.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){H.message=Ne.message,H.variant=Ne.variant,H.svg=Ne.svg,H.open=Ne.open,H.autoClose=Ne.autoClose},_showMessage({message:e,svg:t,variant:r="success",autoClose:o=Ne.autoClose}){H.open?(H.open=!1,setTimeout(()=>{H.message=e,H.variant=r,H.svg=t,H.open=!0,H.autoClose=o},150)):(H.message=e,H.variant=r,H.svg=t,H.open=!0,H.autoClose=o)}},Xe=lr,B=W({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),dr={state:B,subscribe(e){return ee(B,()=>e(B))},setLastNetworkInView(e){B.lastNetworkInView=e},async fetchTransactions(e,t){if(!e)throw new Error("Transactions can't be fetched without an accountAddress");B.loading=!0;try{var r;const n=await b.fetchTransactions({account:e,cursor:B.next,onramp:t,cache:t==="coinbase"?"no-cache":void 0,chainId:(r=c.state.activeCaipNetwork)===null||r===void 0?void 0:r.caipNetworkId}),a=Me.filterSpamTransactions(n.data),s=Me.filterByConnectedChain(a),i=[...B.transactions,...s];B.loading=!1,t==="coinbase"?B.coinbaseTransactions=Me.groupTransactionsByYearAndMonth(B.coinbaseTransactions,n.data):(B.transactions=i,B.transactionsByYear=Me.groupTransactionsByYearAndMonth(B.transactionsByYear,s)),B.empty=i.length===0,B.next=n.next?n.next:void 0}catch{var o;const a=c.state.activeChain;Z.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:x.state.projectId,cursor:B.next,isSmartAccount:((o=F.state.preferredAccountTypes)===null||o===void 0?void 0:o[a])===$e.ACCOUNT_TYPES.SMART_ACCOUNT}}),Xe.showError("Failed to fetch transactions"),B.loading=!1,B.empty=!0,B.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const r=e;return t.forEach(o=>{const n=new Date(o.metadata.minedAt).getFullYear(),a=new Date(o.metadata.minedAt).getMonth(),s=r[n]??{},d=(s[a]??[]).filter(l=>l.id!==o.id);r[n]={...s,[a]:[...d,o].sort((l,p)=>new Date(p.metadata.minedAt).getTime()-new Date(l.metadata.minedAt).getTime())}}),r},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(o=>{var n;return((n=o.nft_info)===null||n===void 0?void 0:n.flags.is_spam)===!0}))},filterByConnectedChain(e){var t;const r=(t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId;return e.filter(n=>n.metadata.chain===r)},clearCursor(){B.next=void 0},resetTransactions(){B.transactions=[],B.transactionsByYear={},B.lastNetworkInView=void 0,B.loading=!1,B.empty=!1,B.next=void 0}},Me=oe(dr,"API_ERROR"),R=W({connections:new Map,wcError:!1,buffering:!1,status:"disconnected"});let Ce;const ur={state:R,subscribeKey(e,t){return X(R,e,t)},_getClient(){return R._client},setClient(e){R._client=Oe(e)},async connectWalletConnect(){var e,t;if(y.isTelegram()||y.isSafari()&&y.isIos()){var r,o;if(Ce){await Ce,Ce=void 0;return}if(!y.isPairingExpired(R==null?void 0:R.wcPairingExpiry)){const n=R.wcUri;R.wcUri=n;return}Ce=(r=I._getClient())===null||r===void 0||(o=r.connectWalletConnect)===null||o===void 0?void 0:o.call(r).catch(()=>{}),I.state.status="connecting",await Ce,Ce=void 0,R.wcPairingExpiry=void 0,I.state.status="connected"}else await((e=I._getClient())===null||e===void 0||(t=e.connectWalletConnect)===null||t===void 0?void 0:t.call(e))},async connectExternal(e,t,r=!0){var o,n;await((o=I._getClient())===null||o===void 0||(n=o.connectExternal)===null||n===void 0?void 0:n.call(o,e)),r&&c.setActiveNamespace(t)},async reconnectExternal(e){var t,r;await((t=I._getClient())===null||t===void 0||(r=t.reconnectExternal)===null||r===void 0?void 0:r.call(t,e));const o=e.chain||c.state.activeChain;o&&A.setConnectorId(e.id,o)},async setPreferredAccountType(e,t){var r;ve.setLoading(!0,c.state.activeChain);const o=A.getAuthConnector();o&&(F.setPreferredAccountType(e,t),await o.provider.setPreferredAccount(e),C.setPreferredAccountTypes(F.state.preferredAccountTypes??{[t]:e}),await I.reconnectExternal(o),ve.setLoading(!1,c.state.activeChain),Z.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:((r=c.state.activeCaipNetwork)===null||r===void 0?void 0:r.caipNetworkId)||""}}))},async signMessage(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.signMessage(e)},parseUnits(e,t){var r;return(r=I._getClient())===null||r===void 0?void 0:r.parseUnits(e,t)},formatUnits(e,t){var r;return(r=I._getClient())===null||r===void 0?void 0:r.formatUnits(e,t)},async sendTransaction(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.sendTransaction(e)},async getCapabilities(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.getCapabilities(e)},async grantPermissions(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.grantPermissions(e)},async walletGetAssets(e){var t;return((t=I._getClient())===null||t===void 0?void 0:t.walletGetAssets(e))??{}},async estimateGas(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.estimateGas(e)},async writeContract(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.writeContract(e)},async getEnsAddress(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.getEnsAddress(e)},async getEnsAvatar(e){var t;return(t=I._getClient())===null||t===void 0?void 0:t.getEnsAvatar(e)},checkInstalled(e){var t,r;return((t=I._getClient())===null||t===void 0||(r=t.checkInstalled)===null||r===void 0?void 0:r.call(t,e))||!1},resetWcConnection(){R.wcUri=void 0,R.wcPairingExpiry=void 0,R.wcLinking=void 0,R.recentWallet=void 0,R.status="disconnected",Me.resetTransactions(),C.deleteWalletConnectDeepLink()},resetUri(){R.wcUri=void 0,R.wcPairingExpiry=void 0,Ce=void 0},finalizeWcConnection(){var e;const{wcLinking:t,recentWallet:r}=I.state;t&&C.setWalletConnectDeepLink(t),r&&C.setAppKitRecent(r),Z.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode",name:((e=D.state.data)===null||e===void 0||(e=e.wallet)===null||e===void 0?void 0:e.name)||"Unknown"}})},setWcBasic(e){R.wcBasic=e},setUri(e){R.wcUri=e,R.wcPairingExpiry=y.getPairingExpiry()},setWcLinking(e){R.wcLinking=e},setWcError(e){R.wcError=e,R.buffering=!1},setRecentWallet(e){R.recentWallet=e},setBuffering(e){R.buffering=e},setStatus(e){R.status=e},async disconnect(e){try{var t;await((t=I._getClient())===null||t===void 0?void 0:t.disconnect(e))}catch(r){throw new it("Failed to disconnect","INTERNAL_SDK_ERROR",r)}},setConnections(e,t){R.connections.set(t,e)},switchAccount({connection:e,address:t,namespace:r}){if(A.state.activeConnectorIds[r]===e.connectorId){const a=c.state.activeCaipNetwork;if(a){const s=`${r}:${a.id}:${t}`;F.setCaipAddress(s,r)}else console.warn(`No current network found for namespace "${r}"`)}else{const a=A.getConnector(e.connectorId);a?I.connectExternal(a,r):console.warn(`No connector found for namespace "${r}"`)}}},I=oe(ur),ke=W({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),Te={state:ke,subscribe(e){return ee(ke,()=>e(ke))},subscribeOpen(e){return X(ke,"open",e)},set(e){Object.assign(ke,{...ke,...e})}},ot={createBalance(e,t){const r={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return Ct(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){const t=e.split(":");if(t.length<2||!t[1])return"0x0";const r=t[1],o=parseInt(r,10);return isNaN(o)?"0x0":`0x${o.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(r=>this.isValidAsset(r)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}},gt={async getMyTokensWithBalance(e){const t=F.state.address,r=c.state.activeCaipNetwork;if(!t||!r)return[];if(r.chainNamespace==="eip155"){const n=await this.getEIP155Balances(t,r);if(n)return this.filterLowQualityTokens(n)}const o=await b.getBalance(t,r.caipNetworkId,e);return this.filterLowQualityTokens(o.balances)},async getEIP155Balances(e,t){try{var r;const o=ot.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),n=await I.getCapabilities(e);if(!(!(n==null||(r=n[o])===null||r===void 0||(r=r.assetDiscovery)===null||r===void 0)&&r.supported))return null;const a=await I.walletGetAssets({account:e,chainFilter:[o]});return ot.isWalletGetAssetsResponse(a)?(a[o]||[]).map(i=>ot.createBalance(i,t.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},mapBalancesToSwapTokens(e){return(e==null?void 0:e.map(t=>({...t,address:t!=null&&t.address?t.address:c.getActiveNetworkTokenAddress(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1})))||[]}},T=W({tokenBalances:[],loading:!1}),pr={state:T,subscribe(e){return ee(T,()=>e(T))},subscribeKey(e,t){return X(T,e,t)},setToken(e){e&&(T.token=Oe(e))},setTokenAmount(e){T.sendTokenAmount=e},setReceiverAddress(e){T.receiverAddress=e},setReceiverProfileImageUrl(e){T.receiverProfileImageUrl=e},setReceiverProfileName(e){T.receiverProfileName=e},setNetworkBalanceInUsd(e){T.networkBalanceInUSD=e},setLoading(e){T.loading=e},async sendToken(){try{var e;switch(_.setLoading(!0),(e=c.state.activeCaipNetwork)===null||e===void 0?void 0:e.chainNamespace){case"eip155":await _.sendEvmToken();return;case"solana":await _.sendSolanaToken();return;default:throw new Error("Unsupported chain")}}finally{_.setLoading(!1)}},async sendEvmToken(){var e,t;const r=c.state.activeChain,o=(e=F.state.preferredAccountTypes)===null||e===void 0?void 0:e[r];if(!_.state.sendTokenAmount||!_.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!_.state.token)throw new Error("A token is required");if(!((t=_.state.token)===null||t===void 0)&&t.address){var n;Z.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:o===$e.ACCOUNT_TYPES.SMART_ACCOUNT,token:_.state.token.address,amount:_.state.sendTokenAmount,network:((n=c.state.activeCaipNetwork)===null||n===void 0?void 0:n.caipNetworkId)||""}}),await _.sendERC20Token({receiverAddress:_.state.receiverAddress,tokenAddress:_.state.token.address,sendTokenAmount:_.state.sendTokenAmount,decimals:_.state.token.quantity.decimals})}else{var a;Z.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:o===$e.ACCOUNT_TYPES.SMART_ACCOUNT,token:_.state.token.symbol||"",amount:_.state.sendTokenAmount,network:((a=c.state.activeCaipNetwork)===null||a===void 0?void 0:a.caipNetworkId)||""}}),await _.sendNativeToken({receiverAddress:_.state.receiverAddress,sendTokenAmount:_.state.sendTokenAmount,decimals:_.state.token.quantity.decimals})}},async fetchTokenBalance(e){var t,r;T.loading=!0;const o=(t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId,n=(r=c.state.activeCaipNetwork)===null||r===void 0?void 0:r.chainNamespace,a=c.state.activeCaipAddress,s=a?y.getPlainAddress(a):void 0;if(T.lastRetry&&!y.isAllowedRetry(T.lastRetry,30*J.ONE_SEC_MS))return T.loading=!1,[];try{if(s&&o&&n){const i=await gt.getMyTokensWithBalance();return T.tokenBalances=i,T.lastRetry=void 0,i}}catch(i){T.lastRetry=Date.now(),e==null||e(i),Xe.showError("Token Balance Unavailable")}finally{T.loading=!1}return[]},fetchNetworkBalance(){if(T.tokenBalances.length===0)return;const e=gt.mapBalancesToSwapTokens(T.tokenBalances);if(!e)return;const t=e.find(r=>r.address===c.getActiveNetworkTokenAddress());t&&(T.networkBalanceInUSD=t?Lt.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){var t,r,o,n;D.pushTransactionStack({});const a=e.receiverAddress,s=F.state.address,i=I.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));await I.sendTransaction({chainNamespace:"eip155",to:a,address:s,data:"0x",value:i??BigInt(0)}),Z.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:((t=F.state.preferredAccountTypes)===null||t===void 0?void 0:t.eip155)===$e.ACCOUNT_TYPES.SMART_ACCOUNT,token:((r=_.state.token)===null||r===void 0?void 0:r.symbol)||"",amount:e.sendTokenAmount,network:((o=c.state.activeCaipNetwork)===null||o===void 0?void 0:o.caipNetworkId)||""}}),(n=I._getClient())===null||n===void 0||n.updateBalance("eip155"),_.resetSend()},async sendERC20Token(e){D.pushTransactionStack({onSuccess(){D.replace("Account")}});const t=I.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));if(F.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){const r=y.getPlainAddress(e.tokenAddress);await I.writeContract({fromAddress:F.state.address,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:Ht.getERC20Abi(r),chainNamespace:"eip155"}),_.resetSend()}},async sendSolanaToken(){var e;if(!_.state.sendTokenAmount||!_.state.receiverAddress)throw new Error("An amount and receiver address are required");D.pushTransactionStack({onSuccess(){D.replace("Account")}}),await I.sendTransaction({chainNamespace:"solana",to:_.state.receiverAddress,value:_.state.sendTokenAmount}),(e=I._getClient())===null||e===void 0||e.updateBalance("solana"),_.resetSend()},resetSend(){T.token=void 0,T.sendTokenAmount=void 0,T.receiverAddress=void 0,T.receiverProfileImageUrl=void 0,T.receiverProfileName=void 0,T.loading=!1,T.tokenBalances=[]}},_=oe(pr),nt={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},qe={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},u=W({chains:St(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),wr={state:u,subscribe(e){return ee(u,()=>{e(u)})},subscribeKey(e,t){return X(u,e,t)},subscribeChainProp(e,t,r){let o;return ee(u.chains,()=>{const n=r||u.activeChain;if(n){var a;const s=(a=u.chains.get(n))===null||a===void 0?void 0:a[e];o!==s&&(o=s,t(s))}})},initialize(e,t,r){const{chainId:o,namespace:n}=C.getActiveNetworkProps(),a=t==null?void 0:t.find(p=>p.id.toString()===(o==null?void 0:o.toString())),i=e.find(p=>(p==null?void 0:p.namespace)===n)||(e==null?void 0:e[0]),d=e.map(p=>p.namespace).filter(p=>p!==void 0),l=x.state.enableEmbedded?new Set([...d]):new Set([...(t==null?void 0:t.map(p=>p.chainNamespace))??[]]);((e==null?void 0:e.length)===0||!i)&&(u.noAdapters=!0),u.noAdapters||(u.activeChain=i==null?void 0:i.namespace,u.activeCaipNetwork=a,c.setChainNetworkData(i==null?void 0:i.namespace,{caipNetwork:a}),u.activeChain&&Te.set({activeChain:i==null?void 0:i.namespace})),l.forEach(p=>{const w=t==null?void 0:t.filter(L=>L.chainNamespace===p);c.state.chains.set(p,{namespace:p,networkState:W({...qe,caipNetwork:w==null?void 0:w[0]}),accountState:W(nt),caipNetworks:w??[],...r}),c.setRequestedCaipNetworks(w??[],p)})},removeAdapter(e){if(u.activeChain===e){const r=Array.from(u.chains.entries()).find(([o])=>o!==e);if(r){var t;const o=(t=r[1])===null||t===void 0||(t=t.caipNetworks)===null||t===void 0?void 0:t[0];o&&c.setActiveCaipNetwork(o)}}u.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:r},o){u.chains.set(e.namespace,{namespace:e.namespace,networkState:{...qe,caipNetwork:o[0]},accountState:nt,caipNetworks:o,connectionControllerClient:r,networkControllerClient:t}),c.setRequestedCaipNetworks((o==null?void 0:o.filter(n=>n.chainNamespace===e.namespace))??[],e.namespace)},addNetwork(e){const t=u.chains.get(e.chainNamespace);if(t){var r;const o=[...t.caipNetworks||[]];!((r=t.caipNetworks)===null||r===void 0)&&r.find(n=>n.id===e.id)||o.push(e),u.chains.set(e.chainNamespace,{...t,caipNetworks:o}),c.setRequestedCaipNetworks(o,e.chainNamespace),A.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){const r=u.chains.get(e);if(r){var o,n,a;const s=((o=u.activeCaipNetwork)===null||o===void 0?void 0:o.id)===t,i=[...((n=r.caipNetworks)===null||n===void 0?void 0:n.filter(d=>d.id!==t))||[]];s&&(!(r==null||(a=r.caipNetworks)===null||a===void 0)&&a[0])&&c.setActiveCaipNetwork(r.caipNetworks[0]),u.chains.set(e,{...r,caipNetworks:i}),c.setRequestedCaipNetworks(i||[],e),i.length===0&&A.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){const r=u.chains.get(e);r&&(r.networkState={...r.networkState||qe,...t},u.chains.set(e,r))},setChainAccountData(e,t,r=!0){if(!e)throw new Error("Chain is required to update chain account data");const o=u.chains.get(e);if(o){const n={...o.accountState||nt,...t};u.chains.set(e,{...o,accountState:n}),(u.chains.size===1||u.activeChain===e)&&(t.caipAddress&&(u.activeCaipAddress=t.caipAddress),F.replaceState(n))}},setChainNetworkData(e,t){if(!e)return;const r=u.chains.get(e);if(r){const o={...r.networkState||qe,...t};u.chains.set(e,{...r,networkState:o})}},setAccountProp(e,t,r,o=!0){c.setChainAccountData(r,{[e]:t},o),e==="status"&&t==="disconnected"&&r&&A.removeConnectorId(r)},setActiveNamespace(e){var t;u.activeChain=e;const r=e?u.chains.get(e):void 0,o=r==null||(t=r.networkState)===null||t===void 0?void 0:t.caipNetwork;if(o!=null&&o.id&&e){var n;u.activeCaipAddress=r==null||(n=r.accountState)===null||n===void 0?void 0:n.caipAddress,u.activeCaipNetwork=o,c.setChainNetworkData(e,{caipNetwork:o}),C.setActiveCaipNetworkId(o==null?void 0:o.caipNetworkId),Te.set({activeChain:e,selectedNetworkId:o==null?void 0:o.caipNetworkId})}},setActiveCaipNetwork(e){var t,r,o;if(!e)return;u.activeChain!==e.chainNamespace&&c.setIsSwitchingNamespace(!0);const n=u.chains.get(e.chainNamespace);u.activeChain=e.chainNamespace,u.activeCaipNetwork=e,c.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),!(n==null||(t=n.accountState)===null||t===void 0)&&t.address?u.activeCaipAddress=`${e.chainNamespace}:${e.id}:${n==null||(r=n.accountState)===null||r===void 0?void 0:r.address}`:u.activeCaipAddress=void 0,c.setAccountProp("caipAddress",u.activeCaipAddress,e.chainNamespace),n&&F.replaceState(n.accountState),_.resetSend(),Te.set({activeChain:u.activeChain,selectedNetworkId:(o=u.activeCaipNetwork)===null||o===void 0?void 0:o.caipNetworkId}),C.setActiveCaipNetworkId(e.caipNetworkId),!c.checkIfSupportedNetwork(e.chainNamespace)&&x.state.enableNetworkSwitch&&!x.state.allowUnsupportedChain&&!I.state.wcBasic&&c.showUnsupportedChainUI()},addCaipNetwork(e){var t;if(!e)return;const r=u.chains.get(e.chainNamespace);r&&(r==null||(t=r.caipNetworks)===null||t===void 0||t.push(e))},async switchActiveNamespace(e){var t;if(!e)return;const r=e!==c.state.activeChain,o=(t=c.getNetworkData(e))===null||t===void 0?void 0:t.caipNetwork,n=c.getCaipNetworkByNamespace(e,o==null?void 0:o.id);r&&n&&await c.switchActiveNetwork(n)},async switchActiveNetwork(e){var t;const r=c.state.chains.get(c.state.activeChain),o=!(!(r==null||(t=r.caipNetworks)===null||t===void 0)&&t.some(a=>{var s;return a.id===((s=u.activeCaipNetwork)===null||s===void 0?void 0:s.id)})),n=c.getNetworkControllerClient(e.chainNamespace);if(n){try{await n.switchCaipNetwork(e),o&&ve.close()}catch{D.goBack()}Z.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})}},getNetworkControllerClient(e){const t=e||u.activeChain,r=u.chains.get(t);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(e){const t=e||u.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");const r=u.chains.get(t);if(!(r!=null&&r.connectionControllerClient))throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(e,t){var r;let o=u.activeChain;if(t&&(o=t),!o)return;const n=(r=u.chains.get(o))===null||r===void 0?void 0:r.accountState;if(n)return n[e]},getNetworkProp(e,t){var r;const o=(r=u.chains.get(t))===null||r===void 0?void 0:r.networkState;if(o)return o[e]},getRequestedCaipNetworks(e){const t=u.chains.get(e),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:o=[]}=(t==null?void 0:t.networkState)||{};return y.sortRequestedNetworks(r,o)},getAllRequestedCaipNetworks(){const e=[];return u.chains.forEach(t=>{const r=c.getRequestedCaipNetworks(t.namespace);e.push(...r)}),e},setRequestedCaipNetworks(e,t){c.setAdapterNetworkState(t,{requestedCaipNetworks:e});const o=c.getAllRequestedCaipNetworks().map(a=>a.chainNamespace),n=Array.from(new Set(o));A.filterByNamespaces(n)},getAllApprovedCaipNetworkIds(){const e=[];return u.chains.forEach(t=>{const r=c.getApprovedCaipNetworkIds(t.namespace);e.push(...r)}),e},getActiveCaipNetwork(){return u.activeCaipNetwork},getActiveCaipAddress(){return u.activeCaipAddress},getApprovedCaipNetworkIds(e){var t;const r=u.chains.get(e);return(r==null||(t=r.networkState)===null||t===void 0?void 0:t.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(e){const t=c.getNetworkControllerClient(),r=await(t==null?void 0:t.getApprovedCaipNetworksData());c.setAdapterNetworkState(e,{approvedCaipNetworkIds:r==null?void 0:r.approvedCaipNetworkIds,supportsAllNetworks:r==null?void 0:r.supportsAllNetworks})},checkIfSupportedNetwork(e,t){const r=t||u.activeCaipNetwork,o=c.getRequestedCaipNetworks(e);return o.length?o==null?void 0:o.some(n=>n.id===(r==null?void 0:r.id)):!0},checkIfSupportedChainId(e){if(!u.activeChain)return!0;const t=c.getRequestedCaipNetworks(u.activeChain);return t==null?void 0:t.some(r=>r.id===e)},setSmartAccountEnabledNetworks(e,t){c.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){var e;const t=kt.caipNetworkIdToNumber((e=u.activeCaipNetwork)===null||e===void 0?void 0:e.caipNetworkId),r=u.activeChain;if(!r||!t)return!1;const o=c.getNetworkProp("smartAccountEnabledNetworks",r);return!!(o!=null&&o.includes(Number(t)))},getActiveNetworkTokenAddress(){var e,t;const r=((e=u.activeCaipNetwork)===null||e===void 0?void 0:e.chainNamespace)||"eip155",o=((t=u.activeCaipNetwork)===null||t===void 0?void 0:t.id)||1,n=J.NATIVE_TOKEN_ADDRESS[r];return`${r}:${o}:${n}`},showUnsupportedChainUI(){ve.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const e=u.activeCaipNetwork;return!!(e!=null&&e.chainNamespace&&J.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){c.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){const t=e;if(!t)throw new Error("Chain is required to set account prop");u.activeCaipAddress=void 0,c.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),A.removeConnectorId(t)},setIsSwitchingNamespace(e){u.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){const e=[];let t;if(u.chains.forEach(o=>{G.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===o.namespace)&&o.namespace&&e.push(o.namespace)}),e.length>0){var r;const o=e[0];return t=o?(r=u.chains.get(o))===null||r===void 0||(r=r.caipNetworks)===null||r===void 0?void 0:r[0]:void 0,t}},getAccountData(e){var t;return e?(t=c.state.chains.get(e))===null||t===void 0?void 0:t.accountState:F.state},getNetworkData(e){var t;const r=e||u.activeChain;if(r)return(t=c.state.chains.get(r))===null||t===void 0?void 0:t.networkState},getCaipNetworkByNamespace(e,t){var r,o,n;if(!e)return;const a=c.state.chains.get(e),s=a==null||(r=a.caipNetworks)===null||r===void 0?void 0:r.find(i=>i.id===t);return s||(a==null||(o=a.networkState)===null||o===void 0?void 0:o.caipNetwork)||(a==null||(n=a.caipNetworks)===null||n===void 0?void 0:n[0])},getRequestedCaipNetworkIds(){const e=A.state.filterByNamespace;return(e?[u.chains.get(e)]:Array.from(u.chains.values())).flatMap(r=>(r==null?void 0:r.caipNetworks)||[]).map(r=>r.caipNetworkId)},getCaipNetworks(e){return e?c.getRequestedCaipNetworks(e):c.getAllRequestedCaipNetworks()}},c=oe(wr),gr={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},ht=y.getBlockchainApiUrl(),q=W({clientId:null,api:new je({baseUrl:ht,clientId:null}),supportedChains:{http:[],ws:[]}}),b={state:q,async get(e){const{st:t,sv:r}=b.getSdkProperties(),o=x.state.projectId,n={...e.params||{},st:t,sv:r,projectId:o};return q.api.get({...e,params:n})},getSdkProperties(){const{sdkType:e,sdkVersion:t}=x.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{q.supportedChains.http.length||await b.getSupportedNetworks()}catch{return!1}return q.supportedChains.http.includes(e)},async getSupportedNetworks(){try{const e=await b.get({path:"v1/supported-chains"});return q.supportedChains=e,e}catch{return q.supportedChains}},async fetchIdentity({address:e,caipNetworkId:t}){if(!await b.isNetworkSupported(t))return{avatar:"",name:""};const o=C.getIdentityFromCacheForAddress(e);if(o)return o;const n=await b.get({path:`/v1/identity/${e}`,params:{sender:c.state.activeCaipAddress?y.getPlainAddress(c.state.activeCaipAddress):void 0}});return C.updateIdentityCache({address:e,identity:n,timestamp:Date.now()}),n},async fetchTransactions({account:e,cursor:t,onramp:r,signal:o,cache:n,chainId:a}){var s;return await b.isNetworkSupported((s=c.state.activeCaipNetwork)===null||s===void 0?void 0:s.caipNetworkId)?b.get({path:`/v1/account/${e}/history`,params:{cursor:t,onramp:r,chainId:a},signal:o,cache:n}):{data:[],next:void 0}},async fetchSwapQuote({amount:e,userAddress:t,from:r,to:o,gasPrice:n}){var a;return await b.isNetworkSupported((a=c.state.activeCaipNetwork)===null||a===void 0?void 0:a.caipNetworkId)?b.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:r,to:o,gasPrice:n}}):{quotes:[]}},async fetchSwapTokens({chainId:e}){var t;return await b.isNetworkSupported((t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId)?b.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}},async fetchTokenPrice({addresses:e}){var t;return await b.isNetworkSupported((t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId)?q.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:x.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:e,userAddress:t}){var r;return await b.isNetworkSupported((r=c.state.activeCaipNetwork)===null||r===void 0?void 0:r.caipNetworkId)?b.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:e}){var t;const{st:r,sv:o}=b.getSdkProperties();if(!await b.isNetworkSupported((t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId))throw new Error("Network not supported for Gas Price");return b.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:r,sv:o}})},async generateSwapCalldata({amount:e,from:t,to:r,userAddress:o,disableEstimate:n}){var a;if(!await b.isNetworkSupported((a=c.state.activeCaipNetwork)===null||a===void 0?void 0:a.caipNetworkId))throw new Error("Network not supported for Swaps");return q.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:J.CONVERT_SLIPPAGE_TOLERANCE},projectId:x.state.projectId,from:t,to:r,userAddress:o,disableEstimate:n}})},async generateApproveCalldata({from:e,to:t,userAddress:r}){var o;const{st:n,sv:a}=b.getSdkProperties();if(!await b.isNetworkSupported((o=c.state.activeCaipNetwork)===null||o===void 0?void 0:o.caipNetworkId))throw new Error("Network not supported for Swaps");return b.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:e,to:t,st:n,sv:a}})},async getBalance(e,t,r){var o;const{st:n,sv:a}=b.getSdkProperties();if(!await b.isNetworkSupported((o=c.state.activeCaipNetwork)===null||o===void 0?void 0:o.caipNetworkId))return Xe.showError("Token Balance Unavailable"),{balances:[]};const i=`${t}:${e}`,d=C.getBalanceCacheForCaipAddress(i);if(d)return d;const l=await b.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:r,st:n,sv:a}});return C.updateBalanceCache({caipAddress:i,balance:l,timestamp:Date.now()}),l},async lookupEnsName(e){var t;return await b.isNetworkSupported((t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId)?b.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:e}){var t;return await b.isNetworkSupported((t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId)?b.get({path:`/v1/profile/reverse/${e}`,params:{sender:F.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(e){var t;return await b.isNetworkSupported((t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId)?b.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:e,address:t,message:r,signature:o}){var n;return await b.isNetworkSupported((n=c.state.activeCaipNetwork)===null||n===void 0?void 0:n.caipNetworkId)?q.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:o},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:o,paymentAmount:n}){var a;return await b.isNetworkSupported((a=c.state.activeCaipNetwork)===null||a===void 0?void 0:a.caipNetworkId)?(await q.api.post({path:"/v1/generators/onrampurl",params:{projectId:x.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:o,presetFiatAmount:n}})).url:""},async getOnrampOptions(){var e;if(!await b.isNetworkSupported((e=c.state.activeCaipNetwork)===null||e===void 0?void 0:e.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await b.get({path:"/v1/onramp/options"})}catch{return gr}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:o}){try{var n;return await b.isNetworkSupported((n=c.state.activeCaipNetwork)===null||n===void 0?void 0:n.caipNetworkId)?await q.api.post({path:"/v1/onramp/quote",params:{projectId:x.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:o}}):null}catch{return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){var t;return await b.isNetworkSupported((t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId)?b.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,r){var o;return await b.isNetworkSupported((o=c.state.activeCaipNetwork)===null||o===void 0?void 0:o.caipNetworkId)?q.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:x.state.projectId},body:{pci:t,signature:r}}):{success:!1}},setClientId(e){q.clientId=e,q.api=new je({baseUrl:ht,clientId:e})}},Q=W({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),fr={state:Q,replaceState(e){e&&Object.assign(Q,Oe(e))},subscribe(e){return c.subscribeChainProp("accountState",t=>{if(t)return e(t)})},subscribeKey(e,t,r){let o;return c.subscribeChainProp("accountState",n=>{if(n){const a=n[e];o!==a&&(o=a,t(a))}},r)},setStatus(e,t){c.setAccountProp("status",e,t)},getCaipAddress(e){return c.getAccountProp("caipAddress",e)},setCaipAddress(e,t){const r=e?y.getPlainAddress(e):void 0;t===c.state.activeChain&&(c.state.activeCaipAddress=e),c.setAccountProp("caipAddress",e,t),c.setAccountProp("address",r,t)},setBalance(e,t,r){c.setAccountProp("balance",e,r),c.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){c.setAccountProp("profileName",e,t)},setProfileImage(e,t){c.setAccountProp("profileImage",e,t)},setUser(e,t){c.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){c.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){c.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){c.setAccountProp("currentTab",e,c.state.activeChain)},setTokenBalance(e,t){e&&c.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){c.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){c.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,r){const o=c.getAccountProp("addressLabels",r)||new Map;o.set(e,t),c.setAccountProp("addressLabels",o,r)},removeAddressLabel(e,t){const r=c.getAccountProp("addressLabels",t)||new Map;r.delete(e),c.setAccountProp("addressLabels",r,t)},setConnectedWalletInfo(e,t){c.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){c.setAccountProp("preferredAccountTypes",{...Q.preferredAccountTypes,[t]:e},t)},setPreferredAccountTypes(e){Q.preferredAccountTypes=e},setSocialProvider(e,t){e&&c.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){c.setAccountProp("socialWindow",e?Oe(e):void 0,t)},setFarcasterUrl(e,t){c.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(e){var t,r;Q.balanceLoading=!0;const o=(t=c.state.activeCaipNetwork)===null||t===void 0?void 0:t.caipNetworkId,n=(r=c.state.activeCaipNetwork)===null||r===void 0?void 0:r.chainNamespace,a=c.state.activeCaipAddress,s=a?y.getPlainAddress(a):void 0;if(Q.lastRetry&&!y.isAllowedRetry(Q.lastRetry,30*J.ONE_SEC_MS))return Q.balanceLoading=!1,[];try{if(s&&o&&n){const d=(await b.getBalance(s,o)).balances.filter(l=>l.quantity.decimals!=="0");return F.setTokenBalance(d,n),Q.lastRetry=void 0,Q.balanceLoading=!1,d}}catch(i){Q.lastRetry=Date.now(),e==null||e(i),Xe.showError("Token Balance Unavailable")}finally{Q.balanceLoading=!1}return[]},resetAccount(e){c.resetAccount(e)}},F=oe(fr),mr={onSwitchNetwork({network:e,ignoreSwitchConfirmation:t=!1}){const r=c.state.activeCaipNetwork,o=D.state.data;if(e.id===(r==null?void 0:r.id))return;const a=F.getCaipAddress(c.state.activeChain),s=e.chainNamespace!==c.state.activeChain,i=F.getCaipAddress(e.chainNamespace),l=A.getConnectorId(c.state.activeChain)===G.CONNECTOR_ID.AUTH,p=G.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(w=>w===e.chainNamespace);t||l&&p?D.push("SwitchNetwork",{...o,network:e}):a&&s&&!i?D.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):D.push("SwitchNetwork",{...o,network:e})}},$=W({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),vr={state:$,subscribe(e){return ee($,()=>e($))},subscribeKey(e,t){return X($,e,t)},async open(e){var t;const r=F.state.status==="connected",o=e==null?void 0:e.namespace,n=c.state.activeChain,a=o&&o!==n,s=(t=c.getAccountData(e==null?void 0:e.namespace))===null||t===void 0?void 0:t.caipAddress;if(I.state.wcBasic?m.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await m.prefetch({fetchConnectorImages:!r,fetchFeaturedWallets:!r,fetchRecommendedWallets:!r}),A.setFilterByNamespace(e==null?void 0:e.namespace),ve.setLoading(!0,o),o&&a){var i;const d=((i=c.getNetworkData(o))===null||i===void 0?void 0:i.caipNetwork)||c.getRequestedCaipNetworks(o)[0];d&&mr.onSwitchNetwork({network:d,ignoreSwitchConfirmation:!0})}else{const d=c.state.noAdapters;x.state.manualWCControl||d&&!s?y.isMobile()?D.reset("AllWallets"):D.reset("ConnectingWalletConnectBasic"):e!=null&&e.view?D.reset(e.view,e.data):s?D.reset("Account"):D.reset("Connect")}$.open=!0,Te.set({open:!0}),Z.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!s}})},close(){const e=x.state.enableEmbedded,t=!!c.state.activeCaipAddress;$.open&&Z.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),$.open=!1,D.reset("Connect"),ve.clearLoading(),e?t?D.replace("Account"):D.push("Connect"):Te.set({open:!1}),I.resetUri()},setLoading(e,t){t&&$.loadingNamespaceMap.set(t,e),$.loading=e,Te.set({loading:e})},clearLoading(){$.loadingNamespaceMap.clear(),$.loading=!1},shake(){$.shake||($.shake=!0,setTimeout(()=>{$.shake=!1},500))}},ve=oe(vr);let We,fe,me;function Ur(e,t){We=document.createElement("style"),fe=document.createElement("style"),me=document.createElement("style"),We.textContent=xe(e).core.cssText,fe.textContent=xe(e).dark.cssText,me.textContent=xe(e).light.cssText,document.head.appendChild(We),document.head.appendChild(fe),document.head.appendChild(me),hr(t)}function hr(e){fe&&me&&(e==="light"?(fe.removeAttribute("media"),me.media="enabled"):(me.removeAttribute("media"),fe.media="enabled"))}function Pr(e){We&&fe&&me&&(We.textContent=xe(e).core.cssText,fe.textContent=xe(e).dark.cssText,me.textContent=xe(e).light.cssText)}function xe(e){return{core:_e`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${te(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${te((e==null?void 0:e["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${te((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${te((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${te((e==null?void 0:e["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:_e`
      :root {
        --w3m-color-mix: ${te((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${te(ge(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${te(ge(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:_e`
      :root {
        --w3m-color-mix: ${te((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${te(ge(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${te(ge(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}const Rr=_e`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Br=_e`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Dr=_e`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,Lr={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:r,truncate:o}){return e.length<=t+r?e:o==="end"?`${e.substring(0,t)}...`:o==="start"?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`},generateAvatarColors(e){const r=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),o=this.hexToRgb(r),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),i=`${s}% ${s}% at 65% 40%`,d=[];for(let l=0;l<5;l+=1){const p=this.tintColor(o,.15*l);d.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${d[0]};
    --local-color-2: ${d[1]};
    --local-color-3: ${d[2]};
    --local-color-4: ${d[3]};
    --local-color-5: ${d[4]};
    --local-radial-circle: ${i}
   `},hexToRgb(e){const t=parseInt(e,16),r=t>>16&255,o=t>>8&255,n=t&255;return[r,o,n]},tintColor(e,t){const[r,o,n]=e,a=Math.round(r+(255-r)*t),s=Math.round(o+(255-o)*t),i=Math.round(n+(255-n)*t);return[a,s,i]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){if(e)return e;if(typeof window<"u"&&window.matchMedia){var t;return!((t=window.matchMedia("(prefers-color-scheme: dark)"))===null||t===void 0)&&t.matches?"dark":"light"}return"dark"},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,r){return e.toString().length>=t?Number(e).toFixed(r):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function br(e,t){const{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(n){customElements.get(e)||customElements.define(e,n)}}}function Cr(e,t){return customElements.get(e)||customElements.define(e,t),t}function Mr(e){return function(r){return typeof r=="function"?Cr(e,r):br(e,r)}}Ye();const Wr={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof Ue<"u"?{}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};export{F as AccountController,Zt as AlertController,m as ApiController,re as AssetController,Xt as AssetUtil,b as BlockchainApiController,c as ChainController,I as ConnectionController,A as ConnectorController,Wr as ConstantsUtil,J as ConstantsUtil$1,G as ConstantsUtil$2,y as CoreHelperUtil,Z as EventsController,_r as MELD_PUBLIC_KEY,ve as ModalController,kt as NetworkUtil,kr as ONRAMP_PROVIDERS,x as OptionsController,Te as PublicStateController,D as RouterController,_ as SendController,Xe as SnackController,C as StorageUtil,Ke as ThemeController,Lr as UiHelperUtil,$e as W3mFrameRpcConstants,Dr as colorStyles,Mr as customElement,Br as elementStyles,Ur as initializeTheming,W as proxy,Oe as ref,Rr as resetStyles,hr as setColorTheme,Pr as setThemeVariables,ee as subscribe,X as subscribeKey,oe as withErrorBoundary};
