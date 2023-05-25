import { Project } from "./Project";
import projects from "./projects.json";

export const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="font-mono font-bold text-base lg:text-lg">
        Personal Projects
      </h1>
      {projects.map((project) => (
        <div className="font-mono text-xs lg:text-base">
          <Project
            name={project.name}
            url={project.url}
            technologies={project.technologies}
            description={project.description}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        </div>
      ))}
    </div>
  );
};
