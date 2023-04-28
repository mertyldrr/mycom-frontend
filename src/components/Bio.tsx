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
      <div className="flex flex-row justify-center space-x-20">
        {profilePicture && (
          <img className="w-36 rounded-3xl" src={profilePicture.url} alt="" />
        )}
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
        {icons &&
          icons.map((icon, index) => (
            <img
              className="w-16 h-16 rounded-xl"
              src={icon.url}
              alt=""
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
