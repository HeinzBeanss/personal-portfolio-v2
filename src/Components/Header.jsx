import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Header = () => {
  const [navbarVisibility, setNavbarVisibility] = useState(true);

  useEffect(() => {
    const fadeNavBar = () => {
      const scrollY = window.scrollY;

      if (scrollY > 240) {
        setNavbarVisibility(false);
      } else {
        setNavbarVisibility(true);
      }
    };

    window.addEventListener("scroll", fadeNavBar);
  }, []);

  return (
    <header
      className={` fixed top-0 w-full hidden sm:flex justify-around text-white px-2 py-6 font-thin z-30 transition-opacity duration-1000 ease-in-out ${
        navbarVisibility ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="opacity-40 hover:opacity-80 tracking-widest">
        <a href="https://www.davidbean.dev">David Bean</a>
      </div>

      <ul className="flex gap-8 tracking-widest ">
        <Link activeClass="active" smooth spy to={"About"}>
          <li className="opacity-40 text-sm hover:opacity-80 cursor-pointer">
            About
          </li>
        </Link>
        <Link activeClass="active" smooth spy to={"Projects"}>
          <li className="opacity-40 text-sm hover:opacity-80 cursor-pointer">
            Projects
          </li>
        </Link>
        <Link activeClass="active" smooth spy to={"Contact"}>
          <li className="opacity-40 text-sm hover:opacity-80 cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
