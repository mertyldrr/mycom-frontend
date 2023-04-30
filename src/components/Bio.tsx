import axios from "axios";
import { useEffect, useState } from "react";
import { S3Icons } from "../types";

export const Bio = () => {
  const [icons, setIcons] = useState<S3Icons[]>();
  const [profilePicture, setProfilePictrue] = useState<S3Icons>();
  const fetchPlLogos = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/plangicons`);

    setIcons(res.data);
  };

  const fetchProfilePicture = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/photos`);
    setProfilePictrue(res.data[0]);
  };

  useEffect(() => {
    fetchProfilePicture();
    fetchPlLogos();
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 mb-10 rounded-xl bg-gray-100">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-20">
        {profilePicture && (
          <img
            className="w-16 lg:w-36 rounded-3xl"
            src={profilePicture.url}
            alt=""
          />
        )}
        <div className="flex flex-col items-center space-y-3 mt-3 lg:mt-0 lg:items-start lg:basis-3/5 lg:space-y-5">
          <p className="font-nanum text-xl lg:text-5xl">Hi, I am Mert!</p>
          <p className="font-mono text-xs lg:text-base">
            Web/Mobile developer with a passion for creating engaging and
            intuitive user experiences.
          </p>
          <p className="font-mono text-xs lg:text-base">
            I'm currently pursuing a Master's degree in Informatics at Technical
            University of Munich.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-4/5 flex flex-row justify-between items-center pt-12">
        {icons &&
          icons.map((icon, index) => (
            <img
              className="w-8 h-8 lg:w-16 lg:h-16 rounded lg:rounded-xl"
              src={icon.url}
              alt=""
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
