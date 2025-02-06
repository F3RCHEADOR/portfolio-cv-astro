import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { sideBarStore, toggleSideBar } from "@/sideBarStore"; // Importa el store de sidebar

const SideBarToggle = () => {
  const isSideBarOpen = useStore(sideBarStore); // Obtener el estado del sidebar desde el store

  // Usamos useEffect para aplicar las clases de transición cuando el estado cambia
  useEffect(() => {
    const sideBar = document.getElementById("SideBar");
    const main = document.getElementById("Main");

    console.log("Estado de sidebar en useEffect:", isSideBarOpen); // Verifica si el estado cambia correctamente

    // Verificar si los elementos existen
    console.log("sideBar:", sideBar);
    console.log("main:", main);

    // Cuando el sidebar esté abierto
    if (sideBar && main) {
      if (isSideBarOpen) {
        console.log("Sidebar abierto. Aplicando clases...");
        main.classList.add("md:ml-96"); // Aplica margen al contenido principal
        sideBar.classList.remove("-translate-x-full"); // Muestra el sidebar
      } else {
        console.log("Sidebar cerrado. Eliminar clases...");
        main.classList.remove("md:ml-96"); // Elimina el margen
        sideBar.classList.add("-translate-x-full"); // Oculta el sidebar
      }
    }
  }, [isSideBarOpen]); // Este efecto se ejecuta cada vez que el estado del sidebar cambia

  return (
    <>
      {/* Botón para alternar el estado del sidebar */}
      <button
        id="ToggleSideBar"
        onClick={() => {
          console.log("Botón clickeado. Ejecutando toggleSideBar.");
          toggleSideBar(); // Llamamos a la función que alterna el estado
        }}
        className="absolute top-2 -right-14 cursor-pointer border-2 rounded-xl p-1 bg-gray-300 z-50"
      >
        Toggle Sidebar
      </button>
    </>
  );
};

export default SideBarToggle;
