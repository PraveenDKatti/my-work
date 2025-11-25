const About = () => {
  return (
    <section id="about" className="relative h-fit">
      <p className="text-center section-text-p1">Get To Know More</p>
      <h1 className="text-[3rem] font-bold text-center mb-12">About Me</h1>
      
      <div className="flex flex-col lg:flex-row gap-10 h-full">
        {/* You can add your About image here if you have one, your HTML had it commented out/missing */}
        
        <div className="flex flex-col justify-center gap-8 w-full">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            
            <div className="p-6 flex-1 bg-white rounded-[2rem] border border-gray-light text-center cursor-default">
              <img src="./assets/experience.png" alt="Experience" className="h-8 mx-auto mb-2" />
              <h3 className="font-bold text-lg">Experience</h3>
              <p className="text-gray">Fresher <br />Software Developer</p>
            </div>

            <div className="p-6 flex-1 bg-white rounded-[2rem] border border-gray-light text-center cursor-default">
              <img src="./assets/education.png" alt="Education" className="h-8 mx-auto mb-2" />
              <h3 className="font-bold text-lg">Education</h3>
              <p className="text-gray">B.E Bachelors Degree</p>
            </div>
          </div>

          <div className="text-justify lg:text-center text-gray p-4">
            <p>
              Eager to join an innovative organization where I can apply my knowledge and skills for the development of the organization and also expand my skills.
            </p>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="absolute right-0 bottom-10 h-8 cursor-pointer" onClick={() => window.location.href = './#experience'} />
    </section>
  );
};

export default About;