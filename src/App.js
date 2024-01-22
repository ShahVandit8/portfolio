import '../src/assets/css/styles.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Timeline />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
    </Router>
  );
}

export default App;
