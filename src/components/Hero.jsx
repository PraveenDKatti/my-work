import React from 'react';

const Hero = () => {
  
  return (
    <section id="profile" className="relative flex justify-center items-center p-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 space-y-6">
          
          <p className="font-semibold text-gray-500 text-lg tracking-wide uppercase">
            Hello, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Praveen Katti
          </h1>
        </div>

        {/* RIGHT: Image (Clean Geometric Style) */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group">
            
            {/* Background Offset Square (The shadow effect) */}
            <div className="absolute top-4 left-4 w-full h-full bg-gray-200 rounded-3xl -z-10 group-hover:bg-gray-300 transition-colors duration-300"></div>
            
            {/* Main Image Container */}
            <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden border-2 border-white shadow-xl">
              <img 
                src="./assets/profile-pic.jpg" 
                alt="Praveen Katti" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute right-8 bottom-4 animate-bounce cursor-pointer opacity-50 hover:opacity-100" onClick={() => window.location.href = './#about'}>
         <img src="./assets/arrow.png" alt="Scroll Down" className="h-6 w-6" />
      </div>

    </section>
  );
};

export default Hero;