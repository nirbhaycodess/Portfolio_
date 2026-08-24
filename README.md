# Nirbhay Yadav — Developer Portfolio

A responsive single-page portfolio for Nirbhay Yadav, a software developer and Computer Science student. It presents projects, education, technical skills, social profiles, and a contact form.

## Features

- Responsive, single-page React interface
- Light and dark themes, with the selected theme saved in local storage
- Animated hero section powered by GSAP
- Project cards with live-demo and source-code links
- Tech stack and tools sections sourced from one configuration file
- Contact form delivered through Formspree, with spam honeypot protection
- Social links, resume link, and custom favicon

## Tech stack

- React 18
- Tailwind CSS 3
- GSAP
- Formspree
- Create React App

## Run locally

Prerequisites: Node.js 16 or later and npm.

```bash
npm install
npm start
```

The development server opens at `http://localhost:3000`.

## Available scripts

```bash
npm start       # Start the local development server
npm run build   # Create an optimized production build
npm test        # Run the test suite
```

## Customization

Update [`src/Details.jsx`](src/Details.jsx) to change the personal profile, social links, education, skills, projects, and contact details. Site images and icons are in `src/assets`.

The contact form endpoint is configured in [`src/Pages/Contact.jsx`](src/Pages/Contact.jsx). Replace it with your own Formspree endpoint if you fork this project.

## Project structure

```text
src/
├── Components/  # Shared UI components
├── Pages/       # Portfolio sections
├── assets/      # Profile, project, social, and technology images
├── App.jsx      # Page composition
└── Details.jsx  # Portfolio content configuration
```

## Contact

- LinkedIn: [Nirbhay Yadav](https://www.linkedin.com/in/nirbhay-yadav-202535ys/)
- GitHub: [nirbhaycodess](https://github.com/nirbhaycodess)
- Email: [nirbhayyadav64152@gmail.com](mailto:nirbhayyadav64152@gmail.com)

## License

This project is intended for personal portfolio use.
