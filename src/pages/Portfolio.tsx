import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import CustomCursor from "../components/CustomCursor";
import MouseGlow from "../components/MouseGlow";
import ParticlesBackground from "../components/ParticlesBackground";
import FloatingContact from "../components/FloatingContact";

export default function Portfolio() {
  return (
    <main>
      <ParticlesBackground />
      <CustomCursor />
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <FloatingContact />
    </main>
  );
}
