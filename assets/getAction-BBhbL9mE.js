function f(t,n,c){const i=t[n.name];if(typeof i=="function")return i;const o=t[c];return typeof o=="function"?o:e=>n(t,e)}export{f as getAction};
