const r=(o,n,f)=>JSON.stringify(o,(g,t)=>{const i=typeof t=="bigint"?t.toString():t;return typeof n=="function"?n(g,i):i},f);export{r as stringify};
