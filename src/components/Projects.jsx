const Projects = () => {
  const projects = [
    { title: "Project One", img: "./assets/project-1.png", github: "https://github.com", demo: "https://github.com" },
    { title: "Project Two", img: "./assets/project-2.png", github: "https://github.com", demo: "https://github.com" },
    { title: "Project Three", img: "./assets/project-3.png", github: "https://github.com", demo: "https://github.com" },
  ];

  return (
    <section id="projects">
      <p className="section-text-p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          
          {projects.map((project, index) => (
            <div key={index} className="details-container color-container">
              <div className="article-container">
                <img src={project.img} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open(project.github)}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open(project.demo)}>
                  Live Demo
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => (window.location.href = "./#projects")} />
    </section>
  );
};

export default Projects;