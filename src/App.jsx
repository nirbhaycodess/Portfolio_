import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const sections = contentRef.current?.querySelectorAll(".section:not(#home)") || [];

    if (prefersReducedMotion || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          gsap.fromTo(
            entry.target,
            { autoAlpha: 0, y: 72 },
            { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <div ref={contentRef}>
        <Home />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
