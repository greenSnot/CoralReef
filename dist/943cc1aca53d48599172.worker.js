!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);const o=[0,0,1,1/3,0,1/3,1,0],n=o.map((t,e)=>e%2?t+1/3:t),c={x:n,y:o.map((t,e)=>e%2?t+2/3:t),z:n,"-x":n,"-y":o,"-z":n},s=[0,1,2,0,3,1],a={x:[.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,-.5],y:[-.5,.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,.5],z:[-.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5],"-x":[-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5],"-y":[-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5],"-z":[.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,-.5]},f=[1,1,1],l=[.3,.3,.3],u=new Array(16);(()=>{const t=[0,0,1,0];for(;t.length;){const e=t.shift(),r=t.shift();4!==r?(t.push(e+(1<<r),r+1),t.push(e,r+1)):(u[e]=[],[0,1,2,3].forEach(t=>{u[e].push(...(e&1<<t)>>t?f:l)}))}})();const i=t=>[15&t,(255&t)>>4,t>>8],y=t=>t[2]<<8|t[1]<<4|t[0],p=(t,e=!0)=>{const[[r,o],[n,f],[l,p]]=((t,e=!0)=>{const r=6*t.reduce((t,e)=>t+(e?1:0),0),o=new Float32Array(4*r*3);let n=0;const s=new Float32Array(4*r*3);let f=0;const l=new Float32Array(4*r*2);let p=0;const h={x:22,y:16,z:14,"-x":4,"-y":10,"-z":12};Object.keys(h).forEach(t=>{h[t]=1<<h[t]});const d={x:[[19,20],[21,24,25],[23,25,26],[18,19]],y:[[6,7,15],[17,26,25],[15,24,25],[7,8,17]],z:[[11,20],[17,23,26],[5,8,17],[2,11]]};Object.keys(d).forEach(t=>{d[t]=d[t].map(t=>t.reduce((t,e)=>t|=1<<e,0))}),d["-x"]=[-1,-1,-1,-1],d["-y"]=[-1,-1,-1,-1],d["-z"]=[-1,-1,-1,-1];const x=Object.keys(d);let b;for(let r=0;r<t.length;++r){const m=t[r],[z,E,w]=i(r);let O=0;const g=t=>t>=0&&t<16,j=t=>0===t||15===t,v=j(z)||j(E)||j(w);if(0===z)for(let e=-1,r=0;e<2;++e)for(let o=-1;o<2;++o)for(let n=-1;n<2;++n,++r)(!v||g(z+e)&&g(E+o)&&g(w+n))&&(O|=(t[y([z+e,E+o,w+n])]?1:0)<<r);else{O=b>>9;for(let e=-1,r=18;e<2;++e)for(let o=-1;o<2;++o,++r)(!v||g(z+1)&&g(E+e)&&g(w+o))&&(O|=(t[y([z+1,E+e,w+o])]?1:0)<<r)}if(b=O,!m)continue;const A=[z,E,w].map(t=>1*t+.5);x.forEach(t=>{O&h[t]||(a[t].forEach((t,e)=>{s[f++]=t+A[e%3]}),c[t].forEach(t=>{l[p++]=t}),e&&u[[0,1,2,3].reduce((e,r)=>e|=(O&d[t][r]?0:1)<<r,0)].forEach(t=>{o[n++]=t}))})}return[[s,f],[o,e?n:f],[l,p]]})(t,e),h=6*(o/3/4),d=new Uint16Array(h);for(let t=0;t<h;++t)d[t]=4*Math.floor(t/6)+s[t%6];const x=new Float32Array(o);for(let t=0;t<o;++t)x[t]=t%3==1?1:0;return{position:[r,3],normal:[x,3],color:[n,3],index:[d,1],uv:[l,2]}},h=self;h.addEventListener("message",t=>{const e=t.data;h.postMessage(p(e))})}]);