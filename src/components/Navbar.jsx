import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
  ];

  return (
    <nav className='top-0 w-full z-50 transition-all duration-300 bg-transparent py-6'>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* BRAND / LOGO - Solves the name repetition issue */}
        <a href="#" className="text-2xl font-black tracking-tighter hover:text-gray-600 transition-colors">
          &lt;PK /&gt;
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a 
                href={link.href} 
                className="text-gray-700 font-medium text-lg relative group overflow-hidden"
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
          {/* specialized CTA button in nav */}
          <li>
            <a href="#contact" className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all">
              Let's Talk
            </a>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <div className="relative lg:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-2 cursor-pointer">
            <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={`absolute z-40 inset-0 bg-white flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} ${menuOpen ? "block" : "hidden"}`}>
          <ul className="text-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a 
                  href={link.href} 
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-bold text-gray-800 hover:text-gray-500"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;