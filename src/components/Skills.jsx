import React from 'react';

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
    { name: "Github", level: 7, icon: "devicon-github-original" },
    { name: "MongoDB", level: 6, icon: "devicon-mongodb-plain colored" },
    { name: "Python", level: 6, icon: "devicon-python-plain colored" },
    { name: "Java", level: 8, icon: "devicon-java-plain colored" },
    { name: "Express", level: 5, icon: "devicon-express-original" }
  ];

  // Logic for the professional maturation terms
  const getStatus = (lvl) => {
    if (lvl <= 3) return "Theoretical";
    if (lvl <= 6) return "Functional";
    if (lvl <= 8) return "Optimized";
    return "Scalable";
  };

  return (
    <div className="bg-slate-50 p-12 min-h-screen relative overflow-hidden">

      {/* --- HEADING SECTION --- */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter mb-4">
          Technical <span className="text-cyan-500">Maturation</span>
        </h2>
        <div className="mt-6 flex justify-center gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-200" /> Theory</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-200" /> Practice</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500" /> Mastery</div>
        </div>
      </div>
      {/* ----------------------- */}

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-y-16 md:gap-x-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const radius = 40;
          const circumference = Math.PI * radius;
          const strokeDash = (skill.level / 10) * circumference;

          return (
            <div key={index} className="group relative flex flex-col items-center">

              {/* --- MOBILE UI: Single Row Horizontal Pill --- */}
              <div className="flex md:hidden items-center bg-white border border-slate-200 rounded-full p-2 pr-6 shadow-sm active:scale-[0.98] active:bg-slate-50 transition-all select-none [-webkit-touch-callout:none] [-webkit-tap-highlight-color:transparent]">

                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 shadow-inner">
                  <i className={`${skill.icon} text-2xl`} />
                </div>

                {/* Label & Progress */}
                <div className="flex-1 ml-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-slate-800 font-bold text-xs uppercase tracking-tight">
                      {skill.name}
                    </h3>
                    <span className="text-[9px] font-black text-cyan-600 uppercase bg-cyan-50 px-2 py-0.5 rounded-full">
                      {getStatus(skill.level)}
                    </span>
                  </div>

                  {/* The Bar */}
                  <div className="relative h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-cyan-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level * 10}%` }}
                    />
                  </div>
                </div>

                {/* Score Tag */}
                <div className="ml-4 pl-4 border-l border-slate-100">
                  <span className="text-[10px] font-black text-slate-400">
                    {skill.level}.0
                  </span>
                </div>
              </div>

              {/* 3D EGG CONTAINER */}
              <div className="hidden md:flex relative w-40 h-52 
                bg-white border border-slate-200
                rounded-[50%_50%_50%_50%_/_70%_70%_40%_40%] 
                shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_inset_0_-12px_20px_rgba(34,211,238,0.05),_inset_0_4px_6px_rgba(255,255,255,0.8)]
                hover:shadow-[0_25px_50px_-12px_rgba(34,211,238,0.25)]
                hover:-translate-y-2 transition-all duration-500
                flex flex-col items-center justify-center overflow-hidden active:z-50 select-none [-webkit-touch-callout:none]">

                {/* CYAN GAUGE ARC */}
                <div className="relative w-28 h-20 mb-4">
                  <span className="absolute bottom-1 left-1 text-[8px] font-bold text-slate-300">0</span>
                  <span className="absolute bottom-1 right-1 text-[8px] font-bold text-slate-300">10</span>

                  <svg className="w-full h-full transform" viewBox="0 0 100 60">
                    <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#06b6d4" strokeWidth="5"
                      strokeDasharray={`${strokeDash}, ${circumference}`} strokeLinecap="round"
                      className="transition-all duration-1000 ease-out delay-300" />
                  </svg>

                  {/* ICON CENTERED */}
                  <div className="absolute inset-0 flex items-end justify-center pb-1">
                    <i className={`${skill.icon} text-4xl group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>

                {/* SKILL INFO & STATUS */}
                <div className="text-center px-4">
                  <h3 className="text-slate-800 font-bold text-[13px] tracking-tight leading-tight uppercase mb-1">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                    <p className="text-slate-400 font-bold text-[8px] uppercase tracking-widest">
                      {getStatus(skill.level)}
                    </p>
                  </div>
                </div>

                {/* LIGHT REFLECTION (GLOSS) */}
                <div className="absolute top-2 left-6 w-12 h-6 bg-white/40 rounded-full blur-md -rotate-15 pointer-events-none" />
              </div>

              {/* LEVEL DISPLAY BELOW EGG */}
              <div className="hidden md:block mt-4 flex items-center gap-2">
                <div className="h-[1px] w-4 bg-slate-200" />
                <span className="text-[10px] font-black text-slate-400 tracking-tighter">SCORE {skill.level}.0</span>
                <div className="h-[1px] w-4 bg-slate-200" />
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER ARROW */}
      <img
        src="./assets/arrow.png"
        alt="Arrow"
        className="absolute animate-bounce bottom-4 right-8 h-6 opacity-30 hover:opacity-100 cursor-pointer transition-all hover:translate-x-1"
        onClick={() => window.location.href = './#projects'}
      />
    </div>
  );
};

export default Skills;

