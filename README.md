Deployment Link - https://thavk.github.io/Portfolio-WebApp/

## Portfolio WebApp

A fully responsive and searchable portfolio website built with React, TypeScript, and SCSS, designed to showcase development projects with dynamic routing, filterable project tags, and modular content structure.



## Features

Built from scratch - no UI frameworks

Searchable project tags via real-time search bar

Dynamic routing with react-router

Projects organized as modular objects in a single source file

Rich project descriptions via ReactMarkdown

SCSS Modules for scoped and maintainable styling

Responsive layout down to 480px width

## Tech Stack
React

TypeScript

JavaScript

SCSS Modules

HTML5

Node.js

## Structure
Project data is stored in a central projects.js file and exported throughout the app. Example:

const portfolioApp = {

  title: 'Portfolio',
  
  tags: ['React', 'SCSS', 'HTML5', 'JS', 'NodeJS'],
  
  ...
  
}

Each project object contains its own metadata, image paths, tags, and slug for routing.

## Search Functionality
The homepage dynamically renders clickable project cards. A real-time search bar filters these cards based on project tags. Each card routes to a detailed project page via a clean, slug-based URL.


Deployment-ready with Vite.
