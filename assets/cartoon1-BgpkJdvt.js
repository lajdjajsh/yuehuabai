import{d as k,o as P,y as E,c as M,e as N,f as o,b as $,F as S,r as R,a as w,v as A,P as T,_ as D}from"./index-SnunqhYP.js";const B={class:"ipyc-design-page"},L={class:"visual-card"},U={class:"canvas-wrap"},O=70,F=45,K=50,V=50,H=17.5,W=21,g=60,Y=k({__name:"cartoon1",setup(G){function C(){A.push({name:"IPyCcartoon2"})}const d=R();let p=[],r=null,n=null;function v(s,a){const l=K+a*Math.cos(s),c=V+a*Math.sin(s);return{x:l,y:c}}function u(s){if(n?.sheet)try{n.sheet.insertRule(s,n.sheet.cssRules.length)}catch(a){console.warn("插入动画关键帧失败：",a)}}function _(){if(d.value)for(let s=0;s<O;s++){const a=Math.random()*2*Math.PI,l=H+(Math.random()*2-1)*1.8,c=v(a,g),t=v(a,l),f=Math.random()*1,y=3+Math.random()*1,i=`black_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${i} {
        0% {
          left: ${c.x}%;
          top: ${c.y}%;
          opacity: 0;
          transform: scale(0.3);
        }

        10% {
          opacity: 1;
          transform: scale(1);
        }

        80% {
          left: ${t.x}%;
          top: ${t.y}%;
          opacity: 1;
          transform: scale(1);
        }

        100% {
          left: ${t.x}%;
          top: ${t.y}%;
          opacity: 1;
          transform: scale(1);
        }
      }
    `;u(m);const e=document.createElement("div");e.className="particle-black",e.style.left=`${c.x}%`,e.style.top=`${c.y}%`,e.style.animation=`${i} ${y}s ease-out forwards`,e.style.animationDelay=`${f}s`,d.value.appendChild(e),p.push(e)}}function I(){if(d.value)for(let s=0;s<F;s++){const a=Math.random()*2*Math.PI,l=W+(Math.random()*2-1)*1.5,c=v(a,g),t=v(a,l),f=2.5+Math.random()*1.2,y=2.8+Math.random()*1,i=`white_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${i} {
        0% {
          left: ${c.x}%;
          top: ${c.y}%;
          opacity: 0;
          transform: scale(0.3);
        }

        10% {
          opacity: 1;
          transform: scale(1);
        }

        75% {
          left: ${t.x}%;
          top: ${t.y}%;
          opacity: 1;
          transform: scale(1);
        }

        80% {
          left: ${t.x}%;
          top: ${t.y}%;
          opacity: 1;
          transform: scale(0.85);
        }

        85% {
          left: ${t.x}%;
          top: ${t.y}%;
          opacity: 1;
          transform: scale(1.1);
        }

        90% {
          left: ${t.x}%;
          top: ${t.y}%;
          opacity: 1;
          transform: scale(0.95);
        }

        100% {
          left: ${t.x}%;
          top: ${t.y}%;
          opacity: 1;
          transform: scale(1);
        }
      }
    `;u(m);const e=document.createElement("div");e.className="particle-white",e.style.left=`${c.x}%`,e.style.top=`${c.y}%`,e.style.animation=`${i} ${y}s ease-out forwards`,e.style.animationDelay=`${f}s`,d.value.appendChild(e),p.push(e)}}function h(){p.forEach(s=>s.remove()),p=[]}function b(){h(),_(),I()}function x(){r&&clearInterval(r),b(),r=window.setInterval(()=>{b()},8e3)}return P(()=>{n=document.createElement("style"),n.setAttribute("data-ipyc-particle-keyframes","true"),document.head.appendChild(n),x()}),E(()=>{r&&clearInterval(r),h(),n&&(n.remove(),n=null)}),(s,a)=>(w(),M(S,null,[N(T),o("button",{class:"ghost",type:"button",onClick:C}," 继续 "),o("main",B,[a[2]||(a[2]=$('<section class="text-panel" data-v-dc81cdba><div class="kicker" data-v-dc81cdba>IPyC LAYER · DESIGN</div><h1 class="hero-title" data-v-dc81cdba>IPyC 的设计</h1><p class="hero-subtitle" data-v-dc81cdba> IPyC 层不是简单的一层碳，它需要形成 <strong data-v-dc81cdba>高密度、连续、光滑</strong> 的沉积层，为后续 SiC 层提供可靠生长基础。 </p><div class="phase-list" data-v-dc81cdba><div class="phase-card" data-v-dc81cdba><strong data-v-dc81cdba>① 高密度焦炭沉积</strong><span data-v-dc81cdba> 高密度的焦炭沉积在缓冲层表面，逐渐形成致密、连续的内焦炭层。 </span></div><div class="phase-card" data-v-dc81cdba><strong data-v-dc81cdba>② 提供光滑沉积表面</strong><span data-v-dc81cdba> 光滑稳定的 IPyC 表面，为碳化硅 SiC 层沉积提供更均匀的基础。 </span></div><div class="phase-card" data-v-dc81cdba><strong data-v-dc81cdba>③ 阻挡盐酸侵入内核</strong><span data-v-dc81cdba> IPyC 可阻挡 SiC 沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </span></div></div></section>',1)),o("section",L,[a[1]||(a[1]=$('<div class="card-header" data-v-dc81cdba><div data-v-dc81cdba><div class="focus-badge" data-v-dc81cdba><i class="fa-solid fa-crosshairs" data-v-dc81cdba></i><span data-v-dc81cdba>动态演示</span></div><h2 data-v-dc81cdba>焦炭沉积 · SiC 沉积基础</h2></div><div class="phase-index" data-v-dc81cdba>IPyC</div></div><div class="desc-box" data-v-dc81cdba> 高密度的焦炭沉积在缓冲层上，为碳化硅沉积提供光滑表面；同时可阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </div>',2)),o("div",U,[o("div",{class:"canvas",ref_key:"canvasRef",ref:d},[...a[0]||(a[0]=[o("div",{class:"center-circle"},null,-1),o("div",{class:"ring-label inner-label"},"缓冲层",-1),o("div",{class:"ring-label outer-label"},"IPyC 沉积层",-1)])],512)])])])],64))}}),j=D(Y,[["__scopeId","data-v-dc81cdba"]]);export{j as default};
