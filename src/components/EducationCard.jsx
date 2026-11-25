export default function EducationCard({ education }) {
  return (
    <article className="timeline-item">
      <h3>{education.school}</h3>
      <p className="organization">{education.program}</p>
      <p className="muted">{education.period} · {education.location}</p>
    </article>
  );
}
