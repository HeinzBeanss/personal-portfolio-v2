const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-around text-white px-2 py-6 font-thin z-30">
      <div className="opacity-40 hover:opacity-80">Logo</div>

      <ul className="flex gap-8 tracking-widest ">
        <li className="opacity-40 hover:opacity-80 cursor-pointer">About</li>
        <li className="opacity-40 hover:opacity-80 cursor-pointer">Projects</li>
        <li className="opacity-40 hover:opacity-80 cursor-pointer">Contact</li>
      </ul>
    </header>
  );
};

export default Header;
