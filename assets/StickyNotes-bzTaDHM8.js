import{j as o,i as s,T as u}from"./index-BbXaoYFA.js";import{p as r,g as x,e as d}from"./NoteDocument-HOZG5EJ3.js";const f=r.div`
  flex-direction: row;
  display: flex;
  margin-block: 1em;

  position: relative;

  justify-content: flex-start;
  align-items: stretch;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  // Simulate the shadow of the folded corner
  border-radius: 0 0 1.9em 0;
`,h=r.div`
  background-color: ${e=>e.color};

  width: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`,g=r.div`
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
`;function i({content:e,environmentName:t,environmentColor:l,environmentIcon:v,id:n}){return n=n||x(t),o.jsxs(f,{children:[o.jsx(h,{color:l,children:v}),o.jsx(g,{color:l,$environmentName:t,id:n,children:o.jsx("span",{children:e})})]})}var a={},b=s;Object.defineProperty(a,"__esModule",{value:!0});var m=a.default=void 0,j=b(d()),$=o;m=a.default=(0,j.default)((0,$.jsx)("path",{d:"M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7m2 16h-4v-1h4zm0-2h-4v-1h4zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71z"}),"EmojiObjects");var c={},y=s;Object.defineProperty(c,"__esModule",{value:!0});var p=c.default=void 0,I=y(d()),_=o;p=c.default=(0,I.default)((0,_.jsx)("path",{d:"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"}),"Functions");const N=()=>o.jsx(m,{fontSize:"large"});function C({children:e,id:t}){return o.jsx(i,{content:e,environmentName:"Tip.",environmentColor:"var(--tip-color)",environmentIcon:o.jsx(N,{}),id:t})}const w=()=>o.jsx(u,{fontWeight:1e3,style:{fontSize:"2.5em",lineHeight:"1"},children:"!"});function R({children:e,id:t}){return o.jsx(i,{content:e,environmentName:"¡Ojo!",environmentColor:"var(--warning-color)",environmentIcon:o.jsx(w,{}),id:t})}const k=()=>o.jsx(p,{fontSize:"large"});function T({children:e,id:t}){return o.jsx(i,{content:e,environmentName:"Notación.",environmentColor:"var(--notation-color)",environmentIcon:o.jsx(k,{}),id:t})}export{T as N,C as T,R as W};
