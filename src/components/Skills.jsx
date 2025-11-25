const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "" },
    { name: "CSS", level: "" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Basic" },
    { name: "Bootstrap", level: "" },
    { name: "Tailwind", level: "" },
  ];

  const backendSkills = [
    { name: "MySQL", level: "Basic" },
    { name: "Node JS", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ];

  // Helper component for a single skill item
  const SkillItem = ({ name, level }) => (
    <article>
      <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
      <div>
        <h3>{name}</h3>
        {level && <p>{level}</p>}
      </div>
    </article>
  );

  return (
    <section id="skills">
      <p className="section-text-p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          
          {/* Frontend Column */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Backend Column */}
          <div className="details-container">
            <h2 className="experience-sub-title">Other Technologies</h2>
            <div className="article-container">
              {backendSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => (window.location.href = "./#projects")} />
    </section>
  );
};

export default Skills;