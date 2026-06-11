import{d as B,o as D,h as V,c as _,f as c,i as l,j as L,b as k,F as U,k as O,a as I,l as F,_ as K}from"./index-Se5WlZ9f.js";import{u as H}from"./useVoice-BY39mUzg.js";const W=["src"],Y={class:"ipyc-design-page"},j={class:"visual-card"},G={class:"canvas-wrap"},X=70,q=45,z=50,J=50,Q=17.5,Z=21,x=60,tt=B({__name:"cartoon1",setup(at){const{voiceRef:E,audioSrc:M,showAudioStart:R,startVoiceAfterMounted:S,startVoiceByClick:h,stopVoiceBeforeRouteChange:P,handleVoiceEnded:b}=H("/audio/security-first.mp3");function N(){P(),F.push({name:"IPyCcartoon2"})}const i=O();let f=[],d=null,n=null;function u(s,t){const r=z+t*Math.cos(s),o=J+t*Math.sin(s);return{x:r,y:o}}function $(s){if(n?.sheet)try{n.sheet.insertRule(s,n.sheet.cssRules.length)}catch(t){console.warn("插入动画关键帧失败：",t)}}function w(){if(i.value)for(let s=0;s<X;s++){const t=Math.random()*2*Math.PI,r=Q+(Math.random()*2-1)*1.8,o=u(t,x),a=u(t,r),v=Math.random()*1,y=3+Math.random()*1,p=`black_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${p} {
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
    `;$(m);const e=document.createElement("div");e.className="particle-black",e.style.left=`${o.x}%`,e.style.top=`${o.y}%`,e.style.animation=`${p} ${y}s ease-out forwards`,e.style.animationDelay=`${v}s`,i.value.appendChild(e),f.push(e)}}function A(){if(i.value)for(let s=0;s<q;s++){const t=Math.random()*2*Math.PI,r=Z+(Math.random()*2-1)*1.5,o=u(t,x),a=u(t,r),v=2.5+Math.random()*1.2,y=2.8+Math.random()*1,p=`white_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
      @keyframes ${p} {
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
    `;$(m);const e=document.createElement("div");e.className="particle-white",e.style.left=`${o.x}%`,e.style.top=`${o.y}%`,e.style.animation=`${p} ${y}s ease-out forwards`,e.style.animationDelay=`${v}s`,i.value.appendChild(e),f.push(e)}}function C(){f.forEach(s=>s.remove()),f=[]}function g(){C(),w(),A()}function T(){d&&clearInterval(d),g(),d=window.setInterval(()=>{g()},8e3)}return D(()=>{S(),n=document.createElement("style"),n.setAttribute("data-ipyc-particle-keyframes","true"),document.head.appendChild(n),T()}),V(()=>{d&&clearInterval(d),C(),n&&(n.remove(),n=null)}),(s,t)=>(I(),_(U,null,[c("audio",{ref_key:"voiceRef",ref:E,src:l(M),preload:"auto",onEnded:t[0]||(t[0]=(...r)=>l(b)&&l(b)(...r))},null,40,W),l(R)?(I(),_("button",{key:0,class:"audio-start-btn",type:"button",onClick:t[1]||(t[1]=(...r)=>l(h)&&l(h)(...r))}," 点击开始讲解 ")):L("",!0),c("button",{class:"ghost",type:"button",onClick:N}," 继续 "),c("main",Y,[t[4]||(t[4]=k('<section class="text-panel" data-v-91ed650b><div class="kicker" data-v-91ed650b>IPyC LAYER · DESIGN</div><h1 class="hero-title" data-v-91ed650b>IPyC 的设计</h1><p class="hero-subtitle" data-v-91ed650b> IPyC 层不是简单的一层碳，它需要形成 <strong data-v-91ed650b>高密度、连续、光滑</strong> 的沉积层，为后续 SiC 层提供可靠生长基础。 </p><div class="phase-list" data-v-91ed650b><div class="phase-card" data-v-91ed650b><strong data-v-91ed650b>① 高密度焦炭沉积</strong><span data-v-91ed650b> 高密度的焦炭沉积在缓冲层表面，逐渐形成致密、连续的内焦炭层。 </span></div><div class="phase-card" data-v-91ed650b><strong data-v-91ed650b>② 提供光滑沉积表面</strong><span data-v-91ed650b> 光滑稳定的 IPyC 表面，为碳化硅 SiC 层沉积提供更均匀的基础。 </span></div><div class="phase-card" data-v-91ed650b><strong data-v-91ed650b>③ 阻挡盐酸侵入内核</strong><span data-v-91ed650b> IPyC 可阻挡 SiC 沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </span></div></div></section>',1)),c("section",j,[t[3]||(t[3]=k('<div class="card-header" data-v-91ed650b><div data-v-91ed650b><div class="focus-badge" data-v-91ed650b><i class="fa-solid fa-crosshairs" data-v-91ed650b></i><span data-v-91ed650b>动态演示</span></div><h2 data-v-91ed650b>焦炭沉积 · SiC 沉积基础</h2></div><div class="phase-index" data-v-91ed650b>IPyC</div></div><div class="desc-box" data-v-91ed650b> 高密度的焦炭沉积在缓冲层上，为碳化硅沉积提供光滑表面；同时可阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </div>',2)),c("div",G,[c("div",{class:"canvas",ref_key:"canvasRef",ref:i},[...t[2]||(t[2]=[c("div",{class:"center-circle"},null,-1),c("div",{class:"ring-label inner-label"},"缓冲层",-1),c("div",{class:"ring-label outer-label"},"IPyC 沉积层",-1)])],512)])])])],64))}}),ot=K(tt,[["__scopeId","data-v-91ed650b"]]);export{ot as default};
