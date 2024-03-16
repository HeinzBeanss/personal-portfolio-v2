import { useEffect } from "react";

import Header from "./Components/Header";
import TitleScreen from "./Components/TitleScreen";
import Asteroid from "./Components/Asteroid";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      document
        .querySelectorAll(".parallax-wrap .star-parallax")
        .forEach((shift) => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;

          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="font-roboto relative h-full">
      <div className="w-full relative bg-gradient-to-br from-space via-space2 via-60% to-space overflow-hidden">
        <Header />
        <TitleScreen />
        <AboutMe />
        <Skills />

        <Asteroid />
        <Projects />
        {/* <div className="h-screen w-full"></div> */}
      </div>
    </div>
  );
};

export default App;
