import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { initialProjects } from "../data/portfolio";

const filters = ["All", "Frontend", "Full-stack"];

export default function Projects({ limit }) {
  const [projects] = useState(initialProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = projects
    .filter((project) => activeFilter === "All" || project.category === activeFilter)
    .slice(0, limit || projects.length);

  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <div><p className="section-kicker">WHAT I'VE BEEN BUILDING</p><h2>Featured projects<span className="accent">.</span></h2></div>
        <div className="filter-list" aria-label="Filter projects">
          {filters.map((filter) => (
            <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className={`project-card accent-${project.accent}`} key={project.id}>
            <div className="project-visual">
              <span className="project-number">0{index + 1}</span>
              <div className="project-symbol">{project.title === "DevFlow AI" ? "⌘" : project.title === "JobPilot" ? "↗" : "◇"}</div>
              <span className="project-status">{project.status}</span>
            </div>
            <div className="project-content">
              <div className="project-meta"><span>{project.category}</span><span>{project.stack.join(" · ")}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"> <Github size={16} /> Source code</a>
                {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a> : <span className="coming-soon">Demo coming soon</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}