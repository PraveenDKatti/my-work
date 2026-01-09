const Contact = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden bg-white">
      
      {/* --- KATANA SLICE BACKGROUND ELEMENTS --- */}
      {/* Top Slice */}
      <div className="absolute top-0 right-0 w-full h-[40%] bg-slate-50 [clip-path:polygon(0_0,_100%_0,_100%_20%,_0_100%)] -z-0 opacity-70" />
      
      {/* Bottom Slice */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-cyan-50/30 [clip-path:polygon(0_100%,_100%_100%,_100%_0,_0_80%)] -z-0" />

      {/* LEFT SIDE: Contact Information */}
      <section id="contact" className="relative z-10 flex flex-col justify-center text-center px-4">
        <div className="mb-10">
          <h1 className="text-slate-900 text-4xl font-black tracking-tighter uppercase">Contact Me</h1>
          <p className="text-slate-500 font-mono text-xs mt-1 uppercase tracking-[0.3em]">Get in Touch</p>
        </div>

        {/* Unified Contact Bar with GitHub & Resume */}
        <div className="flex flex-col lg:flex-row justify-center items-center rounded-[2rem] border border-slate-200 bg-white/50 backdrop-blur-sm p-3 gap-6 lg:gap-8 w-fit mx-auto shadow-sm">
          
          {/* Email */}
          <div className="flex items-center gap-2 group">
            <img src="./assets/email.png" alt="Email" className="h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <p className="text-slate-600 font-mono text-[10px] uppercase tracking-wider">
              <a href="mailto:praveendk25@gmail.com" className="hover:text-cyan-600">Email</a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-2 group">
            <img src="./assets/linkedin.png" alt="LinkedIn" className="h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <p className="text-slate-600 font-mono text-[10px] uppercase tracking-wider">
              <a href="https://www.linkedin.com/in/praveenkatti" target="_blank" rel="noreferrer" className="hover:text-cyan-600">LinkedIn</a>
            </p>
          </div>

          {/* GitHub - NEW */}
          <div className="flex items-center gap-2 group">
            <img src="./assets/github.png" alt="GitHub" className="h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <p className="text-slate-600 font-mono text-[10px] uppercase tracking-wider">
              <a href="https://github.com/PraveenDKatti" target="_blank" rel="noreferrer" className="hover:text-cyan-600">GitHub</a>
            </p>
          </div>

          {/* Resume - NEW */}
          <div className="flex items-center gap-2 group">
            <div className="h-6 w-6 flex items-center justify-center bg-slate-900 rounded text-white text-[8px] font-bold group-hover:bg-cyan-600 transition-colors">CV</div>
            <p className="text-slate-600 font-mono text-[10px] uppercase tracking-wider">
              <a href="./assets/Praveen Resume.pdf" target="_blank" rel="noreferrer" className="hover:text-cyan-600">Resume</a>
            </p>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE: Collaboration & Stats */}
      <div className="relative z-10 md:h-screen">
        <div className="flex flex-col justify-center items-center px-8 h-full py-12">
          <div className="text-center max-w-md">
            
            <img
              src="./assets/endtoend.png"
              alt="Contact Illustration"
              className="w-16 mx-auto mb-6 opacity-80"
            />

            <h2 className="text-slate-800 text-2xl font-bold uppercase tracking-tighter mb-2">Let's Collaborate</h2>

            <p className="text-slate-500 font-mono text-sm mb-6 leading-relaxed">
              If you’re looking for someone who can transform ideas into seamless digital experiences,
              who is passionate about clean code, creative problem-solving, and building scalable projects,
              then we should definitely connect.
            </p>

            {/* Mantra Box */}
            <div className="bg-slate-900 rounded-2xl p-6 mb-6 text-slate-300 font-mono text-xs text-left space-y-4 relative overflow-hidden shadow-xl">
              {/* Subtle Slice in the box itself */}
              <div className="absolute top-0 right-0 w-16 h-full bg-white/5 skew-x-[-20deg] translate-x-8" />
              
              <p><span className="text-cyan-600 font-semibold">01 //</span> I build interfaces people love to use.</p>
              <p><span className="text-cyan-600 font-semibold">02 //</span> Constantly learning and exploring new ideas.</p>
              <p><span className="text-cyan-600 font-semibold">03 //</span> Passionate about projects that make an impact.</p>

              <div className="absolute left-3 top-6 bottom-6 w-0.5 bg-cyan-500/50 rounded-full"></div>
            </div>

            {/* Fun Stats */}
            <div className="flex justify-center gap-8 mb-6 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-base">4+</span>
                <span>Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-base">Relevant</span>
                <span>Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-base">Many</span>
                <span>Ideas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;