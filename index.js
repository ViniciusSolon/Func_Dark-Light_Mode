const main = document.querySelector("main");
const root = document.querySelector(":root");
const button = document.getElementById("Botao");

function darkMode() {
  button.addEventListener("click", function (event) {
    if (main.dataset.theme == "dark") {
      root.style.setProperty("--header-color", "#9E84D6");
      root.style.setProperty("--middle-color", "#666");
      root.style.setProperty("--border-color", "#9E84D6");
      main.dataset.theme = "light";
    } else {
      main.dataset.theme = "dark";
      root.style.setProperty("--header-color", "black");
      root.style.setProperty("--middle-color", "#2e2e2e");
      root.style.setProperty("--border-color", "#666");
    }
  });
}

darkMode();
