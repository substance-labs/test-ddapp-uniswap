import{__toESM as i}from"./chunk-DgAfPHQg.js";import{require_jsx_runtime as n}from"./jsx-runtime-D7bMTQeG.js";import{Flex as e,Text as a,styled as t}from"./Loader-D83W8G1W.js";import{AlertTriangleFilled as s}from"./AlertTriangleFilled-C9tf2eUJ.js";var r=i(n());const l=480,h=t(e,{pt:"$spacing60",px:"$spacing8",pb:"$spacing40",width:"100%",maxWidth:l,$lg:{pt:"$spacing48"},$md:{pt:"$spacing20"}}),f=t(e,{display:"flex",borderRadius:"$rounded12",height:40,width:40,position:"relative",mt:-18,mb:-18,ml:"auto",mr:"auto",backgroundColor:"$surface2",borderWidth:"$spacing4",borderStyle:"solid",borderColor:"$surface1",zIndex:2,variants:{clickable:{true:{hoverStyle:{cursor:"pointer",opacity:.8}}}}}),c=`
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
    `,d=t(e,{display:"inline",className:"dots-animation"}),x=({children:o})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
      ${c}
      .dots-animation::after {
        display: inline-block;
        animation: ellipsis 1.25s infinite;
        content: '.';
        width: 1em;
        text-align: left;
      }`}),(0,r.jsx)(d,{children:o})]}),p=t(e,{flexDirection:"row",backgroundColor:"$statusCritical2",borderRadius:"$rounded12",alignItems:"center",mt:-32,width:"100%",zIndex:-1,pt:48,pr:20,pb:16,pl:16}),u=t(e,{backgroundColor:"$statusCritical2",alignItems:"center",justifyContent:"center",marginRight:12,borderRadius:"$rounded12",minWidth:48,height:48});function C({error:o}){return(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:(0,r.jsx)(s,{size:24,color:"$statusCritical"})}),(0,r.jsx)(a,{variant:"body4",color:"$statusCritical","$platform-web":{wordBreak:"break-word"},children:o})]})}const w=t(e,{backgroundColor:"$accent2",p:"$spacing12",borderRadius:"$rounded12"}),y=t(e,{backgroundColor:"$surface2",borderRadius:"$rounded16",height:"120px",p:"$spacing16",position:"relative",borderStyle:"solid",borderWidth:"$spacing1",borderColor:"$surface2",hoverStyle:{borderColor:"$surface2Hovered"},focusWithinStyle:{borderColor:"$surface3"}}),k=t(e,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"});export{k as ArrowContainer,f as ArrowWrapper,x as Dots,l as PAGE_WRAPPER_MAX_WIDTH,h as PageWrapper,C as SwapCallbackError,y as SwapSection,w as SwapShowAcceptChanges};
