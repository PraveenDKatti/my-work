const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-black text-white">
      {/* Contact Information */}
      <section id="contact" className="flex flex-col justify-center text-center">
        <div className="mb-10">
          <h1 className="text-slate-600 text-4xl tracking-tighter uppercase">Contact Me</h1>
          <p className="text-gray-300 font-mono text-xs mt-1 uppercase tracking-[0.3em]">Get in Touch</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center rounded-[2rem] border border-gray-light p-2 md:gap-8 w-fit mx-auto">
          <div className="flex items-center gap-2">
            <img src="./assets/email.png" alt="Email" className="h-8 bg-white rounded-full cursor-default" />
            <p className="text-gray-300 font-mono text-xs mt-1 uppercase tracking-[0.1em]">
              <a href="mailto:praveendk25@gmail.com">praveendk25@gmail.com</a>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img src="./assets/linkedin.png" alt="LinkedIn" className="h-8 bg-white rounded-full cursor-default" />
            <p className="text-gray-300 font-mono text-xs mt-1 uppercase tracking-[0.1em]">
              <a href="https://www.linkedin.com/in/praveenkatti">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      {/* other half */}
      <div className="md:h-screen">
        {/* other half */}
        <div className="flex flex-col justify-center items-center bg-gray-900 px-8 h-full">
          <div className="text-center max-w-md">
            {/* Illustration */}
            <img
              src="./assets/endtoend.png"
              alt="Contact Illustration"
              className="w-16 bg-white rounded-full mx-auto mb-6"
            />

            {/* Main Heading */}
            <h2 className="text-slate-600 text-2xl uppercase tracking-tighter mb-2">Let's Collaborate</h2>

            {/* Intro Text */}
            <p className="text-gray-400 font-mono text-sm mb-6">
              If you’re looking for someone who can transform ideas into seamless digital experiences,
              who is passionate about clean code, creative problem-solving, and building scalable projects,
              then we should definitely connect.
            </p>

            {/* Personal Snippet / Mantra without icons */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-6 text-gray-300 font-mono text-sm space-y-4 relative">
              <p><span className="text-white font-semibold">I build interfaces</span> people love to use.</p>
              <p><span className="text-white font-semibold">Constantly learning</span> and exploring new ideas.</p>
              <p><span className="text-white font-semibold">Passionate about projects</span> that make an impact.</p>

              {/* subtle vertical accents */}
              <div className="absolute left-3 top-6 bottom-6 w-0.5 bg-slate-600 rounded-full"></div>
            </div>

            {/* Fun Stats */}
            <div className="flex justify-center gap-6 mb-6 text-gray-300 font-mono text-xs uppercase tracking-wide">
              <div className="flex flex-col items-center">
                <span className="text-slate-500 text-sm">Projects</span>
                <span className="text-white font-semibold">4+</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-slate-500 text-sm">Experience</span>
                <span className="text-white font-semibold">hands-on</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-slate-500 text-sm">Ideas</span>
                <span className="text-white font-semibold">Many</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;