import{d as B,a as D,b as V,e as _,f as r,g as l,h as L,k,F as U,r as O,o as I,s as F,_ as K}from"./index-BJJLLKPt.js";import{u as H}from"./useVoice-CMEqGq4p.js";const W=["src"],Y={class:"ipyc-design-page"},G={class:"visual-card"},X={class:"canvas-wrap"},j=70,q=45,z=50,J=50,Q=17.5,Z=21,x=60,tt=B({__name:"cartoon1",setup(at){const{voiceRef:E,audioSrc:M,showAudioStart:R,startVoiceAfterMounted:S,startVoiceByClick:h,stopVoiceBeforeRouteChange:P,handleVoiceEnded:b}=H("/yuehuabai/audio/5ipyc1.mp3");function N(){P(),F.push({name:"IPyCcartoon2"})}const i=O();let p=[],d=null,o=null;function u(s,t){const n=z+t*Math.cos(s),c=J+t*Math.sin(s);return{x:n,y:c}}function $(s){if(o?.sheet)try{o.sheet.insertRule(s,o.sheet.cssRules.length)}catch(t){console.warn("插入动画关键帧失败：",t)}}function w(){if(i.value)for(let s=0;s<j;s++){const t=Math.random()*2*Math.PI,n=Q+(Math.random()*2-1)*1.8,c=u(t,x),a=u(t,n),y=Math.random()*1,v=3+Math.random()*1,f=`black_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${f} {
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
          left: ${a.x}%;
          top: ${a.y}%;
          opacity: 1;
          transform: scale(1);
        }

        100% {
          left: ${a.x}%;
          top: ${a.y}%;
          opacity: 1;
          transform: scale(1);
        }
      }
    `;$(m);const e=document.createElement("div");e.className="particle-black",e.style.left=`${c.x}%`,e.style.top=`${c.y}%`,e.style.animation=`${f} ${v}s ease-out forwards`,e.style.animationDelay=`${y}s`,i.value.appendChild(e),p.push(e)}}function A(){if(i.value)for(let s=0;s<q;s++){const t=Math.random()*2*Math.PI,n=Z+(Math.random()*2-1)*1.5,c=u(t,x),a=u(t,n),y=2.5+Math.random()*1.2,v=2.8+Math.random()*1,f=`white_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${f} {
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
          left: ${a.x}%;
          top: ${a.y}%;
          opacity: 1;
          transform: scale(1);
        }

        80% {
          left: ${a.x}%;
          top: ${a.y}%;
          opacity: 1;
          transform: scale(0.85);
        }

        85% {
          left: ${a.x}%;
          top: ${a.y}%;
          opacity: 1;
          transform: scale(1.1);
        }

        90% {
          left: ${a.x}%;
          top: ${a.y}%;
          opacity: 1;
          transform: scale(0.95);
        }

        100% {
          left: ${a.x}%;
          top: ${a.y}%;
          opacity: 1;
          transform: scale(1);
        }
      }
    `;$(m);const e=document.createElement("div");e.className="particle-white",e.style.left=`${c.x}%`,e.style.top=`${c.y}%`,e.style.animation=`${f} ${v}s ease-out forwards`,e.style.animationDelay=`${y}s`,i.value.appendChild(e),p.push(e)}}function C(){p.forEach(s=>s.remove()),p=[]}function g(){C(),w(),A()}function T(){d&&clearInterval(d),g(),d=window.setInterval(()=>{g()},8e3)}return D(()=>{S(),o=document.createElement("style"),o.setAttribute("data-ipyc-particle-keyframes","true"),document.head.appendChild(o),T()}),V(()=>{d&&clearInterval(d),C(),o&&(o.remove(),o=null)}),(s,t)=>(I(),_(U,null,[r("audio",{ref_key:"voiceRef",ref:E,src:l(M),preload:"auto",onEnded:t[0]||(t[0]=(...n)=>l(b)&&l(b)(...n))},null,40,W),l(R)?(I(),_("button",{key:0,class:"audio-start-btn",type:"button",onClick:t[1]||(t[1]=(...n)=>l(h)&&l(h)(...n))}," 点击开始讲解 ")):L("",!0),r("button",{class:"ghost",type:"button",onClick:N}," 继续 "),r("main",Y,[t[4]||(t[4]=k('<section class="text-panel" data-v-c01cfcbe><div class="kicker" data-v-c01cfcbe>IPyC LAYER · DESIGN</div><h1 class="hero-title" data-v-c01cfcbe>IPyC 的设计</h1><p class="hero-subtitle" data-v-c01cfcbe> IPyC 层不是简单的一层碳，它需要形成 <strong data-v-c01cfcbe>高密度、连续、光滑</strong> 的沉积层，为后续 SiC 层提供可靠生长基础。 </p><div class="phase-list" data-v-c01cfcbe><div class="phase-card" data-v-c01cfcbe><strong data-v-c01cfcbe>① 高密度焦炭沉积</strong><span data-v-c01cfcbe> 高密度的焦炭沉积在缓冲层表面，逐渐形成致密、连续的内焦炭层。 </span></div><div class="phase-card" data-v-c01cfcbe><strong data-v-c01cfcbe>② 提供光滑沉积表面</strong><span data-v-c01cfcbe> 光滑稳定的 IPyC 表面，为碳化硅 SiC 层沉积提供更均匀的基础。 </span></div><div class="phase-card" data-v-c01cfcbe><strong data-v-c01cfcbe>③ 阻挡盐酸侵入内核</strong><span data-v-c01cfcbe> IPyC 可阻挡 SiC 沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </span></div></div></section>',1)),r("section",G,[t[3]||(t[3]=k('<div class="card-header" data-v-c01cfcbe><div data-v-c01cfcbe><div class="focus-badge" data-v-c01cfcbe><i class="fa-solid fa-crosshairs" data-v-c01cfcbe></i><span data-v-c01cfcbe>动态演示</span></div><h2 data-v-c01cfcbe>焦炭沉积 · SiC 沉积基础</h2></div><div class="phase-index" data-v-c01cfcbe>IPyC</div></div><div class="desc-box" data-v-c01cfcbe> 高密度的焦炭沉积在缓冲层上，为碳化硅沉积提供光滑表面；同时可阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </div>',2)),r("div",X,[r("div",{class:"canvas",ref_key:"canvasRef",ref:i},[...t[2]||(t[2]=[r("div",{class:"center-circle"},null,-1),r("div",{class:"ring-label inner-label"},"缓冲层",-1),r("div",{class:"ring-label outer-label"},"IPyC 沉积层",-1)])],512)])])])],64))}}),ct=K(tt,[["__scopeId","data-v-c01cfcbe"]]);export{ct as default};
