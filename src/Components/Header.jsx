import React, { useState, useEffect } from "react";
import { logos, socialMediaUrl } from "../Details";
import leetcodeIcon from "../assets/leetcode-256px.png";
import linkedinImg from "../assets/linkedin.png";
import instagramImg from "../assets/instagram.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });
  const { linkedin, github, leetcode, instagram } = socialMediaUrl;

  const toggleClass = () => setIsOpen((s) => !s);

  const linkHoverClass = "transition-colors duration-200 hover-gradient";

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((s) => !s);

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <div className="ml-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
                <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.04 1.05l1.79-1.8-1.79-1.79-1.8 1.79 1.8 1.8zM20 11v2h3v-2h-3zM12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zM4.24 19.16l1.8-1.8-1.8-1.79-1.79 1.79 1.79 1.8zM18.36 19.16l1.79-1.79-1.79-1.8-1.8 1.8 1.8 1.79zM11 23h2v-3h-2v3z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav className={`block text-center md:flex justify-between`}>
        <ul className="flex justify-center items-center space-x-6 order-first md:order-last md:space-x-5 md:mr-5">
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-full p-1 transition-transform hover:scale-105 hover:bg-gradient hover:opacity-90">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-full p-1 transition-transform hover:scale-105 hover:bg-gradient hover:opacity-90">
              <img src={linkedinImg} alt="LinkedIn" className="w-[30px] h-[30px] object-contain" />
            </a>
          </li>
          <li>
            <a href={leetcode} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-full p-1 transition-transform hover:scale-105 hover:bg-gradient hover:opacity-90">
              <img src={leetcodeIcon} alt="LeetCode" className="w-[30px] h-[30px] object-contain" />
            </a>
          </li>
          <li>
            <a href={instagram} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-full p-1 transition-transform hover:scale-105 hover:bg-gradient hover:opacity-90">
              <img src={instagramImg} alt="Instagram" className="w-[30px] h-[30px] object-contain" />
            </a>
          </li>
        </ul>

        <ul className="dark:text-light-content font-medium mt-4 grid grid-cols-3 gap-x-6 gap-y-3 justify-items-center md:flex md:flex-row md:items-center md:space-x-8 md:mt-0 md:justify-end md:mr-10">
          <li>
            <a href="#home" className={linkHoverClass}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className={linkHoverClass}>
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className={linkHoverClass}>
              About
            </a>
          </li>
          <li>
            <a href="#technologies" className={linkHoverClass}>
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className={linkHoverClass}>
              Contact
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1Be1oPa24m73iAP7isVZEFyYMBhtxnuNRsrEHiWs9xp4/edit?tab=t.0" target="_blank" rel="noreferrer noopener" className={linkHoverClass}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
