import { useState, useEffect } from "react";
import Card from "./components/molecules/Card";
import sampleImg from "./assets/imgs/undraw_delivery-location_um5t.png";

function App() {
  // 1) Estado de tema en el root
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // 2) Efecto para aplicar la clase a <body> y guardar en localStorage
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // 3) Handler que disparamos desde el Card
  const handleToggleTheme = () => setIsDark((prev) => !prev);
  return (
    <div
      style={{
        padding: "2rem",
        display: "grid",
        gap: "2rem",
        justifyContent: "center",
      }}>
      <Card
        image={sampleImg}
        title="Atomic Card"
        description="Esta es una tarjeta de ejemplo usando Atomic Design y Sass."
        onButtonClick={() => alert("¡Clic!")}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}

export default App;
