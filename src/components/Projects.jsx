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
    { 
      title: "Vibernet (youtube-clone)", 
      img: "./assets/vibernet.png",
      github: "",
      liveDemo: ""
     },
    { 
      title: "StockPulse", 
      img: "./assets/stockpulse.png",
      github: "",
      liveDemo: ""
     },
    { 
      title: "ChitChat", 
      img: "./assets/chitchat.png",
      github: "",
      liveDemo: ""
     },
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Kept original style */}
        <div className="mb-16">
          <h1 className="text-slate-900 text-4xl font-black tracking-tighter uppercase">Projects</h1>
          <p className="text-gray-500 font-mono text-xs mt-1 uppercase tracking-[0.3em]">Browse My Recent Works</p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col">
              
              {/* Landscape Image Container with Overlay */}
              <div className="relative h-42 md:h-50 w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-200/60">
                <img 
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />

                {/* Technical Overlay - Buttons on Image */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3">
                  <button
                    className="font-mono text-[10px] font-black w-32 py-2.5 rounded-lg bg-white text-slate-900 hover:bg-cyan-600 hover:text-white transition-all uppercase tracking-widest"
                    onClick={() => project.github && window.open(project.github)}
                  >
                    github
                  </button>
                  <button
                    className="font-mono text-[10px] font-black w-32 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-cyan-600 transition-all uppercase tracking-widest"
                    onClick={() => project.liveDemo && window.open(project.liveDemo)}
                  >
                    live_view
                  </button>
                </div>
              </div>

              {/* Minimal Text Below */}
              <div className="mt-4 flex justify-between gap-5 items-center px-1">
                <h2 className="text-xl font-bold text-slate-800 tracking-tight leading-none">{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;