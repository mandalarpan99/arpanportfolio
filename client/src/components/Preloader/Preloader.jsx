import { useEffect, useState } from "react";
import { useAppStore } from "../../store/appStore";
import "./Preloader.css";

export default function Preloader() {
  const { finishPreloader } = useAppStore();
  const [count, setCount] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.floor(Math.random() * 8) + 3;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count >= 100) {
      setTimeout(() => setFade(true), 400);
      setTimeout(() => finishPreloader(), 1100);
    }
  }, [count, finishPreloader]);

  return (
    <div className={`preloader ${fade ? "fade-out" : ""}`}>
      <div className="pre-inner">
        <div className="pre-logo">
          <span className="pre-bracket">&lt;</span>
          <span className="pre-name">AM</span>
          <span className="pre-bracket">/&gt;</span>
        </div>
        <div className="pre-bar-wrap">
          <div className="pre-bar" style={{ width: `${Math.min(count, 100)}%` }} />
        </div>
        <p className="pre-count">{Math.min(count, 100)}%</p>
        <p className="pre-label">Initialising portfolio...</p>
      </div>
    </div>
  );
}
