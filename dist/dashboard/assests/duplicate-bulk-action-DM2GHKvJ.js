import{aw as w,cR as F,r as j,at as P,cS as R,j as e,ac as S,$ as T,a0 as _,a1 as B,T as f,a8 as V,B as C,av as L,bZ as M,u as O,au as U,cT as Y,t as v}from"./index-_DOZWMCq.js";import{D as G}from"./data-table-bulk-action-item-C8vz_J_W.js";import{C as H}from"./configurable-operation-input-CWYkf6RH.js";const K=w(`
    mutation DuplicateEntity($input: DuplicateEntityInput!) {
        duplicateEntity(input: $input) {
            ... on DuplicateEntitySuccess {
                newEntityId
            }
            ... on ErrorResult {
                errorCode
                message
            }
            ... on DuplicateEntityError {
                duplicationError
            }
        }
    }
`),N=w(`
        query GetEntityDuplicators {
            entityDuplicators {
                code
                description
                requiresPermission
                forEntities
                args {
                    ...ConfigArgDefinition
                }
            }
        }
    `,[F]);function Q({open:x,onOpenChange:m,entityType:$,entityName:n,duplicatorCode:l,onConfirm:o}){var u;const[s,c]=j.useState(),{data:g}=P({queryKey:["entityDuplicators"],queryFn:()=>L.query(N),staleTime:1e3*60*60*5}),a=(u=g==null?void 0:g.entityDuplicators)==null?void 0:u.find(i=>i.code===l&&i.forEntities.includes($));R.useEffect(()=>{var i;a&&!s&&c({code:a.code,arguments:((i=a.args)==null?void 0:i.map(d=>({name:d.name,value:d.defaultValue!=null?d.defaultValue.toString():""})))||[]})},[a,s]);const D=i=>{c(i)},y=()=>{s&&(o(s),m(!1),c(void 0))},E=()=>{m(!1),c(void 0)};return e.jsx(S,{open:x,onOpenChange:m,children:e.jsxs(T,{className:"sm:max-w-lg",children:[e.jsx(_,{children:e.jsx(B,{children:e.jsx(f,{id:"Lns7sP",values:{0:n.toLowerCase()}})})}),e.jsxs("div",{className:"space-y-4",children:[s&&a&&e.jsx(H,{operationDefinition:a,value:s,onChange:D,removable:!1}),!a&&e.jsx("div",{className:"text-sm text-muted-foreground",children:e.jsx(f,{id:"B6LoY7",values:{duplicatorCode:l,entityName:n}})})]}),e.jsxs(V,{children:[e.jsx(C,{variant:"outline",onClick:E,children:e.jsx(f,{id:"dEgA5A"})}),e.jsx(C,{onClick:y,disabled:!s,children:e.jsx(f,{id:"euc6Ns"})})]})]})})}function W({entityType:x,duplicatorCode:m,requiredPermissions:$,entityName:n,onSuccess:l,selection:o,table:s}){const{refetchPaginatedList:c}=M(),{i18n:g,_:a}=O(),[D,y]=j.useState(!1),[E,u]=j.useState({completed:0,total:0}),[i,d]=j.useState(!1),{mutateAsync:k}=U({mutationFn:L.mutate(K)}),q=()=>{D||d(!0)},A=async I=>{if(D)return;y(!0),u({completed:0,total:o.length});const t={success:0,failed:0,errors:[]};try{for(let r=0;r<o.length;r++){const h=o[r];try{const p=await k({input:{entityName:x,entityId:h.id,duplicatorInput:I}});if("newEntityId"in p.duplicateEntity)t.success++;else{t.failed++;const b=p.duplicateEntity.message||p.duplicateEntity.duplicationError||"Unknown error";t.errors.push(`${n} ${h.name||h.id}: ${b}`)}}catch(p){t.failed++,t.errors.push(`${n} ${h.name||h.id}: ${p instanceof Error?p.message:"Unknown error"}`)}u({completed:r+1,total:o.length})}if(t.success>0){const r=t.success;v.success(g._({id:"YRTdLc",values:{count:r,entityName:n}}))}if(t.failed>0){const r=t.errors.length>3?`${t.errors.slice(0,3).join(", ")}... and ${t.errors.length-3} more`:t.errors.join(", ");v.error(`Failed to duplicate ${t.failed} ${n.toLowerCase()}s: ${r}`)}t.success>0&&(c(),s.resetRowSelection(),l==null||l())}finally{y(!1),u({completed:0,total:0})}};return e.jsxs(e.Fragment,{children:[e.jsx(G,{requiresPermission:$,onClick:q,label:D?e.jsx(f,{id:"+lpe0V",values:{0:E.completed,1:E.total}}):e.jsx(f,{id:"euc6Ns"}),icon:Y}),e.jsx(Q,{open:i,onOpenChange:d,entityType:x,entityName:n,entities:o,duplicatorCode:m,onConfirm:A})]})}export{W as D};
