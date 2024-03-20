import SatellitePNG from "/src/assets/satellite.png";

const Satellite = () => {
  return (
    <div className="rotate-[8deg] absolute z-10 w-32 sm:w-60 lg:w-96">
      <img
        src={SatellitePNG}
        alt="Satellite"
        className=" animate-satellite-one -rotate-12 drop-shadow-glow"
      ></img>
    </div>
  );
};

export default Satellite;
