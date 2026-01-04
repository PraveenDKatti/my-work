import React from "react";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-white py-16 px-6 lg:px-8 overflow-hidden selection:bg-cyan-100">
      
      {/* Blueprint Pattern to match the technical vibe */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section - Identical spacing to Skills */}
        <div className="mb-12">
          <h2 className="text-slate-900 text-4xl font-black tracking-tighter uppercase">Introduction</h2>
          <p className="text-gray-500 font-mono text-xs mt-1 uppercase tracking-[0.3em]">
            My steps to Developers Journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Narrative Bio (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
              I'm a MERN Stack Developer driven by 
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-slate-900 underline decoration-cyan-400 decoration-4 underline-offset-4">impactful code.</span>
              </span>
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                I am a results-driven developer with hands-on experience building 
                responsive web applications and scalable backend services. 
                My expertise lies in the <span className="text-slate-900 font-semibold italic">MERN stack</span>, 
                where I enjoy crafting clean, efficient code to solve real-world problems.
              </p>

              <p>
                With a B.E. in <span className="text-slate-900 font-semibold italic">Computer Science Engineering</span>, 
                I have honed my skills in <span className="text-slate-900 font-semibold italic">JavaScript (ES6+), React.js, and Node.js</span>. I specialize 
                in creating seamless user experiences using modern UI frameworks like TailwindCSS and 
                engineering robust RESTful APIs.
              </p>
            </div>
          </div>

          {/* RIGHT: Info Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Education Card */}
            <div className="group bg-slate-50 border border-slate-100 p-6 rounded-xl hover:bg-white hover:shadow-xl hover:border-cyan-200 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="text-2xl bg-white p-3 rounded-lg shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                  🎓
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-1">Education</h4>
                  <p className="font-bold text-slate-800 text-lg">B.E. Computer Science</p>
                  <p className="text-sm text-slate-500 font-medium leading-tight mt-1">BLDEA's V.P. Dr. P.G. Halakatti College</p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="group bg-slate-50 border border-slate-100 p-6 rounded-xl hover:bg-white hover:shadow-xl hover:border-cyan-200 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="text-2xl bg-white p-3 rounded-lg shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                  💻
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-1">Experience</h4>
                  <p className="font-bold text-slate-800 text-lg">MERN Stack Developer</p>
                  <p className="text-sm text-slate-500 font-medium leading-tight mt-1">Full-Stack Web Development</p>
                </div>
              </div>
            </div>
            
            {/* Quote Block */}
            <div className="mt-4 p-5 bg-slate-50 border-l-4 border-slate-900 italic text-slate-500 text-sm leading-relaxed shadow-sm">
              "Focused on problem-solving and clean coding to build digital products that matter." 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;