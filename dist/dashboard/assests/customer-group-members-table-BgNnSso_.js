import{r as a,u as _,as as b,au as y,av as $,t as o,e1 as j,aw as A,e2 as N,j as t,d2 as L,e0 as P,B as T,V as v,T as D}from"./index-_DOZWMCq.js";import{C as F}from"./customer-selector-prM7vs0j.js";const n=A(`
    query CustomerGroupMemberList($id: ID!, $options: CustomerListOptions) {
        customerGroup(id: $id) {
            customers(options: $options) {
                items {
                    id
                    createdAt
                    updatedAt
                    firstName
                    lastName
                    emailAddress
                }
                totalItems
            }
        }
    }
`);function I({customerGroupId:i,canAddCustomers:u=!0}){const[l,d]=a.useState([]),[m,c]=a.useState(1),[p,g]=a.useState(10),[C,f]=a.useState([]),{i18n:r,_:G}=_(),S=b(),{mutate:h}=y({mutationFn:$.mutate(N),onSuccess:()=>{o.success(r._({id:"y3tQ/s"})),S.invalidateQueries({queryKey:[j,n]})},onError:()=>{o.error(r._({id:"ZlA28n"}))}});return t.jsxs("div",{children:[t.jsx(L,{listQuery:P(n),transformVariables:e=>({...e,id:i}),page:m,itemsPerPage:p,sorting:l,columnFilters:C,onPageChange:(e,s,x)=>{c(s),g(x)},onSortChange:(e,s)=>{d(s)},onFilterChange:(e,s)=>{f(s)},onSearchTermChange:e=>({lastName:{contains:e},emailAddress:{contains:e}}),additionalColumns:{name:{header:"Name",cell:({row:e})=>{const s=`${e.original.firstName} ${e.original.lastName}`;return t.jsx(T,{asChild:!0,variant:"ghost",children:t.jsx(v,{to:"/customers/$id",params:{id:e.original.id},children:s})})}}},defaultColumnOrder:["name","emailAddress"],defaultVisibility:{id:!1,createdAt:!1,updatedAt:!1,firstName:!1,lastName:!1}}),u&&t.jsx(F,{onSelect:e=>{h({customerId:e.id,groupId:i})},label:t.jsx(D,{id:"IswRMs"})})]})}export{I as C};
