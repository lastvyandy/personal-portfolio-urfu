import ExperienceCard from "../components/ExperienceCard.jsx";
import EducationCard from "../components/EducationCard.jsx";
import { experience, education } from "../data/experience.js";

const skills = [
  { title: "Programming", items: ["Python", "PHP", "JavaScript", "C#", "Kotlin", "SQL"] },
  { title: "Frameworks & libraries", items: ["FastAPI", "Flask", "React", "jQuery", "Compose Multiplatform"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Oracle", "Apache AGE"] },
  { title: "Tools & infrastructure", items: ["Docker", "Git", "Google Cloud", "Linux", "Nginx", "Apache"] },
  { title: "Other skills", items: ["RPA", "REST APIs", "Process Automation", "Accounting"] },
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B1 – Intermediate" },
  { name: "Russian", level: "B1 – Intermediate" },
  { name: "Portuguese", level: "A1 – Beginner" },
];

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p className="intro">I'm a software engineer from Chile with a background in accounting and business processes. I worked on backend systems, web applications and process automation before continuing my studies in Russia. My main interests are backend development, databases and software architecture.</p>

      <section className="about-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experience.map(job => <ExperienceCard key={job.company} job={job} />)}
        </div>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <div className="timeline">
          {education.map(item => <EducationCard key={item.school} education={item} />)}
        </div>
      </section>

      <section className="about-section">
        <h2>Technical Skills</h2>
        <div className="skill-grid">
          {skills.map(group => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skills">
                {group.items.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Languages</h2>
        <div className="language-grid">
          {languages.map(language => (
            <div className="language-card" key={language.name}>
              <strong>{language.name}</strong>
              <span className="muted">{language.level}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
