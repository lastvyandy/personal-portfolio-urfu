import { Link } from "react-router";

export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Hello, I'm</p>
        <h1>Jorge Manríquez</h1>
        <h2>Software Engineer &amp; Master's Student</h2>
        <p>I'm interested in backend development, software architecture and data technologies. I am currently studying Applied Informatics at Ural Federal University.</p>
        <div className="actions">
          <Link className="button" to="/projects">View my projects</Link>
          <Link className="button secondary" to="/contact">Contact me</Link>
        </div>
      </div>
      <div className="initials" aria-hidden="true">JM</div>
    </section>
  );
}
