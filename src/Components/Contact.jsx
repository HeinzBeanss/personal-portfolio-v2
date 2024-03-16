const Contact = () => {
  return (
    <div
      id="Contact"
      className="relative mt-72 mb-16 mx-auto max-w-screen-lg text-white/90 tracking-wider text-justify parallax-wrap"
    >
      <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-lighter to-white text-center text-3xl font-extrabold leading-6 tracking-widest mb-5">
        GET IN TOUCH
      </h2>

      <div className="flex justify-center items-center mb-5 ">
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
        <div className="w-72 border-lightest border-b opacity-60"></div>
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
    </div>
  );
};

export default Contact;
