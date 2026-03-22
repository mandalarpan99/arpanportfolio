import { AppProvider, useAppStore } from "./store/appStore";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import "./App.css";

function PortfolioApp() {
  const { preloaderDone } = useAppStore();
  return (
    <>
      {!preloaderDone && <Preloader />}
      <div className={`app ${preloaderDone ? "app-visible" : "app-hidden"}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PortfolioApp />
    </AppProvider>
  );
}
