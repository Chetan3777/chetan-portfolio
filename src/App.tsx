import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ValueProps from "./components/ValueProps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main id="top">
        <Hero />
        <Services />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ValueProps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
