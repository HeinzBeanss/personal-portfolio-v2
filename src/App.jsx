import Header from "../src/Components/Header";
import TitleScreen from "../src/Components/TitleScreen";
import Asteroid from "../src/Components/Asteroid";
import AboutMe from "../src/Components/AboutMe";
import Projects from "../src/Components/Projects";

const App = () => {
  return (
    <div className="font-roboto relative h-full">
      <div className="w-full relative bg-gradient-to-br from-space via-space2 via-60% to-space overflow-hidden">
        <Header />
        <TitleScreen />
        <AboutMe />
        <Asteroid />
        <Projects />
        <div className="w-48 h-48 relative flex justify-center items-center">
          <p className="text-white tracking-wider text-lg font-light">
            HTML/CSS
          </p>
          {/* <svg
            className="max-w-24 absolute"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="circle" cx="50" cy="50" r="45" />
          </svg> */}

          {/* <svg
            className="max-w-48 p-1.5 absolute -rotate-90"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="circle-repeat" cx="50" cy="50" r="45" />
          </svg> */}

          <svg
            className="max-w-48 p-1.5 absolute -rotate-90"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="circle-repeats" cx="50" cy="50" r="45" />
          </svg>
        </div>
        <div className="h-screen w-full"></div>
      </div>
    </div>
  );
};

export default App;
