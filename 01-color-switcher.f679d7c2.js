const t={body:document.body,btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStart.addEventListener("click",(()=>{e||(t.btnStart.disabled=!0,e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=e}),1e3))})),t.btnStop.addEventListener("click",(()=>{clearInterval(e),e=null,t.btnStart.disabled=!1}));
//# sourceMappingURL=01-color-switcher.f679d7c2.js.map