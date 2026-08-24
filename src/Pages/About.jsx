import React from "react";
import { eduDetails } from "../Details";

function About() {
  return (
    <main id="about" className="container mx-auto max-width section">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <div className="mt-6 lg:max-w-3xl">
          <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
            <p className="text-content text-lg leading-relaxed">
              I am a motivated Full-Stack Developer and Computer Science student who builds performant, accessible web applications. I enjoy transforming complex problems into elegant, maintainable solutions using React, Node.js, and modern tooling. My focus is on crafting clean user experiences, optimizing front-end performance, and continually improving through hands-on projects and algorithmic practice. I am actively expanding my expertise in system design and cloud-native development while contributing to open-source initiatives.
            </p>
            <p className="text-content mt-4 text-sm text-opacity-80">
              Tech focus: React · JavaScript · Node.js · Tailwind CSS · REST APIs · Git
            </p>
          </div>
        </div>
      </section>
      {/* Work Experience section removed */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        <div className="mt-6 space-y-4">
          {eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <article key={`${Company}-${Duration}`} className="pt-2">
              <div className="bg-white/90 dark:bg-gray-900/60 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-1 rounded-lg" style={{ height: 64, background: 'linear-gradient(180deg,#06b6d4,#8b5cf6,#ec4899)' }} />
                  <div>
                    <h3 className="text-content md:text-lg lg:text-xl font-semibold text-gradient">{Position}</h3>
                    <p className="text-sm text-dark-heading dark:text-light-heading opacity-90 mt-1">{Company} • {Location}</p>
                    <div className="mt-3">
                      <span className="inline-block bg-gradient text-white text-xs px-3 py-1 rounded-full shadow-sm">{Type}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-dark-heading dark:text-light-heading min-w-fit ml-4">{Duration}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
