import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "react-grid-gallery";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<{ url: string }[]>();
  const fetchData = async () => {
    const res = await axios.get(
      `http://ec2-18-196-50-32.eu-central-1.compute.amazonaws.com/photos`
    );
    setPhotos(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(photos && photos[0]);
  return (
    <div>
      {/* <Gallery images={IMAGES} backdropClosesModal={true} /> */}
      {photos && photos.map((photo) => <img src={photo.url}></img>)}
    </div>
  );
};
export default PhotoGallery;
