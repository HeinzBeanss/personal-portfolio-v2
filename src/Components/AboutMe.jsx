import { useEffect } from "react";
import star from "../assets/star2.svg";

const AboutMe = () => {
  useEffect(() => {
    const aboutmetext = document.querySelectorAll(".aboutmetext");
    window.addEventListener("scroll", () => {
      aboutmetext.forEach((description) => {
        const descriptiontop = description.getBoundingClientRect().top;
        if (descriptiontop < window.innerHeight - 20) {
          description.style.opacity = "100%";
          description.style.transform = `translateY(0px)`;
        }
      });
    });
  }, []);
  return (
    <div
      id="About"
      className="relative mt-32 lg:mt-48 lg:mt-72 sm:mb-6 lg:mb-16 mx-8 sm:mx-12 lg:mx-auto max-w-screen-lg text-white/90 tracking-wider lg:text-justify parallax-wrap"
    >
      <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-lighter to-white text-center text-lg lg:text-3xl font-extrabold leading-6 tracking-widest mb-2 lg:mb-5">
        A LITTLE ABOUT ME
      </h2>
      <div className="flex justify-center items-center mb-2 lg:mb-5 ">
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
        <div className="w-56 lg:w-96 border-lightest border-b opacity-60"></div>
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
      <p className="aboutmetext mt-0 sm:mt-6 lg:mt-24 font-thin lg:text-base text-sm leading-5 lg:leading-6 font-outfit opacity-0 transform translate-y-5 transition-all linear duration-500">
        {
          "I'm David Bean, and you can find me in a small town called Dewsbury, coding away at my computer most hours of the day while my three monitors surround me. Completely self-driven, I've been focused on studying independently for roughly two years, and I've enjoyed it wholeheartedly. I started with HTML, CSS, and JavaScript, before gradually expanding my knowledge and exploring React, Node, MongoDB, and then most recently PHP, Laravel, and MySQL. Outside of programming I'm a thorougher enjoyer of movies, television shows, and music (well, who isn't?)."
        }
      </p>

      <p className="aboutmetext mt-5 font-thin lg:text-base text-sm leading-5 lg:leading-6 font-outfit opacity-0 transform translate-y-5 transition-all linear duration-500">
        {
          "Now the important part, what can I actually do? Have a look at the skills I'm comfortable with below!"
        }
      </p>
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden lg:block bottom-96 left-48 max-w-10 opacity-30"
        value="-1"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden lg:block max-w-10 bottom-96 right-48 opacity-10"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden lg:block max-w-10 top-96 -left-60 opacity-40"
        value="5"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden lg:block max-w-10 top-0 -right-40 opacity-50"
        value="1"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden lg:block max-w-10 -top-24 -left-96 opacity-20"
        value="-4"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden lg:block max-w-10 top-96 -right-1/3 opacity-30"
        value="3"
      />
    </div>
  );
};

export default AboutMe;
