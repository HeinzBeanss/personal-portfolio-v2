import planet from "../assets/planet-portfolio-final.png";
import planetlarge from "../assets/planet-portfolio-final-large.png";
import planetnoglow from "../assets/planet-portfolio-final-noglow.svg";
import planetsvg from "../assets/planet-portfolio-final-svg.svg";
import star from "../assets/star.svg";

const TitleScreen = () => {
  return (
    <div className="bg-gradient-to-br from-space to-space2 h-screen">
      <div className="relative w-full h-full">
        {/* <div className="absolute w-96 h-96 rounded-full bg-gray-500 -bottom-40 inset-x-1/2 transform -translate-x-1/2 drop-shadow-glow"></div> */}
        {/* <div className="rounded-full w-32 h-32 absolute bg-white bottom-28 inset-x-1/2 transform -translate-x-1/2 translate-y-1/3 drop-shadow-glow"></div> */}
        <img
          // src={planet}
          src={planetsvg}
          alt="planet"
          className="absolute w-3/4 lg:max-w-screen-xl 3xl:max-w-full -bottom-16 3xl:-bottom-20 inset-x-1/2 transform -translate-x-1/2 translate-y-1/3 "
        />
        <img
          src={star}
          alt="star"
          className="absolute bottom-96 left-20 max-w-10"
        />
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 top-52 left-48 opacity-80"
        />
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 bottom-32 right-48 opacity-80"
        />
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 top-96 inset-x-1/3 opacity-80"
        />
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 top-60 right-20 opacity-80"
        />
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 top-96 right-96 opacity-80"
        />
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 bottom-20 left-96 opacity-80"
        />
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 top-32 right-1/3 opacity-80"
        />{" "}
        <img
          src={star}
          alt="star"
          className="absolute max-w-10 top-2 right-1/2 opacity-80"
        />
      </div>
    </div>
  );
};

export default TitleScreen;
