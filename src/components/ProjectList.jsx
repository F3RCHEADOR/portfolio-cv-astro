import { useStore } from "@nanostores/react";
import { selectedIcon } from "@/filterStore";
import CardProject from "@/components/CardProject";

const ProjectsList = ({ projects }) => {
  const isSelectedIcon = useStore(selectedIcon); // Obtenemos el valor actualizado del store


  return (
    <ul className="max-w-screen-xl grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8 p-2 mx-4 my-6">
      {projects.map((project) => {
        // Si isSelectedIcon es nulo, mostrar todos los proyectos, si no, comprobar si está incluido en 'utils'
        const shouldRenderProject =
          isSelectedIcon === null || project.data.utils.some((tech) => tech === isSelectedIcon || isSelectedIcon === 'Ver' || isSelectedIcon === 'Repo' );

        return shouldRenderProject ? (
          <CardProject key={project.id} project={project} client:load />
        ) : null;
      })}
    </ul>
  );
};

export default ProjectsList;
