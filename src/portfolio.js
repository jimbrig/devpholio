/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "jimbrig",
  title: "Welcome to my Devfolio, I'm Jimmy",
  subTitle: emoji(
    "Creative, entrepreneurial Software Engineer and Actuarial Scientist with a strong background working in dynamic and progressive environments as both an actuary and a developer."
  ),
  resumeLink:
    "assets/Resume.pdf",
    // "https://www.linkedin.com/in/jimbrig/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAlqbqYBU8QLns8RPbmzUFtkWWt6c8aUe44,1635461414533)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bjup3vJfLT4yZzYqPH5n5PA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
// To customize icons and social links, tweak src/components/SocialMedia

const socialMediaLinks = {
  github: "https://github.com/jimbrig",
  linkedin: "https://www.linkedin.com/in/jimbrig/",
  gmail: "jimmy.briggs@jimbrig.com",
  medium: "https://medium.com/@jimbrig",
  stackoverflow: "https://stackoverflow.com/users/6034530/jimbrig",
  twitter: "https://twitter.com/jimbrig2011",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "I have worked with a wide variety of projects, clients, and infrastructures and developed a far-reaching suite of skills..",
  skills: [
    emoji("🕸️ Develop highly interactive, data-intensive web, desktop, and mobile applications and interfaces."),
    emoji("💻 Provision, automate, and maintain machines operating on Windows through advanced PowerShell scripting and customized Windows image builds."),
    emoji("🧠 Problem Solving in a variety of contexts using past experiences and aquired skills along with a scientific, mathematical frame of mind."),
    emoji("⚡ Integration of third party services and APIs such as Auth0, Sanity.io, Cloudflare, Firebase, AWS, Digital Ocean, Heroku, GCP, Azure, etc."),
    emoji("🎖️ Lead teams and teach others through past experiences.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Windows Development",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Linux Development",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Ubuntu Development",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Computer Science",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Server Admin",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-user-shield"
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "Cross-Platform",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Cloud Computing",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PowerShell",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Georgia",
      logo: require("./assets/images/UGALogo.png"),
      subHeader: "BBA in Finance | Minor in Actuarial Science and Mathematical Statistics",
      duration: "August 2011 - May 2015",
      desc: "GPA: 4.0",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "R Programming Language",
      progressPercentage: "100%"
    },
    {
      Stack: "PowerShell Scripting",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Technologies",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Actuarial Consultant and Developer",
      company: "Oliver Wyman",
      companylogo: require("./assets/images/owlogo.png"),
      date: "June 2015 – October 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Chief Data Scientist",
      company: "Tychobra",
      companylogo: require("./assets/images/tychobra.png"),
      date: "November 2020 – June 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer | System Design Specialist | Database Administration",
      company: "Powwater",
      companylogo: require("./assets/images/pow.png"),
      date: "January 2021 – May 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Senior Associate | Actuarial Modernization",
      company: "PwC",
      companyLogo: require("./assets/images/pwc.png"),
      date: "August 2021 - Current"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my larger undertakings..",
  projects: [
    {
      image: require("./assets/images/powwater.png"),
      projectName: "Powwater System Design - Project Lead",
      projectDesc: "Created and designed a fully functional sytem of mobile and desktop applications with the purpose of delivering water to customers throughout the greater Mombasa, Kenya area.",
      footerLink: [
        {
          name: "Powwater.com",
          url: "https://powwater.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (678)-491-4856",
  email_address: "jimmy.briggs@jimbrig.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jimbrig2011", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
