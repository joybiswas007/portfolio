// Data for skills, projects, and links
const skillsData = {
  languages: ["Golang", "Node.js", "JavaScript", "SQL"],
  frameworks: ["Express.js", "React.js", "Gin", "Fiber"],
  tools: [
    "Docker",
    "Git",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "GCP",
    "Cobra",
    "Linux",
    "Manjaro",
    "Arch",
    "Ubuntu",
    "i3wm",
    "KDE",
    "Vim",
    "Postman",
  ],
  practices: [
    "Test-Driven Development (TDD)",
    "Agile Methodology",
    "Continuous Integration / Continuous Deployment (CI/CD)",
  ],
};

const projects = [
  {
    title: "remote-wv-go",
    description: "Serve your local Widevine CDM as remote API.",
    url: "https://github.com/joybiswas007/remote-wv-go",
  },
  {
    title: "torrents-api",
    description: "Unofficial public torrent trackers API written in Node.js.",
    url: "https://github.com/joybiswas007/torrents-api",
  },
  {
    title: "node-midjourney-telegram-bot",
    description:
      "A Telegram bot created in Node.js using the unofficial Midjourney Node.js client.",
    url: "https://github.com/joybiswas007/node-midjourney-telegram-bot",
  },
  {
    title: "rutracker-api",
    description: "Unofficial RuTracker API written in Node.js.",
    url: "https://github.com/joybiswas007/rutracker-api",
  },
];

const links = [
  { url: "https://github.com/joybiswas007", text: "GitHub" },
  { url: "https://www.linkedin.com/in/joybiswasl337", text: "LinkedIn" },
  { url: "mailto:joybiswas040701@gmail.com", text: "Mail" },
  {
    url: "https://drive.google.com/file/d/1nCJ7b1poa4p5Sevwh1NyCZck0DpvJVUM/view?usp=sharing",
    text: "Resume",
  },
];

// Function to generate the list of links
function generateLinks(containerId) {
  const container = document.getElementById(containerId);
  const list = document.createElement("ul");

  links.forEach((link) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${link.url}" target="_blank">${link.text}</a>`;
    list.appendChild(listItem);
  });

  container.appendChild(list);
}

// Function to generate the skills section
function generateSkillsSection() {
  const skillsSection = document.getElementById("skills-section");

  // Helper function to create and append a list
  function createList(title, items) {
    const section = document.createElement("h3");
    section.textContent = title;
    skillsSection.appendChild(section);

    const list = document.createElement("ul");
    items.forEach((skill) => {
      const listItem = document.createElement("li");
      listItem.textContent = skill;
      list.appendChild(listItem);
    });
    skillsSection.appendChild(list);
  }

  createList("Programming Languages", skillsData.languages);
  createList("Frameworks & Libraries", skillsData.frameworks);
  createList("Tools & Technologies", skillsData.tools);
  createList("Development Practices", skillsData.practices);
}

// Function to generate the projects section
function generateProjectsSection() {
  const projectList = document.getElementById("project-list");
  projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong><a href="${project.url}" target="_blank">${project.title}</a></strong>: ${project.description}`;
    projectList.appendChild(listItem);
  });
}

// Set the current year in the footer
function setCurrentYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

// Initialize the sections
generateSkillsSection();
generateProjectsSection();
setCurrentYear();
generateLinks("intro-links");
