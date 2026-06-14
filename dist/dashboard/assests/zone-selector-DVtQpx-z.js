import{at as r,j as e,ec as l,a3 as c,a4 as u,a5 as p,T as d,a6 as m,ed as x,a7 as h,aw as j,av as S}from"./index-_DOZWMCq.js";const g=j(`
    query Zones($options: ZoneListOptions) {
        zones(options: $options) {
            items {
                id
                name
            }
        }
    }
`);function q({value:a,onChange:t}){const{data:n,isLoading:o,isPending:i}=r({queryKey:["zones"],staleTime:3e5,queryFn:()=>S.query(g,{options:{take:100}})});return o||i?e.jsx(l,{className:"h-10 w-full"}):e.jsxs(c,{value:a,onValueChange:s=>s&&t(s),children:[e.jsx(u,{children:e.jsx(p,{placeholder:e.jsx(d,{id:"p3M+0h"})})}),e.jsx(m,{children:n&&e.jsx(x,{children:n==null?void 0:n.zones.items.map(s=>e.jsx(h,{value:s.id,children:s.name},s.id))})})]})}export{q as Z};
