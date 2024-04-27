import axios from "axios";
import { useEffect, useState } from "react";
import { S3Media } from "../types";

export const Technologies = () => {
  const [icons, setIcons] = useState<S3Media[]>();

  const fetchPlLogos = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/plangicons`
    );
    setIcons(res.data);
  };

  useEffect(() => {
    fetchPlLogos();
  }, []);
  return (
    <div className="w-full flex flex-col space-y-4 justify-center items-center mb-10">
      <h1 className="font-mono font-bold text-base lg:text-lg">Technologies</h1>
      <div className="w-full md:w-4/5 flex flex-row justify-between items-center">
        {icons &&
          icons.map((icon, index) => (
            <div key={index} className="relative w-10 h-10 md:w-20 md:h-20 rounded lg:rounded-xl hover:drop-shadow-xl transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-col items-center font-mono">
              <img
                className="w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14"
                src={icon.url}
                alt=""

              />
              <span className="absolute text-[8px] md:text-[11px] bottom-0">
                {icon.name}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
