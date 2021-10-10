# Software Developer Folio

[![Build and Deploy](https://github.com/jimbrig/devpholio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jimbrig/devpholio/actions/workflows/deploy.yml)

- <https://devfolio.jimbrig.com/>

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

## Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

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

## Customize

Personalize page content in `/src/portfolio.js` & modify it as per your need.

You will also need to modify `index.html` to change the title and metadata to provide accurate SEO for your personal portfolio.

```javascript
/* Change this file to get your Personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Saad",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀"),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7"
};


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

## Deployment

Hosted via GitHub Pages on my `jimbrig.com` Domain: https://devfolio.jimbrig.com

See [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

### GitHub Actions

The devfolio is automatically deployed using GitHub Actions and Github pages.

- In `package.json` domain name needs to be correct in the `homepage` variable: `https://devfolio.jimbrig.com/`.
- Configure the custom domain for GitHub pages by adding a `CNAME` file to the `public/` folder.
- Guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

