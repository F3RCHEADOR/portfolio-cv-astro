import { selectedIcon } from "@/filterStore";
import { useStore } from "@nanostores/react";

const IconsUtil = ({ utils, children }) => {
  const isSelectedIcon = useStore(selectedIcon);
  
  const filterIcon = (icon) => {
    selectedIcon.set(icon);
    console.log("icono seleccionado: ", icon);
  };

  return (
    <div className="relative group">
      <span className="hidden group-hover:block z-10 transition-all absolute p-0.5 rounded-md -top-5 right-4 bg-main-light dark:bg-main-dark text-black dark:text-white translate-x-1/2 transform bg-opacity-30 text-sm italic">
        {utils}
      </span>
      <button className="cursor-pointer" onClick={() => filterIcon(utils)}>
        {children}
      </button>
    </div>
  );
};

export default IconsUtil;
