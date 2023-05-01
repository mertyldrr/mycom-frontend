import axios from "axios";
import { useEffect, useState } from "react";
import { S3Icons } from "../types";

export const Bio = () => {
  const [icons, setIcons] = useState<S3Icons[]>();
  const [profilePicture, setProfilePictrue] = useState<S3Icons>();
  const fetchPlLogos = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/plangicons`
    );
    setIcons(res.data);
  };

  const fetchProfilePicture = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/photos`
    );
    setProfilePictrue(res.data[0]);
  };

  const downloadPdf = () => {
    const pdfUrl = `${process.env.REACT_APP_SUBDOMAIN}/media/cv/mert_yildirir_cv.pdf`;
    console.log(pdfUrl);
    axios({
      url: pdfUrl,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "mert_yildirir_cv.pdf");
      document.body.appendChild(link);
      link.click();
    });
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
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => downloadPdf()}
          >
            <svg
              className="fill-current w-3 h-3 lg:w-4 lg:h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span className="font-mono text-xs lg:text-base">Download CV</span>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-4/5 flex flex-row justify-between items-center pt-12">
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
