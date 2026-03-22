// ============================================================
//  CENTRALIZED STATE MANAGEMENT — Single source of truth
// ============================================================

import { useState, useCallback, createContext, useContext } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navOpen, setNavOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const [projectIndex, setProjectIndex] = useState(0);
  const [theme] = useState("dark");

  const finishPreloader = useCallback(() => setPreloaderDone(true), []);
  const toggleNav = useCallback(() => setNavOpen((p) => !p), []);
  const closeNav = useCallback(() => setNavOpen(false), []);

  const nextProject = useCallback((total) =>
    setProjectIndex((p) => (p + 1) % total), []);
  const prevProject = useCallback((total) =>
    setProjectIndex((p) => (p - 1 + total) % total), []);
  const goToProject = useCallback((i) => setProjectIndex(i), []);

  return (
    <AppContext.Provider value={{
      preloaderDone, finishPreloader,
      activeSection, setActiveSection,
      navOpen, toggleNav, closeNav,
      activeSkillCategory, setActiveSkillCategory,
      projectIndex, nextProject, prevProject, goToProject,
      theme,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppStore must be used within AppProvider");
  return ctx;
};
