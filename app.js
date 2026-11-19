const $=s=>document.querySelector(s);
const stateKey="coriolisAcademy.v1";
let state={completed:[],answers:{}};
try{const saved=JSON.parse(localStorage.getItem(stateKey)||"null");if(saved)state={...state,...saved}}catch(e){}
let modules=[],current=0,selected=null,checked=false;
const save=()=>localStorage.setItem(stateKey,JSON.stringify(state));
function renderNav(){
 const nav=$("#moduleNav");nav.innerHTML="";
 modules.forEach((m,i)=>{const b=document.createElement("button");b.className="module-link"+(i===current?" active":"")+(state.completed.includes(i)?" done":"");b.innerHTML=`<span class="module-num">${state.completed.includes(i)?"✓":String(i+1).padStart(2,"0")}</span><span>${m.title}</span>`;b.addEventListener("click",()=>{current=i;render()});nav.appendChild(b)});
}
function updateStats(){
 const done=state.completed.length;$("#progressText").textContent=`${done} / 10`;$("#doneCount").textContent=done;$("#progressBar").style.width=(done*10)+"%";
 const correct=modules.filter((m,i)=>state.answers[i]===m.correct).length;$("#scoreCount").textContent=`${correct} / 10`;
}
function render(){
 const m=modules[current];selected=Object.prototype.hasOwnProperty.call(state.answers,current)?state.answers[current]:null;checked=false;
 $("#moduleNumber").textContent=`MODUL ${current+1} / 10`;$("#moduleTag").textContent=m.tag;$("#moduleTitle").textContent=m.title;$("#moduleGoal").textContent=m.goal;$("#moduleLesson").textContent=m.lesson;$("#fieldTask").textContent=m.field;$("#question").textContent=m.q;
 const ul=$("#pointList");ul.innerHTML="";m.points.forEach(p=>{const li=document.createElement("li");li.textContent=p;ul.appendChild(li)});
 const options=$("#options");options.innerHTML="";
 m.opts.forEach((o,i)=>{const label=document.createElement("label");label.className="option";const input=document.createElement("input");input.type="radio";input.name="answer";input.value=i;input.checked=selected===i;input.addEventListener("change",()=>{selected=i;$("#checkBtn").disabled=false;$("#feedback").classList.add("hidden")});const span=document.createElement("span");span.textContent=o;label.append(input,span);options.appendChild(label)});
 $("#checkBtn").disabled=selected===null;$("#feedback").className="feedback hidden";$("#feedback").textContent="";
 $("#completeCheck").checked=state.completed.includes(current);
 $("#prevBtn").disabled=current===0;$("#nextBtn").textContent=current===modules.length-1?"Kembali ke awal ↺":"Berikutnya →";
 renderNav();updateStats();
}
$("#checkBtn").addEventListener("click",()=>{if(selected===null)return;const m=modules[current];state.answers[current]=selected;save();const f=$("#feedback");f.className="feedback "+(selected===m.correct?"good":"bad");f.textContent=(selected===m.correct?"Benar. ":"Belum tepat. ")+m.explain;updateStats()});
$("#completeCheck").addEventListener("change",e=>{const s=new Set(state.completed);e.target.checked?s.add(current):s.delete(current);state.completed=[...s].sort((a,b)=>a-b);save();renderNav();updateStats()});
$("#prevBtn").addEventListener("click",()=>{current=Math.max(0,current-1);render()});
$("#nextBtn").addEventListener("click",()=>{current=(current+1)%modules.length;render()});
$("#resetBtn").addEventListener("click",()=>{if(confirm("Hapus seluruh progress dan jawaban quiz pada perangkat ini?")){state={completed:[],answers:{}};save();current=0;render();toast("Progress berhasil direset.")}});
function toast(msg){const t=document.createElement("div");t.className="toast";t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}
fetch("modules.json").then(r=>r.json()).then(data=>{modules=data;render()}).catch(()=>{$("#moduleTitle").textContent="Materi belum dapat dimuat";$("#moduleLesson").textContent="Pastikan aplikasi dijalankan melalui web server lokal atau HTTPS, bukan dengan membuka file HTML langsung."});
let deferredPrompt=null;const installBtn=$("#installBtn");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn.classList.remove("hidden")});
installBtn.addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.classList.add("hidden")});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(err=>console.warn("SW registration failed",err)))}
