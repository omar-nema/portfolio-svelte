import{S as Q,i as T,s as G,e as b,t as N,c as j,a as E,h as B,d as m,b as k,L as z,g as A,J as g,j as U,k as F,m as P,M as ae,N as se,O as re,P as W,Q as J,R as K,T as X,K as ne,w as Y,x as Z,y as x,q,o as C,B as ee,p as ve,U as pe,n as me,V as ge}from"../chunks/vendor-1827c632.js";import{s as ie,H as $e}from"../chunks/Header-7e8fd84e.js";import{b as oe}from"../chunks/paths-28a87002.js";import{p as ke,a as L}from"../chunks/Filters.svelte_svelte_type_style_lang-548d01ca.js";function ce(r,e,s){const t=r.slice();return t[5]=e[s],t}function fe(r){let e,s=r[5]+"",t;return{c(){e=b("div"),t=N(s),this.h()},l(l){e=j(l,"DIV",{class:!0});var a=E(e);t=B(a,s),a.forEach(m),this.h()},h(){k(e,"class","chip svelte-uzhv13"),z(e,"datavis",r[5]=="datavis"),z(e,"art",r[5]=="art"),z(e,"product",r[5]=="product")},m(l,a){A(l,e,a),g(e,t)},p(l,a){a&1&&s!==(s=l[5]+"")&&U(t,s),a&1&&z(e,"datavis",l[5]=="datavis"),a&1&&z(e,"art",l[5]=="art"),a&1&&z(e,"product",l[5]=="product")},d(l){l&&m(e)}}}function De(r){let e,s,t,l=r[0].title+"",a,u,n,f=r[0].description+"",p,y,_,v,c,S,i,d,o,I,H,V=r[0].tags,D=[];for(let h=0;h<V.length;h+=1)D[h]=fe(ce(r,V,h));return{c(){e=b("a"),s=b("div"),t=b("span"),a=N(l),u=F(),n=b("div"),p=N(f),y=F(),_=b("div");for(let h=0;h<D.length;h+=1)D[h].c();v=F(),c=b("div"),S=N(r[1]),this.h()},l(h){e=j(h,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var w=E(e);s=j(w,"DIV",{class:!0});var $=E(s);t=j($,"SPAN",{});var M=E(t);a=B(M,l),M.forEach(m),$.forEach(m),u=P(w),n=j(w,"DIV",{class:!0});var te=E(n);p=B(te,f),te.forEach(m),y=P(w),_=j(w,"DIV",{class:!0});var R=E(_);for(let O=0;O<D.length;O+=1)D[O].l(R);v=P(R),c=j(R,"DIV",{class:!0});var le=E(c);S=B(le,r[1]),le.forEach(m),R.forEach(m),w.forEach(m),this.h()},h(){k(s,"class","list-row card-title svelte-uzhv13"),k(n,"class","list-row card-body svelte-uzhv13"),k(c,"class","chip date svelte-uzhv13"),k(_,"class","list-row card-footer svelte-uzhv13"),k(e,"class","card svelte-uzhv13"),k(e,"sveltekit:prefetch",""),k(e,"href",i=oe+r[0].url)},m(h,w){A(h,e,w),g(e,s),g(s,t),g(t,a),g(e,u),g(e,n),g(n,p),g(e,y),g(e,_);for(let $=0;$<D.length;$+=1)D[$].m(_,null);g(_,v),g(_,c),g(c,S),o=!0,I||(H=ae(e,"click",r[3]),I=!0)},p(h,[w]){if((!o||w&1)&&l!==(l=h[0].title+"")&&U(a,l),(!o||w&1)&&f!==(f=h[0].description+"")&&U(p,f),w&1){V=h[0].tags;let $;for($=0;$<V.length;$+=1){const M=ce(h,V,$);D[$]?D[$].p(M,w):(D[$]=fe(M),D[$].c(),D[$].m(_,v))}for(;$<D.length;$+=1)D[$].d(1);D.length=V.length}(!o||w&2)&&U(S,h[1]),(!o||w&1&&i!==(i=oe+h[0].url))&&k(e,"href",i)},i(h){o||(se(()=>{d||(d=re(e,K,{},!0)),d.run(1)}),o=!0)},o(h){d||(d=re(e,K,{},!1)),d.run(0),o=!1},d(h){h&&m(e),W(D,h),h&&d&&d.end(),I=!1,H()}}}function we(r,e,s){let t;J(r,ie,f=>s(2,t=f));let{data:l}=e,a=Math.max(...l.years),u=a;l.years.length>1&&(minDate=Math.min(...l.years),u=minDate+" - "+a);const n=()=>{X(ie,t=l.title,t)};return r.$$set=f=>{"data"in f&&s(0,l=f.data)},[l,u,t,n]}class be extends Q{constructor(e){super();T(this,e,we,De,G,{data:0})}}function de(r,e,s){const t=r.slice();return t[6]=e[s],t}function ue(r){let e,s,t,l=r[6]+"",a,u,n,f,p,y;return{c(){e=b("div"),s=b("span"),t=F(),a=N(l),u=F(),this.h()},l(_){e=j(_,"DIV",{class:!0,"data-type":!0});var v=E(e);s=j(v,"SPAN",{class:!0}),E(s).forEach(m),t=P(v),a=B(v,l),u=P(v),v.forEach(m),this.h()},h(){k(s,"class","circle svelte-17ykwzw"),k(e,"class",n="filter-option "+r[6]+" svelte-17ykwzw"),k(e,"data-type",f=r[6]),z(e,"selected",r[6]==r[0])},m(_,v){A(_,e,v),g(e,s),g(e,t),g(e,a),g(e,u),p||(y=ae(e,"click",r[2]),p=!0)},p(_,v){v&3&&z(e,"selected",_[6]==_[0])},d(_){_&&m(e),p=!1,y()}}}function je(r){let e,s,t=r[1],l=[];for(let a=0;a<t.length;a+=1)l[a]=ue(de(r,t,a));return{c(){e=b("div"),s=b("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=j(a,"DIV",{class:!0});var u=E(e);s=j(u,"DIV",{class:!0});var n=E(s);for(let f=0;f<l.length;f+=1)l[f].l(n);n.forEach(m),u.forEach(m),this.h()},h(){k(s,"class","project-filter type svelte-17ykwzw"),k(e,"class","filter-holder svelte-17ykwzw")},m(a,u){A(a,e,u),g(e,s);for(let n=0;n<l.length;n+=1)l[n].m(s,null)},p(a,[u]){if(u&7){t=a[1];let n;for(n=0;n<t.length;n+=1){const f=de(a,t,n);l[n]?l[n].p(f,u):(l[n]=ue(f),l[n].c(),l[n].m(s,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},i:ne,o:ne,d(a){a&&m(e),W(l,a)}}}function Ee(r,e,s){let t,l;J(r,ke,p=>s(3,t=p)),J(r,L,p=>s(4,l=p));let a=t.map(p=>p.tags).flat(1),u=[...new Set(a)];u.unshift("all");let n="all";function f(){s(0,n=this.getAttribute("data-type")),n=="all"?X(L,l=t,l):X(L,l=t.filter(p=>p.tags.includes(n)),l)}return[n,u,f]}class ye extends Q{constructor(e){super();T(this,e,Ee,je,G,{})}}function he(r,e,s){const t=r.slice();return t[1]=e[s],t}function _e(r){let e,s;return e=new be({props:{data:r[1]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){x(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.data=t[1]),e.$set(a)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){ee(e,t)}}}function Ve(r){let e,s,t,l,a,u,n,f,p,y,_;e=new $e({}),a=new ye({});let v=r[0],c=[];for(let i=0;i<v.length;i+=1)c[i]=_e(he(r,v,i));const S=i=>C(c[i],1,1,()=>{c[i]=null});return{c(){Y(e.$$.fragment),s=F(),t=b("div"),l=b("div"),Y(a.$$.fragment),u=F(),n=b("div"),f=b("div");for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){Z(e.$$.fragment,i),s=P(i),t=j(i,"DIV",{class:!0});var d=E(t);l=j(d,"DIV",{class:!0});var o=E(l);Z(a.$$.fragment,o),o.forEach(m),u=P(d),n=j(d,"DIV",{class:!0});var I=E(n);f=j(I,"DIV",{class:!0});var H=E(f);for(let V=0;V<c.length;V+=1)c[V].l(H);H.forEach(m),I.forEach(m),d.forEach(m),this.h()},h(){k(l,"class","content-inner"),k(f,"class","project-list-holder content-inner svelte-1fs5og3"),k(n,"class","project-outer svelte-1fs5og3"),k(t,"class","content-outer")},m(i,d){x(e,i,d),A(i,s,d),A(i,t,d),g(t,l),x(a,l,null),g(t,u),g(t,n),g(n,f);for(let o=0;o<c.length;o+=1)c[o].m(f,null);_=!0},p(i,[d]){if(d&1){v=i[0];let o;for(o=0;o<v.length;o+=1){const I=he(i,v,o);c[o]?(c[o].p(I,d),q(c[o],1)):(c[o]=_e(I),c[o].c(),q(c[o],1),c[o].m(f,null))}for(me(),o=v.length;o<c.length;o+=1)S(o);ve()}},i(i){if(!_){q(e.$$.fragment,i),q(a.$$.fragment,i);for(let d=0;d<v.length;d+=1)q(c[d]);se(()=>{y&&y.end(1),p=ge(t,K,{delay:300,duration:500}),p.start()}),_=!0}},o(i){C(e.$$.fragment,i),C(a.$$.fragment,i),c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)C(c[d]);p&&p.invalidate(),y=pe(t,K,{duration:300}),_=!1},d(i){ee(e,i),i&&m(s),i&&m(t),ee(a),W(c,i),i&&y&&y.end()}}}function Ie(r,e,s){let t;return J(r,L,l=>s(0,t=l)),[t]}class Ae extends Q{constructor(e){super();T(this,e,Ie,Ve,G,{})}}export{Ae as default};
