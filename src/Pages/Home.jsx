import React, { useEffect, useState } from "react";
import { personalDetails } from "../Details";

const translations = [
  { lang: "English", text: personalDetails.name },
  { lang: "Hindi", text: "निर्भय यादव" },
  { lang: "Bengali", text: "নির্ভয় যাদব" },
  { lang: "Gujarati", text: "નિર્ભય યાદવ" },
  { lang: "Punjabi", text: "ਨਿਰਭੈ ਯਾਦਵ" },
  { lang: "Tamil", text: "நிர்பய் யாதவ்" },
  { lang: "Telugu", text: "నిర్భయ్ యాదవ్" },
  { lang: "Kannada", text: "ನಿರ್ಭಯ್ ಯಾದವ್" },
  { lang: "Malayalam", text: "നിർഭയ് യാദവ്" },
  { lang: "Marathi", text: "निर्भय यादव" },
  { lang: "Urdu", text: "نِربھے یادَو" },
];

function Home() {
  const { name, tagline, img } = personalDetails;
  const [nameIndex, setNameIndex] = useState(0);
  const displayedName = translations[nameIndex]?.text || name;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNameIndex((index) => (index + 1) % translations.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main id="home" className="container mx-auto max-width section flex flex-row items-center justify-between">
      <div className="flex-1 hero-copy">
        <h1 className="hero-line hero-line-one text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Hi,<span className="hero-wave inline-block ml-1" aria-hidden="true">👋</span>
          <br />My Name is<br />
        </h1>
        <h1
          key={nameIndex}
          className="hero-line hero-line-two text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {displayedName}
        </h1>
        <h2 className="hero-line hero-line-three text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {tagline}
        </h2>
      </div>
      <div className="hero-image mt-5 md:mt-0 flex items-center md:justify-end w-auto">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-72 md:h-72 rounded-full overflow-hidden bg-white dark:bg-dark-mode ml-4">
          <img className="w-full h-full object-cover object-top" src={img} alt={name} />
        </div>
      </div>
    </main>
  );
}

export default Home;
