import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";

type Props = {
  name: string;
  url: string;
  technologies: string[];
  description: string;
  githubUrl: string;
  projectUrl: string;
};

export const Project = ({
  name,
  url,
  technologies,
  description,
  githubUrl,
  projectUrl,
}: Props) => {
  return (
    <div className="flex flex-col py-6 border-b-2 border-slate-300 ">
      <div className="flex flex-row p-8">
        <div className="basis-1/2 pr-8">
          <img
            className="rounded-lg hover:drop-shadow-xl transition duration-400 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:scale-105"
            src={url}
            alt=""
          />
        </div>
        <div className="flex flex-col basis-1/2 space-y-4">
          <h1 className="text-lg font-bold lg:text-xl">{name}</h1>
          <div className="flex flex-row flex-wrap">
            <p className="font-bold text-sm lg:text-base">
              Technologies used:&nbsp;
            </p>
            <p className="text-sm lg:text-base">{technologies.join(", ")}</p>
          </div>
          <p>{description}</p>
          <div className="flex flex-row space-x-4">
            <a
              className="flex flex-row items-center text-blue-600 font-bold"
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              <CiShare1 color="black" className="w-4 h-4 lg:w-6 lg:h-6 p-0" />
              <p className="px-2">Link</p>
            </a>
            <a
              className="flex flex-row items-center text-blue-600 font-bold"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                color="black"
                className="w-4 h-4 lg:w-6 lg:h-6 p-0"
              />
              <p className="px-2">Repo</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
