import LinkTo from "@/icons/LinkTo";
import IconsFiltered from "./Utils/IconsFiltered";
import Github from "@/icons/Github";
import IconsUtils from "@/components/Utils/IconsUtils";

const CardProject = ({ project }) => {
  return (
    <li className="flex flex-col justify-evenly gap-x-4 border-t-2 border-border-light mt-2.5 shadow-md px-2.5 py-2 rounded-lg dark:shadow-gray-600 hover:shadow-lg hover:scale-105 transform transition-all dark:bg-gray-800 max-w-96 mx-auto">
      <div className="relative p-1">
        <h1 className="[text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-xl md:text-2xl leading-snug font-manrope text-center font-semibold italic text-heading-main-light dark:text-heading-alt-dark mb-0.5">
          {project.data.title}
        </h1>
        <img
          src={project.data.heroImage}
          alt={project.data.title}
          className="m-1 w-full h-56"
        />
        <p className="text-sm font-medium py-2 px-1 dark:text-paragraph-dark text-paragraph-light">
          {project.data.description.length > 300
            ? `${project.data.description.slice(0, 200)}...`
            : project.data.description}
        </p>
      </div>
      <ul className="col-span-2 mb-2.5 flex flex-row items-center justify-center space-x-2 md:space-x-4 border-b-2 border-dashed border-border-light">
        {project.data.utils.map((tech, index) => (
          <IconsFiltered key={index} tech={tech} client:load />
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <a
          href={`/project/${project.id}`}
          className="flex justify-center mx-auto h-12 w-16 rounded-md items-center bg-red-500 border-2 dark:bg-button-main-dark group hover:scale-y-105 transition-all "
        >
          <IconsUtils utils="Ver">
            <LinkTo />
          </IconsUtils>
        </a>
        <a
          href={`${project.data.repo}`}
          className="flex justify-center mx-auto h-12 w-16 rounded-md items-center bg-button-alt-light border-2 dark:bg-button-main-dark group hover:scale-y-105 transition-all "
        >
          <IconsUtils utils="Repo">
            <Github />
          </IconsUtils>
        </a>
      </div>
    </li>
  );
};

export default CardProject;
