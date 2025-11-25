import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex justify-around items-center h-[17vh]">
        <div className="text-[2rem] cursor-default">Praveen Katti</div>
        <ul className="flex gap-8 list-none text-[1.5rem]">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a 
                href={link.href} 
                className="text-black decoration-white decoration-2 hover:text-gray hover:underline hover:underline-offset-[1rem] hover:decoration-[rgb(181,181,181)] transition-all duration-300"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Nav */}
      <nav className="flex lg:hidden justify-around items-center h-[17vh]">
        <div className="text-[2rem] cursor-default">Praveen Katti</div>
        <div className="relative inline-block">
          <div 
            className={`flex flex-col justify-between h-[24px] w-[30px] cursor-pointer transition-all duration-300 ${menuOpen ? "open" : ""}`} 
            onClick={toggleMenu}
          >
            <span className={`w-full h-[2px] bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[10px]" : ""}`}></span>
            <span className={`w-full h-[2px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-[2px] bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[11px]" : ""}`}></span>
          </div>
          
          <div className={`absolute top-[150%] right-0 bg-white w-max overflow-hidden transition-all duration-300 shadow-xl rounded-lg ${menuOpen ? "max-h-[300px] p-4" : "max-h-0"}`}>
            <ul className="list-none">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href} 
                    onClick={toggleMenu}
                    className="block p-2 text-center text-[1.5rem] text-black hover:text-gray transition-all duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;