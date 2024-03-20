import planetsvg from "../assets/planet-portfolio-final-svg.svg";
import star from "../assets/star2.svg";
// import star2 from "../assets/star2.svg";
import shootingstar from "../assets/shootingstar.svg";

const TitleText = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center pb-40 3xl:pb-72 gap-8 parallax-wrap">
      <h2 className="text-white text-5xl sm:text-8xl font-rubik transform">
        {"I'M DAVID"}
      </h2>
      <p className="text-white font-thin tracking-wider text-sm sm:text-xl opacity-80">
        a full-stack developer.
      </p>
      <img
        src={planetsvg}
        alt="planet"
        className="absolute w-full scale-twice sm:scale-100 sm:w-3/4 sm:min-w-[900px] lg:max-w-screen-xl 3xl:max-w-full bottom-4 sm:-bottom-16 3xl:-bottom-24 inset-x-1/2 transform -translate-x-1/2 translate-y-1/3"
      />
      <img
        src={shootingstar}
        alt="Shooting Star"
        className="absolute max-w-24 -rotate-90 -bottom-32 -right-32 animate-shooting-star"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax sm:block absolute bottom-52 left-4 sm:bottom-96 sm:left-20 max-w-10 opacity-40 sm:opacity-100"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax sm:block absolute max-w-10 top-20 left-12 sm:top-52 sm:left-48 opacity-60"
        value="4"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax sm:block absolute max-w-10 bottom-52 sm:bottom-32 right-4 sm:right-48 opacity-60"
        value="6"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax hidden sm:block absolute max-w-10 top-96 inset-x-1/3 opacity-40"
        value="-3"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax hidden sm:block absolute max-w-10 top-60 right-32 opacity-80"
        value="-5"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax hidden sm:block absolute max-w-10 top-1/2 right-96 opacity-80"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax sm:block absolute max-w-10 bottom-20 left-96 opacity-50"
        value="1"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax hidden sm:block absolute max-w-10 top-32 right-1/3 opacity-50"
        value="3"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax hidden sm:block absolute max-w-10 top-2 right-2/3 opacity-80"
        value="-2"
      />
    </div>
  );
};

export default TitleText;
