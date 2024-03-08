import Header from "../src/Components/Header";
import TitleScreen from "../src/Components/TitleScreen";

const App = () => {
  return (
    <div className="font-roboto relative h-full">
      <div className="w-full relative bg-gradient-to-br from-space via-space2 to-space overflow-hidden">
        <Header />
        <TitleScreen />

        <div className="h-screen w-full"></div>
        <div className="rotate-12">
          <div className="box bg-red-500 w-20 h-20 animate-move-rotate -rotate-12"></div>
        </div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div>
    </div>
  );
};

export default App;
