const grid = document.getElementById("gameGrid");

/* Render game card */
function renderGames() {
  grid.innerHTML = "";

  games.forEach(g => {
    grid.innerHTML += `
      <div class="card" onclick="openGame('${g.link}')">
        <span class="badge">${g.badge}</span>
        <img src="${g.image}" alt="${g.title}">
        <div class="title">${g.title}</div>
      </div>
    `;
  });
}

renderGames();

/* 🔗 Open external link safely (PWA friendly) */
function openGame(url) {
  if (!url || url === "#") return;

  try {
    window.open(url, "_blank", "noopener,noreferrer");
  } catch (e) {
    // fallback jika webview memblokir
    location.href = url;
  }
}

/* 📱 Pull to refresh (mobile only) */
let startY = 0;
window.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  if (endY - startY > 120) {
    location.reload();
  }
});

/* 📦 Register service worker safely */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}
