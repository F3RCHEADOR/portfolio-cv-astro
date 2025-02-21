import React from 'react';
import { useStore } from '@nanostores/react';
import { selectedTools } from '@/filterStore.js';

// Lista de herramientas disponibles
const tools = ["Tailwind", "React", "Astro", "Node", "Mongo", "Vite"];

const Filter = () => {
  const $selectedTools = useStore(selectedTools); // Usamos el store para mantener el estado reactivo

  const toggleTool = (tool) => {
    console.log('click')
    if ($selectedTools.includes(tool)) {
      selectedTools.set($selectedTools.filter(t => t !== tool)); // Si está seleccionada, la eliminamos
    } else {
      selectedTools.set([...$selectedTools, tool]); // Si no está seleccionada, la agregamos
    }
  };

  return (
    <div className="filter-buttons">
      {tools.map((tool) => (
        <button
          key={tool}
          onClick={() => toggleTool(tool)}
          className={`filter-button ${$selectedTools.includes(tool) ? 'active' : ''} cursor-pointer `}
        >
          {tool}
        </button>
      ))}
    </div>
  );
};

export default Filter;
