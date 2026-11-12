import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading">
        <div><p className="section-kicker">MY TOOLKIT</p><h2>Skills & technologies<span className="accent">.</span></h2></div>
        <p className="heading-note">The tools I use and continue to develop.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-icon">{skill.name.slice(0, 1)}</div>
            <div><h3>{skill.name}</h3><p>{skill.group} · {skill.level}</p></div>
            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}