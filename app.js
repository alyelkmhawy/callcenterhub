const frame = document.getElementById("offerFrame");
const loader = document.getElementById("frameLoader");
const fallback = document.getElementById("fallback");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

let loaded = false;
frame.addEventListener("load", () => {
  loaded = true;
  setTimeout(() => loader.classList.add("hidden"), 250);
});

// A cross-origin iframe can load while its page later redirects.
// We cannot inspect its internal DOM from this page. If the browser blocks
// embedding, show a clean fallback link after a reasonable timeout.
setTimeout(() => {
  if (!loaded) {
    loader.classList.add("hidden");
    fallback.classList.add("show");
  }
}, 9000);
