import axios from "axios";
import { useState, useEffect } from "react";
import { S3LinkIcons } from "../types";

const Links = () => {
  const [logos, setLogos] = useState<S3LinkIcons[]>();
  const fetchLogos = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}\\icons`);
    setLogos(res.data);
  };
  useEffect(() => {
    fetchLogos();
  }, []);
  return (
    <div className="w-full flex flex-col space-y-4 p-8 justify-center items-center mb-10">
      <h1 className="text-lg font-mono font-bold">Links</h1>
      <div className="w-2/3 flex flex-row justify-evenly items-center basis-40 ">
        {logos &&
          logos.map((logo) => (
            <a href={logo.href} target="_blank" rel="noreferrer">
              <img className="w-16 h-16" src={logo.url} alt="" />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Links;
