const grid = document.getElementById("gameGrid");

games.forEach(g => {
  grid.innerHTML += `
    <div class="card" onclick="openGame('${g.link}')">
      <span class="badge">${g.badge}</span>
      <img src="${g.image}" alt="${g.title}">
      <div class="title">${g.title}</div>
    </div>
  `;
});

function openGame(url){
  if(!url) return;
  const encoded = encodeURIComponent(url);
  const a = document.createElement("a");
  a.href = "go.html?url=" + encoded;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// pull to refresh
let startY = 0;
window.addEventListener("touchstart", e => startY = e.touches[0].clientY);
window.addEventListener("touchend", e => {
  if(e.changedTouches[0].clientY - startY > 120) location.reload();
});

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js").catch(()=>{});
}
