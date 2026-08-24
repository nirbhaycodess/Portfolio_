// Enter all your detials in this file
// Logo images (fallbacks to existing assets)
import logogradient from "./assets/profile.png";
import logo from "./assets/profile.png";
// Profile Image (transparent PNG)
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import docker from "./assets/techstack/docker.svg";
import mongodb from "./assets/techstack/mongodb.svg";
import aws from "./assets/techstack/aws.svg";
import express from "./assets/techstack/express.svg";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Nirbhay Yadav",
  tagline: "Software Developer & Computer Science Student",
  img: profile,
  about: `I am a Computer Science student at Invertis University specializing in the MERN stack and Data Structures & Algorithms. I focus on building scalable web applications and exploring AI/ML integrations. Currently building projects that combine frontend performance with backend scalability.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/nirbhay-yadav-202535ys/",
  github: "https://github.com/nirbhaycodess",
  leetcode: "https://leetcode.com/u/nirbhaycodeess/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/nirbhay.yadav_/",
};



// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Technology of Computer Science",
    Company: "Invertis University",
    Location: "Bareilly",
    Type: "Full Time",
    Duration: "2025 - 2028",
  },
  
  {
    Position: "Seconday Education",
    Company: `St.Paul's School`,
    Location: "Rampur",
    Type: "complete",
    Duration: " 2021 - 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: undefined,
  mongodb: mongodb,
  aws: aws,
  express: express,
  docker: docker,
  // Note: backend images (Node/Express/MongoDB) not present in assets; add images if desired.
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "SpeakUp Invertians",
    image: projectImage1,
    description: `SpeakUp Invertians — campus web app where students sign in with Google, verify ID card via OCR, and submit campus-only complaints with images.`,
    techstack: "MERN, Google OAuth, OCR",
    previewLink: "https://speakup-invertians.vercel.app/",
    githubLink: "https://github.com/nirbhaycodess/Speakup_invertians",
  },{
    title: "AC Services Booking",
    image: projectImage2,
    description: `AC Repairing Booking — a booking platform to request AC repairs, track booking status, and let technicians update progress (approve / cancel / done).`,
    techstack: "MERN, JavaScript",
    previewLink: "https://ac-services-booking.vercel.app/",
    githubLink: "https://github.com/nirbhaycodess/Ac-services-booking",
  },
  
  {
    title: "Portfolio_",
    image: projectImage3,
    description: `Personal portfolio showcasing projects, tech stack, and contact information. Built with React and Tailwind.`,
    techstack: "React, Tailwind CSS",
    previewLink: "",
    githubLink: "https://github.com/nirbhaycodess/Portfolio_",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nirbhayyadav64152@gmail.com",
  phone: "+91 9389504493",
};
