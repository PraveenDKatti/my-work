import React from "react";

const About = () => {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-screen py-16 px-6 lg:px-20">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mt-2">
          Introduction
        </h1>
        <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">My steps to Developers Journey</p>
        <div className="w-16 h-1 bg-gray-800 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full max-w-6xl">
        
        {/* LEFT COLUMN: Narrative Bio (Span 3 of 5 columns) */}
        <div className="lg:col-span-3 space-y-6 text-gray-600">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            I'm a MERN Stack Developer driven by <span className="text-black underline decoration-gray-300 decoration-4 underline-offset-2">impactful code.</span>
          </h3>
          
          <p className="leading-relaxed text-lg">
            I am a results-driven developer with hands-on experience building responsive web applications and 
            scalable backend services. My expertise lies in the <strong>MERN stack</strong> (MongoDB, Express, 
            React, Node.js), where I enjoy crafting clean, efficient code to solve real-world problems 7.
          </p>

          <p className="leading-relaxed text-lg">
            Currently based in <strong>Vijayapura, Karnataka</strong> , I specialize in engineering robust 
            REST APIs and creating seamless user interfaces. Whether it's optimizing performance or architecting 
            a new database schema, I am passionate about every layer of development.
          </p>
        </div>

        {/* RIGHT COLUMN: Stacked Info Cards (Span 2 of 5 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Education Card - Styled as a wide bar */}
          <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full group-hover:bg-black transition-colors duration-300">
                <img src="./assets/education.png" alt="Education" className="h-6 w-6 group-hover:invert" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Education</h4>
                <p className="text-gray-600 font-medium mt-1">B.E. Computer Science</p>
                <p className="text-sm text-gray-400 mt-1">BLDEA's V.P. Dr. P.G. Halakatti College</p>
              </div>
            </div>
          </div>

          {/* Experience Card - Styled as a wide bar */}
          <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full group-hover:bg-black transition-colors duration-300">
                <img src="./assets/experience.png" alt="Experience" className="h-6 w-6 group-hover:invert" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Experience</h4>
                <p className="text-gray-600 font-medium mt-1">MERN Stack Developer</p>
                <p className="text-sm text-gray-400 mt-1">Full-Stack Web Development</p>
              </div>
            </div>
          </div>
          
          {/* Subtle "Fun Fact" or "Goal" area based on Resume */}
          <div className="pt-4">
            <p className="italic text-gray-500 border-l-4 border-gray-300 pl-4">
              "Focused on problem-solving and clean coding to build digital products that matter." 
            </p>
          </div>

        </div>
      </div>
      
      <img 
        src="./assets/arrow.png" 
        alt="Arrow" 
        className="absolute bottom-4 right-8 h-6 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" 
        onClick={() => window.location.href = './#experience'} 
      />
    </section>
  );
};

export default About;