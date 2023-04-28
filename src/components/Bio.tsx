import MyPhoto from "../assets/mert-foto.jpg";
import { ReactComponent as JSLogo } from "../assets/logo-javascript.svg";
import { ReactComponent as NodejsLogo } from "../assets/nodejs-1.svg";
import { ReactComponent as PythonLogo } from "../assets/python-icon.svg";
import { ReactComponent as ReactLogo } from "../assets/react-2.svg";
import { ReactComponent as Redux } from "../assets/redux.svg";
import { ReactComponent as Typescript } from "../assets/typescript.svg";

export const Bio = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 mb-10 rounded-xl bg-gray-100">
      <div className="flex flex-row justify-center space-x-20">
        <img className="w-36 rounded-3xl" src={MyPhoto} alt="" />
        <div className="flex flex-col basis-3/5 space-y-5">
          <p className="font-nanum text-5xl">Hi, I am Mert!</p>
          <p className="font-mono text-md">
            Web/Mobile developer with a passion for creating engaging and
            intuitive user experiences.
          </p>
          <p className="font-mono text-md">
            I'm currently pursuing a Master's degree in Informatics at Technical
            University of Munich.
          </p>
        </div>
      </div>
      <div className="w-2/3 flex flex-row justify-between items-center pt-12">
        <JSLogo className="w-16 h-16 rounded-xl" />
        <NodejsLogo className="w-16 h-16 " />
        <ReactLogo className="w-16 h-16" />
        <Redux className="w-16 h-16" />
        <PythonLogo className="w-16 h-16" />
        <Typescript className="w-16 h-16 rounded-xl" />
      </div>
    </div>
  );
};
