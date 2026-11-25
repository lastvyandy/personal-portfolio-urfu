import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "VialApp",
    description: "An educational application that helps users prepare for driving theory exams in Chile.",
    technologies: ["Kotlin", "Android"],
    url: "https://github.com/lastvyandy/VialApp",
  },
  {
    title: "Production Data & BI",
    description: "A university research project using graph databases to connect industrial production data and trace materials.",
    technologies: ["PostgreSQL", "Apache AGE", "Python", "Docker"],
    url: "https://github.com/lastvyandy/production-data-age",
  },
  {
    title: "Don Pelao TaskMaster",
    description: "An ongoing personal project for managing tasks, habits and reminders on mobile and desktop.",
    technologies: ["Kotlin", "Compose Multiplatform"],
  },
];

export default function Projects() {
  return (
    <section>
      <h1>My Projects</h1>
      <p className="intro">A few of my personal and university projects.</p>
      <div className="project-grid">
        {projects.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}
