
# Alex Rivera | Developer Portfolio

A React + Vite portfolio created for a Web Technologies course assignment. The site presents a fictional developer's background, technical skills, and projects.

## Live Website

https://abowser2.github.io/portfolio/

## Features

- Home, Experience, Projects, and Contact pages
- Navigation with active-page indicators
- Reusable project cards and dynamic project detail pages
- Project search and filtering by title, category, or technology
- Helpful messages for unknown pages and projects
- Persistent dark theme using React state and effects
- Responsive styling and keyboard-visible focus indicators
- Resume PDF download
- GitHub Pages deployment using GitHub Actions

## Technologies

- React
- Vite
- React Router v7
- JavaScript
- HTML and CSS
- Git and GitHub
- GitHub Actions

## Run Locally

Make sure Node.js and npm are installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/abowser2/portfolio.git
   ```

2. Navigate into the project folder:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Run the code checks and production build:

   ```bash
   npm run lint
   npm run build
   ```

## Deployment

The site is deployed to GitHub Pages. The GitHub Actions workflow at `.github/workflows/deploy.yml` installs dependencies, runs lint and build checks, and deploys the generated `dist` folder when changes are pushed to the `main` branch.

## Project Structure

- `src/` — React application, components, pages, styles, and project data
- `public/` — Static public assets, including the resume PDF
- `index.html` — Main HTML entry point
- `vite.config.js` — Vite configuration
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Academic Note

This portfolio uses a fictional developer profile and illustrative project content for the course assignment. 