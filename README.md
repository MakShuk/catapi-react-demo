# React Demo App with GitHub Pages

<p align="right">
  <a href="README.ru.md"><img src="https://img.shields.io/badge/Русский-red?style=for-the-badge&logo=github" alt="Русский"></a>
</p>

![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?logo=tailwind-css)

A demonstration React application with configured deployment to GitHub Pages.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git
- GitHub account

## Installation

1. Clone the repository:
```bash
git clone [your-repository-URL]
cd catapi-react-demo
```

2. Install dependencies:
```bash
npm install
```

## Local Development

To run the application locally:
```bash
npm run start:dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Deploying to GitHub Pages

1. In your `package.json` file, add or modify the `homepage` field:
```json
{
  "homepage": "https://[your-username].github.io/[repository-name]",
  ...
}
```

2. Create a new gh-pages branch (if it doesn't exist):
```bash
git checkout -b gh-pages
git push origin gh-pages
```

3. Run deployment:
```bash
npm run deploy
```

This script will automatically:
- Build the project (`npm run build`)
- Push the contents of the `build` folder to the `gh-pages` branch
- Publish the site at the URL specified in `homepage`

## GitHub Pages Setup

1. Go to your repository settings on GitHub (Settings)
2. Find the "Pages" section
3. In the "Branch" section, select "gh-pages"
4. Click "Save"

After this, your application will be available at:
`https://[your-username].github.io/[repository-name]`

## Project Structure

- `/src` - application source code
- `/public` - static files
- `/build` - compiled version of the application (created during build)

## Available Scripts

- `npm run start:dev` - start development mode
- `npm run build` - build the project
- `npm run deploy` - deploy to GitHub Pages
- `npm run lint` - check code with linter
- `npm run lint:fix` - auto-fix linter errors
- `npm run format` - format code

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint
- Prettier

## License

This project is licensed under the MIT License.