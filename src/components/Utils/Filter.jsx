import AstroIcon from "../../IconsJsx/AstroIcon.jsx";
import Tailwind from "../../IconsJsx/TailwindCss.jsx";
import ReactIcon from "../../IconsJsx/React.jsx";
import Mongo from "../../IconsJsx/Mongo.jsx";
import { selectedIcon } from "@/filterStore.js";
import { useStore } from "@nanostores/react";
import { useState } from "react";

const Filter = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Menú inicialmente visible
  const isSelectedIcon = useStore(selectedIcon); // Acceder al estado reactivo

  // Alternar el estado de un icono individual
  const HandleIcon = (tool) => {
    selectedIcon.set(tool); // Alternar solo el estado del icono seleccionado
    console.log(selectedIcon);
  };

  const HandleMenu = () => {
    setIsMenuVisible(!isMenuVisible); // Alternar visibilidad del menú
  };

  return (
    <div className="ml-10 max-w-xs relative h-6 transform transition-all p-2 ">
      <button
        onClick={HandleMenu}
        className={`absolute top-0 z-50 transition-all duration-300 ${
          !isMenuVisible ? "left-0 rotate-0" : "right-4 rotate-180" // La rotación será más suave
        } transform cursor-pointer border-y rounded p-0.5 bg-white`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </button>

      <div
        className={`absolute top-0 flex items-center justify-evenly w-[85%] transition-all duration-300 ${
          isMenuVisible ? "opacity-100" : "opacity-0 pointer-events-none" // Transición más suave con opacidad
        }`}
      >
        {/* Botones de los iconos */}
        <button
          onClick={() => HandleIcon("Astro")}
          className={`${
            isMenuVisible ? "cursor-pointer" : "cursor-not-allowed"
          }  focus:border border-border-light dark:border-gray-600 rounded-full p-1`}
          disabled={!isMenuVisible}
        >
          <AstroIcon />
        </button>

        <button
          onClick={() => HandleIcon("Tailwind")}
          className={`${
            isMenuVisible ? "cursor-pointer" : "cursor-not-allowed"
          } focus:border border-border-light dark:border-gray-600 rounded-full p-1 `}
          disabled={!isMenuVisible}
        >
          <Tailwind />
        </button>

        <button
          onClick={() => HandleIcon("React")}
          className={`${
            isMenuVisible ? "cursor-pointer" : "cursor-not-allowed"
          }  focus:border border-border-light dark:border-gray-600 rounded-full p-1`}
          disabled={!isMenuVisible}
        >
          <ReactIcon />
        </button>

        <button
          onClick={() => HandleIcon("Mongo")}
          className={`${
            isMenuVisible ? "cursor-pointer" : "cursor-not-allowed"
          } focus:border border-border-light dark:border-gray-600 rounded-full p-1`}
          disabled={!isMenuVisible}
        >
          <Mongo />
        </button>
      </div>
    </div>
  );
};

export default Filter;
