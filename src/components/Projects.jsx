const Projects = () => {
  const projects = [
    { title: "Teerex", img: "https://s3.eu-central-2.wasabisys.com/w.storage.screenshotapi.net/teerexmark_netlify_app_9629ddf1398a.png" },
    { title: "Project Two", img: "./assets/project-2.png" },
    { title: "Project Three", img: "./assets/project-3.png" },
  ];

  return (
    <section id="projects" className="relative h-fit">
      <p className="text-center text-gray">Browse My Recent</p>
      <h1 className="text-[3rem] font-bold text-center mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {projects.map((project, index) => (
          <div key={index} className="p-6 flex-1 bg-[#fafafa] rounded-[2rem] border border-gray-light text-center h-fit">
            <div className="h-[300px] w-full rounded-[2rem] overflow-hidden mb-4">
              <img src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover" />
            </div>
            <h2 className="text-[1.75rem] font-bold my-4">{project.title}</h2>
            <div className="flex justify-center gap-4">
              <button 
                className="btn font-semibold p-4 w-32 rounded-[2rem] border border-gray-light hover:bg-gray-800 hover:text-white transition-all duration-300"
                onClick={() => window.open('https://github.com/PraveenDKatti/geektrust/tree/main/TeeRex-Store')}
              >
                Github
              </button>
              <button 
                className="btn font-semibold p-4 w-32 rounded-[2rem] border border-gray-light hover:bg-gray-800 hover:text-white transition-all duration-300"
                onClick={() => window.open('https://teerexmark.netlify.app/')}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="absolute right-0 -bottom-10 h-8 cursor-pointer" onClick={() => window.location.href = './#contact'} />
    </section>
  );
};

export default Projects;