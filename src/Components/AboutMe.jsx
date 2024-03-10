const AboutMe = () => {
  return (
    <div className="mt-72 mb-24 mx-auto max-w-screen-lg text-white/90 tracking-wider text-justify">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-lighter to-white text-center text-3xl font-extrabold leading-6 tracking-widest mb-5">
        A LITTLE ABOUT ME
      </h2>

      <div className="flex justify-center items-center mb-5 opacity-60">
        <div className="w-3 h-3 rounded-full border-lightest border"></div>
        <div className="w-96 border-lightest border-b"></div>
        <div className="w-3 h-3 rounded-full border-lightest border"></div>
      </div>
      <p className="font-thin leading-6 text-lg ">
        {
          "Somewhere on Planet Earth, in a small town called Dewsbury, you'll find me constantly coding... Hi I'm David Bean, and you won't find a more committed individual than myself with regard to mastering the art of web development. Starting my independent journey over a year ago I have since self-studied consistently, achieving proficiency in HTML, CSS, and JavaScript alongside its most popular Framework, React. Then continuing my progress I explored server-side programming with Node and Express to become a full-stack developer. These skills, alongside a combination of experience with several Adobe Design software from my Graphic Design degree from the University of Huddersfield, make me both a versatile developer and designer."
        }
      </p>
    </div>
  );
};

export default AboutMe;
