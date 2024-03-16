import instagrammain from "../assets/projects/instagram/instagrammain.webm";
import instagrammobile from "../assets/projects/instagram/instagrammobile.png";
import instagramlogin from "../assets/projects/instagram/instagramlogin.png";
import star from "../assets/star.svg";

const ProjectInstagram = () => {
  return (
    <div className="relative parallax-wrap  mt-60 flex w-full gap-10 ">
      <div className="flex flex-col w-[40%] justify-center pt-12">
        <h3 className="text-lightest/90 text-left text-sm font-light leading-6 tracking-widest mb-5">
          <a href="https://heinzbeanss.github.io/instagram/#/">
            Instagram
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link inline ml-1 mb-0.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </h3>

        <h3 className="text-lightest/90 text-left text-2xl font-light leading-6 tracking-widest mb-5">
          An Instagram clone.
        </h3>

        <p className="font-thin text-base text-left">
          A recreation of the popular social media platform Instagram, the goal
          here was to achieve around 80% accuracy of the real website. Using
          React for the front-end and Firebase for the backend, users can create
          an account, upload their own posts alongside captions, edit their
          profile picture and description, as well as follow and like other
          users and their posts respectively.
        </p>

        <div className="mt-10 flex gap-6 justify-end pr-6">
          <svg viewBox="0 0 128 128" className="w-10">
            <path
              fill="#EAfaff"
              d="M17.474 103.276 33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39 6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714H17.474Z"
            ></path>
            <path
              fill="#EAfaff"
              d="M71.903 64.005 54.955 31.913l-37.481 71.363Z"
            ></path>
            <path
              fill="#EAfaff"
              d="M110.577 103.276 98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.714l-76.112 76.243 42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"
            ></path>
            <path
              fill="#fff"
              fillOpacity=".2"
              d="M98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.713L78.479 42.178 66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.907 2.907 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058.415.204 75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003.116-.073L98.51 28.603Zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.911 2.911 0 0 1 3.057 1.495l16.292 30.39 6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41 17.61 103.138Z"
            ></path>
            <path
              fill="#EAfaff"
              d="M68.099 126.18a8.728 8.728 0 0 1-8.51 0l-42.015-23.55-.102.647 42.115 23.61a8.728 8.728 0 0 0 8.51 0l42.48-23.61-.11-.67-42.37 23.575z"
              opacity=".2"
            ></path>
          </svg>
          <svg viewBox="0 0 128 128" className="w-12 rounded-lg">
            <g fill="#EAfaff">
              <circle cx="64" cy="64" r="11.4"></circle>
              <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
            </g>
          </svg>
          <svg viewBox="0 0 128 128" className="w-10 rounded-lg">
            <path fill="#E4faff" d="M1.408 1.408h125.184v125.185H1.408z"></path>
            <path
              fill="opacity-0"
              d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-[600px] h-96 relative">
        <div className="absolute right-0 z-30 top-1/4 z-20 h-56 max-w-[60%]">
          <video
            autoPlay
            muted
            loop
            src={instagrammain}
            alt="instagram Website"
            className="rounded-lg object-cover object-left h-full w-full drop-shadow-images shadow-images"
            type="video/webm"
          />
        </div>
        <div className="absolute z-20 h-52 min-w-[50%]">
          <img
            src={instagramlogin}
            alt="instagram login screen"
            className="rounded-lg object-cover object-top h-full w-full drop-shadow-images shadow-images"
          />
        </div>
        <div className="absolute z-40 w-[30%] h-80 left-8 top-44">
          <img
            src={instagrammobile}
            alt="instagram mobile screen"
            className="rounded-lg object-cover object-center w-full h-full drop-shadow-images shadow-images"
          />
        </div>
      </div>
      <img
        src={star}
        alt="star"
        className="star-parallax absolute top-32 -left-48 max-w-10"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-72 -left-96 opacity-60"
        value="-4"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 bottom-80 right-24 opacity-80"
        value="3"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 -bottom-72 right-32 opacity-80"
        value="5"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-60 -right-64 opacity-80"
        value="2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 -bottom-48 left-44 opacity-80"
        value="1"
      />
    </div>
  );
};

export default ProjectInstagram;
