import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Containers/Hero';
import About from './Containers/About';
import Skills from './Containers/Skills';
import Projects from './Containers/Projects';
import Contact from './Containers/Contact';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
