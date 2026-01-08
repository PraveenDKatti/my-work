const Footer = () => {
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" }
  ];

  return (
    <footer className="h-[26vh] mx-4 flex flex-col justify-center items-center">
      <nav className="mb-4">
        <ul className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="text-gray-700 font-medium text-lg relative group overflow-hidden"
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black group-hover:bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-gray text-center">Copyright &#169; 2026 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;