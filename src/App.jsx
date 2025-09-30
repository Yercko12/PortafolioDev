import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';

import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="main-app">
      <Navbar />

     
      <section id="home" className="section" style={{ paddingTop: '150px' }}>
        <div className="container">
          <Hero />
        </div>
      </section>

    
      <section id="about" className="section" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="container">
          <About />
        </div>
      </section>

     
      <section id="skills" className="section">
        <div className="container">
          <Skills/>
        </div>
      </section>
      
      <section id="projects" className="section" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="container">
          <Projects/>
        </div>
      </section>

     
      <section id="experience" className="section" style={{ backgroundColor: 'var(--color-secondary-bg)' }}>
        <div className="container">
         
        </div>
      </section>


    </div>
  );
}

export default App;