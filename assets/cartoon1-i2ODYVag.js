import{d as T,o as D,h as V,c as k,f as c,i,j as L,b as I,F as U,k as O,a as x,l as F,_ as K}from"./index-C_T7Tiog.js";import{u as H}from"./useVoice-Lx4JE6v5.js";const W=["src"],Y={class:"ipyc-design-page"},j={class:"visual-card"},G={class:"canvas-wrap"},X=70,q=45,z=50,J=50,Q=17.5,Z=21,E=60,tt=T({__name:"cartoon1",setup(at){const{voiceRef:b,audioSrc:M,showAudioStart:R,startVoiceAfterMounted:S,startVoiceByClick:h,stopVoiceBeforeRouteChange:P,handleVoiceEnded:$}=H("${import.meta.env.BASE_URL}audio/security-first.mp3");function N(){P(),F.push({name:"IPyCcartoon2"})}const l=O();let p=[],d=null,n=null;function v(s,t){const r=z+t*Math.cos(s),o=J+t*Math.sin(s);return{x:r,y:o}}function C(s){if(n?.sheet)try{n.sheet.insertRule(s,n.sheet.cssRules.length)}catch(t){console.warn("插入动画关键帧失败：",t)}}function A(){if(l.value)for(let s=0;s<X;s++){const t=Math.random()*2*Math.PI,r=Q+(Math.random()*2-1)*1.8,o=v(t,E),a=v(t,r),u=Math.random()*1,y=3+Math.random()*1,f=`black_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
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
    `;C(m);const e=document.createElement("div");e.className="particle-black",e.style.left=`${o.x}%`,e.style.top=`${o.y}%`,e.style.animation=`${f} ${y}s ease-out forwards`,e.style.animationDelay=`${u}s`,l.value.appendChild(e),p.push(e)}}function w(){if(l.value)for(let s=0;s<q;s++){const t=Math.random()*2*Math.PI,r=Z+(Math.random()*2-1)*1.5,o=v(t,E),a=v(t,r),u=2.5+Math.random()*1.2,y=2.8+Math.random()*1,f=`white_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,m=`
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
    `;C(m);const e=document.createElement("div");e.className="particle-white",e.style.left=`${o.x}%`,e.style.top=`${o.y}%`,e.style.animation=`${f} ${y}s ease-out forwards`,e.style.animationDelay=`${u}s`,l.value.appendChild(e),p.push(e)}}function g(){p.forEach(s=>s.remove()),p=[]}function _(){g(),A(),w()}function B(){d&&clearInterval(d),_(),d=window.setInterval(()=>{_()},8e3)}return D(()=>{S(),n=document.createElement("style"),n.setAttribute("data-ipyc-particle-keyframes","true"),document.head.appendChild(n),B()}),V(()=>{d&&clearInterval(d),g(),n&&(n.remove(),n=null)}),(s,t)=>(x(),k(U,null,[c("audio",{ref_key:"voiceRef",ref:b,src:i(M),preload:"auto",onEnded:t[0]||(t[0]=(...r)=>i($)&&i($)(...r))},null,40,W),i(R)?(x(),k("button",{key:0,class:"audio-start-btn",type:"button",onClick:t[1]||(t[1]=(...r)=>i(h)&&i(h)(...r))}," 点击开始讲解 ")):L("",!0),c("button",{class:"ghost",type:"button",onClick:N}," 继续 "),c("main",Y,[t[4]||(t[4]=I('<section class="text-panel" data-v-f9789726><div class="kicker" data-v-f9789726>IPyC LAYER · DESIGN</div><h1 class="hero-title" data-v-f9789726>IPyC 的设计</h1><p class="hero-subtitle" data-v-f9789726> IPyC 层不是简单的一层碳，它需要形成 <strong data-v-f9789726>高密度、连续、光滑</strong> 的沉积层，为后续 SiC 层提供可靠生长基础。 </p><div class="phase-list" data-v-f9789726><div class="phase-card" data-v-f9789726><strong data-v-f9789726>① 高密度焦炭沉积</strong><span data-v-f9789726> 高密度的焦炭沉积在缓冲层表面，逐渐形成致密、连续的内焦炭层。 </span></div><div class="phase-card" data-v-f9789726><strong data-v-f9789726>② 提供光滑沉积表面</strong><span data-v-f9789726> 光滑稳定的 IPyC 表面，为碳化硅 SiC 层沉积提供更均匀的基础。 </span></div><div class="phase-card" data-v-f9789726><strong data-v-f9789726>③ 阻挡盐酸侵入内核</strong><span data-v-f9789726> IPyC 可阻挡 SiC 沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </span></div></div></section>',1)),c("section",j,[t[3]||(t[3]=I('<div class="card-header" data-v-f9789726><div data-v-f9789726><div class="focus-badge" data-v-f9789726><i class="fa-solid fa-crosshairs" data-v-f9789726></i><span data-v-f9789726>动态演示</span></div><h2 data-v-f9789726>焦炭沉积 · SiC 沉积基础</h2></div><div class="phase-index" data-v-f9789726>IPyC</div></div><div class="desc-box" data-v-f9789726> 高密度的焦炭沉积在缓冲层上，为碳化硅沉积提供光滑表面；同时可阻挡碳化硅沉积过程中产生的盐酸，防止其侵入内核并与铀反应。 </div>',2)),c("div",G,[c("div",{class:"canvas",ref_key:"canvasRef",ref:l},[...t[2]||(t[2]=[c("div",{class:"center-circle"},null,-1),c("div",{class:"ring-label inner-label"},"缓冲层",-1),c("div",{class:"ring-label outer-label"},"IPyC 沉积层",-1)])],512)])])])],64))}}),ot=K(tt,[["__scopeId","data-v-f9789726"]]);export{ot as default};
