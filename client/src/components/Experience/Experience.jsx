import { experience, education } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-label">/ experience</div>
        <h2 className="section-title">Where I've Worked & Studied</h2>
        <div className="exp-grid">
          <div className="exp-col">
            <h3 className="exp-col-head"><span className="exp-icon">💼</span> Work</h3>
            {experience.map((e, i) => (
              <div key={i} className="timeline-card">
                <div className="timeline-node" />
                <div className="timeline-body">
                  <div className="tc-header">
                    <div>
                      <span className="tc-badge">{e.type}</span>
                      <h4 className="tc-role">{e.role}</h4>
                      <p className="tc-company">{e.company}</p>
                    </div>
                    <div className="tc-meta">
                      <span className="tc-period">{e.period}</span>
                      <span className="tc-loc">{e.location}</span>
                    </div>
                  </div>
                  <ul className="tc-points">
                    {e.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="exp-col">
            <h3 className="exp-col-head"><span className="exp-icon">🎓</span> Education</h3>
            {education.map((e, i) => (
              <div key={i} className="timeline-card">
                <div className="timeline-node node-edu" />
                <div className="timeline-body">
                  <div className="tc-header">
                    <div>
                      <span className="tc-badge badge-edu">Academic</span>
                      <h4 className="tc-role">{e.degree}</h4>
                      <p className="tc-company">{e.institution}</p>
                    </div>
                    <div className="tc-meta">
                      <span className="tc-period">{e.period}</span>
                      <span className="tc-cgpa">CGPA {e.cgpa}</span>
                    </div>
                  </div>
                  <div className="tc-courses">
                    {e.courses.map((c) => <span key={c} className="course-tag">{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
