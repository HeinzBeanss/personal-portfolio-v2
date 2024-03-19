import AsteroidPNG from "/src/assets/ai-asteroid.png";

const Asteroid = () => {
  return (
    <div className="rotate-3 absolute z-10 w-20 h-20 sm:w-40 sm:h-40">
      <img
        src={AsteroidPNG}
        alt="Asteroid"
        className=" animate-asteroid-one -rotate-12 drop-shadow-glow"
      ></img>
    </div>
  );
};

export default Asteroid;
