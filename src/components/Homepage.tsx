import { Bio } from "./Bio";
import { Education } from "./Education";
import { Experience } from "./Experience";
import Links from "./Links";
import { Projects } from "./Projects/Projects";
import { Technologies } from "./Technologies";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-0 lg:p-10 bg-gray-200">
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center p-8 mb-0 lg:mb-10 rounded-xl bg-gray-100">
        <Bio />
        <Technologies />
        <Education />
        <Experience />
      </div>
      <div className="w-full lg:w-2/3 h-full flex flex-col items-center rounded-xl bg-gray-100">
        <Projects />
        <Links />
        {/* <PhotoGallery /> */}
      </div>
    </div>
  );
};

export default Homepage;
