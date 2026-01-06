
const Projects = () => {
  const projects = [
    {
      title: "Teerex",
      img: "./assets/teerexmark.png",
      github: "https://github.com/PraveenDKatti/geektrust/tree/main/TeeRex-Store",
      liveDemo: "https://teerexmark.netlify.app/"
    },
    {
      title: "Habitore",
      img: "./assets/habitore.png",
      github: "https://github.com/PraveenDKatti/habitore",
      liveDemo: "https://habitore.vercel.app/",
    },
    { title: "Project Three", img: "./assets/project-3.png" },
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-white py-16 px-6 lg:px-8 overflow-hidden selection:bg-cyan-100">
      <div className="mb-12">
        <h1 className="text-slate-900 text-4xl font-black tracking-tighter uppercase">Projects</h1>
        <p className="text-gray-500 font-mono text-xs mt-1 uppercase tracking-[0.3em] uppercase">Browse My Recent Works</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <div key={index} className="flex-1 bg-slate-100 rounded-xl hover:shadow-xl hover:border hover:border-cyan-200 overflow-hidden text-center h-fit">
            <div className="h-[200px] w-full bg-black p-4">
              <img src={project.img}
                alt={project.title}
                className="w-full h-full" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <div className="flex justify-center gap-4">
                <button
                  className="btn font-semibold p-2 w-24 rounded-[2rem] border border-gray-light hover:bg-gray-800 hover:text-white transition-all duration-300"
                  onClick={() => window.open(project.github)}
                >
                  Github
                </button>
                <button
                  className="btn font-semibold p-2 w-24 rounded-[2rem] border border-gray-light hover:bg-gray-800 hover:text-white transition-all duration-300"
                  onClick={() => window.open(project.liveDemo)}
                >
                  Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute right-8 bottom-4 animate-bounce cursor-pointer opacity-50 hover:opacity-100"
        onClick={() => window.location.href = './#contact'}
      >
        <img src="./assets/arrow.png" alt="Scroll Down" className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Projects;