import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "VialApp",
    description: "An educational platform for Chilean driving theory exams, with practice questions, exam simulations and feedback.",
    technologies: ["Kotlin", "Android", "Multiplatform"],
    image: "/images/vialapp.jpg",
    url: "https://github.com/lastvyandy/VialApp",
  },
  {
    title: "Production Data & BI",
    description: "A university research project on industrial data integration, material traceability and business intelligence using graph databases.",
    technologies: ["PostgreSQL", "Apache AGE", "Python", "Docker", "Apache Superset"],
    image: "/images/production-bi.jpg",
    url: "https://github.com/lastvyandy/production-data-age",
  },
  {
    title: "Don Pelao: TaskMaster",
    description: "A personal productivity application with task management, reminders, progress reports and a gamified Zen garden.",
    technologies: ["Kotlin", "Compose Multiplatform"],
    image: "/images/taskmaster.jpg",
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
