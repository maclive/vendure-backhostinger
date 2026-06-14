import{r as n,j as a,d2 as p,e0 as C,B as h,V as S,aw as x}from"./index-_DOZWMCq.js";const P=x(`
    query CollectionContentsList($collectionId: ID!, $options: ProductVariantListOptions) {
        collection(id: $collectionId) {
            id
            productVariants(options: $options) {
                items {
                    id
                    createdAt
                    updatedAt
                    name
                    sku
                }
                totalItems
            }
        }
    }
`);function V({collectionId:s}){const[o,i]=n.useState([]),[r,l]=n.useState(1),[c,u]=n.useState(10),[d,m]=n.useState([]);return a.jsx(p,{listQuery:C(P),transformVariables:t=>({...t,collectionId:s}),customizeColumns:{name:{header:"Variant name",cell:({row:t})=>a.jsx(h,{asChild:!0,variant:"ghost",children:a.jsxs(S,{to:`../../product-variants/${t.original.id}`,children:[t.original.name," "]})})}},page:r,itemsPerPage:c,sorting:o,columnFilters:d,onPageChange:(t,e,g)=>{l(e),u(g)},onSortChange:(t,e)=>{i(e)},onFilterChange:(t,e)=>{m(e)},onSearchTermChange:t=>({name:{contains:t}})})}export{V as C};
