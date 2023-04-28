import { useEffect, useState } from "react";
import axios from "axios";
import { S3Icons } from "../types";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<S3Icons[]>();
  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}\\photos`);
    setPhotos(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <Gallery images={IMAGES} backdropClosesModal={true} /> */}
      {/* {photos &&
        photos.map((photo, idx) => (
          <img alt={""} key={idx} src={photo.url}></img>
        ))} */}
    </div>
  );
};
export default PhotoGallery;
