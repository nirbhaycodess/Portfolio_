import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  const techs = techstack ? techstack.split(",").map((t) => t.trim()) : [];
  return (
    <article className="group rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
        <p className="text-content pt-4 font-light">{description}</p>

        <div className="flex flex-wrap gap-2 pt-4">
          {techs.map((t, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-dark-heading dark:text-light-heading">
              {t}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-3">
            {previewLink ? (
              <a
                href={previewLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 text-white text-sm shadow"
              >
                Live Preview
              </a>
            ) : (
              <span className="text-sm text-light-content">No Live Demo</span>
            )}
          </div>
          <div>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
