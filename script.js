// Portfolio data
const portfolioData = {
	skills: [
		"Golang", "JavaScript", "SQL",
		"Express.js", "React.js", "Gin", "Fiber",
		"Docker", "Git", "Node.js", "PostgreSQL", "MongoDB",
		"SQLite", "Linux System Administration",
	],
	education: [
		{
			degree: "Diploma in Computer Science & Engineering",
			institution: "Faridpur Polytechnic Institute",
			year: "2017 - 2022",
			description: "CGPA: 3.45 / 4"
		},
		{
			degree: "SSC",
			institution: "Rajbari Govt. High School",
			year: "2012 - 2017",
			description: "GPA: 4.5 / 5 | Group: Science"
		}
	],
	projects: [
		{
			title: "remote-wv-go",
			description: "Serve your local Widevine CDM as remote API.",
			url: "https://github.com/joybiswas007/remote-wv-go"
		},
		{
			title: "wifipass-go",
			description: "A simple cli tool written in Golang to retrieve WiFi credentials and generate QR codes for easy sharing.",
			url: "https://github.com/joybiswas007/wifipass-go"
		},
		{
			title: "torrents-api",
			description: "Unofficial public torrent trackers API written in Node.js.",
			url: "https://github.com/joybiswas007/torrents-api"
		},
		{
			title: "node-midjourney-telegram-bot",
			description: "A Telegram bot created in Node.js using the unofficial Midjourney Node.js client.",
			url: "https://github.com/joybiswas007/node-midjourney-telegram-bot"
		},
		{
			title: "rutracker-api",
			description: "Unofficial RuTracker API written in Node.js.",
			url: "https://github.com/joybiswas007/rutracker-api"
		}
	],
	contact: [
		{
			url: "mailto:joybiswas040701@gmail.com",
			text: "Email Me"
		},
		{
			url: "https://www.linkedin.com/in/joybiswasl337",
			text: "LinkedIn",
			type: "linkedin"
		},
		{
			url: "https://github.com/joybiswas007",
			text: "GitHub"
		},
		{
			url: "https://drive.google.com/file/d/1nCJ7b1poa4p5Sevwh1NyCZck0DpvJVUM/view?usp=sharing",
			text: "Resume"
		}
	]
};

// DOM Elements
const skillsContainer = document.getElementById('skills-container');
const educationList = document.getElementById('education-list');
const projectList = document.getElementById('project-list');
const socialLinks = document.getElementById('social-links');
const contactLinks = document.getElementById('contact-links');
const yearElement = document.getElementById('year');


// Generate Skills Section
function generateSkills() {
	const skillsContainer = document.getElementById('skills-container');

	portfolioData.skills.forEach(skill => {
		const skillElement = document.createElement('span');
		skillElement.className = 'skill-item';
		skillElement.textContent = skill;
		skillsContainer.appendChild(skillElement);
	});
}


// Generate Education Section
function generateEducation() {
	portfolioData.education.forEach(edu => {
		const listItem = document.createElement('li');
		listItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <p class="institution">${edu.institution}</p>
            <p class="year">${edu.year}</p>
            <p>${edu.description}</p>
        `;
		educationList.appendChild(listItem);
	});
}

// Generate Projects Section
function generateProjects() {
	portfolioData.projects.forEach(project => {
		const listItem = document.createElement('li');
		listItem.innerHTML = `
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a>
            <p>${project.description}</p>
        `;
		projectList.appendChild(listItem);
	});
}

// Generate Social Links
function generateSocialLinks() {
	portfolioData.contact.forEach(link => {
		const linkElement = document.createElement('a');
		linkElement.href = link.url;
		linkElement.textContent = link.text;
		linkElement.target = '_blank';
		linkElement.rel = 'noopener noreferrer';
		socialLinks.appendChild(linkElement);
	});
}

// Set Current Year in Footer
function setCurrentYear() {
	yearElement.textContent = new Date().getFullYear();
}

// Initialize Portfolio
function initPortfolio() {
	generateSkills();
	generateEducation();
	generateProjects();
	generateSocialLinks();
	setCurrentYear();
}

// Load portfolio when DOM is ready
document.addEventListener('DOMContentLoaded', initPortfolio);
