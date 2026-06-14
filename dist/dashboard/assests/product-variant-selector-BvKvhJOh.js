import{r,cE as u,at as l,j as s,P as m,J as p,B as x,aD as h,M as f,de as j,df as g,dg as A,dh as N,dQ as V,di as C,dK as y,aw as P,dR as b,av as k}from"./index-_DOZWMCq.js";const S=P(`
        query ProductVariantList($options: ProductVariantListOptions) {
            productVariants(options: $options) {
                items {
                    id
                    name
                    sku
                    featuredAsset {
                        ...Asset
                    }
                    price
                    priceWithTax
                    product {
                        featuredAsset {
                            ...Asset
                        }
                    }
                }
                totalItems
            }
        }
    `,[b]);function I({onProductVariantSelect:d}){const[n,c]=r.useState(""),[i,o]=r.useState(!1),t=u(n,500),{data:a}=l({queryKey:["productVariants",t],staleTime:1e3*60*5,enabled:t.length>0,queryFn:()=>k.query(S,{options:{take:10,filter:{name:{contains:t},sku:{contains:t}},filterOperator:"OR"}})});return s.jsxs(m,{open:i,onOpenChange:o,children:[s.jsx(p,{asChild:!0,children:s.jsxs(x,{variant:"outline",role:"combobox",className:"w-full",children:["Add item to order",s.jsx(h,{className:"opacity-50"})]})}),s.jsx(f,{className:"p-0",children:s.jsxs(j,{shouldFilter:!1,children:[s.jsx(g,{placeholder:"Add item to order...",className:"h-9",onValueChange:e=>c(e)}),s.jsxs(A,{children:[s.jsx(N,{children:"No products found."}),s.jsx(V,{children:a==null?void 0:a.productVariants.items.map(e=>s.jsxs(C,{value:e.id,onSelect:()=>{d({productVariantId:e.id,productVariantName:e.name,sku:e.sku,productAsset:e.featuredAsset??e.product.featuredAsset??null,price:e.price,priceWithTax:e.priceWithTax}),o(!1)},className:"flex items-center gap-2 p-2",children:[e.featuredAsset&&s.jsx(y,{asset:e.featuredAsset,preset:"tiny",className:"size-8 rounded-md object-cover"}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("span",{className:"text-sm font-medium",children:e.name}),s.jsx("span",{className:"text-xs text-muted-foreground",children:e.sku})]})]},e.id))})]})]})})]})}export{I as P};
