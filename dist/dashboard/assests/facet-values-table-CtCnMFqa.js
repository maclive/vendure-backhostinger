import{j as t,d$ as y,r as l,H as P,d2 as k,e0 as S,b6 as T,aw as A,B,V as L,aD as $,T as q}from"./index-_DOZWMCq.js";import{D as v}from"./delete-bulk-action-BiKIz6D1.js";const O=({selection:i,table:n})=>t.jsx(v,{mutationDocument:y,entityName:"facets",requiredPermissions:["DeleteCatalog","DeleteFacet"],selection:i,table:n}),c="facet-values-table",z=A(`
    query FacetValueList($options: FacetValueListOptions) {
        facetValues(options: $options) {
            items {
                id
                createdAt
                updatedAt
                name
                code
                customFields
            }
            totalItems
        }
    }
`);function I({facetId:i,registerRefresher:n}){var d;const[p,f]=l.useState([]),[r,V]=l.useState(1),[u,F]=l.useState(10),{setTableSettings:m,settings:b}=P(),x=l.useRef(()=>{}),s=(d=b.tableSettings)==null?void 0:d[c],h={name:!0,code:!0},j=(s==null?void 0:s.columnVisibility)??h,C=(s==null?void 0:s.columnOrder)??[],D=s==null?void 0:s.columnFilters;return t.jsxs(t.Fragment,{children:[t.jsx(k,{listQuery:S(z),page:r,itemsPerPage:u,sorting:p,columnFilters:D,defaultColumnOrder:C,defaultVisibility:j,onPageChange:(e,a,o)=>{F(o),V(a)},onSortChange:(e,a)=>{f(a)},onFilterChange:(e,a)=>{m(c,"columnFilters",a)},onColumnVisibilityChange:(e,a)=>{m(c,"columnVisibility",a)},registerRefresher:e=>{x.current=e,n==null||n(e)},transformVariables:e=>{var o,g;return{options:{filter:{...((o=e.options)==null?void 0:o.filter)??{},facetId:{eq:i}},sort:(g=e.options)==null?void 0:g.sort,take:u,skip:(r-1)*u}}},onSearchTermChange:e=>({name:{contains:e}}),customizeColumns:{name:{header:"Name",cell:({row:e})=>t.jsx(T,{id:e.original.id,label:e.original.name,href:`/facets/${i}/values/${e.original.id}`})}},bulkActions:[{order:400,component:O}]}),t.jsx("div",{className:"mt-4",children:t.jsx(B,{asChild:!0,variant:"outline",children:t.jsxs(L,{to:"./values/new",children:[t.jsx($,{}),t.jsx(q,{id:"GZg2Zw"})]})})})]})}export{I as F};
