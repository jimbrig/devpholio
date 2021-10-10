# Software Developer Folio

[![Build and Deploy](https://github.com/jimbrig/devpholio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jimbrig/devpholio/actions/workflows/deploy.yml)

Live website: *<https://devfolio.jimbrig.com/>*

<!-- START doctoc generated TOC -->

## Table of Contents

- [Software Developer Folio](#software-developer-folio)
  - [Tech Stack](#tech-stack)
  - [Portfolio Sections](#portfolio-sections)
    - [Portfolio.js](#portfoliojs)
  - [Installation](#installation)
    - [Git](#git)
    - [Docker](#docker)
  - [Deployment](#deployment)
    - [GitHub Actions](#github-actions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Tech Stack

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Portfolio Sections

✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Open Source Projects Connected with Github\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me\
✔️ Twitter Timeline\
✔️ Github Profile

### Portfolio.js

All content is essentially created via the `/src/portfolio.js` file.

```javascript
const greeting = { ... };

const socialMediaLinks = { ... }

const skillsSection = { .... }

const techStack = { .... }

const workExperience = { .... }

const openSource = { .... }

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }
```

Additionally, `index.html` is customized to alter the title and metadata associated with the site for more accurate SEO.

## Installation

Dependencies:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/)
- [npm](http://npmjs.com)
- [Docker](https://www.docker.com/products/docker-desktop)

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

### Git

Clone via `git` and run via `Docker` or run directly via `npm install` > `npm start` | `npm build` | `npm run`.

### Docker

- Pull pre-built container from Github Container Registry, Run, Launch:

```powershell
docker pull ghcr.io/jimbrig/devpholio:latest
docker run -t -p 3000:3000 devpholio:latest
start http://localhost:3000
```

- Build and Run Locally:

```powershell
docker build -t devfolio:latest .
docker run -t -p 3000:3000 devfolio:latest
```

## Deployment

Hosted via GitHub Pages on my `jimbrig.com` Domain: https://devfolio.jimbrig.com

See [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

### GitHub Actions

The devfolio is automatically deployed using GitHub Actions and Github pages.

- In `package.json` domain name needs to be correct in the `homepage` variable: `https://devfolio.jimbrig.com/`.
- Configure the custom domain for GitHub pages by adding a `CNAME` file to the `public/` folder.
- Guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).


***

Jimmy Briggs | 2021

