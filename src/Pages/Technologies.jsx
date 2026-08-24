import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const techKeys = [
    "html",
    "css",
    "js",
    "react",
    "tailwind",
    "mongodb",
    "aws",
    "express",
  ];

  const toolKeys = ["vscode", "git", "github", "docker", "figma", "npm", "postman"];

  const techs = techKeys
    .map((k) => ({ name: k, src: techStackDetails[k] }))
    .filter((t) => t.src);

  const tools = toolKeys
    .map((k) => ({ name: k, src: techStackDetails[k] }))
    .filter((t) => t.src);

  const renderGrid = (items) => (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-6">
      {items.map((t, i) => (
        <div
          key={i}
          className="flex flex-col items-center p-4 bg-white dark:bg-dark-card rounded-xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-sky-100 to-purple-100 dark:from-neutral-800 dark:to-neutral-700 p-2">
            <img src={t.src} alt={t.name} className="max-h-9 max-w-full" />
          </div>
          <span className="mt-3 text-sm capitalize text-dark-heading dark:text-light-heading">{t.name}</span>
        </div>
      ))}
    </section>
  );

  return (
    <main id="technologies" className="container mx-auto max-width section">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">Technologies I've been working with recently</p>
      </section>
      {renderGrid(techs)}

      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      {renderGrid(tools)}
    </main>
  );
}

export default Technologies;
