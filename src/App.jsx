import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';  // Import the Services component
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className='font-sans'>
      <Header />  
      <Hero />   
      <About />  
      <Skills />  
      <Experience /> 
      <Services /> 
      <Projects />  
      <Education /> 
      <Contact /> 
    </div>
  );
}

export default App;
