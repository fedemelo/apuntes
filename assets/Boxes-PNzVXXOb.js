import{r as j,j as n}from"./index-Dnlt-gAj.js";import{p as h,g as u,B as f,a as v,d as C,b as g,T as c,c as b,f as A,C as N,A as $,h as l}from"./NoteDocument-7xWwwi1Y.js";const w=h($)`
  width: 100%;
  border: 2px solid ${e=>e.color};
  border-radius: 0 10px 10px 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
`;function T({content:e,title:o,environmentName:t,environmentColor:r,additionalContent:x,id:a,className:i}){a=a||u(o);const d=`${window.location.origin}${window.location.pathname}#${a}`,m="Link copiado al portapapeles",[s,p]=j.useState(!1);return n.jsxs(f,{children:[n.jsxs(w,{color:r,expanded:s,onChange:()=>{p(!s)},children:[n.jsx(v,{expandIcon:s?n.jsx(C,{sx:{color:r}}):n.jsx(g,{sx:{color:r}}),children:a?n.jsx(c,{$color:r,$environmentName:t,id:a,className:i,children:n.jsx("strong",{children:o})}):n.jsx(c,{$color:r,$environmentName:t,className:i,children:n.jsx("strong",{})})}),n.jsxs(b,{children:[e,a&&n.jsx(A,{children:n.jsx(N,{link:d,message:m,color:r})})]})]}),x]})}function k({children:e,concept:o,id:t}){return n.jsx(l,{content:e,title:o,environmentName:"Definición",environmentColor:"var(--definition-color)",additionalContent:n.jsx("div",{className:"definition-concept-side",id:t,children:n.jsx("strong",{children:o})}),id:t,className:"definition"})}function B({children:e,name:o,id:t}){return n.jsx(l,{content:e,title:o,environmentName:"Teorema",environmentColor:"var(--theorem-color)",id:t,className:"theorem"})}function D({children:e,title:o,id:t}){return n.jsx(T,{content:e,title:o,environmentName:"Ejemplo",environmentColor:"var(--example-color)",id:t,className:"example"})}export{k as D,D as E,B as T};
