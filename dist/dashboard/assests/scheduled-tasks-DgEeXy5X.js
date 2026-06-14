import{c as _,u as R,at as b,as as D,au as h,av as c,aw as l,t as x,Z as f,be as A,j as e,aG as d,T as a,B as g,ad as E,ae as M,bf as q,af as v,aj as j,aW as C,aX as L,a_ as P,a$ as I,bg as Q}from"./index-_DOZWMCq.js";import{P as z}from"./payload-dialog-CFCaorpo.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],N=_("CirclePlay",J),$=l(`
    query ScheduledTasks {
        scheduledTasks {
            id
            description
            schedule
            scheduleDescription
            lastExecutedAt
            nextExecutionAt
            isRunning
            lastResult
            enabled
        }
    }
`),F=l(`
    mutation UpdateScheduledTask($input: UpdateScheduledTaskInput!) {
        updateScheduledTask(input: $input) {
            id
            enabled
        }
    }
`),K=l(`
    mutation RunScheduledTask($id: String!) {
        runScheduledTask(id: $id) {
            success
        }
    }
`);function H(){var o;const{i18n:i,_:B}=R(),{data:t}=b({queryKey:["scheduledTasks"],queryFn:()=>c.query($)}),r=D(),{mutate:m}=h({mutationFn:c.mutate(F),onSuccess:s=>{u()}}),u=()=>{r.invalidateQueries({queryKey:["scheduledTasks"]})},{mutate:p}=h({mutationFn:c.mutate(K),onSuccess:s=>{s.runScheduledTask.success?(x.success(i._({id:"96xJ48"})),r.invalidateQueries({queryKey:["scheduledTasks"]})):x.error(i._({id:"DzhRjJ"}))}}),{formatDate:y,formatRelativeDate:k}=f(),T={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},n=A(),S=[n.accessor("id",{header:i._({id:"S0kLOH"})}),n.accessor("description",{header:i._({id:"Nu4oKW"})}),n.accessor("enabled",{header:i._({id:"RxzN1M"}),cell:({row:s})=>s.original.enabled?e.jsx(d,{variant:"success",children:e.jsx(a,{id:"RxzN1M"})}):e.jsx(d,{variant:"secondary",children:e.jsx(a,{id:"E/QGRL"})})}),n.accessor("schedule",{header:i._({id:"pIxz4h"})}),n.accessor("scheduleDescription",{header:i._({id:"gmB6oO"})}),n.accessor("lastExecutedAt",{header:i._({id:"RhpMfE"}),cell:({row:s})=>s.original.lastExecutedAt?e.jsx("div",{title:s.original.lastExecutedAt,children:k(s.original.lastExecutedAt)}):e.jsx(a,{id:"qqeAJM"})}),n.accessor("nextExecutionAt",{header:i._({id:"WwKMiy"}),cell:({row:s})=>s.original.nextExecutionAt?y(s.original.nextExecutionAt,T):e.jsx(a,{id:"qqeAJM"})}),n.accessor("isRunning",{header:i._({id:"RiQMUh"}),cell:({row:s})=>s.original.isRunning?e.jsx(d,{variant:"success",children:e.jsx(a,{id:"RiQMUh"})}):e.jsx(d,{variant:"secondary",children:e.jsx(a,{id:"LXcUnJ"})})}),n.accessor("lastResult",{header:i._({id:"ikhZzI"}),cell:({row:s})=>s.original.lastResult?e.jsx(z,{payload:s.original.lastResult,title:e.jsx(a,{id:"bDEHSp"}),description:e.jsx(a,{id:"swNxZp"}),trigger:e.jsx(g,{size:"sm",variant:"secondary",children:e.jsx(a,{id:"xwytAA"})})}):e.jsx("div",{className:"text-muted-foreground",children:e.jsx(a,{id:"YTKVwL"})})}),n.display({id:"actions",header:i._({id:"7L01XJ"}),cell:({row:s})=>e.jsxs(E,{children:[e.jsx(M,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",children:e.jsx(q,{})})}),e.jsxs(v,{children:[s.original.enabled&&e.jsxs(j,{onClick:()=>p({id:s.original.id}),children:[e.jsx(N,{className:"w-4 h-4"}),e.jsx(a,{id:"3JjdaA"})]}),e.jsx(j,{onClick:()=>m({input:{id:s.original.id,enabled:!s.original.enabled}}),children:s.original.enabled?e.jsx(a,{id:"cO9+2L"}):e.jsx(a,{id:"PaQ3df"})})]})]})})];return e.jsxs(C,{pageId:"scheduled-tasks-list",children:[e.jsx(L,{children:e.jsx(a,{id:"8OiyFS"})}),e.jsx(P,{children:e.jsx(I,{blockId:"list-table",children:e.jsx(Q,{onRefresh:u,columns:S,data:(t==null?void 0:t.scheduledTasks)??[],totalItems:((o=t==null?void 0:t.scheduledTasks)==null?void 0:o.length)??0,defaultColumnVisibility:{schedule:!1}})})})]})}export{H as component};
