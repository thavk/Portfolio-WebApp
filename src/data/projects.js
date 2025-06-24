const portfolioApp = {
    title: 'Portfolio',
    subTitle: 'Portfolio Web App',
    cardImg: "../../src/assets/portfolio/portfolio-card-header.png",
    projectImages: ["../src/assets/portfolio/portfolioImg1.png", "../src/assets/portfolio/portfolioImg1.png", "../src/assets/portfolio/portfolioImg1.png", "../src/assets/portfolio/portfolioImg1.png"],
    tags: ['React', 'SCSS', 'HTML5', 'JS', 'NodeJS'],
    video: ['video1', 'video2', 'video3'],
    description:
    `A responsive web app built with **React**, designed to showcase a developer portfolio with dynamic routing and modular project entries.
Each project card features an image, stack tags, and searchable metadata.
The app supports real-time filtering by technology and routes to individual project pages via slug-based navigation.
- **Fully custom-built** (no UI libraries used)
- **SCSS modules** for scoped styling
- **Dynamic routing** with \`react-router\`
- Uses \`ReactMarkdown\` to allow rich content descriptions.
> Built solo from scratch after ~6 months of self-taught learning. No frameworks, no boilerplate, just vanilla React and creativity.`,
    appUrl: 'http://localhost:5173',
    github: 'https://github.com/thavk/Portfolio-WebApp',
    slug: 'portfolio-web-app',
};

const leetcodeTrack  = {
    title: 'LeetCode Tracker',
    subTitle: 'LeetCode Solutions',
    cardImg: "",
    projectImages: undefined,
    tags: ['DSA', 'JS'],
    video: ['video1', 'video2', 'video3'],
    description: ``,
    appUrl: 'http://localhost:5173',
    github: 'https://github.com/thavk/leetcode-tracker',
    slug: 'leetcode-tracker',
};
export const projects = [leetcodeTrack, portfolioApp];
