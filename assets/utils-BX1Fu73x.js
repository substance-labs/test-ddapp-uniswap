import{__commonJS as gt,__esm as ve,__export as Zn,__toCommonJS as mi,__toESM as pt}from"./chunk-DgAfPHQg.js";import{require_react as g0}from"./react-CNoFhWkx.js";import{isInterface as bi}from"./index.web-BqgtOHN3.js";import{global as vd,init_dist as Ad}from"./dist-Q7olfaoJ.js";import{__assign as et,__extends as kd,__rest as ic,__spreadArray as xr,init_tslib_es6 as mr}from"./tslib.es6-Dbpxy1u8.js";import{ARBITRUM_LOGO as m0,AVALANCHE_LOGO as oc,BASE_LOGO as b0,BLAST_LOGO as y0,BNB_LOGO as ac,CELO_LOGO as cc,ETHEREUM_LOGO as Ba,ETH_LOGO as Ft,MONAD_LOGO as uc,OPTIMISM_LOGO as E0,POLYGON_LOGO as lc,SOLANA_LOGO as dc,SONEIUM_LOGO as w0,UNICHAIN_LOGO as v0,UNICHAIN_SEPOLIA_LOGO as A0,WORLD_CHAIN_LOGO as k0,ZKSYNC_LOGO as S0,ZORA_LOGO as _0,isPlaywrightEnv as Sd}from"./hooks-BXO4d1DJ.js";import{Buffer as je,Buffer$1 as se,dist_exports as I0,init_dist as Jn}from"./dist-ceZDlR1V.js";import{require_bn as _d}from"./bn-D7somgUb.js";import{BigNumber as fc,concat as T0,getAddress as Id,hexZeroPad as P0,init_lib as C0,init_lib$2 as B0,init_lib$4 as D0,init_lib$5 as R0,init_lib$6 as O0,keccak256 as Oi,toUtf8Bytes as x0}from"./lib-DPFIyRke.js";import{config as It}from"./config-C4KrHqHG.js";import{ONE_MINUTE_MS as oi,ONE_SECOND_MS as xi}from"./time-D_OqcZ4M.js";import{ElementName as rt}from"./element-Wnp4RkdY.js";import{BaseError as ht,InvalidAddressError as Lt,bytesToHex as on,hexToBigInt as qe,hexToBytes as pr,hexToNumber as Kn,init_sha3 as N0,isAddress as Pt,isHex as L0,keccak_256 as hc,pad as F0,size as Td,toBytes as Ns,toHex as re,trim as rn}from"./isAddress-P2vaZgmG.js";import{InvalidChainIdError as an,InvalidLegacyVError as M0,InvalidSerializableTransactionError as U0,InvalidStorageKeySizeError as V0,createCursor as Pd,defineFormatter as Da,defineTransactionRequest as Cd,maxUint16 as z0,maxUint256 as yi}from"./chain-ghiO403o.js";import{concatHex as Mr,slice as W0}from"./slice-cfC6NcyN.js";import{FeeCapTooHighError as Ei,TipAboveFeeCapError as Bd}from"./node-C_BraYgX.js";import{abytes as ai,anumber as q0,bytesToHex as nn,concatBytes as tr,hexToBytes as Ra,init_utils as H0,isBytes as Dd,randomBytes as Rd}from"./_u64-b_viZRi_.js";import{init_sha2 as Od,sha256 as K0,sha512 as G0}from"./sha2-Jt0E41S_.js";import{init_sha256 as xd,sha256 as Uo}from"./sha256-BqbhXHGu.js";import{any as j0,array as Q,assert as $0,boolean as Mt,coerce as In,create as j,init_dist as Y0,instance as Ni,literal as xe,nullable as Y,number as I,optional as ie,record as pc,require_safe_buffer as Nd,string as G,tuple as Li,type as z,union as Et,unknown as Tn}from"./dist-CBK-d0jO.js";import{hmac as Q0,init_hmac as Z0}from"./hmac-D-QTodfL.js";var it=(function(e){function t(i){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},t(i)}function r(i,o){if(t(i)!="object"||!i)return i;var a=i[Symbol.toPrimitive];if(a!==void 0){var c=a.call(i,o||"default");if(t(c)!="object")return c;throw TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(i)}function n(i){var o=r(i,"string");return t(o)=="symbol"?o:o+""}function s(i,o,a){return(o=n(o))in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,i}return e.defineProperty=s,e})({}),J0={};Zn(J0,{default:()=>te});var st,te,X0=ve({"../../node_modules/jsbi/dist/jsbi.mjs"(){st=class b extends Array{constructor(t,r){if(super(t),this.sign=r,t>b.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded")}static BigInt(t){var r=Math.floor,n=Number.isFinite;if(typeof t=="number"){if(t===0)return b.__zero();if(b.__isOneDigitInt(t))return 0>t?b.__oneDigit(-t,!0):b.__oneDigit(t,!1);if(!n(t)||r(t)!==t)throw new RangeError("The number "+t+" cannot be converted to BigInt because it is not an integer");return b.__fromDouble(t)}if(typeof t=="string"){const s=b.__fromString(t);if(s===null)throw new SyntaxError("Cannot convert "+t+" to a BigInt");return s}if(typeof t=="boolean")return t===!0?b.__oneDigit(1,!1):b.__zero();if(typeof t=="object"){if(t.constructor===b)return t;const s=b.__toPrimitive(t);return b.BigInt(s)}throw new TypeError("Cannot convert "+t+" to a BigInt")}toDebugString(){const t=["BigInt["];for(const r of this)t.push((r&&(r>>>0).toString(16))+", ");return t.push("]"),t.join("")}toString(t=10){if(2>t||36<t)throw new RangeError("toString() radix argument must be between 2 and 36");return this.length===0?"0":(t&t-1)==0?b.__toStringBasePowerOfTwo(this,t):b.__toStringGeneric(this,t,!1)}static toNumber(t){const r=t.length;if(r===0)return 0;if(r===1){const E=t.__unsignedDigit(0);return t.sign?-E:E}const n=t.__digit(r-1),s=b.__clz30(n),i=30*r-s;if(1024<i)return t.sign?-1/0:1/0;let o=i-1,a=n,c=r-1;const u=s+3;let l=u===32?0:a<<u;l>>>=12;const d=u-12;let h=12<=u?0:a<<20+u,p=20+u;for(0<d&&0<c&&(c--,a=t.__digit(c),l|=a>>>30-d,h=a<<d+2,p=d+2);0<p&&0<c;)c--,a=t.__digit(c),h|=30<=p?a<<p-30:a>>>30-p,p-=30;const w=b.__decideRounding(t,p,c,a);if((w===1||w===0&&(1&h)==1)&&(h=h+1>>>0,h===0&&(l++,l>>>20!=0&&(l=0,o++,1023<o))))return t.sign?-1/0:1/0;const m=t.sign?-2147483648:0;return o=o+1023<<20,b.__kBitConversionInts[1]=m|o|l,b.__kBitConversionInts[0]=h,b.__kBitConversionDouble[0]}static unaryMinus(t){if(t.length===0)return t;const r=t.__copy();return r.sign=!t.sign,r}static bitwiseNot(t){return t.sign?b.__absoluteSubOne(t).__trim():b.__absoluteAddOne(t,!0)}static exponentiate(t,r){if(r.sign)throw new RangeError("Exponent must be positive");if(r.length===0)return b.__oneDigit(1,!1);if(t.length===0)return t;if(t.length===1&&t.__digit(0)===1)return t.sign&&(1&r.__digit(0))==0?b.unaryMinus(t):t;if(1<r.length)throw new RangeError("BigInt too big");let n=r.__unsignedDigit(0);if(n===1)return t;if(n>=b.__kMaxLengthBits)throw new RangeError("BigInt too big");if(t.length===1&&t.__digit(0)===2){const o=1+(0|n/30),a=t.sign&&(1&n)!=0,c=new b(o,a);c.__initializeDigits();const u=1<<n%30;return c.__setDigit(o-1,u),c}let s=null,i=t;for((1&n)!=0&&(s=t),n>>=1;n!==0;n>>=1)i=b.multiply(i,i),(1&n)!=0&&(s===null?s=i:s=b.multiply(s,i));return s}static multiply(t,r){if(t.length===0)return t;if(r.length===0)return r;let n=t.length+r.length;30<=t.__clzmsd()+r.__clzmsd()&&n--;const s=new b(n,t.sign!==r.sign);s.__initializeDigits();for(let i=0;i<t.length;i++)b.__multiplyAccumulate(r,t.__digit(i),s,i);return s.__trim()}static divide(t,r){if(r.length===0)throw new RangeError("Division by zero");if(0>b.__absoluteCompare(t,r))return b.__zero();const n=t.sign!==r.sign,s=r.__unsignedDigit(0);let i;if(r.length===1&&32767>=s){if(s===1)return n===t.sign?t:b.unaryMinus(t);i=b.__absoluteDivSmall(t,s,null)}else i=b.__absoluteDivLarge(t,r,!0,!1);return i.sign=n,i.__trim()}static remainder(t,r){if(r.length===0)throw new RangeError("Division by zero");if(0>b.__absoluteCompare(t,r))return t;const n=r.__unsignedDigit(0);if(r.length===1&&32767>=n){if(n===1)return b.__zero();const i=b.__absoluteModSmall(t,n);return i===0?b.__zero():b.__oneDigit(i,t.sign)}const s=b.__absoluteDivLarge(t,r,!1,!0);return s.sign=t.sign,s.__trim()}static add(t,r){const n=t.sign;return n===r.sign?b.__absoluteAdd(t,r,n):0<=b.__absoluteCompare(t,r)?b.__absoluteSub(t,r,n):b.__absoluteSub(r,t,!n)}static subtract(t,r){const n=t.sign;return n===r.sign?0<=b.__absoluteCompare(t,r)?b.__absoluteSub(t,r,n):b.__absoluteSub(r,t,!n):b.__absoluteAdd(t,r,n)}static leftShift(t,r){return r.length===0||t.length===0?t:r.sign?b.__rightShiftByAbsolute(t,r):b.__leftShiftByAbsolute(t,r)}static signedRightShift(t,r){return r.length===0||t.length===0?t:r.sign?b.__leftShiftByAbsolute(t,r):b.__rightShiftByAbsolute(t,r)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(t,r){return 0>b.__compareToBigInt(t,r)}static lessThanOrEqual(t,r){return 0>=b.__compareToBigInt(t,r)}static greaterThan(t,r){return 0<b.__compareToBigInt(t,r)}static greaterThanOrEqual(t,r){return 0<=b.__compareToBigInt(t,r)}static equal(t,r){if(t.sign!==r.sign||t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t.__digit(n)!==r.__digit(n))return!1;return!0}static notEqual(t,r){return!b.equal(t,r)}static bitwiseAnd(t,r){var n=Math.max;if(!t.sign&&!r.sign)return b.__absoluteAnd(t,r).__trim();if(t.sign&&r.sign){const s=n(t.length,r.length)+1;let i=b.__absoluteSubOne(t,s);const o=b.__absoluteSubOne(r);return i=b.__absoluteOr(i,o,i),b.__absoluteAddOne(i,!0,i).__trim()}return t.sign&&([t,r]=[r,t]),b.__absoluteAndNot(t,b.__absoluteSubOne(r)).__trim()}static bitwiseXor(t,r){var n=Math.max;if(!t.sign&&!r.sign)return b.__absoluteXor(t,r).__trim();if(t.sign&&r.sign){const o=n(t.length,r.length),a=b.__absoluteSubOne(t,o),c=b.__absoluteSubOne(r);return b.__absoluteXor(a,c,a).__trim()}const s=n(t.length,r.length)+1;t.sign&&([t,r]=[r,t]);let i=b.__absoluteSubOne(r,s);return i=b.__absoluteXor(i,t,i),b.__absoluteAddOne(i,!0,i).__trim()}static bitwiseOr(t,r){var n=Math.max;const s=n(t.length,r.length);if(!t.sign&&!r.sign)return b.__absoluteOr(t,r).__trim();if(t.sign&&r.sign){let o=b.__absoluteSubOne(t,s);const a=b.__absoluteSubOne(r);return o=b.__absoluteAnd(o,a,o),b.__absoluteAddOne(o,!0,o).__trim()}t.sign&&([t,r]=[r,t]);let i=b.__absoluteSubOne(r,s);return i=b.__absoluteAndNot(i,t,i),b.__absoluteAddOne(i,!0,i).__trim()}static asIntN(t,r){var n=Math.floor;if(r.length===0)return r;if(t=n(t),0>t)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(t===0)return b.__zero();if(t>=b.__kMaxLengthBits)return r;const s=0|(t+29)/30;if(r.length<s)return r;const i=r.__unsignedDigit(s-1),o=1<<(t-1)%30;if(r.length===s&&i<o)return r;if((i&o)!==o)return b.__truncateToNBits(t,r);if(!r.sign)return b.__truncateAndSubFromPowerOfTwo(t,r,!0);if((i&o-1)==0){for(let a=s-2;0<=a;a--)if(r.__digit(a)!==0)return b.__truncateAndSubFromPowerOfTwo(t,r,!1);return r.length===s&&i===o?r:b.__truncateToNBits(t,r)}return b.__truncateAndSubFromPowerOfTwo(t,r,!1)}static asUintN(t,r){var n=Math.floor;if(r.length===0)return r;if(t=n(t),0>t)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(t===0)return b.__zero();if(r.sign){if(t>b.__kMaxLengthBits)throw new RangeError("BigInt too big");return b.__truncateAndSubFromPowerOfTwo(t,r,!1)}if(t>=b.__kMaxLengthBits)return r;const s=0|(t+29)/30;if(r.length<s)return r;const i=t%30;return r.length==s&&(i===0||!(r.__digit(s-1)>>>i))?r:b.__truncateToNBits(t,r)}static ADD(t,r){if(t=b.__toPrimitive(t),r=b.__toPrimitive(r),typeof t=="string")return typeof r!="string"&&(r=r.toString()),t+r;if(typeof r=="string")return t.toString()+r;if(t=b.__toNumeric(t),r=b.__toNumeric(r),b.__isBigInt(t)&&b.__isBigInt(r))return b.add(t,r);if(typeof t=="number"&&typeof r=="number")return t+r;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(t,r){return b.__compare(t,r,0)}static LE(t,r){return b.__compare(t,r,1)}static GT(t,r){return b.__compare(t,r,2)}static GE(t,r){return b.__compare(t,r,3)}static EQ(t,r){for(;;){if(b.__isBigInt(t))return b.__isBigInt(r)?b.equal(t,r):b.EQ(r,t);if(typeof t=="number"){if(b.__isBigInt(r))return b.__equalToNumber(r,t);if(typeof r!="object")return t==r;r=b.__toPrimitive(r)}else if(typeof t=="string"){if(b.__isBigInt(r))return t=b.__fromString(t),t!==null&&b.equal(t,r);if(typeof r!="object")return t==r;r=b.__toPrimitive(r)}else if(typeof t=="boolean"){if(b.__isBigInt(r))return b.__equalToNumber(r,+t);if(typeof r!="object")return t==r;r=b.__toPrimitive(r)}else if(typeof t=="symbol"){if(b.__isBigInt(r))return!1;if(typeof r!="object")return t==r;r=b.__toPrimitive(r)}else if(typeof t=="object"){if(typeof r=="object"&&r.constructor!==b)return t==r;t=b.__toPrimitive(t)}else return t==r}}static NE(t,r){return!b.EQ(t,r)}static __zero(){return new b(0,!1)}static __oneDigit(t,r){const n=new b(1,r);return n.__setDigit(0,t),n}__copy(){const t=new b(this.length,this.sign);for(let r=0;r<this.length;r++)t[r]=this[r];return t}__trim(){let t=this.length,r=this[t-1];for(;r===0;)t--,r=this[t-1],this.pop();return t===0&&(this.sign=!1),this}__initializeDigits(){for(let t=0;t<this.length;t++)this[t]=0}static __decideRounding(t,r,n,s){if(0<r)return-1;let i;if(0>r)i=-r-1;else{if(n===0)return-1;n--,s=t.__digit(n),i=29}let o=1<<i;if((s&o)==0)return-1;if(o-=1,(s&o)!=0)return 1;for(;0<n;)if(n--,t.__digit(n)!==0)return 1;return 0}static __fromDouble(t){b.__kBitConversionDouble[0]=t;const r=2047&b.__kBitConversionInts[1]>>>20,n=r-1023,s=(0|n/30)+1,i=new b(s,0>t);let o=1048575&b.__kBitConversionInts[1]|1048576,a=b.__kBitConversionInts[0];const c=20,u=n%30;let l,d=0;if(u<20){const h=c-u;d=h+32,l=o>>>h,o=o<<32-h|a>>>h,a<<=32-h}else if(u===20)d=32,l=o,o=a,a=0;else{const h=u-c;d=32-h,l=o<<h|a>>>32-h,o=a<<h,a=0}i.__setDigit(s-1,l);for(let h=s-2;0<=h;h--)0<d?(d-=30,l=o>>>2,o=o<<30|a>>>2,a<<=30):l=0,i.__setDigit(h,l);return i.__trim()}static __isWhitespace(t){return 13>=t&&9<=t||(159>=t?t==32:131071>=t?t==160||t==5760:196607>=t?(t&=131071,10>=t||t==40||t==41||t==47||t==95||t==4096):t==65279)}static __fromString(t,r=0){let n=0;const s=t.length;let i=0;if(i===s)return b.__zero();let o=t.charCodeAt(i);for(;b.__isWhitespace(o);){if(++i===s)return b.__zero();o=t.charCodeAt(i)}if(o===43){if(++i===s)return null;o=t.charCodeAt(i),n=1}else if(o===45){if(++i===s)return null;o=t.charCodeAt(i),n=-1}if(r===0){if(r=10,o===48){if(++i===s)return b.__zero();if(o=t.charCodeAt(i),o===88||o===120){if(r=16,++i===s)return null;o=t.charCodeAt(i)}else if(o===79||o===111){if(r=8,++i===s)return null;o=t.charCodeAt(i)}else if(o===66||o===98){if(r=2,++i===s)return null;o=t.charCodeAt(i)}}}else if(r===16&&o===48){if(++i===s)return b.__zero();if(o=t.charCodeAt(i),o===88||o===120){if(++i===s)return null;o=t.charCodeAt(i)}}if(n!=0&&r!==10)return null;for(;o===48;){if(++i===s)return b.__zero();o=t.charCodeAt(i)}const a=s-i;let c=b.__kMaxBitsPerChar[r],u=b.__kBitsPerCharTableMultiplier-1;if(a>1073741824/c)return null;const l=c*a+u>>>b.__kBitsPerCharTableShift,d=new b(0|(l+29)/30,!1),h=10>r?r:10,p=10<r?r-10:0;if((r&r-1)==0){c>>=b.__kBitsPerCharTableShift;const w=[],m=[];let E=!1;do{let y=0,P=0;for(;;){let O;if(o-48>>>0<h)O=o-48;else if((32|o)-97>>>0<p)O=(32|o)-87;else{E=!0;break}if(P+=c,y=y<<c|O,++i===s){E=!0;break}if(o=t.charCodeAt(i),30<P+c)break}w.push(y),m.push(P)}while(!E);b.__fillFromParts(d,w,m)}else{d.__initializeDigits();let w=!1,m=0;do{let E=0,y=1;for(;;){let O;if(o-48>>>0<h)O=o-48;else if((32|o)-97>>>0<p)O=(32|o)-87;else{w=!0;break}const N=y*r;if(1073741823<N)break;if(y=N,E=E*r+O,m++,++i===s){w=!0;break}o=t.charCodeAt(i)}u=30*b.__kBitsPerCharTableMultiplier-1;const P=0|(c*m+u>>>b.__kBitsPerCharTableShift)/30;d.__inplaceMultiplyAdd(y,E,P)}while(!w)}if(i!==s){if(!b.__isWhitespace(o))return null;for(i++;i<s;i++)if(o=t.charCodeAt(i),!b.__isWhitespace(o))return null}return d.sign=n==-1,d.__trim()}static __fillFromParts(t,r,n){let s=0,i=0,o=0;for(let a=r.length-1;0<=a;a--){const c=r[a],u=n[a];i|=c<<o,o+=u,o===30?(t.__setDigit(s++,i),o=0,i=0):30<o&&(t.__setDigit(s++,1073741823&i),o-=30,i=c>>>u-o)}if(i!==0){if(s>=t.length)throw new Error("implementation bug");t.__setDigit(s++,i)}for(;s<t.length;s++)t.__setDigit(s,0)}static __toStringBasePowerOfTwo(t,r){const n=t.length;let s=r-1;s=(85&s>>>1)+(85&s),s=(51&s>>>2)+(51&s),s=(15&s>>>4)+(15&s);const i=s,o=r-1,a=t.__digit(n-1),c=b.__clz30(a);let u=0|(30*n-c+i-1)/i;if(t.sign&&u++,268435456<u)throw new Error("string too long");const l=Array(u);let d=u-1,h=0,p=0;for(let m=0;m<n-1;m++){const E=t.__digit(m),y=(h|E<<p)&o;l[d--]=b.__kConversionChars[y];const P=i-p;for(h=E>>>P,p=30-P;p>=i;)l[d--]=b.__kConversionChars[h&o],h>>>=i,p-=i}const w=(h|a<<p)&o;for(l[d--]=b.__kConversionChars[w],h=a>>>i-p;h!==0;)l[d--]=b.__kConversionChars[h&o],h>>>=i;if(t.sign&&(l[d--]="-"),d!=-1)throw new Error("implementation bug");return l.join("")}static __toStringGeneric(t,r,n){const s=t.length;if(s===0)return"";if(s===1){let m=t.__unsignedDigit(0).toString(r);return n===!1&&t.sign&&(m="-"+m),m}const i=30*s-b.__clz30(t.__digit(s-1)),o=b.__kMaxBitsPerChar[r],a=o-1;let c=i*b.__kBitsPerCharTableMultiplier;c+=a-1,c=0|c/a;const u=c+1>>1,l=b.exponentiate(b.__oneDigit(r,!1),b.__oneDigit(u,!1));let d,h;const p=l.__unsignedDigit(0);if(l.length===1&&32767>=p){d=new b(t.length,!1),d.__initializeDigits();let m=0;for(let E=2*t.length-1;0<=E;E--){const y=m<<15|t.__halfDigit(E);d.__setHalfDigit(E,0|y/p),m=0|y%p}h=m.toString(r)}else{const m=b.__absoluteDivLarge(t,l,!0,!0);d=m.quotient;const E=m.remainder.__trim();h=b.__toStringGeneric(E,r,!0)}d.__trim();let w=b.__toStringGeneric(d,r,!0);for(;h.length<u;)h="0"+h;return n===!1&&t.sign&&(w="-"+w),w+h}static __unequalSign(t){return t?-1:1}static __absoluteGreater(t){return t?-1:1}static __absoluteLess(t){return t?1:-1}static __compareToBigInt(t,r){const n=t.sign;if(n!==r.sign)return b.__unequalSign(n);const s=b.__absoluteCompare(t,r);return 0<s?b.__absoluteGreater(n):0>s?b.__absoluteLess(n):0}static __compareToNumber(t,r){if(b.__isOneDigitInt(r)){const n=t.sign,s=0>r;if(n!==s)return b.__unequalSign(n);if(t.length===0){if(s)throw new Error("implementation bug");return r===0?0:-1}if(1<t.length)return b.__absoluteGreater(n);const i=Math.abs(r),o=t.__unsignedDigit(0);return o>i?b.__absoluteGreater(n):o<i?b.__absoluteLess(n):0}return b.__compareToDouble(t,r)}static __compareToDouble(t,r){if(r!==r)return r;if(r===1/0)return-1;if(r===-1/0)return 1;const n=t.sign;if(n!==0>r)return b.__unequalSign(n);if(r===0)throw new Error("implementation bug: should be handled elsewhere");if(t.length===0)return-1;b.__kBitConversionDouble[0]=r;const s=2047&b.__kBitConversionInts[1]>>>20;if(s==2047)throw new Error("implementation bug: handled elsewhere");const i=s-1023;if(0>i)return b.__absoluteGreater(n);const o=t.length;let a=t.__digit(o-1);const c=b.__clz30(a),u=30*o-c,l=i+1;if(u<l)return b.__absoluteLess(n);if(u>l)return b.__absoluteGreater(n);let d=1048576|1048575&b.__kBitConversionInts[1],h=b.__kBitConversionInts[0];const p=20,w=29-c;if(w!==(0|(u-1)%30))throw new Error("implementation bug");let m,E=0;if(20>w){const y=p-w;E=y+32,m=d>>>y,d=d<<32-y|h>>>y,h<<=32-y}else if(w===20)E=32,m=d,d=h,h=0;else{const y=w-p;E=32-y,m=d<<y|h>>>32-y,d=h<<y,h=0}if(a>>>=0,m>>>=0,a>m)return b.__absoluteGreater(n);if(a<m)return b.__absoluteLess(n);for(let y=o-2;0<=y;y--){0<E?(E-=30,m=d>>>2,d=d<<30|h>>>2,h<<=30):m=0;const P=t.__unsignedDigit(y);if(P>m)return b.__absoluteGreater(n);if(P<m)return b.__absoluteLess(n)}if(d!==0||h!==0){if(E===0)throw new Error("implementation bug");return b.__absoluteLess(n)}return 0}static __equalToNumber(t,r){var n=Math.abs;return b.__isOneDigitInt(r)?r===0?t.length===0:t.length===1&&t.sign===0>r&&t.__unsignedDigit(0)===n(r):b.__compareToDouble(t,r)===0}static __comparisonResultToBool(t,r){return r===0?0>t:r===1?0>=t:r===2?0<t:r===3?0<=t:void 0}static __compare(t,r,n){if(t=b.__toPrimitive(t),r=b.__toPrimitive(r),typeof t=="string"&&typeof r=="string")switch(n){case 0:return t<r;case 1:return t<=r;case 2:return t>r;case 3:return t>=r}if(b.__isBigInt(t)&&typeof r=="string")return r=b.__fromString(r),r!==null&&b.__comparisonResultToBool(b.__compareToBigInt(t,r),n);if(typeof t=="string"&&b.__isBigInt(r))return t=b.__fromString(t),t!==null&&b.__comparisonResultToBool(b.__compareToBigInt(t,r),n);if(t=b.__toNumeric(t),r=b.__toNumeric(r),b.__isBigInt(t)){if(b.__isBigInt(r))return b.__comparisonResultToBool(b.__compareToBigInt(t,r),n);if(typeof r!="number")throw new Error("implementation bug");return b.__comparisonResultToBool(b.__compareToNumber(t,r),n)}if(typeof t!="number")throw new Error("implementation bug");if(b.__isBigInt(r))return b.__comparisonResultToBool(b.__compareToNumber(r,t),2^n);if(typeof r!="number")throw new Error("implementation bug");return n===0?t<r:n===1?t<=r:n===2?t>r:n===3?t>=r:void 0}__clzmsd(){return b.__clz30(this.__digit(this.length-1))}static __absoluteAdd(t,r,n){if(t.length<r.length)return b.__absoluteAdd(r,t,n);if(t.length===0)return t;if(r.length===0)return t.sign===n?t:b.unaryMinus(t);let s=t.length;(t.__clzmsd()===0||r.length===t.length&&r.__clzmsd()===0)&&s++;const i=new b(s,n);let o=0,a=0;for(;a<r.length;a++){const c=t.__digit(a)+r.__digit(a)+o;o=c>>>30,i.__setDigit(a,1073741823&c)}for(;a<t.length;a++){const c=t.__digit(a)+o;o=c>>>30,i.__setDigit(a,1073741823&c)}return a<i.length&&i.__setDigit(a,o),i.__trim()}static __absoluteSub(t,r,n){if(t.length===0)return t;if(r.length===0)return t.sign===n?t:b.unaryMinus(t);const s=new b(t.length,n);let i=0,o=0;for(;o<r.length;o++){const a=t.__digit(o)-r.__digit(o)-i;i=1&a>>>30,s.__setDigit(o,1073741823&a)}for(;o<t.length;o++){const a=t.__digit(o)-i;i=1&a>>>30,s.__setDigit(o,1073741823&a)}return s.__trim()}static __absoluteAddOne(t,r,n=null){const s=t.length;n===null?n=new b(s,r):n.sign=r;let i=1;for(let o=0;o<s;o++){const a=t.__digit(o)+i;i=a>>>30,n.__setDigit(o,1073741823&a)}return i!=0&&n.__setDigitGrow(s,1),n}static __absoluteSubOne(t,r){const n=t.length;r=r||n;const s=new b(r,!1);let i=1;for(let o=0;o<n;o++){const a=t.__digit(o)-i;i=1&a>>>30,s.__setDigit(o,1073741823&a)}if(i!=0)throw new Error("implementation bug");for(let o=n;o<r;o++)s.__setDigit(o,0);return s}static __absoluteAnd(t,r,n=null){let s=t.length,i=r.length,o=i;if(s<i){o=s;const u=t,l=s;t=r,s=i,r=u,i=l}let a=o;n===null?n=new b(a,!1):a=n.length;let c=0;for(;c<o;c++)n.__setDigit(c,t.__digit(c)&r.__digit(c));for(;c<a;c++)n.__setDigit(c,0);return n}static __absoluteAndNot(t,r,n=null){const s=t.length,i=r.length;let o=i;s<i&&(o=s);let a=s;n===null?n=new b(a,!1):a=n.length;let c=0;for(;c<o;c++)n.__setDigit(c,t.__digit(c)&~r.__digit(c));for(;c<s;c++)n.__setDigit(c,t.__digit(c));for(;c<a;c++)n.__setDigit(c,0);return n}static __absoluteOr(t,r,n=null){let s=t.length,i=r.length,o=i;if(s<i){o=s;const u=t,l=s;t=r,s=i,r=u,i=l}let a=s;n===null?n=new b(a,!1):a=n.length;let c=0;for(;c<o;c++)n.__setDigit(c,t.__digit(c)|r.__digit(c));for(;c<s;c++)n.__setDigit(c,t.__digit(c));for(;c<a;c++)n.__setDigit(c,0);return n}static __absoluteXor(t,r,n=null){let s=t.length,i=r.length,o=i;if(s<i){o=s;const u=t,l=s;t=r,s=i,r=u,i=l}let a=s;n===null?n=new b(a,!1):a=n.length;let c=0;for(;c<o;c++)n.__setDigit(c,t.__digit(c)^r.__digit(c));for(;c<s;c++)n.__setDigit(c,t.__digit(c));for(;c<a;c++)n.__setDigit(c,0);return n}static __absoluteCompare(t,r){const n=t.length-r.length;if(n!=0)return n;let s=t.length-1;for(;0<=s&&t.__digit(s)===r.__digit(s);)s--;return 0>s?0:t.__unsignedDigit(s)>r.__unsignedDigit(s)?1:-1}static __multiplyAccumulate(t,r,n,s){if(r===0)return;const i=32767&r,o=r>>>15;let a=0,c=0;for(let u,l=0;l<t.length;l++,s++){u=n.__digit(s);const d=t.__digit(l),h=32767&d,p=d>>>15,w=b.__imul(h,i),m=b.__imul(h,o),E=b.__imul(p,i),y=b.__imul(p,o);u+=c+w+a,a=u>>>30,u&=1073741823,u+=((32767&m)<<15)+((32767&E)<<15),a+=u>>>30,c=y+(m>>>15)+(E>>>15),n.__setDigit(s,1073741823&u)}for(;a!=0||c!==0;s++){let u=n.__digit(s);u+=a+c,c=0,a=u>>>30,n.__setDigit(s,1073741823&u)}}static __internalMultiplyAdd(t,r,n,s,i){let o=n,a=0;for(let c=0;c<s;c++){const u=t.__digit(c),l=b.__imul(32767&u,r),d=b.__imul(u>>>15,r),h=l+((32767&d)<<15)+a+o;o=h>>>30,a=d>>>15,i.__setDigit(c,1073741823&h)}if(i.length>s)for(i.__setDigit(s++,o+a);s<i.length;)i.__setDigit(s++,0);else if(o+a!==0)throw new Error("implementation bug")}__inplaceMultiplyAdd(t,r,n){n>this.length&&(n=this.length);const s=32767&t,i=t>>>15;let o=0,a=r;for(let c=0;c<n;c++){const u=this.__digit(c),l=32767&u,d=u>>>15,h=b.__imul(l,s),p=b.__imul(l,i),w=b.__imul(d,s),m=b.__imul(d,i);let E=a+h+o;o=E>>>30,E&=1073741823,E+=((32767&p)<<15)+((32767&w)<<15),o+=E>>>30,a=m+(p>>>15)+(w>>>15),this.__setDigit(c,1073741823&E)}if(o!=0||a!==0)throw new Error("implementation bug")}static __absoluteDivSmall(t,r,n=null){n===null&&(n=new b(t.length,!1));let s=0;for(let i,o=2*t.length-1;0<=o;o-=2){i=(s<<15|t.__halfDigit(o))>>>0;const a=0|i/r;s=0|i%r,i=(s<<15|t.__halfDigit(o-1))>>>0;const c=0|i/r;s=0|i%r,n.__setDigit(o>>>1,a<<15|c)}return n}static __absoluteModSmall(t,r){let n=0;for(let s=2*t.length-1;0<=s;s--)n=0|((n<<15|t.__halfDigit(s))>>>0)%r;return n}static __absoluteDivLarge(t,r,n,s){const i=r.__halfDigitLength(),o=r.length,a=t.__halfDigitLength()-i;let c=null;n&&(c=new b(a+2>>>1,!1),c.__initializeDigits());const u=new b(i+2>>>1,!1);u.__initializeDigits();const l=b.__clz15(r.__halfDigit(i-1));0<l&&(r=b.__specialLeftShift(r,l,0));const d=b.__specialLeftShift(t,l,1),h=r.__halfDigit(i-1);let p=0;for(let w,m=a;0<=m;m--){w=32767;const E=d.__halfDigit(m+i);if(E!==h){const P=(E<<15|d.__halfDigit(m+i-1))>>>0;w=0|P/h;let O=0|P%h;const N=r.__halfDigit(i-2),B=d.__halfDigit(m+i-2);for(;b.__imul(w,N)>>>0>(O<<16|B)>>>0&&(w--,O+=h,!(32767<O)););}b.__internalMultiplyAdd(r,w,0,o,u);let y=d.__inplaceSub(u,m,i+1);y!==0&&(y=d.__inplaceAdd(r,m,i),d.__setHalfDigit(m+i,32767&d.__halfDigit(m+i)+y),w--),n&&(1&m?p=w<<15:c.__setDigit(m>>>1,p|w))}if(s)return d.__inplaceRightShift(l),n?{quotient:c,remainder:d}:d;if(n)return c;throw new Error("unreachable")}static __clz15(t){return b.__clz30(t)-15}__inplaceAdd(t,r,n){let s=0;for(let i=0;i<n;i++){const o=this.__halfDigit(r+i)+t.__halfDigit(i)+s;s=o>>>15,this.__setHalfDigit(r+i,32767&o)}return s}__inplaceSub(t,r,n){let s=0;if(1&r){r>>=1;let i=this.__digit(r),o=32767&i,a=0;for(;a<n-1>>>1;a++){const l=t.__digit(a),d=(i>>>15)-(32767&l)-s;s=1&d>>>15,this.__setDigit(r+a,(32767&d)<<15|32767&o),i=this.__digit(r+a+1),o=(32767&i)-(l>>>15)-s,s=1&o>>>15}const c=t.__digit(a),u=(i>>>15)-(32767&c)-s;if(s=1&u>>>15,this.__setDigit(r+a,(32767&u)<<15|32767&o),r+a+1>=this.length)throw new RangeError("out of bounds");(1&n)==0&&(i=this.__digit(r+a+1),o=(32767&i)-(c>>>15)-s,s=1&o>>>15,this.__setDigit(r+t.length,1073709056&i|32767&o))}else{r>>=1;let i=0;for(;i<t.length-1;i++){const l=this.__digit(r+i),d=t.__digit(i),h=(32767&l)-(32767&d)-s;s=1&h>>>15;const p=(l>>>15)-(d>>>15)-s;s=1&p>>>15,this.__setDigit(r+i,(32767&p)<<15|32767&h)}const o=this.__digit(r+i),a=t.__digit(i),c=(32767&o)-(32767&a)-s;s=1&c>>>15;let u=0;(1&n)==0&&(u=(o>>>15)-(a>>>15)-s,s=1&u>>>15),this.__setDigit(r+i,(32767&u)<<15|32767&c)}return s}__inplaceRightShift(t){if(t===0)return;let r=this.__digit(0)>>>t;const n=this.length-1;for(let s=0;s<n;s++){const i=this.__digit(s+1);this.__setDigit(s,1073741823&i<<30-t|r),r=i>>>t}this.__setDigit(n,r)}static __specialLeftShift(t,r,n){const s=t.length,i=new b(s+n,!1);if(r===0){for(let a=0;a<s;a++)i.__setDigit(a,t.__digit(a));return 0<n&&i.__setDigit(s,0),i}let o=0;for(let a=0;a<s;a++){const c=t.__digit(a);i.__setDigit(a,1073741823&c<<r|o),o=c>>>30-r}return 0<n&&i.__setDigit(s,o),i}static __leftShiftByAbsolute(t,r){const n=b.__toShiftAmount(r);if(0>n)throw new RangeError("BigInt too big");const s=0|n/30,i=n%30,o=t.length,a=i!==0&&t.__digit(o-1)>>>30-i!=0,c=o+s+(a?1:0),u=new b(c,t.sign);if(i===0){let l=0;for(;l<s;l++)u.__setDigit(l,0);for(;l<c;l++)u.__setDigit(l,t.__digit(l-s))}else{let l=0;for(let d=0;d<s;d++)u.__setDigit(d,0);for(let d=0;d<o;d++){const h=t.__digit(d);u.__setDigit(d+s,1073741823&h<<i|l),l=h>>>30-i}if(a)u.__setDigit(o+s,l);else if(l!==0)throw new Error("implementation bug")}return u.__trim()}static __rightShiftByAbsolute(t,r){const n=t.length,s=t.sign,i=b.__toShiftAmount(r);if(0>i)return b.__rightShiftByMaximum(s);const o=0|i/30,a=i%30;let c=n-o;if(0>=c)return b.__rightShiftByMaximum(s);let u=!1;if(s){if((t.__digit(o)&(1<<a)-1)!=0)u=!0;else for(let d=0;d<o;d++)if(t.__digit(d)!==0){u=!0;break}}u&&a===0&&~t.__digit(n-1)==0&&c++;let l=new b(c,s);if(a===0){l.__setDigit(c-1,0);for(let d=o;d<n;d++)l.__setDigit(d-o,t.__digit(d))}else{let d=t.__digit(o)>>>a;const h=n-o-1;for(let p=0;p<h;p++){const w=t.__digit(p+o+1);l.__setDigit(p,1073741823&w<<30-a|d),d=w>>>a}l.__setDigit(h,d)}return u&&(l=b.__absoluteAddOne(l,!0,l)),l.__trim()}static __rightShiftByMaximum(t){return t?b.__oneDigit(1,!0):b.__zero()}static __toShiftAmount(t){if(1<t.length)return-1;const r=t.__unsignedDigit(0);return r>b.__kMaxLengthBits?-1:r}static __toPrimitive(t,r="default"){if(typeof t!="object"||t.constructor===b)return t;if(typeof Symbol<"u"&&typeof Symbol.toPrimitive=="symbol"){const i=t[Symbol.toPrimitive];if(i){const o=i(r);if(typeof o!="object")return o;throw new TypeError("Cannot convert object to primitive value")}}const n=t.valueOf;if(n){const i=n.call(t);if(typeof i!="object")return i}const s=t.toString;if(s){const i=s.call(t);if(typeof i!="object")return i}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(t){return b.__isBigInt(t)?t:+t}static __isBigInt(t){return typeof t=="object"&&t!==null&&t.constructor===b}static __truncateToNBits(t,r){const n=0|(t+29)/30,s=new b(n,r.sign),i=n-1;for(let a=0;a<i;a++)s.__setDigit(a,r.__digit(a));let o=r.__digit(i);if(t%30!=0){const a=32-t%30;o=o<<a>>>a}return s.__setDigit(i,o),s.__trim()}static __truncateAndSubFromPowerOfTwo(t,r,n){var s=Math.min;const i=0|(t+29)/30,o=new b(i,n);let a=0;const c=i-1;let u=0;for(const p=s(c,r.length);a<p;a++){const w=0-r.__digit(a)-u;u=1&w>>>30,o.__setDigit(a,1073741823&w)}for(;a<c;a++)o.__setDigit(a,0|1073741823&-u);let l=c<r.length?r.__digit(c):0;const d=t%30;let h;if(d==0)h=0-l-u,h&=1073741823;else{const p=32-d;l=l<<p>>>p;const w=1<<32-p;h=w-l-u,h&=w-1}return o.__setDigit(c,h),o.__trim()}__digit(t){return this[t]}__unsignedDigit(t){return this[t]>>>0}__setDigit(t,r){this[t]=0|r}__setDigitGrow(t,r){this[t]=0|r}__halfDigitLength(){const t=this.length;return 32767>=this.__unsignedDigit(t-1)?2*t-1:2*t}__halfDigit(t){return 32767&this[t>>>1]>>>15*(1&t)}__setHalfDigit(t,r){const n=t>>>1,s=this.__digit(n),i=1&t?32767&s|r<<15:1073709056&s|32767&r;this.__setDigit(n,i)}static __digitPow(t,r){let n=1;for(;0<r;)1&r&&(n*=t),r>>>=1,t*=t;return n}static __isOneDigitInt(t){return(1073741823&t)===t}},st.__kMaxLength=33554432,st.__kMaxLengthBits=st.__kMaxLength<<5,st.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],st.__kBitsPerCharTableShift=5,st.__kBitsPerCharTableMultiplier=1<<st.__kBitsPerCharTableShift,st.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],st.__kBitConversionBuffer=new ArrayBuffer(8),st.__kBitConversionDouble=new Float64Array(st.__kBitConversionBuffer),st.__kBitConversionInts=new Int32Array(st.__kBitConversionBuffer),st.__clz30=Math.clz32?function(e){return Math.clz32(e)-2}:function(e){return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},st.__imul=Math.imul||function(e,t){return 0|e*t},te=st}});function Ve(e,t){if(!e){if(Ld)throw new Error(Ls);var r=typeof t=="function"?t():t,n=r?"".concat(Ls,": ").concat(r):Ls;throw new Error(n)}}var Ld,Ls,eg=ve({"../../node_modules/@uniswap/sdk-core/node_modules/tiny-invariant/dist/esm/tiny-invariant.js"(){Ld=!0,Ls="Invariant failed"}});function gc(e,t){var r,n,s,i,o,a,c,u,l=e.constructor,d=l.precision;if(!e.s||!t.s)return t.s||(t=new l(e)),Be?Te(t,d):t;if(c=e.d,u=t.d,o=e.e,s=t.e,c=c.slice(),i=o-s,i){for(i<0?(n=c,i=-i,a=u.length):(n=u,s=o,a=c.length),o=Math.ceil(d/Ce),a=o>a?o+1:a+1,i>a&&(i=a,n.length=1),n.reverse();i--;)n.push(0);n.reverse()}for(a=c.length,i=u.length,a-i<0&&(i=a,n=u,u=c,c=n),r=0;i;)r=(c[--i]=c[i]+u[i]+r)/$e|0,c[i]%=$e;for(r&&(c.unshift(r),++s),a=c.length;c[--a]==0;)c.pop();return t.d=c,t.e=s,Be?Te(t,d):t}function Ut(e,t,r){if(e!==~~e||e<t||e>r)throw Error(gr+e)}function jt(e){var t,r,n,s=e.length-1,i="",o=e[0];if(s>0){for(i+=o,t=1;t<s;t++)n=e[t]+"",r=Ce-n.length,r&&(i+=ar(r)),i+=n;o=e[t],n=o+"",r=Ce-n.length,r&&(i+=ar(r))}else if(o===0)return"0";for(;o%10===0;)o/=10;return i+o}function mc(e,t){var r,n,s,i,o,a,c=0,u=0,l=e.constructor,d=l.precision;if(We(e)>16)throw Error(wi+We(e));if(!e.s)return new l(_t);for(t==null?(Be=!1,a=d):a=t,o=new l(.03125);e.abs().gte(.1);)e=e.times(o),u+=5;for(n=Math.log(cr(2,u))/Math.LN10*2+5|0,a+=n,r=s=i=new l(_t),l.precision=a;;){if(s=Te(s.times(e),a),r=r.times(++c),o=i.plus(Gt(s,r,a)),jt(o.d).slice(0,a)===jt(i.d).slice(0,a)){for(;u--;)i=Te(i.times(i),a);return l.precision=d,t==null?(Be=!0,Te(i,d)):i}i=o}}function We(e){for(var t=e.e*Ce,r=e.d[0];r>=10;r/=10)t++;return t}function Fi(e,t,r){if(t>e.LN10.sd())throw Be=!0,r&&(e.precision=r),Error(St+"LN10 precision limit exceeded");return Te(new e(e.LN10),t)}function ar(e){for(var t="";e--;)t+="0";return t}function Pn(e,t){var r,n,s,i,o,a,c,u,l,d=1,h=10,p=e,w=p.d,m=p.constructor,E=m.precision;if(p.s<1)throw Error(St+(p.s?"NaN":"-Infinity"));if(p.eq(_t))return new m(0);if(t==null?(Be=!1,u=E):u=t,p.eq(10))return t==null&&(Be=!0),Fi(m,u);if(u+=h,m.precision=u,r=jt(w),n=r.charAt(0),i=We(p),Math.abs(i)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)p=p.times(e),r=jt(p.d),n=r.charAt(0),d++;i=We(p),n>1?(p=new m("0."+r),i++):p=new m(n+"."+r.slice(1))}else return c=Fi(m,u+2,E).times(i+""),p=Pn(new m(n+"."+r.slice(1)),u-h).plus(c),m.precision=E,t==null?(Be=!0,Te(p,E)):p;for(a=o=p=Gt(p.minus(_t),p.plus(_t),u),l=Te(p.times(p),u),s=3;;){if(o=Te(o.times(l),u),c=a.plus(Gt(o,new m(s),u)),jt(c.d).slice(0,u)===jt(a.d).slice(0,u))return a=a.times(2),i!==0&&(a=a.plus(Fi(m,u+2,E).times(i+""))),a=Gt(a,new m(d),u),m.precision=E,t==null?(Be=!0,Te(a,E)):a;a=c,s+=2}}function bc(e,t){var r,n,s;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(s=t.length;t.charCodeAt(s-1)===48;)--s;if(t=t.slice(n,s),t){if(s-=n,r=r-n-1,e.e=Rr(r/Ce),e.d=[],n=(r+1)%Ce,r<0&&(n+=Ce),n<s){for(n&&e.d.push(+t.slice(0,n)),s-=Ce;n<s;)e.d.push(+t.slice(n,n+=Ce));t=t.slice(n),n=Ce-t.length}else n-=s;for(;n--;)t+="0";if(e.d.push(+t),Be&&(e.e>Gn||e.e<-Gn))throw Error(wi+r)}else e.s=0,e.e=0,e.d=[0];return e}function Te(e,t,r){var n,s,i,o,a,c,u,l,d=e.d;for(o=1,i=d[0];i>=10;i/=10)o++;if(n=t-o,n<0)n+=Ce,s=t,u=d[l=0];else{if(l=Math.ceil((n+1)/Ce),i=d.length,l>=i)return e;for(u=i=d[l],o=1;i>=10;i/=10)o++;n%=Ce,s=n-Ce+o}if(r!==void 0&&(i=cr(10,o-s-1),a=u/i%10|0,c=t<0||d[l+1]!==void 0||u%i,c=r<4?(a||c)&&(r==0||r==(e.s<0?3:2)):a>5||a==5&&(r==4||c||r==6&&(n>0?s>0?u/cr(10,o-s):0:d[l-1])%10&1||r==(e.s<0?8:7))),t<1||!d[0])return c?(i=We(e),d.length=1,t=t-i-1,d[0]=cr(10,(Ce-t%Ce)%Ce),e.e=Rr(-t/Ce)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(n==0?(d.length=l,i=1,l--):(d.length=l+1,i=cr(10,Ce-n),d[l]=s>0?(u/cr(10,o-s)%cr(10,s)|0)*i:0),c)for(;;)if(l==0){(d[0]+=i)==$e&&(d[0]=1,++e.e);break}else{if(d[l]+=i,d[l]!=$e)break;d[l--]=0,i=1}for(n=d.length;d[--n]===0;)d.pop();if(Be&&(e.e>Gn||e.e<-Gn))throw Error(wi+We(e));return e}function yc(e,t){var r,n,s,i,o,a,c,u,l,d,h=e.constructor,p=h.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new h(e),Be?Te(t,p):t;if(c=e.d,d=t.d,n=t.e,u=e.e,c=c.slice(),o=u-n,o){for(l=o<0,l?(r=c,o=-o,a=d.length):(r=d,n=u,a=c.length),s=Math.max(Math.ceil(p/Ce),a)+2,o>s&&(o=s,r.length=1),r.reverse(),s=o;s--;)r.push(0);r.reverse()}else{for(s=c.length,a=d.length,l=s<a,l&&(a=s),s=0;s<a;s++)if(c[s]!=d[s]){l=c[s]<d[s];break}o=0}for(l&&(r=c,c=d,d=r,t.s=-t.s),a=c.length,s=d.length-a;s>0;--s)c[a++]=0;for(s=d.length;s>o;){if(c[--s]<d[s]){for(i=s;i&&c[--i]===0;)c[i]=$e-1;--c[i],c[s]+=$e}c[s]-=d[s]}for(;c[--a]===0;)c.pop();for(;c[0]===0;c.shift())--n;return c[0]?(t.d=c,t.e=n,Be?Te(t,p):t):new h(0)}function Er(e,t,r){var n,s=We(e),i=jt(e.d),o=i.length;return t?(r&&(n=r-o)>0?i=i.charAt(0)+"."+i.slice(1)+ar(n):o>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(s<0?"e":"e+")+s):s<0?(i="0."+ar(-s-1)+i,r&&(n=r-o)>0&&(i+=ar(n))):s>=o?(i+=ar(s+1-o),r&&(n=r-s-1)>0&&(i=i+"."+ar(n))):((n=s+1)<o&&(i=i.slice(0,n)+"."+i.slice(n)),r&&(n=r-o)>0&&(s+1===o&&(i+="."),i+=ar(n))),e.s<0?"-"+i:i}function Ec(e,t){if(e.length>t)return e.length=t,!0}function Fd(e){var t,r,n;function s(i){var o=this;if(!(o instanceof s))return new s(i);if(o.constructor=s,i instanceof s){o.s=i.s,o.e=i.e,o.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(gr+i);if(i>0)o.s=1;else if(i<0)i=-i,o.s=-1;else{o.s=0,o.e=0,o.d=[0];return}if(i===~~i&&i<1e7){o.e=0,o.d=[i];return}return bc(o,i.toString())}else if(typeof i!="string")throw Error(gr+i);if(i.charCodeAt(0)===45?(i=i.slice(1),o.s=-1):o.s=1,Md.test(i))bc(o,i);else throw Error(gr+i)}if(s.prototype=J,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.clone=Fd,s.config=s.set=tg,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return s.config(e),s}function tg(e){if(!e||typeof e!="object")throw Error(St+"Object expected");var t,r,n,s=["precision",1,Ar,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<s.length;t+=3)if((n=e[r=s[t]])!==void 0)if(Rr(n)===n&&n>=s[t+1]&&n<=s[t+2])this[r]=n;else throw Error(gr+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(gr+r+": "+n);return this}var Ar,wc,Fs,Be,St,gr,wi,Rr,cr,Md,_t,$e,Ce,Mi,Gn,J,Gt,Fs,Ud,rg=ve({"../../node_modules/decimal.js-light/decimal.mjs"(){Ar=1e9,wc={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Be=!0,St="[DecimalError] ",gr=St+"Invalid argument: ",wi=St+"Exponent out of range: ",Rr=Math.floor,cr=Math.pow,Md=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,$e=1e7,Ce=7,Mi=9007199254740991,Gn=Rr(Mi/Ce),J={},J.absoluteValue=J.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e},J.comparedTo=J.cmp=function(e){var t,r,n,s,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(n=i.d.length,s=e.d.length,t=0,r=n<s?n:s;t<r;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return n===s?0:n>s^i.s<0?1:-1},J.decimalPlaces=J.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*Ce;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r},J.dividedBy=J.div=function(e){return Gt(this,new this.constructor(e))},J.dividedToIntegerBy=J.idiv=function(e){var t=this,r=t.constructor;return Te(Gt(t,new r(e),0,1),r.precision)},J.equals=J.eq=function(e){return!this.cmp(e)},J.exponent=function(){return We(this)},J.greaterThan=J.gt=function(e){return this.cmp(e)>0},J.greaterThanOrEqualTo=J.gte=function(e){return this.cmp(e)>=0},J.isInteger=J.isint=function(){return this.e>this.d.length-2},J.isNegative=J.isneg=function(){return this.s<0},J.isPositive=J.ispos=function(){return this.s>0},J.isZero=function(){return this.s===0},J.lessThan=J.lt=function(e){return this.cmp(e)<0},J.lessThanOrEqualTo=J.lte=function(e){return this.cmp(e)<1},J.logarithm=J.log=function(e){var t,r=this,n=r.constructor,s=n.precision,i=s+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(_t))throw Error(St+"NaN");if(r.s<1)throw Error(St+(r.s?"NaN":"-Infinity"));return r.eq(_t)?new n(0):(Be=!1,t=Gt(Pn(r,i),Pn(e,i),i),Be=!0,Te(t,s))},J.minus=J.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?yc(t,e):gc(t,(e.s=-e.s,e))},J.modulo=J.mod=function(e){var t,r=this,n=r.constructor,s=n.precision;if(e=new n(e),!e.s)throw Error(St+"NaN");return r.s?(Be=!1,t=Gt(r,e,0,1).times(e),Be=!0,r.minus(t)):Te(new n(r),s)},J.naturalExponential=J.exp=function(){return mc(this)},J.naturalLogarithm=J.ln=function(){return Pn(this)},J.negated=J.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e},J.plus=J.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?gc(t,e):yc(t,(e.s=-e.s,e))},J.precision=J.sd=function(e){var t,r,n,s=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(gr+e);if(t=We(s)+1,n=s.d.length-1,r=n*Ce+1,n=s.d[n],n){for(;n%10==0;n/=10)r--;for(n=s.d[0];n>=10;n/=10)r++}return e&&t>r?t:r},J.squareRoot=J.sqrt=function(){var e,t,r,n,s,i,o,a=this,c=a.constructor;if(a.s<1){if(!a.s)return new c(0);throw Error(St+"NaN")}for(e=We(a),Be=!1,s=Math.sqrt(+a),s==0||s==1/0?(t=jt(a.d),(t.length+e)%2==0&&(t+="0"),s=Math.sqrt(t),e=Rr((e+1)/2)-(e<0||e%2),s==1/0?t="5e"+e:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new c(t)):n=new c(s.toString()),r=c.precision,s=o=r+3;;)if(i=n,n=i.plus(Gt(a,i,o+2)).times(.5),jt(i.d).slice(0,o)===(t=jt(n.d)).slice(0,o)){if(t=t.slice(o-3,o+1),s==o&&t=="4999"){if(Te(i,r+1,0),i.times(i).eq(a)){n=i;break}}else if(t!="9999")break;o+=4}return Be=!0,Te(n,r)},J.times=J.mul=function(e){var t,r,n,s,i,o,a,c,u,l=this,d=l.constructor,h=l.d,p=(e=new d(e)).d;if(!l.s||!e.s)return new d(0);for(e.s*=l.s,r=l.e+e.e,c=h.length,u=p.length,c<u&&(i=h,h=p,p=i,o=c,c=u,u=o),i=[],o=c+u,n=o;n--;)i.push(0);for(n=u;--n>=0;){for(t=0,s=c+n;s>n;)a=i[s]+p[n]*h[s-n-1]+t,i[s--]=a%$e|0,t=a/$e|0;i[s]=(i[s]+t)%$e|0}for(;!i[--o];)i.pop();return t?++r:i.shift(),e.d=i,e.e=r,Be?Te(e,d.precision):e},J.toDecimalPlaces=J.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(Ut(e,0,Ar),t===void 0?t=n.rounding:Ut(t,0,8),Te(r,e+We(r)+1,t))},J.toExponential=function(e,t){var r,n=this,s=n.constructor;return e===void 0?r=Er(n,!0):(Ut(e,0,Ar),t===void 0?t=s.rounding:Ut(t,0,8),n=Te(new s(n),e+1,t),r=Er(n,!0,e+1)),r},J.toFixed=function(e,t){var r,n,s=this,i=s.constructor;return e===void 0?Er(s):(Ut(e,0,Ar),t===void 0?t=i.rounding:Ut(t,0,8),n=Te(new i(s),e+We(s)+1,t),r=Er(n.abs(),!1,e+We(n)+1),s.isneg()&&!s.isZero()?"-"+r:r)},J.toInteger=J.toint=function(){var e=this,t=e.constructor;return Te(new t(e),We(e)+1,t.rounding)},J.toNumber=function(){return+this},J.toPower=J.pow=function(e){var t,r,n,s,i,o,a=this,c=a.constructor,u=12,l=+(e=new c(e));if(!e.s)return new c(_t);if(a=new c(a),!a.s){if(e.s<1)throw Error(St+"Infinity");return a}if(a.eq(_t))return a;if(n=c.precision,e.eq(_t))return Te(a,n);if(t=e.e,r=e.d.length-1,o=t>=r,i=a.s,o){if((r=l<0?-l:l)<=Mi){for(s=new c(_t),t=Math.ceil(n/Ce+4),Be=!1;r%2&&(s=s.times(a),Ec(s.d,t)),r=Rr(r/2),r!==0;)a=a.times(a),Ec(a.d,t);return Be=!0,e.s<0?new c(_t).div(s):Te(s,n)}}else if(i<0)throw Error(St+"NaN");return i=i<0&&e.d[Math.max(t,r)]&1?-1:1,a.s=1,Be=!1,s=e.times(Pn(a,n+u)),Be=!0,s=mc(s),s.s=i,s},J.toPrecision=function(e,t){var r,n,s=this,i=s.constructor;return e===void 0?(r=We(s),n=Er(s,r<=i.toExpNeg||r>=i.toExpPos)):(Ut(e,1,Ar),t===void 0?t=i.rounding:Ut(t,0,8),s=Te(new i(s),e,t),r=We(s),n=Er(s,e<=r||r<=i.toExpNeg,e)),n},J.toSignificantDigits=J.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(Ut(e,1,Ar),t===void 0?t=n.rounding:Ut(t,0,8)),Te(new n(r),e,t)},J.toString=J.valueOf=J.val=J.toJSON=J[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=We(e),r=e.constructor;return Er(e,t<=r.toExpNeg||t>=r.toExpPos)},Gt=(function(){function e(n,s){var i,o=0,a=n.length;for(n=n.slice();a--;)i=n[a]*s+o,n[a]=i%$e|0,o=i/$e|0;return o&&n.unshift(o),n}function t(n,s,i,o){var a,c;if(i!=o)c=i>o?1:-1;else for(a=c=0;a<i;a++)if(n[a]!=s[a]){c=n[a]>s[a]?1:-1;break}return c}function r(n,s,i){for(var o=0;i--;)n[i]-=o,o=n[i]<s[i]?1:0,n[i]=o*$e+n[i]-s[i];for(;!n[0]&&n.length>1;)n.shift()}return function(n,s,i,o){var a,c,u,l,d,h,p,w,m,E,y,P,O,N,B,U,H,q,C=n.constructor,A=n.s==s.s?1:-1,S=n.d,_=s.d;if(!n.s)return new C(n);if(!s.s)throw Error(St+"Division by zero");for(c=n.e-s.e,H=_.length,B=S.length,p=new C(A),w=p.d=[],u=0;_[u]==(S[u]||0);)++u;if(_[u]>(S[u]||0)&&--c,i==null?P=i=C.precision:o?P=i+(We(n)-We(s))+1:P=i,P<0)return new C(0);if(P=P/Ce+2|0,u=0,H==1)for(l=0,_=_[0],P++;(u<B||l)&&P--;u++)O=l*$e+(S[u]||0),w[u]=O/_|0,l=O%_|0;else{for(l=$e/(_[0]+1)|0,l>1&&(_=e(_,l),S=e(S,l),H=_.length,B=S.length),N=H,m=S.slice(0,H),E=m.length;E<H;)m[E++]=0;q=_.slice(),q.unshift(0),U=_[0],_[1]>=$e/2&&++U;do l=0,a=t(_,m,H,E),a<0?(y=m[0],H!=E&&(y=y*$e+(m[1]||0)),l=y/U|0,l>1?(l>=$e&&(l=$e-1),d=e(_,l),h=d.length,E=m.length,a=t(d,m,h,E),a==1&&(l--,r(d,H<h?q:_,h))):(l==0&&(a=l=1),d=_.slice()),h=d.length,h<E&&d.unshift(0),r(m,d,E),a==-1&&(E=m.length,a=t(_,m,H,E),a<1&&(l++,r(m,H<E?q:_,E))),E=m.length):a===0&&(l++,m=[0]),w[u++]=l,a&&m[0]?m[E++]=S[N]||0:(m=[S[N]],E=1);while((N++<B||m[0]!==void 0)&&P--)}return w[0]||w.shift(),p.e=c,Te(p,o?i+We(p)+1:i)}})(),Fs=Fd(wc),_t=new Fs(1),Ud=Fs}});function Vd(){function e(t){var r=this;if(!(r instanceof e))return t===lr?Vd():new e(t);t instanceof e?(r.s=t.s,r.e=t.e,r.c=t.c.slice()):ng(r,t),r.constructor=e}return e.prototype=Pe,e.DP=zd,e.RM=Wd,e.NE=qd,e.PE=Hd,e.version="5.2.2",e}function ng(e,t){var r,n,s;if(t===0&&1/t<0)t="-0";else if(!Kd.test(t+=""))throw Error(Qr+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),s=t.length,n=0;n<s&&t.charAt(n)=="0";)++n;if(n==s)e.c=[e.e=0];else{for(;s>0&&t.charAt(--s)=="0";);for(e.e=r-n-1,e.c=[],r=0;n<=s;)e.c[r++]=+t.charAt(n++)}return e}function Ms(e,t,r,n){var s=e.c,i=e.e+t+1;if(i<s.length){if(r===1)n=s[i]>=5;else if(r===2)n=s[i]>5||s[i]==5&&(n||i<0||s[i+1]!==lr||s[i-1]&1);else if(r===3)n=n||!!s[0];else if(n=!1,r!==0)throw Error(Vo);if(i<1)s.length=1,n?(e.e=-t,s[0]=1):s[0]=e.e=0;else{if(s.length=i--,n)for(;++s[i]>9;)s[i]=0,i--||(++e.e,s.unshift(1));for(i=s.length;!s[--i];)s.pop()}}else if(r<0||r>3||r!==~~r)throw Error(Vo);return e}function hn(e,t,r,n){var s,i,o=e.constructor,a=!e.c[0];if(r!==lr){if(r!==~~r||r<(t==3)||r>Cn)throw Error(t==3?Qr+"precision":Us);for(e=new o(e),r=n-e.e,e.c.length>++n&&Ms(e,r,o.RM),t==2&&(n=e.e+r+1);e.c.length<n;)e.c.push(0)}if(s=e.e,i=e.c.join(""),r=i.length,t!=2&&(t==1||t==3&&n<=s||s<=o.NE||s>=o.PE))i=i.charAt(0)+(r>1?"."+i.slice(1):"")+(s<0?"e":"e+")+s;else if(s<0){for(;++s;)i="0"+i;i="0."+i}else if(s>0)if(++s>r)for(s-=r;s--;)i+="0";else s<r&&(i=i.slice(0,s)+"."+i.slice(s));else r>1&&(i=i.charAt(0)+"."+i.slice(1));return e.s<0&&(!a||t==4)?"-"+i:i}var zd,Wd,Cn,Ui,qd,Hd,us,Qr,Us,Vo,Vi,Pe,lr,Kd,vc,zo,sg=ve({"../../node_modules/big.js/big.mjs"(){zd=20,Wd=1,Cn=1e6,Ui=1e6,qd=-7,Hd=21,us="[big.js] ",Qr=us+"Invalid ",Us=Qr+"decimal places",Vo=Qr+"rounding mode",Vi=us+"Division by zero",Pe={},lr=void 0,Kd=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Pe.abs=function(){var e=new this.constructor(this);return e.s=1,e},Pe.cmp=function(e){var t,r=this,n=r.c,s=(e=new r.constructor(e)).c,i=r.s,o=e.s,a=r.e,c=e.e;if(!n[0]||!s[0])return n[0]?i:s[0]?-o:0;if(i!=o)return i;if(t=i<0,a!=c)return a>c^t?1:-1;for(o=(a=n.length)<(c=s.length)?a:c,i=-1;++i<o;)if(n[i]!=s[i])return n[i]>s[i]^t?1:-1;return a==c?0:a>c^t?1:-1},Pe.div=function(e){var t=this,r=t.constructor,n=t.c,s=(e=new r(e)).c,i=t.s==e.s?1:-1,o=r.DP;if(o!==~~o||o<0||o>Cn)throw Error(Us);if(!s[0])throw Error(Vi);if(!n[0])return new r(i*0);var a,c,u,l,d,h=s.slice(),p=a=s.length,w=n.length,m=n.slice(0,a),E=m.length,y=e,P=y.c=[],O=0,N=o+(y.e=t.e-e.e)+1;for(y.s=i,i=N<0?0:N,h.unshift(0);E++<a;)m.push(0);do{for(u=0;u<10;u++){if(a!=(E=m.length))l=a>E?1:-1;else for(d=-1,l=0;++d<a;)if(s[d]!=m[d]){l=s[d]>m[d]?1:-1;break}if(l<0){for(c=E==a?s:h;E;){if(m[--E]<c[E]){for(d=E;d&&!m[--d];)m[d]=9;--m[d],m[E]+=10}m[E]-=c[E]}for(;!m[0];)m.shift()}else break}P[O++]=l?u:++u,m[0]&&l?m[E]=n[p]||0:m=[n[p]]}while((p++<w||m[0]!==lr)&&i--);return!P[0]&&O!=1&&(P.shift(),y.e--),O>N&&Ms(y,o,r.RM,m[0]!==lr),y},Pe.eq=function(e){return!this.cmp(e)},Pe.gt=function(e){return this.cmp(e)>0},Pe.gte=function(e){return this.cmp(e)>-1},Pe.lt=function(e){return this.cmp(e)<0},Pe.lte=function(e){return this.cmp(e)<1},Pe.minus=Pe.sub=function(e){var t,r,n,s,i=this,o=i.constructor,a=i.s,c=(e=new o(e)).s;if(a!=c)return e.s=-c,i.plus(e);var u=i.c.slice(),l=i.e,d=e.c,h=e.e;if(!u[0]||!d[0])return d[0]?(e.s=-c,e):new o(u[0]?i:0);if(a=l-h){for((s=a<0)?(a=-a,n=u):(h=l,n=d),n.reverse(),c=a;c--;)n.push(0);n.reverse()}else for(r=((s=u.length<d.length)?u:d).length,a=c=0;c<r;c++)if(u[c]!=d[c]){s=u[c]<d[c];break}if(s&&(n=u,u=d,d=n,e.s=-e.s),(c=(r=d.length)-(t=u.length))>0)for(;c--;)u[t++]=0;for(c=t;r>a;){if(u[--r]<d[r]){for(t=r;t&&!u[--t];)u[t]=9;--u[t],u[r]+=10}u[r]-=d[r]}for(;u[--c]===0;)u.pop();for(;u[0]===0;)u.shift(),--h;return u[0]||(e.s=1,u=[h=0]),e.c=u,e.e=h,e},Pe.mod=function(e){var t,r=this,n=r.constructor,s=r.s,i=(e=new n(e)).s;if(!e.c[0])throw Error(Vi);return r.s=e.s=1,t=e.cmp(r)==1,r.s=s,e.s=i,t?new n(r):(s=n.DP,i=n.RM,n.DP=n.RM=0,r=r.div(e),n.DP=s,n.RM=i,this.minus(r.times(e)))},Pe.plus=Pe.add=function(e){var t,r=this,n=r.constructor,s=r.s,i=(e=new n(e)).s;if(s!=i)return e.s=-i,r.minus(e);var o=r.e,a=r.c,c=e.e,u=e.c;if(!a[0]||!u[0])return u[0]?e:new n(a[0]?r:s*0);if(a=a.slice(),s=o-c){for(s>0?(c=o,t=u):(s=-s,t=a),t.reverse();s--;)t.push(0);t.reverse()}for(a.length-u.length<0&&(t=u,u=a,a=t),s=u.length,i=0;s;a[s]%=10)i=(a[--s]=a[s]+u[s]+i)/10|0;for(i&&(a.unshift(i),++c),s=a.length;a[--s]===0;)a.pop();return e.c=a,e.e=c,e},Pe.pow=function(e){var t=this,r=new t.constructor(1),n=r,s=e<0;if(e!==~~e||e<-Ui||e>Ui)throw Error(Qr+"exponent");for(s&&(e=-e);e&1&&(n=n.times(t)),e>>=1,!!e;)t=t.times(t);return s?r.div(n):n},Pe.round=function(e,t){var r=this.constructor;if(e===lr)e=0;else if(e!==~~e||e<-Cn||e>Cn)throw Error(Us);return Ms(new r(this),e,t===lr?r.RM:t)},Pe.sqrt=function(){var e,t,r,n=this,s=n.constructor,i=n.s,o=n.e,a=new s(.5);if(!n.c[0])return new s(n);if(i<0)throw Error(us+"No square root");i=Math.sqrt(n+""),i===0||i===1/0?(t=n.c.join(""),t.length+o&1||(t+="0"),i=Math.sqrt(t),o=((o+1)/2|0)-(o<0||o&1),e=new s((i==1/0?"1e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+o)):e=new s(i),o=e.e+(s.DP+=4);do r=e,e=a.times(r.plus(n.div(r)));while(r.c.slice(0,o).join("")!==e.c.slice(0,o).join(""));return Ms(e,s.DP-=4,s.RM)},Pe.times=Pe.mul=function(e){var t,r=this,n=r.constructor,s=r.c,i=(e=new n(e)).c,o=s.length,a=i.length,c=r.e,u=e.e;if(e.s=r.s==e.s?1:-1,!s[0]||!i[0])return new n(e.s*0);for(e.e=c+u,o<a&&(t=s,s=i,i=t,u=o,o=a,a=u),t=new Array(u=o+a);u--;)t[u]=0;for(c=a;c--;){for(a=0,u=o+c;u>c;)a=t[u]+i[c]*s[u-c-1]+a,t[u--]=a%10,a=a/10|0;t[u]=(t[u]+a)%10}for(a?++e.e:t.shift(),c=t.length;!t[--c];)t.pop();return e.c=t,e},Pe.toExponential=function(e){return hn(this,1,e,e)},Pe.toFixed=function(e){return hn(this,2,e,this.e+e)},Pe.toPrecision=function(e){return hn(this,3,e,e-1)},Pe.toString=function(){return hn(this)},Pe.valueOf=Pe.toJSON=function(){return hn(this,4)},vc=Vd(),zo=vc}}),ig=gt({"../../node_modules/toformat/toFormat.js"(e,t){function r(n){"use strict";return n.prototype.toFormat=function(i,o,a){if(!this.e&&this.e!==0)return this.toString();var c,u,l,d,h,p,w,m,E,y,P,O,N,B,U,H=this.format||{},q=this.constructor.format||{};if(i!=h?typeof i=="object"?(a=i,i=h):o!=h?typeof o=="object"?(a=o,o=h):typeof a!="object"&&(a={}):a={}:a={},c=this.toFixed(i,o).split("."),m=c[0],E=c[1],w=this.s<0?m.slice(1):m,p=w.length,y=a.decimalSeparator,y==h&&(y=H.decimalSeparator,y==h&&(y=q.decimalSeparator,y==h&&(y="."))),P=a.groupSeparator,P==h&&(P=H.groupSeparator,P==h&&(P=q.groupSeparator)),P&&(O=a.groupSize,O==h&&(O=H.groupSize,O==h&&(O=q.groupSize,O==h&&(O=0))),N=a.secondaryGroupSize,N==h&&(N=H.secondaryGroupSize,N==h&&(N=q.secondaryGroupSize,N==h&&(N=0))),N?(u=+N,l=+O,p-=l):(u=+O,l=+N),u>0&&p>0)){for(d=p%u||u,m=w.substr(0,d);d<p;d+=u)m+=P+w.substr(d,u);l>0&&(m+=P+w.slice(d)),this.s<0&&(m="-"+m)}return E?(B=a.fractionGroupSeparator,B==h&&(B=H.fractionGroupSeparator,B==h&&(B=q.fractionGroupSeparator)),B&&(U=a.fractionGroupSize,U==h&&(U=H.fractionGroupSize,U==h&&(U=q.fractionGroupSize,U==h&&(U=0))),U=+U,U&&(E=E.replace(new RegExp("\\d{"+U+"}\\B","g"),"$&"+B))),m+y+E):m},n.format={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:"",fractionGroupSize:0},n}typeof t<"u"&&t.exports&&(t.exports=r)}}),og={};Zn(og,{ARGENT_WALLET_DETECTOR_ADDRESS:()=>uf,CHAIN_TO_ADDRESSES_MAP:()=>Wt,ChainId:()=>x,CurrencyAmount:()=>sn,ENS_REGISTRAR_ADDRESSES:()=>ff,Ether:()=>$o,Fraction:()=>kr,GOVERNANCE_ALPHA_V0_ADDRESSES:()=>nf,GOVERNANCE_ALPHA_V1_ADDRESSES:()=>sf,GOVERNANCE_BRAVO_ADDRESSES:()=>of,MERKLE_DISTRIBUTOR_ADDRESS:()=>cf,MIXED_ROUTE_QUOTER_V1_ADDRESSES:()=>gf,MULTICALL_ADDRESSES:()=>rf,MaxUint256:()=>Ko,NONFUNGIBLE_POSITION_MANAGER_ADDRESSES:()=>df,NativeCurrency:()=>Go,NativeCurrencyName:()=>qo,Percent:()=>vi,Price:()=>bf,QUOTER_ADDRESSES:()=>lf,Rounding:()=>kt,SOCKS_CONTROLLER_ADDRESSES:()=>hf,SUPPORTED_CHAINS:()=>zt,SWAP_ROUTER_02_ADDRESSES:()=>mf,TICK_LENS_ADDRESSES:()=>pf,TIMELOCK_ADDRESSES:()=>af,Token:()=>me,TradeType:()=>Ho,UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS:()=>Yd,UNI_ADDRESSES:()=>$d,V2_FACTORY_ADDRESS:()=>Qd,V2_FACTORY_ADDRESSES:()=>Zd,V2_ROUTER_ADDRESS:()=>Jd,V2_ROUTER_ADDRESSES:()=>Xd,V3_CORE_FACTORY_ADDRESSES:()=>ef,V3_MIGRATOR_ADDRESSES:()=>tf,WETH9:()=>jo,computePriceImpact:()=>lg,computeZksyncCreate2Address:()=>dg,sortedInsert:()=>fg,sqrt:()=>hg,validateAndParseAddress:()=>Gd});function Ac(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,cg(n.key),n)}}function pn(e,t,r){return t&&Ac(e.prototype,t),r&&Ac(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wt.apply(null,arguments)}function Vr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Wo(e,t)}function Wo(e,t){return Wo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},Wo(e,t)}function ag(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function cg(e){var t=ag(e,"string");return typeof t=="symbol"?t:t+""}function ls(e,t){return t===void 0&&(t=[]),jd.concat(t).reduce(function(r,n){return r[n]=e,r},{})}function ds(e){return new vi(e.numerator,e.denominator)}function Gd(e){try{return Id(e)}catch{throw new Error(e+" is not a valid address.")}}function ug(e){if(yf.test(e))return e;throw new Error(e+" is not a valid address.")}function lg(e,t,r){var n=e.quote(t),s=n.subtract(r).divide(n);return new vi(s.numerator,s.denominator)}function dg(e,t,r,n){n===void 0&&(n="0x");var s=Oi(x0("zksyncCreate2")),i=Oi(n),o=Oi(T0([s,P0(e,32),r,t,i])).slice(26);return Id(o)}function fg(e,t,r,n){if(!(r>0)&&Ve(!1),!(e.length<=r)&&Ve(!1),e.length===0)return e.push(t),null;var s=e.length===r;if(s&&n(e[e.length-1],t)<=0)return t;for(var i=0,o=e.length;i<o;){var a=i+o>>>1;n(e[a],t)<=0?i=a+1:o=a}return e.splice(i,0,t),s?e.pop():null}function hg(e){if(!te.greaterThanOrEqual(e,wf)&&Ve(!1),te.lessThan(e,Ef))return te.BigInt(Math.floor(Math.sqrt(te.toNumber(e))));var t,r;for(t=e,r=te.add(te.divide(e,Yo),vf);te.lessThan(r,t);)t=r,r=te.divide(te.add(te.divide(e,r),r),Yo);return t}var fs,x,zt,qo,Ke,Ze,Ee,zi,Wi,qi,Hi,Ki,jd,$d,Yd,Qd,Zd,Jd,Xd,zr,kc,Sc,_c,Ic,Gi,ji,Tc,Pc,Cc,Bc,Dc,Rc,Oc,xc,Nc,Lc,Fc,Mc,Uc,Vc,zc,Wc,qc,Hc,Kc,Gc,Wt,ef,tf,rf,nf,sf,of,af,cf,uf,lf,df,ff,hf,pf,gf,mf,Ho,kt,Ko,gn,mn,Wr,hs,jc,$c,kr,$i,sn,Yi,vi,bf,Qi,Go,yf,me,jo,$o,Ef,wf,vf,Yo,br=ve({"../../node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js"(){X0(),eg(),rg(),sg(),fs=pt(ig()),R0(),B0(),O0(),D0(),C0(),(function(e){e[e.MAINNET=1]="MAINNET",e[e.GOERLI=5]="GOERLI",e[e.SEPOLIA=11155111]="SEPOLIA",e[e.OPTIMISM=10]="OPTIMISM",e[e.OPTIMISM_GOERLI=420]="OPTIMISM_GOERLI",e[e.OPTIMISM_SEPOLIA=11155420]="OPTIMISM_SEPOLIA",e[e.ARBITRUM_ONE=42161]="ARBITRUM_ONE",e[e.ARBITRUM_GOERLI=421613]="ARBITRUM_GOERLI",e[e.ARBITRUM_SEPOLIA=421614]="ARBITRUM_SEPOLIA",e[e.POLYGON=137]="POLYGON",e[e.POLYGON_MUMBAI=80001]="POLYGON_MUMBAI",e[e.CELO=42220]="CELO",e[e.CELO_ALFAJORES=44787]="CELO_ALFAJORES",e[e.GNOSIS=100]="GNOSIS",e[e.MOONBEAM=1284]="MOONBEAM",e[e.BNB=56]="BNB",e[e.AVALANCHE=43114]="AVALANCHE",e[e.BASE_GOERLI=84531]="BASE_GOERLI",e[e.BASE_SEPOLIA=84532]="BASE_SEPOLIA",e[e.BASE=8453]="BASE",e[e.ZORA=7777777]="ZORA",e[e.ZORA_SEPOLIA=999999999]="ZORA_SEPOLIA",e[e.ROOTSTOCK=30]="ROOTSTOCK",e[e.BLAST=81457]="BLAST",e[e.ZKSYNC=324]="ZKSYNC",e[e.WORLDCHAIN=480]="WORLDCHAIN",e[e.UNICHAIN_SEPOLIA=1301]="UNICHAIN_SEPOLIA",e[e.UNICHAIN=130]="UNICHAIN",e[e.MONAD_TESTNET=10143]="MONAD_TESTNET",e[e.SONEIUM=1868]="SONEIUM"})(x||(x={})),zt=[x.MAINNET,x.OPTIMISM,x.OPTIMISM_GOERLI,x.OPTIMISM_SEPOLIA,x.ARBITRUM_ONE,x.ARBITRUM_GOERLI,x.ARBITRUM_SEPOLIA,x.POLYGON,x.POLYGON_MUMBAI,x.GOERLI,x.SEPOLIA,x.CELO_ALFAJORES,x.CELO,x.BNB,x.AVALANCHE,x.BASE,x.BASE_GOERLI,x.BASE_SEPOLIA,x.ZORA,x.ZORA_SEPOLIA,x.ROOTSTOCK,x.BLAST,x.ZKSYNC,x.WORLDCHAIN,x.UNICHAIN_SEPOLIA,x.UNICHAIN,x.MONAD_TESTNET,x.SONEIUM],(function(e){e.ETHER="ETH",e.MATIC="MATIC",e.CELO="CELO",e.GNOSIS="XDAI",e.MOONBEAM="GLMR",e.BNB="BNB",e.AVAX="AVAX",e.ROOTSTOCK="RBTC"})(qo||(qo={})),jd=[x.MAINNET,x.GOERLI,x.SEPOLIA],$d=ls("0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",[x.OPTIMISM,x.ARBITRUM_ONE,x.POLYGON,x.POLYGON_MUMBAI,x.SEPOLIA]),Yd="0x8B799381ac40b838BBA4131ffB26197C432AFe78",Qd="0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",Zd=(Ke={},Ke[x.MAINNET]="0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",Ke[x.GOERLI]="0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",Ke[x.SEPOLIA]="0xF62c03E08ada871A0bEb309762E260a7a6a880E6",Ke[x.OPTIMISM]="0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf",Ke[x.ARBITRUM_ONE]="0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9",Ke[x.AVALANCHE]="0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C",Ke[x.BASE_SEPOLIA]="0x7Ae58f10f7849cA6F5fB71b7f45CB416c9204b1e",Ke[x.BASE]="0x8909dc15e40173ff4699343b6eb8132c65e18ec6",Ke[x.BNB]="0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6",Ke[x.POLYGON]="0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C",Ke[x.CELO]="0x79a530c8e2fA8748B7B40dd3629C0520c2cCf03f",Ke[x.BLAST]="0x5C346464d33F90bABaf70dB6388507CC889C1070",Ke[x.WORLDCHAIN]="0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",Ke[x.UNICHAIN_SEPOLIA]="0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",Ke[x.UNICHAIN]="0x1f98400000000000000000000000000000000002",Ke[x.MONAD_TESTNET]="0x733e88f248b742db6c14c0b1713af5ad7fdd59d0",Ke[x.SONEIUM]="0x97febbc2adbd5644ba22736e962564b23f5828ce",Ke),Jd="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",Xd=(Ze={},Ze[x.MAINNET]="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",Ze[x.GOERLI]="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",Ze[x.SEPOLIA]="0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3",Ze[x.ARBITRUM_ONE]="0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",Ze[x.OPTIMISM]="0x4a7b5da61326a6379179b40d00f57e5bbdc962c2",Ze[x.BASE_SEPOLIA]="0x1689E7B1F10000AE47eBfE339a4f69dECd19F602",Ze[x.BASE]="0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",Ze[x.AVALANCHE]="0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",Ze[x.BNB]="0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",Ze[x.POLYGON]="0xedf6066a2b290c185783862c7f4776a2c8077ad1",Ze[x.BLAST]="0xBB66Eb1c5e875933D44DAe661dbD80e5D9B03035",Ze[x.WORLDCHAIN]="0x541aB7c31A119441eF3575F6973277DE0eF460bd",Ze[x.UNICHAIN_SEPOLIA]="0x920b806E40A00E02E7D2b94fFc89860fDaEd3640",Ze[x.UNICHAIN]="0x284f11109359a7e1306c3e447ef14d38400063ff",Ze[x.MONAD_TESTNET]="0xfb8e1c3b833f9e67a71c859a132cf783b645e436",Ze[x.SONEIUM]="0x273f68c234fa55b550b40e563c4a488e0d334320",Ze),zr={v3CoreFactoryAddress:"0x1F98431c8aD98523631AE4a59f267346ea31F984",multicallAddress:"0x1F98415757620B543A52E61c46B32eB19261F984",quoterAddress:"0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",v3MigratorAddress:"0xA5644E29708357803b5A882D272c41cC0dF92B34",nonfungiblePositionManagerAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88"},kc=wt({},zr,{mixedRouteQuoterV1Address:"0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E",v4PoolManagerAddress:"0x000000000004444c5dc75cB358380D2e3dE08A90",v4PositionManagerAddress:"0xbd216513d74c8cf14cf4747e6aaa6420ff64ee9e",v4StateView:"0x7ffe42c4a5deea5b0fec41c94c136cf115597227",v4QuoterAddress:"0x52f0e24d1c21c8a0cb1e5a5dd6198556bd9e1203"}),Sc=wt({},zr,{mixedRouteQuoterV1Address:"0xBa60b6e6fF25488308789E6e0A65D838be34194e"}),_c=wt({},zr,{v4PoolManagerAddress:"0x9a13f98cb987694c9f086b1f5eb990eea8264ec3",v4PositionManagerAddress:"0x3c3ea4b57a46241e54610e5f022e5c45859a1017",v4StateView:"0xc18a3169788f4f75a170290584eca6395c75ecdb",v4QuoterAddress:"0x1f3131a13296fb91c90870043742c3cdbff1a8d7"}),Ic=wt({},zr,{multicallAddress:"0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB",tickLensAddress:"0xbfd8137f7d1516D3ea5cA83523914859ec47F573",v4PoolManagerAddress:"0x360e68faccca8ca495c1b759fd9eee466db9fb32",v4PositionManagerAddress:"0xd88f38f930b7952f2db2432cb002e7abbf3dd869",v4StateView:"0x76fd297e2d437cd7f76d50f01afe6160f86e9990",v4QuoterAddress:"0x3972c00f7ed4885e145823eb7c655375d275a1c5"}),Gi=wt({},zr,{v4PoolManagerAddress:"0x67366782805870060151383f4bbff9dab53e5cd6",v4PositionManagerAddress:"0x1ec2ebf4f37e7363fdfe3551602425af0b3ceef9",v4StateView:"0x5ea1bd7974c8a611cbab0bdcafcb1d9cc9b3ba5a",v4QuoterAddress:"0xb3d5c3dfc3a7aebff71895a7191796bffc2c81b9"}),ji={v3CoreFactoryAddress:"0xAfE208a311B21f13EF87E33A90049fC17A7acDEc",multicallAddress:"0x633987602DE5C4F337e3DbF265303A1080324204",quoterAddress:"0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8",v3MigratorAddress:"0x3cFd4d48EDfDCC53D3f173F596f621064614C582",nonfungiblePositionManagerAddress:"0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",tickLensAddress:"0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D"},Tc={v3CoreFactoryAddress:"0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",multicallAddress:"0x963Df249eD09c358A4819E39d9Cd5736c3087184",quoterAddress:"0x78D78E420Da98ad378D7799bE8f4AF69033EB077",v3MigratorAddress:"0x32681814957e0C13117ddc0c2aba232b5c9e760f",nonfungiblePositionManagerAddress:"0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613",tickLensAddress:"0xD9270014D396281579760619CCf4c3af0501A47C",swapRouter02Address:"0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2",v4PoolManagerAddress:"0x28e2ea090877bf75740558f6bfb36a5ffee9e9df",v4PositionManagerAddress:"0x7a4a5c919ae2541aed11041a1aeee68f1287f95b",v4StateView:"0xd13dd3d6e93f276fafc9db9e6bb47c1180aee0c4",v4QuoterAddress:"0x9f75dd27d6664c475b90e105573e550ff69437b0"},Pc={v3CoreFactoryAddress:"0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10",multicallAddress:"0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd",quoterAddress:"0x9569CbA925c8ca2248772A9A4976A516743A246F",v3MigratorAddress:"0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8",nonfungiblePositionManagerAddress:"0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6",tickLensAddress:"0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e"},Cc={v3CoreFactoryAddress:"0x8CE191193D15ea94e11d327b4c7ad8bbE520f6aF",multicallAddress:"0x80e4e06841bb76AA9735E0448cB8d003C0EF009a",quoterAddress:"0x0FBEa6cf957d95ee9313490050F6A0DA68039404",v3MigratorAddress:"0xE7EcbAAaA54D007A00dbb6c1d2f150066D69dA07",nonfungiblePositionManagerAddress:"0xdA75cEf1C93078e8b736FCA5D5a30adb97C8957d",tickLensAddress:"0xCb7f54747F58F8944973cea5b8f4ac2209BadDC5",swapRouter02Address:"0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4"},Bc={v3CoreFactoryAddress:"0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6",multicallAddress:"0x8260CB40247290317a4c062F3542622367F206Ee",quoterAddress:"0x1dd92b83591781D0C6d98d07391eea4b9a6008FA",v3MigratorAddress:"0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3",nonfungiblePositionManagerAddress:"0x622e4726a167799826d1E1D150b076A7725f5D81",tickLensAddress:"0xb52429333da969a0C79a60930a4Bf0020E5D1DE8"},Dc={v3CoreFactoryAddress:"0x248AB79Bbb9bC29bB72f7Cd42F17e054Fc40188e",multicallAddress:"0x2B718b475e385eD29F56775a66aAB1F5cC6B2A0A",quoterAddress:"0x2779a0CC1c3e0E44D2542EC3e79e3864Ae93Ef0B",v3MigratorAddress:"0x398f43ef2c67B941147157DA1c5a868E906E043D",nonfungiblePositionManagerAddress:"0x6b2937Bde17889EDCf8fbD8dE31C3C2a70Bc4d65",tickLensAddress:"0x0fd18587734e5C2dcE2dccDcC7DD1EC89ba557d9",swapRouter02Address:"0x101F443B4d1b059569D643917553c771E1b9663E",v4PoolManagerAddress:"0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317",v4PositionManagerAddress:"0xAc631556d3d4019C95769033B5E719dD77124BAc",v4StateView:"0x9d467fa9062b6e9b1a46e26007ad82db116c67cb",v4QuoterAddress:"0x7de51022d70a725b508085468052e25e22b5c4c9"},Rc={v3CoreFactoryAddress:"0x0227628f3F023bb0B980b67D528571c95c6DaC1c",multicallAddress:"0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07",quoterAddress:"0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3",v3MigratorAddress:"0x729004182cF005CEC8Bd85df140094b6aCbe8b15",nonfungiblePositionManagerAddress:"0x1238536071E1c677A632429e3655c799b22cDA52",tickLensAddress:"0xd7f33bcdb21b359c8ee6f0251d30e94832baad07",swapRouter02Address:"0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E",mixedRouteQuoterV2Address:"0x4745f77b56a0e2294426e3936dc4fab68d9543cd",v4PoolManagerAddress:"0xE03A1074c86CFeDd5C142C4F04F1a1536e203543",v4PositionManagerAddress:"0x429ba70129df741B2Ca2a85BC3A2a3328e5c09b4",v4StateView:"0xe1dd9c3fa50edb962e442f60dfbc432e24537e4c",v4QuoterAddress:"0x61b3f2011a92d183c7dbadbda940a7555ccf9227"},Oc={v3CoreFactoryAddress:"0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD",multicallAddress:"0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2",quoterAddress:"0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F",v3MigratorAddress:"0x44f5f1f5E452ea8d29C890E8F6e893fC0f1f0f97",nonfungiblePositionManagerAddress:"0x655C406EBFa14EE2006250925e54ec43AD184f8B",tickLensAddress:"0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950",swapRouter02Address:"0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE",v4PoolManagerAddress:"0x06380c0e0912312b5150364b9dc4542ba0dbbc85",v4PositionManagerAddress:"0xb74b1f14d2754acfcbbe1a221023a5cf50ab8acd",v4StateView:"0xc3c9e198c735a4b97e3e683f391ccbdd60b69286",v4QuoterAddress:"0xbe40675bb704506a3c2ccfb762dcfd1e979845c2"},xc={v3CoreFactoryAddress:"0x33128a8fC17869897dcE68Ed026d694621f6FDfD",multicallAddress:"0x091e99cb1C49331a94dD62755D168E941AbD0693",quoterAddress:"0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",v3MigratorAddress:"0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7",nonfungiblePositionManagerAddress:"0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",tickLensAddress:"0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",swapRouter02Address:"0x2626664c2603336E57B271c5C0b26F421741e481",mixedRouteQuoterV1Address:"0xe544efae946f0008ae9a8d64493efa7886b73776",v4PoolManagerAddress:"0x498581ff718922c3f8e6a244956af099b2652b2b",v4PositionManagerAddress:"0x7c5f5a4bbd8fd63184577525326123b519429bdc",v4StateView:"0xa3c0c9b65bad0b08107aa264b0f3db444b867a71",v4QuoterAddress:"0x0d5e0f971ed27fbff6c2837bf31316121532048d"},Nc={v3CoreFactoryAddress:"0x9323c1d6D800ed51Bd7C6B216cfBec678B7d0BC2",multicallAddress:"0xB206027a9E0E13F05eBEFa5D2402Bab3eA716439",quoterAddress:"0xedf539058e28E5937dAef3f69cEd0b25fbE66Ae9",v3MigratorAddress:"0x3efe5d02a04b7351D671Db7008ec6eBA9AD9e3aE",nonfungiblePositionManagerAddress:"0x3c61369ef0D1D2AFa70d8feC2F31C5D6Ce134F30",tickLensAddress:"0x1acB873Ee909D0c98adB18e4474943249F931b92",swapRouter02Address:"0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d"},Lc={v3CoreFactoryAddress:"0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24",multicallAddress:"0xd867e273eAbD6c853fCd0Ca0bFB6a3aE6491d2C1",quoterAddress:"0xC5290058841028F1614F3A6F0F5816cAd0df5E27",v3MigratorAddress:"0xCbf8b7f80800bd4888Fbc7bf1713B80FE4E23E10",nonfungiblePositionManagerAddress:"0x27F971cb582BF9E50F397e4d29a5C7A34f11faA2",tickLensAddress:"0xedf6066a2b290C185783862C7F4776A2C8077AD1",swapRouter02Address:"0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4",v4PoolManagerAddress:"0x05E73354cFDd6745C338b50BcFDfA3Aa6fA03408",v4PositionManagerAddress:"0x4b2c77d209d3405f41a037ec6c77f7f5b8e2ca80",v4StateView:"0x571291b572ed32ce6751a2cb2486ebee8defb9b4",v4QuoterAddress:"0x4a6513c898fe1b2d0e78d3b0e0a4a151589b1cba"},Fc={v3CoreFactoryAddress:"0x7145F8aeef1f6510E92164038E1B6F8cB2c42Cbb",multicallAddress:"0xA51c76bEE6746cB487a7e9312E43e2b8f4A37C15",quoterAddress:"0x11867e1b3348F3ce4FcC170BC5af3d23E07E64Df",v3MigratorAddress:"0x048352d8dCF13686982C799da63fA6426a9D0b60",nonfungiblePositionManagerAddress:"0xbC91e8DfA3fF18De43853372A3d7dfe585137D78",tickLensAddress:"0x209AAda09D74Ad3B8D0E92910Eaf85D2357e3044",swapRouter02Address:"0x7De04c96BE5159c3b5CeffC82aa176dc81281557",v4PoolManagerAddress:"0x0575338e4c17006ae181b47900a84404247ca30f",v4PositionManagerAddress:"0xf66c7b99e2040f0d9b326b3b7c152e9663543d63",v4StateView:"0x385785af07d63b50d0a0ea57c4ff89d06adf7328",v4QuoterAddress:"0x5edaccc0660e0a2c44b06e07ce8b915e625dc2c6"},Mc={v3CoreFactoryAddress:"0x4324A677D74764f46f33ED447964252441aA8Db6",multicallAddress:"0xA1E7e3A69671C4494EC59Dbd442de930a93F911A",quoterAddress:"0xC195976fEF0985886E37036E2DF62bF371E12Df0",v3MigratorAddress:"0x65ef259b31bf1d977c37e9434658694267674897",nonfungiblePositionManagerAddress:"0xB8458EaAe43292e3c1F7994EFd016bd653d23c20",tickLensAddress:"0x23C0F71877a1Fc4e20A78018f9831365c85f3064"},Uc={v3CoreFactoryAddress:"0xaF37EC98A00FD63689CF3060BF3B6784E00caD82",multicallAddress:"0x996a9858cDfa45Ad68E47c9A30a7201E29c6a386",quoterAddress:"0xb51727c996C68E60F598A923a5006853cd2fEB31",v3MigratorAddress:"0x16678977CA4ec3DAD5efc7b15780295FE5f56162",nonfungiblePositionManagerAddress:"0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",tickLensAddress:"0x55B9dF5bF68ADe972191a91980459f48ecA16afC",swapRouter02Address:"0x0B14ff67f0014046b4b99057Aec4509640b3947A"},Vc={v3CoreFactoryAddress:"0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd",multicallAddress:"0xdC7f370de7631cE9e2c2e1DCDA6B3B5744Cf4705",quoterAddress:"0x6Cdcd65e03c1CEc3730AeeCd45bc140D57A25C77",v3MigratorAddress:"0x15CA7043CD84C5D21Ae76Ba0A1A967d42c40ecE0",nonfungiblePositionManagerAddress:"0xB218e4f7cF0533d4696fDfC419A0023D33345F28",tickLensAddress:"0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274",swapRouter02Address:"0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66",v4PoolManagerAddress:"0x1631559198a9e474033433b2958dabc135ab6446",v4PositionManagerAddress:"0x4ad2f4cca2682cbb5b950d660dd458a1d3f1baad",v4StateView:"0x12a88ae16f46dce4e8b15368008ab3380885df30",v4QuoterAddress:"0x6f71cdcb0d119ff72c6eb501abceb576fbf62bcf"},zc={v3CoreFactoryAddress:"0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422",multicallAddress:"0x0c68a7C72f074d1c45C16d41fa74eEbC6D16a65C",quoterAddress:"0x8Cb537fc92E26d8EBBb760E632c95484b6Ea3e28",v3MigratorAddress:"0x611841b24E43C4ACfd290B427a3D6cf1A59dac8E",nonfungiblePositionManagerAddress:"0x0616e5762c1E7Dc3723c50663dF10a162D690a86",tickLensAddress:"0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89",swapRouter02Address:"0x99c56385daBCE3E81d8499d0b8d0257aBC07E8A3"},Wc={v3CoreFactoryAddress:"0x7a5028BDa40e7B173C278C5342087826455ea25a",multicallAddress:"0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9",quoterAddress:"0x10158D43e6cc414deE1Bd1eB0EfC6a5cBCfF244c",v3MigratorAddress:"0x9EBDdCBa71C9027E1eB45135672a30bcFEec9de3",nonfungiblePositionManagerAddress:"0xec12a9F9a09f50550686363766Cc153D03c27b5e",tickLensAddress:"0xE61df0CaC9d85876aCE5E3037005D80943570623",swapRouter02Address:"0x091AD9e2e6e5eD44c1c66dB50e49A601F9f36cF6",v4PoolManagerAddress:"0xb1860d529182ac3bc1f51fa2abd56662b7d13f33",v4PositionManagerAddress:"0xc585e0f504613b5fbf874f21af14c65260fb41fa",v4StateView:"0x51d394718bc09297262e368c1a481217fdeb71eb",v4QuoterAddress:"0x55d235b3ff2daf7c3ede0defc9521f1d6fe6c5c0"},qc={v3CoreFactoryAddress:"0x1F98431c8aD98523631AE4a59f267346ea31F984",multicallAddress:"0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1",quoterAddress:"0x6Dd37329A1A225a6Fca658265D460423DCafBF89",v3MigratorAddress:"0xb5FA244C9d6D04B2FBac84418b3c4910ED1Ae5f2",nonfungiblePositionManagerAddress:"0xB7F724d6dDDFd008eFf5cc2834edDE5F9eF0d075",tickLensAddress:"0x5f739c790a48E97eec0efb81bab5D152c0A0ecA0",swapRouter02Address:"0xd1AAE39293221B77B0C71fBD6dCb7Ea29Bb5B166",v4PoolManagerAddress:"0x00b036b58a818b1bc34d502d3fe730db729e62ac",v4PositionManagerAddress:"0xf969aee60879c54baaed9f3ed26147db216fd664",v4StateView:"0xc199f1072a74d4e905aba1a84d9a45e2546b6222",v4QuoterAddress:"0x56dcd40a3f2d466f48e7f48bdbe5cc9b92ae4472"},Hc={v3CoreFactoryAddress:"0x1f98400000000000000000000000000000000003",multicallAddress:"0xb7610f9b733e7d45184be3a1bc966960ccc54f0b",quoterAddress:"0x565ac8c7863d9bb16d07e809ff49fe5cd467634c",v3MigratorAddress:"0xb9d0c246f306b1aaf02ae6ba112d5ef25e5b60dc",nonfungiblePositionManagerAddress:"0x943e6e07a7e8e791dafc44083e54041d743c46e9",tickLensAddress:"0xd5d76fa166ab8d8ad4c9f61aaa81457b66cbe443",swapRouter02Address:"0x73855d06de49d0fe4a9c42636ba96c62da12ff9c",v4PoolManagerAddress:"0x1f98400000000000000000000000000000000004",v4PositionManagerAddress:"0x4529a01c7a0410167c5740c487a8de60232617bf",v4StateView:"0x86e8631a016f9068c3f085faf484ee3f5fdee8f2",v4QuoterAddress:"0x333e3c607b141b18ff6de9f258db6e77fe7491e0"},Kc={v3CoreFactoryAddress:"0x961235a9020b05c44df1026d956d1f4d78014276",multicallAddress:"0xa707ceb989cc3728551ed0e6e44b718dd114cf44",quoterAddress:"0x1ba215c17565de7b0cb7ecab971bcf540c24a862",v3MigratorAddress:"0x0a78348b71f8ae8caff2f8f9d4d74a2f36516661",nonfungiblePositionManagerAddress:"0x3dcc735c74f10fe2b9db2bb55c40fbbbf24490f7",tickLensAddress:"0x337478eb6058455ecb3696184b30dd6a29e3a893",swapRouter02Address:"0x4c4eabd5fb1d1a7234a48692551eaecff8194ca7"},Gc={v3CoreFactoryAddress:"0x42ae7ec7ff020412639d443e245d936429fbe717",multicallAddress:"0x8ad5ef2f2508288d2de66f04dd883ad5f4ef62b2",quoterAddress:"0x3e6c707d0125226ff60f291b6bd1404634f00aba",v3MigratorAddress:"0xa107580f73bd797bd8b87ff24e98346d99f93ddb",nonfungiblePositionManagerAddress:"0x56c1205b0244332011c1e866f4ea5384eb6bfa2c",tickLensAddress:"0xcd08eefb928c86499e6235ac155906bb7c4dc41a",swapRouter02Address:"0x7e40db01736f88464e5f4e42394f3d5bbb6705b9",v4PoolManagerAddress:"0x360e68faccca8ca495c1b759fd9eee466db9fb32",v4PositionManagerAddress:"0x1b35d13a2e2528f192637f14b05f0dc0e7deb566",v4StateView:"0x76fd297e2d437cd7f76d50f01afe6160f86e9990",v4QuoterAddress:"0x3972c00f7ed4885e145823eb7c655375d275a1c5"},Wt=(Ee={},Ee[x.MAINNET]=kc,Ee[x.OPTIMISM]=_c,Ee[x.ARBITRUM_ONE]=Ic,Ee[x.POLYGON]=Gi,Ee[x.POLYGON_MUMBAI]=Gi,Ee[x.GOERLI]=Sc,Ee[x.CELO]=ji,Ee[x.CELO_ALFAJORES]=ji,Ee[x.BNB]=Tc,Ee[x.OPTIMISM_GOERLI]=Pc,Ee[x.OPTIMISM_SEPOLIA]=Cc,Ee[x.ARBITRUM_GOERLI]=Bc,Ee[x.ARBITRUM_SEPOLIA]=Dc,Ee[x.SEPOLIA]=Rc,Ee[x.AVALANCHE]=Oc,Ee[x.BASE]=xc,Ee[x.BASE_GOERLI]=Nc,Ee[x.BASE_SEPOLIA]=Lc,Ee[x.ZORA]=Fc,Ee[x.ZORA_SEPOLIA]=Mc,Ee[x.ROOTSTOCK]=Uc,Ee[x.BLAST]=Vc,Ee[x.ZKSYNC]=zc,Ee[x.WORLDCHAIN]=Wc,Ee[x.UNICHAIN_SEPOLIA]=qc,Ee[x.UNICHAIN]=Hc,Ee[x.MONAD_TESTNET]=Kc,Ee[x.SONEIUM]=Gc,Ee),ef=wt({},zt.reduce(function(e,t){return e[t]=Wt[t].v3CoreFactoryAddress,e},{})),tf=wt({},zt.reduce(function(e,t){var r=Wt[t].v3MigratorAddress;return r&&(e[t]=r),e},{})),rf=wt({},zt.reduce(function(e,t){return e[t]=Wt[t].multicallAddress,e},{})),nf=ls("0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F"),sf=(zi={},zi[x.MAINNET]="0xC4e172459f1E7939D522503B81AFAaC1014CE6F6",zi),of=(Wi={},Wi[x.MAINNET]="0x408ED6354d4973f66138C91495F2f2FCbd8724C3",Wi),af=ls("0x1a9C8182C09F50C8318d769245beA52c32BE35BC"),cf=(qi={},qi[x.MAINNET]="0x090D4613473dEE047c3f2706764f49E0821D256e",qi),uf=(Hi={},Hi[x.MAINNET]="0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8",Hi),lf=wt({},zt.reduce(function(e,t){return e[t]=Wt[t].quoterAddress,e},{})),df=wt({},zt.reduce(function(e,t){var r=Wt[t].nonfungiblePositionManagerAddress;return r&&(e[t]=r),e},{})),ff=wt({},ls("0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e")),hf=(Ki={},Ki[x.MAINNET]="0x65770b5283117639760beA3F867b69b3697a91dd",Ki),pf=wt({},zt.reduce(function(e,t){var r=Wt[t].tickLensAddress;return r&&(e[t]=r),e},{})),gf=zt.reduce(function(e,t){var r=Wt[t].mixedRouteQuoterV1Address;return r&&(e[t]=r),e},{}),mf=function(t){if(zt.includes(t)){var r,n=t;return(r=Wt[n].swapRouter02Address)!=null?r:"0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"}return""},(function(e){e[e.EXACT_INPUT=0]="EXACT_INPUT",e[e.EXACT_OUTPUT=1]="EXACT_OUTPUT"})(Ho||(Ho={})),(function(e){e[e.ROUND_DOWN=0]="ROUND_DOWN",e[e.ROUND_HALF_UP=1]="ROUND_HALF_UP",e[e.ROUND_UP=2]="ROUND_UP"})(kt||(kt={})),Ko=te.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),Wr=(0,fs.default)(Ud),hs=(0,fs.default)(zo),jc=(gn={},gn[kt.ROUND_DOWN]=Wr.ROUND_DOWN,gn[kt.ROUND_HALF_UP]=Wr.ROUND_HALF_UP,gn[kt.ROUND_UP]=Wr.ROUND_UP,gn),$c=(mn={},mn[kt.ROUND_DOWN]=0,mn[kt.ROUND_HALF_UP]=1,mn[kt.ROUND_UP]=3,mn),kr=(function(){function e(r,n){n===void 0&&(n=te.BigInt(1)),this.numerator=te.BigInt(r),this.denominator=te.BigInt(n)}e.tryParseFraction=function(n){if(n instanceof te||typeof n=="number"||typeof n=="string")return new e(n);if("numerator"in n&&"denominator"in n)return n;throw new Error("Could not parse fraction")};var t=e.prototype;return t.invert=function(){return new e(this.denominator,this.numerator)},t.add=function(n){var s=e.tryParseFraction(n);return te.equal(this.denominator,s.denominator)?new e(te.add(this.numerator,s.numerator),this.denominator):new e(te.add(te.multiply(this.numerator,s.denominator),te.multiply(s.numerator,this.denominator)),te.multiply(this.denominator,s.denominator))},t.subtract=function(n){var s=e.tryParseFraction(n);return te.equal(this.denominator,s.denominator)?new e(te.subtract(this.numerator,s.numerator),this.denominator):new e(te.subtract(te.multiply(this.numerator,s.denominator),te.multiply(s.numerator,this.denominator)),te.multiply(this.denominator,s.denominator))},t.lessThan=function(n){var s=e.tryParseFraction(n);return te.lessThan(te.multiply(this.numerator,s.denominator),te.multiply(s.numerator,this.denominator))},t.equalTo=function(n){var s=e.tryParseFraction(n);return te.equal(te.multiply(this.numerator,s.denominator),te.multiply(s.numerator,this.denominator))},t.greaterThan=function(n){var s=e.tryParseFraction(n);return te.greaterThan(te.multiply(this.numerator,s.denominator),te.multiply(s.numerator,this.denominator))},t.multiply=function(n){var s=e.tryParseFraction(n);return new e(te.multiply(this.numerator,s.numerator),te.multiply(this.denominator,s.denominator))},t.divide=function(n){var s=e.tryParseFraction(n);return new e(te.multiply(this.numerator,s.denominator),te.multiply(this.denominator,s.numerator))},t.toSignificant=function(n,s,i){s===void 0&&(s={groupSeparator:""}),i===void 0&&(i=kt.ROUND_HALF_UP),!Number.isInteger(n)&&Ve(!1),!(n>0)&&Ve(!1),Wr.set({precision:n+1,rounding:jc[i]});var o=new Wr(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(n);return o.toFormat(o.decimalPlaces(),s)},t.toFixed=function(n,s,i){return s===void 0&&(s={groupSeparator:""}),i===void 0&&(i=kt.ROUND_HALF_UP),!Number.isInteger(n)&&Ve(!1),!(n>=0)&&Ve(!1),hs.DP=n,hs.RM=$c[i],new hs(this.numerator.toString()).div(this.denominator.toString()).toFormat(n,s)},pn(e,[{key:"quotient",get:function(){return te.divide(this.numerator,this.denominator)}},{key:"remainder",get:function(){return new e(te.remainder(this.numerator,this.denominator),this.denominator)}},{key:"asFraction",get:function(){return new e(this.numerator,this.denominator)}}])})(),$i=(0,fs.default)(zo),sn=(function(e){function t(n,s,i){var o;return o=e.call(this,s,i)||this,!te.lessThanOrEqual(o.quotient,Ko)&&Ve(!1),o.currency=n,o.decimalScale=te.exponentiate(te.BigInt(10),te.BigInt(n.decimals)),o}Vr(t,e),t.fromRawAmount=function(s,i){return new t(s,i)},t.fromFractionalAmount=function(s,i,o){return new t(s,i,o)};var r=t.prototype;return r.add=function(s){!this.currency.equals(s.currency)&&Ve(!1);var i=e.prototype.add.call(this,s);return t.fromFractionalAmount(this.currency,i.numerator,i.denominator)},r.subtract=function(s){!this.currency.equals(s.currency)&&Ve(!1);var i=e.prototype.subtract.call(this,s);return t.fromFractionalAmount(this.currency,i.numerator,i.denominator)},r.multiply=function(s){var i=e.prototype.multiply.call(this,s);return t.fromFractionalAmount(this.currency,i.numerator,i.denominator)},r.divide=function(s){var i=e.prototype.divide.call(this,s);return t.fromFractionalAmount(this.currency,i.numerator,i.denominator)},r.toSignificant=function(s,i,o){return s===void 0&&(s=6),o===void 0&&(o=kt.ROUND_DOWN),e.prototype.divide.call(this,this.decimalScale).toSignificant(s,i,o)},r.toFixed=function(s,i,o){return s===void 0&&(s=this.currency.decimals),o===void 0&&(o=kt.ROUND_DOWN),!(s<=this.currency.decimals)&&Ve(!1),e.prototype.divide.call(this,this.decimalScale).toFixed(s,i,o)},r.toExact=function(s){return s===void 0&&(s={groupSeparator:""}),$i.DP=this.currency.decimals,new $i(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(s)},pn(t,[{key:"wrapped",get:function(){return this.currency.isToken?this:t.fromFractionalAmount(this.currency.wrapped,this.numerator,this.denominator)}}])})(kr),Yi=new kr(te.BigInt(100)),vi=(function(e){function t(){var n;return n=e.apply(this,arguments)||this,n.isPercent=!0,n}Vr(t,e);var r=t.prototype;return r.add=function(s){return ds(e.prototype.add.call(this,s))},r.subtract=function(s){return ds(e.prototype.subtract.call(this,s))},r.multiply=function(s){return ds(e.prototype.multiply.call(this,s))},r.divide=function(s){return ds(e.prototype.divide.call(this,s))},r.toSignificant=function(s,i,o){return s===void 0&&(s=5),e.prototype.multiply.call(this,Yi).toSignificant(s,i,o)},r.toFixed=function(s,i,o){return s===void 0&&(s=2),e.prototype.multiply.call(this,Yi).toFixed(s,i,o)},t})(kr),bf=(function(e){function t(){for(var n,s,i,o,a,c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];if(u.length===4)s=u[0],i=u[1],o=u[2],a=u[3];else{var d=u[0].quoteAmount.divide(u[0].baseAmount),h=[u[0].baseAmount.currency,u[0].quoteAmount.currency,d.denominator,d.numerator];s=h[0],i=h[1],o=h[2],a=h[3]}return n=e.call(this,a,o)||this,n.baseCurrency=s,n.quoteCurrency=i,n.scalar=new kr(te.exponentiate(te.BigInt(10),te.BigInt(s.decimals)),te.exponentiate(te.BigInt(10),te.BigInt(i.decimals))),n}Vr(t,e);var r=t.prototype;return r.invert=function(){return new t(this.quoteCurrency,this.baseCurrency,this.numerator,this.denominator)},r.multiply=function(s){!this.quoteCurrency.equals(s.baseCurrency)&&Ve(!1);var i=e.prototype.multiply.call(this,s);return new t(this.baseCurrency,s.quoteCurrency,i.denominator,i.numerator)},r.quote=function(s){!s.currency.equals(this.baseCurrency)&&Ve(!1);var i=e.prototype.multiply.call(this,s);return sn.fromFractionalAmount(this.quoteCurrency,i.numerator,i.denominator)},r.toSignificant=function(s,i,o){return s===void 0&&(s=6),this.adjustedForDecimals.toSignificant(s,i,o)},r.toFixed=function(s,i,o){return s===void 0&&(s=4),this.adjustedForDecimals.toFixed(s,i,o)},pn(t,[{key:"adjustedForDecimals",get:function(){return e.prototype.multiply.call(this,this.scalar)}}])})(kr),Qi=function(t,r,n,s){!Number.isSafeInteger(t)&&Ve(!1),!(r>=0&&r<255&&Number.isInteger(r))&&Ve(!1),this.chainId=t,this.decimals=r,this.symbol=n,this.name=s},Go=(function(e){function t(){var r;return r=e.apply(this,arguments)||this,r.isNative=!0,r.isToken=!1,r}return Vr(t,e),t})(Qi),yf=/^0x[0-9a-fA-F]{40}$/,me=(function(e){function t(n,s,i,o,a,c,u,l){var d;return d=e.call(this,n,i,o,a)||this,d.isNative=!1,d.isToken=!0,c?d.address=ug(s):d.address=Gd(s),u&&!u.gte(fc.from(0))&&Ve(!1),l&&!l.gte(fc.from(0))&&Ve(!1),d.buyFeeBps=u,d.sellFeeBps=l,d}Vr(t,e);var r=t.prototype;return r.equals=function(s){return s.isToken&&this.chainId===s.chainId&&this.address.toLowerCase()===s.address.toLowerCase()},r.sortsBefore=function(s){return this.chainId!==s.chainId&&Ve(!1),this.address.toLowerCase()===s.address.toLowerCase()&&Ve(!1),this.address.toLowerCase()<s.address.toLowerCase()},pn(t,[{key:"wrapped",get:function(){return this}}])})(Qi),jo={1:new me(1,"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",18,"WETH","Wrapped Ether"),11155111:new me(11155111,"0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",18,"WETH","Wrapped Ether"),3:new me(3,"0xc778417E063141139Fce010982780140Aa0cD5Ab",18,"WETH","Wrapped Ether"),4:new me(4,"0xc778417E063141139Fce010982780140Aa0cD5Ab",18,"WETH","Wrapped Ether"),5:new me(5,"0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",18,"WETH","Wrapped Ether"),42:new me(42,"0xd0A1E359811322d97991E03f863a0C30C2cF029C",18,"WETH","Wrapped Ether"),10:new me(10,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),69:new me(69,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),11155420:new me(11155420,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),42161:new me(42161,"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",18,"WETH","Wrapped Ether"),421611:new me(421611,"0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681",18,"WETH","Wrapped Ether"),421614:new me(421614,"0x980B62Da83eFf3D4576C647993b0c1D7faf17c73",18,"WETH","Wrapped Ether"),8453:new me(8453,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),84532:new me(84532,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),56:new me(56,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB"),137:new me(137,"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",18,"WMATIC","Wrapped MATIC"),43114:new me(43114,"0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",18,"WAVAX","Wrapped AVAX"),7777777:new me(7777777,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),81457:new me(81457,"0x4300000000000000000000000000000000000004",18,"WETH","Wrapped Ether"),324:new me(324,"0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",18,"WETH","Wrapped Ether"),480:new me(480,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),1301:new me(1301,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),130:new me(130,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether"),10143:new me(10143,"0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",18,"WMON","Wrapped Monad"),1868:new me(1868,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether")},$o=(function(e){function t(n){return e.call(this,n,18,"ETH","Ether")||this}Vr(t,e),t.onChain=function(s){var i;return(i=this._etherCache[s])!=null?i:this._etherCache[s]=new t(s)};var r=t.prototype;return r.equals=function(s){return s.isNative&&s.chainId===this.chainId},pn(t,[{key:"wrapped",get:function(){var s=jo[this.chainId];return!s&&Ve(!1),s}}])})(Go),$o._etherCache={},Ef=te.BigInt(Number.MAX_SAFE_INTEGER),wf=te.BigInt(0),vf=te.BigInt(1),Yo=te.BigInt(2)}});mr();var Zi="Invariant Violation",Yc=Object.setPrototypeOf,pg=Yc===void 0?function(e,t){return e.__proto__=t,e}:Yc,Af=(function(e){kd(t,e);function t(r){r===void 0&&(r=Zi);var n=e.call(this,typeof r=="number"?Zi+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=Zi,pg(n,t.prototype),n}return t})(Error);function Pr(e,t){if(!e)throw new Af(t)}var kf=["debug","log","warn","error","silent"],gg=kf.indexOf("log");function ps(e){return function(){if(kf.indexOf(e)>=gg){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=ps("debug"),e.log=ps("log"),e.warn=ps("warn"),e.error=ps("error")})(Pr||(Pr={}));var Sf="3.10.4";function Xt(e){try{return e()}catch{}}Ad();var Qo=Xt(function(){return globalThis})||Xt(function(){return window})||Xt(function(){return self})||Xt(function(){return vd})||Xt(function(){return Xt.constructor("return this")()}),Qc=new Map;function mg(e){var t=Qc.get(e)||1;return Qc.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function bg(e,t){t===void 0&&(t=0);var r=mg("stringifyForDisplay");return JSON.stringify(e,function(n,s){return s===void 0?r:s},t).split(JSON.stringify(r)).join("<undefined>")}function gs(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(typeof t=="number"){var s=t;t=Oa(s),t||(t=xa(s,r),r=[])}e.apply(void 0,[t].concat(r))}}var $t=Object.assign(function(t,r){for(var n=[],s=2;s<arguments.length;s++)n[s-2]=arguments[s];t||Pr(t,Oa(r,n)||xa(r,n))},{debug:gs(Pr.debug),log:gs(Pr.log),warn:gs(Pr.warn),error:gs(Pr.error)});function Ww(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Af(Oa(e,t)||xa(e,t))}var Zc=Symbol.for("ApolloErrorMessageHandler_"+Sf);function _f(e){return typeof e=="string"?e:bg(e,2).slice(0,1e3)}function Oa(e,t){if(t===void 0&&(t=[]),!!e)return Qo[Zc]&&Qo[Zc](e,t.map(_f))}function xa(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Sf,message:e,args:t.map(_f)})))}var qw=globalThis.__DEV__!==!1;function Ji(e,t){if(!!!e)throw new Error(t)}function yg(e){return typeof e=="object"&&e!==null}function Eg(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}const wg=/\r\n|[\n\r]/g;function Zo(e,t){let r=0,n=1;for(const s of e.body.matchAll(wg)){if(typeof s.index=="number"||Eg(!1),s.index>=t)break;r=s.index+s[0].length,n+=1}return{line:n,column:t+1-r}}function vg(e){return If(e.source,Zo(e.source,e.start))}function If(e,t){const r=e.locationOffset.column-1,n="".padStart(r)+e.body,s=t.line-1,i=e.locationOffset.line-1,o=t.line+i,a=t.line===1?r:0,c=t.column+a,u=`${e.name}:${o}:${c}
`,l=n.split(/\r\n|[\n\r]/g),d=l[s];if(d.length>120){const h=Math.floor(c/80),p=c%80,w=[];for(let m=0;m<d.length;m+=80)w.push(d.slice(m,m+80));return u+Jc([[`${o} |`,w[0]],...w.slice(1,h+1).map(m=>["|",m]),["|","^".padStart(p)],["|",w[h+1]]])}return u+Jc([[`${o-1} |`,l[s-1]],[`${o} |`,d],["|","^".padStart(c)],[`${o+1} |`,l[s+1]]])}function Jc(e){const t=e.filter(([n,s])=>s!==void 0),r=Math.max(...t.map(([n])=>n.length));return t.map(([n,s])=>n.padStart(r)+(s?" "+s:"")).join(`
`)}function Ag(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}var kg=class Tf extends Error{constructor(t,...r){var n,s,i;const{nodes:o,source:a,positions:c,path:u,originalError:l,extensions:d}=Ag(r);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=l??void 0,this.nodes=Xc(Array.isArray(o)?o:o?[o]:void 0);const h=Xc((n=this.nodes)===null||n===void 0?void 0:n.map(w=>w.loc).filter(w=>w!=null));this.source=a??(h==null||(s=h[0])===null||s===void 0?void 0:s.source),this.positions=c??(h==null?void 0:h.map(w=>w.start)),this.locations=c&&a?c.map(w=>Zo(a,w)):h==null?void 0:h.map(w=>Zo(w.source,w.start));const p=yg(l==null?void 0:l.extensions)?l==null?void 0:l.extensions:void 0;this.extensions=(i=d??p)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),l!=null&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Tf):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(t+=`

`+vg(r.loc));else if(this.source&&this.locations)for(const r of this.locations)t+=`

`+If(this.source,r);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function Xc(e){return e===void 0||e.length===0?void 0:e}function tt(e,t,r){return new kg(`Syntax Error: ${r}`,{source:e,positions:[t]})}var Sg=class{constructor(e,t,r){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},Pf=class{constructor(e,t,r,n,s,i){this.kind=e,this.start=t,this.end=r,this.line=n,this.column=s,this.value=i,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}};const _g={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Ig=new Set(Object.keys(_g));function Hw(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&Ig.has(t)}var Zr;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Zr||(Zr={}));var Jo;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Jo||(Jo={}));var oe;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(oe||(oe={}));function Xo(e){return e===9||e===32}function jn(e){return e>=48&&e<=57}function Cf(e){return e>=97&&e<=122||e>=65&&e<=90}function Bf(e){return Cf(e)||e===95}function Tg(e){return Cf(e)||jn(e)||e===95}function Pg(e){var t;let r=Number.MAX_SAFE_INTEGER,n=null,s=-1;for(let o=0;o<e.length;++o){var i;const a=e[o],c=Cg(a);c!==a.length&&(n=(i=n)!==null&&i!==void 0?i:o,s=o,o!==0&&c<r&&(r=c))}return e.map((o,a)=>a===0?o:o.slice(r)).slice((t=n)!==null&&t!==void 0?t:0,s+1)}function Cg(e){let t=0;for(;t<e.length&&Xo(e.charCodeAt(t));)++t;return t}function Kw(e,t){const r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),s=n.length===1,i=n.length>1&&n.slice(1).every(p=>p.length===0||Xo(p.charCodeAt(0))),o=r.endsWith('\\"""'),a=e.endsWith('"')&&!o,c=e.endsWith("\\"),u=a||c,l=!(t!=null&&t.minimize)&&(!s||e.length>70||u||i||o);let d="";const h=s&&Xo(e.charCodeAt(0));return(l&&!h||i)&&(d+=`
`),d+=r,(l||u)&&(d+=`
`),'"""'+d+'"""'}var M;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(M||(M={}));var Bg=class{constructor(e){const t=new Pf(M.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==M.EOF)do if(e.next)e=e.next;else{const t=Rg(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===M.COMMENT);return e}};function Dg(e){return e===M.BANG||e===M.DOLLAR||e===M.AMP||e===M.PAREN_L||e===M.PAREN_R||e===M.SPREAD||e===M.COLON||e===M.EQUALS||e===M.AT||e===M.BRACKET_L||e===M.BRACKET_R||e===M.BRACE_L||e===M.PIPE||e===M.BRACE_R}function cn(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Ai(e,t){return Df(e.charCodeAt(t))&&Rf(e.charCodeAt(t+1))}function Df(e){return e>=55296&&e<=56319}function Rf(e){return e>=56320&&e<=57343}function Nr(e,t){const r=e.source.body.codePointAt(t);if(r===void 0)return M.EOF;if(r>=32&&r<=126){const n=String.fromCodePoint(r);return n==='"'?`'"'`:`"${n}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function ze(e,t,r,n,s){const i=e.line,o=1+r-e.lineStart;return new Pf(t,r,n,i,o,s)}function Rg(e,t){const r=e.source.body,n=r.length;let s=t;for(;s<n;){const i=r.charCodeAt(s);switch(i){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++e.line,e.lineStart=s;continue;case 13:r.charCodeAt(s+1)===10?s+=2:++s,++e.line,e.lineStart=s;continue;case 35:return Og(e,s);case 33:return ze(e,M.BANG,s,s+1);case 36:return ze(e,M.DOLLAR,s,s+1);case 38:return ze(e,M.AMP,s,s+1);case 40:return ze(e,M.PAREN_L,s,s+1);case 41:return ze(e,M.PAREN_R,s,s+1);case 46:if(r.charCodeAt(s+1)===46&&r.charCodeAt(s+2)===46)return ze(e,M.SPREAD,s,s+3);break;case 58:return ze(e,M.COLON,s,s+1);case 61:return ze(e,M.EQUALS,s,s+1);case 64:return ze(e,M.AT,s,s+1);case 91:return ze(e,M.BRACKET_L,s,s+1);case 93:return ze(e,M.BRACKET_R,s,s+1);case 123:return ze(e,M.BRACE_L,s,s+1);case 124:return ze(e,M.PIPE,s,s+1);case 125:return ze(e,M.BRACE_R,s,s+1);case 34:return r.charCodeAt(s+1)===34&&r.charCodeAt(s+2)===34?Ug(e,s):Ng(e,s)}if(jn(i)||i===45)return xg(e,s,i);if(Bf(i))return Vg(e,s);throw tt(e.source,s,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:cn(i)||Ai(r,s)?`Unexpected character: ${Nr(e,s)}.`:`Invalid character: ${Nr(e,s)}.`)}return ze(e,M.EOF,n,n)}function Og(e,t){const r=e.source.body,n=r.length;let s=t+1;for(;s<n;){const i=r.charCodeAt(s);if(i===10||i===13)break;if(cn(i))++s;else if(Ai(r,s))s+=2;else break}return ze(e,M.COMMENT,t,s,r.slice(t+1,s))}function xg(e,t,r){const n=e.source.body;let s=t,i=r,o=!1;if(i===45&&(i=n.charCodeAt(++s)),i===48){if(i=n.charCodeAt(++s),jn(i))throw tt(e.source,s,`Invalid number, unexpected digit after 0: ${Nr(e,s)}.`)}else s=Xi(e,s,i),i=n.charCodeAt(s);if(i===46&&(o=!0,i=n.charCodeAt(++s),s=Xi(e,s,i),i=n.charCodeAt(s)),(i===69||i===101)&&(o=!0,i=n.charCodeAt(++s),(i===43||i===45)&&(i=n.charCodeAt(++s)),s=Xi(e,s,i),i=n.charCodeAt(s)),i===46||Bf(i))throw tt(e.source,s,`Invalid number, expected digit but got: ${Nr(e,s)}.`);return ze(e,o?M.FLOAT:M.INT,t,s,n.slice(t,s))}function Xi(e,t,r){if(!jn(r))throw tt(e.source,t,`Invalid number, expected digit but got: ${Nr(e,t)}.`);const n=e.source.body;let s=t+1;for(;jn(n.charCodeAt(s));)++s;return s}function Ng(e,t){const r=e.source.body,n=r.length;let s=t+1,i=s,o="";for(;s<n;){const a=r.charCodeAt(s);if(a===34)return o+=r.slice(i,s),ze(e,M.STRING,t,s+1,o);if(a===92){o+=r.slice(i,s);const c=r.charCodeAt(s+1)===117?r.charCodeAt(s+2)===123?Lg(e,s):Fg(e,s):Mg(e,s);o+=c.value,s+=c.size,i=s;continue}if(a===10||a===13)break;if(cn(a))++s;else if(Ai(r,s))s+=2;else throw tt(e.source,s,`Invalid character within String: ${Nr(e,s)}.`)}throw tt(e.source,s,"Unterminated string.")}function Lg(e,t){const r=e.source.body;let n=0,s=3;for(;s<12;){const i=r.charCodeAt(t+s++);if(i===125){if(s<5||!cn(n))break;return{value:String.fromCodePoint(n),size:s}}if(n=n<<4|Bn(i),n<0)break}throw tt(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+s)}".`)}function Fg(e,t){const r=e.source.body,n=eu(r,t+2);if(cn(n))return{value:String.fromCodePoint(n),size:6};if(Df(n)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){const s=eu(r,t+8);if(Rf(s))return{value:String.fromCodePoint(n,s),size:12}}throw tt(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function eu(e,t){return Bn(e.charCodeAt(t))<<12|Bn(e.charCodeAt(t+1))<<8|Bn(e.charCodeAt(t+2))<<4|Bn(e.charCodeAt(t+3))}function Bn(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Mg(e,t){const r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw tt(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function Ug(e,t){const r=e.source.body,n=r.length;let s=e.lineStart,i=t+3,o=i,a="";const c=[];for(;i<n;){const u=r.charCodeAt(i);if(u===34&&r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34){a+=r.slice(o,i),c.push(a);const l=ze(e,M.BLOCK_STRING,t,i+3,Pg(c).join(`
`));return e.line+=c.length-1,e.lineStart=s,l}if(u===92&&r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34&&r.charCodeAt(i+3)===34){a+=r.slice(o,i),o=i+1,i+=4;continue}if(u===10||u===13){a+=r.slice(o,i),c.push(a),u===13&&r.charCodeAt(i+1)===10?i+=2:++i,a="",o=i,s=i;continue}if(cn(u))++i;else if(Ai(r,i))i+=2;else throw tt(e.source,i,`Invalid character within String: ${Nr(e,i)}.`)}throw tt(e.source,i,"Unterminated string.")}function Vg(e,t){const r=e.source.body,n=r.length;let s=t+1;for(;s<n;){const i=r.charCodeAt(s);if(Tg(i))++s;else break}return ze(e,M.NAME,t,s,r.slice(t,s))}const zg=10,Of=2;function Wg(e){return ki(e,[])}function ki(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return qg(e,t);default:return String(e)}}function qg(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const r=[...t,e];if(Hg(e)){const n=e.toJSON();if(n!==e)return typeof n=="string"?n:ki(n,r)}else if(Array.isArray(e))return Gg(e,r);return Kg(e,r)}function Hg(e){return typeof e.toJSON=="function"}function Kg(e,t){const r=Object.entries(e);return r.length===0?"{}":t.length>Of?"["+jg(e)+"]":"{ "+r.map(([s,i])=>s+": "+ki(i,t)).join(", ")+" }"}function Gg(e,t){if(e.length===0)return"[]";if(t.length>Of)return"[Array]";const r=Math.min(zg,e.length),n=e.length-r,s=[];for(let i=0;i<r;++i)s.push(ki(e[i],t));return n===1?s.push("... 1 more item"):n>1&&s.push(`... ${n} more items`),"["+s.join(", ")+"]"}function jg(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const r=e.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}const $g=function(t,r){return t instanceof r};var xf=class{constructor(e,t="GraphQL request",r={line:1,column:1}){typeof e=="string"||Ji(!1,`Body must be a string. Received: ${Wg(e)}.`),this.body=e,this.name=t,this.locationOffset=r,this.locationOffset.line>0||Ji(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Ji(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function Yg(e){return $g(e,xf)}function Qg(e,t){return new Zg(e,t).parseDocument()}var Zg=class{constructor(e,t={}){const r=Yg(e)?e:new xf(e);this._lexer=new Bg(r),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(M.NAME);return this.node(e,{kind:oe.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:oe.DOCUMENT,definitions:this.many(M.SOF,this.parseDefinition,M.EOF)})}parseDefinition(){if(this.peek(M.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===M.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw tt(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(M.BRACE_L))return this.node(e,{kind:oe.OPERATION_DEFINITION,operation:Zr.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let r;return this.peek(M.NAME)&&(r=this.parseName()),this.node(e,{kind:oe.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(M.NAME);switch(e.value){case"query":return Zr.QUERY;case"mutation":return Zr.MUTATION;case"subscription":return Zr.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(M.PAREN_L,this.parseVariableDefinition,M.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:oe.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(M.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(M.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(M.DOLLAR),this.node(e,{kind:oe.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:oe.SELECTION_SET,selections:this.many(M.BRACE_L,this.parseSelection,M.BRACE_R)})}parseSelection(){return this.peek(M.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let r,n;return this.expectOptionalToken(M.COLON)?(r=t,n=this.parseName()):n=t,this.node(e,{kind:oe.FIELD,alias:r,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(M.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(M.PAREN_L,t,M.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,r=this.parseName();return this.expectToken(M.COLON),this.node(t,{kind:oe.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(M.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(M.NAME)?this.node(e,{kind:oe.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:oe.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:oe.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:oe.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case M.BRACKET_L:return this.parseList(e);case M.BRACE_L:return this.parseObject(e);case M.INT:return this.advanceLexer(),this.node(t,{kind:oe.INT,value:t.value});case M.FLOAT:return this.advanceLexer(),this.node(t,{kind:oe.FLOAT,value:t.value});case M.STRING:case M.BLOCK_STRING:return this.parseStringLiteral();case M.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:oe.BOOLEAN,value:!0});case"false":return this.node(t,{kind:oe.BOOLEAN,value:!1});case"null":return this.node(t,{kind:oe.NULL});default:return this.node(t,{kind:oe.ENUM,value:t.value})}case M.DOLLAR:if(e)if(this.expectToken(M.DOLLAR),this._lexer.token.kind===M.NAME){const r=this._lexer.token.value;throw tt(this._lexer.source,t.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:oe.STRING,value:e.value,block:e.kind===M.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:oe.LIST,values:this.any(M.BRACKET_L,t,M.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:oe.OBJECT,fields:this.any(M.BRACE_L,t,M.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,r=this.parseName();return this.expectToken(M.COLON),this.node(t,{kind:oe.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(M.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(M.AT),this.node(t,{kind:oe.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(M.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(M.BRACKET_R),t=this.node(e,{kind:oe.LIST_TYPE,type:r})}else t=this.parseNamedType();return this.expectOptionalToken(M.BANG)?this.node(e,{kind:oe.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:oe.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(M.STRING)||this.peek(M.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),n=this.many(M.BRACE_L,this.parseOperationTypeDefinition,M.BRACE_R);return this.node(e,{kind:oe.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:n})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(M.COLON);const r=this.parseNamedType();return this.node(e,{kind:oe.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:oe.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:n})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),n=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),i=this.parseFieldsDefinition();return this.node(e,{kind:oe.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:s,fields:i})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(M.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(M.BRACE_L,this.parseFieldDefinition,M.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName(),n=this.parseArgumentDefs();this.expectToken(M.COLON);const s=this.parseTypeReference(),i=this.parseConstDirectives();return this.node(e,{kind:oe.FIELD_DEFINITION,description:t,name:r,arguments:n,type:s,directives:i})}parseArgumentDefs(){return this.optionalMany(M.PAREN_L,this.parseInputValueDef,M.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName();this.expectToken(M.COLON);const n=this.parseTypeReference();let s;this.expectOptionalToken(M.EQUALS)&&(s=this.parseConstValueLiteral());const i=this.parseConstDirectives();return this.node(e,{kind:oe.INPUT_VALUE_DEFINITION,description:t,name:r,type:n,defaultValue:s,directives:i})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),n=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),i=this.parseFieldsDefinition();return this.node(e,{kind:oe.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:s,fields:i})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),n=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(e,{kind:oe.UNION_TYPE_DEFINITION,description:t,name:r,directives:n,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(M.EQUALS)?this.delimitedMany(M.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),n=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(e,{kind:oe.ENUM_TYPE_DEFINITION,description:t,name:r,directives:n,values:s})}parseEnumValuesDefinition(){return this.optionalMany(M.BRACE_L,this.parseEnumValueDefinition,M.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:oe.ENUM_VALUE_DEFINITION,description:t,name:r,directives:n})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw tt(this._lexer.source,this._lexer.token.start,`${ms(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),n=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(e,{kind:oe.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:n,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(M.BRACE_L,this.parseInputValueDef,M.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===M.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),r=this.optionalMany(M.BRACE_L,this.parseOperationTypeDefinition,M.BRACE_R);if(t.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:oe.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(e,{kind:oe.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(r.length===0&&n.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:oe.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:s})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(r.length===0&&n.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:oe.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:s})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(r.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:oe.UNION_TYPE_EXTENSION,name:t,directives:r,types:n})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(r.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:oe.ENUM_TYPE_EXTENSION,name:t,directives:r,values:n})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(r.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:oe.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:n})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(M.AT);const r=this.parseName(),n=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const i=this.parseDirectiveLocations();return this.node(e,{kind:oe.DIRECTIVE_DEFINITION,description:t,name:r,arguments:n,repeatable:s,locations:i})}parseDirectiveLocations(){return this.delimitedMany(M.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(Jo,t.value))return t;throw this.unexpected(e)}node(e,t){return this._options.noLocation!==!0&&(t.loc=new Sg(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw tt(this._lexer.source,t.start,`Expected ${Nf(e)}, found ${ms(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===M.NAME&&t.value===e)this.advanceLexer();else throw tt(this._lexer.source,t.start,`Expected "${e}", found ${ms(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===M.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e??this._lexer.token;return tt(this._lexer.source,t.start,`Unexpected ${ms(t)}.`)}any(e,t,r){this.expectToken(e);const n=[];for(;!this.expectOptionalToken(r);)n.push(t.call(this));return n}optionalMany(e,t,r){if(this.expectOptionalToken(e)){const n=[];do n.push(t.call(this));while(!this.expectOptionalToken(r));return n}return[]}many(e,t,r){this.expectToken(e);const n=[];do n.push(t.call(this));while(!this.expectOptionalToken(r));return n}delimitedMany(e,t){this.expectOptionalToken(e);const r=[];do r.push(t.call(this));while(this.expectOptionalToken(e));return r}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(e!==void 0&&t.kind!==M.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw tt(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}};function ms(e){const t=e.value;return Nf(e.kind)+(t!=null?` "${t}"`:"")}function Nf(e){return Dg(e)?`"${e}"`:e}Ad();var Jg=typeof WeakMap=="function"&&!Xt(function(){return navigator.product=="ReactNative"&&!vd.HermesInternal}),Gw=typeof WeakSet=="function",Lf=typeof Symbol=="function"&&typeof Symbol.for=="function",jw=Lf&&Symbol.asyncIterator,Xg=typeof Xt(function(){return window.document.createElement})=="function",em=Xt(function(){return navigator.userAgent.indexOf("jsdom")>=0})||!1,tm=Xg&&!em;function ea(e){return e!==null&&typeof e=="object"}function rm(){}var tu=class{constructor(e=1/0,t=rm){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){const t=this.getNode(e);return t&&t.value}get size(){return this.map.size}getNode(e){const t=this.map.get(e);if(t&&t!==this.newest){const{older:r,newer:n}=t;n&&(n.older=r),r&&(r.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t}set(e,t){let r=this.getNode(e);return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){const t=this.map.get(e);return t?(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0):!1}};function ta(){}const nm=ta,sm=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},im=typeof WeakMap<"u"?WeakMap:Map,om=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:ta,unregister:ta}},am=10024;var ru=class{constructor(e=1/0,t=nm){this.max=e,this.dispose=t,this.map=new im,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let n=0;n<am;n++){const s=r.next().value;if(!s)break;this.unfinalizedNodes.delete(s);const i=s.key;delete s.key,s.keyRef=new sm(i),this.registry.register(i,s,s)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new om(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){const t=this.getNode(e);return t&&t.value}getNode(e){const t=this.map.get(e);if(t&&t!==this.newest){const{older:r,newer:n}=t;n&&(n.older=r),r&&(r.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t}set(e,t){let r=this.getNode(e);return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(e,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;const t=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,t),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),t&&this.map.delete(t)}delete(e){const t=this.map.get(e);return t?(this.deleteNode(t),!0):!1}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}},eo=new WeakSet;function Ff(e){e.size<=(e.max||-1)||eo.has(e)||(eo.add(e),setTimeout(function(){e.clean(),eo.delete(e)},100))}var cm=function(e,t){var r=new ru(e,t);return r.set=function(n,s){var i=ru.prototype.set.call(this,n,s);return Ff(this),i},r},$w=function(e,t){var r=new tu(e,t);return r.set=function(n,s){var i=tu.prototype.set.call(this,n,s);return Ff(this),i},r};mr();var um=Symbol.for("apollo.cacheSize"),Mf=et({},Qo[um]);mr();var Sr={};function lm(e,t){Sr[e]=t}var Yw=globalThis.__DEV__!==!1?fm:void 0,Qw=globalThis.__DEV__!==!1?hm:void 0,Zw=globalThis.__DEV__!==!1?Uf:void 0;function dm(){var e={parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4};return Object.fromEntries(Object.entries(e).map(function(t){var r=t[0],n=t[1];return[r,Mf[r]||n]}))}function fm(){var e,t,r,n,s;if(globalThis.__DEV__===!1)throw new Error("only supported in development mode");return{limits:dm(),sizes:et({print:(e=Sr.print)===null||e===void 0?void 0:e.call(Sr),parser:(t=Sr.parser)===null||t===void 0?void 0:t.call(Sr),canonicalStringify:(r=Sr.canonicalStringify)===null||r===void 0?void 0:r.call(Sr),links:na(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:zf(this.queryManager.documentTransform)}},(s=(n=this.cache).getMemoryInternals)===null||s===void 0?void 0:s.call(n))}}function Uf(){return{cache:{fragmentQueryDocuments:ur(this.getFragmentDoc)}}}function hm(){var e=this.config.fragments;return et(et({},Uf.apply(this)),{addTypenameDocumentTransform:zf(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:ur(this.storeReader.executeSelectionSet),executeSubSelectedArray:ur(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:ur(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:ur(e==null?void 0:e.findFragmentSpreads),lookup:ur(e==null?void 0:e.lookup),transform:ur(e==null?void 0:e.transform)}})}function pm(e){return!!e&&"dirtyKey"in e}function ur(e){return pm(e)?e.size:void 0}function Vf(e){return e!=null}function zf(e){return ra(e).map(function(t){return{cache:t}})}function ra(e){return e?xr(xr([ur(e==null?void 0:e.performWork)],ra(e==null?void 0:e.left),!0),ra(e==null?void 0:e.right),!0).filter(Vf):[]}function na(e){var t;return e?xr(xr([(t=e==null?void 0:e.getMemoryInternals)===null||t===void 0?void 0:t.call(e)],na(e==null?void 0:e.left),!0),na(e==null?void 0:e.right),!0).filter(Vf):[]}var Jw=Array.isArray;function nu(e){return Array.isArray(e)&&e.length>0}function gm(e){var t=new Set([e]);return t.forEach(function(r){ea(r)&&mm(r)===r&&Object.getOwnPropertyNames(r).forEach(function(n){ea(r[n])&&t.add(r[n])})}),e}function mm(e){if(globalThis.__DEV__!==!1&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function su(e){return globalThis.__DEV__!==!1&&gm(e),e}function sa(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object.create(null);return e.forEach(function(n){n&&Object.keys(n).forEach(function(s){var i=n[s];i!==void 0&&(r[s]=i)})}),r}mr();function ia(e,t){return sa(e,t,t.variables&&{variables:sa(et(et({},e&&e.variables),t.variables))})}mr();var bm=Symbol();function Xw(e){return e.extensions?Array.isArray(e.extensions[bm]):!1}function ev(e){return e.hasOwnProperty("graphQLErrors")}var ym=function(e){var t=xr(xr(xr([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(r){return ea(r)&&r.message||"Error message not found."}).join(`
`)},iu=(function(e){kd(t,e);function t(r){var n=r.graphQLErrors,s=r.protocolErrors,i=r.clientErrors,o=r.networkError,a=r.errorMessage,c=r.extraInfo,u=e.call(this,a)||this;return u.name="ApolloError",u.graphQLErrors=n||[],u.protocolErrors=s||[],u.clientErrors=i||[],u.networkError=o||null,u.message=a||ym(u),u.extraInfo=c,u.__proto__=t.prototype,u}return t})(Error);const{toString:ou,hasOwnProperty:Em}=Object.prototype,au=Function.prototype.toString,oa=new Map;function Vs(e,t){try{return aa(e,t)}finally{oa.clear()}}var tv=Vs;function aa(e,t){if(e===t)return!0;const r=ou.call(e),n=ou.call(t);if(r!==n)return!1;switch(r){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(uu(e,t))return!0;const s=cu(e),i=cu(t),o=s.length;if(o!==i.length)return!1;for(let a=0;a<o;++a)if(!Em.call(t,s[a]))return!1;for(let a=0;a<o;++a){const c=s[a];if(!aa(e[c],t[c]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(uu(e,t))return!0;const s=e.entries(),i=r==="[object Map]";for(;;){const o=s.next();if(o.done)break;const[a,c]=o.value;if(!t.has(a)||i&&!aa(c,t.get(a)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let s=e.byteLength;if(s===t.byteLength)for(;s--&&e[s]===t[s];);return s===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const s=au.call(e);return s!==au.call(t)?!1:!Am(s,vm)}}return!1}function cu(e){return Object.keys(e).filter(wm,e)}function wm(e){return this[e]!==void 0}const vm="{ [native code] }";function Am(e,t){const r=e.length-t.length;return r>=0&&e.indexOf(t,r)===r}function uu(e,t){let r=oa.get(e);if(r){if(r.has(t))return!0}else oa.set(e,r=new Set);return r.add(t),!1}var Cr;(function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"})(Cr||(Cr={}));function rv(e){return e?e<7:!1}mr();var zs=new Map,ca=new Map,Wf=!0,ci=!1;function qf(e){return e.replace(/[\s,]+/g," ").trim()}function km(e){return qf(e.source.body.substring(e.start,e.end))}function Sm(e){var t=new Set,r=[];return e.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var s=n.name.value,i=km(n.loc),o=ca.get(s);o&&!o.has(i)?Wf&&console.warn("Warning: fragment with name "+s+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||ca.set(s,o=new Set),o.add(i),t.has(i)||(t.add(i),r.push(n))}else r.push(n)}),et(et({},e),{definitions:r})}function _m(e){var t=new Set(e.definitions);t.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(s){var i=n[s];i&&typeof i=="object"&&t.add(i)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function Im(e){var t=qf(e);if(!zs.has(t)){var r=Qg(e,{experimentalFragmentVariables:ci,allowLegacyFragmentVariables:ci});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");zs.set(t,_m(Sm(r)))}return zs.get(t)}function V(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var n=e[0];return t.forEach(function(s,i){s&&s.kind==="Document"?n+=s.loc.source.body:n+=s,n+=e[i+1]}),Im(n)}function Tm(){zs.clear(),ca.clear()}function Pm(){Wf=!1}function Cm(){ci=!0}function Bm(){ci=!1}var bn={gql:V,resetCaches:Tm,disableFragmentWarnings:Pm,enableExperimentalFragmentVariables:Cm,disableExperimentalFragmentVariables:Bm};(function(e){e.gql=bn.gql,e.resetCaches=bn.resetCaches,e.disableFragmentWarnings=bn.disableFragmentWarnings,e.enableExperimentalFragmentVariables=bn.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=bn.disableExperimentalFragmentVariables})(V||(V={}));V.default=V;var Xn=gt({"../../node_modules/rehackt/index.js"(e,t){t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=void 0,t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=void 0,t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=void 0,Object.assign(t.exports,g0())}}),bs=pt(Xn()),lu=Lf?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function Hf(){$t("createContext"in bs,45);var e=bs.createContext[lu];return e||(Object.defineProperty(bs.createContext,lu,{value:e=bs.createContext({}),enumerable:!1,writable:!1,configurable:!0}),e.displayName="ApolloContext"),e}var Dm=pt(Xn());function Na(e){var t=Dm.useContext(Hf()),r=e||t.client;return $t(!!r,49),r}var Ws=pt(Xn()),du=!1,Rm="useSyncExternalStore",Om=Ws[Rm],xm=Om||function(e,t,r){var n=t();globalThis.__DEV__!==!1&&!du&&n!==t()&&(du=!0,globalThis.__DEV__!==!1&&$t.error(58));var s=Ws.useState({inst:{value:n,getSnapshot:t}}),i=s[0].inst,o=s[1];return tm?Ws.useLayoutEffect(function(){Object.assign(i,{value:n,getSnapshot:t}),to(i)&&o({inst:i})},[e,n,t]):Object.assign(i,{value:n,getSnapshot:t}),Ws.useEffect(function(){return to(i)&&o({inst:i}),e(function(){to(i)&&o({inst:i})})},[e]),n};function to(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch{return!0}}var rr;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(rr||(rr={}));var Or;function fu(e){var t;switch(e){case rr.Query:t="Query";break;case rr.Mutation:t="Mutation";break;case rr.Subscription:t="Subscription";break}return t}function Kf(e){Or||(Or=new cm(Mf.parser||1e3));var t=Or.get(e);if(t)return t;var r,n,s;$t(!!e&&!!e.kind,60,e);for(var i=[],o=[],a=[],c=[],u=0,l=e.definitions;u<l.length;u++){var d=l[u];if(d.kind==="FragmentDefinition"){i.push(d);continue}if(d.kind==="OperationDefinition")switch(d.operation){case"query":o.push(d);break;case"mutation":a.push(d);break;case"subscription":c.push(d);break}}$t(!i.length||o.length||a.length||c.length,61),$t(o.length+a.length+c.length<=1,62,e,o.length,c.length,a.length),n=o.length?rr.Query:rr.Mutation,!o.length&&!a.length&&(n=rr.Subscription);var h=o.length?o:a.length?a:c;$t(h.length===1,63,e,h.length);var p=h[0];r=p.variableDefinitions||[],p.name&&p.name.kind==="Name"?s=p.name.value:s="data";var w={name:s,type:n,variables:r};return Or.set(e,w),w}Kf.resetCache=function(){Or=void 0};globalThis.__DEV__!==!1&&lm("parser",function(){return Or?Or.size:0});function Nm(e,t){var r=Kf(e),n=fu(t),s=fu(r.type);$t(r.type===t,64,n,n,s)}var Lm=Symbol.for("apollo.hook.wrappers");function Fm(e,t,r){var n=r.queryManager,s=n&&n[Lm],i=s&&s[e];return i?i(t):t}mr();var zn=pt(Xn()),Mm=Object.prototype.hasOwnProperty;function fe(e,t){return t===void 0&&(t=Object.create(null)),Fm("useQuery",Um,Na(t&&t.client))(e,t)}function Um(e,t){return Gf(Na(t.client),e).useQuery(t)}function Gf(e,t){var r=zn.useRef();(!r.current||e!==r.current.client||t!==r.current.query)&&(r.current=new Vm(e,t,r.current));var n=r.current;return n.forceUpdateState=zn.useReducer(function(s){return s+1},0)[1],n}var Vm=(function(){function e(t,r,n){var s=this;this.client=t,this.query=r,this.forceUpdate=function(){return s.forceUpdateState()},this.ssrDisabledResult=su({loading:!0,data:void 0,error:void 0,networkStatus:Cr.loading}),this.skipStandbyResult=su({loading:!1,data:void 0,error:void 0,networkStatus:Cr.ready}),this.toQueryResultCache=new(Jg?WeakMap:Map),Nm(r,rr.Query);var i=n&&n.result,o=i&&i.data;o&&(this.previousData=o)}return e.prototype.forceUpdateState=function(){globalThis.__DEV__!==!1&&$t.warn(51)},e.prototype.executeQuery=function(t){var r=this,n;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var s=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=((n=this.result)===null||n===void 0?void 0:n.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(i){var o;s.subscribe({next:function(a){o=a},error:function(){i(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){i(r.toQueryResult(o))}})})},e.prototype.useQuery=function(t){var r=this;this.renderPromises=zn.useContext(Hf()).renderPromises,this.useOptions(t);var n=this.useObservableQuery(),s=xm(zn.useCallback(function(i){if(r.renderPromises)return function(){};r.forceUpdate=i;var o=function(){var u=r.result,l=n.getCurrentResult();u&&u.loading===l.loading&&u.networkStatus===l.networkStatus&&Vs(u.data,l.data)||r.setResult(l)},a=function(u){if(c.unsubscribe(),c=n.resubscribeAfterError(o,a),!Mm.call(u,"graphQLErrors"))throw u;var l=r.result;(!l||l&&l.loading||!Vs(u,l.error))&&r.setResult({data:l&&l.data,error:u,loading:!1,networkStatus:Cr.error})},c=n.subscribe(o,a);return function(){setTimeout(function(){return c.unsubscribe()}),r.forceUpdate=function(){return r.forceUpdateState()}}},[n,this.renderPromises,this.client.disableNetworkFetches]),function(){return r.getCurrentResult()},function(){return r.getCurrentResult()});return this.unsafeHandlePartialRefetch(s),this.toQueryResult(s)},e.prototype.useOptions=function(t){var r,n=this.createWatchQueryOptions(this.queryHookOptions=t),s=this.watchQueryOptions;Vs(n,s)||(this.watchQueryOptions=n,s&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var t=[],r=this.client.defaultOptions.watchQuery;return r&&t.push(r),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push(sa(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(ia)},e.prototype.createWatchQueryOptions=function(t){var r;t===void 0&&(t={});var n=t.skip,s=t.ssr,i=t.onCompleted,o=t.onError,a=t.defaultOptions,c=ic(t,["skip","ssr","onCompleted","onError","defaultOptions"]),u=Object.assign(c,{query:this.query});if(this.renderPromises&&(u.fetchPolicy==="network-only"||u.fetchPolicy==="cache-and-network")&&(u.fetchPolicy="cache-first"),u.variables||(u.variables={}),n){var l=u.fetchPolicy,d=l===void 0?this.getDefaultFetchPolicy():l,h=u.initialFetchPolicy,p=h===void 0?d:h;Object.assign(u,{initialFetchPolicy:p,fetchPolicy:"standby"})}else u.fetchPolicy||(u.fetchPolicy=((r=this.observable)===null||r===void 0?void 0:r.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return u},e.prototype.getDefaultFetchPolicy=function(){var t,r;return((t=this.queryHookOptions.defaultOptions)===null||t===void 0?void 0:t.fetchPolicy)||((r=this.client.defaultOptions.watchQuery)===null||r===void 0?void 0:r.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(t){},e.prototype.onError=function(t){},e.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=zn.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var r=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&r&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},e.prototype.setResult=function(t){var r=this.result;r&&r.data&&(this.previousData=r.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t,r)},e.prototype.handleErrorOrCompleted=function(t,r){var n=this;if(!t.loading){var s=this.toApolloError(t);Promise.resolve().then(function(){s?n.onError(s):t.data&&(r==null?void 0:r.networkStatus)!==t.networkStatus&&t.networkStatus===Cr.ready&&n.onCompleted(t.data)}).catch(function(i){globalThis.__DEV__!==!1&&$t.warn(i)})}},e.prototype.toApolloError=function(t){return nu(t.errors)?new iu({graphQLErrors:t.errors}):t.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(t){var r=this.toQueryResultCache.get(t);if(r)return r;var n=t.data,s=t.partial,i=ic(t,["data","partial"]);return this.toQueryResultCache.set(t,r=et(et(et({data:n},i),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!r.error&&nu(t.errors)&&(r.error=new iu({graphQLErrors:t.errors})),r},e.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||Object.keys(t.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(t,{loading:!0,networkStatus:Cr.refetch}),this.observable.refetch())},e})();mr();var yn=pt(Xn()),zm=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function jf(e,t){var r,n=yn.useRef(),s=yn.useRef(),i=yn.useRef(),o=ia(t,n.current||{}),a=(r=o==null?void 0:o.query)!==null&&r!==void 0?r:e;s.current=t,i.current=a;var c=Gf(Na(t&&t.client),a),u=c.useQuery(et(et({},o),{skip:!n.current})),l=u.observable.options.initialFetchPolicy||c.getDefaultFetchPolicy(),d=Object.assign(u,{called:!!n.current}),h=yn.useMemo(function(){for(var w={},m=function(O){var N=d[O];w[O]=function(){return n.current||(n.current=Object.create(null),c.forceUpdateState()),N.apply(this,arguments)}},E=0,y=zm;E<y.length;E++){var P=y[E];m(P)}return w},[]);Object.assign(d,h);var p=yn.useCallback(function(w){n.current=w?et(et({},w),{fetchPolicy:w.fetchPolicy||l}):{fetchPolicy:l};var m=ia(s.current,et({query:i.current},n.current)),E=c.executeQuery(et(et({},m),{skip:!1})).then(function(y){return Object.assign(y,h)});return E.catch(function(){}),E},[]);return[p,d]}const le={};let pe=(function(e){return e.Arbitrum="ARBITRUM",e.ArbitrumSepolia="ARBITRUM_SEPOLIA",e.AstrochainSepolia="ASTROCHAIN_SEPOLIA",e.Avalanche="AVALANCHE",e.Base="BASE",e.BaseSepolia="BASE_SEPOLIA",e.Blast="BLAST",e.Bnb="BNB",e.Celo="CELO",e.Ethereum="ETHEREUM",e.EthereumGoerli="ETHEREUM_GOERLI",e.EthereumSepolia="ETHEREUM_SEPOLIA",e.MonadTestnet="MONAD_TESTNET",e.Optimism="OPTIMISM",e.Polygon="POLYGON",e.Solana="SOLANA",e.Soneium="SONEIUM",e.Unichain="UNICHAIN",e.UnknownChain="UNKNOWN_CHAIN",e.Worldchain="WORLDCHAIN",e.Zksync="ZKSYNC",e.Zora="ZORA",e})({}),nv=(function(e){return e.Ars="ARS",e.Aud="AUD",e.Brl="BRL",e.Cad="CAD",e.Cny="CNY",e.Cop="COP",e.Eth="ETH",e.Eur="EUR",e.Gbp="GBP",e.Hkd="HKD",e.Idr="IDR",e.Inr="INR",e.Jpy="JPY",e.Krw="KRW",e.Matic="MATIC",e.Mxn="MXN",e.Ngn="NGN",e.Nzd="NZD",e.Pkr="PKR",e.Rub="RUB",e.Sgd="SGD",e.Thb="THB",e.Try="TRY",e.Uah="UAH",e.Usd="USD",e.Vnd="VND",e})({}),sv=(function(e){return e.Day="DAY",e.FiveMinute="FIVE_MINUTE",e.Hour="HOUR",e.Max="MAX",e.Month="MONTH",e.Week="WEEK",e.Year="YEAR",e})({}),iv=(function(e){return e.Erc721="ERC721",e.Erc1155="ERC1155",e.Noncompliant="NONCOMPLIANT",e})({}),ov=(function(e){return e.Add="ADD",e.Remove="REMOVE",e.Swap="SWAP",e})({}),av=(function(e){return e.SubgraphV2="SUBGRAPH_V2",e.SubgraphV3="SUBGRAPH_V3",e.SubgraphV4="SUBGRAPH_V4",e})({}),cv=(function(e){return e.AirdropPattern="AIRDROP_PATTERN",e.DynamicAnalysis="DYNAMIC_ANALYSIS",e.HighFees="HIGH_FEES",e.Honeypot="HONEYPOT",e.Impersonator="IMPERSONATOR",e.InorganicVolume="INORGANIC_VOLUME",e.KnownMalicious="KNOWN_MALICIOUS",e.Metadata="METADATA",e.Rugpull="RUGPULL",e.StaticCodeSignature="STATIC_CODE_SIGNATURE",e.Unknown="UNKNOWN",e.UnstableTokenPrice="UNSTABLE_TOKEN_PRICE",e})({}),uv=(function(e){return e.Benign="BENIGN",e.Malicious="MALICIOUS",e.Spam="SPAM",e.Unknown="UNKNOWN",e.Warning="WARNING",e})({}),lv=(function(e){return e.V2="V2",e.V3="V3",e.V4="V4",e})({}),dv=(function(e){return e.Blocked="BLOCKED",e.MediumWarning="MEDIUM_WARNING",e.StrongWarning="STRONG_WARNING",e.Verified="VERIFIED",e})({}),fv=(function(e){return e.Cancelled="CANCELLED",e.Error="ERROR",e.Expired="EXPIRED",e.Filled="FILLED",e.InsufficientFunds="INSUFFICIENT_FUNDS",e.Open="OPEN",e})({}),hv=(function(e){return e.Dutch="DUTCH",e.DutchV2="DUTCH_V2",e.Limit="LIMIT",e.Priority="PRIORITY",e})({}),pv=(function(e){return e.MarketCap="MARKET_CAP",e.Popularity="POPULARITY",e.TotalValueLocked="TOTAL_VALUE_LOCKED",e.Volume="VOLUME",e})({}),gv=(function(e){return e.Erc20="ERC20",e.Native="NATIVE",e.Spl="SPL",e})({}),mv=(function(e){return e.In="IN",e.Out="OUT",e.Self="SELF",e})({}),bv=(function(e){return e.Confirmed="CONFIRMED",e.Failed="FAILED",e.Pending="PENDING",e})({}),yv=(function(e){return e.Approve="APPROVE",e.Borrow="BORROW",e.Bridging="BRIDGING",e.Cancel="CANCEL",e.Claim="CLAIM",e.Deployment="DEPLOYMENT",e.Execute="EXECUTE",e.Lend="LEND",e.Mint="MINT",e.OffRamp="OFF_RAMP",e.OnRamp="ON_RAMP",e.Receive="RECEIVE",e.Repay="REPAY",e.Send="SEND",e.Stake="STAKE",e.Swap="SWAP",e.SwapOrder="SWAP_ORDER",e.Unknown="UNKNOWN",e.Unstake="UNSTAKE",e.Withdraw="WITHDRAW",e})({});const Wm=V`
    fragment TokenBalanceQuantityParts on TokenBalance {
  id
  quantity
}
    `,qm=V`
    fragment TokenBalanceMainParts on TokenBalance {
  ...TokenBalanceQuantityParts
  denominatedValue {
    currency
    value
  }
  tokenProjectMarket {
    relativeChange24: pricePercentChange(duration: DAY) {
      value
    }
  }
}
    ${Wm}`,yr=V`
    fragment TokenBasicInfoParts on Token {
  id
  address
  chain
  decimals
  name
  standard
  symbol
}
    `,es=V`
    fragment TokenBasicProjectParts on Token {
  project {
    id
    isSpam
    logoUrl
    name
    safetyLevel
    spamCode
    tokens {
      chain
      address
    }
  }
}
    `,La=V`
    fragment TokenFeeDataParts on Token {
  feeData {
    buyFeeBps
    sellFeeBps
  }
}
    `,Fa=V`
    fragment TokenProtectionInfoParts on Token {
  protectionInfo {
    result
    attackTypes
    blockaidFees {
      buy
      sell
      transfer
    }
  }
}
    `,ts=V`
    fragment TokenParts on Token {
  ...TokenBasicInfoParts
  ...TokenBasicProjectParts
  ...TokenFeeDataParts
  ...TokenProtectionInfoParts
}
    ${yr}
${es}
${La}
${Fa}`,Hm=V`
    fragment TokenBalanceParts on TokenBalance {
  ...TokenBalanceMainParts
  isHidden
  token {
    ...TokenParts
  }
}
    ${qm}
${ts}`,Km=V`
    fragment TokenProjectUrlsParts on Token {
  project {
    homepageUrl
    twitterName
  }
}
    `,$f=V`
    fragment TokenProjectMarketsParts on Token {
  project {
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      marketCap {
        value
      }
      fullyDilutedValuation {
        value
      }
      priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
        value
      }
      priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
        value
      }
      pricePercentChange24h {
        value
      }
    }
  }
}
    `,Gm=V`
    fragment TokenMarketParts on Token {
  market(currency: USD) {
    id
    volume(duration: DAY) {
      value
    }
    price {
      value
    }
    priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
      value
    }
    priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
      value
    }
  }
}
    `,Ev=V`
    fragment TopTokenParts on Token {
  ...TokenBasicInfoParts
  market {
    id
    totalValueLocked {
      value
    }
    volume(duration: DAY) {
      value
    }
  }
  project {
    id
    logoUrl
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      pricePercentChange24h {
        value
      }
      marketCap {
        value
      }
    }
  }
}
    ${yr}`,jm=V`
    fragment HomeScreenTokenParts on Token {
  ...TokenBasicInfoParts
  project {
    id
    logoUrl
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      pricePercentChange24h {
        value
      }
    }
  }
}
    ${yr}`,wv=V`
    fragment TransactionParts on Transaction {
  id
  blockNumber
  hash
  status
  to
  from
  nonce
}
    `,Ma=V`
    fragment TokenAssetParts on Token {
  id
  address
  chain
  symbol
  name
  decimals
  standard
  project {
    id
    name
    logo {
      id
      url
    }
    safetyLevel
    logoUrl
    isSpam
  }
}
    `,$m=V`
    fragment TokenTransferParts on TokenTransfer {
  id
  asset {
    ...TokenAssetParts
  }
  tokenStandard
  quantity
  sender
  recipient
  direction
  transactedValue {
    id
    currency
    value
  }
}
    ${Ma}`,Ua=V`
    fragment NFTAssetParts on NftAsset {
  id
  name
  isSpam
  nftContract {
    id
    chain
    address
  }
  tokenId
  image {
    id
    url
  }
  collection {
    id
    name
  }
}
    `,Ym=V`
    fragment NFTTransferParts on NftTransfer {
  id
  asset {
    ...NFTAssetParts
  }
  nftStandard
  sender
  recipient
  direction
}
    ${Ua}`,Qm=V`
    fragment TokenApprovalParts on TokenApproval {
  id
  asset {
    ...TokenAssetParts
  }
  tokenStandard
  approvedAddress
  quantity
}
    ${Ma}`,Zm=V`
    fragment NFTApprovalParts on NftApproval {
  id
  asset {
    ...NFTAssetParts
  }
  nftStandard
  approvedAddress
}
    ${Ua}`,Jm=V`
    fragment NFTApproveForAllParts on NftApproveForAll {
  id
  asset {
    ...NFTAssetParts
  }
  nftStandard
  operatorAddress
  approved
}
    ${Ua}`,Yt=V`
    fragment SimpleTokenDetails on Token {
  ...TokenBasicInfoParts
  project {
    id
    isSpam
    logoUrl
    name
    safetyLevel
  }
  ...TokenFeeDataParts
  ...TokenProtectionInfoParts
}
    ${yr}
${La}
${Fa}`,Xm=V`
    fragment OnRampTransferParts on OnRampTransfer {
  id
  token {
    ...SimpleTokenDetails
  }
  tokenStandard
  amount
  sourceCurrency
  sourceAmount
  serviceProvider {
    serviceProvider
    name
    url
    logoLightUrl
    logoDarkUrl
  }
  transactionReferenceId
  externalSessionId
  networkFee
  transactionFee
  totalFee
}
    ${Yt}`,eb=V`
    fragment TransactionDetailsParts on TransactionDetails {
  id
  type
  from
  to
  hash
  nonce
  status: transactionStatus
  assetChanges {
    __typename
    ... on TokenTransfer {
      ...TokenTransferParts
    }
    ... on NftTransfer {
      ...NFTTransferParts
    }
    ... on TokenApproval {
      ...TokenApprovalParts
    }
    ... on NftApproval {
      ...NFTApprovalParts
    }
    ... on NftApproveForAll {
      ...NFTApproveForAllParts
    }
    ... on OnRampTransfer {
      ...OnRampTransferParts
    }
  }
}
    ${$m}
${Ym}
${Qm}
${Zm}
${Jm}
${Xm}`,tb=V`
    fragment SwapOrderDetailsParts on SwapOrderDetails {
  id
  offerer
  hash
  orderStatus: swapOrderStatus
  expiry
  swapOrderType
  encodedOrder
  inputToken {
    ...TokenAssetParts
  }
  inputTokenQuantity
  outputToken {
    ...TokenAssetParts
  }
  outputTokenQuantity
}
    ${Ma}`,rb=V`
    fragment OnRampTransactionDetailsParts on OnRampTransactionDetails {
  id
  status
  receiverAddress
  onRampTransfer {
    id
    token {
      ...SimpleTokenDetails
    }
    amount
    sourceCurrency
    sourceAmount
    serviceProvider {
      serviceProvider
      name
      url
      logoLightUrl
      logoDarkUrl
    }
    transactionReferenceId
    externalSessionId
  }
}
    ${Yt}`,nb=V`
    fragment OffRampTransactionDetailsParts on OffRampTransactionDetails {
  id
  status
  senderAddress
  offRampTransfer {
    id
    token {
      ...SimpleTokenDetails
    }
    amount
    destinationCurrency
    destinationAmount
    serviceProvider {
      serviceProvider
      name
      url
      logoLightUrl
      logoDarkUrl
    }
    transactionReferenceId
    externalSessionId
    networkFee
    transactionFee
    totalFee
  }
}
    ${Yt}`,Yf=V`
    fragment AssetActivityParts on AssetActivity {
  id
  timestamp
  chain
  details {
    __typename
    ... on TransactionDetails {
      ...TransactionDetailsParts
    }
    ... on SwapOrderDetails {
      ...SwapOrderDetailsParts
    }
    ... on OnRampTransactionDetails {
      ...OnRampTransactionDetailsParts
    }
    ... on OffRampTransactionDetails {
      ...OffRampTransactionDetailsParts
    }
  }
}
    ${eb}
${tb}
${rb}
${nb}`,Va=V`
    fragment TokenPrice on Token {
  id
  project {
    id
    markets(currencies: [USD]) {
      id
      price {
        id
        value
      }
    }
    logo {
      id
      url
    }
  }
  market(currency: USD) {
    id
    price {
      id
      value
    }
  }
}
    `,za=V`
    fragment PoolTransactionToken on Token {
  id
  address
  symbol
  chain
  decimals
  project {
    id
    name
    logo {
      id
      url
    }
  }
}
    `,sb=V`
    fragment QuickTokenBalanceParts on TokenBalance {
  id
  quantity
  denominatedValue {
    id
    value
    currency
  }
  token {
    id
    address
    chain
    standard
  }
}
    `,vv=V`
    fragment PortfolioTokenBalanceParts on TokenBalance {
  id
  quantity
  denominatedValue {
    id
    currency
    value
  }
  token {
    ...SimpleTokenDetails
    id
    address
    chain
    symbol
    name
    decimals
    standard
    project {
      id
      name
      logo {
        id
        url
      }
      safetyLevel
      logoUrl
      isSpam
    }
  }
  tokenProjectMarket {
    id
    pricePercentChange(duration: DAY) {
      id
      value
    }
    tokenProject {
      id
      logoUrl
      isSpam
    }
  }
}
    ${Yt}`,ib=V`
    fragment CandlestickOHLC on TimestampedOhlc {
  id
  timestamp
  open {
    id
    value
  }
  high {
    id
    value
  }
  low {
    id
    value
  }
  close {
    id
    value
  }
}
    `,ob=V`
    fragment PriceHistoryFallback on TimestampedAmount {
  id
  value
  timestamp
}
    `,Si=V`
    fragment TransactionToken on Token {
  id
  address
  symbol
  chain
  decimals
  project {
    id
    name
    tokens {
      id
      address
      symbol
      chain
    }
    logo {
      id
      url
    }
  }
}
    `,un=V`
    fragment PoolTx on PoolTransaction {
  id
  chain
  protocolVersion
  timestamp
  hash
  account
  token0 {
    ...TransactionToken
  }
  token0Quantity
  token1 {
    ...TransactionToken
  }
  token1Quantity
  usdValue {
    id
    value
  }
  type
}
    ${Si}`,Av=V`
    query TokenPriceHistory($contract: ContractInput!, $duration: HistoryDuration = DAY, $maxHistoryLength: Int = 1000) {
  tokenProjects(contracts: [$contract]) {
    id
    name
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      pricePercentChange24h {
        value
      }
      priceHistory(duration: $duration, maxLength: $maxHistoryLength) {
        timestamp
        value
      }
    }
    tokens {
      id
      chain
      address
      symbol
      decimals
      market(currency: USD) {
        id
        price {
          value
        }
        pricePercentChange24h: pricePercentChange(duration: DAY) {
          value
        }
        priceHistory(duration: $duration, maxLength: $maxHistoryLength) {
          timestamp
          value
        }
      }
    }
  }
}
    `,kv=V`
    query AccountList($addresses: [String!]!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]) {
  portfolios(
    ownerAddresses: $addresses
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    ownerAddress
    tokensTotalDenominatedValue {
      value
    }
  }
}
    `,ab=V`
    query SearchPopularNFTCollections {
  topCollections(chains: [ETHEREUM], orderBy: VOLUME, duration: DAY, first: 2) {
    edges {
      node {
        id
        name
        collectionId
        isVerified
        nftContracts {
          id
          chain
          address
        }
        image {
          id
          url
        }
      }
    }
  }
}
    `;function Sv(e){const t={...le,...e};return fe(ab,t)}const _v=V`
    query Nfts($ownerAddress: String!) {
  portfolios(ownerAddresses: [$ownerAddress]) {
    id
    nftBalances {
      id
      ownedAsset {
        id
        collection {
          id
          collectionId
          description
          image {
            id
            url
          }
          isVerified
          name
          numAssets
          markets(currencies: [USD]) {
            id
            floorPrice {
              value
            }
            owners
            volume24h {
              value
            }
            totalVolume {
              value
            }
          }
        }
        description
        image {
          id
          url
        }
        name
        nftContract {
          id
          address
          chain
          standard
        }
        thumbnail {
          id
          url
        }
        tokenId
        creator {
          id
          address
          username
        }
      }
    }
  }
}
    `,Iv=V`
    query NFTItemScreen($contractAddress: String!, $filter: NftAssetsFilterInput, $activityFilter: NftActivityFilterInput) {
  nftAssets(address: $contractAddress, filter: $filter) {
    edges {
      node {
        id
        ownerAddress
        collection {
          id
          collectionId
          description
          image {
            id
            url
          }
          isVerified
          name
          numAssets
          markets(currencies: [USD]) {
            id
            floorPrice {
              value
            }
            owners
            totalVolume {
              value
            }
          }
          nftContracts {
            id
            address
          }
        }
        description
        image {
          id
          url
          dimensions {
            width
            height
          }
        }
        name
        nftContract {
          id
          address
          chain
          standard
        }
        tokenId
        creator {
          id
          address
          username
        }
        traits {
          id
          name
          rarity
          value
        }
        listings(first: 1) {
          edges {
            node {
              id
              price {
                currency
                value
              }
            }
          }
        }
      }
    }
  }
  nftActivity(filter: $activityFilter) {
    edges {
      node {
        id
        quantity
        price {
          currency
          value
        }
      }
    }
  }
}
    `,Tv=V`
    query NftCollectionScreen($contractAddress: String!, $first: Int, $after: String) {
  nftCollections(filter: {addresses: [$contractAddress]}) {
    edges {
      node {
        id
        bannerImage {
          id
          url
        }
        isVerified
        numAssets
        description
        homepageUrl
        twitterName
        image {
          id
          url
        }
        name
        markets(currencies: [USD]) {
          id
          floorPrice {
            value
          }
          owners
          volume24h {
            value
          }
          totalVolume {
            value
          }
        }
      }
    }
  }
  nftAssets(
    address: $contractAddress
    first: $first
    after: $after
    orderBy: PRICE
    asc: true
  ) {
    edges {
      node {
        ownerAddress
        id
        name
        tokenId
        nftContract {
          id
          address
        }
        collection {
          id
          collectionId
          name
        }
        image {
          id
          url
          dimensions {
            width
            height
          }
        }
        listings(first: 1) {
          edges {
            node {
              id
              price {
                currency
                value
              }
            }
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `,Pv=V`
    query NftsTab($ownerAddress: String!, $first: Int, $after: String, $filter: NftBalancesFilterInput, $chains: [Chain!]!) {
  nftBalances(
    ownerAddress: $ownerAddress
    chains: $chains
    first: $first
    after: $after
    filter: $filter
  ) {
    edges {
      node {
        ownedAsset {
          chain
          id
          collection {
            id
            name
            isVerified
            markets(currencies: [ETH]) {
              id
              floorPrice {
                value
              }
            }
          }
          image {
            id
            url
            dimensions {
              width
              height
            }
          }
          thumbnail {
            id
            url
          }
          name
          tokenId
          description
          nftContract {
            id
            address
          }
          isSpam
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `,Qf=V`
    query PortfolioBalances($ownerAddress: String!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]!) {
  portfolios(
    ownerAddresses: [$ownerAddress]
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    tokensTotalDenominatedValue {
      value
    }
    tokensTotalDenominatedValueChange(duration: DAY) {
      absolute {
        value
      }
      percentage {
        value
      }
    }
    tokenBalances {
      ...TokenBalanceParts
    }
  }
}
    ${Hm}`;function Cv(e){const t={...le,...e};return fe(Qf,t)}function Bv(e){const t={...le,...e};return jf(Qf,t)}const Dv=V`
    query MultiplePortfolioBalances($ownerAddresses: [String!]!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]!) {
  portfolios(
    ownerAddresses: $ownerAddresses
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    tokensTotalDenominatedValue {
      value
    }
    tokensTotalDenominatedValueChange(duration: DAY) {
      absolute {
        value
      }
      percentage {
        value
      }
    }
    tokenBalances {
      id
      quantity
      isHidden
      denominatedValue {
        currency
        value
      }
      token {
        ...TokenBasicInfoParts
        ...TokenBasicProjectParts
      }
      tokenProjectMarket {
        relativeChange24: pricePercentChange(duration: DAY) {
          value
        }
      }
    }
  }
}
    ${yr}
${es}`,Rv=V`
    query SelectWalletScreen($ownerAddresses: [String!]!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]!) {
  portfolios(
    ownerAddresses: $ownerAddresses
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    ownerAddress
    tokensTotalDenominatedValue {
      value
    }
  }
}
    `,Ov=V`
    query TransactionHistoryUpdater($addresses: [String!]!, $onRampAuth: OnRampTransactionsAuth, $chains: [Chain!]!) {
  portfolios(ownerAddresses: $addresses, chains: $chains) {
    id
    ownerAddress
    assetActivities(
      pageSize: 1
      page: 1
      chains: $chains
      onRampTransactionsAuth: $onRampAuth
      includeBridging: true
    ) {
      id
      timestamp
      details {
        ... on TransactionDetails {
          id
          hash
        }
      }
    }
  }
}
    `,cb=V`
    query Token($chain: Chain!, $address: String) {
  token(chain: $chain, address: $address) {
    ...TokenParts
  }
}
    ${ts}`;function xv(e){const t={...le,...e};return fe(cb,t)}const Nv=V`
    query TokenDetailsScreen($chain: Chain!, $address: String) {
  token(chain: $chain, address: $address) {
    ...TokenParts
    ...TokenMarketParts
    ...TokenBasicProjectParts
    ...TokenProjectUrlsParts
    ...TokenProjectMarketsParts
  }
}
    ${ts}
${Gm}
${es}
${Km}
${$f}`,Lv=V`
    query TokenProjectDescription($chain: Chain!, $address: String, $includeSpanish: Boolean = false, $includeFrench: Boolean = false, $includeJapanese: Boolean = false, $includePortuguese: Boolean = false, $includeVietnamese: Boolean = false, $includeChineseSimplified: Boolean = false, $includeChineseTraditional: Boolean = false) {
  token(chain: $chain, address: $address) {
    chain
    address
    project {
      id
      description
      descriptionTranslations {
        descriptionEsEs @include(if: $includeSpanish)
        descriptionFrFr @include(if: $includeFrench)
        descriptionJaJp @include(if: $includeJapanese)
        descriptionPtPt @include(if: $includePortuguese)
        descriptionViVn @include(if: $includeVietnamese)
        descriptionZhHans @include(if: $includeChineseSimplified)
        descriptionZhHant @include(if: $includeChineseTraditional)
      }
    }
  }
}
    `,ub=V`
    query TokenProjects($contracts: [ContractInput!]!) {
  tokenProjects(contracts: $contracts) {
    id
    logoUrl
    safetyLevel
    tokens {
      ...TokenBasicInfoParts
      ...TokenFeeDataParts
      ...TokenProtectionInfoParts
    }
  }
}
    ${yr}
${La}
${Fa}`;function Fv(e){const t={...le,...e};return fe(ub,t)}const Mv=V`
    query TransactionList($address: String!, $onRampAuth: OnRampTransactionsAuth, $chains: [Chain!]!, $pageSize: Int = 100) {
  portfolios(ownerAddresses: [$address], chains: $chains) {
    id
    assetActivities(
      pageSize: $pageSize
      page: 1
      includeOffChain: true
      includeBridging: true
      chains: $chains
      onRampTransactionsAuth: $onRampAuth
    ) {
      id
      timestamp
      chain
      details {
        ... on OnRampTransactionDetails {
          id
          status
          receiverAddress
          onRampTransfer {
            id
            transactionReferenceId
            externalSessionId
            token {
              ...TokenBasicInfoParts
              ...TokenBasicProjectParts
            }
            tokenStandard
            amount
            sourceCurrency
            sourceAmount
            serviceProvider {
              serviceProvider
              name
              url
              logoLightUrl
              logoDarkUrl
              supportUrl
            }
            networkFee
            transactionFee
            totalFee
          }
        }
        ... on TransactionDetails {
          id
          to
          type
          hash
          from
          status
          application {
            name
            address
            icon {
              url
            }
          }
          assetChanges {
            __typename
            ... on TokenTransfer {
              id
              asset {
                id
                symbol
                address
                decimals
                chain
                project {
                  id
                  isSpam
                  spamCode
                }
              }
              tokenStandard
              quantity
              sender
              recipient
              direction
              transactedValue {
                id
                currency
                value
              }
            }
            ... on NftTransfer {
              id
              asset {
                id
                name
                isSpam
                nftContract {
                  id
                  chain
                  address
                }
                tokenId
                image {
                  id
                  url
                }
                collection {
                  id
                  name
                }
              }
              nftStandard
              sender
              recipient
              direction
            }
            ... on OnRampTransfer {
              id
              transactionReferenceId
              externalSessionId
              token {
                ...TokenBasicInfoParts
                ...TokenBasicProjectParts
              }
              tokenStandard
              amount
              sourceCurrency
              sourceAmount
              serviceProvider {
                serviceProvider
                name
                url
                logoLightUrl
                logoDarkUrl
                supportUrl
              }
              networkFee
              transactionFee
              totalFee
            }
            ... on TokenApproval {
              id
              asset {
                id
                symbol
                decimals
                address
                chain
              }
              tokenStandard
              approvedAddress
              quantity
            }
          }
          networkFee {
            quantity
            tokenSymbol
            tokenAddress
            tokenChain
          }
        }
        ... on SwapOrderDetails {
          id
          offerer
          hash
          orderStatus: swapOrderStatus
          expiry
          swapOrderType
          encodedOrder
          inputToken {
            id
            symbol
            address
            decimals
            chain
          }
          inputTokenQuantity
          outputToken {
            id
            symbol
            address
            decimals
            chain
          }
          outputTokenQuantity
        }
      }
    }
  }
}
    ${yr}
${es}`,Uv=V`
    query FeedTransactionList($addresses: [String!]!, $chains: [Chain!]!) {
  portfolios(ownerAddresses: $addresses, chains: $chains) {
    id
    ownerAddress
    assetActivities(pageSize: 30, includeBridging: true, page: 1, chains: $chains) {
      id
      timestamp
      chain
      details {
        ... on TransactionDetails {
          id
          to
          type
          hash
          from
          status
          assetChanges {
            __typename
            ... on TokenTransfer {
              id
              asset {
                id
                symbol
                address
                decimals
                chain
                project {
                  id
                  isSpam
                  spamCode
                }
              }
              tokenStandard
              quantity
              sender
              recipient
              direction
              transactedValue {
                currency
                value
              }
            }
            ... on NftTransfer {
              id
              asset {
                id
                name
                isSpam
                nftContract {
                  id
                  chain
                  address
                }
                tokenId
                image {
                  id
                  url
                }
                collection {
                  id
                  name
                }
              }
              nftStandard
              sender
              recipient
              direction
            }
            ... on TokenApproval {
              id
              asset {
                id
                symbol
                decimals
                address
                chain
              }
              tokenStandard
              approvedAddress
              quantity
            }
          }
        }
      }
    }
  }
}
    `,lb=V`
    query TopTokens($chain: Chain, $page: Int = 1, $pageSize: Int = 100, $orderBy: TokenSortableField = POPULARITY) {
  topTokens(chain: $chain, page: $page, pageSize: $pageSize, orderBy: $orderBy) {
    ...TokenParts
  }
}
    ${ts}`;function Vv(e){const t={...le,...e};return fe(lb,t)}const zv=V`
    query HomeScreenTokens($contracts: [ContractInput!]!, $chain: Chain!) {
  tokens(contracts: $contracts) {
    ...HomeScreenTokenParts
  }
  eth: token(address: null, chain: $chain) {
    ...HomeScreenTokenParts
  }
}
    ${jm}`,Wv=V`
    query FavoriteTokenCard($chain: Chain!, $address: String) {
  token(chain: $chain, address: $address) {
    ...TokenBasicInfoParts
    ...TokenBasicProjectParts
    ...TokenProjectMarketsParts
    market(currency: USD) {
      id
      price {
        value
      }
      pricePercentChange(duration: DAY) {
        value
      }
    }
  }
}
    ${yr}
${es}
${$f}`,qv=V`
    query WidgetTokens($contracts: [ContractInput!]!) {
  tokens(contracts: $contracts) {
    symbol
    chain
    address
    name
  }
}
    `,db=V`
    query Tokens($contracts: [ContractInput!]!) {
  tokens(contracts: $contracts) {
    ...TokenParts
  }
}
    ${ts}`;function Hv(e){const t={...le,...e};return fe(db,t)}const fb=V`
    query Convert($fromCurrency: Currency!, $toCurrency: Currency!) {
  convert(
    fromAmount: {currency: $fromCurrency, value: 1.0}
    toCurrency: $toCurrency
  ) {
    value
    currency
  }
}
    `;function Kv(e){const t={...le,...e};return fe(fb,t)}const hb=V`
    query RecentTokenTransfers($address: String!, $chains: [Chain!]) {
  portfolios(ownerAddresses: [$address], chains: $chains) {
    id
    ownerAddress
    assetActivities(pageSize: 100, page: 1, chains: $chains) {
      id
      timestamp
      chain
      details {
        ... on TransactionDetails {
          to
          type
          hash
          from
          status
          assetChanges {
            __typename
            ... on TokenTransfer {
              id
              asset {
                id
                symbol
                address
                decimals
                chain
                project {
                  id
                  isSpam
                  spamCode
                }
              }
              tokenStandard
              quantity
              sender
              recipient
              direction
              transactedValue {
                currency
                value
              }
            }
            ... on NftTransfer {
              id
              asset {
                id
                name
                isSpam
                nftContract {
                  id
                  chain
                  address
                }
                tokenId
                image {
                  id
                  url
                }
                collection {
                  id
                  name
                }
              }
              nftStandard
              sender
              recipient
              direction
            }
            ... on TokenApproval {
              id
              asset {
                id
                symbol
                decimals
                address
                chain
              }
              tokenStandard
              approvedAddress
              quantity
            }
          }
        }
      }
    }
  }
}
    `;function Gv(e){const t={...le,...e};return fe(hb,t)}const pb=V`
    query TokenSpotPrice($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    name
    symbol
    project {
      id
      markets(currencies: [USD]) {
        id
        price {
          id
          value
        }
      }
    }
  }
}
    `;function jv(e){const t={...le,...e};return fe(pb,t)}const gb=V`
    query UniswapPrices($contracts: [ContractInput!]!) {
  tokens(contracts: $contracts) {
    id
    address
    chain
    standard
    project {
      id
      markets(currencies: [USD]) {
        id
        price {
          id
          value
        }
      }
    }
  }
}
    `;function $v(e){const t={...le,...e};return fe(gb,t)}const mb=V`
    query ActivityWeb($account: String!, $chains: [Chain!]!, $onRampTransactionIDs: [String!], $includeOffChain: Boolean!) {
  portfolios(ownerAddresses: [$account], chains: $chains) {
    id
    assetActivities(
      pageSize: 100
      page: 1
      includeOffChain: $includeOffChain
      chains: $chains
      onRampTransactionIDs: $onRampTransactionIDs
      includeBridging: true
    ) {
      ...AssetActivityParts
    }
  }
}
    ${Yf}`;function Yv(e){const t={...le,...e};return jf(mb,t)}const Qv=V`
    subscription OnAssetActivity($subscriptionId: ID!, $account: String!) {
  onAssetActivity(subscriptionId: $subscriptionId, addresses: [$account]) {
    ...AssetActivityParts
  }
}
    ${Yf}`,bb=V`
    query AllV3Ticks($chain: Chain!, $address: String!, $skip: Int, $first: Int) {
  v3Pool(chain: $chain, address: $address) {
    id
    ticks(skip: $skip, first: $first) {
      tick: tickIdx
      liquidityNet
      price0
      price1
    }
  }
}
    `;function Zv(e){const t={...le,...e};return fe(bb,t)}const yb=V`
    query AllV4Ticks($chain: Chain!, $poolId: String!, $skip: Int, $first: Int) {
  v4Pool(chain: $chain, poolId: $poolId) {
    id
    ticks(skip: $skip, first: $first) {
      tick: tickIdx
      liquidityNet
      price0
      price1
    }
  }
}
    `;function Jv(e){const t={...le,...e};return fe(yb,t)}const Eb=V`
    query FeeTierDistribution($chain: Chain!, $token0: String!, $token1: String!) {
  v3PoolsForTokenPair(chain: $chain, token0: $token0, token1: $token1) {
    feeTier
    token0Supply
    token1Supply
  }
}
    `;function Xv(e){const t={...le,...e};return fe(Eb,t)}const wb=V`
    query TokenPromo($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      price {
        id
        value
      }
      pricePercentChange(duration: DAY) {
        id
        value
      }
    }
  }
}
    `;function eA(e){const t={...le,...e};return fe(wb,t)}const tA=V`
    query CollectionPromo($addresses: [String!]!) {
  nftCollections(filter: {addresses: $addresses}) {
    edges {
      node {
        markets(currencies: ETH) {
          floorPricePercentChange(duration: DAY) {
            value
          }
        }
      }
    }
  }
}
    `,rA=V`
    query DailyProtocolVolume($version: ProtocolVersion!) {
  historicalProtocolVolume(chain: ETHEREUM, version: $version, duration: MONTH) {
    value
  }
}
    `,vb=V`
    query isV3SubgraphStale($chain: Chain!) {
  isV3SubgraphStale(chain: $chain)
}
    `;function nA(e){const t={...le,...e};return fe(vb,t)}const Ab=V`
    query CollectionSearch($query: String!) {
  nftCollections(filter: {nameQuery: $query}) {
    edges {
      cursor
      node {
        image {
          url
        }
        isVerified
        name
        numAssets
        nftContracts {
          address
          chain
          name
          symbol
          totalSupply
        }
        markets(currencies: ETH) {
          floorPrice {
            currency
            value
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;function sA(e){const t={...le,...e};return fe(Ab,t)}const kb=V`
    query NftBalance($ownerAddress: String!, $filter: NftBalancesFilterInput, $chains: [Chain!] = [ETHEREUM], $first: Int, $after: String, $last: Int, $before: String) {
  nftBalances(
    ownerAddress: $ownerAddress
    chains: $chains
    filter: $filter
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    edges {
      node {
        ownedAsset {
          id
          animationUrl
          collection {
            id
            isVerified
            image {
              id
              url
            }
            name
            twitterName
            nftContracts {
              id
              address
              chain
              name
              standard
              symbol
              totalSupply
            }
            markets(currencies: ETH) {
              id
              floorPrice {
                id
                value
              }
            }
          }
          chain
          description
          flaggedBy
          image {
            id
            url
          }
          originalImage {
            id
            url
          }
          name
          ownerAddress
          smallImage {
            id
            url
          }
          suspiciousFlag
          tokenId
          thumbnail {
            id
            url
          }
          listings(first: 1) {
            edges {
              node {
                price {
                  id
                  value
                  currency
                }
                createdAt
                marketplace
                endAt
              }
            }
          }
        }
        listedMarketplaces
        listingFees {
          id
          payoutAddress
          basisPoints
        }
        lastPrice {
          id
          currency
          timestamp
          value
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;function iA(e){const t={...le,...e};return fe(kb,t)}const Sb=V`
    query V3Pool($chain: Chain!, $address: String!) {
  v3Pool(chain: $chain, address: $address) {
    id
    protocolVersion
    address
    feeTier
    token0 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token0Supply
    token1 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token1Supply
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    historicalVolume(duration: WEEK) {
      value
      timestamp
    }
    totalLiquidity {
      value
    }
    totalLiquidityPercentChange24h {
      value
    }
  }
}
    ${Yt}
${Va}`;function oA(e){const t={...le,...e};return fe(Sb,t)}const _b=V`
    query V4Pool($chain: Chain!, $poolId: String!) {
  v4Pool(chain: $chain, poolId: $poolId) {
    id
    protocolVersion
    feeTier
    isDynamicFee
    poolId
    hook {
      id
      address
    }
    token0 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token0Supply
    token1 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token1Supply
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    historicalVolume(duration: WEEK) {
      value
      timestamp
    }
    rewardsCampaign {
      id
      boostedApr
      startTimestamp
      endTimestamp
      totalRewardAllocation
      distributedRewards
    }
    totalLiquidity {
      value
    }
    totalLiquidityPercentChange24h {
      value
    }
  }
}
    ${Yt}
${Va}`;function aA(e){const t={...le,...e};return fe(_b,t)}const Ib=V`
    query PoolPriceHistory($chain: Chain!, $addressOrId: String!, $duration: HistoryDuration!, $isV4: Boolean!, $isV3: Boolean!, $isV2: Boolean!) {
  v4Pool(chain: $chain, poolId: $addressOrId) @include(if: $isV4) {
    id
    priceHistory(duration: $duration) {
      id
      token0Price
      token1Price
      timestamp
    }
  }
  v3Pool(chain: $chain, address: $addressOrId) @include(if: $isV3) {
    id
    priceHistory(duration: $duration) {
      id
      token0Price
      token1Price
      timestamp
    }
  }
  v2Pair(chain: $chain, address: $addressOrId) @include(if: $isV2) {
    id
    priceHistory(duration: $duration) {
      id
      token0Price
      token1Price
      timestamp
    }
  }
}
    `;function cA(e){const t={...le,...e};return fe(Ib,t)}const Tb=V`
    query PoolVolumeHistory($chain: Chain!, $addressOrId: String!, $duration: HistoryDuration!, $isV4: Boolean!, $isV3: Boolean!, $isV2: Boolean!) {
  v4Pool(chain: $chain, poolId: $addressOrId) @include(if: $isV4) {
    id
    historicalVolume(duration: $duration) {
      id
      value
      timestamp
    }
  }
  v3Pool(chain: $chain, address: $addressOrId) @include(if: $isV3) {
    id
    historicalVolume(duration: $duration) {
      id
      value
      timestamp
    }
  }
  v2Pair(chain: $chain, address: $addressOrId) @include(if: $isV2) {
    id
    historicalVolume(duration: $duration) {
      id
      value
      timestamp
    }
  }
}
    `;function uA(e){const t={...le,...e};return fe(Tb,t)}const Pb=V`
    query V2Pair($chain: Chain!, $address: String!) {
  v2Pair(chain: $chain, address: $address) {
    id
    protocolVersion
    address
    token0 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token0Supply
    token1 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token1Supply
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    historicalVolume(duration: WEEK) {
      value
      timestamp
    }
    totalLiquidity {
      value
    }
    totalLiquidityPercentChange24h {
      value
    }
  }
}
    ${Yt}
${Va}`;function lA(e){const t={...le,...e};return fe(Pb,t)}const Cb=V`
    query V4PoolTransactions($chain: Chain!, $poolId: String!, $first: Int!, $cursor: Int) {
  v4Pool(chain: $chain, poolId: $poolId) {
    id
    transactions(first: $first, timestampCursor: $cursor) {
      timestamp
      hash
      account
      token0 {
        ...PoolTransactionToken
      }
      token0Quantity
      token1 {
        ...PoolTransactionToken
      }
      token1Quantity
      usdValue {
        value
      }
      type
    }
  }
}
    ${za}`;function dA(e){const t={...le,...e};return fe(Cb,t)}const Bb=V`
    query V3PoolTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  v3Pool(chain: $chain, address: $address) {
    id
    transactions(first: $first, timestampCursor: $cursor) {
      timestamp
      hash
      account
      token0 {
        ...PoolTransactionToken
      }
      token0Quantity
      token1 {
        ...PoolTransactionToken
      }
      token1Quantity
      usdValue {
        value
      }
      type
    }
  }
}
    ${za}`;function fA(e){const t={...le,...e};return fe(Bb,t)}const Db=V`
    query V2PairTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  v2Pair(chain: $chain, address: $address) {
    id
    transactions(first: $first, timestampCursor: $cursor) {
      timestamp
      hash
      account
      token0 {
        ...PoolTransactionToken
      }
      token0Quantity
      token1 {
        ...PoolTransactionToken
      }
      token1Quantity
      usdValue {
        value
      }
      type
    }
  }
}
    ${za}`;function hA(e){const t={...le,...e};return fe(Db,t)}const pA=V`
    query QuickTokenBalancesWeb($ownerAddress: String!, $chains: [Chain!]!) {
  portfolios(ownerAddresses: [$ownerAddress], chains: $chains) {
    id
    tokenBalances {
      ...QuickTokenBalanceParts
    }
  }
}
    ${sb}`,Rb=V`
    query TokenWeb($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    decimals
    name
    chain
    address
    symbol
    standard
    market(currency: USD) {
      id
      totalValueLocked {
        id
        value
        currency
      }
      price {
        id
        value
        currency
      }
      volume24H: volume(duration: DAY) {
        id
        value
        currency
      }
      priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
        id
        value
      }
      priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
        id
        value
      }
    }
    project {
      id
      name
      description
      homepageUrl
      twitterName
      logoUrl
      tokens {
        id
        chain
        address
      }
      markets(currencies: [USD]) {
        id
        fullyDilutedValuation {
          id
          value
          currency
        }
        marketCap {
          id
          value
          currency
        }
      }
    }
  }
}
    `;function gA(e){const t={...le,...e};return fe(Rb,t)}const mA=V`
    query TokenProjectWeb($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    decimals
    name
    chain
    address
    symbol
    standard
    project {
      id
      description
      homepageUrl
      twitterName
      logoUrl
      tokens {
        id
        chain
        address
      }
    }
  }
}
    `,Ob=V`
    query TokenPrice($chain: Chain!, $address: String = null, $duration: HistoryDuration!, $fallback: Boolean = false) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      price {
        id
        value
      }
      ohlc(duration: $duration) @skip(if: $fallback) {
        ...CandlestickOHLC
      }
      priceHistory(duration: $duration) @include(if: $fallback) {
        ...PriceHistoryFallback
      }
    }
  }
}
    ${ib}
${ob}`;function bA(e){const t={...le,...e};return fe(Ob,t)}const xb=V`
    query TokenHistoricalVolumes($chain: Chain!, $address: String = null, $duration: HistoryDuration!) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      historicalVolume(duration: $duration) {
        id
        timestamp
        value
      }
    }
  }
}
    `;function yA(e){const t={...le,...e};return fe(xb,t)}const Nb=V`
    query TokenHistoricalTvls($chain: Chain!, $address: String = null, $duration: HistoryDuration!) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      historicalTvl(duration: $duration) {
        id
        timestamp
        value
      }
      totalValueLocked {
        id
        value
        currency
      }
    }
  }
}
    `;function EA(e){const t={...le,...e};return fe(Nb,t)}const Lb=V`
    query V4TokenTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  token(chain: $chain, address: $address) {
    ...TransactionToken
    v4Transactions(first: $first, timestampCursor: $cursor) {
      ...PoolTx
    }
  }
}
    ${Si}
${un}`;function wA(e){const t={...le,...e};return fe(Lb,t)}const Fb=V`
    query V3TokenTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  token(chain: $chain, address: $address) {
    ...TransactionToken
    v3Transactions(first: $first, timestampCursor: $cursor) {
      ...PoolTx
    }
  }
}
    ${Si}
${un}`;function vA(e){const t={...le,...e};return fe(Fb,t)}const Mb=V`
    query V2TokenTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  token(chain: $chain, address: $address) {
    ...TransactionToken
    v2Transactions(first: $first, timestampCursor: $cursor) {
      ...PoolTx
    }
  }
}
    ${Si}
${un}`;function AA(e){const t={...le,...e};return fe(Mb,t)}const Ub=V`
    query TopV4Pools($chain: Chain!, $first: Int!, $cursor: Float, $tokenAddress: String) {
  topV4Pools(
    first: $first
    chain: $chain
    tokenFilter: $tokenAddress
    tvlCursor: $cursor
  ) {
    id
    protocolVersion
    poolId
    isDynamicFee
    hook {
      id
      address
    }
    totalLiquidity {
      value
    }
    feeTier
    token0 {
      ...SimpleTokenDetails
    }
    token1 {
      ...SimpleTokenDetails
    }
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    volume30d: cumulativeVolume(duration: MONTH) {
      value
    }
  }
}
    ${Yt}`;function kA(e){const t={...le,...e};return fe(Ub,t)}const Vb=V`
    query TopV3Pools($chain: Chain!, $first: Int!, $cursor: Float, $tokenAddress: String) {
  topV3Pools(
    first: $first
    chain: $chain
    tokenFilter: $tokenAddress
    tvlCursor: $cursor
  ) {
    id
    protocolVersion
    address
    totalLiquidity {
      value
    }
    feeTier
    token0 {
      ...SimpleTokenDetails
    }
    token1 {
      ...SimpleTokenDetails
    }
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    volume30d: cumulativeVolume(duration: MONTH) {
      value
    }
  }
}
    ${Yt}`;function SA(e){const t={...le,...e};return fe(Vb,t)}const zb=V`
    query TopV2Pairs($chain: Chain!, $first: Int!, $cursor: Float, $tokenAddress: String) {
  topV2Pairs(
    first: $first
    chain: $chain
    tokenFilter: $tokenAddress
    tvlCursor: $cursor
  ) {
    id
    protocolVersion
    address
    totalLiquidity {
      value
    }
    token0 {
      ...SimpleTokenDetails
    }
    token1 {
      ...SimpleTokenDetails
    }
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    volume30d: cumulativeVolume(duration: MONTH) {
      value
    }
  }
}
    ${Yt}`;function _A(e){const t={...le,...e};return fe(zb,t)}const Wb=V`
    query V4Transactions($chain: Chain!, $first: Int!, $cursor: Int) {
  v4Transactions(chain: $chain, first: $first, timestampCursor: $cursor) {
    ...PoolTx
  }
}
    ${un}`;function IA(e){const t={...le,...e};return fe(Wb,t)}const qb=V`
    query V3Transactions($chain: Chain!, $first: Int!, $cursor: Int) {
  v3Transactions(chain: $chain, first: $first, timestampCursor: $cursor) {
    ...PoolTx
  }
}
    ${un}`;function TA(e){const t={...le,...e};return fe(qb,t)}const Hb=V`
    query V2Transactions($chain: Chain!, $first: Int!, $cursor: Int) {
  v2Transactions(chain: $chain, first: $first, timestampCursor: $cursor) {
    ...PoolTx
  }
}
    ${un}`;function PA(e){const t={...le,...e};return fe(Hb,t)}br();let D=(function(e){return e[e.Mainnet=x.MAINNET]="Mainnet",e[e.ArbitrumOne=x.ARBITRUM_ONE]="ArbitrumOne",e[e.Avalanche=x.AVALANCHE]="Avalanche",e[e.Base=x.BASE]="Base",e[e.Blast=x.BLAST]="Blast",e[e.Bnb=x.BNB]="Bnb",e[e.Celo=x.CELO]="Celo",e[e.MonadTestnet=x.MONAD_TESTNET]="MonadTestnet",e[e.Optimism=x.OPTIMISM]="Optimism",e[e.Polygon=x.POLYGON]="Polygon",e[e.Sepolia=x.SEPOLIA]="Sepolia",e[e.Soneium=x.SONEIUM]="Soneium",e[e.Unichain=x.UNICHAIN]="Unichain",e[e.UnichainSepolia=x.UNICHAIN_SEPOLIA]="UnichainSepolia",e[e.WorldChain=x.WORLDCHAIN]="WorldChain",e[e.Zksync=x.ZKSYNC]="Zksync",e[e.Zora=x.ZORA]="Zora",e[e.Solana=501000101]="Solana",e})({}),Z=(function(e){return e.Public="public",e.Private="private",e.PublicAlt="public_alternative",e.Interface="interface",e.Fallback="fallback",e.Default="default",e})({}),Qe=(function(e){return e[e.L1=0]="L1",e[e.L2=1]="L2",e})({});const mt="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CA="0x0000000000000000000000000000000000000000",rs={n:10,minWait:250,medWait:500,maxWait:1e3},Zf=oi*10;function Kb(e){switch(e){case D.Mainnet:return"";case D.ArbitrumOne:return"arbitrum-mainnet";case D.Avalanche:return"avalanche-mainnet";case D.Base:return"base-mainnet";case D.Blast:return"blast-mainnet";case D.Bnb:return"bsc";case D.Celo:return"celo-mainnet";case D.MonadTestnet:return"monad-testnet";case D.Optimism:return"optimism";case D.Polygon:return"matic";case D.Sepolia:return"ethereum-sepolia";case D.Unichain:return"unichain-mainnet";case D.UnichainSepolia:return"unichain-sepolia";case D.WorldChain:return"worldchain-mainnet";case D.Zksync:return"zksync-mainnet";case D.Zora:return"zora-mainnet";default:throw new Error(`Chain ${e} does not have a corresponding QuickNode chain ID`)}}function Gb(e){switch(e){case D.Avalanche:return"/ext/bc/C/rpc";default:return""}}function _e(e){const t=Kb(e);return`https://${It.quicknodeEndpointName}${t?`.${t}`:""}.quiknode.pro/${It.quicknodeEndpointToken}${Gb(e)}`}function Jf(e){return{[Z.Public]:{http:[e]},[Z.Default]:{http:[e]},[Z.Fallback]:{http:[e]},[Z.Interface]:{http:[e]},[Z.Private]:{http:[e]},[Z.PublicAlt]:{http:[e]}}}function jb(e,t,r){return r.indexOf(e)===t}function BA(e,t=jb){return e.filter(t)}function DA(e,t){if(!e.length)return e;const r=[...e],n=r.findIndex(t);if(n>0){const s=r[n];s&&(r.splice(n,1),r.unshift(s))}return r}function Xf(e){const[t,...r]=e;if(!t)throw new Error("Array is empty");return[t,...r]}function RA(e,t){return t.reduce((r,n)=>n(r),e)}function $b(e){const{USDC:t,DAI:r,USDT:n,...s}=e;return[t,n,r,...Object.values(s)].flatMap(i=>i?[i]:[])}function nt({stables:e}){const t=$b(e);try{return{...e,stablecoins:Xf(t)}}catch{throw new Error("Must provide at least one stablecoin for each chain")}}let He=(function(e){return e.EVM="evm",e.SVM="svm",e})({});br();function Wa(e){return function(r,n){return new me(n,r,e.decimals,e.symbol,e.name)}}const Bt=Wa({decimals:6,name:"USD Coin",symbol:"USDC"}),_i=Wa({decimals:18,name:"Dai Stablecoin",symbol:"DAI"}),ln=Wa({decimals:6,name:"Tether USD",symbol:"USDT"});function vt(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}const eh={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function Ii(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?Kn(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?Kn(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?eh[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(t.authorizationList=Yb(e.authorizationList)),t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t}const qa=Da("transaction",Ii);function Yb(e){return e.map(t=>({address:t.address,chainId:Number(t.chainId),nonce:Number(t.nonce),r:t.r,s:t.s,yParity:Number(t.yParity)}))}function Qb(e){const t=(e.transactions??[]).map(r=>typeof r=="string"?r:Ii(r));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}const Ha=Da("block",Qb);function th(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}const Zb={"0x0":"reverted","0x1":"success"};function Jb(e){const t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(r=>th(r)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Kn(e.transactionIndex):null,status:e.status?Zb[e.status]:null,type:e.type?eh[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}const rh=Da("transactionReceipt",Jb),Ka=50000n,hu=z0*32n,nh={block:Ha({format(e){var t;const r=(t=e.transactions)===null||t===void 0?void 0:t.map(n=>{var s;if(typeof n=="string")return n;const i=(s=nh.transaction)===null||s===void 0?void 0:s.format(n);return i.typeHex==="0x71"?i.type="eip712":i.typeHex==="0xff"&&(i.type="priority"),i});return{l1BatchNumber:e.l1BatchNumber?qe(e.l1BatchNumber):null,l1BatchTimestamp:e.l1BatchTimestamp?qe(e.l1BatchTimestamp):null,transactions:r}}}),transaction:qa({format(e){const t={};return e.type==="0x71"?t.type="eip712":e.type==="0xff"&&(t.type="priority"),{...t,l1BatchNumber:e.l1BatchNumber?qe(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?qe(e.l1BatchTxIndex):null}}}),transactionReceipt:rh({format(e){return{l1BatchNumber:e.l1BatchNumber?qe(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?qe(e.l1BatchTxIndex):null,logs:e.logs.map(t=>({...th(t),l1BatchNumber:t.l1BatchNumber?qe(t.l1BatchNumber):null,transactionLogIndex:Kn(t.transactionLogIndex),logType:t.logType})),l2ToL1Logs:e.l2ToL1Logs.map(t=>({blockNumber:qe(t.blockHash),blockHash:t.blockHash,l1BatchNumber:t.l1BatchNumber?qe(t.l1BatchNumber):null,transactionIndex:qe(t.transactionIndex),shardId:qe(t.shardId),isService:t.isService,sender:t.sender,key:t.key,value:t.value,transactionHash:t.transactionHash,logIndex:qe(t.logIndex)}))}}}),transactionRequest:Cd({exclude:["customSignature","factoryDeps","gasPerPubdata","paymaster","paymasterInput"],format(e){return e.gasPerPubdata||e.paymaster&&e.paymasterInput||e.factoryDeps||e.customSignature?{eip712Meta:{...e.gasPerPubdata?{gasPerPubdata:re(e.gasPerPubdata)}:{gasPerPubdata:re(Ka)},...e.paymaster&&e.paymasterInput?{paymasterParams:{paymaster:e.paymaster,paymasterInput:Array.from(pr(e.paymasterInput))}}:{},...e.factoryDeps?{factoryDeps:e.factoryDeps.map(t=>Array.from(pr(t)))}:{},...e.customSignature?{customSignature:Array.from(pr(e.customSignature))}:{}},type:"0x71"}:{}}})};function nr(e,t="hex"){const r=sh(e),n=Pd(new Uint8Array(r.length));return r.encode(n),t==="hex"?on(n.bytes):n.bytes}function sh(e){return Array.isArray(e)?Xb(e.map(t=>sh(t))):ey(e)}function Xb(e){const t=e.reduce((s,i)=>s+i.length,0),r=ih(t);return{length:t<=55?1+t:1+r+t,encode(s){t<=55?s.pushByte(192+t):(s.pushByte(247+r),r===1?s.pushUint8(t):r===2?s.pushUint16(t):r===3?s.pushUint24(t):s.pushUint32(t));for(const{encode:i}of e)i(s)}}}function ey(e){const t=typeof e=="string"?pr(e):e,r=ih(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+r+t.length,encode(s){t.length===1&&t[0]<128?s.pushBytes(t):t.length<=55?(s.pushByte(128+t.length),s.pushBytes(t)):(s.pushByte(183+r),r===1?s.pushUint8(t.length):r===2?s.pushUint16(t.length):r===3?s.pushUint24(t.length):s.pushUint32(t.length),s.pushBytes(t))}}}function ih(e){if(e<2**8)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new ht("Length is too large.")}function ty(e){if(!e||e.length===0)return[];const t=[];for(const r of e){const{chainId:n,nonce:s,...i}=r,o=r.address;t.push([n?re(n):"0x",o,s?re(s):"0x",...dn({},i)])}return t}function oh(e){const{kzg:t}=e,r=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),n=typeof e.blobs[0]=="string"?e.blobs.map(i=>pr(i)):e.blobs,s=[];for(const i of n)s.push(Uint8Array.from(t.blobToKzgCommitment(i)));return r==="bytes"?s:s.map(i=>on(i))}function ah(e){const{kzg:t}=e,r=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),n=typeof e.blobs[0]=="string"?e.blobs.map(o=>pr(o)):e.blobs,s=typeof e.commitments[0]=="string"?e.commitments.map(o=>pr(o)):e.commitments,i=[];for(let o=0;o<n.length;o++){const a=n[o],c=s[o];i.push(Uint8Array.from(t.computeBlobKzgProof(a,c)))}return r==="bytes"?i:i.map(o=>on(o))}xd();function ch(e,t){const r=t||"hex",n=Uo(L0(e,{strict:!1})?Ns(e):e);return r==="bytes"?n:re(n)}function ry(e){const{commitment:t,version:r=1}=e,n=e.to??(typeof t=="string"?"hex":"bytes"),s=ch(t,"bytes");return s.set([r],0),n==="bytes"?s:on(s)}function ny(e){const{commitments:t,version:r}=e,n=e.to??(typeof t[0]=="string"?"hex":"bytes"),s=[];for(const i of t)s.push(ry({commitment:i,to:n,version:r}));return s}const pu=6,uh=32,Ga=4096,lh=uh*Ga,gu=lh*pu-1-1*Ga*pu,dh=1;var sy=class extends ht{constructor({maxSize:e,size:t}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`],name:"BlobSizeTooLargeError"})}},fh=class extends ht{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}},iy=class extends ht{constructor({hash:e,size:t}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${t}`],name:"InvalidVersionedHashSizeError"})}},oy=class extends ht{constructor({hash:e,version:t}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${dh}`,`Received: ${t}`],name:"InvalidVersionedHashVersionError"})}};function ay(e){const t=e.to??(typeof e.data=="string"?"hex":"bytes"),r=typeof e.data=="string"?pr(e.data):e.data,n=Td(r);if(!n)throw new fh;if(n>gu)throw new sy({maxSize:gu,size:n});const s=[];let i=!0,o=0;for(;i;){const a=Pd(new Uint8Array(lh));let c=0;for(;c<Ga;){const u=r.slice(o,o+(uh-1));if(a.pushByte(0),a.pushBytes(u),u.length<31){a.pushByte(128),i=!1;break}c++,o+=31}s.push(a)}return t==="bytes"?s.map(a=>a.bytes):s.map(a=>on(a.bytes))}function cy(e){const{data:t,kzg:r,to:n}=e,s=e.blobs??ay({data:t,to:n}),i=e.commitments??oh({blobs:s,kzg:r,to:n}),o=e.proofs??ah({blobs:s,commitments:i,kzg:r,to:n}),a=[];for(let c=0;c<s.length;c++)a.push({blob:s[c],commitment:i[c],proof:o[c]});return a}function uy(e){const{authorizationList:t}=e;if(t)for(const r of t){const{chainId:n}=r,s=r.address;if(!Pt(s))throw new Lt({address:s});if(n<0)throw new an({chainId:n})}ja(e)}function ly(e){const{blobVersionedHashes:t}=e;if(t){if(t.length===0)throw new fh;for(const r of t){const n=Td(r),s=Kn(W0(r,0,1));if(n!==32)throw new iy({hash:r,size:n});if(s!==dh)throw new oy({hash:r,version:s})}}ja(e)}function ja(e){const{chainId:t,maxPriorityFeePerGas:r,maxFeePerGas:n,to:s}=e;if(t<=0)throw new an({chainId:t});if(s&&!Pt(s))throw new Lt({address:s});if(n&&n>yi)throw new Ei({maxFeePerGas:n});if(r&&n&&r>n)throw new Bd({maxFeePerGas:n,maxPriorityFeePerGas:r})}function dy(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:s,to:i}=e;if(t<=0)throw new an({chainId:t});if(i&&!Pt(i))throw new Lt({address:i});if(r||s)throw new ht("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>yi)throw new Ei({maxFeePerGas:n})}function fy(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:s,to:i}=e;if(i&&!Pt(i))throw new Lt({address:i});if(typeof t<"u"&&t<=0)throw new an({chainId:t});if(r||s)throw new ht("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>yi)throw new Ei({maxFeePerGas:n})}function hy(e){if(e.type)return e.type;if(typeof e.authorizationList<"u")return"eip7702";if(typeof e.blobs<"u"||typeof e.blobVersionedHashes<"u"||typeof e.maxFeePerBlobGas<"u"||typeof e.sidecars<"u")return"eip4844";if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new U0({transaction:e})}function ns(e){if(!e||e.length===0)return[];const t=[];for(let r=0;r<e.length;r++){const{address:n,storageKeys:s}=e[r];for(let i=0;i<s.length;i++)if(s[i].length-2!==64)throw new V0({storageKey:s[i]});if(!Pt(n,{strict:!1}))throw new Lt({address:n});t.push([n,s])}return t}function hh(e,t){const r=hy(e);return r==="eip1559"?my(e,t):r==="eip2930"?by(e,t):r==="eip4844"?gy(e,t):r==="eip7702"?py(e,t):yy(e,t)}function py(e,t){const{authorizationList:r,chainId:n,gas:s,nonce:i,to:o,value:a,maxFeePerGas:c,maxPriorityFeePerGas:u,accessList:l,data:d}=e;uy(e);const h=ns(l),p=ty(r);return Mr(["0x04",nr([re(n),i?re(i):"0x",u?re(u):"0x",c?re(c):"0x",s?re(s):"0x",o??"0x",a?re(a):"0x",d??"0x",h,p,...dn(e,t)])])}function gy(e,t){const{chainId:r,gas:n,nonce:s,to:i,value:o,maxFeePerBlobGas:a,maxFeePerGas:c,maxPriorityFeePerGas:u,accessList:l,data:d}=e;ly(e);let h=e.blobVersionedHashes,p=e.sidecars;if(e.blobs&&(typeof h>"u"||typeof p>"u")){const O=typeof e.blobs[0]=="string"?e.blobs:e.blobs.map(U=>on(U)),N=e.kzg,B=oh({blobs:O,kzg:N});if(typeof h>"u"&&(h=ny({commitments:B})),typeof p>"u"){const U=ah({blobs:O,commitments:B,kzg:N});p=cy({blobs:O,commitments:B,proofs:U})}}const w=ns(l),m=[re(r),s?re(s):"0x",u?re(u):"0x",c?re(c):"0x",n?re(n):"0x",i??"0x",o?re(o):"0x",d??"0x",w,a?re(a):"0x",h??[],...dn(e,t)],E=[],y=[],P=[];if(p)for(let O=0;O<p.length;O++){const{blob:N,commitment:B,proof:U}=p[O];E.push(N),y.push(B),P.push(U)}return Mr(["0x03",nr(p?[m,E,y,P]:m)])}function my(e,t){const{chainId:r,gas:n,nonce:s,to:i,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:u,data:l}=e;ja(e);const d=ns(u),h=[re(r),s?re(s):"0x",c?re(c):"0x",a?re(a):"0x",n?re(n):"0x",i??"0x",o?re(o):"0x",l??"0x",d,...dn(e,t)];return Mr(["0x02",nr(h)])}function by(e,t){const{chainId:r,gas:n,data:s,nonce:i,to:o,value:a,accessList:c,gasPrice:u}=e;dy(e);const l=ns(c),d=[re(r),i?re(i):"0x",u?re(u):"0x",n?re(n):"0x",o??"0x",a?re(a):"0x",s??"0x",l,...dn(e,t)];return Mr(["0x01",nr(d)])}function yy(e,t){const{chainId:r=0,gas:n,data:s,nonce:i,to:o,value:a,gasPrice:c}=e;fy(e);let u=[i?re(i):"0x",c?re(c):"0x",n?re(n):"0x",o??"0x",a?re(a):"0x",s??"0x"];if(t){const l=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(t.v===35n?0n:1n);if(r>0)return BigInt(r*2)+BigInt(35n+t.v-27n);const p=27n+(t.v===27n?0n:1n);if(t.v!==p)throw new M0({v:t.v});return p})(),d=rn(t.r),h=rn(t.s);u=[...u,re(l),d==="0x00"?"0x":d,h==="0x00"?"0x":h]}else r>0&&(u=[...u,re(r),"0x","0x"]);return nr(u)}function dn(e,t){const r=t??e,{v:n,yParity:s}=r;if(typeof r.r>"u")return[];if(typeof r.s>"u")return[];if(typeof n>"u"&&typeof s>"u")return[];const i=rn(r.r),o=rn(r.s);return[typeof s=="number"?s?re(1):"0x":n===0n?"0x":n===1n?re(1):n===27n?"0x":re(1),i==="0x00"?"0x":i,o==="0x00"?"0x":o]}var Ey=class extends ht{constructor(){super(["Transaction is not an EIP712 transaction.","","Transaction must:",'  - include `type: "eip712"`',"  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`"].join(`
`),{name:"InvalidEip712TransactionError"})}};function ph(e){return!!(e.type==="eip712"||"customSignature"in e&&e.customSignature||"paymaster"in e&&e.paymaster||"paymasterInput"in e&&e.paymasterInput||"gasPerPubdata"in e&&typeof e.gasPerPubdata=="bigint"||"factoryDeps"in e&&e.factoryDeps)}function gh(e){const{chainId:t,to:r,from:n,paymaster:s,paymasterInput:i}=e;if(!ph(e))throw new Ey;if(!t||t<=0)throw new an({chainId:t});if(r&&!Pt(r))throw new Lt({address:r});if(n&&!Pt(n))throw new Lt({address:n});if(s&&!Pt(s))throw new Lt({address:s});if(s&&!i)throw new ht("`paymasterInput` must be provided when `paymaster` is defined");if(!s&&i)throw new ht("`paymaster` must be provided when `paymasterInput` is defined")}function wy(e,t){return ph(e)?Ay(e):hh(e,t)}const vy={transaction:wy};function Ay(e){const{chainId:t,gas:r,nonce:n,to:s,from:i,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,customSignature:u,factoryDeps:l,paymaster:d,paymasterInput:h,gasPerPubdata:p,data:w}=e;gh(e);const m=[n?re(n):"0x",c?re(c):"0x",a?re(a):"0x",r?re(r):"0x",s??"0x",o?re(o):"0x",w??"0x",re(t),re(""),re(""),re(t),i??"0x",p?re(p):re(Ka),l??[],u??"0x",d&&h?[d,h]:[]];return Mr(["0x71",nr(m)])}var ky=class extends ht{constructor({givenLength:e,maxBytecodeSize:t}){super(`Bytecode cannot be longer than ${t} bytes. Given length: ${e}`,{name:"BytecodeLengthExceedsMaxSizeError"})}},Sy=class extends ht{constructor({givenLengthInWords:e}){super(`Bytecode length in 32-byte words must be odd. Given length in words: ${e}`,{name:"BytecodeLengthInWordsMustBeOddError"})}},_y=class extends ht{constructor({givenLength:e}){super(`The bytecode length in bytes must be divisible by 32. Given length: ${e}`,{name:"BytecodeLengthMustBeDivisibleBy32Error"})}};function Iy(e){const t=Ns(e);if(t.length%32!==0)throw new _y({givenLength:t.length});if(t.length>hu)throw new ky({givenLength:t.length,maxBytecodeSize:hu});const r=ch(t),n=Ns(r),s=t.length/32;if(s%2===0)throw new Sy({givenLengthInWords:s});const i=Ns(s),o=F0(i,{size:2}),a=new Uint8Array([1,0]);return n.set(a,0),n.set(o,2),n}const Ty=e=>{gh(e);const t=Py(e);return{domain:{name:"zkSync",version:"2",chainId:e.chainId},types:{Transaction:[{name:"txType",type:"uint256"},{name:"from",type:"uint256"},{name:"to",type:"uint256"},{name:"gasLimit",type:"uint256"},{name:"gasPerPubdataByteLimit",type:"uint256"},{name:"maxFeePerGas",type:"uint256"},{name:"maxPriorityFeePerGas",type:"uint256"},{name:"paymaster",type:"uint256"},{name:"nonce",type:"uint256"},{name:"value",type:"uint256"},{name:"data",type:"bytes"},{name:"factoryDeps",type:"bytes32[]"},{name:"paymasterInput",type:"bytes"}]},primaryType:"Transaction",message:t}};function Py(e){const{gas:t,nonce:r,to:n,from:s,value:i,maxFeePerGas:o,maxPriorityFeePerGas:a,factoryDeps:c,paymaster:u,paymasterInput:l,gasPerPubdata:d,data:h}=e;return{txType:113n,from:BigInt(s),to:n?BigInt(n):0n,gasLimit:t??0n,gasPerPubdataByteLimit:d??Ka,maxFeePerGas:o??0n,maxPriorityFeePerGas:a??0n,paymaster:u?BigInt(u):0n,nonce:r?BigInt(r):0n,value:i??0n,data:h??"0x",factoryDeps:(c==null?void 0:c.map(p=>re(Iy(p))))??[],paymasterInput:l||"0x"}}const Cy={formatters:nh,serializers:vy,custom:{getEip712Domain:Ty}},mh={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},By={block:Ha({format(e){var t;return{transactions:(t=e.transactions)===null||t===void 0?void 0:t.map(n=>{if(typeof n=="string")return n;const s=Ii(n);return s.typeHex==="0x7e"&&(s.isSystemTx=n.isSystemTx,s.mint=n.mint?qe(n.mint):void 0,s.sourceHash=n.sourceHash,s.type="deposit"),s}),stateRoot:e.stateRoot}}}),transaction:qa({format(e){const t={};return e.type==="0x7e"&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?qe(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:rh({format(e){return{l1GasPrice:e.l1GasPrice?qe(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?qe(e.l1GasUsed):null,l1Fee:e.l1Fee?qe(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null}}})};function bh(e,t){return Oy(e)?Ry(e):hh(e,t)}const Dy={transaction:bh};function Ry(e){xy(e);const{sourceHash:t,data:r,from:n,gas:s,isSystemTx:i,mint:o,to:a,value:c}=e,u=[t,n,a??"0x",o?re(o):"0x",c?re(c):"0x",s?re(s):"0x",i?"0x1":"0x",r??"0x"];return Mr(["0x7e",nr(u)])}function Oy(e){return e.type==="deposit"||typeof e.sourceHash<"u"}function xy(e){const{from:t,to:r}=e;if(t&&!Pt(t))throw new Lt({address:t});if(r&&!Pt(r))throw new Lt({address:r})}const Ct={contracts:mh,formatters:By,serializers:Dy},Ny=vt({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),Ly=vt({id:43114,name:"Avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{default:{name:"SnowTrace",url:"https://snowtrace.io",apiUrl:"https://api.snowtrace.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:11907934}}}),En=1,Fy=vt({...Ct,id:8453,name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://basescan.org",apiUrl:"https://api.basescan.org/api"}},contracts:{...Ct.contracts,disputeGameFactory:{[En]:{address:"0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"}},l2OutputOracle:{[En]:{address:"0x56315b90c40730925ec5485cf004d835058518A0"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022},portal:{[En]:{address:"0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",blockCreated:17482143}},l1StandardBridge:{[En]:{address:"0x3154Cf16ccdb4C6d922629664174b904d80F2C35",blockCreated:17482143}}},sourceId:En}),My=1,Uy=vt({...Ct,id:81457,name:"Blast",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.blast.io"]}},blockExplorers:{default:{name:"Blastscan",url:"https://blastscan.io",apiUrl:"https://api.blastscan.io/api"}},contracts:{...Ct.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:212929}},sourceId:My}),Vy=vt({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://56.rpc.thirdweb.com"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}),zy={estimateFeesPerGas:async e=>{var t;if(!(!((t=e.request)===null||t===void 0)&&t.feeCurrency))return null;const[r,n]=await Promise.all([Wy(e.client,e.request.feeCurrency),qy(e.client,e.request.feeCurrency)]);return{maxFeePerGas:e.multiply(r-n)+n,maxPriorityFeePerGas:n}}};async function Wy(e,t){const r=await e.request({method:"eth_gasPrice",params:[t]});return BigInt(r)}async function qy(e,t){const r=await e.request({method:"eth_maxPriorityFeePerGas",params:[t]});return BigInt(r)}function yh(e){return e===0||e===0n||e===void 0||e===null||e==="0"||e===""||typeof e=="string"&&(rn(e).toLowerCase()==="0x"||rn(e).toLowerCase()==="0x00")}function Dn(e){return!yh(e)}function Hy(e){return typeof e.maxFeePerGas<"u"&&typeof e.maxPriorityFeePerGas<"u"}function Eh(e){return e.type==="cip64"?!0:Hy(e)&&Dn(e.feeCurrency)}const Ky={block:Ha({format(e){var t;return{transactions:(t=e.transactions)===null||t===void 0?void 0:t.map(n=>typeof n=="string"?n:{...Ii(n),...n.gatewayFee?{gatewayFee:qe(n.gatewayFee),gatewayFeeRecipient:n.gatewayFeeRecipient}:{},feeCurrency:n.feeCurrency})}}}),transaction:qa({format(e){if(e.type==="0x7e")return{isSystemTx:e.isSystemTx,mint:e.mint?qe(e.mint):void 0,sourceHash:e.sourceHash,type:"deposit"};const t={feeCurrency:e.feeCurrency};return e.type==="0x7b"?t.type="cip64":(e.type==="0x7c"&&(t.type="cip42"),t.gatewayFee=e.gatewayFee?qe(e.gatewayFee):null,t.gatewayFeeRecipient=e.gatewayFeeRecipient),t}}),transactionRequest:Cd({format(e){const t={};return e.feeCurrency&&(t.feeCurrency=e.feeCurrency),Eh(e)&&(t.type="0x7b"),t}})};function Gy(e,t){return Eh(e)?$y(e,t):bh(e,t)}const jy={transaction:Gy};function $y(e,t){Qy(e);const{chainId:r,gas:n,nonce:s,to:i,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:u,feeCurrency:l,data:d}=e,h=[re(r),s?re(s):"0x",c?re(c):"0x",a?re(a):"0x",n?re(n):"0x",i??"0x",o?re(o):"0x",d??"0x",ns(u),l,...dn(e,t)];return Mr(["0x7b",nr(h)])}const Yy=yi;function Qy(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:s,to:i,feeCurrency:o}=e;if(t<=0)throw new an({chainId:t});if(i&&!Pt(i))throw new Lt({address:i});if(n)throw new ht("`gasPrice` is not a valid CIP-64 Transaction attribute.");if(Dn(s)&&s>Yy)throw new Ei({maxFeePerGas:s});if(Dn(r)&&Dn(s)&&r>s)throw new Bd({maxFeePerGas:s,maxPriorityFeePerGas:r});if(Dn(o)&&!Pt(o))throw new ht("`feeCurrency` MUST be a token address for CIP-64 transactions.");if(yh(o))throw new ht("`feeCurrency` must be provided for CIP-64 transactions.")}const Zy={contracts:mh,formatters:Ky,serializers:jy,fees:zy},Jy=vt({...Zy,id:42220,name:"Celo",nativeCurrency:{decimals:18,name:"CELO",symbol:"CELO"},rpcUrls:{default:{http:["https://forno.celo.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://celoscan.io",apiUrl:"https://api.celoscan.io/api"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:13112599}},testnet:!1}),Xy=vt({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://eth.merkle.io"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),wn=1,e1=vt({...Ct,id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.optimism.io"]}},blockExplorers:{default:{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io/api"}},contracts:{...Ct.contracts,disputeGameFactory:{[wn]:{address:"0xe5965Ab5962eDc7477C8520243A95517CD252fA9"}},l2OutputOracle:{[wn]:{address:"0xdfe97868233d1aa22e815a266982f2cf17685a27"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263},portal:{[wn]:{address:"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"}},l1StandardBridge:{[wn]:{address:"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"}}},sourceId:wn}),t1=vt({id:137,name:"Polygon",nativeCurrency:{name:"POL",symbol:"POL",decimals:18},rpcUrls:{default:{http:["https://polygon-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://polygonscan.com",apiUrl:"https://api.polygonscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}}),r1=vt({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia.drpc.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0}),vn=1,n1=vt({...Ct,id:1868,name:"Soneium Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.soneium.org"]}},blockExplorers:{default:{name:"Blockscout",url:"https://soneium.blockscout.com",apiUrl:"https://soneium.blockscout.com/api"}},contracts:{...Ct.contracts,disputeGameFactory:{[vn]:{address:"0x512a3d2c7a43bd9261d2b8e8c9c70d4bd4d503c0"}},l2OutputOracle:{[vn]:{address:"0x0000000000000000000000000000000000000000"}},portal:{[vn]:{address:"0x88e529a6ccd302c948689cd5156c83d4614fae92",blockCreated:7061266}},l1StandardBridge:{[vn]:{address:"0xeb9bf100225c214efc3e7c651ebbadcf85177607",blockCreated:7061266}},multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:1}},sourceId:vn}),ys=11155111,s1=vt({...Ct,id:1301,name:"Unichain Sepolia",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia.unichain.org"]}},blockExplorers:{default:{name:"Uniscan",url:"https://sepolia.uniscan.xyz",apiUrl:"https://api-sepolia.uniscan.xyz/api"}},contracts:{...Ct.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0},portal:{[ys]:{address:"0x0d83dab629f0e0F9d36c0Cbc89B69a489f0751bD"}},l1StandardBridge:{[ys]:{address:"0xea58fcA6849d79EAd1f26608855c2D6407d54Ce2"}},disputeGameFactory:{[ys]:{address:"0xeff73e5aa3B9AEC32c659Aa3E00444d20a84394b"}}},testnet:!0,sourceId:ys}),i1=vt({...Cy,id:324,name:"ZKsync Era",network:"zksync-era",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://mainnet.era.zksync.io"],webSocket:["wss://mainnet.era.zksync.io/ws"]}},blockExplorers:{default:{name:"Etherscan",url:"https://era.zksync.network/",apiUrl:"https://api-era.zksync.network/api"},native:{name:"ZKsync Explorer",url:"https://explorer.zksync.io/",apiUrl:"https://block-explorer-api.mainnet.zksync.io/api"}},contracts:{multicall3:{address:"0xF9cda624FBC7e059355ce98a31693d299FACd963"},universalSignatureVerifier:{address:"0xfB688330379976DA81eB64Fe4BF50d7401763B9C",blockCreated:45659388}}}),Es=1,o1=vt({...Ct,id:7777777,name:"Zora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.zora.energy",apiUrl:"https://explorer.zora.energy/api"}},contracts:{...Ct.contracts,l2OutputOracle:{[Es]:{address:"0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"}},multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:5882},portal:{[Es]:{address:"0x1a0ad011913A150f69f6A19DF447A0CfD9551054"}},l1StandardBridge:{[Es]:{address:"0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"}}},sourceId:Es}),a1=nt({stables:{USDC:Bt("0xaf88d065e77c8cC2239327C5EDb3A432268e5831",D.ArbitrumOne),USDT:ln("0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",D.ArbitrumOne),DAI:_i("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",D.ArbitrumOne)}}),wh={...Ny,id:D.ArbitrumOne,platform:He.EVM,assetRepoNetworkName:"arbitrum",backendChain:{chain:pe.Arbitrum,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:46,blockWaitMsBeforeWarning:Zf,bridge:"https://bridge.arbitrum.io/",docs:"https://offchainlabs.com/",elementName:rt.ChainArbitrum,explorer:{name:"Arbiscan",url:"https://arbiscan.io/",apiURL:"https://api.arbiscan.io"},interfaceName:"arbitrum",label:"Arbitrum",logo:m0,nativeCurrency:{name:"Arbitrum ETH",symbol:"ETH",decimals:18,address:mt,explorerLink:"https://arbiscan.io/chart/etherprice",logo:Ft},networkLayer:Qe.L2,pendingTransactionsRetryOptions:rs,tokens:a1,statusPage:void 0,supportsV4:!0,urlParam:"arbitrum",rpcUrls:{[Z.Public]:{http:[_e(D.ArbitrumOne)]},[Z.Default]:{http:["https://arb1.arbitrum.io/rpc"]},[Z.Fallback]:{http:["https://arbitrum.public-rpc.com"]},[Z.Interface]:{http:[`https://arbitrum-mainnet.infura.io/v3/${It.infuraKey}`,_e(D.ArbitrumOne)]},[Z.PublicAlt]:{http:["https://arb1.arbitrum.io/rpc"]}},wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x82af49447d8a07e3bd95bd0d56f35241523fbab1"},tradingApiPollingIntervalMs:150};br();const c1=nt({stables:{USDC:Bt("0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",D.Avalanche),USDT:ln("0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",D.Avalanche),DAI:new me(D.Avalanche,"0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",18,"DAI.e","Dai.e Token")}}),vh={...Ly,id:D.Avalanche,platform:He.EVM,assetRepoNetworkName:"avalanchec",backendChain:{chain:pe.Avalanche,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:6,blockWaitMsBeforeWarning:6e5,bridge:"https://core.app/bridge/",docs:"https://docs.avax.network/",elementName:rt.ChainAvalanche,explorer:{name:"Snowtrace",url:"https://snowtrace.io/",apiURL:"https://api.snowscan.xyz"},interfaceName:"avalanche",label:"Avalanche",logo:oc,name:"Avalanche C-Chain",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18,address:mt,logo:oc},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.Avalanche)]},[Z.Default]:{http:["https://api.avax.network/ext/bc/C/rpc"]},[Z.Interface]:{http:[`https://avalanche-mainnet.infura.io/v3/${It.infuraKey}`]}},tokens:c1,statusPage:void 0,supportsV4:!0,urlParam:"avalanche",wrappedNativeCurrency:{name:"Wrapped AVAX",symbol:"WAVAX",decimals:18,address:"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"},tradingApiPollingIntervalMs:200},u1=nt({stables:{USDC:Bt("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",D.Base)}}),l1="http://127.0.0.1:8546",Ah={...Fy,id:D.Base,platform:He.EVM,backendChain:{chain:pe.Base,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:6,blockWaitMsBeforeWarning:bi?15e5:6e5,bridge:"https://bridge.base.org/deposit",docs:"https://docs.base.org/docs/",elementName:rt.ChainBase,explorer:{name:"BaseScan",url:"https://basescan.org/",apiURL:"https://api.basescan.org"},interfaceName:"base",label:"Base",logo:b0,nativeCurrency:{name:"Base ETH",symbol:"ETH",decimals:18,address:mt,explorerLink:"https://basescan.org/chart/etherprice",logo:Ft},networkLayer:Qe.L2,pendingTransactionsRetryOptions:rs,statusPage:"https://status.base.org/",supportsV4:!0,urlParam:"base",rpcUrls:Sd()?Jf(l1):{[Z.Public]:{http:[_e(D.Base)]},[Z.Default]:{http:["https://mainnet.base.org/"]},[Z.Fallback]:{http:["https://1rpc.io/base","https://base.meowrpc.com"]},[Z.Interface]:{http:[`https://base-mainnet.infura.io/v3/${It.infuraKey}`]}},assetRepoNetworkName:"base",tokens:u1,wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4200000000000000000000000000000000000006"},tradingApiPollingIntervalMs:150};br();const d1=nt({stables:{USDB:new me(D.Blast,"0x4300000000000000000000000000000000000003",18,"USDB","USDB")}}),kh={...Uy,id:D.Blast,platform:He.EVM,assetRepoNetworkName:"blast",backendChain:{chain:pe.Blast,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:1,blockWaitMsBeforeWarning:void 0,bridge:"https://blast.io/bridge",docs:"https://docs.blast.io",elementName:rt.ChainBlast,explorer:{name:"BlastScan",url:"https://blastscan.io/",apiURL:"https://api.blastscan.io"},interfaceName:"blast",label:"Blast",logo:y0,networkLayer:Qe.L2,pendingTransactionsRetryOptions:rs,tokens:d1,statusPage:void 0,supportsV4:!0,urlParam:"blast",nativeCurrency:{name:"Blast ETH",symbol:"ETH",decimals:18,address:mt,logo:Ft},rpcUrls:{[Z.Public]:{http:[_e(D.Blast)]},[Z.Default]:{http:["https://rpc.blast.io/"]},[Z.Interface]:{http:[`https://blast-mainnet.infura.io/v3/${It.infuraKey}`]}},wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4300000000000000000000000000000000000004"},tradingApiPollingIntervalMs:200};br();const mu=nt({stables:{USDC:new me(D.Bnb,"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",18,"USDC","USD Coin"),USDT:new me(D.Bnb,"0x55d398326f99059ff775485246999027b3197955",18,"USDT","Tether USD")}}),Sh={...Vy,id:D.Bnb,platform:He.EVM,assetRepoNetworkName:"smartchain",backendChain:{chain:pe.Bnb,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:4,blockWaitMsBeforeWarning:6e5,bridge:"https://cbridge.celer.network/1/56",docs:"https://docs.bnbchain.org/",elementName:rt.ChainBNB,explorer:{name:"BscScan",url:"https://bscscan.com/",apiURL:"https://api.bscscan.com"},interfaceName:"bnb",label:"BNB Chain",logo:ac,name:"BNB Smart Chain Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18,address:mt,logo:ac},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.Bnb)]},[Z.Default]:{http:["https://bsc-dataseed1.bnbchain.org"]},[Z.Interface]:{http:[_e(D.Bnb)]}},spotPriceStablecoinAmountOverride:sn.fromRawAmount(mu.USDC,1e20),tokens:mu,statusPage:void 0,supportsV4:!0,urlParam:"bnb",wrappedNativeCurrency:{name:"Wrapped BNB",symbol:"WBNB",decimals:18,address:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},tradingApiPollingIntervalMs:200},f1=nt({stables:{USDC:Bt("0xceba9300f2b948710d2653dd7b07f33a8b32118c",D.Celo)}}),_h={...Jy,id:D.Celo,platform:He.EVM,assetRepoNetworkName:"celo",backendChain:{chain:pe.Celo,backendSupported:!0,nativeTokenBackendAddress:"0x471EcE3750Da237f93B8E339c536989b8978a438"},blockPerMainnetEpochForChainId:2,blockWaitMsBeforeWarning:6e5,bridge:"https://www.portalbridge.com/#/transfer",docs:"https://docs.celo.org/",elementName:rt.ChainCelo,explorer:{name:"Celoscan",url:"https://celoscan.io/",apiURL:"https://api.celoscan.io"},interfaceName:"celo",label:"Celo",logo:cc,name:"Celo Mainnet",nativeCurrency:{name:"Celo",symbol:"CELO",decimals:18,address:"0x471EcE3750Da237f93B8E339c536989b8978a438",logo:cc},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,tokens:f1,statusPage:void 0,supportsV4:!1,urlParam:"celo",rpcUrls:{[Z.Public]:{http:[_e(D.Celo)]},[Z.Default]:{http:["https://forno.celo.org"]},[Z.Interface]:{http:[`https://celo-mainnet.infura.io/v3/${It.infuraKey}`]}},wrappedNativeCurrency:{name:"Celo",symbol:"CELO",decimals:18,address:"0x471EcE3750Da237f93B8E339c536989b8978a438"},tradingApiPollingIntervalMs:200};br();const bu=nt({stables:{USDC:Bt("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",D.Mainnet),USDT:ln("0xdAC17F958D2ee523a2206206994597C13D831ec7",D.Mainnet),DAI:_i("0x6B175474E89094C44Da98b954EedeAC495271d0F",D.Mainnet)}}),h1="http://127.0.0.1:8545",Ih={...Xy,id:D.Mainnet,platform:He.EVM,assetRepoNetworkName:"ethereum",backendChain:{chain:pe.Ethereum,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:1,blockWaitMsBeforeWarning:bi?Zf:oi,bridge:void 0,docs:"https://docs.uniswap.org/",elementName:rt.ChainEthereum,explorer:{name:"Etherscan",url:"https://etherscan.io/",apiURL:"https://api.etherscan.io"},interfaceName:"mainnet",label:"Ethereum",logo:Ba,nativeCurrency:{name:"Ethereum",symbol:"ETH",decimals:18,address:mt,explorerLink:"https://etherscan.io/chart/etherprice",logo:Ft},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,rpcUrls:Sd()?Jf(h1):{[Z.Private]:{http:["https://rpc.mevblocker.io/?referrer=uniswapwallet"]},[Z.Public]:{http:[_e(D.Mainnet)]},[Z.Default]:{http:[_e(D.Mainnet)]},[Z.Fallback]:{http:["https://rpc.ankr.com/eth","https://eth-mainnet.public.blastapi.io"]},[Z.Interface]:{http:[`https://mainnet.infura.io/v3/${It.infuraKey}`,_e(D.Mainnet)]}},urlParam:"ethereum",statusPage:void 0,spotPriceStablecoinAmountOverride:sn.fromRawAmount(bu.USDC,1e11),tokens:bu,supportsV4:!0,wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},tradingApiPollingIntervalMs:500},yu=nt({stables:{USDC:Bt("0x1c7d4b196cb0c7b01d743fbc6116a902379c7238",D.Sepolia)}}),Th={...r1,id:D.Sepolia,platform:He.EVM,assetRepoNetworkName:void 0,backendChain:{chain:pe.EthereumSepolia,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:1,blockWaitMsBeforeWarning:void 0,bridge:void 0,docs:"https://docs.uniswap.org/",elementName:rt.ChainSepolia,explorer:{name:"Etherscan",url:"https://sepolia.etherscan.io/",apiURL:"https://api-sepolia.etherscan.io"},interfaceName:"sepolia",label:"Sepolia",logo:Ba,nativeCurrency:{name:"Ethereum",symbol:"ETH",decimals:18,address:mt,explorerLink:"https://sepolia.etherscan.io/chart/etherprice",logo:Ft},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.Sepolia)]},[Z.Default]:{http:["https://rpc.sepolia.org/"]},[Z.Fallback]:{http:["https://rpc.sepolia.org/","https://rpc2.sepolia.org/","https://rpc.sepolia.online/","https://www.sepoliarpc.space/","https://rpc-sepolia.rockx.com/","https://rpc.bordel.wtf/sepolia"]},[Z.Interface]:{http:[`https://sepolia.infura.io/v3/${It.infuraKey}`]}},spotPriceStablecoinAmountOverride:sn.fromRawAmount(yu.USDC,1e8),tokens:yu,statusPage:void 0,supportsV4:!0,urlParam:"ethereum_sepolia",wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0xfff9976782d46cc05630d1f6ebab18b2324d6b14"},tradingApiPollingIntervalMs:500},p1=nt({stables:{USDT:ln("0xfBC2D240A5eD44231AcA3A9e9066bc4b33f01149",D.MonadTestnet)}}),Ph={id:D.MonadTestnet,platform:He.EVM,testnet:!0,assetRepoNetworkName:void 0,backendChain:{chain:pe.MonadTestnet,backendSupported:!0,nativeTokenBackendAddress:void 0},bridge:void 0,docs:"https://docs.monad.xyz/",label:"Monad Testnet",logo:uc,name:"Monad Testnet",nativeCurrency:{name:"Monad",symbol:"MON",decimals:18,address:mt,logo:uc},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,statusPage:void 0,supportsV4:!1,urlParam:"monad_testnet",rpcUrls:{[Z.Public]:{http:[_e(D.MonadTestnet)]},[Z.Default]:{http:[_e(D.MonadTestnet)]},[Z.Interface]:{http:[_e(D.MonadTestnet)]}},wrappedNativeCurrency:{name:"Wrapped Monad",symbol:"WMON",decimals:18,address:"0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701"},blockPerMainnetEpochForChainId:1,blockWaitMsBeforeWarning:void 0,elementName:rt.ChainMonadTestnet,explorer:{name:"Monad Explorer",url:"https://testnet.monadexplorer.com/"},interfaceName:"monad",tokens:p1,tradingApiPollingIntervalMs:200},g1=nt({stables:{USDC:Bt("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",D.Optimism),USDT:ln("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",D.Optimism),DAI:_i("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",D.Optimism)}}),Ch={...e1,id:D.Optimism,platform:He.EVM,assetRepoNetworkName:"optimism",backendChain:{chain:pe.Optimism,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:6,blockWaitMsBeforeWarning:bi?15e5:12e5,bridge:"https://app.optimism.io/bridge",docs:"https://optimism.io/",elementName:rt.ChainOptimism,explorer:{name:"OP Etherscan",url:"https://optimistic.etherscan.io/",apiURL:"https://api-optimistic.etherscan.io"},interfaceName:"optimism",label:"OP Mainnet",logo:E0,nativeCurrency:{name:"Optimistic ETH",symbol:"ETH",decimals:18,address:mt,explorerLink:"https://optimistic.etherscan.io/chart/etherprice",logo:Ft},networkLayer:Qe.L2,pendingTransactionsRetryOptions:rs,rpcUrls:{[Z.Public]:{http:[_e(D.Optimism)]},[Z.PublicAlt]:{http:["https://mainnet.optimism.io"]},[Z.Default]:{http:["https://mainnet.optimism.io/"]},[Z.Fallback]:{http:["https://rpc.ankr.com/optimism"]},[Z.Interface]:{http:[`https://optimism-mainnet.infura.io/v3/${It.infuraKey}`]}},tokens:g1,statusPage:"https://optimism.io/status",supportsV4:!0,urlParam:"optimism",wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4200000000000000000000000000000000000006"},tradingApiPollingIntervalMs:200},m1=nt({stables:{USDC:Bt("0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",D.Polygon),USDT:ln("0xc2132d05d31c914a87c6611c10748aeb04b58e8f",D.Polygon),DAI:_i("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",D.Polygon)}}),Bh={...t1,id:D.Polygon,platform:He.EVM,assetRepoNetworkName:"polygon",blockPerMainnetEpochForChainId:5,backendChain:{chain:pe.Polygon,backendSupported:!0,nativeTokenBackendAddress:"0x0000000000000000000000000000000000001010"},blockWaitMsBeforeWarning:6e5,bridge:"https://portal.polygon.technology/bridge",docs:"https://polygon.io/",elementName:rt.ChainPolygon,explorer:{name:"PolygonScan",url:"https://polygonscan.com/",apiURL:"https://api.polygonscan.com"},interfaceName:"polygon",label:"Polygon",logo:lc,name:"Polygon Mainnet",nativeCurrency:{name:"Polygon POL",symbol:"POL",decimals:18,address:"0x0000000000000000000000000000000000001010",logo:lc},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.Polygon)]},[Z.PublicAlt]:{http:["https://polygon-rpc.com/"]},[Z.Default]:{http:["https://polygon-rpc.com/"]},[Z.Interface]:{http:[`https://polygon-mainnet.infura.io/v3/${It.infuraKey}`]}},tokens:m1,statusPage:void 0,supportsV4:!0,urlParam:"polygon",wrappedNativeCurrency:{name:"Wrapped POL",symbol:"WPOL",decimals:18,address:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"},tradingApiPollingIntervalMs:250};br();const b1=nt({stables:{USDC:new me(D.Soneium,"0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369",6,"USDCE","Soneium Bridged USDC")}}),Dh={...n1,id:D.Soneium,platform:He.EVM,assetRepoNetworkName:"soneium",backendChain:{chain:pe.Soneium,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:6,blockWaitMsBeforeWarning:bi?15e5:12e5,bridge:"https://superbridge.app/soneium",docs:"https://docs.soneium.org/",elementName:rt.ChainSoneium,explorer:{name:"Blockscout",url:"https://soneium.blockscout.com/",apiURL:"https://soneium.blockscout.com/api"},interfaceName:"soneium",label:"Soneium",logo:w0,nativeCurrency:{name:"Soneium ETH",symbol:"ETH",decimals:18,address:mt,logo:Ft},networkLayer:Qe.L2,pendingTransactionsRetryOptions:rs,rpcUrls:{[Z.Public]:{http:[`https://soneium-mainnet.g.alchemy.com/v2/${It.alchemyApiKey}`]},[Z.Default]:{http:["https://rpc.soneium.org"]},[Z.Interface]:{http:[`https://soneium-mainnet.g.alchemy.com/v2/${It.alchemyApiKey}`]}},tokens:b1,statusPage:"https://status.soneium.org/",supportsV4:!0,urlParam:"soneium",wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4200000000000000000000000000000000000006"},tradingApiPollingIntervalMs:250},y1=nt({stables:{USDC:Bt("0x078D782b760474a361dDA0AF3839290b0EF57AD6",D.Unichain)}}),Rh={name:"Unichain",id:D.Unichain,platform:He.EVM,assetRepoNetworkName:"unichain",backendChain:{chain:pe.Unichain,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:6,blockWaitMsBeforeWarning:void 0,bridge:"https://www.unichain.org/bridge",docs:"https://docs.unichain.org",elementName:rt.ChainUnichain,explorer:{name:"Unichain Explorer",url:"https://uniscan.xyz/"},interfaceName:"unichain",label:"Unichain",logo:v0,nativeCurrency:{name:"Unichain ETH",symbol:"ETH",decimals:18,address:mt,logo:Ba},networkLayer:Qe.L2,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.Unichain)]},[Z.Default]:{http:["https://mainnet.unichain.org"]},[Z.Interface]:{http:[_e(D.Unichain)]}},tokens:y1,statusPage:void 0,subblockTimeMs:200,supportsV4:!0,urlParam:"unichain",wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4200000000000000000000000000000000000006"},testnet:!1,tradingApiPollingIntervalMs:150},E1=nt({stables:{USDC:Bt("0x31d0220469e10c4E71834a79b1f276d740d3768F",D.UnichainSepolia)}}),Oh={...s1,name:"Unichain Sepolia",testnet:!0,id:D.UnichainSepolia,platform:He.EVM,assetRepoNetworkName:void 0,backendChain:{chain:pe.AstrochainSepolia,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:1,blockWaitMsBeforeWarning:void 0,bridge:void 0,docs:"https://docs.unichain.org/",elementName:rt.ChainUnichainSepolia,explorer:{name:"Unichain Sepolia Explorer",url:"https://unichain-sepolia.blockscout.com/"},interfaceName:"astrochain",label:"Unichain Sepolia",logo:A0,nativeCurrency:{name:"Unichain Sepolia ETH",symbol:"ETH",decimals:18,address:mt,logo:Ft},networkLayer:Qe.L2,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.UnichainSepolia)]},[Z.Default]:{http:[_e(D.UnichainSepolia)]},[Z.Interface]:{http:[_e(D.UnichainSepolia)]}},tokens:E1,statusPage:void 0,subblockTimeMs:200,supportsV4:!0,urlParam:"unichain_sepolia",wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4200000000000000000000000000000000000006"},tradingApiPollingIntervalMs:150};br();const w1=nt({stables:{USDC:new me(D.WorldChain,"0x79A02482A880bCE3F13e09Da970dC34db4CD24d1",6,"USDC.e","Bridged USDC")}}),xh={name:"World Chain",id:D.WorldChain,platform:He.EVM,assetRepoNetworkName:"worldcoin",backendChain:{chain:pe.Worldchain,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:1,blockWaitMsBeforeWarning:void 0,bridge:"https://world-chain.superbridge.app/app",docs:"https://docs.worldcoin.org/",elementName:rt.ChainWorldChain,explorer:{name:"World Chain Mainnet Explorer",url:"https://worldscan.org/"},interfaceName:"worldchain",label:"World Chain",logo:k0,nativeCurrency:{name:"World Chain ETH",symbol:"ETH",decimals:18,address:mt,logo:Ft},networkLayer:Qe.L2,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.WorldChain)]},[Z.Default]:{http:["https://worldchain-mainnet.g.alchemy.com/public"]},[Z.Interface]:{http:[_e(D.WorldChain)]}},urlParam:"worldchain",statusPage:void 0,tokens:w1,supportsV4:!0,wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4200000000000000000000000000000000000006"},testnet:!1,tradingApiPollingIntervalMs:250},v1=nt({stables:{USDC:Bt("0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",D.Zksync)}}),Nh={...i1,id:D.Zksync,platform:He.EVM,assetRepoNetworkName:"zksync",backendChain:{chain:pe.Zksync,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:12,blockWaitMsBeforeWarning:6e5,bridge:"https://portal.zksync.io/bridge/",docs:"https://docs.zksync.io/",elementName:rt.ChainZkSync,explorer:{name:"ZKsync Explorer",url:"https://explorer.zksync.io/",apiURL:"https://block-explorer-api.mainnet.zksync.io"},interfaceName:"zksync",label:"ZKsync",logo:S0,nativeCurrency:{name:"ZKsync ETH",symbol:"ETH",decimals:18,address:mt,logo:Ft},networkLayer:Qe.L2,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.Zksync)]},[Z.Default]:{http:["https://mainnet.era.zksync.io/"]},[Z.Interface]:{http:[_e(D.Zksync)]}},urlParam:"zksync",statusPage:void 0,tokens:v1,supportsV4:!1,wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"},tradingApiPollingIntervalMs:250},A1=nt({stables:{USDC:Bt("0xCccCCccc7021b32EBb4e8C08314bD62F7c653EC4",D.Zora)}}),Lh={...o1,id:D.Zora,platform:He.EVM,assetRepoNetworkName:"zora",backendChain:{chain:pe.Zora,backendSupported:!0,nativeTokenBackendAddress:void 0},blockPerMainnetEpochForChainId:1,blockWaitMsBeforeWarning:6e5,bridge:"https://bridge.zora.energy/",docs:"https://docs.zora.co/",elementName:rt.ChainZora,explorer:{name:"Zora Explorer",url:"https://explorer.zora.energy/"},interfaceName:"zora",label:"Zora Network",logo:_0,networkLayer:Qe.L2,nativeCurrency:{name:"Zora ETH",symbol:"ETH",decimals:18,address:mt,logo:Ft},pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Public]:{http:[_e(D.Zora)]},[Z.Default]:{http:["https://rpc.zora.energy/"]},[Z.Interface]:{http:[_e(D.Zora)]}},tokens:A1,statusPage:void 0,supportsV4:!0,urlParam:"zora",wrappedNativeCurrency:{name:"Wrapped Ether",symbol:"WETH",decimals:18,address:"0x4200000000000000000000000000000000000006"},tradingApiPollingIntervalMs:250};var k1=!0,ro="Invariant failed";function Eu(e,t){if(!e){if(k1)throw new Error(ro);var r=typeof t=="function"?t():t,n=r?"".concat(ro,": ").concat(r):ro;throw new Error(n)}}function Lr(e,t){if(typeof t!="boolean")throw new Error(e+" boolean expected, got "+t)}function ws(e){const t=e.toString(16);return t.length&1?"0"+t:t}function Fh(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return e===""?li:BigInt("0x"+e)}function Ti(e){return Fh(nn(e))}function $n(e){return ai(e),Fh(nn(Uint8Array.from(e).reverse()))}function $a(e,t){return Ra(e.toString(16).padStart(t*2,"0"))}function Pi(e,t){return $a(e,t).reverse()}function Me(e,t,r){let n;if(typeof t=="string")try{n=Ra(t)}catch(i){throw new Error(e+" must be hex string or Uint8Array, cause: "+i)}else if(Dd(t))n=Uint8Array.from(t);else throw new Error(e+" must be hex string or Uint8Array");const s=n.length;if(typeof r=="number"&&s!==r)throw new Error(e+" of length "+r+" expected, got "+s);return n}function S1(e,t,r){return Hs(e)&&Hs(t)&&Hs(r)&&t<=e&&e<r}function Jr(e,t,r,n){if(!S1(t,r,n))throw new Error("expected valid "+e+": "+r+" <= n < "+n+", got "+t)}function _1(e){let t;for(t=0;e>li;e>>=qs,t+=1);return t}function I1(e,t,r){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");const n=p=>new Uint8Array(p),s=p=>Uint8Array.of(p);let i=n(e),o=n(e),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},u=(...p)=>r(o,i,...p),l=(p=n(0))=>{o=u(s(0),p),i=u(),p.length!==0&&(o=u(s(1),p),i=u())},d=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let p=0;const w=[];for(;p<t;){i=u();const m=i.slice();w.push(m),p+=i.length}return tr(...w)};return(p,w)=>{c(),l(p);let m;for(;!(m=w(d()));)l();return c(),m}}function ss(e,t,r={}){if(!e||typeof e!="object")throw new Error("expected valid options object");function n(s,i,o){const a=e[s];if(o&&a===void 0)return;const c=typeof a;if(c!==i||a===null)throw new Error(`param "${s}" is invalid: expected ${i}, got ${c}`)}Object.entries(t).forEach(([s,i])=>n(s,i,!1)),Object.entries(r).forEach(([s,i])=>n(s,i,!0))}function ui(e){const t=new WeakMap;return(r,...n)=>{const s=t.get(r);if(s!==void 0)return s;const i=e(r,...n);return t.set(r,i),i}}var li,qs,Hs,is,Ci=ve({"../../node_modules/@noble/curves/esm/utils.js"(){H0(),li=BigInt(0),qs=BigInt(1),Hs=e=>typeof e=="bigint"&&li<=e,is=e=>(qs<<BigInt(e))-qs}});function Ue(e,t){const r=e%t;return r>=ft?r:t+r}function Le(e,t,r){let n=e;for(;t-- >ft;)n*=n,n%=r;return n}function wu(e,t){if(e===ft)throw new Error("invert: expected non-zero number");if(t<=ft)throw new Error("invert: expected positive modulus, got "+t);let r=Ue(e,t),n=t,s=ft,i=Ye,o=Ye,a=ft;for(;r!==ft;){const u=n/r,l=n%r,d=s-o*u,h=i-a*u;n=r,r=l,s=o,i=a,o=d,a=h}if(n!==Ye)throw new Error("invert: does not exist");return Ue(s,t)}function Mh(e,t){const r=(e.ORDER+Ye)/Ya,n=e.pow(t,r);if(!e.eql(e.sqr(n),t))throw new Error("Cannot find square root");return n}function T1(e,t){const r=(e.ORDER-Qa)/Za,n=e.mul(t,dr),s=e.pow(n,r),i=e.mul(t,s),o=e.mul(e.mul(i,dr),s),a=e.mul(i,e.sub(o,e.ONE));if(!e.eql(e.sqr(a),t))throw new Error("Cannot find square root");return a}function P1(e){if(e<BigInt(3))throw new Error("sqrt is not defined for small field");let t=e-Ye,r=0;for(;t%dr===ft;)t/=dr,r++;let n=dr;const s=fn(e);for(;vu(s,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(r===1)return Mh;let i=s.pow(n,t);const o=(t+Ye)/dr;return function(c,u){if(c.is0(u))return u;if(vu(c,u)!==1)throw new Error("Cannot find square root");let l=r,d=c.mul(c.ONE,i),h=c.pow(u,t),p=c.pow(u,o);for(;!c.eql(h,c.ONE);){if(c.is0(h))return c.ZERO;let w=1,m=c.sqr(h);for(;!c.eql(m,c.ONE);)if(w++,m=c.sqr(m),w===l)throw new Error("Cannot find square root");const E=Ye<<BigInt(l-w-1),y=c.pow(d,E);l=w,d=c.sqr(y),h=c.mul(h,d),p=c.mul(p,y)}return p}}function C1(e){return e%Ya===Wh?Mh:e%Za===Qa?T1:P1(e)}function B1(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},r=Hh.reduce((n,s)=>(n[s]="function",n),t);return ss(e,r),e}function D1(e,t,r){if(r<ft)throw new Error("invalid exponent, negatives unsupported");if(r===ft)return e.ONE;if(r===Ye)return t;let n=e.ONE,s=t;for(;r>ft;)r&Ye&&(n=e.mul(n,s)),s=e.sqr(s),r>>=Ye;return n}function Uh(e,t,r=!1){const n=new Array(t.length).fill(r?e.ZERO:void 0),s=t.reduce((o,a,c)=>e.is0(a)?o:(n[c]=o,e.mul(o,a)),e.ONE),i=e.inv(s);return t.reduceRight((o,a,c)=>e.is0(a)?o:(n[c]=e.mul(o,n[c]),e.mul(o,a)),i),n}function vu(e,t){const r=(e.ORDER-Ye)/dr,n=e.pow(t,r),s=e.eql(n,e.ONE),i=e.eql(n,e.ZERO),o=e.eql(n,e.neg(e.ONE));if(!s&&!i&&!o)throw new Error("invalid Legendre symbol result");return s?1:i?0:-1}function R1(e,t){t!==void 0&&q0(t);const r=t!==void 0?t:e.toString(2).length,n=Math.ceil(r/8);return{nBitLength:r,nByteLength:n}}function fn(e,t,r=!1,n={}){if(e<=ft)throw new Error("invalid field: expected ORDER > 0, got "+e);let s,i;if(typeof t=="object"&&t!=null){if(n.sqrt||r)throw new Error("cannot specify opts in two arguments");const l=t;l.BITS&&(s=l.BITS),l.sqrt&&(i=l.sqrt),typeof l.isLE=="boolean"&&(r=l.isLE)}else typeof t=="number"&&(s=t),n.sqrt&&(i=n.sqrt);const{nBitLength:o,nByteLength:a}=R1(e,s);if(a>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let c;const u=Object.freeze({ORDER:e,isLE:r,BITS:o,BYTES:a,MASK:is(o),ZERO:ft,ONE:Ye,create:l=>Ue(l,e),isValid:l=>{if(typeof l!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof l);return ft<=l&&l<e},is0:l=>l===ft,isValidNot0:l=>!u.is0(l)&&u.isValid(l),isOdd:l=>(l&Ye)===Ye,neg:l=>Ue(-l,e),eql:(l,d)=>l===d,sqr:l=>Ue(l*l,e),add:(l,d)=>Ue(l+d,e),sub:(l,d)=>Ue(l-d,e),mul:(l,d)=>Ue(l*d,e),pow:(l,d)=>D1(u,l,d),div:(l,d)=>Ue(l*wu(d,e),e),sqrN:l=>l*l,addN:(l,d)=>l+d,subN:(l,d)=>l-d,mulN:(l,d)=>l*d,inv:l=>wu(l,e),sqrt:i||(l=>(c||(c=C1(e)),c(u,l))),toBytes:l=>r?Pi(l,a):$a(l,a),fromBytes:l=>{if(l.length!==a)throw new Error("Field.fromBytes: expected "+a+" bytes, got "+l.length);return r?$n(l):Ti(l)},invertBatch:l=>Uh(u,l),cmov:(l,d,h)=>h?d:l});return Object.freeze(u)}function Vh(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const t=e.toString(2).length;return Math.ceil(t/8)}function zh(e){const t=Vh(e);return t+Math.ceil(t/2)}function O1(e,t,r=!1){const n=e.length,s=Vh(t),i=zh(t);if(n<16||n<i||n>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+n);const o=r?$n(e):Ti(e),a=Ue(o,t-Ye)+Ye;return r?Pi(a,s):$a(a,s)}var ft,Ye,dr,Wh,Ya,Qa,Za,qh,Hh,os=ve({"../../node_modules/@noble/curves/esm/abstract/modular.js"(){Ci(),ft=BigInt(0),Ye=BigInt(1),dr=BigInt(2),Wh=BigInt(3),Ya=BigInt(4),Qa=BigInt(5),Za=BigInt(8),qh=(e,t)=>(Ue(e,t)&Ye)===Ye,Hh=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"]}});function Wn(e,t){const r=t.negate();return e?r:t}function Kh(e,t,r){const n=t==="pz"?o=>o.pz:o=>o.ez,s=Uh(e.Fp,r.map(n));return r.map((o,a)=>o.toAffine(s[a])).map(e.fromAffine)}function Gh(e,t){if(!Number.isSafeInteger(e)||e<=0||e>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+e)}function no(e,t){Gh(e,t);const r=Math.ceil(t/e)+1,n=2**(e-1),s=2**e,i=is(e),o=BigInt(e);return{windows:r,windowSize:n,mask:i,maxNumber:s,shiftBy:o}}function Au(e,t,r){const{windowSize:n,mask:s,maxNumber:i,shiftBy:o}=r;let a=Number(e&s),c=e>>o;a>n&&(a-=i,c+=fr);const u=t*n,l=u+Math.abs(a)-1,d=a===0,h=a<0,p=t%2!==0;return{nextN:c,offset:l,isZero:d,isNeg:h,isNegF:p,offsetF:u}}function x1(e,t){if(!Array.isArray(e))throw new Error("array expected");e.forEach((r,n)=>{if(!(r instanceof t))throw new Error("invalid point at index "+n)})}function N1(e,t){if(!Array.isArray(e))throw new Error("array of scalars expected");e.forEach((r,n)=>{if(!t.isValid(r))throw new Error("invalid scalar at index "+n)})}function so(e){return Ja.get(e)||1}function ku(e){if(e!==Fr)throw new Error("invalid wNAF")}function jh(e,t){return{constTimeNegate:Wn,hasPrecomputes(r){return so(r)!==1},unsafeLadder(r,n,s=e.ZERO){let i=r;for(;n>Fr;)n&fr&&(s=s.add(i)),i=i.double(),n>>=fr;return s},precomputeWindow(r,n){const{windows:s,windowSize:i}=no(n,t),o=[];let a=r,c=a;for(let u=0;u<s;u++){c=a,o.push(c);for(let l=1;l<i;l++)c=c.add(a),o.push(c);a=c.double()}return o},wNAF(r,n,s){let i=e.ZERO,o=e.BASE;const a=no(r,t);for(let c=0;c<a.windows;c++){const{nextN:u,offset:l,isZero:d,isNeg:h,isNegF:p,offsetF:w}=Au(s,c,a);s=u,d?o=o.add(Wn(p,n[w])):i=i.add(Wn(h,n[l]))}return ku(s),{p:i,f:o}},wNAFUnsafe(r,n,s,i=e.ZERO){const o=no(r,t);for(let a=0;a<o.windows&&s!==Fr;a++){const{nextN:c,offset:u,isZero:l,isNeg:d}=Au(s,a,o);if(s=c,!l){const h=n[u];i=i.add(d?h.negate():h)}}return ku(s),i},getPrecomputes(r,n,s){let i=Ks.get(n);return i||(i=this.precomputeWindow(n,r),r!==1&&(typeof s=="function"&&(i=s(i)),Ks.set(n,i))),i},wNAFCached(r,n,s){const i=so(r);return this.wNAF(i,this.getPrecomputes(i,r,s),n)},wNAFCachedUnsafe(r,n,s,i){const o=so(r);return o===1?this.unsafeLadder(r,n,i):this.wNAFUnsafe(o,this.getPrecomputes(o,r,s),n,i)},setWindowSize(r,n){Gh(n,t),Ja.set(r,n),Ks.delete(r)}}}function L1(e,t,r,n){let s=t,i=e.ZERO,o=e.ZERO;for(;r>Fr||n>Fr;)r&fr&&(i=i.add(s)),n&fr&&(o=o.add(s)),s=s.double(),r>>=fr,n>>=fr;return{p1:i,p2:o}}function $h(e,t,r,n){x1(r,e),N1(n,t);const s=r.length,i=n.length;if(s!==i)throw new Error("arrays of points and scalars must have equal length");const o=e.ZERO,a=_1(BigInt(s));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const u=is(c),l=new Array(Number(u)+1).fill(o),d=Math.floor((t.BITS-1)/c)*c;let h=o;for(let p=d;p>=0;p-=c){l.fill(o);for(let m=0;m<i;m++){const E=n[m],y=Number(E>>BigInt(p)&u);l[y]=l[y].add(r[m])}let w=o;for(let m=l.length-1,E=o;m>0;m--)E=E.add(l[m]),w=w.add(E);if(h=h.add(w),p!==0)for(let m=0;m<c;m++)h=h.double()}return h}function Su(e,t){if(t){if(t.ORDER!==e)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return B1(t),t}else return fn(e)}function Yh(e,t,r={}){if(!t||typeof t!="object")throw new Error(`expected valid ${e} CURVE object`);for(const a of["p","n","h"]){const c=t[a];if(!(typeof c=="bigint"&&c>Fr))throw new Error(`CURVE.${a} must be positive bigint`)}const n=Su(t.p,r.Fp),s=Su(t.n,r.Fn),o=["Gx","Gy","a",e==="weierstrass"?"b":"d"];for(const a of o)if(!n.isValid(t[a]))throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);return{Fp:n,Fn:s}}var Fr,fr,Ks,Ja,Qh=ve({"../../node_modules/@noble/curves/esm/abstract/curve.js"(){Ci(),os(),Fr=BigInt(0),fr=BigInt(1),Ks=new WeakMap,Ja=new WeakMap}});function F1(e,t,r,n){const s=e.sqr(r),i=e.sqr(n),o=e.add(e.mul(t.a,s),i),a=e.add(e.ONE,e.mul(t.d,e.mul(s,i)));return e.eql(o,a)}function M1(e,t={}){const{Fp:r,Fn:n}=Yh("edwards",e,t),{h:s,n:i}=e;ss(t,{},{uvRatio:"function"});const o=Gs<<BigInt(n.BYTES*8)-lt,a=m=>r.create(m),c=t.uvRatio||((m,E)=>{try{return{isValid:!0,value:r.sqrt(r.div(m,E))}}catch{return{isValid:!1,value:Nt}}});if(!F1(r,e,e.Gx,e.Gy))throw new Error("bad curve params: generator point");function u(m,E,y=!1){const P=y?lt:Nt;return Jr("coordinate "+m,E,P,o),E}function l(m){if(!(m instanceof p))throw new Error("ExtendedPoint expected")}const d=ui((m,E)=>{const{ex:y,ey:P,ez:O}=m,N=m.is0();E==null&&(E=N?Zh:r.inv(O));const B=a(y*E),U=a(P*E),H=a(O*E);if(N)return{x:Nt,y:lt};if(H!==lt)throw new Error("invZ was invalid");return{x:B,y:U}}),h=ui(m=>{const{a:E,d:y}=e;if(m.is0())throw new Error("bad point: ZERO");const{ex:P,ey:O,ez:N,et:B}=m,U=a(P*P),H=a(O*O),q=a(N*N),C=a(q*q),A=a(U*E),S=a(q*a(A+H)),_=a(C+a(y*a(U*H)));if(S!==_)throw new Error("bad point: equation left != right (1)");const T=a(P*O),F=a(N*B);if(T!==F)throw new Error("bad point: equation left != right (2)");return!0});class p{constructor(E,y,P,O){this.ex=u("x",E),this.ey=u("y",y),this.ez=u("z",P,!0),this.et=u("t",O),Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static fromAffine(E){if(E instanceof p)throw new Error("extended point not allowed");const{x:y,y:P}=E||{};return u("x",y),u("y",P),new p(y,P,lt,a(y*P))}static normalizeZ(E){return Kh(p,"ez",E)}static msm(E,y){return $h(p,n,E,y)}_setWindowSize(E){this.precompute(E)}precompute(E=8,y=!0){return w.setWindowSize(this,E),y||this.multiply(Gs),this}assertValidity(){h(this)}equals(E){l(E);const{ex:y,ey:P,ez:O}=this,{ex:N,ey:B,ez:U}=E,H=a(y*U),q=a(N*O),C=a(P*U),A=a(B*O);return H===q&&C===A}is0(){return this.equals(p.ZERO)}negate(){return new p(a(-this.ex),this.ey,this.ez,a(-this.et))}double(){const{a:E}=e,{ex:y,ey:P,ez:O}=this,N=a(y*y),B=a(P*P),U=a(Gs*a(O*O)),H=a(E*N),q=y+P,C=a(a(q*q)-N-B),A=H+B,S=A-U,_=H-B,T=a(C*S),F=a(A*_),L=a(C*_),K=a(S*A);return new p(T,F,K,L)}add(E){l(E);const{a:y,d:P}=e,{ex:O,ey:N,ez:B,et:U}=this,{ex:H,ey:q,ez:C,et:A}=E,S=a(O*H),_=a(N*q),T=a(U*P*A),F=a(B*C),L=a((O+N)*(H+q)-S-_),K=F-T,X=F+T,ne=a(_-y*S),De=a(L*K),be=a(X*ne),ae=a(L*ne),Oe=a(K*X);return new p(De,be,Oe,ae)}subtract(E){return this.add(E.negate())}multiply(E){const y=E;Jr("scalar",y,lt,i);const{p:P,f:O}=w.wNAFCached(this,y,p.normalizeZ);return p.normalizeZ([P,O])[0]}multiplyUnsafe(E,y=p.ZERO){const P=E;return Jr("scalar",P,Nt,i),P===Nt?p.ZERO:this.is0()||P===lt?this:w.wNAFCachedUnsafe(this,P,p.normalizeZ,y)}isSmallOrder(){return this.multiplyUnsafe(s).is0()}isTorsionFree(){return w.wNAFCachedUnsafe(this,i).is0()}toAffine(E){return d(this,E)}clearCofactor(){return s===lt?this:this.multiplyUnsafe(s)}static fromBytes(E,y=!1){return ai(E),this.fromHex(E,y)}static fromHex(E,y=!1){const{d:P,a:O}=e,N=r.BYTES;E=Me("pointHex",E,N),Lr("zip215",y);const B=E.slice(),U=E[N-1];B[N-1]=U&-129;const H=$n(B),q=y?o:r.ORDER;Jr("pointHex.y",H,Nt,q);const C=a(H*H),A=a(C-lt),S=a(P*C-O);let{isValid:_,value:T}=c(A,S);if(!_)throw new Error("Point.fromHex: invalid y coordinate");const F=(T&lt)===lt,L=(U&128)!==0;if(!y&&T===Nt&&L)throw new Error("Point.fromHex: x=0 and x_0=1");return L!==F&&(T=a(-T)),p.fromAffine({x:T,y:H})}static fromPrivateScalar(E){return p.BASE.multiply(E)}toBytes(){const{x:E,y}=this.toAffine(),P=Pi(y,r.BYTES);return P[P.length-1]|=E&lt?128:0,P}toRawBytes(){return this.toBytes()}toHex(){return nn(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}p.BASE=new p(e.Gx,e.Gy,lt,a(e.Gx*e.Gy)),p.ZERO=new p(Nt,lt,lt,Nt),p.Fp=r,p.Fn=n;const w=jh(p,n.BYTES*8);return p}function U1(e,t){ss(t,{hash:"function"},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",mapToCurve:"function"});const{prehash:r,hash:n}=t,{BASE:s,Fp:i,Fn:o}=e,a=o.ORDER,c=t.randomBytes||Rd,u=t.adjustScalarBytes||(B=>B),l=t.domain||((B,U,H)=>{if(Lr("phflag",H),U.length||H)throw new Error("Contexts/pre-hash are not supported");return B});function d(B){return o.create(B)}function h(B){return d($n(B))}function p(B){const U=i.BYTES;B=Me("private key",B,U);const H=Me("hashed private key",n(B),2*U),q=u(H.slice(0,U)),C=H.slice(U,2*U),A=h(q);return{head:q,prefix:C,scalar:A}}function w(B){const{head:U,prefix:H,scalar:q}=p(B),C=s.multiply(q),A=C.toBytes();return{head:U,prefix:H,scalar:q,point:C,pointBytes:A}}function m(B){return w(B).pointBytes}function E(B=Uint8Array.of(),...U){const H=tr(...U);return h(n(l(H,Me("context",B),!!r)))}function y(B,U,H={}){B=Me("message",B),r&&(B=r(B));const{prefix:q,scalar:C,pointBytes:A}=w(U),S=E(H.context,q,B),_=s.multiply(S).toBytes(),T=E(H.context,_,A,B),F=d(S+T*C);Jr("signature.s",F,Nt,a);const L=i.BYTES,K=tr(_,Pi(F,L));return Me("result",K,L*2)}const P=Jh;function O(B,U,H,q=P){const{context:C,zip215:A}=q,S=i.BYTES;B=Me("signature",B,2*S),U=Me("message",U),H=Me("publicKey",H,S),A!==void 0&&Lr("zip215",A),r&&(U=r(U));const _=$n(B.slice(S,2*S));let T,F,L;try{T=e.fromHex(H,A),F=e.fromHex(B.slice(0,S),A),L=s.multiplyUnsafe(_)}catch{return!1}if(!A&&T.isSmallOrder())return!1;const K=E(C,F.toBytes(),T.toBytes(),U);return F.add(T.multiplyUnsafe(K)).subtract(L).clearCofactor().is0()}return s.precompute(8),{getPublicKey:m,sign:y,verify:O,utils:{getExtendedPublicKey:w,randomPrivateKey:()=>c(i.BYTES),precompute(B=8,U=e.BASE){return U.precompute(B,!1)}},Point:e}}function V1(e){const t={a:e.a,d:e.d,p:e.Fp.ORDER,n:e.n,h:e.h,Gx:e.Gx,Gy:e.Gy},r=e.Fp,n=fn(t.n,e.nBitLength,!0),s={Fp:r,Fn:n,uvRatio:e.uvRatio},i={hash:e.hash,randomBytes:e.randomBytes,adjustScalarBytes:e.adjustScalarBytes,domain:e.domain,prehash:e.prehash,mapToCurve:e.mapToCurve};return{CURVE:t,curveOpts:s,eddsaOpts:i}}function z1(e,t){return Object.assign({},t,{ExtendedPoint:t.Point,CURVE:e})}function W1(e){const{CURVE:t,curveOpts:r,eddsaOpts:n}=V1(e),s=M1(t,r),i=U1(s,n);return z1(e,i)}var Nt,lt,Gs,Zh,Jh,q1=ve({"../../node_modules/@noble/curves/esm/abstract/edwards.js"(){Ci(),Qh(),os(),Nt=BigInt(0),lt=BigInt(1),Gs=BigInt(2),Zh=BigInt(8),Jh={zip215:!0}}});function H1(e){const t=BigInt(10),r=BigInt(20),n=BigInt(40),s=BigInt(80),i=qn.p,a=e*e%i*e%i,c=Le(a,ua,i)*a%i,u=Le(c,Xh,i)*e%i,l=Le(u,ep,i)*u%i,d=Le(l,t,i)*l%i,h=Le(d,r,i)*d%i,p=Le(h,n,i)*h%i,w=Le(p,s,i)*p%i,m=Le(w,s,i)*p%i,E=Le(m,t,i)*l%i;return{pow_p_5_8:Le(E,ua,i)*e%i,b2:a}}function K1(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}function G1(e,t){const r=qn.p,n=Ue(t*t*t,r),s=Ue(n*n*t,r),i=H1(e*s).pow_p_5_8;let o=Ue(e*n*i,r);const a=Ue(t*o*o,r),c=o,u=Ue(o*la,r),l=a===e,d=a===Ue(-e,r),h=a===Ue(-e*la,r);return l&&(o=c),(d||h)&&(o=u),qh(o,r)&&(o=Ue(-o,r)),{isValid:l||d,value:o}}var j1,Xh,ua,$1,ep,_u,qn,la,Iu,Tu,Br,Y1=ve({"../../node_modules/@noble/curves/esm/ed25519.js"(){Od(),q1(),os(),j1=BigInt(0),Xh=BigInt(1),ua=BigInt(2),$1=BigInt(3),ep=BigInt(5),_u=BigInt(8),qn={p:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:_u,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")},la=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),Iu=fn(qn.p,void 0,!0),Tu={...qn,Fp:Iu,hash:G0,adjustScalarBytes:K1,uvRatio:G1},Br=W1(Tu)}}),Q1=gt({"../../node_modules/@solana/web3.js/node_modules/base-x/src/index.js"(e,t){var r=Nd().Buffer;function n(s){if(s.length>=255)throw new TypeError("Alphabet too long");for(var i=new Uint8Array(256),o=0;o<i.length;o++)i[o]=255;for(var a=0;a<s.length;a++){var c=s.charAt(a),u=c.charCodeAt(0);if(i[u]!==255)throw new TypeError(c+" is ambiguous");i[u]=a}var l=s.length,d=s.charAt(0),h=Math.log(l)/Math.log(256),p=Math.log(256)/Math.log(l);function w(y){if((Array.isArray(y)||y instanceof Uint8Array)&&(y=r.from(y)),!r.isBuffer(y))throw new TypeError("Expected Buffer");if(y.length===0)return"";for(var P=0,O=0,N=0,B=y.length;N!==B&&y[N]===0;)N++,P++;for(var U=(B-N)*p+1>>>0,H=new Uint8Array(U);N!==B;){for(var q=y[N],C=0,A=U-1;(q!==0||C<O)&&A!==-1;A--,C++)q+=256*H[A]>>>0,H[A]=q%l>>>0,q=q/l>>>0;if(q!==0)throw new Error("Non-zero carry");O=C,N++}for(var S=U-O;S!==U&&H[S]===0;)S++;for(var _=d.repeat(P);S<U;++S)_+=s.charAt(H[S]);return _}function m(y){if(typeof y!="string")throw new TypeError("Expected String");if(y.length===0)return r.alloc(0);for(var P=0,O=0,N=0;y[P]===d;)O++,P++;for(var B=(y.length-P)*h+1>>>0,U=new Uint8Array(B);P<y.length;){var H=y.charCodeAt(P);if(H>255)return;var q=i[H];if(q===255)return;for(var C=0,A=B-1;(q!==0||C<N)&&A!==-1;A--,C++)q+=l*U[A]>>>0,U[A]=q%256>>>0,q=q/256>>>0;if(q!==0)throw new Error("Non-zero carry");N=C,P++}for(var S=B-N;S!==B&&U[S]===0;)S++;var _=r.allocUnsafe(O+(B-S));_.fill(0,0,O);for(var T=O;S!==B;)_[T++]=U[S++];return _}function E(y){var P=m(y);if(P)return P;throw new Error("Non-base"+l+" character")}return{encode:w,decodeUnsafe:m,decode:E}}t.exports=n}}),Z1=gt({"../../node_modules/@solana/web3.js/node_modules/bs58/index.js"(e,t){var r=Q1(),n="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";t.exports=r(n)}}),J1=gt({"../../node_modules/borsh/node_modules/base-x/src/index.js"(e,t){var r=Nd().Buffer;function n(s){if(s.length>=255)throw new TypeError("Alphabet too long");for(var i=new Uint8Array(256),o=0;o<i.length;o++)i[o]=255;for(var a=0;a<s.length;a++){var c=s.charAt(a),u=c.charCodeAt(0);if(i[u]!==255)throw new TypeError(c+" is ambiguous");i[u]=a}var l=s.length,d=s.charAt(0),h=Math.log(l)/Math.log(256),p=Math.log(256)/Math.log(l);function w(y){if((Array.isArray(y)||y instanceof Uint8Array)&&(y=r.from(y)),!r.isBuffer(y))throw new TypeError("Expected Buffer");if(y.length===0)return"";for(var P=0,O=0,N=0,B=y.length;N!==B&&y[N]===0;)N++,P++;for(var U=(B-N)*p+1>>>0,H=new Uint8Array(U);N!==B;){for(var q=y[N],C=0,A=U-1;(q!==0||C<O)&&A!==-1;A--,C++)q+=256*H[A]>>>0,H[A]=q%l>>>0,q=q/l>>>0;if(q!==0)throw new Error("Non-zero carry");O=C,N++}for(var S=U-O;S!==U&&H[S]===0;)S++;for(var _=d.repeat(P);S<U;++S)_+=s.charAt(H[S]);return _}function m(y){if(typeof y!="string")throw new TypeError("Expected String");if(y.length===0)return r.alloc(0);for(var P=0,O=0,N=0;y[P]===d;)O++,P++;for(var B=(y.length-P)*h+1>>>0,U=new Uint8Array(B);P<y.length;){var H=y.charCodeAt(P);if(H>255)return;var q=i[H];if(q===255)return;for(var C=0,A=B-1;(q!==0||C<N)&&A!==-1;A--,C++)q+=l*U[A]>>>0,U[A]=q%256>>>0,q=q/256>>>0;if(q!==0)throw new Error("Non-zero carry");N=C,P++}for(var S=B-N;S!==B&&U[S]===0;)S++;var _=r.allocUnsafe(O+(B-S));_.fill(0,0,O);for(var T=O;S!==B;)_[T++]=U[S++];return _}function E(y){var P=m(y);if(P)return P;throw new Error("Non-base"+l+" character")}return{encode:w,decodeUnsafe:m,decode:E}}t.exports=n}}),X1=gt({"../../node_modules/borsh/node_modules/bs58/index.js"(e,t){var r=J1(),n="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";t.exports=r(n)}}),tp={};Zn(tp,{TextDecoder:()=>fi,TextEncoder:()=>hi});function er(e,t,r){return t<=e&&e<=r}function di(e){if(e===void 0)return{};if(e===Object(e))return e;throw TypeError("Could not convert argument to dictionary")}function eE(e){for(var t=String(e),r=t.length,n=0,s=[];n<r;){var i=t.charCodeAt(n);if(i<55296||i>57343)s.push(i);else if(56320<=i&&i<=57343)s.push(65533);else if(55296<=i&&i<=56319)if(n===r-1)s.push(65533);else{var o=e.charCodeAt(n+1);if(56320<=o&&o<=57343){var a=i&1023,c=o&1023;s.push(65536+(a<<10)+c),n+=1}else s.push(65533)}n+=1}return s}function tE(e){for(var t="",r=0;r<e.length;++r){var n=e[r];n<=65535?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode((n>>10)+55296,(n&1023)+56320))}return t}function io(e){this.tokens=[].slice.call(e)}function oo(e,t){if(e)throw TypeError("Decoder error");return t||65533}function rE(){}function nE(){}function fi(e,t){if(!(this instanceof fi))return new fi(e,t);if(e=e!==void 0?String(e).toLowerCase():Qn,e!==Qn)throw new Error("Encoding not supported. Only utf-8 is supported");t=di(t),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=!!t.fatal,this._ignoreBOM=!!t.ignoreBOM,Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}function hi(e,t){if(!(this instanceof hi))return new hi(e,t);if(e=e!==void 0?String(e).toLowerCase():Qn,e!==Qn)throw new Error("Encoding not supported. Only utf-8 is supported");t=di(t),this._streaming=!1,this._encoder=null,this._options={fatal:!!t.fatal},Object.defineProperty(this,"encoding",{value:"utf-8"})}function sE(e){var t=e.fatal,r=0,n=0,s=0,i=128,o=191;this.handler=function(a,c){if(c===Yn&&s!==0)return s=0,oo(t);if(c===Yn)return Dr;if(s===0){if(er(c,0,127))return c;if(er(c,194,223))s=1,r=c-192;else if(er(c,224,239))c===224&&(i=160),c===237&&(o=159),s=2,r=c-224;else if(er(c,240,244))c===240&&(i=144),c===244&&(o=143),s=3,r=c-240;else return oo(t);return r=r<<6*s,null}if(!er(c,i,o))return r=s=n=0,i=128,o=191,a.prepend(c),oo(t);if(i=128,o=191,n+=1,r+=c-128<<6*(s-n),n!==s)return null;var u=r;return r=s=n=0,u}}function iE(e){var t=e.fatal;this.handler=function(r,n){if(n===Yn)return Dr;if(er(n,0,127))return n;var s,i;er(n,128,2047)?(s=1,i=192):er(n,2048,65535)?(s=2,i=224):er(n,65536,1114111)&&(s=3,i=240);for(var o=[(n>>6*s)+i];s>0;){var a=n>>6*(s-1);o.push(128|a&63),s-=1}return o}}var Yn,Dr,Qn,oE=ve({"../../node_modules/text-encoding-utf-8/src/encoding.js"(){Yn=-1,io.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():Yn},prepend:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.unshift(t.pop());else this.tokens.unshift(e)},push:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.push(t.shift());else this.tokens.push(e)}},Dr=-1,rE.prototype={handler:function(e,t){}},nE.prototype={handler:function(e,t){}},Qn="utf-8",fi.prototype={decode:function(t,r){var n;typeof t=="object"&&t instanceof ArrayBuffer?n=new Uint8Array(t):typeof t=="object"&&"buffer"in t&&t.buffer instanceof ArrayBuffer?n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):n=new Uint8Array(0),r=di(r),this._streaming||(this._decoder=new sE({fatal:this._fatal}),this._BOMseen=!1),this._streaming=!!r.stream;for(var s=new io(n),i=[],o;!s.endOfStream()&&(o=this._decoder.handler(s,s.read()),o!==Dr);)o!==null&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));if(!this._streaming){do{if(o=this._decoder.handler(s,s.read()),o===Dr)break;o!==null&&(Array.isArray(o)?i.push.apply(i,o):i.push(o))}while(!s.endOfStream());this._decoder=null}return i.length&&["utf-8"].indexOf(this.encoding)!==-1&&!this._ignoreBOM&&!this._BOMseen&&(i[0]===65279?(this._BOMseen=!0,i.shift()):this._BOMseen=!0),tE(i)}},hi.prototype={encode:function(t,r){t=t?String(t):"",r=di(r),this._streaming||(this._encoder=new iE(this._options)),this._streaming=!!r.stream;for(var n=[],s=new io(eE(t)),i;!s.endOfStream()&&(i=this._encoder.handler(s,s.read()),i!==Dr);)Array.isArray(i)?n.push.apply(n,i):n.push(i);if(!this._streaming){for(;i=this._encoder.handler(s,s.read()),i!==Dr;)Array.isArray(i)?n.push.apply(n,i):n.push(i);this._encoder=null}return new Uint8Array(n)}}}}),aE=gt({"../../node_modules/borsh/lib/index.js"(e){Jn();var t=Object.create?function(A,S,_,T){T===void 0&&(T=_),Object.defineProperty(A,T,{enumerable:!0,get:function(){return S[_]}})}:function(A,S,_,T){T===void 0&&(T=_),A[T]=S[_]},r=Object.create?function(A,S){Object.defineProperty(A,"default",{enumerable:!0,value:S})}:function(A,S){A.default=S},n=function(A,S,_,T){var F=arguments.length,L=F<3?S:T===null?T=Object.getOwnPropertyDescriptor(S,_):T,K;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")L=Reflect.decorate(A,S,_,T);else for(var X=A.length-1;X>=0;X--)(K=A[X])&&(L=(F<3?K(L):F>3?K(S,_,L):K(S,_))||L);return F>3&&L&&Object.defineProperty(S,_,L),L},s=function(A){if(A&&A.__esModule)return A;var S={};if(A!=null)for(var _ in A)_!=="default"&&Object.hasOwnProperty.call(A,_)&&t(S,A,_);return r(S,A),S},i=function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(e,"__esModule",{value:!0}),e.deserializeUnchecked=e.deserialize=e.serialize=e.BinaryReader=e.BinaryWriter=e.BorshError=e.baseDecode=e.baseEncode=void 0;const o=i(_d()),a=i(X1()),c=s((oE(),mi(tp))),u=typeof TextDecoder!="function"?c.TextDecoder:TextDecoder,l=new u("utf-8",{fatal:!0});function d(A){return typeof A=="string"&&(A=je.from(A,"utf8")),a.default.encode(je.from(A))}e.baseEncode=d;function h(A){return je.from(a.default.decode(A))}e.baseDecode=h;const p=1024;var w=class extends Error{constructor(A){super(A),this.fieldPath=[],this.originalMessage=A}addToFieldPath(A){this.fieldPath.splice(0,0,A),this.message=this.originalMessage+": "+this.fieldPath.join(".")}};e.BorshError=w;var m=class{constructor(){this.buf=je.alloc(p),this.length=0}maybeResize(){this.buf.length<16+this.length&&(this.buf=je.concat([this.buf,je.alloc(p)]))}writeU8(A){this.maybeResize(),this.buf.writeUInt8(A,this.length),this.length+=1}writeU16(A){this.maybeResize(),this.buf.writeUInt16LE(A,this.length),this.length+=2}writeU32(A){this.maybeResize(),this.buf.writeUInt32LE(A,this.length),this.length+=4}writeU64(A){this.maybeResize(),this.writeBuffer(je.from(new o.default(A).toArray("le",8)))}writeU128(A){this.maybeResize(),this.writeBuffer(je.from(new o.default(A).toArray("le",16)))}writeU256(A){this.maybeResize(),this.writeBuffer(je.from(new o.default(A).toArray("le",32)))}writeU512(A){this.maybeResize(),this.writeBuffer(je.from(new o.default(A).toArray("le",64)))}writeBuffer(A){this.buf=je.concat([je.from(this.buf.subarray(0,this.length)),A,je.alloc(p)]),this.length+=A.length}writeString(A){this.maybeResize();const S=je.from(A,"utf8");this.writeU32(S.length),this.writeBuffer(S)}writeFixedArray(A){this.writeBuffer(je.from(A))}writeArray(A,S){this.maybeResize(),this.writeU32(A.length);for(const _ of A)this.maybeResize(),S(_)}toArray(){return this.buf.subarray(0,this.length)}};e.BinaryWriter=m;function E(A,S,_){const T=_.value;_.value=function(...F){try{return T.apply(this,F)}catch(L){if(L instanceof RangeError){const K=L.code;if(["ERR_BUFFER_OUT_OF_BOUNDS","ERR_OUT_OF_RANGE"].indexOf(K)>=0)throw new w("Reached the end of buffer when deserializing")}throw L}}}var y=class{constructor(A){this.buf=A,this.offset=0}readU8(){const A=this.buf.readUInt8(this.offset);return this.offset+=1,A}readU16(){const A=this.buf.readUInt16LE(this.offset);return this.offset+=2,A}readU32(){const A=this.buf.readUInt32LE(this.offset);return this.offset+=4,A}readU64(){const A=this.readBuffer(8);return new o.default(A,"le")}readU128(){const A=this.readBuffer(16);return new o.default(A,"le")}readU256(){const A=this.readBuffer(32);return new o.default(A,"le")}readU512(){const A=this.readBuffer(64);return new o.default(A,"le")}readBuffer(A){if(this.offset+A>this.buf.length)throw new w(`Expected buffer length ${A} isn't within bounds`);const S=this.buf.slice(this.offset,this.offset+A);return this.offset+=A,S}readString(){const A=this.readU32(),S=this.readBuffer(A);try{return l.decode(S)}catch(_){throw new w(`Error decoding UTF-8 string: ${_}`)}}readFixedArray(A){return new Uint8Array(this.readBuffer(A))}readArray(A){const S=this.readU32(),_=Array();for(let T=0;T<S;++T)_.push(A());return _}};n([E],y.prototype,"readU8",null),n([E],y.prototype,"readU16",null),n([E],y.prototype,"readU32",null),n([E],y.prototype,"readU64",null),n([E],y.prototype,"readU128",null),n([E],y.prototype,"readU256",null),n([E],y.prototype,"readU512",null),n([E],y.prototype,"readString",null),n([E],y.prototype,"readFixedArray",null),n([E],y.prototype,"readArray",null),e.BinaryReader=y;function P(A){return A.charAt(0).toUpperCase()+A.slice(1)}function O(A,S,_,T,F){try{if(typeof T=="string")F[`write${P(T)}`](_);else if(T instanceof Array)if(typeof T[0]=="number"){if(_.length!==T[0])throw new w(`Expecting byte array of length ${T[0]}, but got ${_.length} bytes`);F.writeFixedArray(_)}else if(T.length===2&&typeof T[1]=="number"){if(_.length!==T[1])throw new w(`Expecting byte array of length ${T[1]}, but got ${_.length} bytes`);for(let L=0;L<T[1];L++)O(A,null,_[L],T[0],F)}else F.writeArray(_,L=>{O(A,S,L,T[0],F)});else if(T.kind!==void 0)switch(T.kind){case"option":{_==null?F.writeU8(0):(F.writeU8(1),O(A,S,_,T.type,F));break}case"map":{F.writeU32(_.size),_.forEach((L,K)=>{O(A,S,K,T.key,F),O(A,S,L,T.value,F)});break}default:throw new w(`FieldType ${T} unrecognized`)}else N(A,_,F)}catch(L){throw L instanceof w&&L.addToFieldPath(S),L}}function N(A,S,_){if(typeof S.borshSerialize=="function"){S.borshSerialize(_);return}const T=A.get(S.constructor);if(!T)throw new w(`Class ${S.constructor.name} is missing in schema`);if(T.kind==="struct")T.fields.map(([F,L])=>{O(A,F,S[F],L,_)});else if(T.kind==="enum"){const F=S[T.field];for(let L=0;L<T.values.length;++L){const[K,X]=T.values[L];if(K===F){_.writeU8(L),O(A,K,S[K],X,_);break}}}else throw new w(`Unexpected schema kind: ${T.kind} for ${S.constructor.name}`)}function B(A,S,_=m){const T=new _;return N(A,S,T),T.toArray()}e.serialize=B;function U(A,S,_,T){try{if(typeof _=="string")return T[`read${P(_)}`]();if(_ instanceof Array){if(typeof _[0]=="number")return T.readFixedArray(_[0]);if(typeof _[1]=="number"){const F=[];for(let L=0;L<_[1];L++)F.push(U(A,null,_[0],T));return F}else return T.readArray(()=>U(A,S,_[0],T))}if(_.kind==="option")return T.readU8()?U(A,S,_.type,T):void 0;if(_.kind==="map"){let F=new Map;const L=T.readU32();for(let K=0;K<L;K++){const X=U(A,S,_.key,T),ne=U(A,S,_.value,T);F.set(X,ne)}return F}return H(A,_,T)}catch(F){throw F instanceof w&&F.addToFieldPath(S),F}}function H(A,S,_){if(typeof S.borshDeserialize=="function")return S.borshDeserialize(_);const T=A.get(S);if(!T)throw new w(`Class ${S.name} is missing in schema`);if(T.kind==="struct"){const F={};for(const[L,K]of A.get(S).fields)F[L]=U(A,L,K,_);return new S(F)}if(T.kind==="enum"){const F=_.readU8();if(F>=T.values.length)throw new w(`Enum index: ${F} is out of range`);const[L,K]=T.values[F],X=U(A,L,K,_);return new S({[L]:X})}throw new w(`Unexpected schema kind: ${T.kind} for ${S.constructor.name}`)}function q(A,S,_,T=y){const F=new T(_),L=H(A,S,F);if(F.offset<_.length)throw new w(`Unexpected ${_.length-F.offset} bytes after deserialized data`);return L}e.deserialize=q;function C(A,S,_,T=y){const F=new T(_);return H(A,S,F)}e.deserializeUnchecked=C}}),Pu=gt({"../../node_modules/@solana/buffer-layout/lib/Layout.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.s16=e.s8=e.nu64be=e.u48be=e.u40be=e.u32be=e.u24be=e.u16be=e.nu64=e.u48=e.u40=e.u32=e.u24=e.u16=e.u8=e.offset=e.greedy=e.Constant=e.UTF8=e.CString=e.Blob=e.Boolean=e.BitField=e.BitStructure=e.VariantLayout=e.Union=e.UnionLayoutDiscriminator=e.UnionDiscriminator=e.Structure=e.Sequence=e.DoubleBE=e.Double=e.FloatBE=e.Float=e.NearInt64BE=e.NearInt64=e.NearUInt64BE=e.NearUInt64=e.IntBE=e.Int=e.UIntBE=e.UInt=e.OffsetLayout=e.GreedyCount=e.ExternalLayout=e.bindConstructorLayout=e.nameWithProperty=e.Layout=e.uint8ArrayToBuffer=e.checkUint8Array=void 0,e.constant=e.utf8=e.cstr=e.blob=e.unionLayoutDiscriminator=e.union=e.seq=e.bits=e.struct=e.f64be=e.f64=e.f32be=e.f32=e.ns64be=e.s48be=e.s40be=e.s32be=e.s24be=e.s16be=e.ns64=e.s48=e.s40=e.s32=e.s24=void 0;const t=(Jn(),mi(I0));function r(f){if(!(f instanceof Uint8Array))throw new TypeError("b must be a Uint8Array")}e.checkUint8Array=r;function n(f){return r(f),t.Buffer.from(f.buffer,f.byteOffset,f.length)}e.uint8ArrayToBuffer=n;var s=class{constructor(f,g){if(!Number.isInteger(f))throw new TypeError("span must be an integer");this.span=f,this.property=g}makeDestinationObject(){return{}}getSpan(f,g){if(0>this.span)throw new RangeError("indeterminate span");return this.span}replicate(f){const g=Object.create(this.constructor.prototype);return Object.assign(g,this),g.property=f,g}fromArray(f){}};e.Layout=s;function i(f,g){return g.property?f+"["+g.property+"]":f}e.nameWithProperty=i;function o(f,g){if(typeof f!="function")throw new TypeError("Class must be constructor");if(Object.prototype.hasOwnProperty.call(f,"layout_"))throw new Error("Class is already bound to a layout");if(!(g&&g instanceof s))throw new TypeError("layout must be a Layout");if(Object.prototype.hasOwnProperty.call(g,"boundConstructor_"))throw new Error("layout is already bound to a constructor");f.layout_=g,g.boundConstructor_=f,g.makeDestinationObject=()=>new f,Object.defineProperty(f.prototype,"encode",{value(k,R){return g.encode(this,k,R)},writable:!0}),Object.defineProperty(f,"decode",{value(k,R){return g.decode(k,R)},writable:!0})}e.bindConstructorLayout=o;var a=class extends s{isCount(){throw new Error("ExternalLayout is abstract")}};e.ExternalLayout=a;var c=class extends a{constructor(f=1,g){if(!Number.isInteger(f)||0>=f)throw new TypeError("elementSpan must be a (positive) integer");super(-1,g),this.elementSpan=f}isCount(){return!0}decode(f,g=0){r(f);const k=f.length-g;return Math.floor(k/this.elementSpan)}encode(f,g,k){return 0}};e.GreedyCount=c;var u=class extends a{constructor(f,g=0,k){if(!(f instanceof s))throw new TypeError("layout must be a Layout");if(!Number.isInteger(g))throw new TypeError("offset must be integer or undefined");super(f.span,k||f.property),this.layout=f,this.offset=g}isCount(){return this.layout instanceof l||this.layout instanceof d}decode(f,g=0){return this.layout.decode(f,g+this.offset)}encode(f,g,k=0){return this.layout.encode(f,g,k+this.offset)}};e.OffsetLayout=u;var l=class extends s{constructor(f,g){if(super(f,g),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(f,g=0){return n(f).readUIntLE(g,this.span)}encode(f,g,k=0){return n(g).writeUIntLE(f,k,this.span),this.span}};e.UInt=l;var d=class extends s{constructor(f,g){if(super(f,g),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(f,g=0){return n(f).readUIntBE(g,this.span)}encode(f,g,k=0){return n(g).writeUIntBE(f,k,this.span),this.span}};e.UIntBE=d;var h=class extends s{constructor(f,g){if(super(f,g),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(f,g=0){return n(f).readIntLE(g,this.span)}encode(f,g,k=0){return n(g).writeIntLE(f,k,this.span),this.span}};e.Int=h;var p=class extends s{constructor(f,g){if(super(f,g),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(f,g=0){return n(f).readIntBE(g,this.span)}encode(f,g,k=0){return n(g).writeIntBE(f,k,this.span),this.span}};e.IntBE=p;const w=Math.pow(2,32);function m(f){const g=Math.floor(f/w),k=f-g*w;return{hi32:g,lo32:k}}function E(f,g){return f*w+g}var y=class extends s{constructor(f){super(8,f)}decode(f,g=0){const k=n(f),R=k.readUInt32LE(g),W=k.readUInt32LE(g+4);return E(W,R)}encode(f,g,k=0){const R=m(f),W=n(g);return W.writeUInt32LE(R.lo32,k),W.writeUInt32LE(R.hi32,k+4),8}};e.NearUInt64=y;var P=class extends s{constructor(f){super(8,f)}decode(f,g=0){const k=n(f),R=k.readUInt32BE(g),W=k.readUInt32BE(g+4);return E(R,W)}encode(f,g,k=0){const R=m(f),W=n(g);return W.writeUInt32BE(R.hi32,k),W.writeUInt32BE(R.lo32,k+4),8}};e.NearUInt64BE=P;var O=class extends s{constructor(f){super(8,f)}decode(f,g=0){const k=n(f),R=k.readUInt32LE(g),W=k.readInt32LE(g+4);return E(W,R)}encode(f,g,k=0){const R=m(f),W=n(g);return W.writeUInt32LE(R.lo32,k),W.writeInt32LE(R.hi32,k+4),8}};e.NearInt64=O;var N=class extends s{constructor(f){super(8,f)}decode(f,g=0){const k=n(f),R=k.readInt32BE(g),W=k.readUInt32BE(g+4);return E(R,W)}encode(f,g,k=0){const R=m(f),W=n(g);return W.writeInt32BE(R.hi32,k),W.writeUInt32BE(R.lo32,k+4),8}};e.NearInt64BE=N;var B=class extends s{constructor(f){super(4,f)}decode(f,g=0){return n(f).readFloatLE(g)}encode(f,g,k=0){return n(g).writeFloatLE(f,k),4}};e.Float=B;var U=class extends s{constructor(f){super(4,f)}decode(f,g=0){return n(f).readFloatBE(g)}encode(f,g,k=0){return n(g).writeFloatBE(f,k),4}};e.FloatBE=U;var H=class extends s{constructor(f){super(8,f)}decode(f,g=0){return n(f).readDoubleLE(g)}encode(f,g,k=0){return n(g).writeDoubleLE(f,k),8}};e.Double=H;var q=class extends s{constructor(f){super(8,f)}decode(f,g=0){return n(f).readDoubleBE(g)}encode(f,g,k=0){return n(g).writeDoubleBE(f,k),8}};e.DoubleBE=q;var C=class extends s{constructor(f,g,k){if(!(f instanceof s))throw new TypeError("elementLayout must be a Layout");if(!(g instanceof a&&g.isCount()||Number.isInteger(g)&&0<=g))throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");let R=-1;!(g instanceof a)&&0<f.span&&(R=g*f.span),super(R,k),this.elementLayout=f,this.count=g}getSpan(f,g=0){if(0<=this.span)return this.span;let k=0,R=this.count;if(R instanceof a&&(R=R.decode(f,g)),0<this.elementLayout.span)k=R*this.elementLayout.span;else{let W=0;for(;W<R;)k+=this.elementLayout.getSpan(f,g+k),++W}return k}decode(f,g=0){const k=[];let R=0,W=this.count;for(W instanceof a&&(W=W.decode(f,g));R<W;)k.push(this.elementLayout.decode(f,g)),g+=this.elementLayout.getSpan(f,g),R+=1;return k}encode(f,g,k=0){const R=this.elementLayout,W=f.reduce((he,ke)=>he+R.encode(ke,g,k+he),0);return this.count instanceof a&&this.count.encode(f.length,g,k),W}};e.Sequence=C;var A=class extends s{constructor(f,g,k){if(!(Array.isArray(f)&&f.reduce((W,he)=>W&&he instanceof s,!0)))throw new TypeError("fields must be array of Layout instances");typeof g=="boolean"&&k===void 0&&(k=g,g=void 0);for(const W of f)if(0>W.span&&W.property===void 0)throw new Error("fields cannot contain unnamed variable-length layout");let R=-1;try{R=f.reduce((W,he)=>W+he.getSpan(),0)}catch{}super(R,g),this.fields=f,this.decodePrefixes=!!k}getSpan(f,g=0){if(0<=this.span)return this.span;let k=0;try{k=this.fields.reduce((R,W)=>{const he=W.getSpan(f,g);return g+=he,R+he},0)}catch{throw new RangeError("indeterminate span")}return k}decode(f,g=0){r(f);const k=this.makeDestinationObject();for(const R of this.fields)if(R.property!==void 0&&(k[R.property]=R.decode(f,g)),g+=R.getSpan(f,g),this.decodePrefixes&&f.length===g)break;return k}encode(f,g,k=0){const R=k;let W=0,he=0;for(const ke of this.fields){let Tt=ke.span;if(he=0<Tt?Tt:0,ke.property!==void 0){const Qt=f[ke.property];Qt!==void 0&&(he=ke.encode(Qt,g,k),0>Tt&&(Tt=ke.getSpan(g,k)))}W=k,k+=Tt}return W+he-R}fromArray(f){const g=this.makeDestinationObject();for(const k of this.fields)k.property!==void 0&&0<f.length&&(g[k.property]=f.shift());return g}layoutFor(f){if(typeof f!="string")throw new TypeError("property must be string");for(const g of this.fields)if(g.property===f)return g}offsetOf(f){if(typeof f!="string")throw new TypeError("property must be string");let g=0;for(const k of this.fields){if(k.property===f)return g;0>k.span?g=-1:0<=g&&(g+=k.span)}}};e.Structure=A;var S=class{constructor(f){this.property=f}decode(f,g){throw new Error("UnionDiscriminator is abstract")}encode(f,g,k){throw new Error("UnionDiscriminator is abstract")}};e.UnionDiscriminator=S;var _=class extends S{constructor(f,g){if(!(f instanceof a&&f.isCount()))throw new TypeError("layout must be an unsigned integer ExternalLayout");super(g||f.property||"variant"),this.layout=f}decode(f,g){return this.layout.decode(f,g)}encode(f,g,k){return this.layout.encode(f,g,k)}};e.UnionLayoutDiscriminator=_;var T=class extends s{constructor(f,g,k){let R;if(f instanceof l||f instanceof d)R=new _(new u(f));else if(f instanceof a&&f.isCount())R=new _(f);else if(f instanceof S)R=f;else throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");if(g===void 0&&(g=null),!(g===null||g instanceof s))throw new TypeError("defaultLayout must be null or a Layout");if(g!==null){if(0>g.span)throw new Error("defaultLayout must have constant span");g.property===void 0&&(g=g.replicate("content"))}let W=-1;g&&(W=g.span,0<=W&&(f instanceof l||f instanceof d)&&(W+=R.layout.span)),super(W,k),this.discriminator=R,this.usesPrefixDiscriminator=f instanceof l||f instanceof d,this.defaultLayout=g,this.registry={};let he=this.defaultGetSourceVariant.bind(this);this.getSourceVariant=function(ke){return he(ke)},this.configGetSourceVariant=function(ke){he=ke.bind(this)}}getSpan(f,g=0){if(0<=this.span)return this.span;const k=this.getVariant(f,g);if(!k)throw new Error("unable to determine span for unrecognized variant");return k.getSpan(f,g)}defaultGetSourceVariant(f){if(Object.prototype.hasOwnProperty.call(f,this.discriminator.property)){if(this.defaultLayout&&this.defaultLayout.property&&Object.prototype.hasOwnProperty.call(f,this.defaultLayout.property))return;const g=this.registry[f[this.discriminator.property]];if(g&&(!g.layout||g.property&&Object.prototype.hasOwnProperty.call(f,g.property)))return g}else for(const g in this.registry){const k=this.registry[g];if(k.property&&Object.prototype.hasOwnProperty.call(f,k.property))return k}throw new Error("unable to infer src variant")}decode(f,g=0){let k;const R=this.discriminator,W=R.decode(f,g),he=this.registry[W];if(he===void 0){const ke=this.defaultLayout;let Tt=0;this.usesPrefixDiscriminator&&(Tt=R.layout.span),k=this.makeDestinationObject(),k[R.property]=W,k[ke.property]=ke.decode(f,g+Tt)}else k=he.decode(f,g);return k}encode(f,g,k=0){const R=this.getSourceVariant(f);if(R===void 0){const W=this.discriminator,he=this.defaultLayout;let ke=0;return this.usesPrefixDiscriminator&&(ke=W.layout.span),W.encode(f[W.property],g,k),ke+he.encode(f[he.property],g,k+ke)}return R.encode(f,g,k)}addVariant(f,g,k){const R=new F(this,f,g,k);return this.registry[f]=R,R}getVariant(f,g=0){let k;return f instanceof Uint8Array?k=this.discriminator.decode(f,g):k=f,this.registry[k]}};e.Union=T;var F=class extends s{constructor(f,g,k,R){if(!(f instanceof T))throw new TypeError("union must be a Union");if(!Number.isInteger(g)||0>g)throw new TypeError("variant must be a (non-negative) integer");if(typeof k=="string"&&R===void 0&&(R=k,k=null),k){if(!(k instanceof s))throw new TypeError("layout must be a Layout");if(f.defaultLayout!==null&&0<=k.span&&k.span>f.defaultLayout.span)throw new Error("variant span exceeds span of containing union");if(typeof R!="string")throw new TypeError("variant must have a String property")}let W=f.span;0>f.span&&(W=k?k.span:0,0<=W&&f.usesPrefixDiscriminator&&(W+=f.discriminator.layout.span)),super(W,R),this.union=f,this.variant=g,this.layout=k||null}getSpan(f,g=0){if(0<=this.span)return this.span;let k=0;this.union.usesPrefixDiscriminator&&(k=this.union.discriminator.layout.span);let R=0;return this.layout&&(R=this.layout.getSpan(f,g+k)),k+R}decode(f,g=0){const k=this.makeDestinationObject();if(this!==this.union.getVariant(f,g))throw new Error("variant mismatch");let R=0;return this.union.usesPrefixDiscriminator&&(R=this.union.discriminator.layout.span),this.layout?k[this.property]=this.layout.decode(f,g+R):this.property?k[this.property]=!0:this.union.usesPrefixDiscriminator&&(k[this.union.discriminator.property]=this.variant),k}encode(f,g,k=0){let R=0;if(this.union.usesPrefixDiscriminator&&(R=this.union.discriminator.layout.span),this.layout&&!Object.prototype.hasOwnProperty.call(f,this.property))throw new TypeError("variant lacks property "+this.property);this.union.discriminator.encode(this.variant,g,k);let W=R;if(this.layout&&(this.layout.encode(f[this.property],g,k+R),W+=this.layout.getSpan(g,k+R),0<=this.union.span&&W>this.union.span))throw new Error("encoded variant overruns containing union");return W}fromArray(f){if(this.layout)return this.layout.fromArray(f)}};e.VariantLayout=F;function L(f){return 0>f&&(f+=4294967296),f}var K=class extends s{constructor(f,g,k){if(!(f instanceof l||f instanceof d))throw new TypeError("word must be a UInt or UIntBE layout");if(typeof g=="string"&&k===void 0&&(k=g,g=!1),4<f.span)throw new RangeError("word cannot exceed 32 bits");super(f.span,k),this.word=f,this.msb=!!g,this.fields=[];let R=0;this._packedSetValue=function(W){return R=L(W),this},this._packedGetValue=function(){return R}}decode(f,g=0){const k=this.makeDestinationObject(),R=this.word.decode(f,g);this._packedSetValue(R);for(const W of this.fields)W.property!==void 0&&(k[W.property]=W.decode(f));return k}encode(f,g,k=0){const R=this.word.decode(g,k);this._packedSetValue(R);for(const W of this.fields)if(W.property!==void 0){const he=f[W.property];he!==void 0&&W.encode(he)}return this.word.encode(this._packedGetValue(),g,k)}addField(f,g){const k=new X(this,f,g);return this.fields.push(k),k}addBoolean(f){const g=new ne(this,f);return this.fields.push(g),g}fieldFor(f){if(typeof f!="string")throw new TypeError("property must be string");for(const g of this.fields)if(g.property===f)return g}};e.BitStructure=K;var X=class{constructor(f,g,k){if(!(f instanceof K))throw new TypeError("container must be a BitStructure");if(!Number.isInteger(g)||0>=g)throw new TypeError("bits must be positive integer");const R=8*f.span,W=f.fields.reduce((he,ke)=>he+ke.bits,0);if(g+W>R)throw new Error("bits too long for span remainder ("+(R-W)+" of "+R+" remain)");this.container=f,this.bits=g,this.valueMask=(1<<g)-1,g===32&&(this.valueMask=4294967295),this.start=W,this.container.msb&&(this.start=R-W-g),this.wordMask=L(this.valueMask<<this.start),this.property=k}decode(f,g){const k=this.container._packedGetValue();return L(k&this.wordMask)>>>this.start}encode(f){if(typeof f!="number"||!Number.isInteger(f)||f!==L(f&this.valueMask))throw new TypeError(i("BitField.encode",this)+" value must be integer not exceeding "+this.valueMask);const g=this.container._packedGetValue(),k=L(f<<this.start);this.container._packedSetValue(L(g&~this.wordMask)|k)}};e.BitField=X;var ne=class extends X{constructor(f,g){super(f,1,g)}decode(f,g){return!!super.decode(f,g)}encode(f){typeof f=="boolean"&&(f=+f),super.encode(f)}};e.Boolean=ne;var De=class extends s{constructor(f,g){if(!(f instanceof a&&f.isCount()||Number.isInteger(f)&&0<=f))throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");let k=-1;f instanceof a||(k=f),super(k,g),this.length=f}getSpan(f,g){let k=this.span;return 0>k&&(k=this.length.decode(f,g)),k}decode(f,g=0){let k=this.span;return 0>k&&(k=this.length.decode(f,g)),n(f).slice(g,g+k)}encode(f,g,k){let R=this.length;if(this.length instanceof a&&(R=f.length),!(f instanceof Uint8Array&&R===f.length))throw new TypeError(i("Blob.encode",this)+" requires (length "+R+") Uint8Array as src");if(k+R>g.length)throw new RangeError("encoding overruns Uint8Array");const W=n(f);return n(g).write(W.toString("hex"),k,R,"hex"),this.length instanceof a&&this.length.encode(R,g,k),R}};e.Blob=De;var be=class extends s{constructor(f){super(-1,f)}getSpan(f,g=0){r(f);let k=g;for(;k<f.length&&f[k]!==0;)k+=1;return 1+k-g}decode(f,g=0){const k=this.getSpan(f,g);return n(f).slice(g,g+k-1).toString("utf-8")}encode(f,g,k=0){typeof f!="string"&&(f=String(f));const R=t.Buffer.from(f,"utf8"),W=R.length;if(k+W>g.length)throw new RangeError("encoding overruns Buffer");const he=n(g);return R.copy(he,k),he[k+W]=0,W+1}};e.CString=be;var ae=class extends s{constructor(f,g){if(typeof f=="string"&&g===void 0&&(g=f,f=void 0),f===void 0)f=-1;else if(!Number.isInteger(f))throw new TypeError("maxSpan must be an integer");super(-1,g),this.maxSpan=f}getSpan(f,g=0){return r(f),f.length-g}decode(f,g=0){const k=this.getSpan(f,g);if(0<=this.maxSpan&&this.maxSpan<k)throw new RangeError("text length exceeds maxSpan");return n(f).slice(g,g+k).toString("utf-8")}encode(f,g,k=0){typeof f!="string"&&(f=String(f));const R=t.Buffer.from(f,"utf8"),W=R.length;if(0<=this.maxSpan&&this.maxSpan<W)throw new RangeError("text length exceeds maxSpan");if(k+W>g.length)throw new RangeError("encoding overruns Buffer");return R.copy(n(g),k),W}};e.UTF8=ae;var Oe=class extends s{constructor(f,g){super(0,g),this.value=f}decode(f,g){return this.value}encode(f,g,k){return 0}};e.Constant=Oe,e.greedy=(f,g)=>new c(f,g),e.offset=(f,g,k)=>new u(f,g,k),e.u8=f=>new l(1,f),e.u16=f=>new l(2,f),e.u24=f=>new l(3,f),e.u32=f=>new l(4,f),e.u40=f=>new l(5,f),e.u48=f=>new l(6,f),e.nu64=f=>new y(f),e.u16be=f=>new d(2,f),e.u24be=f=>new d(3,f),e.u32be=f=>new d(4,f),e.u40be=f=>new d(5,f),e.u48be=f=>new d(6,f),e.nu64be=f=>new P(f),e.s8=f=>new h(1,f),e.s16=f=>new h(2,f),e.s24=f=>new h(3,f),e.s32=f=>new h(4,f),e.s40=f=>new h(5,f),e.s48=f=>new h(6,f),e.ns64=f=>new O(f),e.s16be=f=>new p(2,f),e.s24be=f=>new p(3,f),e.s32be=f=>new p(4,f),e.s40be=f=>new p(5,f),e.s48be=f=>new p(6,f),e.ns64be=f=>new N(f),e.f32=f=>new B(f),e.f32be=f=>new U(f),e.f64=f=>new H(f),e.f64be=f=>new q(f),e.struct=(f,g,k)=>new A(f,g,k),e.bits=(f,g,k)=>new K(f,g,k),e.seq=(f,g,k)=>new C(f,g,k),e.union=(f,g,k)=>new T(f,g,k),e.unionLayoutDiscriminator=(f,g)=>new _(f,g),e.blob=(f,g)=>new De(f,g),e.cstr=f=>new be(f),e.utf8=(f,g)=>new ae(f,g),e.constant=(f,g)=>new Oe(f,g)}}),cE=gt({"../../node_modules/bigint-buffer/dist/browser.js"(e){Jn(),Object.defineProperty(e,"__esModule",{value:!0});function t(i){{const o=je.from(i);o.reverse();const a=o.toString("hex");return a.length===0?BigInt(0):BigInt(`0x${a}`)}}e.toBigIntLE=t;function r(i){{const o=i.toString("hex");return o.length===0?BigInt(0):BigInt(`0x${o}`)}}e.toBigIntBE=r;function n(i,o){{const a=i.toString(16),c=je.from(a.padStart(o*2,"0").slice(0,o*2),"hex");return c.reverse(),c}}e.toBufferLE=n;function s(i,o){{const a=i.toString(16);return je.from(a.padStart(o*2,"0").slice(0,o*2),"hex")}}e.toBufferBE=s}});function rp(){if(!vs&&(vs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!vs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vs(np)}var vs,np,sp=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/rng.js"(){np=new Uint8Array(16)}}),ip,uE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/regex.js"(){ip=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i}});function lE(e){return typeof e=="string"&&ip.test(e)}var as,Bi=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/validate.js"(){uE(),as=lE}});function dE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(Xe[e[t+0]]+Xe[e[t+1]]+Xe[e[t+2]]+Xe[e[t+3]]+"-"+Xe[e[t+4]]+Xe[e[t+5]]+"-"+Xe[e[t+6]]+Xe[e[t+7]]+"-"+Xe[e[t+8]]+Xe[e[t+9]]+"-"+Xe[e[t+10]]+Xe[e[t+11]]+Xe[e[t+12]]+Xe[e[t+13]]+Xe[e[t+14]]+Xe[e[t+15]]).toLowerCase();if(!as(r))throw TypeError("Stringified UUID is invalid");return r}var Xe,cs,Di=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/stringify.js"(){Bi(),Xe=[];for(var e=0;e<256;++e)Xe.push((e+256).toString(16).substr(1));cs=dE}});function fE(e,t,r){var n=t&&r||0,s=t||new Array(16);e=e||{};var i=e.node||Cu,o=e.clockseq!==void 0?e.clockseq:ao;if(i==null||o==null){var a=e.random||(e.rng||rp)();i==null&&(i=Cu=[a[0]|1,a[1],a[2],a[3],a[4],a[5]]),o==null&&(o=ao=(a[6]<<8|a[7])&16383)}var c=e.msecs!==void 0?e.msecs:Date.now(),u=e.nsecs!==void 0?e.nsecs:$s+1,l=c-js+(u-$s)/1e4;if(l<0&&e.clockseq===void 0&&(o=o+1&16383),(l<0||c>js)&&e.nsecs===void 0&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");js=c,$s=u,ao=o,c+=122192928e5;var d=((c&268435455)*1e4+u)%4294967296;s[n++]=d>>>24&255,s[n++]=d>>>16&255,s[n++]=d>>>8&255,s[n++]=d&255;var h=c/4294967296*1e4&268435455;s[n++]=h>>>8&255,s[n++]=h&255,s[n++]=h>>>24&15|16,s[n++]=h>>>16&255,s[n++]=o>>>8|128,s[n++]=o&255;for(var p=0;p<6;++p)s[n+p]=i[p];return t||cs(s)}var Cu,ao,js,$s,op,hE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/v1.js"(){sp(),Di(),js=0,$s=0,op=fE}});function pE(e){if(!as(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=t&255,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=t&255,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=t&255,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=t&255,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=t&255,r}var Xa,ap=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/parse.js"(){Bi(),Xa=pE}});function gE(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}function cp(e,t,r){function n(s,i,o,a){if(typeof s=="string"&&(s=gE(s)),typeof i=="string"&&(i=Xa(i)),i.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var c=new Uint8Array(16+s.length);if(c.set(i),c.set(s,i.length),c=r(c),c[6]=c[6]&15|t,c[8]=c[8]&63|128,o){a=a||0;for(var u=0;u<16;++u)o[a+u]=c[u];return o}return cs(c)}try{n.name=e}catch{}return n.DNS=up,n.URL=lp,n}var up,lp,dp=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/v35.js"(){Di(),ap(),up="6ba7b810-9dad-11d1-80b4-00c04fd430c8",lp="6ba7b811-9dad-11d1-80b4-00c04fd430c8"}});function mE(e){if(typeof e=="string"){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return bE(yE(EE(e),e.length*8))}function bE(e){for(var t=[],r=e.length*32,n="0123456789abcdef",s=0;s<r;s+=8){var i=e[s>>5]>>>s%32&255,o=parseInt(n.charAt(i>>>4&15)+n.charAt(i&15),16);t.push(o)}return t}function fp(e){return(e+64>>>9<<4)+14+1}function yE(e,t){e[t>>5]|=128<<t%32,e[fp(t)-1]=t;for(var r=1732584193,n=-271733879,s=-1732584194,i=271733878,o=0;o<e.length;o+=16){var a=r,c=n,u=s,l=i;r=ot(r,n,s,i,e[o],7,-680876936),i=ot(i,r,n,s,e[o+1],12,-389564586),s=ot(s,i,r,n,e[o+2],17,606105819),n=ot(n,s,i,r,e[o+3],22,-1044525330),r=ot(r,n,s,i,e[o+4],7,-176418897),i=ot(i,r,n,s,e[o+5],12,1200080426),s=ot(s,i,r,n,e[o+6],17,-1473231341),n=ot(n,s,i,r,e[o+7],22,-45705983),r=ot(r,n,s,i,e[o+8],7,1770035416),i=ot(i,r,n,s,e[o+9],12,-1958414417),s=ot(s,i,r,n,e[o+10],17,-42063),n=ot(n,s,i,r,e[o+11],22,-1990404162),r=ot(r,n,s,i,e[o+12],7,1804603682),i=ot(i,r,n,s,e[o+13],12,-40341101),s=ot(s,i,r,n,e[o+14],17,-1502002290),n=ot(n,s,i,r,e[o+15],22,1236535329),r=at(r,n,s,i,e[o+1],5,-165796510),i=at(i,r,n,s,e[o+6],9,-1069501632),s=at(s,i,r,n,e[o+11],14,643717713),n=at(n,s,i,r,e[o],20,-373897302),r=at(r,n,s,i,e[o+5],5,-701558691),i=at(i,r,n,s,e[o+10],9,38016083),s=at(s,i,r,n,e[o+15],14,-660478335),n=at(n,s,i,r,e[o+4],20,-405537848),r=at(r,n,s,i,e[o+9],5,568446438),i=at(i,r,n,s,e[o+14],9,-1019803690),s=at(s,i,r,n,e[o+3],14,-187363961),n=at(n,s,i,r,e[o+8],20,1163531501),r=at(r,n,s,i,e[o+13],5,-1444681467),i=at(i,r,n,s,e[o+2],9,-51403784),s=at(s,i,r,n,e[o+7],14,1735328473),n=at(n,s,i,r,e[o+12],20,-1926607734),r=ct(r,n,s,i,e[o+5],4,-378558),i=ct(i,r,n,s,e[o+8],11,-2022574463),s=ct(s,i,r,n,e[o+11],16,1839030562),n=ct(n,s,i,r,e[o+14],23,-35309556),r=ct(r,n,s,i,e[o+1],4,-1530992060),i=ct(i,r,n,s,e[o+4],11,1272893353),s=ct(s,i,r,n,e[o+7],16,-155497632),n=ct(n,s,i,r,e[o+10],23,-1094730640),r=ct(r,n,s,i,e[o+13],4,681279174),i=ct(i,r,n,s,e[o],11,-358537222),s=ct(s,i,r,n,e[o+3],16,-722521979),n=ct(n,s,i,r,e[o+6],23,76029189),r=ct(r,n,s,i,e[o+9],4,-640364487),i=ct(i,r,n,s,e[o+12],11,-421815835),s=ct(s,i,r,n,e[o+15],16,530742520),n=ct(n,s,i,r,e[o+2],23,-995338651),r=ut(r,n,s,i,e[o],6,-198630844),i=ut(i,r,n,s,e[o+7],10,1126891415),s=ut(s,i,r,n,e[o+14],15,-1416354905),n=ut(n,s,i,r,e[o+5],21,-57434055),r=ut(r,n,s,i,e[o+12],6,1700485571),i=ut(i,r,n,s,e[o+3],10,-1894986606),s=ut(s,i,r,n,e[o+10],15,-1051523),n=ut(n,s,i,r,e[o+1],21,-2054922799),r=ut(r,n,s,i,e[o+8],6,1873313359),i=ut(i,r,n,s,e[o+15],10,-30611744),s=ut(s,i,r,n,e[o+6],15,-1560198380),n=ut(n,s,i,r,e[o+13],21,1309151649),r=ut(r,n,s,i,e[o+4],6,-145523070),i=ut(i,r,n,s,e[o+11],10,-1120210379),s=ut(s,i,r,n,e[o+2],15,718787259),n=ut(n,s,i,r,e[o+9],21,-343485551),r=hr(r,a),n=hr(n,c),s=hr(s,u),i=hr(i,l)}return[r,n,s,i]}function EE(e){if(e.length===0)return[];for(var t=e.length*8,r=new Uint32Array(fp(t)),n=0;n<t;n+=8)r[n>>5]|=(e[n/8]&255)<<n%32;return r}function hr(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function wE(e,t){return e<<t|e>>>32-t}function Ri(e,t,r,n,s,i){return hr(wE(hr(hr(t,e),hr(n,i)),s),r)}function ot(e,t,r,n,s,i,o){return Ri(t&r|~t&n,e,t,s,i,o)}function at(e,t,r,n,s,i,o){return Ri(t&n|r&~n,e,t,s,i,o)}function ct(e,t,r,n,s,i,o){return Ri(t^r^n,e,t,s,i,o)}function ut(e,t,r,n,s,i,o){return Ri(r^(t|~n),e,t,s,i,o)}var hp,vE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/md5.js"(){hp=mE}}),Bu,pp,AE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/v3.js"(){dp(),vE(),Bu=cp("v3",48,hp),pp=Bu}});function kE(e,t,r){e=e||{};var n=e.random||(e.rng||rp)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(var s=0;s<16;++s)t[r+s]=n[s];return t}return cs(n)}var gp,SE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/v4.js"(){sp(),Di(),gp=kE}});function _E(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:return t^r^n;case 2:return t&r^t&n^r&n;case 3:return t^r^n}}function co(e,t){return e<<t|e>>>32-t}function IE(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var n=unescape(encodeURIComponent(e));e=[];for(var s=0;s<n.length;++s)e.push(n.charCodeAt(s))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,o=Math.ceil(i/16),a=new Array(o),c=0;c<o;++c){for(var u=new Uint32Array(16),l=0;l<16;++l)u[l]=e[c*64+l*4]<<24|e[c*64+l*4+1]<<16|e[c*64+l*4+2]<<8|e[c*64+l*4+3];a[c]=u}a[o-1][14]=(e.length-1)*8/Math.pow(2,32),a[o-1][14]=Math.floor(a[o-1][14]),a[o-1][15]=(e.length-1)*8&4294967295;for(var d=0;d<o;++d){for(var h=new Uint32Array(80),p=0;p<16;++p)h[p]=a[d][p];for(var w=16;w<80;++w)h[w]=co(h[w-3]^h[w-8]^h[w-14]^h[w-16],1);for(var m=r[0],E=r[1],y=r[2],P=r[3],O=r[4],N=0;N<80;++N){var B=Math.floor(N/20),U=co(m,5)+_E(B,E,y,P)+O+t[B]+h[N]>>>0;O=P,P=y,y=co(E,30)>>>0,E=m,m=U}r[0]=r[0]+m>>>0,r[1]=r[1]+E>>>0,r[2]=r[2]+y>>>0,r[3]=r[3]+P>>>0,r[4]=r[4]+O>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var mp,TE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/sha1.js"(){mp=IE}}),Du,bp,PE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/v5.js"(){dp(),TE(),Du=cp("v5",80,mp),bp=Du}}),yp,CE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/nil.js"(){yp="00000000-0000-0000-0000-000000000000"}});function BE(e){if(!as(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}var Ep,DE=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/version.js"(){Bi(),Ep=BE}}),ec={};Zn(ec,{NIL:()=>yp,parse:()=>Xa,stringify:()=>cs,v1:()=>op,v3:()=>pp,v4:()=>gp,v5:()=>bp,validate:()=>as,version:()=>Ep});var wp=ve({"../../node_modules/jayson/node_modules/uuid/dist/esm-browser/index.js"(){hE(),AE(),SE(),PE(),CE(),DE(),Bi(),Di(),ap()}}),RE=gt({"../../node_modules/jayson/lib/generateRequest.js"(e,t){const r=(wp(),mi(ec)).v4,n=function(s,i,o,a){if(typeof s!="string")throw new TypeError(s+" must be a string");a=a||{};const c=typeof a.version=="number"?a.version:2;if(c!==1&&c!==2)throw new TypeError(c+" must be 1 or 2");const u={method:s};if(c===2&&(u.jsonrpc="2.0"),i){if(typeof i!="object"&&!Array.isArray(i))throw new TypeError(i+" must be an object, array or omitted");u.params=i}if(typeof o>"u"){const l=typeof a.generator=="function"?a.generator:function(){return r()};u.id=l(u,a)}else c===2&&o===null?a.notificationIdNull&&(u.id=null):u.id=o;return u};t.exports=n}}),OE=gt({"../../node_modules/jayson/lib/client/browser/index.js"(e,t){const r=(wp(),mi(ec)).v4,n=RE(),s=function(i,o){if(!(this instanceof s))return new s(i,o);o||(o={}),this.options={reviver:typeof o.reviver<"u"?o.reviver:null,replacer:typeof o.replacer<"u"?o.replacer:null,generator:typeof o.generator<"u"?o.generator:function(){return r()},version:typeof o.version<"u"?o.version:2,notificationIdNull:typeof o.notificationIdNull=="boolean"?o.notificationIdNull:!1},this.callServer=i};t.exports=s,s.prototype.request=function(i,o,a,c){const u=this;let l=null;const d=Array.isArray(i)&&typeof o=="function";if(this.options.version===1&&d)throw new TypeError("JSON-RPC 1.0 does not support batching");if(d||!d&&i&&typeof i=="object"&&typeof o=="function")c=o,l=i;else{typeof a=="function"&&(c=a,a=void 0);const w=typeof c=="function";try{l=n(i,o,a,{generator:this.options.generator,version:this.options.version,notificationIdNull:this.options.notificationIdNull})}catch(m){if(w)return c(m);throw m}if(!w)return l}let p;try{p=JSON.stringify(l,this.options.replacer)}catch(w){return c(w)}return this.callServer(p,function(w,m){u._parseResponse(w,m,c)}),l},s.prototype._parseResponse=function(i,o,a){if(i){a(i);return}if(!o)return a();let c;try{c=JSON.parse(o,this.options.reviver)}catch(u){return a(u)}if(a.length===3)if(Array.isArray(c)){const u=function(d){return typeof d.error<"u"},l=function(d){return!u(d)};return a(null,c.filter(u),c.filter(l))}else return a(null,c.error,c.result);a(null,c)}}}),vp=gt({"../../node_modules/rpc-websockets/node_modules/eventemitter3/index.js"(e,t){var r=Object.prototype.hasOwnProperty,n="~";function s(){}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(n=!1));function i(u,l,d){this.fn=u,this.context=l,this.once=d||!1}function o(u,l,d,h,p){if(typeof d!="function")throw new TypeError("The listener must be a function");var w=new i(d,h||u,p),m=n?n+l:l;return u._events[m]?u._events[m].fn?u._events[m]=[u._events[m],w]:u._events[m].push(w):(u._events[m]=w,u._eventsCount++),u}function a(u,l){--u._eventsCount===0?u._events=new s:delete u._events[l]}function c(){this._events=new s,this._eventsCount=0}c.prototype.eventNames=function(){var l=[],d,h;if(this._eventsCount===0)return l;for(h in d=this._events)r.call(d,h)&&l.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(d)):l},c.prototype.listeners=function(l){var d=n?n+l:l,h=this._events[d];if(!h)return[];if(h.fn)return[h.fn];for(var p=0,w=h.length,m=new Array(w);p<w;p++)m[p]=h[p].fn;return m},c.prototype.listenerCount=function(l){var d=n?n+l:l,h=this._events[d];return h?h.fn?1:h.length:0},c.prototype.emit=function(l,d,h,p,w,m){var E=n?n+l:l;if(!this._events[E])return!1;var y=this._events[E],P=arguments.length,O,N;if(y.fn){switch(y.once&&this.removeListener(l,y.fn,void 0,!0),P){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,d),!0;case 3:return y.fn.call(y.context,d,h),!0;case 4:return y.fn.call(y.context,d,h,p),!0;case 5:return y.fn.call(y.context,d,h,p,w),!0;case 6:return y.fn.call(y.context,d,h,p,w,m),!0}for(N=1,O=new Array(P-1);N<P;N++)O[N-1]=arguments[N];y.fn.apply(y.context,O)}else{var B=y.length,U;for(N=0;N<B;N++)switch(y[N].once&&this.removeListener(l,y[N].fn,void 0,!0),P){case 1:y[N].fn.call(y[N].context);break;case 2:y[N].fn.call(y[N].context,d);break;case 3:y[N].fn.call(y[N].context,d,h);break;case 4:y[N].fn.call(y[N].context,d,h,p);break;default:if(!O)for(U=1,O=new Array(P-1);U<P;U++)O[U-1]=arguments[U];y[N].fn.apply(y[N].context,O)}}return!0},c.prototype.on=function(l,d,h){return o(this,l,d,h,!1)},c.prototype.once=function(l,d,h){return o(this,l,d,h,!0)},c.prototype.removeListener=function(l,d,h,p){var w=n?n+l:l;if(!this._events[w])return this;if(!d)return a(this,w),this;var m=this._events[w];if(m.fn)m.fn===d&&(!p||m.once)&&(!h||m.context===h)&&a(this,w);else{for(var E=0,y=[],P=m.length;E<P;E++)(m[E].fn!==d||p&&!m[E].once||h&&m[E].context!==h)&&y.push(m[E]);y.length?this._events[w]=y.length===1?y[0]:y:a(this,w)}return this},c.prototype.removeAllListeners=function(l){var d;return l?(d=n?n+l:l,this._events[d]&&a(this,d)):(this._events=new s,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,typeof t<"u"&&(t.exports=c)}}),xE=gt({"../../node_modules/rpc-websockets/dist/lib/utils.cjs"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.createError=e.DefaultDataPack=void 0;const t=new Map([[-32e3,"Event not provided"],[-32600,"Invalid Request"],[-32601,"Method not found"],[-32602,"Invalid params"],[-32603,"Internal error"],[-32604,"Params not found"],[-32605,"Method forbidden"],[-32606,"Event forbidden"],[-32700,"Parse error"]]);var r=class{encode(s){return JSON.stringify(s)}decode(s){return JSON.parse(s)}};e.DefaultDataPack=r;function n(s,i){const o={code:s,message:t.get(s)||"Internal Server Error"};return i&&(o.data=i),o}e.createError=n}}),NE=gt({"../../node_modules/rpc-websockets/dist/lib/client.cjs"(e){Jn(),Object.defineProperty(e,"__esModule",{value:!0});const t=vp(),r=xE();var n=class extends t.EventEmitter{constructor(s,i="ws://localhost:8080",{autoconnect:o=!0,reconnect:a=!0,reconnect_interval:c=1e3,max_reconnects:u=5,...l}={},d,h){super(),it.defineProperty(this,"address",void 0),it.defineProperty(this,"rpc_id",void 0),it.defineProperty(this,"queue",void 0),it.defineProperty(this,"options",void 0),it.defineProperty(this,"autoconnect",void 0),it.defineProperty(this,"ready",void 0),it.defineProperty(this,"reconnect",void 0),it.defineProperty(this,"reconnect_timer_id",void 0),it.defineProperty(this,"reconnect_interval",void 0),it.defineProperty(this,"max_reconnects",void 0),it.defineProperty(this,"rest_options",void 0),it.defineProperty(this,"current_reconnects",void 0),it.defineProperty(this,"generate_request_id",void 0),it.defineProperty(this,"socket",void 0),it.defineProperty(this,"webSocketFactory",void 0),it.defineProperty(this,"dataPack",void 0),this.webSocketFactory=s,this.queue={},this.rpc_id=0,this.address=i,this.autoconnect=o,this.ready=!1,this.reconnect=a,this.reconnect_timer_id=void 0,this.reconnect_interval=c,this.max_reconnects=u,this.rest_options=l,this.current_reconnects=0,this.generate_request_id=d||(()=>++this.rpc_id),h?this.dataPack=h:this.dataPack=new r.DefaultDataPack,this.autoconnect&&this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}connect(){this.socket||this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}call(s,i,o,a){return!a&&typeof o=="object"&&(a=o,o=null),new Promise((c,u)=>{if(!this.ready)return u(new Error("socket not ready"));const l=this.generate_request_id(s,i),d={jsonrpc:"2.0",method:s,params:i||void 0,id:l};this.socket.send(this.dataPack.encode(d),a,h=>{if(h)return u(h);this.queue[l]={promise:[c,u]},o&&(this.queue[l].timeout=setTimeout(()=>{delete this.queue[l],u(new Error("reply timeout"))},o))})})}async login(s){const i=await this.call("rpc.login",s);if(!i)throw new Error("authentication failed");return i}async listMethods(){return await this.call("__listMethods")}notify(s,i){return new Promise((o,a)=>{if(!this.ready)return a(new Error("socket not ready"));const c={jsonrpc:"2.0",method:s,params:i};this.socket.send(this.dataPack.encode(c),u=>{if(u)return a(u);o()})})}async subscribe(s){typeof s=="string"&&(s=[s]);const i=await this.call("rpc.on",s);if(typeof s=="string"&&i[s]!=="ok")throw new Error("Failed subscribing to an event '"+s+"' with: "+i[s]);return i}async unsubscribe(s){typeof s=="string"&&(s=[s]);const i=await this.call("rpc.off",s);if(typeof s=="string"&&i[s]!=="ok")throw new Error("Failed unsubscribing from an event with: "+i);return i}close(s,i){this.socket.close(s||1e3,i)}setAutoReconnect(s){this.reconnect=s}setReconnectInterval(s){this.reconnect_interval=s}setMaxReconnects(s){this.max_reconnects=s}_connect(s,i){clearTimeout(this.reconnect_timer_id),this.socket=this.webSocketFactory(s,i),this.socket.addEventListener("open",()=>{this.ready=!0,this.emit("open"),this.current_reconnects=0}),this.socket.addEventListener("message",({data:o})=>{o instanceof ArrayBuffer&&(o=je.from(o).toString());try{o=this.dataPack.decode(o)}catch{return}if(o.notification&&this.listeners(o.notification).length){if(!Object.keys(o.params).length)return this.emit(o.notification);const a=[o.notification];if(o.params.constructor===Object)a.push(o.params);else for(let c=0;c<o.params.length;c++)a.push(o.params[c]);return Promise.resolve().then(()=>{this.emit.apply(this,a)})}if(!this.queue[o.id])return o.method?Promise.resolve().then(()=>{this.emit(o.method,o==null?void 0:o.params)}):void 0;"error"in o=="result"in o&&this.queue[o.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),this.queue[o.id].timeout&&clearTimeout(this.queue[o.id].timeout),o.error?this.queue[o.id].promise[1](o.error):this.queue[o.id].promise[0](o.result),delete this.queue[o.id]}),this.socket.addEventListener("error",o=>this.emit("error",o)),this.socket.addEventListener("close",({code:o,reason:a})=>{this.ready&&setTimeout(()=>this.emit("close",o,a),0),this.ready=!1,this.socket=void 0,o!==1e3&&(this.current_reconnects++,this.reconnect&&(this.max_reconnects>this.current_reconnects||this.max_reconnects===0)&&(this.reconnect_timer_id=setTimeout(()=>this._connect(s,i),this.reconnect_interval)))})}};e.default=n}}),LE=gt({"../../node_modules/rpc-websockets/dist/lib/client/websocket.browser.cjs"(e){Object.defineProperty(e,"__esModule",{value:!0});const t=vp();var r=class extends t.EventEmitter{constructor(s,i,o){super(),it.defineProperty(this,"socket",void 0),this.socket=new window.WebSocket(s,o),this.socket.onopen=()=>this.emit("open"),this.socket.onmessage=a=>this.emit("message",a.data),this.socket.onerror=a=>this.emit("error",a),this.socket.onclose=a=>{this.emit("close",a.code,a.reason)}}send(s,i,o){const a=o||i;try{this.socket.send(s),a()}catch(c){a(c)}}close(s,i){this.socket.close(s,i)}addEventListener(s,i,o){this.socket.addEventListener(s,i,o)}};function n(s,i){return new r(s,i)}e.default=n}});function Ru(e){e.lowS!==void 0&&Lr("lowS",e.lowS),e.prehash!==void 0&&Lr("prehash",e.prehash)}function FE(e,t,r){function n(s){const i=e.sqr(s),o=e.mul(i,s);return e.add(e.add(o,e.mul(s,t)),r)}return n}function Ap(e,t,r){const{BYTES:n}=e;function s(i){let o;if(typeof i=="bigint")o=i;else{let a=Me("private key",i);if(t){if(!t.includes(a.length*2))throw new Error("invalid private key");const c=new Uint8Array(n);c.set(a,c.length-a.length),a=c}try{o=e.fromBytes(a)}catch{throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof i}`)}}if(r&&(o=e.create(o)),!e.isValidNot0(o))throw new Error("invalid private key: out of range [1..N-1]");return o}return s}function ME(e,t={}){const{Fp:r,Fn:n}=Yh("weierstrass",e,t),{h:s,n:i}=e;ss(t,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:o}=t;if(o&&(!r.is0(e.a)||typeof o.beta!="bigint"||typeof o.splitScalar!="function"))throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');function a(){if(!r.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function c(q,C,A){const{x:S,y:_}=C.toAffine(),T=r.toBytes(S);if(Lr("isCompressed",A),A){a();const F=!r.isOdd(_);return tr(kp(F),T)}else return tr(Uint8Array.of(4),T,r.toBytes(_))}function u(q){ai(q);const C=r.BYTES,A=C+1,S=2*C+1,_=q.length,T=q[0],F=q.subarray(1);if(_===A&&(T===2||T===3)){const L=r.fromBytes(F);if(!r.isValid(L))throw new Error("bad point: is not on curve, wrong x");const K=h(L);let X;try{X=r.sqrt(K)}catch(be){const ae=be instanceof Error?": "+be.message:"";throw new Error("bad point: is not on curve, sqrt error"+ae)}a();const ne=r.isOdd(X);return(T&1)===1!==ne&&(X=r.neg(X)),{x:L,y:X}}else if(_===S&&T===4){const L=r.fromBytes(F.subarray(C*0,C*1)),K=r.fromBytes(F.subarray(C*1,C*2));if(!p(L,K))throw new Error("bad point: is not on curve");return{x:L,y:K}}else throw new Error(`bad point: got length ${_}, expected compressed=${A} or uncompressed=${S}`)}const l=t.toBytes||c,d=t.fromBytes||u,h=FE(r,e.a,e.b);function p(q,C){const A=r.sqr(C),S=h(q);return r.eql(A,S)}if(!p(e.Gx,e.Gy))throw new Error("bad curve params: generator point");const w=r.mul(r.pow(e.a,Rn),_p),m=r.mul(r.sqr(e.b),BigInt(27));if(r.is0(r.add(w,m)))throw new Error("bad curve params: a or b");function E(q,C,A=!1){if(!r.isValid(C)||A&&r.is0(C))throw new Error(`bad point coordinate ${q}`);return C}function y(q){if(!(q instanceof B))throw new Error("ProjectivePoint expected")}const P=ui((q,C)=>{const{px:A,py:S,pz:_}=q;if(r.eql(_,r.ONE))return{x:A,y:S};const T=q.is0();C==null&&(C=T?r.ONE:r.inv(_));const F=r.mul(A,C),L=r.mul(S,C),K=r.mul(_,C);if(T)return{x:r.ZERO,y:r.ZERO};if(!r.eql(K,r.ONE))throw new Error("invZ was invalid");return{x:F,y:L}}),O=ui(q=>{if(q.is0()){if(t.allowInfinityPoint&&!r.is0(q.py))return;throw new Error("bad point: ZERO")}const{x:C,y:A}=q.toAffine();if(!r.isValid(C)||!r.isValid(A))throw new Error("bad point: x or y not field elements");if(!p(C,A))throw new Error("bad point: equation left != right");if(!q.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function N(q,C,A,S,_){return A=new B(r.mul(A.px,q),A.py,A.pz),C=Wn(S,C),A=Wn(_,A),C.add(A)}class B{constructor(C,A,S){this.px=E("x",C),this.py=E("y",A,!0),this.pz=E("z",S),Object.freeze(this)}static fromAffine(C){const{x:A,y:S}=C||{};if(!C||!r.isValid(A)||!r.isValid(S))throw new Error("invalid affine point");if(C instanceof B)throw new Error("projective point not allowed");return r.is0(A)&&r.is0(S)?B.ZERO:new B(A,S,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(C){return Kh(B,"pz",C)}static fromBytes(C){return ai(C),B.fromHex(C)}static fromHex(C){const A=B.fromAffine(d(Me("pointHex",C)));return A.assertValidity(),A}static fromPrivateKey(C){const A=Ap(n,t.allowedPrivateKeyLengths,t.wrapPrivateKey);return B.BASE.multiply(A(C))}static msm(C,A){return $h(B,n,C,A)}precompute(C=8,A=!0){return H.setWindowSize(this,C),A||this.multiply(Rn),this}_setWindowSize(C){this.precompute(C)}assertValidity(){O(this)}hasEvenY(){const{y:C}=this.toAffine();if(!r.isOdd)throw new Error("Field doesn't support isOdd");return!r.isOdd(C)}equals(C){y(C);const{px:A,py:S,pz:_}=this,{px:T,py:F,pz:L}=C,K=r.eql(r.mul(A,L),r.mul(T,_)),X=r.eql(r.mul(S,L),r.mul(F,_));return K&&X}negate(){return new B(this.px,r.neg(this.py),this.pz)}double(){const{a:C,b:A}=e,S=r.mul(A,Rn),{px:_,py:T,pz:F}=this;let L=r.ZERO,K=r.ZERO,X=r.ZERO,ne=r.mul(_,_),De=r.mul(T,T),be=r.mul(F,F),ae=r.mul(_,T);return ae=r.add(ae,ae),X=r.mul(_,F),X=r.add(X,X),L=r.mul(C,X),K=r.mul(S,be),K=r.add(L,K),L=r.sub(De,K),K=r.add(De,K),K=r.mul(L,K),L=r.mul(ae,L),X=r.mul(S,X),be=r.mul(C,be),ae=r.sub(ne,be),ae=r.mul(C,ae),ae=r.add(ae,X),X=r.add(ne,ne),ne=r.add(X,ne),ne=r.add(ne,be),ne=r.mul(ne,ae),K=r.add(K,ne),be=r.mul(T,F),be=r.add(be,be),ne=r.mul(be,ae),L=r.sub(L,ne),X=r.mul(be,De),X=r.add(X,X),X=r.add(X,X),new B(L,K,X)}add(C){y(C);const{px:A,py:S,pz:_}=this,{px:T,py:F,pz:L}=C;let K=r.ZERO,X=r.ZERO,ne=r.ZERO;const De=e.a,be=r.mul(e.b,Rn);let ae=r.mul(A,T),Oe=r.mul(S,F),f=r.mul(_,L),g=r.add(A,S),k=r.add(T,F);g=r.mul(g,k),k=r.add(ae,Oe),g=r.sub(g,k),k=r.add(A,_);let R=r.add(T,L);return k=r.mul(k,R),R=r.add(ae,f),k=r.sub(k,R),R=r.add(S,_),K=r.add(F,L),R=r.mul(R,K),K=r.add(Oe,f),R=r.sub(R,K),ne=r.mul(De,k),K=r.mul(be,f),ne=r.add(K,ne),K=r.sub(Oe,ne),ne=r.add(Oe,ne),X=r.mul(K,ne),Oe=r.add(ae,ae),Oe=r.add(Oe,ae),f=r.mul(De,f),k=r.mul(be,k),Oe=r.add(Oe,f),f=r.sub(ae,f),f=r.mul(De,f),k=r.add(k,f),ae=r.mul(Oe,k),X=r.add(X,ae),ae=r.mul(R,k),K=r.mul(g,K),K=r.sub(K,ae),ae=r.mul(g,Oe),ne=r.mul(R,ne),ne=r.add(ne,ae),new B(K,X,ne)}subtract(C){return this.add(C.negate())}is0(){return this.equals(B.ZERO)}multiply(C){const{endo:A}=t;if(!n.isValidNot0(C))throw new Error("invalid scalar: out of range");let S,_;const T=F=>H.wNAFCached(this,F,B.normalizeZ);if(A){const{k1neg:F,k1:L,k2neg:K,k2:X}=A.splitScalar(C),{p:ne,f:De}=T(L),{p:be,f:ae}=T(X);_=De.add(ae),S=N(A.beta,ne,be,F,K)}else{const{p:F,f:L}=T(C);S=F,_=L}return B.normalizeZ([S,_])[0]}multiplyUnsafe(C){const{endo:A}=t,S=this;if(!n.isValid(C))throw new Error("invalid scalar: out of range");if(C===Xr||S.is0())return B.ZERO;if(C===en)return S;if(H.hasPrecomputes(this))return this.multiply(C);if(A){const{k1neg:_,k1:T,k2neg:F,k2:L}=A.splitScalar(C),{p1:K,p2:X}=L1(B,S,T,L);return N(A.beta,K,X,_,F)}else return H.wNAFCachedUnsafe(S,C)}multiplyAndAddUnsafe(C,A,S){const _=this.multiplyUnsafe(A).add(C.multiplyUnsafe(S));return _.is0()?void 0:_}toAffine(C){return P(this,C)}isTorsionFree(){const{isTorsionFree:C}=t;return s===en?!0:C?C(B,this):H.wNAFCachedUnsafe(this,i).is0()}clearCofactor(){const{clearCofactor:C}=t;return s===en?this:C?C(B,this):this.multiplyUnsafe(s)}toBytes(C=!0){return Lr("isCompressed",C),this.assertValidity(),l(B,this,C)}toRawBytes(C=!0){return this.toBytes(C)}toHex(C=!0){return nn(this.toBytes(C))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}B.BASE=new B(e.Gx,e.Gy,r.ONE),B.ZERO=new B(r.ZERO,r.ONE,r.ZERO),B.Fp=r,B.Fn=n;const U=n.BITS,H=jh(B,t.endo?Math.ceil(U/2):U);return B}function kp(e){return Uint8Array.of(e?2:3)}function UE(e,t,r={}){ss(t,{hash:"function"},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const n=t.randomBytes||Rd,s=t.hmac||((S,..._)=>Q0(t.hash,S,tr(..._))),{Fp:i,Fn:o}=e,{ORDER:a,BITS:c}=o;function u(S){const _=a>>en;return S>_}function l(S){return u(S)?o.neg(S):S}function d(S,_){if(!o.isValidNot0(_))throw new Error(`invalid signature ${S}: out of range 1..CURVE.n`)}class h{constructor(_,T,F){d("r",_),d("s",T),this.r=_,this.s=T,F!=null&&(this.recovery=F),Object.freeze(this)}static fromCompact(_){const T=o.BYTES,F=Me("compactSignature",_,T*2);return new h(o.fromBytes(F.subarray(0,T)),o.fromBytes(F.subarray(T,T*2)))}static fromDER(_){const{r:T,s:F}=Kt.toSig(Me("DER",_));return new h(T,F)}assertValidity(){}addRecoveryBit(_){return new h(this.r,this.s,_)}recoverPublicKey(_){const T=i.ORDER,{r:F,s:L,recovery:K}=this;if(K==null||![0,1,2,3].includes(K))throw new Error("recovery id invalid");if(a*Sp<T&&K>1)throw new Error("recovery id is ambiguous for h>1 curve");const ne=K===2||K===3?F+a:F;if(!i.isValid(ne))throw new Error("recovery id 2 or 3 invalid");const De=i.toBytes(ne),be=e.fromHex(tr(kp((K&1)===0),De)),ae=o.inv(ne),Oe=O(Me("msgHash",_)),f=o.create(-Oe*ae),g=o.create(L*ae),k=e.BASE.multiplyUnsafe(f).add(be.multiplyUnsafe(g));if(k.is0())throw new Error("point at infinify");return k.assertValidity(),k}hasHighS(){return u(this.s)}normalizeS(){return this.hasHighS()?new h(this.r,o.neg(this.s),this.recovery):this}toBytes(_){if(_==="compact")return tr(o.toBytes(this.r),o.toBytes(this.s));if(_==="der")return Ra(Kt.hexFromSig(this));throw new Error("invalid format")}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return nn(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return nn(this.toBytes("compact"))}}const p=Ap(o,r.allowedPrivateKeyLengths,r.wrapPrivateKey),w={isValidPrivateKey(S){try{return p(S),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const S=a;return O1(n(zh(S)),S)},precompute(S=8,_=e.BASE){return _.precompute(S,!1)}};function m(S,_=!0){return e.fromPrivateKey(S).toBytes(_)}function E(S){if(typeof S=="bigint")return!1;if(S instanceof e)return!0;const T=Me("key",S).length,F=i.BYTES,L=F+1,K=2*F+1;if(!(r.allowedPrivateKeyLengths||o.BYTES===L))return T===L||T===K}function y(S,_,T=!0){if(E(S)===!0)throw new Error("first arg must be private key");if(E(_)===!1)throw new Error("second arg must be public key");return e.fromHex(_).multiply(p(S)).toBytes(T)}const P=t.bits2int||function(S){if(S.length>8192)throw new Error("input is too large");const _=Ti(S),T=S.length*8-c;return T>0?_>>BigInt(T):_},O=t.bits2int_modN||function(S){return o.create(P(S))},N=is(c);function B(S){return Jr("num < 2^"+c,S,Xr,N),o.toBytes(S)}function U(S,_,T=H){if(["recovered","canonical"].some(g=>g in T))throw new Error("sign() legacy options not supported");const{hash:F}=t;let{lowS:L,prehash:K,extraEntropy:X}=T;L==null&&(L=!0),S=Me("msgHash",S),Ru(T),K&&(S=Me("prehashed msgHash",F(S)));const ne=O(S),De=p(_),be=[B(De),B(ne)];if(X!=null&&X!==!1){const g=X===!0?n(i.BYTES):X;be.push(Me("extraEntropy",g))}const ae=tr(...be),Oe=ne;function f(g){const k=P(g);if(!o.isValidNot0(k))return;const R=o.inv(k),W=e.BASE.multiply(k).toAffine(),he=o.create(W.x);if(he===Xr)return;const ke=o.create(R*o.create(Oe+he*De));if(ke===Xr)return;let Tt=(W.x===he?0:2)|Number(W.y&en),Qt=ke;return L&&u(ke)&&(Qt=l(ke),Tt^=1),new h(he,Qt,Tt)}return{seed:ae,k2sig:f}}const H={lowS:t.lowS,prehash:!1},q={lowS:t.lowS,prehash:!1};function C(S,_,T=H){const{seed:F,k2sig:L}=U(S,_,T);return I1(t.hash.outputLen,o.BYTES,s)(F,L)}e.BASE.precompute(8);function A(S,_,T,F=q){const L=S;_=Me("msgHash",_),T=Me("publicKey",T),Ru(F);const{lowS:K,prehash:X,format:ne}=F;if("strict"in F)throw new Error("options.strict was renamed to lowS");if(ne!==void 0&&!["compact","der","js"].includes(ne))throw new Error('format must be "compact", "der" or "js"');const De=typeof L=="string"||Dd(L),be=!De&&!ne&&typeof L=="object"&&L!==null&&typeof L.r=="bigint"&&typeof L.s=="bigint";if(!De&&!be)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let ae,Oe;try{if(be)if(ne===void 0||ne==="js")ae=new h(L.r,L.s);else throw new Error("invalid format");if(De){try{ne!=="compact"&&(ae=h.fromDER(L))}catch(Qt){if(!(Qt instanceof Kt.Err))throw Qt}!ae&&ne!=="der"&&(ae=h.fromCompact(L))}Oe=e.fromHex(T)}catch{return!1}if(!ae||K&&ae.hasHighS())return!1;X&&(_=t.hash(_));const{r:f,s:g}=ae,k=O(_),R=o.inv(g),W=o.create(k*R),he=o.create(f*R),ke=e.BASE.multiplyUnsafe(W).add(Oe.multiplyUnsafe(he));return ke.is0()?!1:o.create(ke.x)===f}return Object.freeze({getPublicKey:m,getSharedSecret:y,sign:C,verify:A,utils:w,Point:e,Signature:h})}function VE(e){const t={a:e.a,b:e.b,p:e.Fp.ORDER,n:e.n,h:e.h,Gx:e.Gx,Gy:e.Gy},r=e.Fp,n=fn(t.n,e.nBitLength),s={Fp:r,Fn:n,allowedPrivateKeyLengths:e.allowedPrivateKeyLengths,allowInfinityPoint:e.allowInfinityPoint,endo:e.endo,wrapPrivateKey:e.wrapPrivateKey,isTorsionFree:e.isTorsionFree,clearCofactor:e.clearCofactor,fromBytes:e.fromBytes,toBytes:e.toBytes};return{CURVE:t,curveOpts:s}}function zE(e){const{CURVE:t,curveOpts:r}=VE(e),n={hash:e.hash,hmac:e.hmac,randomBytes:e.randomBytes,lowS:e.lowS,bits2int:e.bits2int,bits2int_modN:e.bits2int_modN};return{CURVE:t,curveOpts:r,ecdsaOpts:n}}function WE(e,t){return Object.assign({},t,{ProjectivePoint:t.Point,CURVE:e})}function qE(e){const{CURVE:t,curveOpts:r,ecdsaOpts:n}=zE(e),s=ME(t,r),i=UE(s,n,r);return WE(e,i)}var Ou,Kt,Xr,en,Sp,Rn,_p,HE=ve({"../../node_modules/@noble/curves/esm/abstract/weierstrass.js"(){Z0(),Ci(),Qh(),os(),Ou=class extends Error{constructor(e=""){super(e)}},Kt={Err:Ou,_tlv:{encode:(e,t)=>{const{Err:r}=Kt;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(t.length&1)throw new r("tlv.encode: unpadded data");const n=t.length/2,s=ws(n);if(s.length/2&128)throw new r("tlv.encode: long form length too big");const i=n>127?ws(s.length/2|128):"";return ws(e)+i+s+t},decode(e,t){const{Err:r}=Kt;let n=0;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(t.length<2||t[n++]!==e)throw new r("tlv.decode: wrong tlv");const s=t[n++],i=!!(s&128);let o=0;if(!i)o=s;else{const c=s&127;if(!c)throw new r("tlv.decode(long): indefinite length not supported");if(c>4)throw new r("tlv.decode(long): byte length is too big");const u=t.subarray(n,n+c);if(u.length!==c)throw new r("tlv.decode: length bytes not complete");if(u[0]===0)throw new r("tlv.decode(long): zero leftmost byte");for(const l of u)o=o<<8|l;if(n+=c,o<128)throw new r("tlv.decode(long): not minimal encoding")}const a=t.subarray(n,n+o);if(a.length!==o)throw new r("tlv.decode: wrong value length");return{v:a,l:t.subarray(n+o)}}},_int:{encode(e){const{Err:t}=Kt;if(e<Xr)throw new t("integer: negative integers are not allowed");let r=ws(e);if(Number.parseInt(r[0],16)&8&&(r="00"+r),r.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return r},decode(e){const{Err:t}=Kt;if(e[0]&128)throw new t("invalid signature integer: negative");if(e[0]===0&&!(e[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return Ti(e)}},toSig(e){const{Err:t,_int:r,_tlv:n}=Kt,s=Me("signature",e),{v:i,l:o}=n.decode(48,s);if(o.length)throw new t("invalid signature: left bytes after parsing");const{v:a,l:c}=n.decode(2,i),{v:u,l}=n.decode(2,c);if(l.length)throw new t("invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(u)}},hexFromSig(e){const{_tlv:t,_int:r}=Kt,n=t.encode(2,r.encode(e.r)),s=t.encode(2,r.encode(e.s)),i=n+s;return t.encode(48,i)}},Xr=BigInt(0),en=BigInt(1),Sp=BigInt(2),Rn=BigInt(3),_p=BigInt(4)}});function KE(e,t){const r=n=>qE({...e,hash:n});return{...r(t),create:r}}var GE=ve({"../../node_modules/@noble/curves/esm/_shortw_utils.js"(){HE()}});function jE(e){const t=On.p,r=BigInt(3),n=BigInt(6),s=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),u=e*e*e%t,l=u*u*e%t,d=Le(l,r,t)*l%t,h=Le(d,r,t)*l%t,p=Le(h,pi,t)*u%t,w=Le(p,s,t)*p%t,m=Le(w,i,t)*w%t,E=Le(m,a,t)*m%t,y=Le(E,c,t)*E%t,P=Le(y,a,t)*m%t,O=Le(P,r,t)*l%t,N=Le(O,o,t)*w%t,B=Le(N,n,t)*u%t,U=Le(B,pi,t);if(!gi.eql(gi.sqr(U),e))throw new Error("Cannot find square root");return U}var On,$E,xu,pi,uo,gi,Ys,YE=ve({"../../node_modules/@noble/curves/esm/secp256k1.js"(){Od(),GE(),os(),On={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},$E=BigInt(0),xu=BigInt(1),pi=BigInt(2),uo=(e,t)=>(e+t/pi)/t,gi=fn(On.p,void 0,void 0,{sqrt:jE}),Ys=KE({...On,Fp:gi,lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=On.n,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-xu*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=r,o=BigInt("0x100000000000000000000000000000000"),a=uo(i*e,t),c=uo(-n*e,t);let u=Ue(e-a*r-c*s,t),l=Ue(-a*n-c*i,t);const d=u>o,h=l>o;if(d&&(u=t-u),h&&(l=t-l),u>o||l>o)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:d,k1:u,k2neg:h,k2:l}}}},K0)}}),QE={};Zn(QE,{Account:()=>Bp,AddressLookupTableAccount:()=>ti,AddressLookupTableInstruction:()=>Qp,AddressLookupTableProgram:()=>ri,Authorized:()=>va,BLOCKHASH_CACHE_TIMEOUT_MS:()=>ma,BPF_LOADER_DEPRECATED_PROGRAM_ID:()=>Dp,BPF_LOADER_PROGRAM_ID:()=>zp,BpfLoader:()=>Wp,COMPUTE_BUDGET_INSTRUCTION_LAYOUTS:()=>xt,ComputeBudgetInstruction:()=>Zp,ComputeBudgetProgram:()=>ni,Connection:()=>Yp,Ed25519Program:()=>ya,Enum:()=>Cp,EpochSchedule:()=>ga,FeeCalculatorLayout:()=>ha,Keypair:()=>ba,LAMPORTS_PER_SOL:()=>i0,LOOKUP_TABLE_INSTRUCTION_LAYOUTS:()=>Ht,Loader:()=>Mn,Lockup:()=>$r,MAX_SEED_LENGTH:()=>fa,Message:()=>Jt,MessageAccountKeys:()=>jr,MessageV0:()=>Hn,NONCE_ACCOUNT_LENGTH:()=>ei,NonceAccount:()=>pa,PACKET_DATA_SIZE:()=>Zt,PUBLIC_KEY_LENGTH:()=>Rt,PublicKey:()=>$,SIGNATURE_LENGTH_IN_BYTES:()=>Gr,SOLANA_SCHEMA:()=>Kr,STAKE_CONFIG_ID:()=>wa,STAKE_INSTRUCTION_LAYOUTS:()=>Ge,SYSTEM_INSTRUCTION_LAYOUTS:()=>Ie,SYSVAR_CLOCK_PUBKEY:()=>Ot,SYSVAR_EPOCH_SCHEDULE_PUBKEY:()=>xp,SYSVAR_INSTRUCTIONS_PUBKEY:()=>Np,SYSVAR_RECENT_BLOCKHASHES_PUBKEY:()=>Ln,SYSVAR_RENT_PUBKEY:()=>Tr,SYSVAR_REWARDS_PUBKEY:()=>Lp,SYSVAR_SLOT_HASHES_PUBKEY:()=>Fp,SYSVAR_SLOT_HISTORY_PUBKEY:()=>Mp,SYSVAR_STAKE_HISTORY_PUBKEY:()=>Fn,Secp256k1Program:()=>Ea,SendTransactionError:()=>tn,SolanaJSONRPCError:()=>ee,SolanaJSONRPCErrorCode:()=>Up,StakeAuthorizationLayout:()=>Xp,StakeInstruction:()=>Jp,StakeProgram:()=>Un,Struct:()=>Qs,SystemInstruction:()=>Vp,SystemProgram:()=>dt,Transaction:()=>Ae,TransactionExpiredBlockheightExceededError:()=>Zs,TransactionExpiredNonceInvalidError:()=>Ir,TransactionExpiredTimeoutError:()=>Js,TransactionInstruction:()=>Se,TransactionMessage:()=>Rp,TransactionStatus:()=>qt,VALIDATOR_INFO_KEY:()=>ka,VERSION_PREFIX_MASK:()=>Nn,VOTE_PROGRAM_ID:()=>n0,ValidatorInfo:()=>r0,VersionedMessage:()=>Xs,VersionedTransaction:()=>Op,VoteAccount:()=>s0,VoteAuthorizationLayout:()=>t0,VoteInit:()=>Aa,VoteInstruction:()=>e0,VoteProgram:()=>Vn,clusterApiUrl:()=>cw,sendAndConfirmRawTransaction:()=>uw,sendAndConfirmTransaction:()=>da});function Nu(e){try{return Br.ExtendedPoint.fromHex(e),!0}catch{return!1}}function ZE(e){return e._bn!==void 0}function Ip(e,t){const r=s=>{if(s.span>=0)return s.span;if(typeof s.alloc=="function")return s.alloc(t[s.property]);if("count"in s&&"elementLayout"in s){const i=t[s.property];if(Array.isArray(i))return i.length*r(s.elementLayout)}else if("fields"in s)return Ip({layout:s},t[s.property]);return 0};let n=0;return e.layout.fields.forEach(s=>{n+=r(s)}),n}function bt(e){let t=0,r=0;for(;;){let n=e.shift();if(t|=(n&127)<<r*7,r+=1,(n&128)===0)break}return t}function At(e,t){let r=t;for(;;){let n=r&127;if(r>>=7,r==0){e.push(n);break}else n|=128,e.push(n)}}function ye(e,t){if(!e)throw new Error(t||"Assertion failed")}function Vt(e){if(e.length===0)throw new Error(tc);return e.shift()}function yt(e,...t){const[r]=t;if(t.length===2?r+(t[1]??0)>e.length:r>=e.length)throw new Error(tc);return e.splice(...t)}async function da(e,t,r,n){const s=n&&{skipPreflight:n.skipPreflight,preflightCommitment:n.preflightCommitment||n.commitment,maxRetries:n.maxRetries,minContextSlot:n.minContextSlot},i=await e.sendTransaction(t,r,s);let o;if(t.recentBlockhash!=null&&t.lastValidBlockHeight!=null)o=(await e.confirmTransaction({abortSignal:n==null?void 0:n.abortSignal,signature:i,blockhash:t.recentBlockhash,lastValidBlockHeight:t.lastValidBlockHeight},n&&n.commitment)).value;else if(t.minNonceContextSlot!=null&&t.nonceInfo!=null){const{nonceInstruction:a}=t.nonceInfo,c=a.keys[0].pubkey;o=(await e.confirmTransaction({abortSignal:n==null?void 0:n.abortSignal,minContextSlot:t.minNonceContextSlot,nonceAccountPubkey:c,nonceValue:t.nonceInfo.nonce,signature:i},n&&n.commitment)).value}else(n==null?void 0:n.abortSignal)!=null&&console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."),o=(await e.confirmTransaction(i,n&&n.commitment)).value;if(o.err)throw i!=null?new tn({action:"send",signature:i,transactionMessage:`Status: (${JSON.stringify(o)})`}):new Error(`Transaction ${i} failed (${JSON.stringify(o)})`);return i}function _r(e){return new Promise(t=>setTimeout(t,e))}function ge(e,t){const r=e.layout.span>=0?e.layout.span:Ip(e,t),n=se.alloc(r),s=Object.assign({instruction:e.index},t);return e.layout.encode(s,n),n}function we(e,t){let r;try{r=e.layout.decode(t)}catch(n){throw new Error("invalid instruction; "+n)}if(r.instruction!==e.index)throw new Error(`invalid instruction; instruction index mismatch ${r.instruction} != ${e.index}`);return r}function JE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function xn(e,t){var r,n,s,i,o,a,c;if(e===!0)return"true";if(e===!1)return"false";switch(typeof e){case"object":if(e===null)return null;if(e.toJSON&&typeof e.toJSON=="function")return xn(e.toJSON(),t);if(c=qp.call(e),c==="[object Array]"){for(s="[",n=e.length-1,r=0;r<n;r++)s+=xn(e[r],!0)+",";return n>-1&&(s+=xn(e[r],!0)),s+"]"}else if(c==="[object Object]"){for(i=Hp(e).sort(),n=i.length,s="",r=0;r<n;)o=i[r],a=xn(e[o],!1),a!==void 0&&(s&&(s+=","),s+=JSON.stringify(o)+":"+a),r++;return"{"+s+"}"}else return JSON.stringify(e);case"function":case"undefined":return t?null:void 0;case"string":return JSON.stringify(e);default:return isFinite(e)?e:null}}function lo(e){let t=0;for(;e>1;)e/=2,t++;return t}function XE(e){return e===0?1:(e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e|=e>>32,e+1)}function ew(e,t){let r;try{r=e.layout.decode(t)}catch(n){throw new Error("invalid instruction; "+n)}if(r.typeIndex!==e.index)throw new Error(`invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`);return r}function tw(e){const t=e.match(Gp);if(t==null)throw TypeError(`Failed to validate endpoint URL \`${e}\``);const[r,n,s,i]=t,o=e.startsWith("https:")?"wss:":"ws:",a=s==null?null:parseInt(s.slice(1),10),c=a==null?"":`:${a+1}`;return`${o}//${n}${c}${i}`}function rw(e){if(/^https?:/.test(e)===!1)throw new TypeError("Endpoint URL must start with `http:` or `https:`.");return e}function Re(e){let t,r;if(typeof e=="string")t=e;else if(e){const{commitment:n,...s}=e;t=n,r=s}return{commitment:t,config:r}}function Tp(e){return Et([z({jsonrpc:xe("2.0"),id:G(),result:e}),z({jsonrpc:xe("2.0"),id:G(),error:z({code:Tn(),message:G(),data:ie(j0())})})])}function ue(e){return In(Tp(e),jp,t=>"error"in t?t:{...t,result:j(t.result,e)})}function Ne(e){return ue(z({context:z({slot:I()}),value:e}))}function As(e){return z({context:z({slot:I()}),value:e})}function fo(e,t){return e===0?new Hn({header:t.header,staticAccountKeys:t.accountKeys.map(r=>new $(r)),recentBlockhash:t.recentBlockhash,compiledInstructions:t.instructions.map(r=>({programIdIndex:r.programIdIndex,accountKeyIndexes:r.accounts,data:Je.default.decode(r.data)})),addressTableLookups:t.addressTableLookups}):new Jt(t)}function nw(e,t,r,n,s,i){const o=r||Kp;let a;i!=null&&console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");let c;return n&&(c=async(l,d)=>{const h=await new Promise((p,w)=>{try{n(l,d,(m,E)=>p([m,E]))}catch(m){w(m)}});return await o(...h)}),new Pp.default(async(l,d)=>{const h={method:"POST",body:l,agent:a,headers:Object.assign({"Content-Type":"application/json"},t||{},$p)};try{let p=5,w,m=500;for(;c?w=await c(e,h):w=await o(e,h),!(w.status!==429||s===!0||(p-=1,p===0));)console.error(`Server responded with ${w.status} ${w.statusText}.  Retrying after ${m}ms delay...`),await _r(m),m*=2;const E=await w.text();w.ok?d(null,E):d(new Error(`${w.status} ${w.statusText}: ${E}`))}catch(p){p instanceof Error&&d(p)}},{})}function sw(e){return(t,r)=>new Promise((n,s)=>{e.request(t,r,(i,o)=>{if(i){s(i);return}n(o)})})}function iw(e){return t=>new Promise((r,n)=>{t.length===0&&r([]);const s=t.map(i=>e.request(i.methodName,i.args));e.request(s,(i,o)=>{if(i){n(i);return}r(o)})})}function ow({authorizedVoter:e,epoch:t}){return{epoch:t,authorizedVoter:new $(e)}}function Lu({authorizedPubkey:e,epochOfLastAuthorizedSwitch:t,targetEpoch:r}){return{authorizedPubkey:new $(e),epochOfLastAuthorizedSwitch:t,targetEpoch:r}}function aw({buf:e,idx:t,isEmpty:r}){return r?[]:[...e.slice(t+1).map(Lu),...e.slice(0,t).map(Lu)]}function cw(e,t){const r=t===!1?"http":"https";if(!e)return Sa[r].devnet;const n=Sa[r][e];if(!n)throw new Error(`Unknown ${r} cluster: ${e}`);return n}async function uw(e,t,r,n){let s,i;r&&Object.prototype.hasOwnProperty.call(r,"lastValidBlockHeight")||r&&Object.prototype.hasOwnProperty.call(r,"nonceValue")?(s=r,i=n):i=r;const o=i&&{skipPreflight:i.skipPreflight,preflightCommitment:i.preflightCommitment||i.commitment,minContextSlot:i.minContextSlot},a=await e.sendRawTransaction(t,o),c=i&&i.commitment,l=(await(s?e.confirmTransaction(s,c):e.confirmTransaction(a,c))).value;if(l.err)throw a!=null?new tn({action:o!=null&&o.skipPreflight?"send":"simulate",signature:a,transactionMessage:`Status: (${JSON.stringify(l)})`}):new Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`);return a}var ho,Je,ks,v,Fu,Ss,Pp,Mu,Uu,Vu,po,An,_s,zu,ce,Qs,Cp,Kr,Wu,fa,Rt,go,$,Bp,Dp,Zt,Nn,Gr,Zs,Js,Ir,jr,de,qu,sr,Hu,Ku,Gu,ju,mo,tc,Jt,Hn,Xs,qt,$u,Se,Ae,Rp,Op,Yu,Qu,Zu,bo,Ot,xp,Np,Ln,Tr,Lp,Fp,Mp,Fn,tn,Up,ee,ha,yo,ei,pa,Ju,Xu,wr,Vp,Ie,dt,el,Mn,zp,Wp,qp,Hp,tl,Eo,qr,ga,Kp,rl,wo,ti,nl,Gp,Fe,vo,Is,ma,jp,sl,il,ol,al,cl,ul,ll,ir,dl,fl,hl,Ao,pl,gl,ml,bl,yl,El,wl,vl,Al,Ts,kl,Sl,Ps,_l,Il,Hr,Tl,Pl,Cs,Cl,Bl,Dl,Rl,Ol,xl,Nl,Ll,Fl,Ml,Ul,Vl,zl,Wl,ko,ql,Hl,Kl,Gl,jl,So,Bs,_o,Io,To,Po,$l,Yl,Co,Bo,kn,Do,Sn,Ds,vr,or,Ql,Zl,Jl,Xl,ed,td,rd,Ro,Rs,_n,nd,sd,id,od,ad,cd,ud,ld,dd,fd,$p,Yp,ba,Ht,Qp,ri,Zp,xt,ni,Oo,xo,No,Lo,ya,hd,pd,Fo,Os,Mo,gd,xs,Ea,md,wa,va,$r,Jp,Ge,Xp,Un,Aa,e0,Dt,t0,Vn,ka,bd,r0,n0,yd,s0,Sa,i0,lw=ve({"../../node_modules/@solana/web3.js/lib/index.browser.esm.js"(){Jn(),Y1(),ho=pt(_d()),Je=pt(Z1()),xd(),ks=pt(aE()),v=pt(Pu()),Fu=pt(Pu()),Ss=pt(cE()),Y0(),Pp=pt(OE()),Mu=pt(NE()),Uu=pt(LE()),N0(),YE(),Vu=Br.utils.randomPrivateKey,po=()=>{const e=Br.utils.randomPrivateKey(),t=An(e),r=new Uint8Array(64);return r.set(e),r.set(t,32),{publicKey:t,secretKey:r}},An=Br.getPublicKey,_s=(e,t)=>Br.sign(e,t.slice(0,32)),zu=Br.verify,ce=e=>se.isBuffer(e)?e:e instanceof Uint8Array?se.from(e.buffer,e.byteOffset,e.byteLength):se.from(e),Qs=class{constructor(e){Object.assign(this,e)}encode(){return se.from((0,ks.serialize)(Kr,this))}static decode(e){return(0,ks.deserialize)(Kr,this,e)}static decodeUnchecked(e){return(0,ks.deserializeUnchecked)(Kr,this,e)}},Cp=class extends Qs{constructor(e){if(super(e),this.enum="",Object.keys(e).length!==1)throw new Error("Enum can only take single value");Object.keys(e).map(t=>{this.enum=t})}},Kr=new Map,fa=32,Rt=32,go=1,$=class Yr extends Qs{constructor(t){if(super({}),this._bn=void 0,ZE(t))this._bn=t._bn;else{if(typeof t=="string"){const r=Je.default.decode(t);if(r.length!=Rt)throw new Error("Invalid public key input");this._bn=new ho.default(r)}else this._bn=new ho.default(t);if(this._bn.byteLength()>Rt)throw new Error("Invalid public key input")}}static unique(){const t=new Yr(go);return go+=1,new Yr(t.toBuffer())}equals(t){return this._bn.eq(t._bn)}toBase58(){return Je.default.encode(this.toBytes())}toJSON(){return this.toBase58()}toBytes(){const t=this.toBuffer();return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}toBuffer(){const t=this._bn.toArrayLike(se);if(t.length===Rt)return t;const r=se.alloc(32);return t.copy(r,32-t.length),r}get[Symbol.toStringTag](){return`PublicKey(${this.toString()})`}toString(){return this.toBase58()}static async createWithSeed(t,r,n){const s=se.concat([t.toBuffer(),se.from(r),n.toBuffer()]),i=Uo(s);return new Yr(i)}static createProgramAddressSync(t,r){let n=se.alloc(0);t.forEach(function(i){if(i.length>fa)throw new TypeError("Max seed length exceeded");n=se.concat([n,ce(i)])}),n=se.concat([n,r.toBuffer(),se.from("ProgramDerivedAddress")]);const s=Uo(n);if(Nu(s))throw new Error("Invalid seeds, address must fall off the curve");return new Yr(s)}static async createProgramAddress(t,r){return this.createProgramAddressSync(t,r)}static findProgramAddressSync(t,r){let n=255,s;for(;n!=0;){try{const i=t.concat(se.from([n]));s=this.createProgramAddressSync(i,r)}catch(i){if(i instanceof TypeError)throw i;n--;continue}return[s,n]}throw new Error("Unable to find a viable program address nonce")}static async findProgramAddress(t,r){return this.findProgramAddressSync(t,r)}static isOnCurve(t){const r=new Yr(t);return Nu(r.toBytes())}},Wu=$,$.default=new Wu("11111111111111111111111111111111"),Kr.set($,{kind:"struct",fields:[["_bn","u256"]]}),Bp=class{constructor(e){if(this._publicKey=void 0,this._secretKey=void 0,e){const t=ce(e);if(e.length!==64)throw new Error("bad secret key size");this._publicKey=t.slice(32,64),this._secretKey=t.slice(0,32)}else this._secretKey=ce(Vu()),this._publicKey=ce(An(this._secretKey))}get publicKey(){return new $(this._publicKey)}get secretKey(){return se.concat([this._secretKey,this._publicKey],64)}},Dp=new $("BPFLoader1111111111111111111111111111111111"),Zt=1232,Nn=127,Gr=64,Zs=class extends Error{constructor(e){super(`Signature ${e} has expired: block height exceeded.`),this.signature=void 0,this.signature=e}},Object.defineProperty(Zs.prototype,"name",{value:"TransactionExpiredBlockheightExceededError"}),Js=class extends Error{constructor(e,t){super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`),this.signature=void 0,this.signature=e}},Object.defineProperty(Js.prototype,"name",{value:"TransactionExpiredTimeoutError"}),Ir=class extends Error{constructor(e){super(`Signature ${e} has expired: the nonce is no longer valid.`),this.signature=void 0,this.signature=e}},Object.defineProperty(Ir.prototype,"name",{value:"TransactionExpiredNonceInvalidError"}),jr=class{constructor(e,t){this.staticAccountKeys=void 0,this.accountKeysFromLookups=void 0,this.staticAccountKeys=e,this.accountKeysFromLookups=t}keySegments(){const e=[this.staticAccountKeys];return this.accountKeysFromLookups&&(e.push(this.accountKeysFromLookups.writable),e.push(this.accountKeysFromLookups.readonly)),e}get(e){for(const t of this.keySegments()){if(e<t.length)return t[e];e-=t.length}}get length(){return this.keySegments().flat().length}compileInstructions(e){if(this.length>256)throw new Error("Account index overflow encountered during compilation");const r=new Map;this.keySegments().flat().forEach((s,i)=>{r.set(s.toBase58(),i)});const n=s=>{const i=r.get(s.toBase58());if(i===void 0)throw new Error("Encountered an unknown instruction account key during compilation");return i};return e.map(s=>({programIdIndex:n(s.programId),accountKeyIndexes:s.keys.map(i=>n(i.pubkey)),data:s.data}))}},de=(e="publicKey")=>v.blob(32,e),qu=(e="signature")=>v.blob(64,e),sr=(e="string")=>{const t=v.struct([v.u32("length"),v.u32("lengthPadding"),v.blob(v.offset(v.u32(),-8),"chars")],e),r=t.decode.bind(t),n=t.encode.bind(t),s=t;return s.decode=(i,o)=>r(i,o).chars.toString(),s.encode=(i,o,a)=>{const c={chars:se.from(i,"utf8")};return n(c,o,a)},s.alloc=i=>v.u32().span+v.u32().span+se.from(i,"utf8").length,s},Hu=(e="authorized")=>v.struct([de("staker"),de("withdrawer")],e),Ku=(e="lockup")=>v.struct([v.ns64("unixTimestamp"),v.ns64("epoch"),de("custodian")],e),Gu=(e="voteInit")=>v.struct([de("nodePubkey"),de("authorizedVoter"),de("authorizedWithdrawer"),v.u8("commission")],e),ju=(e="voteAuthorizeWithSeedArgs")=>v.struct([v.u32("voteAuthorizationType"),de("currentAuthorityDerivedKeyOwnerPubkey"),sr("currentAuthorityDerivedKeySeed"),de("newAuthorized")],e),mo=class o0{constructor(t,r){this.payer=void 0,this.keyMetaMap=void 0,this.payer=t,this.keyMetaMap=r}static compile(t,r){const n=new Map,s=o=>{const a=o.toBase58();let c=n.get(a);return c===void 0&&(c={isSigner:!1,isWritable:!1,isInvoked:!1},n.set(a,c)),c},i=s(r);i.isSigner=!0,i.isWritable=!0;for(const o of t){s(o.programId).isInvoked=!0;for(const a of o.keys){const c=s(a.pubkey);c.isSigner||(c.isSigner=a.isSigner),c.isWritable||(c.isWritable=a.isWritable)}}return new o0(r,n)}getMessageComponents(){const t=[...this.keyMetaMap.entries()];ye(t.length<=256,"Max static account keys length exceeded");const r=t.filter(([,c])=>c.isSigner&&c.isWritable),n=t.filter(([,c])=>c.isSigner&&!c.isWritable),s=t.filter(([,c])=>!c.isSigner&&c.isWritable),i=t.filter(([,c])=>!c.isSigner&&!c.isWritable),o={numRequiredSignatures:r.length+n.length,numReadonlySignedAccounts:n.length,numReadonlyUnsignedAccounts:i.length};{ye(r.length>0,"Expected at least one writable signer key");const[c]=r[0];ye(c===this.payer.toBase58(),"Expected first writable signer key to be the fee payer")}const a=[...r.map(([c])=>new $(c)),...n.map(([c])=>new $(c)),...s.map(([c])=>new $(c)),...i.map(([c])=>new $(c))];return[o,a]}extractTableLookup(t){const[r,n]=this.drainKeysFoundInLookupTable(t.state.addresses,o=>!o.isSigner&&!o.isInvoked&&o.isWritable),[s,i]=this.drainKeysFoundInLookupTable(t.state.addresses,o=>!o.isSigner&&!o.isInvoked&&!o.isWritable);if(!(r.length===0&&s.length===0))return[{accountKey:t.key,writableIndexes:r,readonlyIndexes:s},{writable:n,readonly:i}]}drainKeysFoundInLookupTable(t,r){const n=new Array,s=new Array;for(const[i,o]of this.keyMetaMap.entries())if(r(o)){const a=new $(i),c=t.findIndex(u=>u.equals(a));c>=0&&(ye(c<256,"Max lookup table index exceeded"),n.push(c),s.push(a),this.keyMetaMap.delete(i))}return[n,s]}},tc="Reached end of buffer unexpectedly",Jt=class _a{constructor(t){this.header=void 0,this.accountKeys=void 0,this.recentBlockhash=void 0,this.instructions=void 0,this.indexToProgramIds=new Map,this.header=t.header,this.accountKeys=t.accountKeys.map(r=>new $(r)),this.recentBlockhash=t.recentBlockhash,this.instructions=t.instructions,this.instructions.forEach(r=>this.indexToProgramIds.set(r.programIdIndex,this.accountKeys[r.programIdIndex]))}get version(){return"legacy"}get staticAccountKeys(){return this.accountKeys}get compiledInstructions(){return this.instructions.map(t=>({programIdIndex:t.programIdIndex,accountKeyIndexes:t.accounts,data:Je.default.decode(t.data)}))}get addressTableLookups(){return[]}getAccountKeys(){return new jr(this.staticAccountKeys)}static compile(t){const r=mo.compile(t.instructions,t.payerKey),[n,s]=r.getMessageComponents(),o=new jr(s).compileInstructions(t.instructions).map(a=>({programIdIndex:a.programIdIndex,accounts:a.accountKeyIndexes,data:Je.default.encode(a.data)}));return new _a({header:n,accountKeys:s,recentBlockhash:t.recentBlockhash,instructions:o})}isAccountSigner(t){return t<this.header.numRequiredSignatures}isAccountWritable(t){const r=this.header.numRequiredSignatures;if(t>=this.header.numRequiredSignatures){const n=t-r,i=this.accountKeys.length-r-this.header.numReadonlyUnsignedAccounts;return n<i}else{const n=r-this.header.numReadonlySignedAccounts;return t<n}}isProgramId(t){return this.indexToProgramIds.has(t)}programIds(){return[...this.indexToProgramIds.values()]}nonProgramIds(){return this.accountKeys.filter((t,r)=>!this.isProgramId(r))}serialize(){const t=this.accountKeys.length;let r=[];At(r,t);const n=this.instructions.map(d=>{const{accounts:h,programIdIndex:p}=d,w=Array.from(Je.default.decode(d.data));let m=[];At(m,h.length);let E=[];return At(E,w.length),{programIdIndex:p,keyIndicesCount:se.from(m),keyIndices:h,dataLength:se.from(E),data:w}});let s=[];At(s,n.length);let i=se.alloc(Zt);se.from(s).copy(i);let o=s.length;n.forEach(d=>{const p=v.struct([v.u8("programIdIndex"),v.blob(d.keyIndicesCount.length,"keyIndicesCount"),v.seq(v.u8("keyIndex"),d.keyIndices.length,"keyIndices"),v.blob(d.dataLength.length,"dataLength"),v.seq(v.u8("userdatum"),d.data.length,"data")]).encode(d,i,o);o+=p}),i=i.slice(0,o);const a=v.struct([v.blob(1,"numRequiredSignatures"),v.blob(1,"numReadonlySignedAccounts"),v.blob(1,"numReadonlyUnsignedAccounts"),v.blob(r.length,"keyCount"),v.seq(de("key"),t,"keys"),de("recentBlockhash")]),c={numRequiredSignatures:se.from([this.header.numRequiredSignatures]),numReadonlySignedAccounts:se.from([this.header.numReadonlySignedAccounts]),numReadonlyUnsignedAccounts:se.from([this.header.numReadonlyUnsignedAccounts]),keyCount:se.from(r),keys:this.accountKeys.map(d=>ce(d.toBytes())),recentBlockhash:Je.default.decode(this.recentBlockhash)};let u=se.alloc(2048);const l=a.encode(c,u);return i.copy(u,l),u.slice(0,l+i.length)}static from(t){let r=[...t];const n=Vt(r);if(n!==(n&Nn))throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");const s=Vt(r),i=Vt(r),o=bt(r);let a=[];for(let h=0;h<o;h++){const p=yt(r,0,Rt);a.push(new $(se.from(p)))}const c=yt(r,0,Rt),u=bt(r);let l=[];for(let h=0;h<u;h++){const p=Vt(r),w=bt(r),m=yt(r,0,w),E=bt(r),y=yt(r,0,E),P=Je.default.encode(se.from(y));l.push({programIdIndex:p,accounts:m,data:P})}const d={header:{numRequiredSignatures:n,numReadonlySignedAccounts:s,numReadonlyUnsignedAccounts:i},recentBlockhash:Je.default.encode(se.from(c)),accountKeys:a,instructions:l};return new _a(d)}},Hn=class Ia{constructor(t){this.header=void 0,this.staticAccountKeys=void 0,this.recentBlockhash=void 0,this.compiledInstructions=void 0,this.addressTableLookups=void 0,this.header=t.header,this.staticAccountKeys=t.staticAccountKeys,this.recentBlockhash=t.recentBlockhash,this.compiledInstructions=t.compiledInstructions,this.addressTableLookups=t.addressTableLookups}get version(){return 0}get numAccountKeysFromLookups(){let t=0;for(const r of this.addressTableLookups)t+=r.readonlyIndexes.length+r.writableIndexes.length;return t}getAccountKeys(t){let r;if(t&&"accountKeysFromLookups"in t&&t.accountKeysFromLookups){if(this.numAccountKeysFromLookups!=t.accountKeysFromLookups.writable.length+t.accountKeysFromLookups.readonly.length)throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");r=t.accountKeysFromLookups}else if(t&&"addressLookupTableAccounts"in t&&t.addressLookupTableAccounts)r=this.resolveAddressTableLookups(t.addressLookupTableAccounts);else if(this.addressTableLookups.length>0)throw new Error("Failed to get account keys because address table lookups were not resolved");return new jr(this.staticAccountKeys,r)}isAccountSigner(t){return t<this.header.numRequiredSignatures}isAccountWritable(t){const r=this.header.numRequiredSignatures,n=this.staticAccountKeys.length;if(t>=n){const s=t-n,i=this.addressTableLookups.reduce((o,a)=>o+a.writableIndexes.length,0);return s<i}else if(t>=this.header.numRequiredSignatures){const s=t-r,o=n-r-this.header.numReadonlyUnsignedAccounts;return s<o}else{const s=r-this.header.numReadonlySignedAccounts;return t<s}}resolveAddressTableLookups(t){const r={writable:[],readonly:[]};for(const n of this.addressTableLookups){const s=t.find(i=>i.key.equals(n.accountKey));if(!s)throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);for(const i of n.writableIndexes)if(i<s.state.addresses.length)r.writable.push(s.state.addresses[i]);else throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);for(const i of n.readonlyIndexes)if(i<s.state.addresses.length)r.readonly.push(s.state.addresses[i]);else throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`)}return r}static compile(t){const r=mo.compile(t.instructions,t.payerKey),n=new Array,s={writable:new Array,readonly:new Array},i=t.addressLookupTableAccounts||[];for(const l of i){const d=r.extractTableLookup(l);if(d!==void 0){const[h,{writable:p,readonly:w}]=d;n.push(h),s.writable.push(...p),s.readonly.push(...w)}}const[o,a]=r.getMessageComponents(),u=new jr(a,s).compileInstructions(t.instructions);return new Ia({header:o,staticAccountKeys:a,recentBlockhash:t.recentBlockhash,compiledInstructions:u,addressTableLookups:n})}serialize(){const t=Array();At(t,this.staticAccountKeys.length);const r=this.serializeInstructions(),n=Array();At(n,this.compiledInstructions.length);const s=this.serializeAddressTableLookups(),i=Array();At(i,this.addressTableLookups.length);const o=v.struct([v.u8("prefix"),v.struct([v.u8("numRequiredSignatures"),v.u8("numReadonlySignedAccounts"),v.u8("numReadonlyUnsignedAccounts")],"header"),v.blob(t.length,"staticAccountKeysLength"),v.seq(de(),this.staticAccountKeys.length,"staticAccountKeys"),de("recentBlockhash"),v.blob(n.length,"instructionsLength"),v.blob(r.length,"serializedInstructions"),v.blob(i.length,"addressTableLookupsLength"),v.blob(s.length,"serializedAddressTableLookups")]),a=new Uint8Array(Zt),u=o.encode({prefix:128,header:this.header,staticAccountKeysLength:new Uint8Array(t),staticAccountKeys:this.staticAccountKeys.map(l=>l.toBytes()),recentBlockhash:Je.default.decode(this.recentBlockhash),instructionsLength:new Uint8Array(n),serializedInstructions:r,addressTableLookupsLength:new Uint8Array(i),serializedAddressTableLookups:s},a);return a.slice(0,u)}serializeInstructions(){let t=0;const r=new Uint8Array(Zt);for(const n of this.compiledInstructions){const s=Array();At(s,n.accountKeyIndexes.length);const i=Array();At(i,n.data.length);const o=v.struct([v.u8("programIdIndex"),v.blob(s.length,"encodedAccountKeyIndexesLength"),v.seq(v.u8(),n.accountKeyIndexes.length,"accountKeyIndexes"),v.blob(i.length,"encodedDataLength"),v.blob(n.data.length,"data")]);t+=o.encode({programIdIndex:n.programIdIndex,encodedAccountKeyIndexesLength:new Uint8Array(s),accountKeyIndexes:n.accountKeyIndexes,encodedDataLength:new Uint8Array(i),data:n.data},r,t)}return r.slice(0,t)}serializeAddressTableLookups(){let t=0;const r=new Uint8Array(Zt);for(const n of this.addressTableLookups){const s=Array();At(s,n.writableIndexes.length);const i=Array();At(i,n.readonlyIndexes.length);const o=v.struct([de("accountKey"),v.blob(s.length,"encodedWritableIndexesLength"),v.seq(v.u8(),n.writableIndexes.length,"writableIndexes"),v.blob(i.length,"encodedReadonlyIndexesLength"),v.seq(v.u8(),n.readonlyIndexes.length,"readonlyIndexes")]);t+=o.encode({accountKey:n.accountKey.toBytes(),encodedWritableIndexesLength:new Uint8Array(s),writableIndexes:n.writableIndexes,encodedReadonlyIndexesLength:new Uint8Array(i),readonlyIndexes:n.readonlyIndexes},r,t)}return r.slice(0,t)}static deserialize(t){let r=[...t];const n=Vt(r),s=n&Nn;ye(n!==s,"Expected versioned message but received legacy message");const i=s;ye(i===0,`Expected versioned message with version 0 but found version ${i}`);const o={numRequiredSignatures:Vt(r),numReadonlySignedAccounts:Vt(r),numReadonlyUnsignedAccounts:Vt(r)},a=[],c=bt(r);for(let w=0;w<c;w++)a.push(new $(yt(r,0,Rt)));const u=Je.default.encode(yt(r,0,Rt)),l=bt(r),d=[];for(let w=0;w<l;w++){const m=Vt(r),E=bt(r),y=yt(r,0,E),P=bt(r),O=new Uint8Array(yt(r,0,P));d.push({programIdIndex:m,accountKeyIndexes:y,data:O})}const h=bt(r),p=[];for(let w=0;w<h;w++){const m=new $(yt(r,0,Rt)),E=bt(r),y=yt(r,0,E),P=bt(r),O=yt(r,0,P);p.push({accountKey:m,writableIndexes:y,readonlyIndexes:O})}return new Ia({header:o,staticAccountKeys:a,recentBlockhash:u,compiledInstructions:d,addressTableLookups:p})}},Xs={deserializeMessageVersion(e){const t=e[0],r=t&Nn;return r===t?"legacy":r},deserialize:e=>{const t=Xs.deserializeMessageVersion(e);if(t==="legacy")return Jt.from(e);if(t===0)return Hn.deserialize(e);throw new Error(`Transaction message version ${t} deserialization is not supported`)}},qt=(function(e){return e[e.BLOCKHEIGHT_EXCEEDED=0]="BLOCKHEIGHT_EXCEEDED",e[e.PROCESSED=1]="PROCESSED",e[e.TIMED_OUT=2]="TIMED_OUT",e[e.NONCE_INVALID=3]="NONCE_INVALID",e})({}),$u=se.alloc(Gr).fill(0),Se=class{constructor(e){this.keys=void 0,this.programId=void 0,this.data=se.alloc(0),this.programId=e.programId,this.keys=e.keys,e.data&&(this.data=e.data)}toJSON(){return{keys:this.keys.map(({pubkey:e,isSigner:t,isWritable:r})=>({pubkey:e.toJSON(),isSigner:t,isWritable:r})),programId:this.programId.toJSON(),data:[...this.data]}}},Ae=class Ta{get signature(){return this.signatures.length>0?this.signatures[0].signature:null}constructor(t){if(this.signatures=[],this.feePayer=void 0,this.instructions=[],this.recentBlockhash=void 0,this.lastValidBlockHeight=void 0,this.nonceInfo=void 0,this.minNonceContextSlot=void 0,this._message=void 0,this._json=void 0,!!t)if(t.feePayer&&(this.feePayer=t.feePayer),t.signatures&&(this.signatures=t.signatures),Object.prototype.hasOwnProperty.call(t,"nonceInfo")){const{minContextSlot:r,nonceInfo:n}=t;this.minNonceContextSlot=r,this.nonceInfo=n}else if(Object.prototype.hasOwnProperty.call(t,"lastValidBlockHeight")){const{blockhash:r,lastValidBlockHeight:n}=t;this.recentBlockhash=r,this.lastValidBlockHeight=n}else{const{recentBlockhash:r,nonceInfo:n}=t;n&&(this.nonceInfo=n),this.recentBlockhash=r}}toJSON(){return{recentBlockhash:this.recentBlockhash||null,feePayer:this.feePayer?this.feePayer.toJSON():null,nonceInfo:this.nonceInfo?{nonce:this.nonceInfo.nonce,nonceInstruction:this.nonceInfo.nonceInstruction.toJSON()}:null,instructions:this.instructions.map(t=>t.toJSON()),signers:this.signatures.map(({publicKey:t})=>t.toJSON())}}add(...t){if(t.length===0)throw new Error("No instructions");return t.forEach(r=>{"instructions"in r?this.instructions=this.instructions.concat(r.instructions):"data"in r&&"programId"in r&&"keys"in r?this.instructions.push(r):this.instructions.push(new Se(r))}),this}compileMessage(){if(this._message&&JSON.stringify(this.toJSON())===JSON.stringify(this._json))return this._message;let t,r;if(this.nonceInfo?(t=this.nonceInfo.nonce,this.instructions[0]!=this.nonceInfo.nonceInstruction?r=[this.nonceInfo.nonceInstruction,...this.instructions]:r=this.instructions):(t=this.recentBlockhash,r=this.instructions),!t)throw new Error("Transaction recentBlockhash required");r.length<1&&console.warn("No instructions provided");let n;if(this.feePayer)n=this.feePayer;else if(this.signatures.length>0&&this.signatures[0].publicKey)n=this.signatures[0].publicKey;else throw new Error("Transaction fee payer required");for(let m=0;m<r.length;m++)if(r[m].programId===void 0)throw new Error(`Transaction instruction index ${m} has undefined program id`);const s=[],i=[];r.forEach(m=>{m.keys.forEach(y=>{i.push({...y})});const E=m.programId.toString();s.includes(E)||s.push(E)}),s.forEach(m=>{i.push({pubkey:new $(m),isSigner:!1,isWritable:!1})});const o=[];i.forEach(m=>{const E=m.pubkey.toString(),y=o.findIndex(P=>P.pubkey.toString()===E);y>-1?(o[y].isWritable=o[y].isWritable||m.isWritable,o[y].isSigner=o[y].isSigner||m.isSigner):o.push(m)}),o.sort(function(m,E){if(m.isSigner!==E.isSigner)return m.isSigner?-1:1;if(m.isWritable!==E.isWritable)return m.isWritable?-1:1;const y={localeMatcher:"best fit",usage:"sort",sensitivity:"variant",ignorePunctuation:!1,numeric:!1,caseFirst:"lower"};return m.pubkey.toBase58().localeCompare(E.pubkey.toBase58(),"en",y)});const a=o.findIndex(m=>m.pubkey.equals(n));if(a>-1){const[m]=o.splice(a,1);m.isSigner=!0,m.isWritable=!0,o.unshift(m)}else o.unshift({pubkey:n,isSigner:!0,isWritable:!0});for(const m of this.signatures){const E=o.findIndex(y=>y.pubkey.equals(m.publicKey));if(E>-1)o[E].isSigner||(o[E].isSigner=!0,console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));else throw new Error(`unknown signer: ${m.publicKey.toString()}`)}let c=0,u=0,l=0;const d=[],h=[];o.forEach(({pubkey:m,isSigner:E,isWritable:y})=>{E?(d.push(m.toString()),c+=1,y||(u+=1)):(h.push(m.toString()),y||(l+=1))});const p=d.concat(h),w=r.map(m=>{const{data:E,programId:y}=m;return{programIdIndex:p.indexOf(y.toString()),accounts:m.keys.map(P=>p.indexOf(P.pubkey.toString())),data:Je.default.encode(E)}});return w.forEach(m=>{ye(m.programIdIndex>=0),m.accounts.forEach(E=>ye(E>=0))}),new Jt({header:{numRequiredSignatures:c,numReadonlySignedAccounts:u,numReadonlyUnsignedAccounts:l},accountKeys:p,recentBlockhash:t,instructions:w})}_compile(){const t=this.compileMessage(),r=t.accountKeys.slice(0,t.header.numRequiredSignatures);return this.signatures.length===r.length&&this.signatures.every((s,i)=>r[i].equals(s.publicKey))||(this.signatures=r.map(n=>({signature:null,publicKey:n}))),t}serializeMessage(){return this._compile().serialize()}async getEstimatedFee(t){return(await t.getFeeForMessage(this.compileMessage())).value}setSigners(...t){if(t.length===0)throw new Error("No signers");const r=new Set;this.signatures=t.filter(n=>{const s=n.toString();return r.has(s)?!1:(r.add(s),!0)}).map(n=>({signature:null,publicKey:n}))}sign(...t){if(t.length===0)throw new Error("No signers");const r=new Set,n=[];for(const i of t){const o=i.publicKey.toString();r.has(o)||(r.add(o),n.push(i))}this.signatures=n.map(i=>({signature:null,publicKey:i.publicKey}));const s=this._compile();this._partialSign(s,...n)}partialSign(...t){if(t.length===0)throw new Error("No signers");const r=new Set,n=[];for(const i of t){const o=i.publicKey.toString();r.has(o)||(r.add(o),n.push(i))}const s=this._compile();this._partialSign(s,...n)}_partialSign(t,...r){const n=t.serialize();r.forEach(s=>{const i=_s(n,s.secretKey);this._addSignature(s.publicKey,ce(i))})}addSignature(t,r){this._compile(),this._addSignature(t,r)}_addSignature(t,r){ye(r.length===64);const n=this.signatures.findIndex(s=>t.equals(s.publicKey));if(n<0)throw new Error(`unknown signer: ${t.toString()}`);this.signatures[n].signature=se.from(r)}verifySignatures(t=!0){return!this._getMessageSignednessErrors(this.serializeMessage(),t)}_getMessageSignednessErrors(t,r){const n={};for(const{signature:s,publicKey:i}of this.signatures)s===null?r&&(n.missing||(n.missing=[])).push(i):zu(s,t,i.toBytes())||(n.invalid||(n.invalid=[])).push(i);return n.invalid||n.missing?n:void 0}serialize(t){const{requireAllSignatures:r,verifySignatures:n}=Object.assign({requireAllSignatures:!0,verifySignatures:!0},t),s=this.serializeMessage();if(n){const i=this._getMessageSignednessErrors(s,r);if(i){let o="Signature verification failed.";throw i.invalid&&(o+=`
Invalid signature for public key${i.invalid.length===1?"":"(s)"} [\`${i.invalid.map(a=>a.toBase58()).join("`, `")}\`].`),i.missing&&(o+=`
Missing signature for public key${i.missing.length===1?"":"(s)"} [\`${i.missing.map(a=>a.toBase58()).join("`, `")}\`].`),new Error(o)}}return this._serialize(s)}_serialize(t){const{signatures:r}=this,n=[];At(n,r.length);const s=n.length+r.length*64+t.length,i=se.alloc(s);return ye(r.length<256),se.from(n).copy(i,0),r.forEach(({signature:o},a)=>{o!==null&&(ye(o.length===64,"signature has invalid length"),se.from(o).copy(i,n.length+a*64))}),t.copy(i,n.length+r.length*64),ye(i.length<=Zt,`Transaction too large: ${i.length} > ${Zt}`),i}get keys(){return ye(this.instructions.length===1),this.instructions[0].keys.map(t=>t.pubkey)}get programId(){return ye(this.instructions.length===1),this.instructions[0].programId}get data(){return ye(this.instructions.length===1),this.instructions[0].data}static from(t){let r=[...t];const n=bt(r);let s=[];for(let i=0;i<n;i++){const o=yt(r,0,Gr);s.push(Je.default.encode(se.from(o)))}return Ta.populate(Jt.from(r),s)}static populate(t,r=[]){const n=new Ta;return n.recentBlockhash=t.recentBlockhash,t.header.numRequiredSignatures>0&&(n.feePayer=t.accountKeys[0]),r.forEach((s,i)=>{const o={signature:s==Je.default.encode($u)?null:Je.default.decode(s),publicKey:t.accountKeys[i]};n.signatures.push(o)}),t.instructions.forEach(s=>{const i=s.accounts.map(o=>{const a=t.accountKeys[o];return{pubkey:a,isSigner:n.signatures.some(c=>c.publicKey.toString()===a.toString())||t.isAccountSigner(o),isWritable:t.isAccountWritable(o)}});n.instructions.push(new Se({keys:i,programId:t.accountKeys[s.programIdIndex],data:Je.default.decode(s.data)}))}),n._message=t,n._json=n.toJSON(),n}},Rp=class a0{constructor(t){this.payerKey=void 0,this.instructions=void 0,this.recentBlockhash=void 0,this.payerKey=t.payerKey,this.instructions=t.instructions,this.recentBlockhash=t.recentBlockhash}static decompile(t,r){const{header:n,compiledInstructions:s,recentBlockhash:i}=t,{numRequiredSignatures:o,numReadonlySignedAccounts:a,numReadonlyUnsignedAccounts:c}=n,u=o-a;ye(u>0,"Message header is invalid");const l=t.staticAccountKeys.length-o-c;ye(l>=0,"Message header is invalid");const d=t.getAccountKeys(r),h=d.get(0);if(h===void 0)throw new Error("Failed to decompile message because no account keys were found");const p=[];for(const w of s){const m=[];for(const y of w.accountKeyIndexes){const P=d.get(y);if(P===void 0)throw new Error(`Failed to find key for account key index ${y}`);const O=y<o;let N;O?N=y<u:y<d.staticAccountKeys.length?N=y-o<l:N=y-d.staticAccountKeys.length<d.accountKeysFromLookups.writable.length,m.push({pubkey:P,isSigner:y<n.numRequiredSignatures,isWritable:N})}const E=d.get(w.programIdIndex);if(E===void 0)throw new Error(`Failed to find program id for program id index ${w.programIdIndex}`);p.push(new Se({programId:E,data:ce(w.data),keys:m}))}return new a0({payerKey:h,instructions:p,recentBlockhash:i})}compileToLegacyMessage(){return Jt.compile({payerKey:this.payerKey,recentBlockhash:this.recentBlockhash,instructions:this.instructions})}compileToV0Message(t){return Hn.compile({payerKey:this.payerKey,recentBlockhash:this.recentBlockhash,instructions:this.instructions,addressLookupTableAccounts:t})}},Op=class c0{get version(){return this.message.version}constructor(t,r){if(this.signatures=void 0,this.message=void 0,r!==void 0)ye(r.length===t.header.numRequiredSignatures,"Expected signatures length to be equal to the number of required signatures"),this.signatures=r;else{const n=[];for(let s=0;s<t.header.numRequiredSignatures;s++)n.push(new Uint8Array(Gr));this.signatures=n}this.message=t}serialize(){const t=this.message.serialize(),r=Array();At(r,this.signatures.length);const n=v.struct([v.blob(r.length,"encodedSignaturesLength"),v.seq(qu(),this.signatures.length,"signatures"),v.blob(t.length,"serializedMessage")]),s=new Uint8Array(2048),i=n.encode({encodedSignaturesLength:new Uint8Array(r),signatures:this.signatures,serializedMessage:t},s);return s.slice(0,i)}static deserialize(t){let r=[...t];const n=[],s=bt(r);for(let o=0;o<s;o++)n.push(new Uint8Array(yt(r,0,Gr)));const i=Xs.deserialize(new Uint8Array(r));return new c0(i,n)}sign(t){const r=this.message.serialize(),n=this.message.staticAccountKeys.slice(0,this.message.header.numRequiredSignatures);for(const s of t){const i=n.findIndex(o=>o.equals(s.publicKey));ye(i>=0,`Cannot sign with non signer key ${s.publicKey.toBase58()}`),this.signatures[i]=_s(r,s.secretKey)}}addSignature(t,r){ye(r.byteLength===64,"Signature must be 64 bytes long");const s=this.message.staticAccountKeys.slice(0,this.message.header.numRequiredSignatures).findIndex(i=>i.equals(t));ye(s>=0,`Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`),this.signatures[s]=r}},Yu=160,Qu=64,Zu=Yu/Qu,bo=1e3/Zu,Ot=new $("SysvarC1ock11111111111111111111111111111111"),xp=new $("SysvarEpochSchedu1e111111111111111111111111"),Np=new $("Sysvar1nstructions1111111111111111111111111"),Ln=new $("SysvarRecentB1ockHashes11111111111111111111"),Tr=new $("SysvarRent111111111111111111111111111111111"),Lp=new $("SysvarRewards111111111111111111111111111111"),Fp=new $("SysvarS1otHashes111111111111111111111111111"),Mp=new $("SysvarS1otHistory11111111111111111111111111"),Fn=new $("SysvarStakeHistory1111111111111111111111111"),tn=class extends Error{constructor({action:e,signature:t,transactionMessage:r,transactionLogs:n}){let s;switch(e){case"send":s=`Transaction ${t} resulted in an error. 
${r}. `+(n?`Logs: 
${JSON.stringify(n.slice(-10),null,2)}. `:"")+"\nCatch the SendTransactionError and call `getLogs()` on it for full details.";break;case"simulate":s=`Simulation failed. 
Message: ${r}. 
`+(n?`Logs: 
${JSON.stringify(n.slice(-10),null,2)}. `:"")+"\nCatch the SendTransactionError and call `getLogs()` on it for full details.";break;default:s="Unknown action"}super(s),this.signature=void 0,this.transactionMessage=void 0,this.transactionLogs=void 0,this.resolvedLogs=void 0,this.signature=t,this.transactionMessage=r,this.transactionLogs=n,this.resolvedLogs=n||void 0}get transactionError(){return{message:this.transactionMessage,logs:this.transactionLogs}}async getLogs(e){return this.resolvedLogs===void 0&&(this.resolvedLogs=new Promise((t,r)=>{e.getTransaction(this.signature).then(n=>{if(n&&n.meta&&n.meta.logMessages){const s=n.meta.logMessages;this.resolvedLogs=s,this.transactionLogs=s,t(s)}else r(new Error("Log messages not found"))}).catch(r)})),await this.resolvedLogs}},Up={JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP:-32001,JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE:-32002,JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:-32003,JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE:-32004,JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY:-32005,JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:-32006,JSON_RPC_SERVER_ERROR_SLOT_SKIPPED:-32007,JSON_RPC_SERVER_ERROR_NO_SNAPSHOT:-32008,JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED:-32009,JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX:-32010,JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE:-32011,JSON_RPC_SCAN_ERROR:-32012,JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH:-32013,JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET:-32014,JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION:-32015,JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED:-32016},ee=class extends Error{constructor({code:e,message:t,data:r},n){super(n!=null?`${n}: ${t}`:t),this.code=void 0,this.data=void 0,this.code=e,this.data=r,this.name="SolanaJSONRPCError"}},ha=v.nu64("lamportsPerSignature"),yo=v.struct([v.u32("version"),v.u32("state"),de("authorizedPubkey"),de("nonce"),v.struct([ha],"feeCalculator")]),ei=yo.span,pa=class u0{constructor(t){this.authorizedPubkey=void 0,this.nonce=void 0,this.feeCalculator=void 0,this.authorizedPubkey=t.authorizedPubkey,this.nonce=t.nonce,this.feeCalculator=t.feeCalculator}static fromAccountData(t){const r=yo.decode(ce(t),0);return new u0({authorizedPubkey:new $(r.authorizedPubkey),nonce:new $(r.nonce).toString(),feeCalculator:r.feeCalculator})}},Ju=e=>{const t=e.decode.bind(e),r=e.encode.bind(e);return{decode:t,encode:r}},Xu=e=>t=>{const r=(0,Fu.blob)(e,t),{encode:n,decode:s}=Ju(r),i=r;return i.decode=(o,a)=>{const c=s(o,a);return(0,Ss.toBigIntLE)(se.from(c))},i.encode=(o,a,c)=>{const u=(0,Ss.toBufferLE)(o,e);return n(u,a,c)},i},wr=Xu(8),Vp=class{constructor(){}static decodeInstructionType(e){this.checkProgramId(e.programId);const r=v.u32("instruction").decode(e.data);let n;for(const[s,i]of Object.entries(Ie))if(i.index==r){n=s;break}if(!n)throw new Error("Instruction type incorrect; not a SystemInstruction");return n}static decodeCreateAccount(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,2);const{lamports:t,space:r,programId:n}=we(Ie.Create,e.data);return{fromPubkey:e.keys[0].pubkey,newAccountPubkey:e.keys[1].pubkey,lamports:t,space:r,programId:new $(n)}}static decodeTransfer(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,2);const{lamports:t}=we(Ie.Transfer,e.data);return{fromPubkey:e.keys[0].pubkey,toPubkey:e.keys[1].pubkey,lamports:t}}static decodeTransferWithSeed(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3);const{lamports:t,seed:r,programId:n}=we(Ie.TransferWithSeed,e.data);return{fromPubkey:e.keys[0].pubkey,basePubkey:e.keys[1].pubkey,toPubkey:e.keys[2].pubkey,lamports:t,seed:r,programId:new $(n)}}static decodeAllocate(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,1);const{space:t}=we(Ie.Allocate,e.data);return{accountPubkey:e.keys[0].pubkey,space:t}}static decodeAllocateWithSeed(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,1);const{base:t,seed:r,space:n,programId:s}=we(Ie.AllocateWithSeed,e.data);return{accountPubkey:e.keys[0].pubkey,basePubkey:new $(t),seed:r,space:n,programId:new $(s)}}static decodeAssign(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,1);const{programId:t}=we(Ie.Assign,e.data);return{accountPubkey:e.keys[0].pubkey,programId:new $(t)}}static decodeAssignWithSeed(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,1);const{base:t,seed:r,programId:n}=we(Ie.AssignWithSeed,e.data);return{accountPubkey:e.keys[0].pubkey,basePubkey:new $(t),seed:r,programId:new $(n)}}static decodeCreateWithSeed(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,2);const{base:t,seed:r,lamports:n,space:s,programId:i}=we(Ie.CreateWithSeed,e.data);return{fromPubkey:e.keys[0].pubkey,newAccountPubkey:e.keys[1].pubkey,basePubkey:new $(t),seed:r,lamports:n,space:s,programId:new $(i)}}static decodeNonceInitialize(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3);const{authorized:t}=we(Ie.InitializeNonceAccount,e.data);return{noncePubkey:e.keys[0].pubkey,authorizedPubkey:new $(t)}}static decodeNonceAdvance(e){return this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3),we(Ie.AdvanceNonceAccount,e.data),{noncePubkey:e.keys[0].pubkey,authorizedPubkey:e.keys[2].pubkey}}static decodeNonceWithdraw(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,5);const{lamports:t}=we(Ie.WithdrawNonceAccount,e.data);return{noncePubkey:e.keys[0].pubkey,toPubkey:e.keys[1].pubkey,authorizedPubkey:e.keys[4].pubkey,lamports:t}}static decodeNonceAuthorize(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,2);const{authorized:t}=we(Ie.AuthorizeNonceAccount,e.data);return{noncePubkey:e.keys[0].pubkey,authorizedPubkey:e.keys[1].pubkey,newAuthorizedPubkey:new $(t)}}static checkProgramId(e){if(!e.equals(dt.programId))throw new Error("invalid instruction; programId is not SystemProgram")}static checkKeyLength(e,t){if(e.length<t)throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)}},Ie=Object.freeze({Create:{index:0,layout:v.struct([v.u32("instruction"),v.ns64("lamports"),v.ns64("space"),de("programId")])},Assign:{index:1,layout:v.struct([v.u32("instruction"),de("programId")])},Transfer:{index:2,layout:v.struct([v.u32("instruction"),wr("lamports")])},CreateWithSeed:{index:3,layout:v.struct([v.u32("instruction"),de("base"),sr("seed"),v.ns64("lamports"),v.ns64("space"),de("programId")])},AdvanceNonceAccount:{index:4,layout:v.struct([v.u32("instruction")])},WithdrawNonceAccount:{index:5,layout:v.struct([v.u32("instruction"),v.ns64("lamports")])},InitializeNonceAccount:{index:6,layout:v.struct([v.u32("instruction"),de("authorized")])},AuthorizeNonceAccount:{index:7,layout:v.struct([v.u32("instruction"),de("authorized")])},Allocate:{index:8,layout:v.struct([v.u32("instruction"),v.ns64("space")])},AllocateWithSeed:{index:9,layout:v.struct([v.u32("instruction"),de("base"),sr("seed"),v.ns64("space"),de("programId")])},AssignWithSeed:{index:10,layout:v.struct([v.u32("instruction"),de("base"),sr("seed"),de("programId")])},TransferWithSeed:{index:11,layout:v.struct([v.u32("instruction"),wr("lamports"),sr("seed"),de("programId")])},UpgradeNonceAccount:{index:12,layout:v.struct([v.u32("instruction")])}}),dt=class Pa{constructor(){}static createAccount(t){const r=Ie.Create,n=ge(r,{lamports:t.lamports,space:t.space,programId:ce(t.programId.toBuffer())});return new Se({keys:[{pubkey:t.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:t.newAccountPubkey,isSigner:!0,isWritable:!0}],programId:this.programId,data:n})}static transfer(t){let r,n;if("basePubkey"in t){const s=Ie.TransferWithSeed;r=ge(s,{lamports:BigInt(t.lamports),seed:t.seed,programId:ce(t.programId.toBuffer())}),n=[{pubkey:t.fromPubkey,isSigner:!1,isWritable:!0},{pubkey:t.basePubkey,isSigner:!0,isWritable:!1},{pubkey:t.toPubkey,isSigner:!1,isWritable:!0}]}else{const s=Ie.Transfer;r=ge(s,{lamports:BigInt(t.lamports)}),n=[{pubkey:t.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:t.toPubkey,isSigner:!1,isWritable:!0}]}return new Se({keys:n,programId:this.programId,data:r})}static assign(t){let r,n;if("basePubkey"in t){const s=Ie.AssignWithSeed;r=ge(s,{base:ce(t.basePubkey.toBuffer()),seed:t.seed,programId:ce(t.programId.toBuffer())}),n=[{pubkey:t.accountPubkey,isSigner:!1,isWritable:!0},{pubkey:t.basePubkey,isSigner:!0,isWritable:!1}]}else{const s=Ie.Assign;r=ge(s,{programId:ce(t.programId.toBuffer())}),n=[{pubkey:t.accountPubkey,isSigner:!0,isWritable:!0}]}return new Se({keys:n,programId:this.programId,data:r})}static createAccountWithSeed(t){const r=Ie.CreateWithSeed,n=ge(r,{base:ce(t.basePubkey.toBuffer()),seed:t.seed,lamports:t.lamports,space:t.space,programId:ce(t.programId.toBuffer())});let s=[{pubkey:t.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:t.newAccountPubkey,isSigner:!1,isWritable:!0}];return t.basePubkey!=t.fromPubkey&&s.push({pubkey:t.basePubkey,isSigner:!0,isWritable:!1}),new Se({keys:s,programId:this.programId,data:n})}static createNonceAccount(t){const r=new Ae;"basePubkey"in t&&"seed"in t?r.add(Pa.createAccountWithSeed({fromPubkey:t.fromPubkey,newAccountPubkey:t.noncePubkey,basePubkey:t.basePubkey,seed:t.seed,lamports:t.lamports,space:ei,programId:this.programId})):r.add(Pa.createAccount({fromPubkey:t.fromPubkey,newAccountPubkey:t.noncePubkey,lamports:t.lamports,space:ei,programId:this.programId}));const n={noncePubkey:t.noncePubkey,authorizedPubkey:t.authorizedPubkey};return r.add(this.nonceInitialize(n)),r}static nonceInitialize(t){const r=Ie.InitializeNonceAccount,n=ge(r,{authorized:ce(t.authorizedPubkey.toBuffer())}),s={keys:[{pubkey:t.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:Ln,isSigner:!1,isWritable:!1},{pubkey:Tr,isSigner:!1,isWritable:!1}],programId:this.programId,data:n};return new Se(s)}static nonceAdvance(t){const r=Ie.AdvanceNonceAccount,n=ge(r),s={keys:[{pubkey:t.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:Ln,isSigner:!1,isWritable:!1},{pubkey:t.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:n};return new Se(s)}static nonceWithdraw(t){const r=Ie.WithdrawNonceAccount,n=ge(r,{lamports:t.lamports});return new Se({keys:[{pubkey:t.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:t.toPubkey,isSigner:!1,isWritable:!0},{pubkey:Ln,isSigner:!1,isWritable:!1},{pubkey:Tr,isSigner:!1,isWritable:!1},{pubkey:t.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:n})}static nonceAuthorize(t){const r=Ie.AuthorizeNonceAccount,n=ge(r,{authorized:ce(t.newAuthorizedPubkey.toBuffer())});return new Se({keys:[{pubkey:t.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:t.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:n})}static allocate(t){let r,n;if("basePubkey"in t){const s=Ie.AllocateWithSeed;r=ge(s,{base:ce(t.basePubkey.toBuffer()),seed:t.seed,space:t.space,programId:ce(t.programId.toBuffer())}),n=[{pubkey:t.accountPubkey,isSigner:!1,isWritable:!0},{pubkey:t.basePubkey,isSigner:!0,isWritable:!1}]}else{const s=Ie.Allocate;r=ge(s,{space:t.space}),n=[{pubkey:t.accountPubkey,isSigner:!0,isWritable:!0}]}return new Se({keys:n,programId:this.programId,data:r})}},dt.programId=new $("11111111111111111111111111111111"),el=Zt-300,Mn=class Ca{constructor(){}static getMinNumSignatures(t){return 2*(Math.ceil(t/Ca.chunkSize)+1+1)}static async load(t,r,n,s,i){{const d=await t.getMinimumBalanceForRentExemption(i.length),h=await t.getAccountInfo(n.publicKey,"confirmed");let p=null;if(h!==null){if(h.executable)return console.error("Program load failed, account is already executable"),!1;h.data.length!==i.length&&(p=p||new Ae,p.add(dt.allocate({accountPubkey:n.publicKey,space:i.length}))),h.owner.equals(s)||(p=p||new Ae,p.add(dt.assign({accountPubkey:n.publicKey,programId:s}))),h.lamports<d&&(p=p||new Ae,p.add(dt.transfer({fromPubkey:r.publicKey,toPubkey:n.publicKey,lamports:d-h.lamports})))}else p=new Ae().add(dt.createAccount({fromPubkey:r.publicKey,newAccountPubkey:n.publicKey,lamports:d>0?d:1,space:i.length,programId:s}));p!==null&&await da(t,p,[r,n],{commitment:"confirmed"})}const o=v.struct([v.u32("instruction"),v.u32("offset"),v.u32("bytesLength"),v.u32("bytesLengthPadding"),v.seq(v.u8("byte"),v.offset(v.u32(),-8),"bytes")]),a=Ca.chunkSize;let c=0,u=i,l=[];for(;u.length>0;){const d=u.slice(0,a),h=se.alloc(a+16);o.encode({instruction:0,offset:c,bytes:d,bytesLength:0,bytesLengthPadding:0},h);const p=new Ae().add({keys:[{pubkey:n.publicKey,isSigner:!0,isWritable:!0}],programId:s,data:h});l.push(da(t,p,[r,n],{commitment:"confirmed"})),t._rpcEndpoint.includes("solana.com")&&await _r(1e3/4),c+=a,u=u.slice(a)}await Promise.all(l);{const d=v.struct([v.u32("instruction")]),h=se.alloc(d.span);d.encode({instruction:1},h);const p=new Ae().add({keys:[{pubkey:n.publicKey,isSigner:!0,isWritable:!0},{pubkey:Tr,isSigner:!1,isWritable:!1}],programId:s,data:h}),w="processed",m=await t.sendTransaction(p,[r,n],{preflightCommitment:w}),{context:E,value:y}=await t.confirmTransaction({signature:m,lastValidBlockHeight:p.lastValidBlockHeight,blockhash:p.recentBlockhash},w);if(y.err)throw new Error(`Transaction ${m} failed (${JSON.stringify(y)})`);for(;;){try{if(await t.getSlot({commitment:w})>E.slot)break}catch{}await new Promise(P=>setTimeout(P,Math.round(bo/2)))}}return!0}},Mn.chunkSize=el,zp=new $("BPFLoader2111111111111111111111111111111111"),Wp=class{static getMinNumSignatures(e){return Mn.getMinNumSignatures(e)}static load(e,t,r,n,s){return Mn.load(e,t,r,s,n)}},qp=Object.prototype.toString,Hp=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t},tl=function(e){var t=xn(e,!1);if(t!==void 0)return""+t},Eo=JE(tl),qr=32,ga=class{constructor(e,t,r,n,s){this.slotsPerEpoch=void 0,this.leaderScheduleSlotOffset=void 0,this.warmup=void 0,this.firstNormalEpoch=void 0,this.firstNormalSlot=void 0,this.slotsPerEpoch=e,this.leaderScheduleSlotOffset=t,this.warmup=r,this.firstNormalEpoch=n,this.firstNormalSlot=s}getEpoch(e){return this.getEpochAndSlotIndex(e)[0]}getEpochAndSlotIndex(e){if(e<this.firstNormalSlot){const t=lo(XE(e+qr+1))-lo(qr)-1,r=this.getSlotsInEpoch(t),n=e-(r-qr);return[t,n]}else{const t=e-this.firstNormalSlot,r=Math.floor(t/this.slotsPerEpoch),n=this.firstNormalEpoch+r,s=t%this.slotsPerEpoch;return[n,s]}}getFirstSlotInEpoch(e){return e<=this.firstNormalEpoch?(Math.pow(2,e)-1)*qr:(e-this.firstNormalEpoch)*this.slotsPerEpoch+this.firstNormalSlot}getLastSlotInEpoch(e){return this.getFirstSlotInEpoch(e)+this.getSlotsInEpoch(e)-1}getSlotsInEpoch(e){return e<this.firstNormalEpoch?Math.pow(2,e+lo(qr)):this.slotsPerEpoch}},Kp=globalThis.fetch,rl=class extends Mu.default{constructor(e,t,r){const n=s=>{const i=(0,Uu.default)(s,{autoconnect:!0,max_reconnects:5,reconnect:!0,reconnect_interval:1e3,...t});return"socket"in i?this.underlyingSocket=i.socket:this.underlyingSocket=i,i};super(n,e,t,r),this.underlyingSocket=void 0}call(...e){var t;const r=(t=this.underlyingSocket)===null||t===void 0?void 0:t.readyState;return r===1?super.call(...e):Promise.reject(new Error("Tried to call a JSON-RPC method `"+e[0]+"` but the socket was not `CONNECTING` or `OPEN` (`readyState` was "+r+")"))}notify(...e){var t;const r=(t=this.underlyingSocket)===null||t===void 0?void 0:t.readyState;return r===1?super.notify(...e):Promise.reject(new Error("Tried to send a JSON-RPC notification `"+e[0]+"` but the socket was not `CONNECTING` or `OPEN` (`readyState` was "+r+")"))}},wo=56,ti=class{constructor(e){this.key=void 0,this.state=void 0,this.key=e.key,this.state=e.state}isActive(){const e=BigInt("0xffffffffffffffff");return this.state.deactivationSlot===e}static deserialize(e){const t=ew(nl,e),r=e.length-wo;ye(r>=0,"lookup table is invalid"),ye(r%32===0,"lookup table is invalid");const n=r/32,{addresses:s}=v.struct([v.seq(de(),n,"addresses")]).decode(e.slice(wo));return{deactivationSlot:t.deactivationSlot,lastExtendedSlot:t.lastExtendedSlot,lastExtendedSlotStartIndex:t.lastExtendedStartIndex,authority:t.authority.length!==0?new $(t.authority[0]):void 0,addresses:s.map(i=>new $(i))}}},nl={index:1,layout:v.struct([v.u32("typeIndex"),wr("deactivationSlot"),v.nu64("lastExtendedSlot"),v.u8("lastExtendedStartIndex"),v.u8(),v.seq(de(),v.offset(v.u8(),-1),"authority")])},Gp=/^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,Fe=In(Ni($),G(),e=>new $(e)),vo=Li([G(),xe("base64")]),Is=In(Ni(se),vo,e=>se.from(e[0],"base64")),ma=30*1e3,jp=Tp(Tn()),sl=z({foundation:I(),foundationTerm:I(),initial:I(),taper:I(),terminal:I()}),il=ue(Q(Y(z({epoch:I(),effectiveSlot:I(),amount:I(),postBalance:I(),commission:ie(Y(I()))})))),ol=Q(z({slot:I(),prioritizationFee:I()})),al=z({total:I(),validator:I(),foundation:I(),epoch:I()}),cl=z({epoch:I(),slotIndex:I(),slotsInEpoch:I(),absoluteSlot:I(),blockHeight:ie(I()),transactionCount:ie(I())}),ul=z({slotsPerEpoch:I(),leaderScheduleSlotOffset:I(),warmup:Mt(),firstNormalEpoch:I(),firstNormalSlot:I()}),ll=pc(G(),Q(I())),ir=Y(Et([z({}),G()])),dl=z({err:ir}),fl=xe("receivedSignature"),hl=z({"solana-core":G(),"feature-set":ie(I())}),Ao=Ne(z({err:Y(Et([z({}),G()])),logs:Y(Q(G())),accounts:ie(Y(Q(Y(z({executable:Mt(),owner:G(),lamports:I(),data:Q(G()),rentEpoch:ie(I())}))))),unitsConsumed:ie(I()),returnData:ie(Y(z({programId:G(),data:Li([G(),xe("base64")])})))})),pl=Ne(z({byIdentity:pc(G(),Q(I())),range:z({firstSlot:I(),lastSlot:I()})})),gl=ue(sl),ml=ue(al),bl=ue(ol),yl=ue(cl),El=ue(ul),wl=ue(ll),vl=ue(I()),Al=Ne(z({total:I(),circulating:I(),nonCirculating:I(),nonCirculatingAccounts:Q(Fe)})),Ts=z({amount:G(),uiAmount:Y(I()),decimals:I(),uiAmountString:ie(G())}),kl=Ne(Q(z({address:Fe,amount:G(),uiAmount:Y(I()),decimals:I(),uiAmountString:ie(G())}))),Sl=Ne(Q(z({pubkey:Fe,account:z({executable:Mt(),owner:Fe,lamports:I(),data:Is,rentEpoch:I()})}))),Ps=z({program:G(),parsed:Tn(),space:I()}),_l=Ne(Q(z({pubkey:Fe,account:z({executable:Mt(),owner:Fe,lamports:I(),data:Ps,rentEpoch:I()})}))),Il=Ne(Q(z({lamports:I(),address:Fe}))),Hr=z({executable:Mt(),owner:Fe,lamports:I(),data:Is,rentEpoch:I()}),Tl=z({pubkey:Fe,account:Hr}),Pl=In(Et([Ni(se),Ps]),Et([vo,Ps]),e=>Array.isArray(e)?j(e,Is):e),Cs=z({executable:Mt(),owner:Fe,lamports:I(),data:Pl,rentEpoch:I()}),Cl=z({pubkey:Fe,account:Cs}),Bl=z({state:Et([xe("active"),xe("inactive"),xe("activating"),xe("deactivating")]),active:I(),inactive:I()}),Dl=ue(Q(z({signature:G(),slot:I(),err:ir,memo:Y(G()),blockTime:ie(Y(I()))}))),Rl=ue(Q(z({signature:G(),slot:I(),err:ir,memo:Y(G()),blockTime:ie(Y(I()))}))),Ol=z({subscription:I(),result:As(Hr)}),xl=z({pubkey:Fe,account:Hr}),Nl=z({subscription:I(),result:As(xl)}),Ll=z({parent:I(),slot:I(),root:I()}),Fl=z({subscription:I(),result:Ll}),Ml=Et([z({type:Et([xe("firstShredReceived"),xe("completed"),xe("optimisticConfirmation"),xe("root")]),slot:I(),timestamp:I()}),z({type:xe("createdBank"),parent:I(),slot:I(),timestamp:I()}),z({type:xe("frozen"),slot:I(),timestamp:I(),stats:z({numTransactionEntries:I(),numSuccessfulTransactions:I(),numFailedTransactions:I(),maxTransactionsPerEntry:I()})}),z({type:xe("dead"),slot:I(),timestamp:I(),err:G()})]),Ul=z({subscription:I(),result:Ml}),Vl=z({subscription:I(),result:As(Et([dl,fl]))}),zl=z({subscription:I(),result:I()}),Wl=z({pubkey:G(),gossip:Y(G()),tpu:Y(G()),rpc:Y(G()),version:Y(G())}),ko=z({votePubkey:G(),nodePubkey:G(),activatedStake:I(),epochVoteAccount:Mt(),epochCredits:Q(Li([I(),I(),I()])),commission:I(),lastVote:I(),rootSlot:Y(I())}),ql=ue(z({current:Q(ko),delinquent:Q(ko)})),Hl=Et([xe("processed"),xe("confirmed"),xe("finalized")]),Kl=z({slot:I(),confirmations:Y(I()),err:ir,confirmationStatus:ie(Hl)}),Gl=Ne(Q(Y(Kl))),jl=ue(I()),So=z({accountKey:Fe,writableIndexes:Q(I()),readonlyIndexes:Q(I())}),Bs=z({signatures:Q(G()),message:z({accountKeys:Q(G()),header:z({numRequiredSignatures:I(),numReadonlySignedAccounts:I(),numReadonlyUnsignedAccounts:I()}),instructions:Q(z({accounts:Q(I()),data:G(),programIdIndex:I()})),recentBlockhash:G(),addressTableLookups:ie(Q(So))})}),_o=z({pubkey:Fe,signer:Mt(),writable:Mt(),source:ie(Et([xe("transaction"),xe("lookupTable")]))}),Io=z({accountKeys:Q(_o),signatures:Q(G())}),To=z({parsed:Tn(),program:G(),programId:Fe}),Po=z({accounts:Q(Fe),data:G(),programId:Fe}),$l=Et([Po,To]),Yl=Et([z({parsed:Tn(),program:G(),programId:G()}),z({accounts:Q(G()),data:G(),programId:G()})]),Co=In($l,Yl,e=>"accounts"in e?j(e,Po):j(e,To)),Bo=z({signatures:Q(G()),message:z({accountKeys:Q(_o),instructions:Q(Co),recentBlockhash:G(),addressTableLookups:ie(Y(Q(So)))})}),kn=z({accountIndex:I(),mint:G(),owner:ie(G()),uiTokenAmount:Ts}),Do=z({writable:Q(Fe),readonly:Q(Fe)}),Sn=z({err:ir,fee:I(),innerInstructions:ie(Y(Q(z({index:I(),instructions:Q(z({accounts:Q(I()),data:G(),programIdIndex:I()}))})))),preBalances:Q(I()),postBalances:Q(I()),logMessages:ie(Y(Q(G()))),preTokenBalances:ie(Y(Q(kn))),postTokenBalances:ie(Y(Q(kn))),loadedAddresses:ie(Do),computeUnitsConsumed:ie(I())}),Ds=z({err:ir,fee:I(),innerInstructions:ie(Y(Q(z({index:I(),instructions:Q(Co)})))),preBalances:Q(I()),postBalances:Q(I()),logMessages:ie(Y(Q(G()))),preTokenBalances:ie(Y(Q(kn))),postTokenBalances:ie(Y(Q(kn))),loadedAddresses:ie(Do),computeUnitsConsumed:ie(I())}),vr=Et([xe(0),xe("legacy")]),or=z({pubkey:G(),lamports:I(),postBalance:Y(I()),rewardType:Y(G()),commission:ie(Y(I()))}),Ql=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),transactions:Q(z({transaction:Bs,meta:Y(Sn),version:ie(vr)})),rewards:ie(Q(or)),blockTime:Y(I()),blockHeight:Y(I())}))),Zl=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),rewards:ie(Q(or)),blockTime:Y(I()),blockHeight:Y(I())}))),Jl=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),transactions:Q(z({transaction:Io,meta:Y(Sn),version:ie(vr)})),rewards:ie(Q(or)),blockTime:Y(I()),blockHeight:Y(I())}))),Xl=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),transactions:Q(z({transaction:Bo,meta:Y(Ds),version:ie(vr)})),rewards:ie(Q(or)),blockTime:Y(I()),blockHeight:Y(I())}))),ed=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),transactions:Q(z({transaction:Io,meta:Y(Ds),version:ie(vr)})),rewards:ie(Q(or)),blockTime:Y(I()),blockHeight:Y(I())}))),td=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),rewards:ie(Q(or)),blockTime:Y(I()),blockHeight:Y(I())}))),rd=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),transactions:Q(z({transaction:Bs,meta:Y(Sn)})),rewards:ie(Q(or)),blockTime:Y(I())}))),Ro=ue(Y(z({blockhash:G(),previousBlockhash:G(),parentSlot:I(),signatures:Q(G()),blockTime:Y(I())}))),Rs=ue(Y(z({slot:I(),meta:Y(Sn),blockTime:ie(Y(I())),transaction:Bs,version:ie(vr)}))),_n=ue(Y(z({slot:I(),transaction:Bo,meta:Y(Ds),blockTime:ie(Y(I())),version:ie(vr)}))),nd=Ne(z({blockhash:G(),feeCalculator:z({lamportsPerSignature:I()})})),sd=Ne(z({blockhash:G(),lastValidBlockHeight:I()})),id=Ne(Mt()),od=z({slot:I(),numTransactions:I(),numSlots:I(),samplePeriodSecs:I()}),ad=ue(Q(od)),cd=Ne(Y(z({feeCalculator:z({lamportsPerSignature:I()})}))),ud=ue(G()),ld=ue(G()),dd=z({err:ir,logs:Q(G()),signature:G()}),fd=z({result:As(dd),subscription:I()}),$p={"solana-client":"js/0.0.0-development"},Yp=class{constructor(e,t){this._commitment=void 0,this._confirmTransactionInitialTimeout=void 0,this._rpcEndpoint=void 0,this._rpcWsEndpoint=void 0,this._rpcClient=void 0,this._rpcRequest=void 0,this._rpcBatchRequest=void 0,this._rpcWebSocket=void 0,this._rpcWebSocketConnected=!1,this._rpcWebSocketHeartbeat=null,this._rpcWebSocketIdleTimeout=null,this._rpcWebSocketGeneration=0,this._disableBlockhashCaching=!1,this._pollingBlockhash=!1,this._blockhashInfo={latestBlockhash:null,lastFetch:0,transactionSignatures:[],simulatedSignatures:[]},this._nextClientSubscriptionId=0,this._subscriptionDisposeFunctionsByClientSubscriptionId={},this._subscriptionHashByClientSubscriptionId={},this._subscriptionStateChangeCallbacksByHash={},this._subscriptionCallbacksByServerSubscriptionId={},this._subscriptionsByHash={},this._subscriptionsAutoDisposedByRpc=new Set,this.getBlockHeight=(()=>{const c={};return async u=>{const{commitment:l,config:d}=Re(u),h=this._buildArgs([],l,void 0,d),p=Eo(h);return c[p]=c[p]??(async()=>{try{const w=await this._rpcRequest("getBlockHeight",h),m=j(w,ue(I()));if("error"in m)throw new ee(m.error,"failed to get block height information");return m.result}finally{delete c[p]}})(),await c[p]}})();let r,n,s,i,o,a;t&&typeof t=="string"?this._commitment=t:t&&(this._commitment=t.commitment,this._confirmTransactionInitialTimeout=t.confirmTransactionInitialTimeout,r=t.wsEndpoint,n=t.httpHeaders,s=t.fetch,i=t.fetchMiddleware,o=t.disableRetryOnRateLimit,a=t.httpAgent),this._rpcEndpoint=rw(e),this._rpcWsEndpoint=r||tw(e),this._rpcClient=nw(e,n,s,i,o,a),this._rpcRequest=sw(this._rpcClient),this._rpcBatchRequest=iw(this._rpcClient),this._rpcWebSocket=new rl(this._rpcWsEndpoint,{autoconnect:!1,max_reconnects:1/0}),this._rpcWebSocket.on("open",this._wsOnOpen.bind(this)),this._rpcWebSocket.on("error",this._wsOnError.bind(this)),this._rpcWebSocket.on("close",this._wsOnClose.bind(this)),this._rpcWebSocket.on("accountNotification",this._wsOnAccountNotification.bind(this)),this._rpcWebSocket.on("programNotification",this._wsOnProgramAccountNotification.bind(this)),this._rpcWebSocket.on("slotNotification",this._wsOnSlotNotification.bind(this)),this._rpcWebSocket.on("slotsUpdatesNotification",this._wsOnSlotUpdatesNotification.bind(this)),this._rpcWebSocket.on("signatureNotification",this._wsOnSignatureNotification.bind(this)),this._rpcWebSocket.on("rootNotification",this._wsOnRootNotification.bind(this)),this._rpcWebSocket.on("logsNotification",this._wsOnLogsNotification.bind(this))}get commitment(){return this._commitment}get rpcEndpoint(){return this._rpcEndpoint}async getBalanceAndContext(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgs([e.toBase58()],r,void 0,n),i=await this._rpcRequest("getBalance",s),o=j(i,Ne(I()));if("error"in o)throw new ee(o.error,`failed to get balance for ${e.toBase58()}`);return o.result}async getBalance(e,t){return await this.getBalanceAndContext(e,t).then(r=>r.value).catch(r=>{throw new Error("failed to get balance of account "+e.toBase58()+": "+r)})}async getBlockTime(e){const t=await this._rpcRequest("getBlockTime",[e]),r=j(t,ue(Y(I())));if("error"in r)throw new ee(r.error,`failed to get block time for slot ${e}`);return r.result}async getMinimumLedgerSlot(){const e=await this._rpcRequest("minimumLedgerSlot",[]),t=j(e,ue(I()));if("error"in t)throw new ee(t.error,"failed to get minimum ledger slot");return t.result}async getFirstAvailableBlock(){const e=await this._rpcRequest("getFirstAvailableBlock",[]),t=j(e,vl);if("error"in t)throw new ee(t.error,"failed to get first available block");return t.result}async getSupply(e){let t={};typeof e=="string"?t={commitment:e}:e?t={...e,commitment:e&&e.commitment||this.commitment}:t={commitment:this.commitment};const r=await this._rpcRequest("getSupply",[t]),n=j(r,Al);if("error"in n)throw new ee(n.error,"failed to get supply");return n.result}async getTokenSupply(e,t){const r=this._buildArgs([e.toBase58()],t),n=await this._rpcRequest("getTokenSupply",r),s=j(n,Ne(Ts));if("error"in s)throw new ee(s.error,"failed to get token supply");return s.result}async getTokenAccountBalance(e,t){const r=this._buildArgs([e.toBase58()],t),n=await this._rpcRequest("getTokenAccountBalance",r),s=j(n,Ne(Ts));if("error"in s)throw new ee(s.error,"failed to get token account balance");return s.result}async getTokenAccountsByOwner(e,t,r){const{commitment:n,config:s}=Re(r);let i=[e.toBase58()];"mint"in t?i.push({mint:t.mint.toBase58()}):i.push({programId:t.programId.toBase58()});const o=this._buildArgs(i,n,"base64",s),a=await this._rpcRequest("getTokenAccountsByOwner",o),c=j(a,Sl);if("error"in c)throw new ee(c.error,`failed to get token accounts owned by account ${e.toBase58()}`);return c.result}async getParsedTokenAccountsByOwner(e,t,r){let n=[e.toBase58()];"mint"in t?n.push({mint:t.mint.toBase58()}):n.push({programId:t.programId.toBase58()});const s=this._buildArgs(n,r,"jsonParsed"),i=await this._rpcRequest("getTokenAccountsByOwner",s),o=j(i,_l);if("error"in o)throw new ee(o.error,`failed to get token accounts owned by account ${e.toBase58()}`);return o.result}async getLargestAccounts(e){const t={...e,commitment:e&&e.commitment||this.commitment},r=t.filter||t.commitment?[t]:[],n=await this._rpcRequest("getLargestAccounts",r),s=j(n,Il);if("error"in s)throw new ee(s.error,"failed to get largest accounts");return s.result}async getTokenLargestAccounts(e,t){const r=this._buildArgs([e.toBase58()],t),n=await this._rpcRequest("getTokenLargestAccounts",r),s=j(n,kl);if("error"in s)throw new ee(s.error,"failed to get token largest accounts");return s.result}async getAccountInfoAndContext(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgs([e.toBase58()],r,"base64",n),i=await this._rpcRequest("getAccountInfo",s),o=j(i,Ne(Y(Hr)));if("error"in o)throw new ee(o.error,`failed to get info about account ${e.toBase58()}`);return o.result}async getParsedAccountInfo(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgs([e.toBase58()],r,"jsonParsed",n),i=await this._rpcRequest("getAccountInfo",s),o=j(i,Ne(Y(Cs)));if("error"in o)throw new ee(o.error,`failed to get info about account ${e.toBase58()}`);return o.result}async getAccountInfo(e,t){try{return(await this.getAccountInfoAndContext(e,t)).value}catch(r){throw new Error("failed to get info about account "+e.toBase58()+": "+r)}}async getMultipleParsedAccounts(e,t){const{commitment:r,config:n}=Re(t),s=e.map(c=>c.toBase58()),i=this._buildArgs([s],r,"jsonParsed",n),o=await this._rpcRequest("getMultipleAccounts",i),a=j(o,Ne(Q(Y(Cs))));if("error"in a)throw new ee(a.error,`failed to get info for accounts ${s}`);return a.result}async getMultipleAccountsInfoAndContext(e,t){const{commitment:r,config:n}=Re(t),s=e.map(c=>c.toBase58()),i=this._buildArgs([s],r,"base64",n),o=await this._rpcRequest("getMultipleAccounts",i),a=j(o,Ne(Q(Y(Hr))));if("error"in a)throw new ee(a.error,`failed to get info for accounts ${s}`);return a.result}async getMultipleAccountsInfo(e,t){return(await this.getMultipleAccountsInfoAndContext(e,t)).value}async getStakeActivation(e,t,r){const{commitment:n,config:s}=Re(t),i=this._buildArgs([e.toBase58()],n,void 0,{...s,epoch:r??(s==null?void 0:s.epoch)}),o=await this._rpcRequest("getStakeActivation",i),a=j(o,ue(Bl));if("error"in a)throw new ee(a.error,`failed to get Stake Activation ${e.toBase58()}`);return a.result}async getProgramAccounts(e,t){const{commitment:r,config:n}=Re(t),{encoding:s,...i}=n||{},o=this._buildArgs([e.toBase58()],r,s||"base64",i),a=await this._rpcRequest("getProgramAccounts",o),c=Q(Tl),u=i.withContext===!0?j(a,Ne(c)):j(a,ue(c));if("error"in u)throw new ee(u.error,`failed to get accounts owned by program ${e.toBase58()}`);return u.result}async getParsedProgramAccounts(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgs([e.toBase58()],r,"jsonParsed",n),i=await this._rpcRequest("getProgramAccounts",s),o=j(i,ue(Q(Cl)));if("error"in o)throw new ee(o.error,`failed to get accounts owned by program ${e.toBase58()}`);return o.result}async confirmTransaction(e,t){let r;if(typeof e=="string")r=e;else{var n;const i=e;if(!((n=i.abortSignal)===null||n===void 0)&&n.aborted)return Promise.reject(i.abortSignal.reason);r=i.signature}let s;try{s=Je.default.decode(r)}catch{throw new Error("signature must be base58 encoded: "+r)}return ye(s.length===64,"signature has invalid length"),typeof e=="string"?await this.confirmTransactionUsingLegacyTimeoutStrategy({commitment:t||this.commitment,signature:r}):"lastValidBlockHeight"in e?await this.confirmTransactionUsingBlockHeightExceedanceStrategy({commitment:t||this.commitment,strategy:e}):await this.confirmTransactionUsingDurableNonceStrategy({commitment:t||this.commitment,strategy:e})}getCancellationPromise(e){return new Promise((t,r)=>{e!=null&&(e.aborted?r(e.reason):e.addEventListener("abort",()=>{r(e.reason)}))})}getTransactionConfirmationPromise({commitment:e,signature:t}){let r,n,s=!1;const i=new Promise((a,c)=>{try{r=this.onSignature(t,(l,d)=>{r=void 0;const h={context:d,value:l};a({__type:qt.PROCESSED,response:h})},e);const u=new Promise(l=>{r==null?l():n=this._onSubscriptionStateChange(r,d=>{d==="subscribed"&&l()})});(async()=>{if(await u,s)return;const l=await this.getSignatureStatus(t);if(s||l==null)return;const{context:d,value:h}=l;if(h!=null)if(h!=null&&h.err)c(h.err);else{switch(e){case"confirmed":case"single":case"singleGossip":{if(h.confirmationStatus==="processed")return;break}case"finalized":case"max":case"root":{if(h.confirmationStatus==="processed"||h.confirmationStatus==="confirmed")return;break}case"processed":case"recent":}s=!0,a({__type:qt.PROCESSED,response:{context:d,value:h}})}})()}catch(u){c(u)}});return{abortConfirmation:()=>{n&&(n(),n=void 0),r!=null&&(this.removeSignatureListener(r),r=void 0)},confirmationPromise:i}}async confirmTransactionUsingBlockHeightExceedanceStrategy({commitment:e,strategy:{abortSignal:t,lastValidBlockHeight:r,signature:n}}){let s=!1;const i=new Promise(l=>{const d=async()=>{try{return await this.getBlockHeight(e)}catch{return-1}};(async()=>{let h=await d();if(!s){for(;h<=r;)if(await _r(1e3),s||(h=await d(),s))return;l({__type:qt.BLOCKHEIGHT_EXCEEDED})}})()}),{abortConfirmation:o,confirmationPromise:a}=this.getTransactionConfirmationPromise({commitment:e,signature:n}),c=this.getCancellationPromise(t);let u;try{const l=await Promise.race([c,a,i]);if(l.__type===qt.PROCESSED)u=l.response;else throw new Zs(n)}finally{s=!0,o()}return u}async confirmTransactionUsingDurableNonceStrategy({commitment:e,strategy:{abortSignal:t,minContextSlot:r,nonceAccountPubkey:n,nonceValue:s,signature:i}}){let o=!1;const a=new Promise(h=>{let p=s,w=null;const m=async()=>{try{const{context:E,value:y}=await this.getNonceAndContext(n,{commitment:e,minContextSlot:r});return w=E.slot,y==null?void 0:y.nonce}catch{return p}};(async()=>{if(p=await m(),!o)for(;;){if(s!==p){h({__type:qt.NONCE_INVALID,slotInWhichNonceDidAdvance:w});return}if(await _r(2e3),o||(p=await m(),o))return}})()}),{abortConfirmation:c,confirmationPromise:u}=this.getTransactionConfirmationPromise({commitment:e,signature:i}),l=this.getCancellationPromise(t);let d;try{const h=await Promise.race([l,u,a]);if(h.__type===qt.PROCESSED)d=h.response;else{let p;for(;;){const w=await this.getSignatureStatus(i);if(w==null)break;if(w.context.slot<(h.slotInWhichNonceDidAdvance??r)){await _r(400);continue}p=w;break}if(p!=null&&p.value){const w=e||"finalized",{confirmationStatus:m}=p.value;switch(w){case"processed":case"recent":if(m!=="processed"&&m!=="confirmed"&&m!=="finalized")throw new Ir(i);break;case"confirmed":case"single":case"singleGossip":if(m!=="confirmed"&&m!=="finalized")throw new Ir(i);break;case"finalized":case"max":case"root":if(m!=="finalized")throw new Ir(i);break;default:}d={context:p.context,value:{err:p.value.err}}}else throw new Ir(i)}}finally{o=!0,c()}return d}async confirmTransactionUsingLegacyTimeoutStrategy({commitment:e,signature:t}){let r;const n=new Promise(a=>{let c=this._confirmTransactionInitialTimeout||6e4;switch(e){case"processed":case"recent":case"single":case"confirmed":case"singleGossip":{c=this._confirmTransactionInitialTimeout||3e4;break}}r=setTimeout(()=>a({__type:qt.TIMED_OUT,timeoutMs:c}),c)}),{abortConfirmation:s,confirmationPromise:i}=this.getTransactionConfirmationPromise({commitment:e,signature:t});let o;try{const a=await Promise.race([i,n]);if(a.__type===qt.PROCESSED)o=a.response;else throw new Js(t,a.timeoutMs/1e3)}finally{clearTimeout(r),s()}return o}async getClusterNodes(){const e=await this._rpcRequest("getClusterNodes",[]),t=j(e,ue(Q(Wl)));if("error"in t)throw new ee(t.error,"failed to get cluster nodes");return t.result}async getVoteAccounts(e){const t=this._buildArgs([],e),r=await this._rpcRequest("getVoteAccounts",t),n=j(r,ql);if("error"in n)throw new ee(n.error,"failed to get vote accounts");return n.result}async getSlot(e){const{commitment:t,config:r}=Re(e),n=this._buildArgs([],t,void 0,r),s=await this._rpcRequest("getSlot",n),i=j(s,ue(I()));if("error"in i)throw new ee(i.error,"failed to get slot");return i.result}async getSlotLeader(e){const{commitment:t,config:r}=Re(e),n=this._buildArgs([],t,void 0,r),s=await this._rpcRequest("getSlotLeader",n),i=j(s,ue(G()));if("error"in i)throw new ee(i.error,"failed to get slot leader");return i.result}async getSlotLeaders(e,t){const r=[e,t],n=await this._rpcRequest("getSlotLeaders",r),s=j(n,ue(Q(Fe)));if("error"in s)throw new ee(s.error,"failed to get slot leaders");return s.result}async getSignatureStatus(e,t){const{context:r,value:n}=await this.getSignatureStatuses([e],t);ye(n.length===1);const s=n[0];return{context:r,value:s}}async getSignatureStatuses(e,t){const r=[e];t&&r.push(t);const n=await this._rpcRequest("getSignatureStatuses",r),s=j(n,Gl);if("error"in s)throw new ee(s.error,"failed to get signature status");return s.result}async getTransactionCount(e){const{commitment:t,config:r}=Re(e),n=this._buildArgs([],t,void 0,r),s=await this._rpcRequest("getTransactionCount",n),i=j(s,ue(I()));if("error"in i)throw new ee(i.error,"failed to get transaction count");return i.result}async getTotalSupply(e){return(await this.getSupply({commitment:e,excludeNonCirculatingAccountsList:!0})).value.total}async getInflationGovernor(e){const t=this._buildArgs([],e),r=await this._rpcRequest("getInflationGovernor",t),n=j(r,gl);if("error"in n)throw new ee(n.error,"failed to get inflation");return n.result}async getInflationReward(e,t,r){const{commitment:n,config:s}=Re(r),i=this._buildArgs([e.map(c=>c.toBase58())],n,void 0,{...s,epoch:t??(s==null?void 0:s.epoch)}),o=await this._rpcRequest("getInflationReward",i),a=j(o,il);if("error"in a)throw new ee(a.error,"failed to get inflation reward");return a.result}async getInflationRate(){const e=await this._rpcRequest("getInflationRate",[]),t=j(e,ml);if("error"in t)throw new ee(t.error,"failed to get inflation rate");return t.result}async getEpochInfo(e){const{commitment:t,config:r}=Re(e),n=this._buildArgs([],t,void 0,r),s=await this._rpcRequest("getEpochInfo",n),i=j(s,yl);if("error"in i)throw new ee(i.error,"failed to get epoch info");return i.result}async getEpochSchedule(){const e=await this._rpcRequest("getEpochSchedule",[]),t=j(e,El);if("error"in t)throw new ee(t.error,"failed to get epoch schedule");const r=t.result;return new ga(r.slotsPerEpoch,r.leaderScheduleSlotOffset,r.warmup,r.firstNormalEpoch,r.firstNormalSlot)}async getLeaderSchedule(){const e=await this._rpcRequest("getLeaderSchedule",[]),t=j(e,wl);if("error"in t)throw new ee(t.error,"failed to get leader schedule");return t.result}async getMinimumBalanceForRentExemption(e,t){const r=this._buildArgs([e],t),n=await this._rpcRequest("getMinimumBalanceForRentExemption",r),s=j(n,jl);return"error"in s?(console.warn("Unable to fetch minimum balance for rent exemption"),0):s.result}async getRecentBlockhashAndContext(e){const t=this._buildArgs([],e),r=await this._rpcRequest("getRecentBlockhash",t),n=j(r,nd);if("error"in n)throw new ee(n.error,"failed to get recent blockhash");return n.result}async getRecentPerformanceSamples(e){const t=await this._rpcRequest("getRecentPerformanceSamples",e?[e]:[]),r=j(t,ad);if("error"in r)throw new ee(r.error,"failed to get recent performance samples");return r.result}async getFeeCalculatorForBlockhash(e,t){const r=this._buildArgs([e],t),n=await this._rpcRequest("getFeeCalculatorForBlockhash",r),s=j(n,cd);if("error"in s)throw new ee(s.error,"failed to get fee calculator");const{context:i,value:o}=s.result;return{context:i,value:o!==null?o.feeCalculator:null}}async getFeeForMessage(e,t){const r=ce(e.serialize()).toString("base64"),n=this._buildArgs([r],t),s=await this._rpcRequest("getFeeForMessage",n),i=j(s,Ne(Y(I())));if("error"in i)throw new ee(i.error,"failed to get fee for message");if(i.result===null)throw new Error("invalid blockhash");return i.result}async getRecentPrioritizationFees(e){var t;const r=e==null||(t=e.lockedWritableAccounts)===null||t===void 0?void 0:t.map(o=>o.toBase58()),n=r!=null&&r.length?[r]:[],s=await this._rpcRequest("getRecentPrioritizationFees",n),i=j(s,bl);if("error"in i)throw new ee(i.error,"failed to get recent prioritization fees");return i.result}async getRecentBlockhash(e){try{return(await this.getRecentBlockhashAndContext(e)).value}catch(t){throw new Error("failed to get recent blockhash: "+t)}}async getLatestBlockhash(e){try{return(await this.getLatestBlockhashAndContext(e)).value}catch(t){throw new Error("failed to get recent blockhash: "+t)}}async getLatestBlockhashAndContext(e){const{commitment:t,config:r}=Re(e),n=this._buildArgs([],t,void 0,r),s=await this._rpcRequest("getLatestBlockhash",n),i=j(s,sd);if("error"in i)throw new ee(i.error,"failed to get latest blockhash");return i.result}async isBlockhashValid(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgs([e],r,void 0,n),i=await this._rpcRequest("isBlockhashValid",s),o=j(i,id);if("error"in o)throw new ee(o.error,"failed to determine if the blockhash `"+e+"`is valid");return o.result}async getVersion(){const e=await this._rpcRequest("getVersion",[]),t=j(e,ue(hl));if("error"in t)throw new ee(t.error,"failed to get version");return t.result}async getGenesisHash(){const e=await this._rpcRequest("getGenesisHash",[]),t=j(e,ue(G()));if("error"in t)throw new ee(t.error,"failed to get genesis hash");return t.result}async getBlock(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgsAtLeastConfirmed([e],r,void 0,n),i=await this._rpcRequest("getBlock",s);try{switch(n==null?void 0:n.transactionDetails){case"accounts":{const o=j(i,Jl);if("error"in o)throw o.error;return o.result}case"none":{const o=j(i,Zl);if("error"in o)throw o.error;return o.result}default:{const o=j(i,Ql);if("error"in o)throw o.error;const{result:a}=o;return a?{...a,transactions:a.transactions.map(({transaction:c,meta:u,version:l})=>({meta:u,transaction:{...c,message:fo(l,c.message)},version:l}))}:null}}}catch(o){throw new ee(o,"failed to get confirmed block")}}async getParsedBlock(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgsAtLeastConfirmed([e],r,"jsonParsed",n),i=await this._rpcRequest("getBlock",s);try{switch(n==null?void 0:n.transactionDetails){case"accounts":{const o=j(i,ed);if("error"in o)throw o.error;return o.result}case"none":{const o=j(i,td);if("error"in o)throw o.error;return o.result}default:{const o=j(i,Xl);if("error"in o)throw o.error;return o.result}}}catch(o){throw new ee(o,"failed to get block")}}async getBlockProduction(e){let t,r;if(typeof e=="string")r=e;else if(e){const{commitment:o,...a}=e;r=o,t=a}const n=this._buildArgs([],r,"base64",t),s=await this._rpcRequest("getBlockProduction",n),i=j(s,pl);if("error"in i)throw new ee(i.error,"failed to get block production information");return i.result}async getTransaction(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgsAtLeastConfirmed([e],r,void 0,n),i=await this._rpcRequest("getTransaction",s),o=j(i,Rs);if("error"in o)throw new ee(o.error,"failed to get transaction");const a=o.result;return a&&{...a,transaction:{...a.transaction,message:fo(a.version,a.transaction.message)}}}async getParsedTransaction(e,t){const{commitment:r,config:n}=Re(t),s=this._buildArgsAtLeastConfirmed([e],r,"jsonParsed",n),i=await this._rpcRequest("getTransaction",s),o=j(i,_n);if("error"in o)throw new ee(o.error,"failed to get transaction");return o.result}async getParsedTransactions(e,t){const{commitment:r,config:n}=Re(t),s=e.map(a=>({methodName:"getTransaction",args:this._buildArgsAtLeastConfirmed([a],r,"jsonParsed",n)}));return(await this._rpcBatchRequest(s)).map(a=>{const c=j(a,_n);if("error"in c)throw new ee(c.error,"failed to get transactions");return c.result})}async getTransactions(e,t){const{commitment:r,config:n}=Re(t),s=e.map(a=>({methodName:"getTransaction",args:this._buildArgsAtLeastConfirmed([a],r,void 0,n)}));return(await this._rpcBatchRequest(s)).map(a=>{const c=j(a,Rs);if("error"in c)throw new ee(c.error,"failed to get transactions");const u=c.result;return u&&{...u,transaction:{...u.transaction,message:fo(u.version,u.transaction.message)}}})}async getConfirmedBlock(e,t){const r=this._buildArgsAtLeastConfirmed([e],t),n=await this._rpcRequest("getConfirmedBlock",r),s=j(n,rd);if("error"in s)throw new ee(s.error,"failed to get confirmed block");const i=s.result;if(!i)throw new Error("Confirmed block "+e+" not found");const o={...i,transactions:i.transactions.map(({transaction:a,meta:c})=>{const u=new Jt(a.message);return{meta:c,transaction:{...a,message:u}}})};return{...o,transactions:o.transactions.map(({transaction:a,meta:c})=>({meta:c,transaction:Ae.populate(a.message,a.signatures)}))}}async getBlocks(e,t,r){const n=this._buildArgsAtLeastConfirmed(t!==void 0?[e,t]:[e],r),s=await this._rpcRequest("getBlocks",n),i=j(s,ue(Q(I())));if("error"in i)throw new ee(i.error,"failed to get blocks");return i.result}async getBlockSignatures(e,t){const r=this._buildArgsAtLeastConfirmed([e],t,void 0,{transactionDetails:"signatures",rewards:!1}),n=await this._rpcRequest("getBlock",r),s=j(n,Ro);if("error"in s)throw new ee(s.error,"failed to get block");const i=s.result;if(!i)throw new Error("Block "+e+" not found");return i}async getConfirmedBlockSignatures(e,t){const r=this._buildArgsAtLeastConfirmed([e],t,void 0,{transactionDetails:"signatures",rewards:!1}),n=await this._rpcRequest("getConfirmedBlock",r),s=j(n,Ro);if("error"in s)throw new ee(s.error,"failed to get confirmed block");const i=s.result;if(!i)throw new Error("Confirmed block "+e+" not found");return i}async getConfirmedTransaction(e,t){const r=this._buildArgsAtLeastConfirmed([e],t),n=await this._rpcRequest("getConfirmedTransaction",r),s=j(n,Rs);if("error"in s)throw new ee(s.error,"failed to get transaction");const i=s.result;if(!i)return i;const o=new Jt(i.transaction.message),a=i.transaction.signatures;return{...i,transaction:Ae.populate(o,a)}}async getParsedConfirmedTransaction(e,t){const r=this._buildArgsAtLeastConfirmed([e],t,"jsonParsed"),n=await this._rpcRequest("getConfirmedTransaction",r),s=j(n,_n);if("error"in s)throw new ee(s.error,"failed to get confirmed transaction");return s.result}async getParsedConfirmedTransactions(e,t){const r=e.map(i=>({methodName:"getConfirmedTransaction",args:this._buildArgsAtLeastConfirmed([i],t,"jsonParsed")}));return(await this._rpcBatchRequest(r)).map(i=>{const o=j(i,_n);if("error"in o)throw new ee(o.error,"failed to get confirmed transactions");return o.result})}async getConfirmedSignaturesForAddress(e,t,r){let n={},s=await this.getFirstAvailableBlock();for(;!("until"in n)&&(t--,!(t<=0||t<s));)try{const a=await this.getConfirmedBlockSignatures(t,"finalized");a.signatures.length>0&&(n.until=a.signatures[a.signatures.length-1].toString())}catch(a){if(a instanceof Error&&a.message.includes("skipped"))continue;throw a}let i=await this.getSlot("finalized");for(;!("before"in n)&&(r++,!(r>i));)try{const a=await this.getConfirmedBlockSignatures(r);a.signatures.length>0&&(n.before=a.signatures[a.signatures.length-1].toString())}catch(a){if(a instanceof Error&&a.message.includes("skipped"))continue;throw a}return(await this.getConfirmedSignaturesForAddress2(e,n)).map(a=>a.signature)}async getConfirmedSignaturesForAddress2(e,t,r){const n=this._buildArgsAtLeastConfirmed([e.toBase58()],r,void 0,t),s=await this._rpcRequest("getConfirmedSignaturesForAddress2",n),i=j(s,Dl);if("error"in i)throw new ee(i.error,"failed to get confirmed signatures for address");return i.result}async getSignaturesForAddress(e,t,r){const n=this._buildArgsAtLeastConfirmed([e.toBase58()],r,void 0,t),s=await this._rpcRequest("getSignaturesForAddress",n),i=j(s,Rl);if("error"in i)throw new ee(i.error,"failed to get signatures for address");return i.result}async getAddressLookupTable(e,t){const{context:r,value:n}=await this.getAccountInfoAndContext(e,t);let s=null;return n!==null&&(s=new ti({key:e,state:ti.deserialize(n.data)})),{context:r,value:s}}async getNonceAndContext(e,t){const{context:r,value:n}=await this.getAccountInfoAndContext(e,t);let s=null;return n!==null&&(s=pa.fromAccountData(n.data)),{context:r,value:s}}async getNonce(e,t){return await this.getNonceAndContext(e,t).then(r=>r.value).catch(r=>{throw new Error("failed to get nonce for account "+e.toBase58()+": "+r)})}async requestAirdrop(e,t){const r=await this._rpcRequest("requestAirdrop",[e.toBase58(),t]),n=j(r,ud);if("error"in n)throw new ee(n.error,`airdrop to ${e.toBase58()} failed`);return n.result}async _blockhashWithExpiryBlockHeight(e){if(!e){for(;this._pollingBlockhash;)await _r(100);const r=Date.now()-this._blockhashInfo.lastFetch>=ma;if(this._blockhashInfo.latestBlockhash!==null&&!r)return this._blockhashInfo.latestBlockhash}return await this._pollNewBlockhash()}async _pollNewBlockhash(){this._pollingBlockhash=!0;try{const e=Date.now(),t=this._blockhashInfo.latestBlockhash,r=t?t.blockhash:null;for(let n=0;n<50;n++){const s=await this.getLatestBlockhash("finalized");if(r!==s.blockhash)return this._blockhashInfo={latestBlockhash:s,lastFetch:Date.now(),transactionSignatures:[],simulatedSignatures:[]},s;await _r(bo/2)}throw new Error(`Unable to obtain a new blockhash after ${Date.now()-e}ms`)}finally{this._pollingBlockhash=!1}}async getStakeMinimumDelegation(e){const{commitment:t,config:r}=Re(e),n=this._buildArgs([],t,"base64",r),s=await this._rpcRequest("getStakeMinimumDelegation",n),i=j(s,Ne(I()));if("error"in i)throw new ee(i.error,"failed to get stake minimum delegation");return i.result}async simulateTransaction(e,t,r){if("message"in e){const w=e.serialize(),m=se.from(w).toString("base64");if(Array.isArray(t)||r!==void 0)throw new Error("Invalid arguments");const E=t||{};E.encoding="base64","commitment"in E||(E.commitment=this.commitment);const y=[m,E],P=await this._rpcRequest("simulateTransaction",y),O=j(P,Ao);if("error"in O)throw new Error("failed to simulate transaction: "+O.error.message);return O.result}let n;if(e instanceof Ae){let p=e;n=new Ae,n.feePayer=p.feePayer,n.instructions=e.instructions,n.nonceInfo=p.nonceInfo,n.signatures=p.signatures}else n=Ae.populate(e),n._message=n._json=void 0;if(t!==void 0&&!Array.isArray(t))throw new Error("Invalid arguments");const s=t;if(n.nonceInfo&&s)n.sign(...s);else{let p=this._disableBlockhashCaching;for(;;){const w=await this._blockhashWithExpiryBlockHeight(p);if(n.lastValidBlockHeight=w.lastValidBlockHeight,n.recentBlockhash=w.blockhash,!s)break;if(n.sign(...s),!n.signature)throw new Error("!signature");const m=n.signature.toString("base64");if(!this._blockhashInfo.simulatedSignatures.includes(m)&&!this._blockhashInfo.transactionSignatures.includes(m)){this._blockhashInfo.simulatedSignatures.push(m);break}else p=!0}}const i=n._compile(),o=i.serialize(),c=n._serialize(o).toString("base64"),u={encoding:"base64",commitment:this.commitment};if(r){const p=(Array.isArray(r)?r:i.nonProgramIds()).map(w=>w.toBase58());u.accounts={encoding:"base64",addresses:p}}s&&(u.sigVerify=!0);const l=[c,u],d=await this._rpcRequest("simulateTransaction",l),h=j(d,Ao);if("error"in h){let p;if("data"in h.error&&(p=h.error.data.logs,p&&Array.isArray(p))){const w=`
    `,m=w+p.join(w);console.error(h.error.message,m)}throw new tn({action:"simulate",signature:"",transactionMessage:h.error.message,transactionLogs:p})}return h.result}async sendTransaction(e,t,r){if("version"in e){if(t&&Array.isArray(t))throw new Error("Invalid arguments");const i=e.serialize();return await this.sendRawTransaction(i,t)}if(t===void 0||!Array.isArray(t))throw new Error("Invalid arguments");const n=t;if(e.nonceInfo)e.sign(...n);else{let i=this._disableBlockhashCaching;for(;;){const o=await this._blockhashWithExpiryBlockHeight(i);if(e.lastValidBlockHeight=o.lastValidBlockHeight,e.recentBlockhash=o.blockhash,e.sign(...n),!e.signature)throw new Error("!signature");const a=e.signature.toString("base64");if(this._blockhashInfo.transactionSignatures.includes(a))i=!0;else{this._blockhashInfo.transactionSignatures.push(a);break}}}const s=e.serialize();return await this.sendRawTransaction(s,r)}async sendRawTransaction(e,t){const r=ce(e).toString("base64");return await this.sendEncodedTransaction(r,t)}async sendEncodedTransaction(e,t){const r={encoding:"base64"},n=t&&t.skipPreflight,s=n===!0?"processed":t&&t.preflightCommitment||this.commitment;t&&t.maxRetries!=null&&(r.maxRetries=t.maxRetries),t&&t.minContextSlot!=null&&(r.minContextSlot=t.minContextSlot),n&&(r.skipPreflight=n),s&&(r.preflightCommitment=s);const i=[e,r],o=await this._rpcRequest("sendTransaction",i),a=j(o,ld);if("error"in a){let c;throw"data"in a.error&&(c=a.error.data.logs),new tn({action:n?"send":"simulate",signature:"",transactionMessage:a.error.message,transactionLogs:c})}return a.result}_wsOnOpen(){this._rpcWebSocketConnected=!0,this._rpcWebSocketHeartbeat=setInterval(()=>{(async()=>{try{await this._rpcWebSocket.notify("ping")}catch{}})()},5e3),this._updateSubscriptions()}_wsOnError(e){this._rpcWebSocketConnected=!1,console.error("ws error:",e.message)}_wsOnClose(e){if(this._rpcWebSocketConnected=!1,this._rpcWebSocketGeneration=(this._rpcWebSocketGeneration+1)%Number.MAX_SAFE_INTEGER,this._rpcWebSocketIdleTimeout&&(clearTimeout(this._rpcWebSocketIdleTimeout),this._rpcWebSocketIdleTimeout=null),this._rpcWebSocketHeartbeat&&(clearInterval(this._rpcWebSocketHeartbeat),this._rpcWebSocketHeartbeat=null),e===1e3){this._updateSubscriptions();return}this._subscriptionCallbacksByServerSubscriptionId={},Object.entries(this._subscriptionsByHash).forEach(([t,r])=>{this._setSubscription(t,{...r,state:"pending"})})}_setSubscription(e,t){var r;const n=(r=this._subscriptionsByHash[e])===null||r===void 0?void 0:r.state;if(this._subscriptionsByHash[e]=t,n!==t.state){const s=this._subscriptionStateChangeCallbacksByHash[e];s&&s.forEach(i=>{try{i(t.state)}catch{}})}}_onSubscriptionStateChange(e,t){var r;const n=this._subscriptionHashByClientSubscriptionId[e];if(n==null)return()=>{};const s=(r=this._subscriptionStateChangeCallbacksByHash)[n]||(r[n]=new Set);return s.add(t),()=>{s.delete(t),s.size===0&&delete this._subscriptionStateChangeCallbacksByHash[n]}}async _updateSubscriptions(){if(Object.keys(this._subscriptionsByHash).length===0){this._rpcWebSocketConnected&&(this._rpcWebSocketConnected=!1,this._rpcWebSocketIdleTimeout=setTimeout(()=>{this._rpcWebSocketIdleTimeout=null;try{this._rpcWebSocket.close()}catch(r){r instanceof Error&&console.log(`Error when closing socket connection: ${r.message}`)}},500));return}if(this._rpcWebSocketIdleTimeout!==null&&(clearTimeout(this._rpcWebSocketIdleTimeout),this._rpcWebSocketIdleTimeout=null,this._rpcWebSocketConnected=!0),!this._rpcWebSocketConnected){this._rpcWebSocket.connect();return}const e=this._rpcWebSocketGeneration,t=()=>e===this._rpcWebSocketGeneration;await Promise.all(Object.keys(this._subscriptionsByHash).map(async r=>{const n=this._subscriptionsByHash[r];if(n!==void 0)switch(n.state){case"pending":case"unsubscribed":if(n.callbacks.size===0){delete this._subscriptionsByHash[r],n.state==="unsubscribed"&&delete this._subscriptionCallbacksByServerSubscriptionId[n.serverSubscriptionId],await this._updateSubscriptions();return}await(async()=>{const{args:s,method:i}=n;try{this._setSubscription(r,{...n,state:"subscribing"});const o=await this._rpcWebSocket.call(i,s);this._setSubscription(r,{...n,serverSubscriptionId:o,state:"subscribed"}),this._subscriptionCallbacksByServerSubscriptionId[o]=n.callbacks,await this._updateSubscriptions()}catch(o){if(o instanceof Error&&console.error(`${i} error for argument`,s,o.message),!t())return;this._setSubscription(r,{...n,state:"pending"}),await this._updateSubscriptions()}})();break;case"subscribed":n.callbacks.size===0&&await(async()=>{const{serverSubscriptionId:s,unsubscribeMethod:i}=n;if(this._subscriptionsAutoDisposedByRpc.has(s))this._subscriptionsAutoDisposedByRpc.delete(s);else{this._setSubscription(r,{...n,state:"unsubscribing"}),this._setSubscription(r,{...n,state:"unsubscribing"});try{await this._rpcWebSocket.call(i,[s])}catch(o){if(o instanceof Error&&console.error(`${i} error:`,o.message),!t())return;this._setSubscription(r,{...n,state:"subscribed"}),await this._updateSubscriptions();return}}this._setSubscription(r,{...n,state:"unsubscribed"}),await this._updateSubscriptions()})();break}}))}_handleServerNotification(e,t){const r=this._subscriptionCallbacksByServerSubscriptionId[e];r!==void 0&&r.forEach(n=>{try{n(...t)}catch(s){console.error(s)}})}_wsOnAccountNotification(e){const{result:t,subscription:r}=j(e,Ol);this._handleServerNotification(r,[t.value,t.context])}_makeSubscription(e,t){const r=this._nextClientSubscriptionId++,n=Eo([e.method,t]),s=this._subscriptionsByHash[n];return s===void 0?this._subscriptionsByHash[n]={...e,args:t,callbacks:new Set([e.callback]),state:"pending"}:s.callbacks.add(e.callback),this._subscriptionHashByClientSubscriptionId[r]=n,this._subscriptionDisposeFunctionsByClientSubscriptionId[r]=async()=>{delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r],delete this._subscriptionHashByClientSubscriptionId[r];const i=this._subscriptionsByHash[n];ye(i!==void 0,`Could not find a \`Subscription\` when tearing down client subscription #${r}`),i.callbacks.delete(e.callback),await this._updateSubscriptions()},this._updateSubscriptions(),r}onAccountChange(e,t,r){const n=this._buildArgs([e.toBase58()],r||this._commitment||"finalized","base64");return this._makeSubscription({callback:t,method:"accountSubscribe",unsubscribeMethod:"accountUnsubscribe"},n)}async removeAccountChangeListener(e){await this._unsubscribeClientSubscription(e,"account change")}_wsOnProgramAccountNotification(e){const{result:t,subscription:r}=j(e,Nl);this._handleServerNotification(r,[{accountId:t.value.pubkey,accountInfo:t.value.account},t.context])}onProgramAccountChange(e,t,r,n){const s=this._buildArgs([e.toBase58()],r||this._commitment||"finalized","base64",n?{filters:n}:void 0);return this._makeSubscription({callback:t,method:"programSubscribe",unsubscribeMethod:"programUnsubscribe"},s)}async removeProgramAccountChangeListener(e){await this._unsubscribeClientSubscription(e,"program account change")}onLogs(e,t,r){const n=this._buildArgs([typeof e=="object"?{mentions:[e.toString()]}:e],r||this._commitment||"finalized");return this._makeSubscription({callback:t,method:"logsSubscribe",unsubscribeMethod:"logsUnsubscribe"},n)}async removeOnLogsListener(e){await this._unsubscribeClientSubscription(e,"logs")}_wsOnLogsNotification(e){const{result:t,subscription:r}=j(e,fd);this._handleServerNotification(r,[t.value,t.context])}_wsOnSlotNotification(e){const{result:t,subscription:r}=j(e,Fl);this._handleServerNotification(r,[t])}onSlotChange(e){return this._makeSubscription({callback:e,method:"slotSubscribe",unsubscribeMethod:"slotUnsubscribe"},[])}async removeSlotChangeListener(e){await this._unsubscribeClientSubscription(e,"slot change")}_wsOnSlotUpdatesNotification(e){const{result:t,subscription:r}=j(e,Ul);this._handleServerNotification(r,[t])}onSlotUpdate(e){return this._makeSubscription({callback:e,method:"slotsUpdatesSubscribe",unsubscribeMethod:"slotsUpdatesUnsubscribe"},[])}async removeSlotUpdateListener(e){await this._unsubscribeClientSubscription(e,"slot update")}async _unsubscribeClientSubscription(e,t){const r=this._subscriptionDisposeFunctionsByClientSubscriptionId[e];r?await r():console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)}_buildArgs(e,t,r,n){const s=t||this._commitment;if(s||r||n){let i={};r&&(i.encoding=r),s&&(i.commitment=s),n&&(i=Object.assign(i,n)),e.push(i)}return e}_buildArgsAtLeastConfirmed(e,t,r,n){const s=t||this._commitment;if(s&&!["confirmed","finalized"].includes(s))throw new Error("Using Connection with default commitment: `"+this._commitment+"`, but method requires at least `confirmed`");return this._buildArgs(e,t,r,n)}_wsOnSignatureNotification(e){const{result:t,subscription:r}=j(e,Vl);t.value!=="receivedSignature"&&this._subscriptionsAutoDisposedByRpc.add(r),this._handleServerNotification(r,t.value==="receivedSignature"?[{type:"received"},t.context]:[{type:"status",result:t.value},t.context])}onSignature(e,t,r){const n=this._buildArgs([e],r||this._commitment||"finalized"),s=this._makeSubscription({callback:(i,o)=>{if(i.type==="status"){t(i.result,o);try{this.removeSignatureListener(s)}catch{}}},method:"signatureSubscribe",unsubscribeMethod:"signatureUnsubscribe"},n);return s}onSignatureWithOptions(e,t,r){const{commitment:n,...s}={...r,commitment:r&&r.commitment||this._commitment||"finalized"},i=this._buildArgs([e],n,void 0,s),o=this._makeSubscription({callback:(a,c)=>{t(a,c);try{this.removeSignatureListener(o)}catch{}},method:"signatureSubscribe",unsubscribeMethod:"signatureUnsubscribe"},i);return o}async removeSignatureListener(e){await this._unsubscribeClientSubscription(e,"signature result")}_wsOnRootNotification(e){const{result:t,subscription:r}=j(e,zl);this._handleServerNotification(r,[t])}onRootChange(e){return this._makeSubscription({callback:e,method:"rootSubscribe",unsubscribeMethod:"rootUnsubscribe"},[])}async removeRootChangeListener(e){await this._unsubscribeClientSubscription(e,"root change")}},ba=class si{constructor(t){this._keypair=void 0,this._keypair=t??po()}static generate(){return new si(po())}static fromSecretKey(t,r){if(t.byteLength!==64)throw new Error("bad secret key size");const n=t.slice(32,64);if(!r||!r.skipValidation){const s=t.slice(0,32),i=An(s);for(let o=0;o<32;o++)if(n[o]!==i[o])throw new Error("provided secretKey is invalid")}return new si({publicKey:n,secretKey:t})}static fromSeed(t){const r=An(t),n=new Uint8Array(64);return n.set(t),n.set(r,32),new si({publicKey:r,secretKey:n})}get publicKey(){return new $(this._keypair.publicKey)}get secretKey(){return new Uint8Array(this._keypair.secretKey)}},Ht=Object.freeze({CreateLookupTable:{index:0,layout:v.struct([v.u32("instruction"),wr("recentSlot"),v.u8("bumpSeed")])},FreezeLookupTable:{index:1,layout:v.struct([v.u32("instruction")])},ExtendLookupTable:{index:2,layout:v.struct([v.u32("instruction"),wr(),v.seq(de(),v.offset(v.u32(),-8),"addresses")])},DeactivateLookupTable:{index:3,layout:v.struct([v.u32("instruction")])},CloseLookupTable:{index:4,layout:v.struct([v.u32("instruction")])}}),Qp=class{constructor(){}static decodeInstructionType(e){this.checkProgramId(e.programId);const r=v.u32("instruction").decode(e.data);let n;for(const[s,i]of Object.entries(Ht))if(i.index==r){n=s;break}if(!n)throw new Error("Invalid Instruction. Should be a LookupTable Instruction");return n}static decodeCreateLookupTable(e){this.checkProgramId(e.programId),this.checkKeysLength(e.keys,4);const{recentSlot:t}=we(Ht.CreateLookupTable,e.data);return{authority:e.keys[1].pubkey,payer:e.keys[2].pubkey,recentSlot:Number(t)}}static decodeExtendLookupTable(e){if(this.checkProgramId(e.programId),e.keys.length<2)throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);const{addresses:t}=we(Ht.ExtendLookupTable,e.data);return{lookupTable:e.keys[0].pubkey,authority:e.keys[1].pubkey,payer:e.keys.length>2?e.keys[2].pubkey:void 0,addresses:t.map(r=>new $(r))}}static decodeCloseLookupTable(e){return this.checkProgramId(e.programId),this.checkKeysLength(e.keys,3),{lookupTable:e.keys[0].pubkey,authority:e.keys[1].pubkey,recipient:e.keys[2].pubkey}}static decodeFreezeLookupTable(e){return this.checkProgramId(e.programId),this.checkKeysLength(e.keys,2),{lookupTable:e.keys[0].pubkey,authority:e.keys[1].pubkey}}static decodeDeactivateLookupTable(e){return this.checkProgramId(e.programId),this.checkKeysLength(e.keys,2),{lookupTable:e.keys[0].pubkey,authority:e.keys[1].pubkey}}static checkProgramId(e){if(!e.equals(ri.programId))throw new Error("invalid instruction; programId is not AddressLookupTable Program")}static checkKeysLength(e,t){if(e.length<t)throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)}},ri=class{constructor(){}static createLookupTable(e){const[t,r]=$.findProgramAddressSync([e.authority.toBuffer(),(0,Ss.toBufferLE)(BigInt(e.recentSlot),8)],this.programId),n=Ht.CreateLookupTable,s=ge(n,{recentSlot:BigInt(e.recentSlot),bumpSeed:r}),i=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1},{pubkey:e.payer,isSigner:!0,isWritable:!0},{pubkey:dt.programId,isSigner:!1,isWritable:!1}];return[new Se({programId:this.programId,keys:i,data:s}),t]}static freezeLookupTable(e){const t=Ht.FreezeLookupTable,r=ge(t),n=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1}];return new Se({programId:this.programId,keys:n,data:r})}static extendLookupTable(e){const t=Ht.ExtendLookupTable,r=ge(t,{addresses:e.addresses.map(s=>s.toBytes())}),n=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1}];return e.payer&&n.push({pubkey:e.payer,isSigner:!0,isWritable:!0},{pubkey:dt.programId,isSigner:!1,isWritable:!1}),new Se({programId:this.programId,keys:n,data:r})}static deactivateLookupTable(e){const t=Ht.DeactivateLookupTable,r=ge(t),n=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1}];return new Se({programId:this.programId,keys:n,data:r})}static closeLookupTable(e){const t=Ht.CloseLookupTable,r=ge(t),n=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1},{pubkey:e.recipient,isSigner:!1,isWritable:!0}];return new Se({programId:this.programId,keys:n,data:r})}},ri.programId=new $("AddressLookupTab1e1111111111111111111111111"),Zp=class{constructor(){}static decodeInstructionType(e){this.checkProgramId(e.programId);const r=v.u8("instruction").decode(e.data);let n;for(const[s,i]of Object.entries(xt))if(i.index==r){n=s;break}if(!n)throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");return n}static decodeRequestUnits(e){this.checkProgramId(e.programId);const{units:t,additionalFee:r}=we(xt.RequestUnits,e.data);return{units:t,additionalFee:r}}static decodeRequestHeapFrame(e){this.checkProgramId(e.programId);const{bytes:t}=we(xt.RequestHeapFrame,e.data);return{bytes:t}}static decodeSetComputeUnitLimit(e){this.checkProgramId(e.programId);const{units:t}=we(xt.SetComputeUnitLimit,e.data);return{units:t}}static decodeSetComputeUnitPrice(e){this.checkProgramId(e.programId);const{microLamports:t}=we(xt.SetComputeUnitPrice,e.data);return{microLamports:t}}static checkProgramId(e){if(!e.equals(ni.programId))throw new Error("invalid instruction; programId is not ComputeBudgetProgram")}},xt=Object.freeze({RequestUnits:{index:0,layout:v.struct([v.u8("instruction"),v.u32("units"),v.u32("additionalFee")])},RequestHeapFrame:{index:1,layout:v.struct([v.u8("instruction"),v.u32("bytes")])},SetComputeUnitLimit:{index:2,layout:v.struct([v.u8("instruction"),v.u32("units")])},SetComputeUnitPrice:{index:3,layout:v.struct([v.u8("instruction"),wr("microLamports")])}}),ni=class{constructor(){}static requestUnits(e){const t=xt.RequestUnits,r=ge(t,e);return new Se({keys:[],programId:this.programId,data:r})}static requestHeapFrame(e){const t=xt.RequestHeapFrame,r=ge(t,e);return new Se({keys:[],programId:this.programId,data:r})}static setComputeUnitLimit(e){const t=xt.SetComputeUnitLimit,r=ge(t,e);return new Se({keys:[],programId:this.programId,data:r})}static setComputeUnitPrice(e){const t=xt.SetComputeUnitPrice,r=ge(t,{microLamports:BigInt(e.microLamports)});return new Se({keys:[],programId:this.programId,data:r})}},ni.programId=new $("ComputeBudget111111111111111111111111111111"),Oo=64,xo=32,No=64,Lo=v.struct([v.u8("numSignatures"),v.u8("padding"),v.u16("signatureOffset"),v.u16("signatureInstructionIndex"),v.u16("publicKeyOffset"),v.u16("publicKeyInstructionIndex"),v.u16("messageDataOffset"),v.u16("messageDataSize"),v.u16("messageInstructionIndex")]),ya=class l0{constructor(){}static createInstructionWithPublicKey(t){const{publicKey:r,message:n,signature:s,instructionIndex:i}=t;ye(r.length===xo,`Public Key must be ${xo} bytes but received ${r.length} bytes`),ye(s.length===No,`Signature must be ${No} bytes but received ${s.length} bytes`);const o=Lo.span,a=o+r.length,c=a+s.length,u=1,l=se.alloc(c+n.length),d=i??65535;return Lo.encode({numSignatures:u,padding:0,signatureOffset:a,signatureInstructionIndex:d,publicKeyOffset:o,publicKeyInstructionIndex:d,messageDataOffset:c,messageDataSize:n.length,messageInstructionIndex:d},l),l.fill(r,o),l.fill(s,a),l.fill(n,c),new Se({keys:[],programId:l0.programId,data:l})}static createInstructionWithPrivateKey(t){const{privateKey:r,message:n,instructionIndex:s}=t;ye(r.length===Oo,`Private key must be ${Oo} bytes but received ${r.length} bytes`);try{const i=ba.fromSecretKey(r),o=i.publicKey.toBytes(),a=_s(n,i.secretKey);return this.createInstructionWithPublicKey({publicKey:o,message:n,signature:a,instructionIndex:s})}catch(i){throw new Error(`Error creating instruction; ${i}`)}}},ya.programId=new $("Ed25519SigVerify111111111111111111111111111"),hd=(e,t)=>{const r=Ys.sign(e,t);return[r.toCompactRawBytes(),r.recovery]},Ys.utils.isValidPrivateKey,pd=Ys.getPublicKey,Fo=32,Os=20,Mo=64,gd=11,xs=v.struct([v.u8("numSignatures"),v.u16("signatureOffset"),v.u8("signatureInstructionIndex"),v.u16("ethAddressOffset"),v.u8("ethAddressInstructionIndex"),v.u16("messageDataOffset"),v.u16("messageDataSize"),v.u8("messageInstructionIndex"),v.blob(20,"ethAddress"),v.blob(64,"signature"),v.u8("recoveryId")]),Ea=class ii{constructor(){}static publicKeyToEthAddress(t){ye(t.length===Mo,`Public key must be ${Mo} bytes but received ${t.length} bytes`);try{return se.from(hc(ce(t))).slice(-Os)}catch(r){throw new Error(`Error constructing Ethereum address: ${r}`)}}static createInstructionWithPublicKey(t){const{publicKey:r,message:n,signature:s,recoveryId:i,instructionIndex:o}=t;return ii.createInstructionWithEthAddress({ethAddress:ii.publicKeyToEthAddress(r),message:n,signature:s,recoveryId:i,instructionIndex:o})}static createInstructionWithEthAddress(t){const{ethAddress:r,message:n,signature:s,recoveryId:i,instructionIndex:o=0}=t;let a;typeof r=="string"?r.startsWith("0x")?a=se.from(r.substr(2),"hex"):a=se.from(r,"hex"):a=r,ye(a.length===Os,`Address must be ${Os} bytes but received ${a.length} bytes`);const c=1+gd,u=c,l=c+a.length,d=l+s.length+1,h=1,p=se.alloc(xs.span+n.length);return xs.encode({numSignatures:h,signatureOffset:l,signatureInstructionIndex:o,ethAddressOffset:u,ethAddressInstructionIndex:o,messageDataOffset:d,messageDataSize:n.length,messageInstructionIndex:o,signature:ce(s),ethAddress:ce(a),recoveryId:i},p),p.fill(ce(n),xs.span),new Se({keys:[],programId:ii.programId,data:p})}static createInstructionWithPrivateKey(t){const{privateKey:r,message:n,instructionIndex:s}=t;ye(r.length===Fo,`Private key must be ${Fo} bytes but received ${r.length} bytes`);try{const i=ce(r),o=pd(i,!1).slice(1),a=se.from(hc(ce(n))),[c,u]=hd(a,i);return this.createInstructionWithPublicKey({publicKey:o,message:n,signature:c,recoveryId:u,instructionIndex:s})}catch(i){throw new Error(`Error creating instruction; ${i}`)}}},Ea.programId=new $("KeccakSecp256k11111111111111111111111111111"),wa=new $("StakeConfig11111111111111111111111111111111"),va=class{constructor(e,t){this.staker=void 0,this.withdrawer=void 0,this.staker=e,this.withdrawer=t}},$r=class{constructor(e,t,r){this.unixTimestamp=void 0,this.epoch=void 0,this.custodian=void 0,this.unixTimestamp=e,this.epoch=t,this.custodian=r}},md=$r,$r.default=new md(0,0,$.default),Jp=class{constructor(){}static decodeInstructionType(e){this.checkProgramId(e.programId);const r=v.u32("instruction").decode(e.data);let n;for(const[s,i]of Object.entries(Ge))if(i.index==r){n=s;break}if(!n)throw new Error("Instruction type incorrect; not a StakeInstruction");return n}static decodeInitialize(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,2);const{authorized:t,lockup:r}=we(Ge.Initialize,e.data);return{stakePubkey:e.keys[0].pubkey,authorized:new va(new $(t.staker),new $(t.withdrawer)),lockup:new $r(r.unixTimestamp,r.epoch,new $(r.custodian))}}static decodeDelegate(e){return this.checkProgramId(e.programId),this.checkKeyLength(e.keys,6),we(Ge.Delegate,e.data),{stakePubkey:e.keys[0].pubkey,votePubkey:e.keys[1].pubkey,authorizedPubkey:e.keys[5].pubkey}}static decodeAuthorize(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3);const{newAuthorized:t,stakeAuthorizationType:r}=we(Ge.Authorize,e.data),n={stakePubkey:e.keys[0].pubkey,authorizedPubkey:e.keys[2].pubkey,newAuthorizedPubkey:new $(t),stakeAuthorizationType:{index:r}};return e.keys.length>3&&(n.custodianPubkey=e.keys[3].pubkey),n}static decodeAuthorizeWithSeed(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,2);const{newAuthorized:t,stakeAuthorizationType:r,authoritySeed:n,authorityOwner:s}=we(Ge.AuthorizeWithSeed,e.data),i={stakePubkey:e.keys[0].pubkey,authorityBase:e.keys[1].pubkey,authoritySeed:n,authorityOwner:new $(s),newAuthorizedPubkey:new $(t),stakeAuthorizationType:{index:r}};return e.keys.length>3&&(i.custodianPubkey=e.keys[3].pubkey),i}static decodeSplit(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3);const{lamports:t}=we(Ge.Split,e.data);return{stakePubkey:e.keys[0].pubkey,splitStakePubkey:e.keys[1].pubkey,authorizedPubkey:e.keys[2].pubkey,lamports:t}}static decodeMerge(e){return this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3),we(Ge.Merge,e.data),{stakePubkey:e.keys[0].pubkey,sourceStakePubKey:e.keys[1].pubkey,authorizedPubkey:e.keys[4].pubkey}}static decodeWithdraw(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,5);const{lamports:t}=we(Ge.Withdraw,e.data),r={stakePubkey:e.keys[0].pubkey,toPubkey:e.keys[1].pubkey,authorizedPubkey:e.keys[4].pubkey,lamports:t};return e.keys.length>5&&(r.custodianPubkey=e.keys[5].pubkey),r}static decodeDeactivate(e){return this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3),we(Ge.Deactivate,e.data),{stakePubkey:e.keys[0].pubkey,authorizedPubkey:e.keys[2].pubkey}}static checkProgramId(e){if(!e.equals(Un.programId))throw new Error("invalid instruction; programId is not StakeProgram")}static checkKeyLength(e,t){if(e.length<t)throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)}},Ge=Object.freeze({Initialize:{index:0,layout:v.struct([v.u32("instruction"),Hu(),Ku()])},Authorize:{index:1,layout:v.struct([v.u32("instruction"),de("newAuthorized"),v.u32("stakeAuthorizationType")])},Delegate:{index:2,layout:v.struct([v.u32("instruction")])},Split:{index:3,layout:v.struct([v.u32("instruction"),v.ns64("lamports")])},Withdraw:{index:4,layout:v.struct([v.u32("instruction"),v.ns64("lamports")])},Deactivate:{index:5,layout:v.struct([v.u32("instruction")])},Merge:{index:7,layout:v.struct([v.u32("instruction")])},AuthorizeWithSeed:{index:8,layout:v.struct([v.u32("instruction"),de("newAuthorized"),v.u32("stakeAuthorizationType"),sr("authoritySeed"),de("authorityOwner")])}}),Xp=Object.freeze({Staker:{index:0},Withdrawer:{index:1}}),Un=class{constructor(){}static initialize(e){const{stakePubkey:t,authorized:r,lockup:n}=e,s=n||$r.default,i=Ge.Initialize,o=ge(i,{authorized:{staker:ce(r.staker.toBuffer()),withdrawer:ce(r.withdrawer.toBuffer())},lockup:{unixTimestamp:s.unixTimestamp,epoch:s.epoch,custodian:ce(s.custodian.toBuffer())}}),a={keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:Tr,isSigner:!1,isWritable:!1}],programId:this.programId,data:o};return new Se(a)}static createAccountWithSeed(e){const t=new Ae;t.add(dt.createAccountWithSeed({fromPubkey:e.fromPubkey,newAccountPubkey:e.stakePubkey,basePubkey:e.basePubkey,seed:e.seed,lamports:e.lamports,space:this.space,programId:this.programId}));const{stakePubkey:r,authorized:n,lockup:s}=e;return t.add(this.initialize({stakePubkey:r,authorized:n,lockup:s}))}static createAccount(e){const t=new Ae;t.add(dt.createAccount({fromPubkey:e.fromPubkey,newAccountPubkey:e.stakePubkey,lamports:e.lamports,space:this.space,programId:this.programId}));const{stakePubkey:r,authorized:n,lockup:s}=e;return t.add(this.initialize({stakePubkey:r,authorized:n,lockup:s}))}static delegate(e){const{stakePubkey:t,authorizedPubkey:r,votePubkey:n}=e,s=Ge.Delegate,i=ge(s);return new Ae().add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:Ot,isSigner:!1,isWritable:!1},{pubkey:Fn,isSigner:!1,isWritable:!1},{pubkey:wa,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!0,isWritable:!1}],programId:this.programId,data:i})}static authorize(e){const{stakePubkey:t,authorizedPubkey:r,newAuthorizedPubkey:n,stakeAuthorizationType:s,custodianPubkey:i}=e,o=Ge.Authorize,a=ge(o,{newAuthorized:ce(n.toBuffer()),stakeAuthorizationType:s.index}),c=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:Ot,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!0,isWritable:!1}];return i&&c.push({pubkey:i,isSigner:!0,isWritable:!1}),new Ae().add({keys:c,programId:this.programId,data:a})}static authorizeWithSeed(e){const{stakePubkey:t,authorityBase:r,authoritySeed:n,authorityOwner:s,newAuthorizedPubkey:i,stakeAuthorizationType:o,custodianPubkey:a}=e,c=Ge.AuthorizeWithSeed,u=ge(c,{newAuthorized:ce(i.toBuffer()),stakeAuthorizationType:o.index,authoritySeed:n,authorityOwner:ce(s.toBuffer())}),l=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!0,isWritable:!1},{pubkey:Ot,isSigner:!1,isWritable:!1}];return a&&l.push({pubkey:a,isSigner:!0,isWritable:!1}),new Ae().add({keys:l,programId:this.programId,data:u})}static splitInstruction(e){const{stakePubkey:t,authorizedPubkey:r,splitStakePubkey:n,lamports:s}=e,i=Ge.Split,o=ge(i,{lamports:s});return new Se({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!0,isWritable:!1}],programId:this.programId,data:o})}static split(e,t){const r=new Ae;return r.add(dt.createAccount({fromPubkey:e.authorizedPubkey,newAccountPubkey:e.splitStakePubkey,lamports:t,space:this.space,programId:this.programId})),r.add(this.splitInstruction(e))}static splitWithSeed(e,t){const{stakePubkey:r,authorizedPubkey:n,splitStakePubkey:s,basePubkey:i,seed:o,lamports:a}=e,c=new Ae;return c.add(dt.allocate({accountPubkey:s,basePubkey:i,seed:o,space:this.space,programId:this.programId})),t&&t>0&&c.add(dt.transfer({fromPubkey:e.authorizedPubkey,toPubkey:s,lamports:t})),c.add(this.splitInstruction({stakePubkey:r,authorizedPubkey:n,splitStakePubkey:s,lamports:a}))}static merge(e){const{stakePubkey:t,sourceStakePubKey:r,authorizedPubkey:n}=e,s=Ge.Merge,i=ge(s);return new Ae().add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!0},{pubkey:Ot,isSigner:!1,isWritable:!1},{pubkey:Fn,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}],programId:this.programId,data:i})}static withdraw(e){const{stakePubkey:t,authorizedPubkey:r,toPubkey:n,lamports:s,custodianPubkey:i}=e,o=Ge.Withdraw,a=ge(o,{lamports:s}),c=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:Ot,isSigner:!1,isWritable:!1},{pubkey:Fn,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!0,isWritable:!1}];return i&&c.push({pubkey:i,isSigner:!0,isWritable:!1}),new Ae().add({keys:c,programId:this.programId,data:a})}static deactivate(e){const{stakePubkey:t,authorizedPubkey:r}=e,n=Ge.Deactivate,s=ge(n);return new Ae().add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:Ot,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!0,isWritable:!1}],programId:this.programId,data:s})}},Un.programId=new $("Stake11111111111111111111111111111111111111"),Un.space=200,Aa=class{constructor(e,t,r,n){this.nodePubkey=void 0,this.authorizedVoter=void 0,this.authorizedWithdrawer=void 0,this.commission=void 0,this.nodePubkey=e,this.authorizedVoter=t,this.authorizedWithdrawer=r,this.commission=n}},e0=class{constructor(){}static decodeInstructionType(e){this.checkProgramId(e.programId);const r=v.u32("instruction").decode(e.data);let n;for(const[s,i]of Object.entries(Dt))if(i.index==r){n=s;break}if(!n)throw new Error("Instruction type incorrect; not a VoteInstruction");return n}static decodeInitializeAccount(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,4);const{voteInit:t}=we(Dt.InitializeAccount,e.data);return{votePubkey:e.keys[0].pubkey,nodePubkey:e.keys[3].pubkey,voteInit:new Aa(new $(t.nodePubkey),new $(t.authorizedVoter),new $(t.authorizedWithdrawer),t.commission)}}static decodeAuthorize(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3);const{newAuthorized:t,voteAuthorizationType:r}=we(Dt.Authorize,e.data);return{votePubkey:e.keys[0].pubkey,authorizedPubkey:e.keys[2].pubkey,newAuthorizedPubkey:new $(t),voteAuthorizationType:{index:r}}}static decodeAuthorizeWithSeed(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3);const{voteAuthorizeWithSeedArgs:{currentAuthorityDerivedKeyOwnerPubkey:t,currentAuthorityDerivedKeySeed:r,newAuthorized:n,voteAuthorizationType:s}}=we(Dt.AuthorizeWithSeed,e.data);return{currentAuthorityDerivedKeyBasePubkey:e.keys[2].pubkey,currentAuthorityDerivedKeyOwnerPubkey:new $(t),currentAuthorityDerivedKeySeed:r,newAuthorizedPubkey:new $(n),voteAuthorizationType:{index:s},votePubkey:e.keys[0].pubkey}}static decodeWithdraw(e){this.checkProgramId(e.programId),this.checkKeyLength(e.keys,3);const{lamports:t}=we(Dt.Withdraw,e.data);return{votePubkey:e.keys[0].pubkey,authorizedWithdrawerPubkey:e.keys[2].pubkey,lamports:t,toPubkey:e.keys[1].pubkey}}static checkProgramId(e){if(!e.equals(Vn.programId))throw new Error("invalid instruction; programId is not VoteProgram")}static checkKeyLength(e,t){if(e.length<t)throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)}},Dt=Object.freeze({InitializeAccount:{index:0,layout:v.struct([v.u32("instruction"),Gu()])},Authorize:{index:1,layout:v.struct([v.u32("instruction"),de("newAuthorized"),v.u32("voteAuthorizationType")])},Withdraw:{index:3,layout:v.struct([v.u32("instruction"),v.ns64("lamports")])},UpdateValidatorIdentity:{index:4,layout:v.struct([v.u32("instruction")])},AuthorizeWithSeed:{index:10,layout:v.struct([v.u32("instruction"),ju()])}}),t0=Object.freeze({Voter:{index:0},Withdrawer:{index:1}}),Vn=class d0{constructor(){}static initializeAccount(t){const{votePubkey:r,nodePubkey:n,voteInit:s}=t,i=Dt.InitializeAccount,o=ge(i,{voteInit:{nodePubkey:ce(s.nodePubkey.toBuffer()),authorizedVoter:ce(s.authorizedVoter.toBuffer()),authorizedWithdrawer:ce(s.authorizedWithdrawer.toBuffer()),commission:s.commission}}),a={keys:[{pubkey:r,isSigner:!1,isWritable:!0},{pubkey:Tr,isSigner:!1,isWritable:!1},{pubkey:Ot,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}],programId:this.programId,data:o};return new Se(a)}static createAccount(t){const r=new Ae;return r.add(dt.createAccount({fromPubkey:t.fromPubkey,newAccountPubkey:t.votePubkey,lamports:t.lamports,space:this.space,programId:this.programId})),r.add(this.initializeAccount({votePubkey:t.votePubkey,nodePubkey:t.voteInit.nodePubkey,voteInit:t.voteInit}))}static authorize(t){const{votePubkey:r,authorizedPubkey:n,newAuthorizedPubkey:s,voteAuthorizationType:i}=t,o=Dt.Authorize,a=ge(o,{newAuthorized:ce(s.toBuffer()),voteAuthorizationType:i.index}),c=[{pubkey:r,isSigner:!1,isWritable:!0},{pubkey:Ot,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}];return new Ae().add({keys:c,programId:this.programId,data:a})}static authorizeWithSeed(t){const{currentAuthorityDerivedKeyBasePubkey:r,currentAuthorityDerivedKeyOwnerPubkey:n,currentAuthorityDerivedKeySeed:s,newAuthorizedPubkey:i,voteAuthorizationType:o,votePubkey:a}=t,c=Dt.AuthorizeWithSeed,u=ge(c,{voteAuthorizeWithSeedArgs:{currentAuthorityDerivedKeyOwnerPubkey:ce(n.toBuffer()),currentAuthorityDerivedKeySeed:s,newAuthorized:ce(i.toBuffer()),voteAuthorizationType:o.index}}),l=[{pubkey:a,isSigner:!1,isWritable:!0},{pubkey:Ot,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!0,isWritable:!1}];return new Ae().add({keys:l,programId:this.programId,data:u})}static withdraw(t){const{votePubkey:r,authorizedWithdrawerPubkey:n,lamports:s,toPubkey:i}=t,o=Dt.Withdraw,a=ge(o,{lamports:s}),c=[{pubkey:r,isSigner:!1,isWritable:!0},{pubkey:i,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}];return new Ae().add({keys:c,programId:this.programId,data:a})}static safeWithdraw(t,r,n){if(t.lamports>r-n)throw new Error("Withdraw will leave vote account with insufficient funds.");return d0.withdraw(t)}static updateValidatorIdentity(t){const{votePubkey:r,authorizedWithdrawerPubkey:n,nodePubkey:s}=t,i=Dt.UpdateValidatorIdentity,o=ge(i),a=[{pubkey:r,isSigner:!1,isWritable:!0},{pubkey:s,isSigner:!0,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}];return new Ae().add({keys:a,programId:this.programId,data:o})}},Vn.programId=new $("Vote111111111111111111111111111111111111111"),Vn.space=3762,ka=new $("Va1idator1nfo111111111111111111111111111111"),bd=z({name:G(),website:ie(G()),details:ie(G()),keybaseUsername:ie(G())}),r0=class f0{constructor(t,r){this.key=void 0,this.info=void 0,this.key=t,this.info=r}static fromConfigData(t){let r=[...t];if(bt(r)!==2)return null;const s=[];for(let i=0;i<2;i++){const o=new $(yt(r,0,Rt)),a=Vt(r)===1;s.push({publicKey:o,isSigner:a})}if(s[0].publicKey.equals(ka)&&s[1].isSigner){const i=sr().decode(se.from(r)),o=JSON.parse(i);return $0(o,bd),new f0(s[1].publicKey,o)}return null}},n0=new $("Vote111111111111111111111111111111111111111"),yd=v.struct([de("nodePubkey"),de("authorizedWithdrawer"),v.u8("commission"),v.nu64(),v.seq(v.struct([v.nu64("slot"),v.u32("confirmationCount")]),v.offset(v.u32(),-8),"votes"),v.u8("rootSlotValid"),v.nu64("rootSlot"),v.nu64(),v.seq(v.struct([v.nu64("epoch"),de("authorizedVoter")]),v.offset(v.u32(),-8),"authorizedVoters"),v.struct([v.seq(v.struct([de("authorizedPubkey"),v.nu64("epochOfLastAuthorizedSwitch"),v.nu64("targetEpoch")]),32,"buf"),v.nu64("idx"),v.u8("isEmpty")],"priorVoters"),v.nu64(),v.seq(v.struct([v.nu64("epoch"),v.nu64("credits"),v.nu64("prevCredits")]),v.offset(v.u32(),-8),"epochCredits"),v.struct([v.nu64("slot"),v.nu64("timestamp")],"lastTimestamp")]),s0=class h0{constructor(t){this.nodePubkey=void 0,this.authorizedWithdrawer=void 0,this.commission=void 0,this.rootSlot=void 0,this.votes=void 0,this.authorizedVoters=void 0,this.priorVoters=void 0,this.epochCredits=void 0,this.lastTimestamp=void 0,this.nodePubkey=t.nodePubkey,this.authorizedWithdrawer=t.authorizedWithdrawer,this.commission=t.commission,this.rootSlot=t.rootSlot,this.votes=t.votes,this.authorizedVoters=t.authorizedVoters,this.priorVoters=t.priorVoters,this.epochCredits=t.epochCredits,this.lastTimestamp=t.lastTimestamp}static fromAccountData(t){const n=yd.decode(ce(t),4);let s=n.rootSlot;return n.rootSlotValid||(s=null),new h0({nodePubkey:new $(n.nodePubkey),authorizedWithdrawer:new $(n.authorizedWithdrawer),commission:n.commission,votes:n.votes,rootSlot:s,authorizedVoters:n.authorizedVoters.map(ow),priorVoters:aw(n.priorVoters),epochCredits:n.epochCredits,lastTimestamp:n.lastTimestamp})}},Sa={http:{devnet:"http://api.devnet.solana.com",testnet:"http://api.testnet.solana.com","mainnet-beta":"http://api.mainnet-beta.solana.com/"},https:{devnet:"https://api.devnet.solana.com",testnet:"https://api.testnet.solana.com","mainnet-beta":"https://api.mainnet-beta.solana.com/"}},i0=1e9}});lw();const dw=e=>{try{const t=new $(e);return!0}catch{return!1}};var fw=class{constructor(e,t,r,n,s){if(this.isNative=!1,this.isToken=!0,this.buyFeeBps=void 0,this.sellFeeBps=void 0,!dw(t))throw new Error(`Invalid SPL token address: ${t}`);this.chainId=e,this.address=t,this.decimals=r,this.symbol=n,this.name=s}equals(e){return!e.isNative&&e.address===this.address&&e.chainId===this.chainId}sortsBefore(e){return Eu(this.chainId===e.chainId,"CHAIN_IDS"),Eu(this.address!==e.address,"ADDRESSES"),this.address<e.address}get wrapped(){return this}};const Ed="https://wandering-stylish-forest.solana-mainnet.quiknode.pro/d6166fc738c9c06adee384fff922a7929ccb7222",hw=nt({stables:{USDC:new fw(D.Solana,"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",6,"USDC","USD Coin")}}),p0={id:D.Solana,platform:He.SVM,assetRepoNetworkName:"solana",blockPerMainnetEpochForChainId:1,urlParam:"solana",name:"Solana",tokens:hw,blockWaitMsBeforeWarning:void 0,bridge:void 0,docs:"https://docs.solana.com",elementName:rt.ChainSolana,supportsV4:!1,explorer:{name:"Solana Explorer",url:"https://solscan.io/",apiURL:"https://api.explorer.solana.com"},interfaceName:"solana",label:"Solana",logo:dc,nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112",explorerLink:"https://explorer.solana.com",logo:dc},wrappedNativeCurrency:{name:"Wrapped SOL",symbol:"wSOL",decimals:9,address:"So11111111111111111111111111111111111111112"},networkLayer:Qe.L1,pendingTransactionsRetryOptions:void 0,rpcUrls:{[Z.Default]:{http:[Ed]},[Z.Interface]:{http:[Ed]}},backendChain:{chain:pe.Solana,backendSupported:!0,nativeTokenBackendAddress:void 0},testnet:!1,statusPage:"https://status.solana.com/",tradingApiPollingIntervalMs:250};function Ur(e){return gw[e]}const rc=[Ih,Rh,p0,Bh,wh,Ch,Ah,Sh,kh,vh,_h,xh,Dh,Lh,Nh,Th,Oh,Ph];function pw(){const e=[];for(const t of rc)t.platform===He.EVM&&e.push(t);return e}const nc=rc.map(e=>e.id),sc=Xf(pw()),OA=sc.map(e=>e.id),gw={[D.Mainnet]:Ih,[D.Unichain]:Rh,[D.Polygon]:Bh,[D.ArbitrumOne]:wh,[D.Optimism]:Ch,[D.Base]:Ah,[D.Bnb]:Sh,[D.Blast]:kh,[D.Avalanche]:vh,[D.Celo]:_h,[D.WorldChain]:xh,[D.Soneium]:Dh,[D.Zora]:Lh,[D.Zksync]:Nh,[D.MonadTestnet]:Ph,[D.Sepolia]:Th,[D.UnichainSepolia]:Oh,[D.Solana]:p0},xA=sc.filter(e=>!e.testnet).map(e=>e.backendChain.chain),NA=sc.filter(e=>e.testnet).map(e=>e.backendChain.chain);let wd=(function(e){return e[e.Slow=5*oi]="Slow",e[e.Normal=oi]="Normal",e[e.KindaFast=30*xi]="KindaFast",e[e.Fast=15*xi]="Fast",e[e.LightningMcQueen=6*xi]="LightningMcQueen",e})({});const LA=1e4,FA="0x0000000000000000000000000000000000000000";function MA(e){return!e||!nc.map(t=>t.toString()).includes(e.toString())?null:parseInt(e.toString(),10)}function UA(e){return Ur(e).label}function mw(e){return!!Ur(e).testnet}function bw(e){return Ur(e).backendChain.backendSupported}function VA(e){const t=Ew(e);return t?bw(t):!1}function zA(e){return e!==void 0&&Ur(e).networkLayer===Qe.L2}function yw(e){return e===D.Mainnet||e===D.Sepolia}function WA(e){return Ur(e).backendChain.chain}function Ew(e){switch(e){case pe.Ethereum:return D.Mainnet;case pe.Arbitrum:return D.ArbitrumOne;case pe.Avalanche:return D.Avalanche;case pe.Base:return D.Base;case pe.Bnb:return D.Bnb;case pe.Blast:return D.Blast;case pe.Celo:return D.Celo;case pe.MonadTestnet:return D.MonadTestnet;case pe.Optimism:return D.Optimism;case pe.Polygon:return D.Polygon;case pe.EthereumSepolia:return D.Sepolia;case pe.Unichain:return D.Unichain;case pe.Solana:return D.Solana;case pe.Soneium:return D.Soneium;case pe.AstrochainSepolia:return D.UnichainSepolia;case pe.Worldchain:return D.WorldChain;case pe.Zksync:return D.Zksync;case pe.Zora:return D.Zora}return null}function qA(e){return yw(e)?wd.Fast:wd.LightningMcQueen}function HA(e){return nc.filter(t=>e[t]??!0)}function KA({platform:e,includeTestnets:t=!1,isTestnetModeEnabled:r,featureFlaggedChainIds:n,connectedWalletChainIds:s}){const i=rc.filter(u=>!(e!==void 0&&e!==u.platform||!t&&r!==mw(u.id)||!n.includes(u.id)||s&&!s.includes(u.id))),o=i.map(u=>u.id),a=i.map(u=>u.backendChain.chain);return{chains:o,gqlChains:a,defaultChainId:ww({platform:e,isTestnetModeEnabled:r}),isTestnetModeEnabled:r}}function ww({platform:e,isTestnetModeEnabled:t}){return e===He.SVM?D.Solana:t?D.Sepolia:D.Mainnet}function GA(e){return Ur(e).tokens.stablecoins}function jA(e){return Ur(e).tokens.stablecoins[0]}function $A(e){return!!e&&nc.includes(e)}export{nc as ALL_CHAIN_IDS,OA as ALL_EVM_CHAIN_IDS,wh as ARBITRUM_CHAIN_INFO,uf as ARGENT_WALLET_DETECTOR_ADDRESS,vh as AVALANCHE_CHAIN_INFO,iu as ApolloError,$w as AutoCleanedStrongCache,cm as AutoCleanedWeakCache,Ah as BASE_CHAIN_INFO,LA as BIPS_BASE,kh as BLAST_CHAIN_INFO,Sh as BNB_CHAIN_INFO,_h as CELO_CHAIN_INFO,Wt as CHAIN_TO_ADDRESSES_MAP,pe as Chain,x as ChainId,Yp as Connection,nv as Currency,sn as CurrencyAmount,Zf as DEFAULT_MS_BEFORE_WARNING,CA as DEFAULT_NATIVE_ADDRESS,mt as DEFAULT_NATIVE_ADDRESS_LEGACY,$o as Ether,kr as Fraction,xA as GQL_MAINNET_CHAINS,NA as GQL_TESTNET_CHAINS,sv as HistoryDuration,oe as Kind,Ih as MAINNET_CHAIN_INFO,cf as MERKLE_DISTRIBUTOR_ADDRESS,Ph as MONAD_CHAIN_INFO,rf as MULTICALL_ADDRESSES,Ko as MaxUint256,df as NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,Go as NativeCurrency,Cr as NetworkStatus,iv as NftStandard,Ch as OPTIMISM_CHAIN_INFO,sc as ORDERED_EVM_CHAINS,Bh as POLYGON_CHAIN_INFO,bm as PROTOCOL_ERRORS_SYMBOL,vi as Percent,He as Platform,wd as PollingInterval,ov as PoolTransactionType,Qf as PortfolioBalancesDocument,bf as Price,av as PriceSource,cv as ProtectionAttackType,uv as ProtectionResult,lv as ProtocolVersion,$ as PublicKey,_g as QueryDocumentKeys,Z as RPCType,kt as Rounding,Th as SEPOLIA_CHAIN_INFO,Gr as SIGNATURE_LENGTH_IN_BYTES,hf as SOCKS_CONTROLLER_ADDRESSES,p0 as SOLANA_CHAIN_INFO,Dh as SONEIUM_CHAIN_INFO,dv as SafetyLevel,fw as SolanaToken,tu as StrongCache,fv as SwapOrderStatus,hv as SwapOrderType,me as Token,Hm as TokenBalancePartsFragmentDoc,cb as TokenDocument,pv as TokenSortableField,gv as TokenStandard,Ho as TradeType,Ae as Transaction,mv as TransactionDirection,bv as TransactionStatus,yv as TransactionType,Rh as UNICHAIN_CHAIN_INFO,Oh as UNICHAIN_SEPOLIA_CHAIN_INFO,gw as UNIVERSE_CHAIN_INFO,$d as UNI_ADDRESSES,D as UniverseChainId,Zd as V2_FACTORY_ADDRESSES,Xd as V2_ROUTER_ADDRESSES,ef as V3_CORE_FACTORY_ADDRESSES,tf as V3_MIGRATOR_ADDRESSES,Xs as VersionedMessage,Op as VersionedTransaction,jo as WETH9,xh as WORLD_CHAIN_INFO,ru as WeakCache,FA as ZERO_ADDRESS,Nh as ZKSYNC_CHAIN_INFO,Lh as ZORA_CHAIN_INFO,oh as blobsToCommitments,ah as blobsToProofs,DA as bubbleToTop,Mf as cacheSizes,jw as canUseAsyncIteratorSymbol,Lf as canUseSymbol,Jg as canUseWeakMap,Gw as canUseWeakSet,ny as commitmentsToVersionedHashes,sa as compact,lg as computePriceImpact,dg as computeZksyncCreate2Address,Ji as devAssert,Vs as equal,HA as filterChainIdsByFeatureFlag,Qb as formatBlock,th as formatLog,Ii as formatTransaction,Jb as formatTransactionReceipt,Ew as fromGraphQLChain,Zw as getApolloCacheMemoryInternals,Yw as getApolloClientMemoryInternals,Hf as getApolloContext,Ur as getChainInfo,UA as getChainLabel,KA as getEnabledChains,Qw as getInMemoryCacheMemoryInternals,Xf as getNonEmptyArrayOrThrow,qA as getPollingIntervalByBlocktime,jA as getPrimaryStablecoin,GA as getStablecoinsForChain,hy as getTransactionType,Xw as graphQLResultHasProtocolErrors,QE as index_browser_esm_exports,lw as init_index_browser_esm,X0 as init_jsbi,br as init_sdk_core_esm,Wg as inspect,Eu as invariant,$t as invariant$1,dw as is32ByteBase58String,ev as isApolloError,Jw as isArray,VA as isBackendSupportedChain,bw as isBackendSupportedChainId,zA as isL2ChainId,yw as isMainnetChainId,rv as isNetworkRequestInFlight,Hw as isNode,nu as isNonEmptyArray,ea as isNonNullObject,mw as isTestnetChain,$A as isUniverseChainId,te as jsbi_default,J0 as jsbi_exports,tv as lib_default,mg as makeUniqueId,Xt as maybe,su as maybeDeepFreeze,ia as mergeOptions,Ww as newInvariantError,RA as pipe,Kw as printBlockString,lm as registerGlobalCache,Xn as require_rehackt,og as sdk_core_esm_exports,fg as sortedInsert,hg as sqrt,bg as stringifyForDisplay,cy as toBlobSidecars,WA as toGraphQLChain,nr as toRlp,MA as toSupportedChainId,BA as unique,Yv as useActivityWebLazyQuery,Zv as useAllV3TicksQuery,Jv as useAllV4TicksQuery,Na as useApolloClient,sA as useCollectionSearchQuery,Kv as useConvertQuery,Xv as useFeeTierDistributionQuery,nA as useIsV3SubgraphStaleQuery,iA as useNftBalanceQuery,cA as usePoolPriceHistoryQuery,uA as usePoolVolumeHistoryQuery,Bv as usePortfolioBalancesLazyQuery,Cv as usePortfolioBalancesQuery,Gv as useRecentTokenTransfersQuery,Sv as useSearchPopularNftCollectionsQuery,EA as useTokenHistoricalTvlsQuery,yA as useTokenHistoricalVolumesQuery,bA as useTokenPriceQuery,Fv as useTokenProjectsQuery,eA as useTokenPromoQuery,xv as useTokenQuery,jv as useTokenSpotPriceQuery,gA as useTokenWebQuery,Hv as useTokensQuery,Vv as useTopTokensQuery,_A as useTopV2PairsQuery,SA as useTopV3PoolsQuery,kA as useTopV4PoolsQuery,$v as useUniswapPricesQuery,lA as useV2PairQuery,hA as useV2PairTransactionsQuery,AA as useV2TokenTransactionsQuery,PA as useV2TransactionsQuery,oA as useV3PoolQuery,fA as useV3PoolTransactionsQuery,vA as useV3TokenTransactionsQuery,TA as useV3TransactionsQuery,aA as useV4PoolQuery,dA as useV4PoolTransactionsQuery,wA as useV4TokenTransactionsQuery,IA as useV4TransactionsQuery,Gd as validateAndParseAddress,Sf as version};
