export default function ExperienceCard({ job }) {
  return (
    <article className="timeline-item">
      <h3>{job.title}</h3>
      <p className="organization">{job.company}</p>
      <p className="muted">{job.period} · {job.location}</p>
      <p>{job.description}</p>
      {job.technologies && (
        <ul className="skills">
          {job.technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
      )}
    </article>
  );
}
