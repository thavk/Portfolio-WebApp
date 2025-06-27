import portfolioImg1 from '../assets/portfolio/portfolioImg1.png';
import portfolioImg2 from '../assets/portfolio/portfolioImg2.png';
import leetcodecard from '../assets/portfolio/leetcodecard.jpg';
import portfolioCardHeader from '../assets/portfolio/portfolio-card-header.png';
const portfolioApp = {
    title: 'Portfolio',
    subTitle: 'Portfolio Web App',
    cardImg: portfolioCardHeader ,
    projectImages: [portfolioImg1, portfolioImg2],
    tags: ['React', 'SCSS', 'HTML5', 'JS', 'NodeJS'],
    video: ['video1', 'video2', 'video3'],
    description:`
A fully custom portfolio web app built with React, TypeScript, and SCSS, designed to showcase my work in a clean and interactive way. It features a real-time search bar that filters projects by tech stack, dynamic routing with clean URLs, and fully modular project entries stored as raw objects.

Everything is styled with SCSS Modules and built from scratch — no UI libraries, no boilerplate. Just raw code and design thinking. The project pages support rich formatting via Markdown, and the entire layout is responsive down to 480px.

This app is both a personal milestone and a live demonstration of how far I’ve come after just a few months of self-teaching. It's deployment-ready and will evolve as I do.
`,
    appUrl: 'http://localhost:5173',
    github: 'https://github.com/thavk/Portfolio-WebApp',
    slug: 'portfolio-web-app',
};

const leetcodeTrack  = {
    title: 'LeetCode Tracker',
    subTitle: 'LeetCode Solutions',
    cardImg: leetcodecard,
    projectImages: undefined,
    tags: ['DSA', 'JS'],
    video: ['video1', 'video2', 'video3'],
    description: `
A personal archive of JavaScript-based LeetCode solutions, structured for clarity and progression.
Solutions are neatly organized by topic (e.g., Binary Search, Arrays, Strings) and difficulty level (Easy, Medium, Hard), making it easy to review concepts and track growth over time.

This project isn't just a folder of files — it's a system that mirrors how I learn: methodical, consistent, and scalable. It's where I refine my algorithmic thinking, strengthen problem-solving patterns, and build the technical foundation that powers all my projects.
`,
    appUrl: undefined,
    github: 'https://github.com/thavk/Leetcode-track',
    slug: 'leetcode-tracker',
};
export const projects = [leetcodeTrack, portfolioApp];
