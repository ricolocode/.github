const button = document.getElementById("theme-toggle");
const root = document.documentElement;

function updateButtonText() {
  const isDark = root.classList.contains("dark");
  button.textContent = isDark ? "🟡 Hell" : "🌙 Dunkel";
}
updateButtonText();

button.addEventListener("click", () => {
  root.classList.toggle("dark");
  const isDark = root.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateButtonText();
});