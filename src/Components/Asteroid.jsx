import AsteroidPNG from "/src/assets/ai-asteroid.png";

const Asteroid = () => {
  return (
    <div className="rotate-6">
      <img
        src={AsteroidPNG}
        alt="Asteroid"
        className="w-40 h-40 animate-move-rotate -rotate-12 drop-shadow-glow"
      ></img>
    </div>
  );
};

export default Asteroid;