import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="/"><span className="brand-mark">B</span><span>bleond<span className="brand-dot">.</span></span></a>
        <p>Designed & built with React. © {new Date().getFullYear()} {profile.name}.</p>
        <div className="footer-right">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
        </div>
      </div>
    </footer>
  );
}