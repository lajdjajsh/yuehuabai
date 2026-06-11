import{d as B,o as D,h as V,c as _,f as r,i,j as L,b as k,F as U,k as O,a as I,l as F,_ as K}from"./index-c63EmdnY.js";import{u as H}from"./useVoice-BvXoz2ou.js";const W=["src"],Y={class:"ipyc-design-page"},j={class:"visual-card"},G={class:"canvas-wrap"},X=70,q=45,z=50,J=50,Q=17.5,Z=21,x=60,aa=B({__name:"cartoon1",setup(ta){const{voiceRef:E,audioSrc:M,showAudioStart:R,startVoiceAfterMounted:S,startVoiceByClick:h,stopVoiceBeforeRouteChange:P,handleVoiceEnded:b}=H("/yuehuabai/audio/security-first.mp3");function N(){P(),F.push({name:"IPyCcartoon2"})}const l=O();let p=[],d=null,n=null;function u(s,a){const c=z+a*Math.cos(s),o=J+a*Math.sin(s);return{x:c,y:o}}function $(s){if(n?.sheet)try{n.sheet.insertRule(s,n.sheet.cssRules.length)}catch(a){console.warn("插入动画关键帧失败：",a)}}function w(){if(l.value)for(let s=0;s<X;s++){const a=Math.random()*2*Math.PI,c=Q+(Math.random()*2-1)*1.8,o=u(a,x),t=u(a,c),y=Math.random()*1,v=3+Math.random()*1,f=`black_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
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
    `;$(m);const e=document.createElement("div");e.className="particle-black",e.style.left=`${o.x}%`,e.style.top=`${o.y}%`,e.style.animation=`${f} ${v}s ease-out forwards`,e.style.animationDelay=`${y}s`,l.value.appendChild(e),p.push(e)}}function A(){if(l.value)for(let s=0;s<q;s++){const a=Math.random()*2*Math.PI,c=Z+(Math.random()*2-1)*1.5,o=u(a,x),t=u(a,c),y=2.5+Math.random()*1.2,v=2.8+Math.random()*1,f=`white_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
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
    `;$(m);const e=document.createElement("div");e.className="particle-white",e.style.left=`${o.x}%`,e.style.top=`${o.y}%`,e.style.animation=`${f} ${v}s ease-out forwards`,e.style.animationDelay=`${y}s`,l.value.appendChild(e),p.push(e)}}function C(){p.forEach(s=>s.remove()),p=[]}function g(){C(),w(),A()}function T(){d&&clearInterval(d),g(),d=window.setInterval(()=>{g()},8e3)}return D(()=>{S(),n=document.createElement("style"),n.setAttribute("data-ipyc-particle-keyframes","true"),document.head.appendChild(n),T()}),V(()=>{d&&clearInterval(d),C(),n&&(n.remove(),n=null)}),(s,a)=>(I(),_(U,null,[r("audio",{ref_key:"voiceRef",ref:E,src:i(M),preload:"auto",onEnded:a[0]||(a[0]=(...c)=>i(b)&&i(b)(...c))},null,40,W),i(R)?(I(),_("button",{key:0,class:"audio-start-btn",type:"button",onClick:a[1]||(a[1]=(...c)=>i(h)&&i(h)(...c))}," 点击开始讲解 ")):L("",!0),r("button",{class:"ghost",type:"button",onClick:N}," 继续 "),r("main",Y,[a[4]||(a[4]=k('<section class="text-panel" data-v-ca56f4ba><div class="kicker" data-v-ca56f4ba>IPyC LAYER · DESIGN</div><h1 class="hero-title" data-v-ca56f4ba>IPyC 的设计</h1><p class="hero-subtitle" data-v-ca56f4ba> IPyC 层不是简单的一层碳，它需要形成 <strong data-v-ca56f4ba>高密度、连续、光滑</strong> 的沉积层，为后续 SiC 层提供可靠生长基础。 </p><div class="phase-list" data-v-ca56f4ba><div class="phase-card" data-v-ca56f4ba><strong data-v-ca56f4ba>① 高密度焦炭沉积</strong><span data-v-ca56f4ba> 高密度的焦炭沉积在缓冲层表面，逐渐形成致密、连续的内焦炭层。 </span></div><div class="phase-card" data-v-ca56f4ba><strong data-v-ca56f4ba>② 提供光滑沉积表面</strong><span data-v-ca56f4ba> 光滑稳定的 IPyC 表面，为碳化硅 SiC 层沉积提供更均匀的基础。 </span></div><div class="phase-card" data-v-ca56f4ba><strong data-v-ca56f4ba>③ 阻挡盐酸侵入内核</strong><span data-v-ca56f4ba> IPyC 可阻挡 SiC 沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </span></div></div></section>',1)),r("section",j,[a[3]||(a[3]=k('<div class="card-header" data-v-ca56f4ba><div data-v-ca56f4ba><div class="focus-badge" data-v-ca56f4ba><i class="fa-solid fa-crosshairs" data-v-ca56f4ba></i><span data-v-ca56f4ba>动态演示</span></div><h2 data-v-ca56f4ba>焦炭沉积 · SiC 沉积基础</h2></div><div class="phase-index" data-v-ca56f4ba>IPyC</div></div><div class="desc-box" data-v-ca56f4ba> 高密度的焦炭沉积在缓冲层上，为碳化硅沉积提供光滑表面；同时可阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </div>',2)),r("div",G,[r("div",{class:"canvas",ref_key:"canvasRef",ref:l},[...a[2]||(a[2]=[r("div",{class:"center-circle"},null,-1),r("div",{class:"ring-label inner-label"},"缓冲层",-1),r("div",{class:"ring-label outer-label"},"IPyC 沉积层",-1)])],512)])])])],64))}}),oa=K(aa,[["__scopeId","data-v-ca56f4ba"]]);export{oa as default};
