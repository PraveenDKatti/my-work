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
      {/* This is the Main Layout Wrapper.
        It aligns everything perfectly in the center 
        and adds consistent padding on mobile/desktop.
      */}
      {/* Background Decor (Optional specific circles) */}
      <div aria-hidden="true" className="absolute -top-20 -left-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <div aria-hidden="true" className="absolute top-0 right-4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      
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