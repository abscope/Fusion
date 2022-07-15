var app=function(){'use strict';function t(){}function n(t){return t();}function e(){return Object.create(null);}function r(t){t.forEach(n);}function o(t){return'function'==typeof t;}function s(t,n){return t!=t?n==n:t!==n||t&&'object'==typeof t||'function'==typeof t;}function l(t,n){t.appendChild(n);}function c(t,n,e){t.insertBefore(n,e||null);}function i(t){t.parentNode.removeChild(t);}function u(t){return document.createElement(t);}function a(t){return document.createTextNode(t);}function f(){return a(' ');}function d(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r);}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e);}function g(t,n,e,r){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,r?'important':'');}let m;function p(t){m=t;}const b=[],v=[],h=[],x=[],w=Promise.resolve();let y=!1;function k(t){h.push(t);}const _=new Set;let z=0;function S(){const t=m;do{for(;z<b.length;){const t=b[z];z++,p(t),E(t.$$);}for(p(null),b.length=0,z=0;v.length;)v.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];_.has(n)||(_.add(n),n());}h.length=0;}while(b.length);for(;x.length;)x.pop()();y=!1,_.clear(),p(t);}function E(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k);}}const M=new Set;function C(t,n){t&&t.i&&(M.delete(t),t.i(n));}function j(t,n,e,r){if(t&&t.o){if(M.has(t))return;M.add(t),undefined.c.push((()=>{M.delete(t),r&&(e&&t.d(1),r());})),t.o(n);}else r&&r();}function L(t){t&&t.c();}function T(t,e,s,l){const{fragment:c,on_mount:i,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,s),l||k((()=>{const e=i.map(n).filter(o);u?u.push(...e):r(e),t.$$.on_mount=[];})),a.forEach(k);}function B(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[]);}function H(t,n){-1===t.$$.dirty[0]&&(b.push(t),y||(y=!0,w.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31;}function q(n,o,s,l,c,u,a,f=[-1]){const d=m;p(n);const $=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};a&&a($.root);let g=!1;if($.ctx=s?s(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return $.ctx&&c($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&H(n,t)),e;})):[],$.update(),g=!0,r($.before_update),$.fragment=!!l&&l($.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes);}(o.target);$.fragment&&$.fragment.l(t),t.forEach(i);}else $.fragment&&$.fragment.c();o.intro&&C(n.$$.fragment),T(n,o.target,o.anchor,o.customElement),S();}p(d);}class A{$destroy(){B(this,1),this.$destroy=t;}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1);};}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1);}}function N(n){let e;return{c(){e=u('main');},m(t,n){c(t,e,n);},p:t,i:t,o:t,d(t){t&&i(e);}};}class P extends A{constructor(t){super(),q(this,t,null,N,s,{});}}function D(n){let e;return{c(){e=u('div'),e.innerHTML='<p>Feed Data Here</p>',$(e,'class','svelte-145wg76');},m(t,n){c(t,e,n);},p:t,i:t,o:t,d(t){t&&i(e);}};}class O extends A{constructor(t){super(),q(this,t,null,D,s,{});}}function F(n){let e;return{c(){e=u('main'),e.innerHTML='<button>Client</button> \n<button>Server</button>',$(e,'class','flex svelte-kt7vy4');},m(t,n){c(t,e,n);},p:t,i:t,o:t,d(t){t&&i(e);}};}class W extends A{constructor(t){super(),q(this,t,null,F,s,{});}}function G(n){let e,r,o,s,a,d,m,p;return s=new W({}),m=new O({}),{c(){e=u('main'),r=u('div'),o=u('div'),L(s.$$.fragment),a=f(),d=u('div'),L(m.$$.fragment),g(o,'background-color','rgb(0, 222, 0)'),g(o,'flex-grow','1'),g(o,'order','1'),g(d,'background-color','rgb(244, 0, 0)'),g(d,'flex-grow','4'),g(d,'order','2'),$(r,'class','flex svelte-htnbny');},m(t,n){c(t,e,n),l(e,r),l(r,o),T(s,o,null),l(r,a),l(r,d),T(m,d,null),p=!0;},p:t,i(t){p||(C(s.$$.fragment,t),C(m.$$.fragment,t),p=!0);},o(t){j(s.$$.fragment,t),j(m.$$.fragment,t),p=!1;},d(t){t&&i(e),B(s),B(m);}};}class U extends A{constructor(t){super(),q(this,t,null,G,s,{});}}function I(n){let e;return{c(){e=u('main'),e.innerHTML='<div class="flexWrap svelte-bhm4hz"><button class="exit">+</button> \n<button class="exit">+</button> \n<button class="exit">+</button><br/> \n<button class="exit">+</button> \n<button class="exit">+</button> \n<button class="exit">+</button></div>';},m(t,n){c(t,e,n);},p:t,i:t,o:t,d(t){t&&i(e);}};}class J extends A{constructor(t){super(),q(this,t,null,I,s,{});}}function K(n){let e;return{c(){e=u('main');},m(t,n){c(t,e,n);},p:t,i:t,o:t,d(t){t&&i(e);}};}class Q extends A{constructor(t){super(),q(this,t,null,K,s,{});}}function R(n){let e,r,o,s,a;return r=new J({}),s=new Q({}),{c(){e=u('main'),L(r.$$.fragment),o=f(),L(s.$$.fragment);},m(t,n){c(t,e,n),T(r,e,null),l(e,o),T(s,e,null),a=!0;},p:t,i(t){a||(C(r.$$.fragment,t),C(s.$$.fragment,t),a=!0);},o(t){j(r.$$.fragment,t),j(s.$$.fragment,t),a=!1;},d(t){t&&i(e),B(r),B(s);}};}class V extends A{constructor(t){super(),q(this,t,null,R,s,{});}}const X=[];const Y=function(n,e=t){let r;const o=new Set;function l(t){if(s(n,t)&&(n=t,r)){const t=!X.length;for(const t of o)t[1](),X.push(t,n);if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0;}}}return{set:l,update:function(t){l(t(n));},subscribe:function(s,c=t){const i=[s,c];return o.add(i),1===o.size&&(r=e(l)||t),s(n),()=>{o.delete(i),0===o.size&&(r(),r=null);};}};}('Waiting for Server to Start!');function Z(n){let e,r,o,s,g,m,p;return{c(){e=u('main'),r=u('button'),r.textContent='Start Server',o=f(),s=u('p'),g=a(n[0]),$(r,'class','launch');},m(t,i){c(t,e,i),l(e,r),l(e,o),l(e,s),l(s,g),m||(p=d(r,'click',n[2]),m=!0);},p(t,[n]){1&n&&function(t,n){n=''+n,t.wholeText!==n&&(t.data=n);}(g,t[0]);},i:t,o:t,d(t){t&&i(e),m=!1,p();}};}function tt(t,n,e){let r;Y.subscribe((t=>{e(0,r=t);}));const o=async()=>{Y.set(await window.api.getUrl()),window.api.isDevMode()&&console.log(window.api.isDevMode()+' '+r);};return[r,o,async()=>{o();}];}class nt extends A{constructor(t){super(),q(this,t,tt,Z,s,{});}}function et(n){let e;return{c(){e=u('main'),e.innerHTML='<button>Play</button> \n<button>Config</button> \n<button>Market</button> \n<button>Settings</button>',$(e,'class','flex svelte-1nghtz0');},m(t,n){c(t,e,n);},p:t,i:t,o:t,d(t){t&&i(e);}};}class rt extends A{constructor(t){super(),q(this,t,null,et,s,{});}}function ot(n){let e,o,s,a,g,m,p;return{c(){e=u('main'),o=u('div'),s=u('button'),s.textContent='❏',a=f(),g=u('button'),g.textContent='🞭',$(s,'class','exit svelte-1szqxjc'),$(g,'class','exit svelte-1szqxjc'),$(o,'class','flex svelte-1szqxjc');},m(t,r){c(t,e,r),l(e,o),l(o,s),l(o,a),l(o,g),m||(p=[d(s,'click',n[0]),d(g,'click',n[1])],m=!0);},p:t,i:t,o:t,d(t){t&&i(e),m=!1,r(p);}};}function st(t){return[()=>{window.api.titlebar('resize');},()=>window.api.titlebar('destroy')];}class lt extends A{constructor(t){super(),q(this,t,st,ot,s,{});}}function ct(n){let e,r,o,s,a,d,m,p,b,v,h,x,w,y,k,_,z,S,E,M,H,q,A,N,D,O,F,W,G,I;return p=new lt({}),y=new U({}),E=new V({}),A=new rt({}),O=new nt({}),G=new P({}),{c(){e=u('main'),r=u('link'),o=f(),s=u('link'),a=f(),d=u('div'),m=u('div'),L(p.$$.fragment),b=f(),v=u('div'),h=u('div'),x=u('p'),w=f(),L(y.$$.fragment),k=f(),_=u('div'),z=u('p'),S=f(),L(E.$$.fragment),M=f(),H=u('div'),q=u('div'),L(A.$$.fragment),N=f(),D=u('div'),L(O.$$.fragment),F=f(),W=u('div'),L(G.$$.fragment),$(r,'href','https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap'),$(r,'rel','stylesheet'),$(s,'rel','stylesheet'),$(s,'href','../src/style.css'),$(m,'id','titleBar'),g(m,'flex-shrink','2'),$(m,'class','svelte-1bvv3fz'),$(h,'id','leftBar'),g(h,'flex-grow','1'),g(h,'order','1'),$(h,'class','svelte-1bvv3fz'),$(_,'id','rightBar'),g(_,'flex-grow','1'),g(_,'order','3'),$(_,'class','svelte-1bvv3fz'),$(q,'id','tabBar'),g(q,'flex-shrink','2'),$(q,'class','svelte-1bvv3fz'),$(D,'id','page'),g(D,'flex-grow','10'),$(D,'class','svelte-1bvv3fz'),$(H,'class','pageFill svelte-1bvv3fz'),g(H,'flex-grow','2'),g(H,'order','2'),$(v,'class','container svelte-1bvv3fz'),g(v,'flex-grow','15'),$(W,'id','footer'),g(W,'flex-grow','1'),$(W,'class','svelte-1bvv3fz'),$(d,'class','high svelte-1bvv3fz'),$(e,'class','svelte-1bvv3fz');},m(t,n){c(t,e,n),l(e,r),l(e,o),l(e,s),l(e,a),l(e,d),l(d,m),T(p,m,null),l(d,b),l(d,v),l(v,h),l(h,x),l(h,w),T(y,h,null),l(v,k),l(v,_),l(_,z),l(_,S),T(E,_,null),l(v,M),l(v,H),l(H,q),T(A,q,null),l(H,N),l(H,D),T(O,D,null),l(d,F),l(d,W),T(G,W,null),I=!0;},p:t,i(t){I||(C(p.$$.fragment,t),C(y.$$.fragment,t),C(E.$$.fragment,t),C(A.$$.fragment,t),C(O.$$.fragment,t),C(G.$$.fragment,t),I=!0);},o(t){j(p.$$.fragment,t),j(y.$$.fragment,t),j(E.$$.fragment,t),j(A.$$.fragment,t),j(O.$$.fragment,t),j(G.$$.fragment,t),I=!1;},d(t){t&&i(e),B(p),B(y),B(E),B(A),B(O),B(G);}};}return new class extends A{constructor(t){super(),q(this,t,null,ct,s,{});}}({target:document.body});}();