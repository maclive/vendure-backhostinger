import{u as b,at as y,j as s,db as T,aw as P,av as v,gw as D,gx as I,gy as q,aA as C,gz as w,eM as A,q as F,D as $,E as k,G as B,gA as R,ab as E,ck as U,bR as G,gB as S,gC as H,gD as L,t as f,aW as V,aX as M,T as m,aY as W,aZ as Z,b5 as K,B as O,a_ as Q,bS as N,I as h,bU as Y}from"./index-_DOZWMCq.js";import{F as j}from"./form-field-wrapper-C05Bu4Pg.js";import{u as X}from"./use-grouped-permissions-CvOFN7fj.js";const z=P(`
    query Roles($options: RoleListOptions) {
        roles(options: $options) {
            items {
                id
                code
                description
            }
        }
    }
`);function J(u){const{value:x,onChange:l,multiple:n}=u,{i18n:p,_:o}=b(),{data:d}=y({queryKey:["roles"],queryFn:()=>v.query(z,{options:{take:100}}),select:a=>a.roles.items}),r=(d??[]).map(a=>({value:a.id,label:a.code,display:a.description?a.description:a.code}));return s.jsx(T,{value:x,onChange:l,multiple:n,items:r,placeholder:p._({id:"h4pFju"}),searchPlaceholder:p._({id:"jxxbqF"})})}const ss=P(`
    query RolesById($options: RoleListOptions) {
        roles(options: $options) {
            items {
                id
                code
                permissions
                channels {
                    id
                    code
                }
            }
        }
    }
`);function es({value:u=[]}){const{i18n:x,_:l}=b(),n=X(),{data:p}=y({queryKey:["rolesById",u],queryFn:()=>v.query(ss,{options:{filter:{id:{in:u}}}})}),o=(p==null?void 0:p.roles.items)??[],d=o.flatMap(a=>a.channels).filter((a,c,t)=>c===t.findIndex(i=>i.code===a.code)),r=(a,c)=>o.some(t=>{const i=t.permissions.includes(a),e=t.channels.length>0;return i?e?t.channels.some(g=>g.code===c):!0:!1});return d.length?s.jsxs(D,{defaultValue:d[0].code,className:"w-full mt-4",children:[s.jsx(I,{children:d.map(a=>s.jsx(q,{value:a.code,children:s.jsx(C,{code:a.code})},a.code))}),d.map(a=>s.jsx(w,{value:a.code,className:"mt-0",children:s.jsx("div",{className:"rounded-md border",children:s.jsx("table",{className:"w-full",children:s.jsx("tbody",{children:n.map((c,t)=>s.jsx("tr",{className:t!==n.length-1?"border-b":void 0,children:s.jsx("td",{className:"p-4",children:s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:c.permissions.map(i=>s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(A,{checked:r(i.name,a.code),disabled:!0}),s.jsx(F,{children:s.jsxs($,{children:[s.jsx(k,{asChild:!0,children:s.jsx("label",{className:"text-sm cursor-default",children:x.t(i.name)})}),s.jsx(B,{children:s.jsx("p",{children:x.t(i.description)})})]})})]},i.name))})})},c.label))})})})},a.code))]}):null}const _="administrator-detail";function is(){const u=R.useParams(),x=E(),l=u.id===U,{i18n:n,_:p}=b(),{form:o,submitHandler:d,entity:r,isPending:a,resetForm:c}=G({pageId:_,queryDocument:S,createDocument:H,updateDocument:L,setValuesForUpdate:e=>({id:e.id,firstName:e.firstName,lastName:e.lastName,emailAddress:e.emailAddress,password:"",customFields:e.customFields,roleIds:e.user.roles.map(g=>g.id)}),transformUpdateInput:e=>({...e,password:e.password||void 0}),params:{id:u.id},onSuccess:async e=>{f(l?n._({id:"HHcgbv"}):n._({id:"U7aanB"})),c(),l&&await x({to:"../$id",params:{id:e.id}})},onError:e=>{f(l?n._({id:"1uyZgG"}):n._({id:"O8GQXx"}),{description:e instanceof Error?e.message:"Unknown error"})}}),t=`${r==null?void 0:r.firstName} ${r==null?void 0:r.lastName}`,i=o.watch("roleIds");return s.jsxs(V,{pageId:_,form:o,submitHandler:d,entity:r,children:[s.jsx(M,{children:l?s.jsx(m,{id:"WCpfqh"}):t}),s.jsx(W,{children:s.jsx(Z,{children:s.jsx(K,{requires:["UpdateAdministrator"],children:s.jsx(O,{type:"submit",disabled:!o.formState.isDirty||!o.formState.isValid||a,children:l?s.jsx(m,{id:"hYgDIe"}):s.jsx(m,{id:"EkH9pt"})})})})}),s.jsxs(Q,{children:[s.jsx(N,{column:"main",blockId:"main-form",children:s.jsxs("div",{className:"md:grid md:grid-cols-2 gap-4",children:[s.jsx(j,{control:o.control,name:"firstName",label:s.jsx(m,{id:"V1EGGU"}),render:({field:e})=>s.jsx(h,{placeholder:"",...e})}),s.jsx(j,{control:o.control,name:"lastName",label:s.jsx(m,{id:"1ZaQUH"}),render:({field:e})=>s.jsx(h,{placeholder:"",...e})}),s.jsx(j,{control:o.control,name:"emailAddress",label:s.jsx(m,{id:"NfvVuV"}),render:({field:e})=>s.jsx(h,{placeholder:"",...e})}),s.jsx(j,{control:o.control,name:"password",label:s.jsx(m,{id:"8ZsakT"}),render:({field:e})=>s.jsx(h,{placeholder:"",type:"password",...e})})]})}),s.jsx(Y,{column:"main",entityType:"Administrator",control:o.control}),s.jsxs(N,{column:"main",blockId:"roles",title:s.jsx(m,{id:"5dJK4M"}),children:[s.jsx(j,{control:o.control,name:"roleIds",render:({field:e})=>s.jsx(J,{value:e.value??[],onChange:e.onChange,multiple:!0})}),s.jsx(es,{value:i??[]})]})]})]})}export{is as component};
