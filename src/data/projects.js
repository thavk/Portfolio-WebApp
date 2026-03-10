import portfolioImg1 from '../assets/portfolio/portfolioImg1.png';
import portfolioImg2 from '../assets/portfolio/portfolioImg2.png';
import leetcodecard from '../assets/portfolio/leetcodecard.jpg';
import portfolioCardHeader from '../assets/portfolio/portfolio-card-header.png';
import levelupboardcard from '../assets/portfolio/levelupboardcard.png';
import blogwebsitecard from '../assets/portfolio/blogwebsitecard.png';
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

const blogWebApp  = {
    title: 'Blog Web App',
    subTitle: 'Blog Website',
    cardImg: blogwebsitecard,
    projectImages: undefined,
    tags: ['React', 'NodeJS', 'PostgreSQL', 'SCSS', 'TypeScript', 'Docker'],
    video: ['video1', 'video2', 'video3'],
    description: `
## Blog Platform (Full Stack)

This project is a backend focused blog platform designed to explore secure authentication architecture, API design, and relational database structure.

The system uses a React client that communicates with an Express proxy responsible for validating authentication before forwarding requests to the backend API. JSON Web Tokens are stored in HttpOnly and SameSite=Strict cookies and are never exposed to the core application service.

The backend API handles application logic and communicates with a PostgreSQL database. Because authentication is validated at the proxy layer, the backend never receives JWTs or cookies directly. This design enforces separation of concerns and reduces the attack surface of the system.

User credentials are hashed using bcrypt and all database queries use parameterized statements to prevent SQL injection.

This project served as my first fully self designed backend architecture and gave me hands on experience implementing authentication flows, structuring APIs, and designing secure interactions between services.
`,
    appUrl: undefined,
    github: 'https://github.com/thavk/blog-website',
    slug: 'blog-web-app',
};


const levelUpBoard  = {
    title: 'Level Up Board',
    subTitle: 'Employee Efficiency Tracker',
    cardImg: levelupboardcard,
    projectImages: undefined,
    tags: ['React', 'PostgreSQL', 'Tailwind', 'TypeScript', 'Docker'],
    video: ['video1', 'video2', 'video3'],
    description: `
## LevelUp Board

LevelUp Board is a production ready full stack application designed to measure and visualize employee activity across engineering teams. The system integrates with external platforms such as GitHub, Slack, and Jira to automatically collect development and collaboration events through APIs and webhooks.

Incoming activity data is processed by an XP scoring system that applies weighted values to different types of actions. This allows the platform to generate a dynamic efficiency metric based on real engineering activity. The processed data is stored in a database and displayed through a web interface where organizations can monitor performance across teams.

The platform supports organization level and team level management, allowing administrators to create and structure teams while tracking activity within each group. Users can view leaderboards, activity summaries, and historical performance data generated from the aggregated event stream.

The application includes a complete end to end system architecture with authentication, client server communication, external API integrations, and deployment infrastructure. The project focuses on building a reliable event driven backend capable of ingesting external activity data, processing it into meaningful metrics, and exposing it through a structured API and user interface.

## Core Capabilities

- Integration with GitHub, Slack, and Jira APIs
- Webhook based event ingestion for real time activity updates
- XP based scoring algorithm with configurable action weighting
- Organization and team management system
- Automatic aggregation and storage of user activity data
- Leaderboards and efficiency tracking within teams
- Authentication and full client server application flow
- Deployed production environment

## Key Focus Areas

- Event driven backend architecture
- External API integration and webhook handling
- Algorithm based scoring and data aggregation
- Multi organization and team level data modeling
- Secure authentication and application flow
`,
    appUrl: 'https://www.levelupboard.com',
    github: undefined,
    slug: 'level-up-board',
};

export const projects = [leetcodeTrack, portfolioApp, blogWebApp, levelUpBoard];
