const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML", level: "" },
        { name: "CSS", level: "" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Basic" },
        { name: "Bootstrap", level: "" },
        { name: "Tailwind", level: "" },
      ]
    },
    {
      category: "Other Technologies",
      items: [
        { name: "MySQL", level: "Basic" },
        { name: "Node JS", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative h-fit mb-30">
      <p className="text-center text-gray">Explore My</p>
      <h1 className="text-[3rem] font-bold text-center mb-12">Skills</h1>
      
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {skills.map((cat, index) => (
          <div key={index} className="p-6 flex-1 bg-white rounded-[2rem] border border-gray-light">
            <h2 className="text-gray font-semibold text-[1.75rem] mb-8 text-center">{cat.category}</h2>
            <div className="flex flex-wrap gap-8 justify-around">
              {cat.items.map((skill) => (
                <article key={skill.name} className="flex w-[10rem] gap-4">
                  <img src="./assets/checkmark.png" alt="checkmark" className="h-8 w-8" />
                  <div>
                    <h3 className="font-bold">{skill.name}</h3>
                    <p className="text-gray text-sm">{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="absolute right-0 -bottom-10 h-8 cursor-pointer" onClick={() => window.location.href = './#projects'} />
    </section>
  );
};

export default Skills;