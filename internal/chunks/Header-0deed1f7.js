import{U as z,V as B,D as F,S as G,i as M,s as O,e as h,k as w,t as A,c as _,a as p,d as c,m as H,h as y,b as n,L as q,g as S,J as o,q as U,K as N,Q,j as X,N as J,W as K,R as L}from"./vendor-eb716a21.js";import{b as W}from"./paths-28a87002.js";const Y=()=>{const t=z("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},Z={subscribe(t){return Y().page.subscribe(t)}};let $=B(500),x=F(null);function ee(t){let e,i,E,v,u,r,d,g,D,s,f,k,m,V="< back",I,b;return{c(){e=h("div"),i=h("div"),E=A("work"),v=w(),u=h("div"),r=A("/"),d=w(),g=h("div"),D=A(t[2]),f=w(),k=h("div"),m=h("a"),I=A(V),this.h()},l(a){e=_(a,"DIV",{class:!0});var l=p(e);i=_(l,"DIV",{class:!0});var j=p(i);E=y(j,"work"),j.forEach(c),v=H(l),u=_(l,"DIV",{class:!0});var C=p(u);r=y(C,"/"),C.forEach(c),d=H(l),g=_(l,"DIV",{class:!0});var P=p(g);D=y(P,t[2]),P.forEach(c),l.forEach(c),f=H(a),k=_(a,"DIV",{class:!0});var R=p(k);m=_(R,"A",{class:!0,href:!0});var T=p(m);I=y(T,V),T.forEach(c),R.forEach(c),this.h()},h(){n(i,"class","svelte-1u45r45"),n(u,"class","svelte-1u45r45"),n(g,"class","selected project-title svelte-1u45r45"),n(e,"class","nav-left svelte-1u45r45"),n(m,"class","btn-back svelte-1u45r45"),n(m,"href","../"),n(k,"class","nav-right")},m(a,l){S(a,e,l),o(e,i),o(i,E),o(e,v),o(e,u),o(u,r),o(e,d),o(e,g),o(g,D),S(a,f,l),S(a,k,l),o(k,m),o(m,I)},p(a,l){t=a,l&4&&X(D,t[2])},i(a){s||J(()=>{s=K(e,L,{duration:t[1]}),s.start()}),b||J(()=>{b=K(k,L,{duration:t[1]}),b.start()})},o:N,d(a){a&&c(e),a&&c(f),a&&c(k)}}}function te(t){let e,i,E,v,u,r,d,g,D;return{c(){e=h("div"),i=h("a"),E=A("work"),u=w(),r=h("div"),d=h("a"),g=A("about"),this.h()},l(s){e=_(s,"DIV",{class:!0});var f=p(e);i=_(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var k=p(i);E=y(k,"work"),k.forEach(c),f.forEach(c),u=H(s),r=_(s,"DIV",{class:!0});var m=p(r);d=_(m,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var V=p(d);g=y(V,"about"),V.forEach(c),m.forEach(c),this.h()},h(){n(i,"sveltekit:prefetch",""),n(i,"href","./"),n(i,"class","svelte-1u45r45"),n(e,"class","nav-item work svelte-1u45r45"),q(e,"selected",!t[0].url.pathname.includes("about")),n(d,"sveltekit:prefetch",""),n(d,"href",W+"/about"),n(d,"class","svelte-1u45r45"),n(r,"class","nav-item about svelte-1u45r45"),q(r,"selected",t[0].url.pathname.includes("about"))},m(s,f){S(s,e,f),o(e,i),o(i,E),S(s,u,f),S(s,r,f),o(r,d),o(d,g)},p(s,f){t=s,f&1&&q(e,"selected",!t[0].url.pathname.includes("about")),f&1&&q(r,"selected",t[0].url.pathname.includes("about"))},i(s){v||J(()=>{v=K(e,L,{duration:t[1]}),v.start()}),D||J(()=>{D=K(r,L,{duration:500}),D.start()})},o:N,d(s){s&&c(e),s&&c(u),s&&c(r)}}}function se(t){let e,i,E,v,u,r,d,g,D,s,f,k,m;function V(a,l){return l&1&&(f=null),f==null&&(f=!a[0].url.pathname.includes("project")),f?te:ee}let I=V(t,-1),b=I(t);return{c(){e=h("header"),i=h("div"),E=w(),v=h("div"),u=h("div"),r=h("div"),d=h("a"),g=A("omar nema"),D=w(),s=h("div"),b.c(),k=w(),m=h("div"),this.h()},l(a){e=_(a,"HEADER",{class:!0});var l=p(e);i=_(l,"DIV",{class:!0}),p(i).forEach(c),E=H(l),v=_(l,"DIV",{class:!0});var j=p(v);u=_(j,"DIV",{class:!0});var C=p(u);r=_(C,"DIV",{class:!0});var P=p(r);d=_(P,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=p(d);g=y(R,"omar nema"),R.forEach(c),P.forEach(c),C.forEach(c),D=H(j),s=_(j,"DIV",{class:!0});var T=p(s);b.l(T),T.forEach(c),j.forEach(c),k=H(l),m=_(l,"DIV",{class:!0}),p(m).forEach(c),l.forEach(c),this.h()},h(){n(i,"class","header-padding left svelte-1u45r45"),n(d,"sveltekit:prefetch",""),n(d,"href",W),n(d,"class","svelte-1u45r45"),n(r,"class","header-name svelte-1u45r45"),n(u,"class","name-holder svelte-1u45r45"),n(s,"class","header-nav svelte-1u45r45"),q(s,"split",t[0].url.pathname.includes("project")),n(v,"class","inner-header svelte-1u45r45"),n(m,"class","header-padding right svelte-1u45r45"),n(e,"class","svelte-1u45r45")},m(a,l){S(a,e,l),o(e,i),o(e,E),o(e,v),o(v,u),o(u,r),o(r,d),o(d,g),o(v,D),o(v,s),b.m(s,null),o(e,k),o(e,m)},p(a,[l]){I===(I=V(a,l))&&b?b.p(a,l):(b.d(1),b=I(a),b&&(b.c(),U(b,1),b.m(s,null))),l&1&&q(s,"split",a[0].url.pathname.includes("project"))},i(a){U(b)},o:N,d(a){a&&c(e),b.d()}}}function ae(t,e,i){let E,v,u;return Q(t,Z,r=>i(0,E=r)),Q(t,$,r=>i(1,v=r)),Q(t,x,r=>i(2,u=r)),[E,v,u]}class ie extends G{constructor(e){super();M(this,e,ae,se,O,{})}}export{ie as H,x as s,$ as t};
