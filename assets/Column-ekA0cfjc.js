import{styled_components_default as e}from"./styled-components-DbVO3u5J.js";const i=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({gap:t,theme:o})=>t&&o.grids[t]||t};
  ${({flex:t})=>t&&`flex: ${t};`}
`,r=e(i)`
  width: 100%;
  align-items: center;
`,l=e.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({gap:t,theme:o})=>t&&o.grids[t]||t};
  justify-items: ${({justify:t})=>t&&t};
  flex-grow: ${({grow:t})=>t&&1};
`;var d=i;export{l as AutoColumn,r as ColumnCenter,d as Column_default};
