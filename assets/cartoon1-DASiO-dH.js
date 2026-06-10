import{d as k,o as P,h as E,c as M,e as N,f as c,b as $,F as S,i as R,a as w,j as A,r as T,_ as D}from"./index-DdpS71cb.js";const B={class:"ipyc-design-page"},L={class:"visual-card"},U={class:"canvas-wrap"},O=70,F=45,K=50,V=50,H=17.5,W=21,g=60,Y=k({__name:"cartoon1",setup(j){function C(){A.push({name:"IPyCcartoon2"})}const l=R();let p=[],i=null,o=null;function v(s,a){const r=K+a*Math.cos(s),n=V+a*Math.sin(s);return{x:r,y:n}}function u(s){if(o?.sheet)try{o.sheet.insertRule(s,o.sheet.cssRules.length)}catch(a){console.warn("插入动画关键帧失败：",a)}}function _(){if(l.value)for(let s=0;s<O;s++){const a=Math.random()*2*Math.PI,r=H+(Math.random()*2-1)*1.8,n=v(a,g),t=v(a,r),f=Math.random()*1,y=3+Math.random()*1,d=`black_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${d} {
        0% {
          left: ${n.x}%;
          top: ${n.y}%;
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
    `;u(m);const e=document.createElement("div");e.className="particle-black",e.style.left=`${n.x}%`,e.style.top=`${n.y}%`,e.style.animation=`${d} ${y}s ease-out forwards`,e.style.animationDelay=`${f}s`,l.value.appendChild(e),p.push(e)}}function I(){if(l.value)for(let s=0;s<F;s++){const a=Math.random()*2*Math.PI,r=W+(Math.random()*2-1)*1.5,n=v(a,g),t=v(a,r),f=2.5+Math.random()*1.2,y=2.8+Math.random()*1,d=`white_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${d} {
        0% {
          left: ${n.x}%;
          top: ${n.y}%;
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
    `;u(m);const e=document.createElement("div");e.className="particle-white",e.style.left=`${n.x}%`,e.style.top=`${n.y}%`,e.style.animation=`${d} ${y}s ease-out forwards`,e.style.animationDelay=`${f}s`,l.value.appendChild(e),p.push(e)}}function h(){p.forEach(s=>s.remove()),p=[]}function b(){h(),_(),I()}function x(){i&&clearInterval(i),b(),i=window.setInterval(()=>{b()},8e3)}return P(()=>{o=document.createElement("style"),o.setAttribute("data-ipyc-particle-keyframes","true"),document.head.appendChild(o),x()}),E(()=>{i&&clearInterval(i),h(),o&&(o.remove(),o=null)}),(s,a)=>{const r=T("Pointer");return w(),M(S,null,[N(r),c("button",{class:"ghost",type:"button",onClick:C}," 继续 "),c("main",B,[a[2]||(a[2]=$('<section class="text-panel" data-v-a750b886><div class="kicker" data-v-a750b886>IPyC LAYER · DESIGN</div><h1 class="hero-title" data-v-a750b886>IPyC 的设计</h1><p class="hero-subtitle" data-v-a750b886> IPyC 层不是简单的一层碳，它需要形成 <strong data-v-a750b886>高密度、连续、光滑</strong> 的沉积层，为后续 SiC 层提供可靠生长基础。 </p><div class="phase-list" data-v-a750b886><div class="phase-card" data-v-a750b886><strong data-v-a750b886>① 高密度焦炭沉积</strong><span data-v-a750b886> 高密度的焦炭沉积在缓冲层表面，逐渐形成致密、连续的内焦炭层。 </span></div><div class="phase-card" data-v-a750b886><strong data-v-a750b886>② 提供光滑沉积表面</strong><span data-v-a750b886> 光滑稳定的 IPyC 表面，为碳化硅 SiC 层沉积提供更均匀的基础。 </span></div><div class="phase-card" data-v-a750b886><strong data-v-a750b886>③ 阻挡盐酸侵入内核</strong><span data-v-a750b886> IPyC 可阻挡 SiC 沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </span></div></div></section>',1)),c("section",L,[a[1]||(a[1]=$('<div class="card-header" data-v-a750b886><div data-v-a750b886><div class="focus-badge" data-v-a750b886><i class="fa-solid fa-crosshairs" data-v-a750b886></i><span data-v-a750b886>动态演示</span></div><h2 data-v-a750b886>焦炭沉积 · SiC 沉积基础</h2></div><div class="phase-index" data-v-a750b886>IPyC</div></div><div class="desc-box" data-v-a750b886> 高密度的焦炭沉积在缓冲层上，为碳化硅沉积提供光滑表面；同时可阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </div>',2)),c("div",U,[c("div",{class:"canvas",ref_key:"canvasRef",ref:l},[...a[0]||(a[0]=[c("div",{class:"center-circle"},null,-1),c("div",{class:"ring-label inner-label"},"缓冲层",-1),c("div",{class:"ring-label outer-label"},"IPyC 沉积层",-1)])],512)])])])],64)}}}),X=D(Y,[["__scopeId","data-v-a750b886"]]);export{X as default};
