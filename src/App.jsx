import Header from "./Components/Header";
import TitleScreen from "./Components/TitleScreen";
import Asteroid from "./Components/Asteroid";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <div className="font-roboto relative h-full">
      <div className="w-full relative bg-gradient-to-br from-space via-space2 via-60% to-space overflow-hidden">
        <Header />
        <TitleScreen />
        <AboutMe />
        <Skills />
        <Asteroid />
        <Projects />
        <div className="h-screen w-full"></div>
      </div>
    </div>
  );
};

export default App;
