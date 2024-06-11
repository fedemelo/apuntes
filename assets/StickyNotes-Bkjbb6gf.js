import{r as a,R as F,g as P,a as V,s as q,p as g,u as A,b as B,_ as b,j as i,h as D,i as O,C as U,q as W,t as L,v as H,w as G,x as J,y as K,z as Q,f as X,D as Y,E as Z,o as R,F as ee}from"./index-mXcu4bfa.js";import{p as S,g as oe}from"./NoteDocument-Be55-Fwi.js";function te(e,o){return()=>null}function ne(e,o){var t,n;return a.isValidElement(e)&&o.indexOf((t=e.type.muiName)!=null?t:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function re(e,o){return()=>null}let N=0;function ie(e){const[o,t]=a.useState(e),n=e||o;return a.useEffect(()=>{o==null&&(N+=1,t(`mui-${N}`))},[o]),n}const z=F.useId;function ae(e){if(z!==void 0){const o=z();return e??o}return ie(e)}function le(e,o,t,n,r){return null}function se({controlled:e,default:o,name:t,state:n="value"}){const{current:r}=a.useRef(e!==void 0),[c,m]=a.useState(o),l=r?e:c,f=a.useCallback(u=>{r||m(u)},[]);return[l,f]}function ce(e){return P("MuiSvgIcon",e)}V("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const ue=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],de=e=>{const{color:o,fontSize:t,classes:n}=e,r={root:["root",o!=="inherit"&&`color${g(o)}`,`fontSize${g(t)}`]};return O(r,ce,n)},pe=q("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.color!=="inherit"&&o[`color${g(t.color)}`],o[`fontSize${g(t.fontSize)}`]]}})(({theme:e,ownerState:o})=>{var t,n,r,c,m,l,f,u,h,d,p,v,s;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:o.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=e.transitions)==null||(n=t.create)==null?void 0:n.call(t,"fill",{duration:(r=e.transitions)==null||(r=r.duration)==null?void 0:r.shorter}),fontSize:{inherit:"inherit",small:((c=e.typography)==null||(m=c.pxToRem)==null?void 0:m.call(c,20))||"1.25rem",medium:((l=e.typography)==null||(f=l.pxToRem)==null?void 0:f.call(l,24))||"1.5rem",large:((u=e.typography)==null||(h=u.pxToRem)==null?void 0:h.call(u,35))||"2.1875rem"}[o.fontSize],color:(d=(p=(e.vars||e).palette)==null||(p=p[o.color])==null?void 0:p.main)!=null?d:{action:(v=(e.vars||e).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(s=(e.vars||e).palette)==null||(s=s.action)==null?void 0:s.disabled,inherit:void 0}[o.color]}}),y=a.forwardRef(function(o,t){const n=A({props:o,name:"MuiSvgIcon"}),{children:r,className:c,color:m="inherit",component:l="svg",fontSize:f="medium",htmlColor:u,inheritViewBox:h=!1,titleAccess:d,viewBox:p="0 0 24 24"}=n,v=B(n,ue),s=a.isValidElement(r)&&r.type==="svg",j=b({},n,{color:m,component:l,fontSize:f,instanceFontSize:o.fontSize,inheritViewBox:h,viewBox:p,hasSvgAsChild:s}),C={};h||(C.viewBox=p);const T=de(j);return i.jsxs(pe,b({as:l,className:D(T.root,c),focusable:"false",color:u,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:t},C,v,s&&r.props,{ownerState:j,children:[s?r.props.children:r,d?i.jsx("title",{children:d}):null]}))});y.muiName="SvgIcon";function me(e,o){function t(n,r){return i.jsx(y,b({"data-testid":`${o}Icon`,ref:r},n,{children:e}))}return t.muiName=y.muiName,a.memo(a.forwardRef(t))}const fe={configure:e=>{U.configure(e)}},ve=Object.freeze(Object.defineProperty({__proto__:null,capitalize:g,createChainedFunction:W,createSvgIcon:me,debounce:L,deprecatedPropType:te,isMuiElement:ne,ownerDocument:H,ownerWindow:G,requirePropFactory:re,setRef:J,unstable_ClassNameGenerator:fe,unstable_useEnhancedEffect:K,unstable_useId:ae,unsupportedProp:le,useControlled:se,useEventCallback:Q,useForkRef:X,useIsFocusVisible:Y},Symbol.toStringTag,{value:"Module"})),he=S.div`
  flex-direction: row;
  display: flex;
  margin-block: 1em;

  position: relative;

  justify-content: flex-start;
  align-items: stretch;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  // Simulate the shadow of the folded corner
  border-radius: 0 0 1.9em 0;
`,ge=S.div`
  background-color: ${e=>e.color};

  width: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`,xe=S.div`
  position: relative;

  padding-right: 1.2em;
  padding-left: 1em;
  padding-block: 0.5em;

  background-color: white;

  border-top: 2px solid ${e=>e.color};
  border-right: 2px solid ${e=>e.color};
  border-bottom: 2px solid ${e=>e.color};
  border-left: none;

  width: 100%;
  margin: 0;

  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 1em),
    calc(100% - 1em) 100%,
    0 100%
  );


  & > span::before {
    content: "${e=>e.$environmentName} ";
    color: ${e=>e.color};
    font-weight: bold;
  }

  // Folded corner
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    right: -2px;
    border-top: 1em solid ${e=>e.color};
    border-right: 1em solid transparent;
  }

  // Hide the box corner, to make the folded corner look like a folded corner
  &::before {
    content: "";
    position: absolute;
    bottom: -4px;
    right: -4px; 
    border-top: 2em solid transparent;
  }
`;function _({content:e,environmentName:o,environmentColor:t,environmentIcon:n,id:r}){return r=r||oe(o),i.jsxs(he,{children:[i.jsx(ge,{color:t,children:n}),i.jsx(xe,{color:t,$environmentName:o,id:r,children:i.jsx("span",{children:e})})]})}var I={},x={};const be=Z(ve);var w;function E(){return w||(w=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=be}(x)),x}var ye=R;Object.defineProperty(I,"__esModule",{value:!0});var k=I.default=void 0,Se=ye(E()),_e=i;k=I.default=(0,Se.default)((0,_e.jsx)("path",{d:"M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7m2 16h-4v-1h4zm0-2h-4v-1h4zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71z"}),"EmojiObjects");var $={},Ie=R;Object.defineProperty($,"__esModule",{value:!0});var M=$.default=void 0,$e=Ie(E()),je=i;M=$.default=(0,$e.default)((0,je.jsx)("path",{d:"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"}),"Functions");const Ce=()=>i.jsx(k,{fontSize:"large"});function Ee({children:e,id:o}){return i.jsx(_,{content:e,environmentName:"Tip.",environmentColor:"var(--tip-color)",environmentIcon:i.jsx(Ce,{}),id:o})}const Ne=()=>i.jsx(ee,{fontWeight:1e3,style:{fontSize:"2.5em",lineHeight:"1"},children:"!"});function ke({children:e,id:o}){return i.jsx(_,{content:e,environmentName:"¡Ojo!",environmentColor:"var(--warning-color)",environmentIcon:i.jsx(Ne,{}),id:o})}const ze=()=>i.jsx(M,{fontSize:"large"});function Me({children:e,id:o}){return i.jsx(_,{content:e,environmentName:"Notación.",environmentColor:"var(--notation-color)",environmentIcon:i.jsx(ze,{}),id:o})}export{Me as N,Ee as T,ke as W,E as r,se as u};
