import{S as Q,i as T,s as z,e as j,t as M,c as E,a as V,h as N,d as p,b,L as q,g as S,J as m,j as R,k as w,m as F,M as ae,N as se,O as re,P as G,Q as U,R as J,T as W,K as ne,w as X,x as Y,y as Z,q as A,o as B,B as x,p as ve,U as pe,n as me,V as ge}from"../chunks/vendor-1827c632.js";import{s as ie,H as $e}from"../chunks/Header-07c3b71b.js";import{b as ce}from"../chunks/paths-28a87002.js";import{p as be,a as K}from"../chunks/Filters.svelte_svelte_type_style_lang-548d01ca.js";function oe(r,e,a){const t=r.slice();return t[5]=e[a],t}function fe(r){let e,a=r[5]+"",t;return{c(){e=j("div"),t=M(a),this.h()},l(l){e=E(l,"DIV",{class:!0});var s=V(e);t=N(s,a),s.forEach(p),this.h()},h(){b(e,"class","chip svelte-tctybq"),q(e,"datavis",r[5]=="datavis"),q(e,"art",r[5]=="art"),q(e,"product",r[5]=="product")},m(l,s){S(l,e,s),m(e,t)},p(l,s){s&1&&a!==(a=l[5]+"")&&R(t,a),s&1&&q(e,"datavis",l[5]=="datavis"),s&1&&q(e,"art",l[5]=="art"),s&1&&q(e,"product",l[5]=="product")},d(l){l&&p(e)}}}function ke(r){let e,a,t,l=r[0].title+"",s,o,c,f=r[0].description+"",_,D,n,g,i,h,d,k,I,L,ee,P=r[0].tags,$=[];for(let u=0;u<P.length;u+=1)$[u]=fe(oe(r,P,u));return{c(){e=j("a"),a=j("div"),t=j("span"),s=M(l),o=w(),c=j("div"),_=M(f),D=w(),n=j("div");for(let u=0;u<$.length;u+=1)$[u].c();g=w(),i=j("div"),h=M(r[1]),this.h()},l(u){e=E(u,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var y=V(e);a=E(y,"DIV",{class:!0});var v=V(a);t=E(v,"SPAN",{});var H=V(t);s=N(H,l),H.forEach(p),v.forEach(p),o=F(y),c=E(y,"DIV",{class:!0});var te=V(c);_=N(te,f),te.forEach(p),D=F(y),n=E(y,"DIV",{class:!0});var C=V(n);for(let O=0;O<$.length;O+=1)$[O].l(C);g=F(C),i=E(C,"DIV",{class:!0});var le=V(i);h=N(le,r[1]),le.forEach(p),C.forEach(p),y.forEach(p),this.h()},h(){b(a,"class","list-row card-title svelte-tctybq"),b(c,"class","list-row card-body svelte-tctybq"),b(i,"class","chip date svelte-tctybq"),b(n,"class","list-row card-footer svelte-tctybq"),b(e,"class","card svelte-tctybq"),b(e,"sveltekit:prefetch",""),b(e,"href",d=ce+r[0].url)},m(u,y){S(u,e,y),m(e,a),m(a,t),m(t,s),m(e,o),m(e,c),m(c,_),m(e,D),m(e,n);for(let v=0;v<$.length;v+=1)$[v].m(n,null);m(n,g),m(n,i),m(i,h),I=!0,L||(ee=ae(e,"click",r[3]),L=!0)},p(u,[y]){if((!I||y&1)&&l!==(l=u[0].title+"")&&R(s,l),(!I||y&1)&&f!==(f=u[0].description+"")&&R(_,f),y&1){P=u[0].tags;let v;for(v=0;v<P.length;v+=1){const H=oe(u,P,v);$[v]?$[v].p(H,y):($[v]=fe(H),$[v].c(),$[v].m(n,g))}for(;v<$.length;v+=1)$[v].d(1);$.length=P.length}(!I||y&2)&&R(h,u[1]),(!I||y&1&&d!==(d=ce+u[0].url))&&b(e,"href",d)},i(u){I||(se(()=>{k||(k=re(e,J,{},!0)),k.run(1)}),I=!0)},o(u){k||(k=re(e,J,{},!1)),k.run(0),I=!1},d(u){u&&p(e),G($,u),u&&k&&k.end(),L=!1,ee()}}}function ye(r,e,a){let t;U(r,ie,f=>a(2,t=f));let{data:l}=e,s=Math.max(...l.years),o=s;l.years.length>1&&(minDate=Math.min(...l.years),o=minDate+" - "+s);const c=()=>{W(ie,t=l.title,t)};return r.$$set=f=>{"data"in f&&a(0,l=f.data)},[l,o,t,c]}class De extends Q{constructor(e){super();T(this,e,ye,ke,z,{data:0})}}function de(r,e,a){const t=r.slice();return t[6]=e[a],t}function ue(r){let e,a,t,l=r[6]+"",s,o,c,f,_,D;return{c(){e=j("div"),a=j("span"),t=w(),s=M(l),o=w(),this.h()},l(n){e=E(n,"DIV",{class:!0,"data-type":!0});var g=V(e);a=E(g,"SPAN",{class:!0}),V(a).forEach(p),t=F(g),s=N(g,l),o=F(g),g.forEach(p),this.h()},h(){b(a,"class","circle svelte-1h0mv3f"),b(e,"class",c="filter-option "+r[6]+" svelte-1h0mv3f"),b(e,"data-type",f=r[6]),q(e,"selected",r[6]==r[0])},m(n,g){S(n,e,g),m(e,a),m(e,t),m(e,s),m(e,o),_||(D=ae(e,"click",r[2]),_=!0)},p(n,g){g&3&&q(e,"selected",n[6]==n[0])},d(n){n&&p(e),_=!1,D()}}}function je(r){let e,a,t=r[1],l=[];for(let s=0;s<t.length;s+=1)l[s]=ue(de(r,t,s));return{c(){e=j("div"),a=j("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var o=V(e);a=E(o,"DIV",{class:!0});var c=V(a);for(let f=0;f<l.length;f+=1)l[f].l(c);c.forEach(p),o.forEach(p),this.h()},h(){b(a,"class","project-filter type svelte-1h0mv3f"),b(e,"class","filter-holder svelte-1h0mv3f")},m(s,o){S(s,e,o),m(e,a);for(let c=0;c<l.length;c+=1)l[c].m(a,null)},p(s,[o]){if(o&7){t=s[1];let c;for(c=0;c<t.length;c+=1){const f=de(s,t,c);l[c]?l[c].p(f,o):(l[c]=ue(f),l[c].c(),l[c].m(a,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=t.length}},i:ne,o:ne,d(s){s&&p(e),G(l,s)}}}function Ee(r,e,a){let t,l;U(r,be,_=>a(3,t=_)),U(r,K,_=>a(4,l=_));let s=t.map(_=>_.tags).flat(1),o=[...new Set(s)];o.unshift("all");let c="all";function f(){a(0,c=this.getAttribute("data-type")),c=="all"?W(K,l=t,l):W(K,l=t.filter(_=>_.tags.includes(c)),l)}return[c,o,f]}class Ve extends Q{constructor(e){super();T(this,e,Ee,je,z,{})}}function he(r,e,a){const t=r.slice();return t[1]=e[a],t}function _e(r){let e,a;return e=new De({props:{data:r[1]}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,l){Z(e,t,l),a=!0},p(t,l){const s={};l&1&&(s.data=t[1]),e.$set(s)},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function Ie(r){let e,a,t,l,s,o,c,f,_;e=new $e({}),l=new Ve({});let D=r[0],n=[];for(let i=0;i<D.length;i+=1)n[i]=_e(he(r,D,i));const g=i=>B(n[i],1,1,()=>{n[i]=null});return{c(){X(e.$$.fragment),a=w(),t=j("div"),X(l.$$.fragment),s=w(),o=j("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){Y(e.$$.fragment,i),a=F(i),t=E(i,"DIV",{class:!0});var h=V(t);Y(l.$$.fragment,h),s=F(h),o=E(h,"DIV",{class:!0});var d=V(o);for(let k=0;k<n.length;k+=1)n[k].l(d);d.forEach(p),h.forEach(p),this.h()},h(){b(o,"class","project-list-holder svelte-1kn8h02"),b(t,"class","content")},m(i,h){Z(e,i,h),S(i,a,h),S(i,t,h),Z(l,t,null),m(t,s),m(t,o);for(let d=0;d<n.length;d+=1)n[d].m(o,null);_=!0},p(i,[h]){if(h&1){D=i[0];let d;for(d=0;d<D.length;d+=1){const k=he(i,D,d);n[d]?(n[d].p(k,h),A(n[d],1)):(n[d]=_e(k),n[d].c(),A(n[d],1),n[d].m(o,null))}for(me(),d=D.length;d<n.length;d+=1)g(d);ve()}},i(i){if(!_){A(e.$$.fragment,i),A(l.$$.fragment,i);for(let h=0;h<D.length;h+=1)A(n[h]);se(()=>{f&&f.end(1),c=ge(t,J,{delay:300,duration:500}),c.start()}),_=!0}},o(i){B(e.$$.fragment,i),B(l.$$.fragment,i),n=n.filter(Boolean);for(let h=0;h<n.length;h+=1)B(n[h]);c&&c.invalidate(),f=pe(t,J,{duration:300}),_=!1},d(i){x(e,i),i&&p(a),i&&p(t),x(l),G(n,i),i&&f&&f.end()}}}function qe(r,e,a){let t;return U(r,K,l=>a(0,t=l)),[t]}class Ae extends Q{constructor(e){super();T(this,e,qe,Ie,z,{})}}export{Ae as default};