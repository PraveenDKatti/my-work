const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center h-[70vh]">
      <p className="text-center text-gray">Get in Touch</p>
      <h1 className="text-[3rem] font-bold text-center mb-12">Contact Me</h1>
      
      <div className="flex flex-col lg:flex-row justify-center items-center rounded-[2rem] border border-gray-light p-6 gap-8 w-fit mx-auto bg-white">
        
        <div className="flex items-center gap-2 m-2">
          <img src="./assets/email.png" alt="Email" className="h-10 cursor-default" />
          <p className="text-xl hover:text-gray-dark hover:underline underline-offset-4">
            <a href="mailto:praveendk25@gmail.com">praveendk25@gmail.com</a>
          </p>
        </div>
        
        <div className="flex items-center gap-2 m-2">
          <img src="./assets/linkedin.png" alt="LinkedIn" className="h-8 cursor-default" />
          <p className="text-xl hover:text-gray-dark hover:underline underline-offset-4">
            <a href="https://www.linkedin.com/in/praveenkatti">LinkedIn</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;