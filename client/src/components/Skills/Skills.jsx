import { useAppStore } from "../../store/appStore";
import { skills } from "../../data/portfolioData";
import "./Skills.css";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

export default function Skills() {
  const { activeSkillCategory, setActiveSkillCategory } = useAppStore();
  const filtered = activeSkillCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeSkillCategory);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-label">/ skills</div>
        <h2 className="section-title">Tools of the Trade</h2>
        <div className="skill-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${activeSkillCategory === c ? "active" : ""}`}
              onClick={() => setActiveSkillCategory(c)}
            >{c}</button>
          ))}
        </div>
        <div className="skill-grid">
          {filtered.map((s, i) => (
            <div key={s.name} className="skill-card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
              </div>
              <span className="skill-cat-badge">{s.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
