import beebuddieslarge from "../assets/beebuddies850.webm";

const Projects = () => {
  return (
    <div className="relative z-20 mt-24 mb-24 mx-auto max-w-screen-lg text-white/90 tracking-wider text-justify">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-lighter to-white text-center text-3xl font-extrabold leading-6 tracking-widest mb-5">
        PROJECTS
      </h2>

      <div className="flex justify-center items-center mb-5 ">
        {/* <div className="w-3 h-3 rounded-full border-lightest border"></div> */}
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
        <div className="w-60 border-lightest border-b opacity-60"></div>
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
        {/* <div className="w-3 h-3 rounded-full border-lightest border"></div> */}
      </div>

      <h3 className="text-lightest/90 text-left text-2xl font-light leading-6 tracking-widest mb-5">
        BeeBuddies
      </h3>

      <video
        autoPlay
        muted
        loop
        src={beebuddieslarge}
        alt="BeeBuddies Website"
        className=""
        type="video/webm"
      />
    </div>
  );
};

export default Projects;
