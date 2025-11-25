import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// Import other components as you create them...

function App() {
  
  // You can keep simple sections (like Hero/Profile) inside App.jsx 
  // until you feel like separating them into files.
  
  return (
    <div className="App">
      <Navbar />
      
      {/* Profile / Hero Section */}
      <section id="profile">
        <div className="section-pic-container">
          <img src="./assets/profile-pic.jpg" alt="Praveen profile" />
        </div>
        <div className="section-text">
          <p className="section-text-p1">Hello I'm</p>
          <h1 className="title">Praveen Katti</h1>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open('./assets/PraveenKatti.pdf')}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => (window.location.href = "./#contact")}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src="./assets/linkedin.png" alt="LinkedIn" className="icon" 
                 onClick={() => window.open('https://www.linkedin.com/in/praveenkatti')} />
            <img src="./assets/github.png" alt="Github" className="icon" 
                 onClick={() => window.open('https://github.com/PraveenDKatti')} />
          </div>
        </div>
      </section>

      {/* About Section (You can move this to components/About.jsx) */}
      <section id="about">
        <p className="section-text-p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src="./assets/experience.png" alt="experience" className="icon" />
                <h3>Experience</h3>
                <p>Fresher <br />Software Developer</p>
              </div>
              <div className="details-container">
                <img src="./assets/education.png" alt="education" className="icon" />
                <h3>Education</h3>
                <p>B.E Bachelors Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Eager to join an innovative organization where I can apply my knowledge, skills for the development of the organization and also expand my skills.
              </p>
            </div>
          </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow" className="icon arrow" onClick={() => (window.location.href = "./#experience")} />
      </section>

      <section id="experience">
         <p className="section-text-p1">Explore My</p>
         <h1 className="title">Experience</h1>
         <div className="details-container">
            <img src="./assets/experience.png" alt="experience icon" className="icon"/>
            <h3>Experience</h3>
            <p>Fresher <br />Software Developer</p>
         </div>
         <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#projects'}/>
      </section>

      <Skills />
      
      <Projects />

      <section id="contact">
        <p className="section-text-p1">Get in touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="./assets/email.png" alt="email" className="icon contact-icon email-icon" />
            <p><a href="mailto:praveendk25@gmail.com">Email</a></p>
          </div>
          <div className="contact-info-container">
            <img src="./assets/linkedin.png" alt="linkedin" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/praveenkatti">Linkedin</a></p>
          </div>
        </div>
      </section>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;