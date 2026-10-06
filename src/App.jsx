import Nav from './components/Nav';
import Footer from './components/Footer';
import Oneko from './components/Oneko';
import Starfield from './components/Starfield';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certs from './pages/Certs';
import Education from './pages/Education';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="shell">
      <Starfield />
      <div className="aurora" />
      <div className="grain" />
      <Oneko />
      <Nav />

      {/* One continuous scroll — every section reveals itself as it enters
          the viewport (see Page.jsx), so nothing needs its own route. */}
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certs />
        <Education />
        <Profile />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
