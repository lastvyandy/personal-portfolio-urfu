export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-image-link" href={project.image} target="_blank" rel="noreferrer">
        <img className="project-image" src={project.image} alt={project.title + " screenshot"} loading="lazy" />
      </a>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul className="skills">
        {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
      </ul>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer">View on GitHub</a>
      ) : (
        <span className="muted">In development</span>
      )}
    </article>
  );
}
