/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hà Công Bằng",
  title: "Xin chào! Tôi là Bằng",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/u/1/folders/1JZ4voR2TytSlmVBtm6zhBcpZwikz8Vn7", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hacongbang174",
  gmail: "hacongbang174@gmail.com",
  gitlab: "https://gitlab.com/hacongbang174",
  facebook: "https://www.facebook.com/profile.php?id=100079073785914",
  stackoverflow:
    "https://stackoverflow.com/users/22549332/c%c3%b4ng-b%e1%ba%b1ng-h%c3%a0",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ho Chi Minh City University of Technology",
      logo: require("./assets/images/HCMUT_official_logo.png"),
      subHeader: "Port Construction and Marine Structures.",
      duration: "September 2012 - April 2017",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "CODEGYM TRAINING CENTER IN HUẾ",
      logo: require("./assets/images/codegym.webp"),
      subHeader: "Develop Java fullstack",
      duration: "February 2023 - August 2023",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Learning programming knowledge from basic to advanced",
        "Back-end web development with JSP & Servlet and Spring MVC",
        "Front-end web development with HTML, CSS, JavaScript, React ",
        "Software development following the Scrum - Agile methodology"
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
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/toyota.jpg"),
      projectName: "Project Toyota Car Maintenance Process Management",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/game-lai-may-bay-1.jpg"),
      projectName: "Game Space Invaders",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hacongbang174.github.io/CaseStudy_Game_Space_Invaders/"
        }
      ]
    },
    {
      image: require("./assets/images/phuc-long.jpg"),
      projectName: "Phúc Long Coffee Management",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/hacongbang174/CaseStudy-Module2"
        }
      ]
    },
    {
      image: require("./assets/images/logohcb.png"),
      projectName: "HCB Shop Management",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/hacongbang174/CaseStudy-Module3"
        }
      ]
    },
    {
      image: require("./assets/images/figure.png"),
      projectName: "Figures Shop Management",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/hacongbang174/Figures_Store_Case_M4"
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
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certificate for Code.org Course",
      subtitle: "Completion Certificate for Code.org Course",
      image: require("./assets/images/Code.org_logo.svg.png"),
      imageAlt: "Code.org Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/u/1/folders/1lluGofXVKn9nwbKghTxYO4suYegbKx07"
        }
      ]
    },
    {
      title: "Git Source Code Management Certificate",
      subtitle:
        "Git Source Code Management Certificate, Completion Certificate for How to Learn Course, Scrum Essence Course Completion Certificate, Kanban Course Completion Certificate",
      image: require("./assets/images/codegym.webp"),
      imageAlt: "Codegym logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/u/1/folders/1lluGofXVKn9nwbKghTxYO4suYegbKx07"
        }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),
  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "+84 932 555 266",
  email_address: "hacongbang174@gmail.com"
};

// Twitter Section

const twitterDetails = {
  // userName: "twitter", //Replace "twitter" with your twitter username without @
  // display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
