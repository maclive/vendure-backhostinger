import{at as r,Z as b,u as c,j as L,db as m,aw as v,av as p}from"./index-_DOZWMCq.js";const f=v(`
    query AvailableGlobalLanguages {
        globalSettings {
            availableLanguages
        }
    }
`);function d(s){const{data:a}=r({queryKey:["availableGlobalLanguages"],queryFn:()=>p.query(f),staleTime:3e5}),{formatLanguageName:n}=b(),{value:o,onChange:t,multiple:u,availableLanguageCodes:i}=s,{i18n:e,_}=c(),g=(i??(a==null?void 0:a.globalSettings.availableLanguages)??[]).map(l=>({value:l,label:n(l)}));return L.jsx(m,{value:o,onChange:t,multiple:u,items:g,placeholder:e._({id:"ffxVQ8"}),searchPlaceholder:e._({id:"StoBff"})})}export{d as L};
