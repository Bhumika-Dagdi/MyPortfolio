import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-[#FDF7F0]">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Hobbies />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;