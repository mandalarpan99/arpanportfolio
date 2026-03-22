import { useEffect } from "react";
import { useAppStore } from "../../store/appStore";
import { projects } from "../../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  const { projectIndex, nextProject, prevProject, goToProject } = useAppStore();
  const total = projects.length;
  const project = projects[projectIndex];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => nextProject(total), 4000);
    return () => clearInterval(timer);
  }, [nextProject, total]);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-label">/ projects</div>
        <h2 className="section-title">Things I've Built</h2>
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={() => prevProject(total)} aria-label="prev">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="carousel-stage">
            <div className="project-card" key={project.id} style={{ "--card-color": project.color }}>
              <div className="project-card-inner">
                <div className="project-emoji-wrap">
                  <span className="project-emoji">{project.emoji}</span>
                </div>
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>
                        <span className="highlight-dot" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-btn next" onClick={() => nextProject(total)} aria-label="next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`dot ${i === projectIndex ? "active" : ""}`}
              onClick={() => goToProject(i)}
              aria-label={`project ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar for auto-slide */}
        <div className="carousel-progress-wrap">
          <div className="carousel-progress-bar" key={projectIndex} />
        </div>

        <p className="carousel-counter">
          <span className="counter-current">{String(projectIndex + 1).padStart(2, "0")}</span>
          <span className="counter-sep"> / </span>
          <span className="counter-total">{String(total).padStart(2, "0")}</span>
        </p>
      </div>
    </section>
  );
}