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
        <ul className="flex gap-8 list-none text-[1.2rem]">
          {navLinks.map((link) => (
             <li key={link.text}>
               <a href={link.href} className="text-black hover:text-gray hover:underline hover:underline-offset-8 decoration-gray-light transition-all duration-300">
                 {link.text}
               </a>
             </li>
          ))}
        </ul>
      </nav>
      <p className="text-gray text-center">Copyright &#169; 2025 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;