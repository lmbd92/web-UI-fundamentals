const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Cargar el tema almacenado o usar claro por defecto
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
  toggleButton.textContent = "☀️ switch theme";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleButton.textContent = isDark ? "☀️ switch theme" : "🌙 switch theme";
});
