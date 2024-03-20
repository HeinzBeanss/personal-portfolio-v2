import ProjectBeeBuddies from "./ProjectBeeBuddies";
import ProjectInstagram from "./ProjectInstagram";
import ProjecQuizzerly from "./ProjectQuizzerly";
import Satellite from "../Components/Satellite";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const projectdescriptions = document.querySelectorAll(".projectdesc");
    window.addEventListener("scroll", () => {
      projectdescriptions.forEach((description) => {
        const descriptiontop = description.getBoundingClientRect().top;
        if (descriptiontop < window.innerHeight - 80) {
          description.style.opacity = "100%";
          description.style.transform = `translateX(0px)`;
        }
      });
    });
  }, []);
  return (
    <div
      id="Projects"
      className="relative z-20 mt-24 lg:mt-48 mb-4 lg:mb-48 mx-8 sm:mx-12 lg:mx-auto max-w-screen-lg text-white/90 tracking-wider text-justify"
    >
      <h2 className="relative bg-clip-text text-transparent bg-gradient-to-br from-lighter to-white text-center text-lg sm:text-3xl font-extrabold leading-6 tracking-widest mb-2 sm:mb-5">
        PROJECTS
      </h2>

      <div className="flex justify-center items-center mb-2 sm:mb-5">
        <svg
          className="max-w-3 -rotate-90 animate-rotate-forward-underline"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-underline stroke-[10px] fill-none stroke-lightest"
            cx="50"
            cy="50"
            r="45"
          />
        </svg>
        <div className="w-32 sm:w-60 border-lightest border-b opacity-60"></div>
        <svg
          className="max-w-3 -rotate-90 animate-rotate-backward-underline"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-underline stroke-[10px] fill-none stroke-lightest"
            cx="50"
            cy="50"
            r="45"
          />
        </svg>
      </div>

      <ProjectBeeBuddies />
      <ProjecQuizzerly />
      <Satellite />
      <ProjectInstagram />
    </div>
  );
};

export default Projects;
