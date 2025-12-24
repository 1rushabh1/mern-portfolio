export default ({ project }) => (
  <article className="project-card">
    <div className="project-top">
      <h3>{project.title}</h3>
      <span className="project-type">{project.category || "Full-Stack App"}</span>
    </div>

    <p className="project-desc">{project.description}</p>

    <div className="stack">
      {project.stack?.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>

    <div className="project-actions">
      {project.live && (
        <a href={project.live} className="btn primary">Live Demo</a>
      )}
    </div>
  </article>
);
