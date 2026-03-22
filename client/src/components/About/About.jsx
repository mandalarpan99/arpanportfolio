import { personalInfo, education, certifications } from "../../data/portfolioData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">/ about me</div>
        <h2 className="section-title">The Person Behind the Code</h2>
        <div className="about-grid">
          <div className="about-bio-col">
            <div className="about-avatar">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <span className="avatar-initials">AM</span>
              </div>
            </div>
            <p className="about-bio">{personalInfo.bio}</p>
            <div className="about-tags">
              <span className="about-tag">🧠 Lifelong Learner</span>
              <span className="about-tag">🌍 Geopolitics Curious</span>
              <span className="about-tag">👨‍🏫 Tech Teacher</span>
              <span className="about-tag">⚡ MERN Specialist</span>
            </div>
            <div className="about-contact">
              <a href={`mailto:${personalInfo.email}`} className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                {personalInfo.email}
              </a>
              <span className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {personalInfo.location}
              </span>
            </div>
          </div>
          <div className="about-edu-col">
            <h3 className="col-title">Education</h3>
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <div className="edu-top">
                  <div>
                    <h4 className="edu-degree">{e.degree}</h4>
                    <p className="edu-inst">{e.institution}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-cgpa">CGPA {e.cgpa}</span>
                    <span className="edu-period">{e.period}</span>
                  </div>
                </div>
                <div className="edu-courses">
                  {e.courses.map((c) => <span key={c} className="edu-course">{c}</span>)}
                </div>
              </div>
            ))}
            <h3 className="col-title" style={{ marginTop: "2rem" }}>Certifications</h3>
            <div className="cert-grid">
              {certifications.map((c, i) => (
                <div key={i} className="cert-chip">
                  <span className="cert-dot" />
                  <div>
                    <p className="cert-name">{c.name}</p>
                    <p className="cert-issuer">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
