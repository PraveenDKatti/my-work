import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-28">
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
        
      </div>
      
      {/* Chatbot sits outside the layout wrapper so it sticks to the screen edge, not the content edge */}
      <Chatbot />
    </div>
  );
}

export default App;