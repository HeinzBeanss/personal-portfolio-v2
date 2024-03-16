import AsteroidPNG from "/src/assets/ai-asteroid.png";

const Asteroid = () => {
  return (
    <div className="rotate-3 absolute z-10">
      <img
        src={AsteroidPNG}
        alt="Asteroid"
        className="w-40 h-40 animate-asteroid-one -rotate-12 drop-shadow-glow"
      ></img>
    </div>
  );
};

export default Asteroid;
