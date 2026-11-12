import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="page-top">
      <div className="container page-intro">
        <p className="section-kicker">SAY HELLO</p>
        <h1>Contact<span className="accent">.</span></h1>
        <p>Let's talk about your next idea or opportunity.</p>
      </div>
      <Contact />
    </div>
  );
}