const Hero = () => {
  const openPdf = () => window.open('./assets/PraveenKatti.pdf');
  
  return (
    <section id="profile" className="flex flex-col lg:flex-row justify-center items-center gap-10 h-[80vh] pt-[4vh]">
      <div className="h-[400px] w-[400px]">
        {/* Ensure you have the image in public/assets/ */}
        <img src="./assets/profile-pic.jpg" alt="Praveen profile" className="h-full w-full object-cover rounded-full" />
      </div>
      
      <div className="text-center self-center">
        <p className="font-semibold text-gray mb-1">Hello I'm</p>
        <h1 className="text-[3rem] font-bold mb-4">Praveen Katti</h1>
        <p className="text-[1.75rem] font-semibold text-gray mb-4">Software Developer</p>
        
        <div className="flex justify-center gap-4 mb-4">
          <button 
            className="btn font-semibold p-4 w-36 rounded-[2rem] border border-gray-dark hover:bg-gray-dark hover:text-white transition-all duration-300"
            onClick={openPdf}
          >
            Download CV
          </button>
          <button 
            className="btn font-semibold p-4 w-36 rounded-[2rem] bg-gray-dark text-white hover:bg-black transition-all duration-300"
            onClick={() => window.location.href = './#contact'}
          >
            Contact Info
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <img src="./assets/linkedin.png" alt="LinkedIn" className="h-8 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/praveenkatti')} />
          <img src="./assets/github.png" alt="Github" className="h-8 cursor-pointer" onClick={() => window.open('https://github.com/PraveenDKatti')} />
        </div>
      </div>
    </section>
  );
};

export default Hero;