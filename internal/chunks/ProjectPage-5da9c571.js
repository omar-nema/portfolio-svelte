import{S,i as C,s as H,v as l,j as I,e as P,w as u,l as v,c as p,a as $,d as g,b,x as _,f as w,I as q,p as d,n as h,A as k}from"./vendor-df4f0e23.js";import{H as A}from"./Header-e19188a3.js";import{C as D,I as E}from"./InfoSection-c2742c17.js";function V(o){let n,r,i,a,m,f,t;return n=new A({}),a=new D({props:{imgs:o[0]}}),f=new E({props:{description:o[2],info:o[1],link:o[3]}}),{c(){l(n.$$.fragment),r=I(),i=P("div"),l(a.$$.fragment),m=I(),l(f.$$.fragment),this.h()},l(e){u(n.$$.fragment,e),r=v(e),i=p(e,"DIV",{class:!0});var s=$(i);u(a.$$.fragment,s),m=v(s),u(f.$$.fragment,s),s.forEach(g),this.h()},h(){b(i,"class","container")},m(e,s){_(n,e,s),w(e,r,s),w(e,i,s),_(a,i,null),q(i,m),_(f,i,null),t=!0},p(e,[s]){const j={};s&1&&(j.imgs=e[0]),a.$set(j);const c={};s&4&&(c.description=e[2]),s&2&&(c.info=e[1]),s&8&&(c.link=e[3]),f.$set(c)},i(e){t||(d(n.$$.fragment,e),d(a.$$.fragment,e),d(f.$$.fragment,e),t=!0)},o(e){h(n.$$.fragment,e),h(a.$$.fragment,e),h(f.$$.fragment,e),t=!1},d(e){k(n,e),e&&g(r),e&&g(i),k(a),k(f)}}}function y(o,n,r){let{imgs:i=[]}=n,{info:a}=n,{desc:m=[]}=n,{link:f=null}=n;return o.$$set=t=>{"imgs"in t&&r(0,i=t.imgs),"info"in t&&r(1,a=t.info),"desc"in t&&r(2,m=t.desc),"link"in t&&r(3,f=t.link)},[i,a,m,f]}class G extends S{constructor(n){super();C(this,n,y,V,H,{imgs:0,info:1,desc:2,link:3})}}export{G as P};