const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[80vh] flex items-center text-slate-900 px-6 py-12 overflow-hidden bg-white">
      
      {/* --- THE MATRIX FLOOR (High Visibility) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            perspective: '800px', // Lowering perspective makes the "floor" tilt more
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div 
            className="absolute inset-0 w-full h-[300%] -top-[100%] opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, #3b82f6 1.5px, transparent 1.5px),
                linear-gradient(to bottom, #3b82f6 1.5px, transparent 1.5px)
              `,
              backgroundSize: '80px 80px', // Larger squares look more like a floor
              transform: 'rotateX(75deg)', // Steeper angle for floor effect
              transformOrigin: 'center center',
            }}
          />
        </div>
        
        {/* Soft fading to white so it doesn't look like a box */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-white" />
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Profile Image */}
        <div className="relative shrink-0">
            {/* Blue glow to make the image "pop" against the grid */}
            <div className="absolute -inset-10 bg-blue-500/10 blur-[60px] rounded-full -z-10" />
            
            <img 
              src="./assets/profile-pic2.jpg" 
              alt="Profile"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-2xl border-8 border-white"
            />
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="inline-block mx-auto md:mx-0 w-12 h-1 bg-cyan-500 mb-2"></div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800 leading-tight">
            Fullstack Web Developer <br />
            <span className="text-cyan-600 font-medium text-2xl md:text-3xl">Backend & API Design</span>
          </h1>
          
          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-md">
            I build end-to-end web applications, with a deep passion for scalable backend engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;