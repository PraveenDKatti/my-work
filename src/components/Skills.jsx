import React from 'react';

const Skills = () => {
  const stackLayers = [
    {
      layer: "1. UI / Frontend",
      skills: [
        { name: "React", level: 8, icon: "devicon-react-original colored" },
        { name: "HTML/CSS", level: 10, icon: "devicon-html5-plain colored" },
        { name: "Tailwind", level: 9, icon: "devicon-tailwindcss-original colored" },
      ]
    },
    {
      layer: "2. State & Logic",
      skills: [
        { name: "JavaScript", level: 9, icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", level: 5, icon: "devicon-typescript-plain colored" },
        { name: "Redux/Zustand", level: 7, icon: "devicon-react-original" },
      ]
    },
    {
      layer: "3. API / Backend",
      skills: [
        { name: "NodeJS", level: 7, icon: "devicon-nodejs-plain colored" },
        { name: "Python", level: 6, icon: "devicon-python-plain colored" },
        { name: "Next.js", level: 8, icon: "devicon-nextjs-original" },
      ]
    },
    {
      layer: "4. Database",
      skills: [
        { name: "MongoDB", level: 6, icon: "devicon-mongodb-plain colored" },
        { name: "PostgreSQL", level: 5, icon: "devicon-postgresql-plain colored" },
        { name: "Firebase", level: 7, icon: "devicon-firebase-plain colored" },
      ]
    },
    {
      layer: "5. DevOps / Cloud",
      skills: [
        { name: "Docker", level: 4, icon: "devicon-docker-plain colored" },
        { name: "AWS", level: 4, icon: "devicon-amazonwebservices-original colored" },
        { name: "Vercel", level: 8, icon: "devicon-nextjs-original" },
      ]
    },
    {
      layer: "6. Version Control",
      skills: [
        { name: "Git", level: 9, icon: "devicon-git-plain colored" },
        { name: "GitHub Actions", level: 6, icon: "devicon-github-original" },
      ]
    },
    {
      layer: "7. Design",
      skills: [
        { name: "Figma", level: 7, icon: "devicon-figma-plain colored" },
        { name: "Responsive Design", level: 9, icon: "devicon-html5-plain" },
      ]
    }
  ];

  return (
    <div id='skills' className="relative bg-[#f8fafc] p-6 min-h-screen text-slate-800 font-sans selection:bg-cyan-100">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-8 mb-10 gap-6'>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">MY SKILLS</h1>
            <p className="text-slate-500 font-mono text-xs mt-2 uppercase tracking-[0.3em]">
              Technical Proficiency across the 7 Layers // 2026
            </p>
          </div>

          {/* Legend Implementation */}
          <div className="flex flex-wrap gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-white p-3 rounded-lg shadow-sm border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-inner" /> Theory
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-200 shadow-inner" /> Practice
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-lg shadow-cyan-200" /> Mastery
            </div>
          </div>
        </div>

        {/* 7 Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-12">
          {stackLayers.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-6 group/layer">

              {/* Layer Heading - Optimized for mobile tap targets */}
              <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3 group-hover/layer:border-cyan-500 transition-colors duration-500">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-widest leading-none">
                  {category.layer}
                </h2>
              </div>

              {/* Skill Bars - Wider hit areas for thumbs */}
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="group/skill cursor-default">
                    <div className="flex justify-between items-center mb-2 px-1">
                      <div className="flex items-center gap-2.5">
                        {/* Icons are slightly larger on mobile for visibility */}
                        <i className={`${skill.icon} text-xl md:text-lg transition-all duration-300`}></i>
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-black font-mono text-cyan-600">
                        {skill.level}/10
                      </span>
                    </div>

                    <div className="relative h-3 w-full bg-slate-200/70 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                      <div
                        className="absolute h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute right-8 bottom-4 animate-bounce cursor-pointer opacity-50 hover:opacity-100" onClick={() => window.location.href = './#projects'}>
         <img src="./assets/arrow.png" alt="Scroll Down" className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Skills;