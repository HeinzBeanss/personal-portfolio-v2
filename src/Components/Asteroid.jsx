import AsteroidPNG from "/src/assets/ai-asteroid.png";

const Asteroid = () => {
  return (
    <div className="rotate-3 absolute z-10 w-24 h-24 sm:w-32 lg:w-40 sm:h-32 lg:h-40">
      <img
        src={AsteroidPNG}
        alt="Asteroid"
        className=" animate-asteroid-one -rotate-12 drop-shadow-glow"
      ></img>
    </div>
  );
};

export default Asteroid;
