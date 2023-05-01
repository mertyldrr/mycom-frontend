import axios from "axios";
import { useState, useEffect } from "react";
import { S3LinkIcons } from "../types";

const Links = () => {
  const [logos, setLogos] = useState<S3LinkIcons[]>();
  const fetchLogos = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/icons`
    );
    setLogos(res.data);
  };
  useEffect(() => {
    fetchLogos();
  }, []);
  return (
    <div className="w-full flex flex-col space-y-4 p-8 justify-center items-center mb-10">
      <h1 className="font-mono font-bold text-basis lg:text-lg">Links</h1>
      <div className="w-full lg:w-2/3 flex flex-row justify-evenly items-center ">
        {logos &&
          logos.map((logo, index) => (
            <a href={logo.href} target="_blank" rel="noreferrer" key={index}>
              <img
                className="w-8 h-8 lg:w-16 lg:h-16 hover:drop-shadow-xl transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110"
                src={logo.url}
                alt=""
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Links;
