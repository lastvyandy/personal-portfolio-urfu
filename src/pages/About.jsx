const skills = ["Kotlin", "JavaScript", "Python", "SQL", "PostgreSQL", "Git", "Docker", "React"];

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p className="intro">I'm a software engineer from Chile with experience in backend development. I'm currently pursuing a Master's degree in Applied Informatics at Ural Federal University in Russia, in the IT Innovations in Business program. I enjoy building practical applications, working with databases and learning about software architecture.</p>
      <h2>Technical skills</h2>
      <ul className="skills">
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}
