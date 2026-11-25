import { Link } from "react-router";

export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Hello, I'm</p>
        <h1>Jorge Manríquez</h1>
        <h2>Software Engineer &amp; Master's Student</h2>
        <p>I'm a Chilean software engineer with experience in backend development, process automation and business systems. I'm currently studying Applied Informatics at Ural Federal University in Russia.</p>
        <div className="actions">
          <Link className="button" to="/projects">View my projects</Link>
          <a className="button secondary" href="/resume.pdf" download>Download CV</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/lastvyandy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jmanriquezac/" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
      <img className="profile-photo" src="/images/profile.jpg" alt="Jorge Manríquez" />
    </section>
  );
}
