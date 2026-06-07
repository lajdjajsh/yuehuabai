import{d as M,o as E,k as R,c as w,e as v,f as r,w as I,F as N,r as P,h as T,a as A,j as D,P as S,_ as B}from"./index-Bdl6Wu2e.js";const L={class:"demo-container"},U={class:"card"},b={class:"desc-box"},O={class:"canvas-wrap"},F=70,K=45,V=50,H=50,W=17.5,j=21,x=60,X=M({__name:"cartoon1",setup(Y){const l=P();let m=[],i=null,n=null;function d(s,t){const c=V+t*Math.cos(s),o=H+t*Math.sin(s);return{x:c,y:o}}function $(s){if(n?.sheet)try{n.sheet.insertRule(s,n.sheet.cssRules.length)}catch(t){console.warn("插入动画关键帧失败：",t)}}function k(){if(l.value)for(let s=0;s<F;s++){const t=Math.random()*2*Math.PI,c=W+(Math.random()*2-1)*1.8,o=d(t,x),e=d(t,c),y=Math.random()*1,p=3+Math.random()*1,f=`black_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,u=`
      @keyframes ${f} {
        0% {
          left: ${o.x}%;
          top: ${o.y}%;
          opacity: 0;
          transform: scale(0.3);
        }

        10% {
          opacity: 1;
          transform: scale(1);
        }

        80% {
          left: ${e.x}%;
          top: ${e.y}%;
          opacity: 1;
          transform: scale(1);
        }

        100% {
          left: ${e.x}%;
          top: ${e.y}%;
          opacity: 1;
          transform: scale(1);
        }
      }
    `;$(u);const a=document.createElement("div");a.className="particle-black",a.style.left=`${o.x}%`,a.style.top=`${o.y}%`,a.style.animation=`${f} ${p}s ease-out forwards`,a.style.animationDelay=`${y}s`,l.value.appendChild(a),m.push(a)}}function C(){if(l.value)for(let s=0;s<K;s++){const t=Math.random()*2*Math.PI,c=j+(Math.random()*2-1)*1.5,o=d(t,x),e=d(t,c),y=2.5+Math.random()*1.2,p=2.8+Math.random()*1,f=`white_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,u=`
      @keyframes ${f} {
        0% {
          left: ${o.x}%;
          top: ${o.y}%;
          opacity: 0;
          transform: scale(0.3);
        }

        10% {
          opacity: 1;
          transform: scale(1);
        }

        75% {
          left: ${e.x}%;
          top: ${e.y}%;
          opacity: 1;
          transform: scale(1);
        }

        80% {
          left: ${e.x}%;
          top: ${e.y}%;
          opacity: 1;
          transform: scale(0.85);
        }

        85% {
          left: ${e.x}%;
          top: ${e.y}%;
          opacity: 1;
          transform: scale(1.1);
        }

        90% {
          left: ${e.x}%;
          top: ${e.y}%;
          opacity: 1;
          transform: scale(0.95);
        }

        100% {
          left: ${e.x}%;
          top: ${e.y}%;
          opacity: 1;
          transform: scale(1);
        }
      }
    `;$(u);const a=document.createElement("div");a.className="particle-white",a.style.left=`${o.x}%`,a.style.top=`${o.y}%`,a.style.animation=`${f} ${p}s ease-out forwards`,a.style.animationDelay=`${y}s`,l.value.appendChild(a),m.push(a)}}function _(){m.forEach(s=>s.remove()),m=[]}function h(){_(),k(),C()}function g(){i&&clearInterval(i),h(),i=window.setInterval(()=>{h()},8e3)}return E(()=>{n=document.createElement("style"),n.setAttribute("data-ipyc-particle-keyframes","true"),document.head.appendChild(n),g()}),R(()=>{i&&clearInterval(i),_(),n&&(n.remove(),n=null)}),(s,t)=>{const c=T("RouterLink");return A(),w(N,null,[v(S),r("div",L,[t[3]||(t[3]=r("div",{class:"page-title"},"IPyC 的设计",-1)),r("div",U,[r("div",b,[t[1]||(t[1]=r("span",null," 高密度的焦炭沉积在缓冲层上，为碳化硅沉积提供光滑表面； 同时可阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 ",-1)),v(c,{to:{name:"IPyCcartoon2"},class:"continue-link _target"},{default:I(()=>[...t[0]||(t[0]=[D(" 继续 ",-1)])]),_:1})]),r("div",O,[r("div",{class:"canvas",ref_key:"canvasRef",ref:l},[...t[2]||(t[2]=[r("div",{class:"center-circle"},null,-1)])],512)])])])],64)}}}),z=B(X,[["__scopeId","data-v-49755e2f"]]);export{z as default};
