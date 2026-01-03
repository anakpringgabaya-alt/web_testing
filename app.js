const grid=document.getElementById("gameGrid");
games.forEach(g=>{
grid.innerHTML+=`<a href="${g.link}" class="card-link"><div class="card"><span class="badge">${g.badge}</span><img src="${g.image}"><div>${g.title}</div></div></a>`;
});
let y=0;
window.addEventListener("touchstart",e=>y=e.touches[0].clientY);
window.addEventListener("touchend",e=>{if(e.changedTouches[0].clientY-y>120)location.reload()});
if("serviceWorker"in navigator){navigator.serviceWorker.register("service-worker.js")}