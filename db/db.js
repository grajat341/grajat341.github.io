export const bio = [
  "Hello there &#128075;",
  "I'm Rajat Gupta, a Software Engineer 2 at Microsoft with a specialization in backend systems. I have a passion for all things tech and consider myself a curious and enthusiastic developer.",
  "Apart from coding, I love to watch Sports, listen to music, and travel.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "C#, Python, Go, Java",
    color: "1",
    percentage: "80",
  },
  {
    title: "Databases & Data Warehouses",
    skillName: "MySQL, Cosmos DB, Snowflake, Amazon RDS, Databricks",
    color: "1",
    percentage: "80",
  },
  {
    title: "Cloud & Frameworks",
    skillName: "Azure, AWS, Spring, Spring Boot",
    color: "6",
    percentage: "80",
  },
  {
    title: "Data & Analytics",
    skillName: "PySpark, Snowpark, Data Pipeline Design, Analytical Dashboards, Power BI",
    color: "4",
    percentage: "70",
  },
  {
    title: "AI",
    skillName: "Agentic AI, Copilot, Claude",
    color: "7",
    percentage: "70",
  },
  {
    title: "DevOps",
    skillName: "Jenkins, Docker, Kubernetes",
    color: "3",
    percentage: "80",
  },
  {
    title: "Engineering",
    skillName: "System Design at Scale, REST APIs, Low-Level Design, Problem Solving",
    color: "6",
    percentage: "80",
  },
  {
    title: "Tools",
    skillName: "Git, Maven, Postman",
    color: "3",
    percentage: "70",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were worked by me personally",
  softwareProjects: [
    {
      projectName: "SKU Price Finder",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a Spring Boot microservice that has APIs to crawl Amazon(.com) and extract the SKU details from web Pages",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["SpringBoot", "Java", "MYSQL", "Docker"],
    },
    {
      projectName: "Data Lineage",
      image: "images/findyourbank.png",
      summary:
        "Developed a parent Child RelationShip Represnting Visual flow of Data among the various Sources in an Organization ",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Java", "Spring", "JavaScript", "Jenkins"],
    },
    {
      projectName: "Language Translater",
      image: "images/pizzaorderchatbot.png",
      summary:
        "Created a custom Language Translated by using Open Source LibreTranslate API. Added the Support for Translating a s3 File.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Python", "Docker","Kubernetes"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Developed myt Own Portfolio using Github and hosted it there itself.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "JavaScript"],
    }

  ]
};

export const experience = [
  {
    title: "Microsoft",
    duration: "August 2024 - Present",
    subtitle: "Software Engineer 2",
    details: [
      "Migrated the load-balancing proxy from NGINX to Envoy with zero downtime for 30,000 customers, preserving feature parity and designing a safe rollout strategy.",
      "Built AI-agent monitoring to identify migration issues before they reached production.",
      "Developed custom backend SSL certificate validation for Azure Application Gateway, a high-performance load balancer serving customers worldwide.",
      "Improved Fleet Degradation Analysis detection techniques to keep release degradations below 2%; created Agentic FUD, an internal tool for identifying issues earlier.",
      "Improved performance-testing infrastructure, reducing the analysis window from one month to one week.",
      "Designed Gateway Health dashboards to speed up customer issue reporting and implemented multi-certificate support for Azure Application Gateway.",
      "Received Microsoft's Exceeding Expectations Annual Reward."
    ],
    tags: ["Azure", "Application Gateway", "Envoy Proxy", "AI Agents"],
    icon: "heartbeat",
  },
  {
    title: "CommerceIQ",
    duration: "March 2024 - July 2024",
    subtitle: "SDE-2",
    details: [
      "Migrated the backend technology stack from Snowflake to Databricks, reducing costs by 30%.",
      "Reduced API response latency by implementing query-level caching."
    ],
    tags: ["Java", "Spring Boot", "Snowflake", "Databricks"],
    icon: "heartbeat",
  },
  {
    title: "CommerceIQ",
    duration: "June 2022 - March 2024",
    subtitle: "Software Engineer",
    details: [
      "Developed an e-commerce omnichannel product to help online retailers improve profitability.",
      "Collaborated with product, backend, and QA teams to deliver product builds on schedule."
    ],
    tags: ["Java 8", "Spring Boot", "AWS", "Jenkins", "Python", "Redis"],
    icon: "heartbeat",
  },
  {
    title: "Informatica",
    duration: "August 2020 - June 2022",
    subtitle: "Software Engineer",
    details: [
      "Successfully implemented Data Masking Algorithms to enable secure transfer of business data among organizations, Achieved more than 20 story points in each sprint.",
      "Streamlined the development  of DataLineage where entire data flow can be made visible via wasy workflow diagrams. Contributedbuted to user onboarding Service,Workflow service",
      "Collaborated closely with cross-functional teams such as product, backend, android, and QA, ensuring timely delivery of product builds to meet deadlines"
    ],
    tags: ["Java", "Spring", "C++", "JavaScript"],
    icon: "qrcode",
  }
];

export const education = [
  {
    title: "Bachelor of Engineering, Computer Science",
    duration: "May 2020",
    subtitle: "Chandigarh University, Chandigarh",
    details: [
      "Graduated with a CGPA of 9.05."
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "12th Grade, Science",
    duration: "April 2016",
    subtitle: "SP Smart International School, Jammu",
    details: [
      "Graduated with 93.8%."
    ],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Stackoverflow",
        link: "https://stackoverflow.com/users/8086622/rajat-gupta",
      },
      {
        text: "GitHub",
        link: "https://github.com/grajat341",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/grajat341/",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/rajgupta3/",
      }
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Rajat Gupta.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "grajat341";
const mediumUserName = "grajat341";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
