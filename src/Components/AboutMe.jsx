import star from "../assets/star.svg";

const AboutMe = () => {
  return (
    <div className="relative mt-72 mb-12 mx-auto max-w-screen-lg text-white/90 tracking-wider text-justify parallax-wrap">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-lighter to-white text-center text-3xl font-extrabold leading-6 tracking-widest mb-5">
        A LITTLE ABOUT ME
      </h2>
      <div className="flex justify-center items-center mb-5 ">
        {/* <div className="w-3 h-3 rounded-full border-lightest border"></div> */}
        <svg
          className="max-w-3 -rotate-90 animate-rotate-forward-underline"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-underline stroke-[10px] fill-none stroke-lightest"
            cx="50"
            cy="50"
            r="45"
          />
        </svg>
        <div className="w-96 border-lightest border-b opacity-60"></div>
        <svg
          className="max-w-3 -rotate-90 animate-rotate-backward-underline"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-underline stroke-[10px] fill-none stroke-lightest"
            cx="50"
            cy="50"
            r="45"
          />
        </svg>
        {/* <div className="w-3 h-3 rounded-full border-lightest border"></div> */}
      </div>
      <p className="mt-40  font-thin leading-6 text-base ">
        {
          "Somewhere on Planet Earth, in a small town called Dewsbury, you'll find me constantly coding... Hi I'm David Bean, and you won't find a more committed individual than myself with regard to mastering the art of web development. Starting my independent journey over a year ago I have since self-studied consistently, achieving proficiency in HTML, CSS, and JavaScript alongside its most popular Framework, React. Then continuing my progress I explored server-side programming with Node and Express to become a full-stack developer. These skills, alongside a combination of experience with several Adobe Design software from my Graphic Design degree from the University of Huddersfield, make me both a versatile developer and designer."
        }
      </p>
      <img
        src={star}
        alt="star"
        className="absolute star-parallax bottom-96 left-48 max-w-10"
        value="-1"
      />
      {/* <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 top-72 left-48 opacity-60"
                value="-2"
      /> */}
      <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 bottom-80 right-48 opacity-80"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 top-40 -left-60 opacity-70"
        value="5"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 top-0 -right-40 opacity-80"
        value="1"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 -top-24 -left-96 opacity-50"
        value="-4"
      />
      {/* <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 -bottom-32 right-48 opacity-80"
                value="-2"
      /> */}
      <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 top-96 -right-1/3 opacity-50"
        value="3"
      />
      {/* <img
        src={star}
        alt="star"
        className="absolute star-parallax max-w-10 top-2 right-1/2 opacity-80"
                value="-2"
      /> */}
    </div>
  );
};

export default AboutMe;
