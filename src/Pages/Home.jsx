import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const [nameIndex, setNameIndex] = useState(0);
  const translations = [
    { lang: "English", text: name },
    { lang: "Hindi", text: "निर्भय यादव" },
    { lang: "Bengali", text: "নির্ভয় যাদব" },
    { lang: "Gujarati", text: "નિર્ભય યાદવ" },
    { lang: "Punjabi", text: "ਨਿਰਭਯ ਯਾਦਵ" },
    { lang: "Tamil", text: "நிர்பய் யாதவ்" },
    { lang: "Telugu", text: "నిర్భయ్ యాదవ్" },
    { lang: "Kannada", text: "ನಿರ್ಭಯ್ ಯಾದವ್" },
    { lang: "Malayalam", text: "നിര്‍ഭയ് യാദവ്" },
    { lang: "Marathi", text: "निर्भय यादव" },
    { lang: "Urdu", text: "نِربھَے یادَو" },
  ];
  const displayedName = translations[nameIndex]?.text || name;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const waveRef = useRef();

  useLayoutEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from([h11.current, h12.current, h13.current], {
          x: -42,
          autoAlpha: 0,
          duration: 0.75,
          stagger: 0.12,
        })
        .from(
          myimageref.current,
          { x: 44, scale: 0.95, autoAlpha: 0, duration: 0.8 },
          0.18
        );

      if (waveRef.current) {
        gsap.to(waveRef.current, {
          rotation: 18,
          yoyo: true,
          repeat: -1,
          transformOrigin: "70% 70%",
          duration: 0.45,
          ease: "sine.inOut",
          repeatDelay: 1.1,
        });
      }
    });

    return () => context.revert();
  }, []);

  // Cycle through translations
  useEffect(() => {
    const id = setInterval(() => {
      setNameIndex((i) => (i + 1) % translations.length);
    }, 2200);
    return () => clearInterval(id);
  }, [translations.length]);

  // Keep name changes smooth without replaying the entire hero animation.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (nameIndex === 0 || prefersReducedMotion || !h12.current) return undefined;

    const animation = gsap.fromTo(
      h12.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );

    return () => animation.kill();
  }, [nameIndex]);

  return (
    <main id="home" className="container mx-auto max-width section flex flex-row items-center justify-between">
      <div className="flex-1">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,
          <span ref={waveRef} className="inline-block ml-1" aria-hidden="true">👋</span>
          <br />My Name is<br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {displayedName}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0 flex items-center md:justify-end w-auto">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-72 md:h-72 rounded-full overflow-hidden bg-white dark:bg-dark-mode ml-4">
          <img
            ref={myimageref}
            className="w-full h-full object-cover object-top"
            src={img}
            alt={name}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
