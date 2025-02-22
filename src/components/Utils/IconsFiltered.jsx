import IconsUtils from "./IconsUtils";
import Tailwind from "@/icons/Tailwind.jsx";
import React from "@/icons/React.jsx";
import AstroIcon from "@/icons/Astro.jsx";
import Node from "@/icons/Node.jsx";
import Mongo from "@/icons/Mongo.jsx";
import Vite from "@/icons/Vite.jsx";

const IconsFiltered = ({ tech }) => {

  // Mapa de tecnologías a sus componentes
  const iconMap = {
    Tailwind: <Tailwind />,
    React: <React />,
    Astro: <AstroIcon />,
    Mongo: <Mongo />,
    Node: <Node />,
    Vite: <Vite />,
  };

  // Obtener el componente del ícono correspondiente o mostrar el nombre de la tecnología
  const iconComponent = iconMap[tech] || <span>{tech}</span>;

  return (
    <li className="px-2 py-0.5 rounded-xl text-base cursor-pointer group duration-75 mb-2">
      <IconsUtils utils={tech}>{iconComponent}</IconsUtils>
    </li>
  );
};

export default IconsFiltered;
