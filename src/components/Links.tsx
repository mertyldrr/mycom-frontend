import { ReactComponent as LinkedInLogo } from "../assets/linkedin-icon-2.svg";
import { ReactComponent as FlickrLogo } from "../assets/flickr.svg";
import { ReactComponent as GitHubLogo } from "../assets/github-icon-1.svg";

const Links = () => {
  return (
    <div className="w-full flex flex-col space-y-4 p-8 justify-center items-center mb-10">
      <h1 className="text-lg font-mono font-bold">Links</h1>
      <div className="w-full flex flex-row justify-evenly items-center basis-40 ">
        <a
          href={process.env.REACT_APP_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogo className="w-16 h-16" />
        </a>
        <a
          href={process.env.REACT_APP_LINKEDIN_URL}
          target={"_blank"}
          rel="noreferrer"
        >
          <LinkedInLogo className="w-16 h-16" />
        </a>
        <a
          href={process.env.REACT_APP_FLICKER_URL}
          target={"_blank"}
          rel="noreferrer"
        >
          <FlickrLogo className="w-20 h-20" />
        </a>
      </div>
    </div>
  );
};

export default Links;
