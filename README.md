<p align="right">
  <a href="README.ru.md"><img src="https://img.shields.io/badge/Русский-red?style=for-the-badge&logo=github" alt="Русский"></a>
</p>

# CatAPI React Demo

A modern React application for viewing random cat images with a sleek user interface.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- 🐱 View random cat images
- 🔄 Auto-refresh functionality
- 🎨 Modern UI with gradient background
- 🎯 Toggle viewer on/off
- 📱 Responsive design
- ⚡ Lightning-fast performance

## Tech Stack

- React 18
- TypeScript
- TailwindCSS
- Shadcn/UI
- Radix UI
- Framer Motion

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/makshuk/catapi-react-demo.git
```

2. Install dependencies:
```bash
cd catapi-react-demo
npm install
```

3. Start the development server:
```bash
npm run start:dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Deployment

The application is deployed on GitHub Pages. You can visit the live demo at:
[https://makshuk.github.io/catapi-react-demo](https://makshuk.github.io/catapi-react-demo)

To deploy your own version:

1. Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://[your-username].github.io/[repository-name]",
  ...
}
```

2. Create and push the gh-pages branch:
```bash
git checkout -b gh-pages
git push origin gh-pages
```

3. Run the deployment script:
```bash
npm run deploy
```

This script will automatically:
- Build the project (`npm run build`)
- Push the contents of the build folder to the gh-pages branch
- Publish the site at the URL specified in homepage

4. Configure GitHub Pages:
- Go to your repository settings on GitHub (Settings)
- Find the "Pages" section
- In the "Branch" section, select "gh-pages"
- Click "Save"

After this setup, your application will be available at: `https://[your-username].github.io/[repository-name]`

## Available Scripts

- `npm run start:dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
  ├── components/
  │   ├── card/          # Card component
  │   ├── cat-viewer/    # Cat viewer components
  │   └── ui/            # UI components (Button, Switch)
  ├── App.tsx           # Main application component
  └── index.tsx         # Application entry point
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.