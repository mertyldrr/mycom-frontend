import { Project } from "./Project";
import projects from "./projects.json";

export const Projects = () => {
  return (
    <div className="flex flex-col space-y-4 p-8 justify-center items-center mb-10">
      <h1 className="font-mono font-bold text-base lg:text-lg">
        Personal Projects
      </h1>
      <div className="font-mono text-xs lg:text-base">
        {projects.map((project) => (
          <Project
            name={project.name}
            url={project.url}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};
