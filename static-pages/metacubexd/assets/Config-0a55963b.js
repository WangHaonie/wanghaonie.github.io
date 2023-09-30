import{i as e,c as a,d as p,a5 as C,a3 as te,k as B,N as le,F as T,S as R,R as oe,aw as de,p as ue,P as ge,b as o,D as P,U as pe,a4 as ae}from"./vendor-ec1fbc1a.js";import{u as A,a9 as he,B as w,aa as m,ab as fe,ac as ve,ad as be,ae as me,af as _e,ag as xe,ah as $e,ai as Ce,aj as ke,ak as ye,b as Se,al as we,am as L,an as K,ao as De,ap as Y,aq as Ee,ar as ee,as as Te,at as Ne,au as Pe,av as Ae,aw as Ie,a8 as Le,ax as Fe,ay as Be,az as Re,aA as je}from"./index-57f146ce.js";import{C as k}from"./ConfigTitle-444aa920.js";const Oe=p('<div class="flex flex-col p-4">'),Qe=p('<div class="flex flex-col"><form class="flex gap-2 sm:flex-row"><input type="search" name="name" class="input input-bordered min-w-0 flex-1" placeholder="google.com"><div class="flex items-center gap-2"><select name="type" class="select select-bordered"><option>A</option><option>AAAA</option><option>MX'),Ue=p('<div class="py-2">'),Ve=p('<div class="flex flex-col gap-4"><select class="select select-bordered"><option></option><option></option><option></option></select><form class="grid grid-cols-3 gap-2 sm:grid-cols-5"></form><div class="grid grid-cols-2 gap-2 sm:grid-cols-4"><div class="form-control"><label for="enable-tun-device" class="label gap-2"><span class="label-text"></span></label><input id="enable-tun-device" type="checkbox" class="toggle"></div><div class="form-control"><label for="tun-ip-stack" class="label gap-2"><span class="label-text"></span></label><select id="tun-ip-stack" class="select select-bordered flex-1"><option>gVisor</option><option>System</option><option>LWIP</option></select></div><div class="form-control"><label for="device-name" class="label gap-2"><span class="label-text"></span></label><input id="device-name" class="input input-bordered min-w-0"></div><div class="form-control"><label for="interface-name" class="label gap-2"><span class="label-text"></span></label><input id="interface-name" class="input input-bordered min-w-0"></div></div><div class="grid grid-cols-2 gap-2 sm:grid-cols-3">'),Ge=p('<div class="form-control"><label class="label"><span class="label-text"></span></label><input type="number" class="input input-bordered">'),Me=p('<div class="flex flex-col gap-2"><div class="flex flex-col"><select class="select select-bordered"></select></div><div class="flex flex-col"><select class="select select-bordered">'),qe=p('<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type="checkbox" class="toggle"></div></div><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type="checkbox" class="toggle"></div><div class="flex flex-col"><select class="select select-bordered">'),F=p("<option>"),ze=p('<span class="absolute right-[-4px] top-[-4px] flex h-3 w-3"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"></span><span class="inline-flex h-3 w-3 rounded-full bg-info">'),He=p('<div class="grid grid-cols-2 gap-4"><kbd class="kbd"></kbd><div class="relative"><kbd class="kbd w-full">'),Xe=p('<div class="mx-auto flex max-w-screen-md flex-col gap-4">'),We=C.object({name:C.string(),type:C.string()}),Ze=()=>{const[t]=A(),c=he(),{form:_,isSubmitting:h}=te({extend:ae({schema:We}),onSubmit:async i=>{c.get("dns/query",{searchParams:{name:i.name,type:i.type}}).json().then(({Answer:n})=>f((n==null?void 0:n.map(({data:s})=>s))||[]))}}),[u,f]=B([]);return(()=>{const i=Qe(),n=i.firstChild,s=n.firstChild,v=s.nextSibling;return v.firstChild,le(_,n,()=>_),e(v,a(w,{type:"submit",class:"btn-primary",get loading(){return h()},get children(){return t("dnsQuery")}}),null),e(i,a(R,{get when(){return u().length>0},get children(){const b=Oe();return e(b,a(T,{get each(){return u()},children:r=>(()=>{const d=Ue();return e(d,r),d})()})),b}}),null),i})()},Je=C.object({port:C.number(),"socks-port":C.number(),"redir-port":C.number(),"tproxy-port":C.number(),"mixed-port":C.number()}),Ke=()=>{const[t]=A(),c=oe(),_=[{label:()=>t("port",{name:"HTTP"}),key:"port",onChange:s=>void m("port",Number(s.target.value),n)},{label:()=>t("port",{name:"Socks"}),key:"socks-port",onChange:s=>void m("socks-port",Number(s.target.value),n)},{label:()=>t("port",{name:"Redir"}),key:"redir-port",onChange:s=>void m("redir-port",Number(s.target.value),n)},{label:()=>t("port",{name:"TProxy"}),key:"tproxy-port",onChange:s=>void m("tproxy-port",Number(s.target.value),n)},{label:()=>t("port",{name:"Mixed"}),key:"mixed-port",onChange:s=>void m("mixed-port",Number(s.target.value),n)}],{form:h,setInitialValues:u,reset:f}=te({extend:ae({schema:Je})}),[i,{refetch:n}]=de(je);return ue(()=>{const s=i();s&&(u(s),f())}),(()=>{const s=Ve(),v=s.firstChild,b=v.firstChild,r=b.nextSibling,d=r.nextSibling,y=v.nextSibling,E=y.nextSibling,S=E.firstChild,g=S.firstChild,x=g.firstChild,j=g.nextSibling,O=S.nextSibling,Q=O.firstChild,ne=Q.firstChild,U=Q.nextSibling,V=O.nextSibling,G=V.firstChild,se=G.firstChild,M=G.nextSibling,ie=V.nextSibling,q=ie.firstChild,re=q.firstChild,z=q.nextSibling,D=E.nextSibling;return v.addEventListener("change",l=>void m("mode",l.target.value,n)),e(b,()=>t("global")),e(r,()=>t("rule")),e(d,()=>t("direct")),le(h,y,()=>h),e(y,a(T,{each:_,children:l=>(()=>{const H=Ge(),I=H.firstChild,ce=I.firstChild,N=I.nextSibling;return e(ce,()=>l.label()),ge(N,"change",l.onChange),o($=>{const X=l.key,W=l.key,Z=l.key,J=l.label();return X!==$._v$&&P(I,"for",$._v$=X),W!==$._v$2&&P(N,"id",$._v$2=W),Z!==$._v$3&&P(N,"name",$._v$3=Z),J!==$._v$4&&P(N,"placeholder",$._v$4=J),$},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),H})()})),e(x,()=>t("enableTunDevice")),j.addEventListener("change",l=>void m("tun",{enable:l.target.checked},n)),e(ne,()=>t("tunModeStack")),U.addEventListener("change",l=>void m("tun",{stack:l.target.value},n)),e(se,()=>t("tunDeviceName")),M.addEventListener("change",l=>void m("tun",{device:l.target.value},n)),e(re,()=>t("interfaceName")),z.addEventListener("change",l=>void m("interface-name",l.target.value,n)),e(D,a(w,{class:"btn-primary",get loading(){return fe()},onClick:ve,get children(){return t("reloadConfig")}}),null),e(D,a(w,{class:"btn-secondary",get loading(){return be()},onClick:me,get children(){return t("updateGEODatabases")}}),null),e(D,a(w,{class:"btn-accent",get loading(){return _e()},onClick:xe,get children(){return t("flushFakeIP")}}),null),e(D,a(w,{class:"btn-error",get loading(){return $e()},onClick:Ce,get children(){return t("upgradeCore")}}),null),e(D,a(w,{class:"btn-warning",get loading(){return ke()},onClick:ye,get children(){return t("restartCore")}}),null),e(D,a(w,{class:"btn-info",onClick:()=>{Se(""),c(we.Setup)},get children(){return t("switchEndpoint")}}),null),o(()=>{var l;return v.value=(l=i())==null?void 0:l.mode}),o(()=>b.value=L.Global),o(()=>r.value=L.Rule),o(()=>d.value=L.Direct),o(()=>{var l;return j.checked=(l=i())==null?void 0:l.tun.enable}),o(()=>{var l;return U.value=(l=i())==null?void 0:l.tun.stack}),o(()=>{var l;return M.value=(l=i())==null?void 0:l.tun.device}),o(()=>{var l;return z.value=(l=i())==null?void 0:l["interface-name"]}),s})()},Ye=()=>{const[t]=A(),c=[{label:()=>t("en"),value:K.EN},{label:()=>t("zh"),value:K.ZH}];return(()=>{const _=qe(),h=_.firstChild,u=h.firstChild,f=u.firstChild,i=h.nextSibling,n=i.firstChild,s=n.firstChild,v=n.nextSibling,b=v.firstChild;return e(u,a(k,{get children(){return t("autoSwitchTheme")}}),f),f.addEventListener("change",r=>De(r.target.checked)),e(h,a(R,{get when(){return Y()},get children(){const r=Me(),d=r.firstChild,y=d.firstChild,E=d.nextSibling,S=E.firstChild;return e(d,a(k,{get children(){return t("favDayTheme")}}),y),y.addEventListener("change",g=>Ee(g.target.value)),e(y,a(T,{each:ee,children:g=>(()=>{const x=F();return x.value=g,e(x,g),x})()})),e(E,a(k,{get children(){return t("favNightTheme")}}),S),S.addEventListener("change",g=>Te(g.target.value)),e(S,a(T,{each:ee,children:g=>(()=>{const x=F();return x.value=g,e(x,g),x})()})),o(()=>y.value=Ne()),o(()=>S.value=Pe()),r}}),null),e(n,a(k,{get children(){return t("useTwemoji")}}),s),s.addEventListener("change",r=>Ae(r.target.checked)),e(v,a(k,{get children(){return t("switchLanguage")}}),b),b.addEventListener("change",r=>Ie(r.target.value)),e(b,a(T,{each:c,children:r=>(()=>{const d=F();return e(d,()=>r.label()),o(()=>d.selected=Le()===r.value),o(()=>d.value=r.value),d})()})),o(()=>f.checked=Y()),o(()=>s.checked=Fe()),_})()},et=()=>{const[t,c]=B(""),[_,h]=B(!1);return pe(async()=>{const u=await Be();c(u),h(await Re(u))}),(()=>{const u=He(),f=u.firstChild,i=f.nextSibling,n=i.firstChild;return e(f,()=>"1.122.1"),e(i,a(R,{get when(){return _()},get children(){return ze()}}),n),e(n,t),u})()},nt=()=>{const[t]=A();return(()=>{const c=Xe();return e(c,a(k,{withDivider:!0,get children(){return t("dnsQuery")}}),null),e(c,a(Ze,{}),null),e(c,a(k,{withDivider:!0,get children(){return t("coreConfig")}}),null),e(c,a(Ke,{}),null),e(c,a(k,{withDivider:!0,get children(){return t("xdConfig")}}),null),e(c,a(Ye,{}),null),e(c,a(k,{withDivider:!0,get children(){return t("version")}}),null),e(c,a(et,{}),null),c})()};export{nt as default};