import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray(".section:not(#home)").forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 72,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        });
      });
    }, contentRef);

    return () => context.revert();
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
