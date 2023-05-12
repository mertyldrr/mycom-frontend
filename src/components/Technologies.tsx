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
      <div className=" lg:w-4/5 flex flex-row justify-between items-center">
        {icons &&
          icons.map((icon, index) => (
            <img
              className="w-8 h-8 lg:w-16 lg:h-16 rounded lg:rounded-xl hover:drop-shadow-xl transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110"
              src={icon.url}
              alt=""
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
