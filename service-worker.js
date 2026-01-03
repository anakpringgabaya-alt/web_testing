self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("game-cache").then(c =>
      c.addAll([
        "./",
        "index.html",
        "style.css",
        "data.js",
        "app.js",
        "go.html"
      ])
    )
  );
});
