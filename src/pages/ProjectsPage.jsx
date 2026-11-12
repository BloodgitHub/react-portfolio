import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <div className="page-top">
      <div className="container page-intro">
        <p className="section-kicker">SELECTED WORK</p>
        <h1>Projects<span className="accent">.</span></h1>
        <p>A selection of things I am building, exploring, and learning from.</p>
      </div>
      <Projects />
    </div>
  );
}