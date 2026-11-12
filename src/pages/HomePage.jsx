import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <div id="top"><Hero /></div>
      <section className="about-strip" id="about">
        <div className="container about-inner">
          <span className="about-label">A LITTLE ABOUT ME</span>
          <p>Curious by nature. Focused on learning by building. I care about clear interfaces, useful details, and code that is easy to maintain.</p>
        </div>
      </section>
      <Projects limit={3} />
      <Skills />
      <Contact />
    </>
  );
}