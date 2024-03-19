import star from "../assets/star2.svg";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="relative mt-24 sm:mt-72 mb-6 sm:mb-16 mx-8 md:mx-auto max-w-screen-lg text-white/90 tracking-wider text-justify parallax-wrap"
    >
      <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-lighter to-white text-center text-lg sm:text-3xl font-extrabold leading-6 tracking-widest mb-2 sm:mb-5">
        GET IN TOUCH
      </h2>
      <div className="flex justify-center items-center mb-2 sm:mb-5">
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
        <div className="w-40 sm:w-72 border-lightest border-b opacity-60"></div>
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
      </div>
      <p className="aboutmetext mb-8 mt-5 font-thin text-xs sm:text-base leading-6 font-outfit opacity-0 transform translate-y-5 transition-all linear duration-500 text-center">
        You&apos;re more than welcome to drop me an email using the form below.
      </p>
      <form
        className="flex flex-col"
        action="https://formsubmit.co/f9c5245a9e75583fb8ccc82f0885ca47"
        method="POST"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 font-roboto">
          <div className="flex flex-col w-full gap-1 sm:gap-0">
            <label
              htmlFor="name"
              className="pl-0.5 text-xs sm:text-sm font-light text-lightest"
            >
              NAME
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Neil Armstrong"
              className="pb-1 pl-0.5 text-xs sm:text-sm placeholder-white/30 bg-transparent border-b border-white/20 font-outfit font-light tracking-wide outline-0 autofill:shadow-none"
              required
            ></input>
          </div>

          <div className="flex flex-col w-full gap-1 sm:gap-0">
            <label
              htmlFor="email"
              className="pl-0.5 text-xs sm:text-sm font-light text-lightest"
            >
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="pb-1 pl-0.5 text-xs sm:text-sm placeholder-white/30 bg-transparent border-b border-white/20 font-outfit font-light tracking-wide outline-0 autofill:shadow-none"
              placeholder="jupiter@gmail.com"
              required
            ></input>
          </div>

          <div className="flex flex-col w-full gap-1 sm:gap-0">
            <label
              htmlFor="subject"
              className="pl-0.5 text-xs sm:text-sm font-light text-lightest"
            >
              SUBJECT
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="pb-1 pl-0.5 text-xs sm:text-sm placeholder-white/30 bg-transparent border-b border-white/20 font-outfit font-light tracking-wide outline-none"
              placeholder="Pluto is a planet"
            ></input>
          </div>
        </div>
        <label
          htmlFor="message"
          className="mt-4 mb-1 pl-0.5 text-xs sm:text-sm font-light text-lightest"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          type="text"
          name="message"
          cols="1"
          rows="2"
          className="pb-1 pl-0.5 text-xs sm:text-sm placeholder-white/30 bg-transparent border-b border-white/20 font-outfit font-light tracking-wide outline-none resize-none"
          placeholder="Write your message here..."
          required
        ></textarea>
        <button
          className="mt-4 px-2 py-2 text-xs sm:text-sm font-roboto font-light tracking-wider w-40 mx-auto border-b border-transparent hover:text-lightest hover:border-lightest"
          type="submit"
        >
          SEND EMAIL
        </button>
      </form>
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden sm:block max-w-10 top-72 -right-1/3 opacity-50"
        value="2"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden sm:block max-w-10 -top-12 -right-72 opacity-10"
        value="2"
      />
      <img
        src={star}
        alt="star"
        className="absolute star-parallax hidden sm:block max-w-10 top-80 -left-72 opacity-40"
        value="2"
      />{" "}
    </div>
  );
};

export default Contact;
