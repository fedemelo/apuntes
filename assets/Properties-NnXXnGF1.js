import{j as e,r as h,T as c}from"./index-B0YWkx9m.js";import{p as l}from"./Section-CuSZUk_d.js";import{g as x}from"./NoteDocument-DA-1Ldmw.js";import{G as s}from"./Grid-BxG9lCeA.js";function d(r,t=!1){const i={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let a="";for(let n in i)for(;r>=i[n];)a+=n,r-=i[n];return t?a.toLowerCase():a}const u=l.div`
  margin: 1em 0;
`,g=l.span`
  display: inline-block;
  min-width: 1.5em;
  text-align: right;
  margin-right: 0.5em;
`,p=l.div`
  display: flex;
  align-items: center;
  height: 100%;
`,j=l(c)`
  padding-left: calc(1.5em + 0.5em);
`;function N({title:r,description:t,properties:i,initialCountValue:a=1,id:n}){return n=n||x(r),e.jsxs(u,{id:n,children:[r&&e.jsx("h4",{children:r}),t&&(typeof t=="string"?e.jsx("p",{children:t}):t),e.jsx(s,{container:!0,spacing:1,p:"0 0 0 1em",children:i.map((o,m)=>e.jsxs(h.Fragment,{children:[e.jsx(s,{item:!0,xs:5,container:!0,alignItems:"center",paddingInlineEnd:3,children:e.jsxs(p,{children:[e.jsx(g,{children:d(a+m,!0)+". "}),o.name]})}),e.jsx(s,{item:!0,xs:7,container:!0,alignItems:"center",children:e.jsx(c,{children:o.formula})}),o.note&&e.jsx(s,{item:!0,xs:12,children:e.jsx(j,{color:"textSecondary",children:o.note})})]},m))})]})}export{N as P};
