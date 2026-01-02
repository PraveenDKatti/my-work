const Skills = () => {
  const skills = [
  { name: "HTML", level: 10, icon: "devicon-html5-plain colored" },
  { name: "CSS", level: 10, icon: "devicon-css3-plain colored" },
  { name: "JavaScript", level: 9, icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", level: 5, icon: "devicon-typescript-plain colored" },
  { name: "Bootstrap", level: 7, icon: "devicon-bootstrap-plain colored" },
  { name: "Tailwind", level: 8, icon: "devicon-tailwindcss-original colored" },
  { name: "MySQL", level: 6, icon: "devicon-mysql-plain colored" },
  { name: "NodeJS", level: 6, icon: "devicon-nodejs-plain colored" },
  { name: "React", level: 8, icon: "devicon-react-original colored" },
  { name: "Github", level: 7, icon: "devicon-github-original colored" },
  { name: "MongoDB", level: 6, icon: "devicon-mongodb-plain colored" },
  { name: "Python", level: 6, icon: "devicon-python-plain colored" },
  { name: "Java", level: 8, icon: "devicon-java-plain colored" },
  { name: "Express", level: 5, icon: "devicon-express-original colored" }
];

  return (
    <section id="skills" className="relative h-fit mb-30">
      <p className="text-center text-gray">Explore My</p>
      <h1 className="text-[3rem] font-bold text-center mb-12">Skills</h1>

      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="p-6 flex flex-col flex-1 bg-white justify-center items-center rounded-[2rem] shadow-md">
            <div className="">
              {/* progress */}
              <div className="">
              </div>
              <i className={`${skill.icon} text-4xl`}></i>
            </div>
            <h3 className="font-bold">{skill.name}</h3>
          </div>
        ))
        }
      </div>
      <img src="./assets/arrow.png" alt="Arrow" className="absolute right-0 -bottom-10 h-8 cursor-pointer" onClick={() => window.location.href = './#projects'} />
    </section>
  );
};

export default Skills;