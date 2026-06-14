import{c as u,aw as n,r as d,u as E,j as e,bh as k,aZ as D,ad as g,ae as h,B as i,bi as L,T as t,bj as A,af as p,aj as b,av as f,au as M,aG as _,bk as S,bl as q}from"./index-_DOZWMCq.js";import{L as w}from"./list-page-DnII4Vai.js";import{P as v}from"./payload-dialog-CFCaorpo.js";import{C as J,a as P}from"./circle-x-CGhWQs8G.js";import{B as C}from"./ban-Cm1GKRDa.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],F=u("Clock",T);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],B=u("Loader",$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Q=u("RotateCcw",z),I=n(`
    fragment JobInfo on Job {
        id
        queueName
        createdAt
        startedAt
        settledAt
        state
        isSettled
        progress
        duration
        data
        result
        error
        retries
        attempts
    }
`),G=n(`
        query JobList($options: JobListOptions) {
            jobs(options: $options) {
                items {
                    ...JobInfo
                }
                totalItems
            }
        }
    `,[I]),V=n(`
    query JobQueueList {
        jobQueues {
            name
            running
        }
    }
`),H=n(`
        mutation CancelJob($jobId: ID!) {
            cancelJob(jobId: $jobId) {
                ...JobInfo
            }
        }
    `,[I]),y=[{label:"Pending",value:"PENDING",icon:F},{label:"Completed",value:"COMPLETED",icon:J},{label:"Running",value:"RUNNING",icon:B},{label:"Failed",value:"FAILED",icon:P},{label:"Retrying",value:"RETRYING",icon:Q},{label:"Cancelled",value:"CANCELLED",icon:C}],N=[{label:e.jsx(t,{id:"az8lvo"}),value:0},{label:e.jsx(t,{id:"a5xvsE"}),value:5e3},{label:e.jsx(t,{id:"UFvKgT"}),value:1e4},{label:e.jsx(t,{id:"hYZ3aH"}),value:3e4},{label:e.jsx(t,{id:"rjE0f3"}),value:6e4}];function W(){const l=d.useRef(()=>{}),{i18n:m,_:O}=E(),[s,R]=d.useState(1e4);d.useEffect(()=>{if(s===0)return;const a=setInterval(()=>{l.current()},s);return()=>clearInterval(a)},[s]);const o=N.find(a=>a.value===s);return e.jsx(w,{pageId:"job-queue-list",title:e.jsx(t,{id:"AsRAnH"}),defaultSort:[{id:"createdAt",desc:!0}],listQuery:G,route:k,customizeColumns:{createdAt:{cell:({row:a})=>e.jsx("div",{title:a.original.createdAt,children:q(new Date(a.original.createdAt),new Date)})},data:{cell:({row:a})=>e.jsx(v,{payload:a.original.data,title:e.jsx(t,{id:"XBRZ0Q"}),description:e.jsx(t,{id:"6V+g40"}),trigger:e.jsx(i,{size:"sm",variant:"secondary",children:e.jsx(t,{id:"gqSqrj"})})})},queueName:{cell:({row:a})=>e.jsx("span",{className:"font-mono",children:a.original.queueName})},result:{cell:({row:a})=>a.original.result?e.jsx(v,{payload:a.original.result,title:e.jsx(t,{id:"bDEHSp"}),description:e.jsx(t,{id:"swNxZp"}),trigger:e.jsx(i,{size:"sm",variant:"secondary",children:e.jsx(t,{id:"xwytAA"})})}):e.jsx("div",{className:"text-muted-foreground",children:e.jsx(t,{id:"YTKVwL"})})},state:{cell:({row:a,table:r})=>{const j=M({mutationFn:c=>f.mutate(H,{jobId:c}),onSuccess:()=>{l.current()}}),x=y.find(c=>c.value===a.original.state);return e.jsxs(_,{variant:a.original.state==="PENDING"?"secondary":a.original.state==="COMPLETED"?"success":a.original.state==="FAILED"?"destructive":"outline",children:[x&&e.jsx(x.icon,{}),a.original.state,a.original.state==="RUNNING"?e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"sm",className:"h-6 w-6 p-0",children:e.jsx(S,{className:"h-4 w-4"})})}),e.jsx(p,{align:"end",children:e.jsxs(b,{onClick:()=>j.mutate(a.original.id),disabled:j.isPending,className:"text-destructive focus:text-destructive",children:[e.jsx(C,{className:"mr-2 h-4 w-4"}),e.jsx(t,{id:"FnSb+y"})]})})]})}):null]})}},duration:{cell:({row:a})=>a.original.duration?`${a.original.duration}ms`:null}},defaultVisibility:{isSettled:!1,settledAt:!1,progress:!1,retries:!1,attempts:!1,error:!1,startedAt:!1},facetedFilters:{queueName:{title:m._({id:"b24kPi"}),optionsFn:async()=>f.query(V).then(a=>a.jobQueues.map(r=>({label:r.name,value:r.name})))},state:{title:m._({id:"RS0o7b"}),options:y}},registerRefresher:a=>{l.current=a},children:e.jsx(D,{children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsxs(i,{variant:"outline",size:"sm",className:"gap-2",children:[e.jsx(L,{className:"h-4 w-4"}),e.jsx("span",{children:e.jsx(t,{id:"0OgmBr",values:{0:o==null?void 0:o.label}})}),e.jsx(A,{className:"h-4 w-4"})]})}),e.jsx(p,{align:"end",children:N.map(a=>e.jsx(b,{onClick:()=>R(a.value),className:s===a.value?"bg-accent":"",children:a.label},a.value))})]})})})}export{W as component};
