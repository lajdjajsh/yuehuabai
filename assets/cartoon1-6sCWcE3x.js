import{d as M,o as R,k as E,c as I,e as _,f as l,j as v,w as N,F as w,r as P,h as T,a as A,P as D,_ as S}from"./index-Bp_zbsaL.js";const B={class:"demo-container"},L={class:"card"},U=70,b=45,O=50,F=50,V=17.5,H=21,x=60,K=M({__name:"cartoon1",setup(W){const c=P();let f=[],i=null,o=null;function d(s,t){const r=O+t*Math.cos(s),n=F+t*Math.sin(s);return{x:r,y:n}}function C(){if(c.value)for(let s=0;s<U;s++){const t=Math.random()*2*Math.PI,r=V+(Math.random()*2-1)*1.8,n=d(t,x),e=d(t,r),y=Math.random()*1,p=3+Math.random()*1,m=`black_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,u=`
      @keyframes ${m} {
        0% { left: ${n.x}%; top: ${n.y}%; opacity: 0; transform: scale(0.3); }
        10% { opacity: 1; transform: scale(1); }
        80% { left: ${e.x}%; top: ${e.y}%; opacity: 1; transform: scale(1); }
        100% { left: ${e.x}%; top: ${e.y}%; opacity: 1; transform: scale(1); }
      }
    `;o&&o.sheet?.insertRule(u,o.sheet.cssRules.length);const a=document.createElement("div");a.className="particle-black",a.style.left=`${n.x}%`,a.style.top=`${n.y}%`,a.style.animation=`${m} ${p}s ease-out forwards`,a.style.animationDelay=`${y}s`,c.value.appendChild(a),f.push(a)}}function g(){if(c.value)for(let s=0;s<b;s++){const t=Math.random()*2*Math.PI,r=H+(Math.random()*2-1)*1.5,n=d(t,x),e=d(t,r),y=2.5+Math.random()*1.2,p=2.8+Math.random()*1,m=`white_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,u=`
      @keyframes ${m} {
        0% { left: ${n.x}%; top: ${n.y}%; opacity: 0; transform: scale(0.3); }
        10% { opacity: 1; transform: scale(1); }
        75% { left: ${e.x}%; top: ${e.y}%; opacity: 1; transform: scale(1); }
        80% { left: ${e.x}%; top: ${e.y}%; opacity: 1; transform: scale(0.85); }
        85% { left: ${e.x}%; top: ${e.y}%; opacity: 1; transform: scale(1.1); }
        90% { left: ${e.x}%; top: ${e.y}%; opacity: 1; transform: scale(0.95); }
        100% { left: ${e.x}%; top: ${e.y}%; opacity: 1; transform: scale(1); }
      }
    `;o&&o.sheet?.insertRule(u,o.sheet.cssRules.length);const a=document.createElement("div");a.className="particle-white",a.style.left=`${n.x}%`,a.style.top=`${n.y}%`,a.style.animation=`${m} ${p}s ease-out forwards`,a.style.animationDelay=`${y}s`,c.value.appendChild(a),f.push(a)}}function $(){f.forEach(s=>s.remove()),f=[]}function h(){$(),C(),g()}function k(){i&&clearInterval(i),h(),i=window.setInterval(()=>{h()},8e3)}return R(()=>{o=document.createElement("style"),document.head.appendChild(o),k()}),E(()=>{i&&clearInterval(i),$(),o&&(o.remove(),o=null)}),(s,t)=>{const r=T("RouterLink");return A(),I(w,null,[_(D),l("div",B,[l("div",L,[t[3]||(t[3]=l("h1",null,"IPyC的设计",-1)),l("h2",null,[t[1]||(t[1]=v("高密度的焦炭沉积在缓冲层上，不仅为碳化硅的沉积提供光滑表面，也可以阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核与铀产生反应，将铀带出污染层。",-1)),_(r,{to:{name:"IPyCcartoon2"},class:"_target"},{default:N(()=>[...t[0]||(t[0]=[v("(继续)",-1)])]),_:1})]),l("div",{class:"canvas",ref_key:"canvasRef",ref:c},[...t[2]||(t[2]=[l("div",{class:"center-circle"},null,-1)])],512)])])],64)}}}),X=S(K,[["__scopeId","data-v-21292c71"]]);export{X as default};
