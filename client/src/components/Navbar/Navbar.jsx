import { useEffect } from "react";
import { useAppStore } from "../../store/appStore";
import { navLinks, personalInfo } from "../../data/portfolioData";
import "./Navbar.css";

export default function Navbar() {
  const { navOpen, toggleNav, closeNav, activeSection, setActiveSection } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]); break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  const handleNav = (href) => {
    closeNav();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${navOpen ? "nav-open" : ""}`}>
      <a className="nav-brand" href="#home" onClick={() => handleNav("#home")}>
        <span className="brand-bracket">&lt;</span>AM<span className="brand-bracket">/&gt;</span>
      </a>
      <ul className={`nav-links ${navOpen ? "show" : ""}`}>
        {navLinks.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className={activeSection === l.href.slice(1) ? "active" : ""}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
            >{l.label}</a>
          </li>
        ))}
        <li>
          <a href={personalInfo.resumeUrl} download className="nav-resume-btn">Resume</a>
        </li>
      </ul>
      <button className="hamburger" onClick={toggleNav} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
