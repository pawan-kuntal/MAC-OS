import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import './cli.scss'

const Cli = ({windowName, setWindowsState}) => {
  const commands = {
    about: {
      description: 'About me',
      usage: 'about',
      fn: () => `
Hi! I'm Pawan Kuntal, a full-stack developer passionate about building
modern web applications. I specialize in React, JavaScript, and creating
beautiful user interfaces with a focus on performance and accessibility.

Currently working on exciting projects and learning new technologies!
      `
    },
    projects: {
      description: 'View featured projects',
      usage: 'projects',
      fn: () => `
📁 FEATURED PROJECTS:

1. Portfolio Website
   - React + Vite + SCSS
   - Mac OS style UI with interactive components

2. E-Commerce Platform
   - Full-stack application with payment integration
   - React frontend, Node.js backend

3. Task Management App
   - Real-time collaboration features
   - Cloud sync capabilities

4. Weather Dashboard
   - Real-time weather data
   - Beautiful data visualization

Type 'projects <number>' for more details about a specific project.
      `
    },
    skills: {
      description: 'Display technical skills',
      usage: 'skills',
      fn: () => `
💻 TECHNICAL SKILLS:

Frontend:
  ✓ React.js / Next.js
  ✓ JavaScript / TypeScript
  ✓ HTML / CSS / SCSS
  ✓ Responsive Design
  ✓ UI/UX Implementation

Backend:
  ✓ Node.js / Express
  ✓ MongoDB / PostgreSQL
  ✓ RESTful APIs
  ✓ Authentication & Security

Tools & Others:
  ✓ Git & GitHub
  ✓ Vite / Webpack
  ✓ Figma
  ✓ VS Code
      `
    },
    experience: {
      description: 'Professional experience',
      usage: 'experience',
      fn: () => `
💼 PROFESSIONAL EXPERIENCE:

Senior Frontend Developer (2023 - Present)
  Tech Corp Inc. | Remote
  - Led React development for 5+ projects
  - Improved performance by 40%
  - Mentored 3 junior developers

Full Stack Developer (2021 - 2023)
  Digital Solutions Ltd. | On-site
  - Built scalable web applications
  - Implemented real-time features
  - Optimized database queries

Junior Developer (2020 - 2021)
  StartUp Hub | Internship
  - Developed web components
  - Assisted in code reviews
  - Fixed bugs and improved code quality
      `
    },
    contact: {
      description: 'Contact information',
      usage: 'contact',
      fn: () => `
📧 CONTACT INFORMATION:

Email:    pawan@example.com
Phone:    +1 (555) 123-4567
Location: City, Country
Website:  www.pawankuntal.com

Available for projects, collaborations, and opportunities!
      `
    },
    social: {
      description: 'Social media profiles',
      usage: 'social',
      fn: () => `
🔗 SOCIAL MEDIA:

GitHub:      github.com/pawankuntal
LinkedIn:    linkedin.com/in/pawankuntal
Twitter:     twitter.com/pawankuntal
Instagram:   instagram.com/pawankuntal
Portfolio:   pawankuntal.com
      `
    },
    github: {
      description: 'Open GitHub profile',
      usage: 'github',
      fn: () => {
        window.open('https://github.com/pawankuntal', '_blank');
        return 'Opening GitHub profile...';
      }
    },
    resume: {
      description: 'View resume',
      usage: 'resume',
      fn: () => 'Resume opening in a new tab...'
    },
    email: {
      description: 'Send an email',
      usage: 'email',
      fn: () => {
        window.location.href = 'mailto:pawan@example.com';
        return 'Opening email client...';
      }
    },
    echo: {
      description: 'Echo a passed string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    }
  };

  const welcomeMessage = `
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   Welcome to Pawan Kuntal's Interactive Portfolio! 🎉   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝

Type 'help' to see all available commands.

Get started:
  → help          Show all commands
  → about         Learn about me
  → projects      View my projects
  → skills        See my skills
  → contact       Get in touch
  `;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal 
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'pawankuntal:~$'}
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
