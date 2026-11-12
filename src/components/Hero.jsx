import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero-section container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
        <p className="hero-kicker">HELLO, I'M</p>
        <h1>{profile.name}<span className="accent">.</span></h1>
        <h2>I build thoughtful <span className="gradient-text">web experiences.</span></h2>
        <p className="hero-description">{profile.intro}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">Explore my work <ArrowUpRight size={17} /></Link>
          <Link className="button button-secondary" to="/contact">Get in touch</Link>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <span className="social-location">{profile.location}</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Decorative code illustration">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="code-window">
          <div className="window-top"><span /><span /><span /><small>developer.js</small></div>
          <div className="code-lines">
            <p><i>01</i> <b>const</b> developer = {'{'}</p>
            <p><i>02</i> &nbsp;name: <em>"Bleond"</em>,</p>
            <p><i>03</i> &nbsp;focus: <em>"Frontend"</em>,</p>
            <p><i>04</i> &nbsp;learning: [</p>
            <p><i>05</i> &nbsp;&nbsp;<em>"React"</em>, <em>"JavaScript"</em></p>
            <p><i>06</i> &nbsp;]</p>
            <p><i>07</i> {'}'};</p>
            <p><i>08</i> <b>console</b>.log(developer);<span className="cursor">_</span></p>
          </div>
        </div>
        <div className="floating-chip chip-react">⚛ React</div>
        <div className="floating-chip chip-css">✳ CSS</div>
      </div>
      <a className="scroll-hint" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
    </section>
  );
}