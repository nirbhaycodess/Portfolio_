import React, { useRef, useEffect, useState } from "react";
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
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
      // subtle entrance for the wave emoji
      if (waveRef.current) {
        gsap.from(waveRef.current, { x: -8, opacity: 0, duration: 0.8, ease: "Power2.out" });
      }
  }, []);

    // continuous waving animation for the hand emoji
    useEffect(() => {
      if (waveRef.current) {
        gsap.to(waveRef.current, {
          rotation: 20,
          x: 6,
          yoyo: true,
          repeat: -1,
          transformOrigin: "50% 50%",
          duration: 0.35,
          ease: "sine.inOut",
          repeatDelay: 0.6,
        });
      }
    }, []);

  // Cycle through translations
  useEffect(() => {
    const id = setInterval(() => {
      setNameIndex((i) => (i + 1) % translations.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  // animate name on change
  useEffect(() => {
    if (h12.current) {
      gsap.fromTo(
        h12.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "Power2.out" }
      );
    }
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
