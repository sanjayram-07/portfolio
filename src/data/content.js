// Single source of truth for every piece of content on the site.
// Sourced from Resume_Sanjay.pdf, the LinkedIn profile and github.com/sanjayram-07.

export const profile = {
  name: 'Sanjay Ram M',
  shortName: 'Sanjay',
  role: 'Full Stack Developer',
  tagline: 'I build real-time web systems, AI automation pipelines and things that move.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'm.sanjayram07@gmail.com',
  phone: '+91 97894 84684',
  github: 'https://github.com/sanjayram-07',
  linkedin: 'https://www.linkedin.com/in/sanjayram07',
  resume: '/Resume_Sanjay.pdf',
  photo: '/profile.jpg',
  handle: '@sanjayram07',
  summary:
    'Full Stack Developer skilled in building real-time web applications using Node.js, Express.js and React. Proficient in Data Structures & Algorithms with hands-on experience designing scalable backend systems, event-driven architectures and AI-powered automation pipelines.',
  about: [
    "I'm a Computer Science & Engineering undergraduate at Madras Institute of Technology, Anna University. Most of what I build sits at the seam between a backend that has to stay up and an interface that has to feel instant — WebSocket chat servers, parsers that chew through staff-uploaded spreadsheets, RAG assistants wired into a live point-of-sale site.",
    "I like problems where the hard part is the plumbing: routing a private message to exactly one socket instead of broadcasting to fifty, migrating a relational schema into a document model without losing the relationships, getting a pose estimator and an FSR sensor to agree on whether a rep actually counted.",
    'Outside of code I ran 110m hurdles and long jump at state level, and led a 500+ participant annual sports meet as Pupil Leader. Same instinct, different track.',
  ],
};

export const experience = [
  {
    id: 'appian',
    company: 'Appian',
    role: 'Software Developer',
    period: 'Present',
    location: 'India',
    mode: 'Placed',
    logo: '/logos/appian.png',
    tint: '#2a6df4',
    summary: 'Placed as a Software Developer at Appian, the low-code process automation platform.',
    points: [
      'Placed as a Software Developer at Appian, working on enterprise low-code process automation.',
    ],
    stack: ['Java', 'SQL', 'Process Automation'],
  },
  {
    id: 'vasanth',
    company: 'Vasanth & Co',
    role: 'AI & Automation Intern',
    period: 'May 2026 — Jun 2026',
    location: 'Chennai, India',
    mode: 'On-site',
    logo: '/logos/vasanth.png',
    tint: '#e23b2e',
    summary:
      'Shipped a LangChain RAG chatbot into the live Vasanth & Co point-of-sale site and built n8n automation pipelines around it.',
    points: [
      'Developed a Retrieval-Augmented Generation chatbot using LangChain and integrated it into the Vasanth & Co Point of Sale (POS) website as a live production project.',
      'Built an n8n RAG assistant that processes Google Drive documents, stores vector embeddings in Pinecone and delivers responses over Gmail.',
      'Built an n8n pipeline collecting student details through a web form and auto-syncing them to Google Sheets in real time.',
      'Collaborated with a senior developer on the system and database design of an Internal Task Management application for the Saidapet corporate office.',
    ],
    stack: ['LangChain', 'Pinecone', 'n8n', 'Node.js', 'Google APIs'],
  },
  {
    id: 'srim',
    company: 'Srim RnD',
    role: 'Software Engineer Intern',
    period: 'Apr 2026 — May 2026',
    location: 'Chennai, India',
    mode: 'Remote',
    logo: '/logos/srim.svg',
    tint: '#1b5fae',
    summary:
      'Migrated a production Northwind application from MySQL to MongoDB and shipped it as a live deployment.',
    points: [
      'Migrated the Northwind application database from MySQL to MongoDB, redesigning the data model to suit a NoSQL architecture.',
      'Reworked the application data layer against the new document schema and deployed it as a live production project.',
      'Completed internship training in web development, building responsive interfaces with Bootstrap.',
    ],
    stack: ['MongoDB', 'MySQL', 'Express.js', 'Node.js', 'Bootstrap'],
  },
];

export const projects = [
  {
    id: 'congestion-5g',
    title: 'Cross-Layer Assisted Congestion Prediction for IoT 5G Networks',
    eyebrow: 'Research',
    tint: '#3f7bff',
    year: '2026',
    blurb:
      'Research work on predicting congestion in 5G cellular networks carrying dense IoT traffic, using signals pulled across protocol layers rather than from the transport layer alone.',
    detail: [
      'Studies congestion in 5G cellular networks under dense machine-type IoT traffic, where transport-layer signals alone react too late to be useful.',
      'Builds a cross-layer feature set — PHY/MAC channel quality and scheduling indicators alongside transport-layer queue and throughput behaviour — so congestion is predicted before loss shows up.',
      'Targets the IEEE International Conference on Communications (ICC) research track.',
    ],
    stack: ['5G NR', 'IoT', 'Cross-Layer Design', 'Python', 'Network Simulation'],
    links: [],
  },
  {
    id: 'ct-automation',
    title: 'CT Department Automation System',
    eyebrow: 'Team Lead · Backend & Integration',
    tint: '#22c55e',
    year: '2026',
    blurb:
      'A department-level academic portal for the Department of Computer Technology that parses staff-uploaded mark and attendance files automatically and serves them through a React dashboard.',
    detail: [
      'Led backend and integration for a department-level academic portal serving staff and students.',
      'Built a Python parser that extracts Assessment 1 & 2 marks and attendance straight out of staff-uploaded files, removing manual data entry.',
      'Exposed the parsed academic data through REST APIs in Node.js/Express and wired them into a React frontend for real-time mark and attendance viewing.',
      'Coordinated a 5-branch Git workflow and managed cross-module integration between the parser, backend and frontend teams.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'Python', 'MongoDB'],
    links: [],
  },
  {
    id: 'fitmon',
    title: 'FitMon — AI Fitness Tracking System',
    eyebrow: "Dev's House 48-Hour Hackathon, VIT Chennai",
    tint: '#ff8a3d',
    year: 'Mar 2026',
    blurb:
      'Real-time fitness tracker combining computer-vision workout form correction, an ESP8266 pressure sensor for hardware rep validation, and AI-generated workout and diet plans — built in 48 hours.',
    detail: [
      'Built a real-time fitness tracker integrating computer vision, IoT hardware and a full-stack web app inside a 48-hour hackathon.',
      'Developed a bicep-curl form analyser using MediaPipe and OpenCV that detects joint angles, counts reps and gives live posture-correction feedback.',
      'Interfaced an ESP8266 with an FSR sensor to measure exercise pressure, validating reps at the hardware level alongside the CV model.',
      'Added AI-assisted workout and diet planning that generates routines and nutrition targets from the logged session history.',
      'Full-stack app in React, Node.js/Express and Firestore showing live workout metrics, session history and form scores.',
    ],
    stack: ['React', 'Node.js', 'MediaPipe', 'OpenCV', 'ESP8266', 'Firestore'],
    links: [
      { label: 'GitHub', url: 'https://github.com/sanjayram-07/FitMon' },
      { label: 'Fullstack', url: 'https://github.com/sanjayram-07/Fullstack_Fitmon' },
    ],
  },
  {
    id: 'vasanth-rag',
    title: 'Vasanth & Co RAG Assistant',
    eyebrow: 'Internship · Production',
    tint: '#9b3bff',
    year: '2026',
    blurb:
      'A LangChain Retrieval-Augmented Generation chatbot embedded in the Vasanth & Co point-of-sale website, backed by an n8n pipeline that indexes Google Drive documents into Pinecone.',
    detail: [
      'Built a Retrieval-Augmented Generation chatbot with LangChain and integrated it into the Vasanth & Co Point of Sale website as a live production feature.',
      'Designed an n8n workflow that ingests Google Drive documents, chunks them and stores vector embeddings in Pinecone for retrieval.',
      'Delivered generated answers back to staff over Gmail, closing the loop without a separate client.',
      'Shipped alongside an n8n form-to-Google-Sheets pipeline syncing student records in real time.',
    ],
    stack: ['LangChain', 'Pinecone', 'n8n', 'Google Drive API', 'Gmail API'],
    links: [],
  },
  {
    id: 'pulsechat',
    title: 'PulseChat',
    eyebrow: 'Real-time Systems',
    tint: '#2de8c0',
    year: '2025',
    blurb:
      'A WebSocket chat server handling 50+ concurrent users with zero HTTP polling, routing 1:1 private messages to exact socket instances instead of broadcasting.',
    detail: [
      'Built a WebSocket real-time chat server supporting 50+ concurrent users with zero HTTP polling overhead.',
      'Engineered a server-side user-to-socket registry that routes 1:1 private messages to exact socket instances, eliminating unnecessary broadcasts.',
    ],
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'JavaScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/sanjayram-07/PULSE-CHAT' }],
  },
];

export const education = [
  {
    id: 'mit',
    school: 'Madras Institute of Technology',
    parent: 'Anna University, Chromepet, Chennai',
    degree: 'B.E. Computer Science and Engineering',
    period: '2024 — 2028',
    logo: '/logos/mit.png',
    image: '/logos/mit-campus.jpg',
    tint: '#7b3fb0',
    notes: [
      'Pursuing a B.E. in Computer Science and Engineering at one of the four autonomous constituent colleges of Anna University.',
      'Coursework in Data Structures & Algorithms, Object-Oriented Programming and Database Management Systems.',
    ],
  },
  {
    id: 'ssv',
    school: 'Sri Sankara Vidyalaya Mat. Hr. Sec. School',
    parent: 'Chennai, Tamil Nadu',
    degree: 'Higher Secondary (Class XII) · Computer Science',
    period: '2023 — 2024',
    logo: '/logos/sankara.png',
    image: '/logos/sankara.png',
    tint: '#e0942f',
    grade: '94%',
    notes: [
      'Completed Higher Secondary education with a specialisation in Computer Science.',
      'School Sports Team · Student Pupil Leader.',
    ],
  },
];

// Rotating word in the hero's typing animation.
export const heroWords = ['DEVELOPER', 'AUTOMATION ENGINEER', 'RESEARCHER', 'BUILDER', 'CODER'];

// Filter categories for the Skills grid, in display order.
export const skillFilters = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'networking', label: 'Networking' },
  { id: 'tools', label: 'Tools' },
];

// Each skill renders an icon three ways: a devicon/font-awesome class, an
// emoji, or — for tools with no icon set — a plain monogram badge.
export const skillItems = [
  { name: 'C', category: 'languages', icon: 'devicon-c-plain colored' },
  { name: 'C++', category: 'languages', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Java', category: 'languages', icon: 'devicon-java-plain colored' },
  { name: 'JavaScript', category: 'languages', icon: 'devicon-javascript-plain colored' },
  { name: 'SQL', category: 'languages', icon: 'fa-solid fa-database' },

  { name: 'HTML', category: 'frontend', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', category: 'frontend', icon: 'devicon-css3-plain colored' },
  { name: 'React.js', category: 'frontend', icon: 'devicon-react-original colored' },

  { name: 'Node.js', category: 'backend', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', category: 'backend', icon: 'devicon-express-original' },
  { name: 'Socket.IO', category: 'backend', icon: 'fa-solid fa-tower-broadcast' },
  { name: 'LangChain', category: 'backend', emoji: '🔗' },
  { name: 'n8n', category: 'backend', mono: 'n8n' },
  { name: 'MediaPipe', category: 'backend', icon: 'fa-solid fa-video' },
  { name: 'OpenCV', category: 'backend', icon: 'devicon-opencv-plain colored' },

  { name: 'MongoDB', category: 'databases', icon: 'devicon-mongodb-plain colored' },
  { name: 'MySQL', category: 'databases', icon: 'devicon-mysql-plain colored' },
  { name: 'Firestore', category: 'databases', icon: 'devicon-firebase-plain colored' },
  { name: 'Pinecone', category: 'databases', emoji: '🌲' },

  { name: 'TCP', category: 'networking', icon: 'fa-solid fa-network-wired' },
  { name: 'UDP', category: 'networking', icon: 'fa-solid fa-paper-plane' },
  { name: 'QUIC', category: 'networking', icon: 'fa-solid fa-bolt' },
  { name: 'Transport Layer', category: 'networking', icon: 'fa-solid fa-layer-group' },
  { name: '5G Cellular Networks', category: 'networking', icon: 'fa-solid fa-tower-cell' },

  { name: 'Git', category: 'tools', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', category: 'tools', icon: 'devicon-github-original colored' },
  { name: 'Git Bash', category: 'tools', icon: 'devicon-bash-plain colored' },
  { name: 'Postman', category: 'tools', icon: 'devicon-postman-plain colored' },
  { name: 'VS Code', category: 'tools', icon: 'devicon-vscode-plain colored' },
];

export const achievements = [
  {
    title: "Runner-Up — Rapid Web Development, MUTEX'25",
    org: 'Tech Symposium, Madras Institute of Technology',
    date: 'Feb 2025',
    detail: 'Built an efficient web solution under strict time constraints.',
  },
  {
    title: 'Runner-Up — Algorithm Blitz, TRIGGER',
    org: 'Dept. of Computer Technology, MIT',
    date: 'Feb 2025',
    detail: 'Ranked among the top competitors in an algorithm coding competition.',
  },
  {
    title: 'State-level Athlete — 110m Hurdles & Long Jump',
    org: 'Tamil Nadu State Meet',
    date: '2024',
    detail: 'Competed at state level across hurdles and long jump.',
  },
  {
    title: 'Pupil Leader — Annual Sports Meet',
    org: 'Sri Sankara Vidyalaya',
    date: 'Jan — Nov 2024',
    detail: 'Organised a 500+ participant event, coordinating teams, march-past and logistics.',
  },
];

export const certifications = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy — Dr. Angela Yu',
    date: 'Dec 2025',
  },
  {
    title: 'AI-Powered Retail Assistant — Internship Certificate',
    issuer: 'Vasanth & Co',
    date: 'Jun 2026',
  },
  {
    title: 'Certificate of Achievement — Web Development Training',
    issuer: 'Srim RnD',
    date: 'May 2026',
  },
];

export const navLinks = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#experience', label: 'Experience' },
  { to: '#projects', label: 'Projects' },
  { to: '#skills', label: 'Skills' },
  { to: '#certs', label: 'Certs' },
  { to: '#education', label: 'Education' },
  { to: '#profile', label: 'Profile' },
  { to: '#contact', label: 'Contact' },
];

// "Web presence" cards — only real, verifiable destinations, no invented
// LeetCode/HackerRank handles.
export const socials = [
  {
    label: 'GitHub',
    sub: 'Explore the code',
    href: profile.github,
    icon: 'fa-brands fa-github',
    tint: '#ffffff',
  },
  {
    label: 'LinkedIn',
    sub: 'Let’s connect',
    href: profile.linkedin,
    icon: 'fa-brands fa-linkedin',
    tint: '#0A66C2',
  },
  {
    label: 'Email',
    sub: 'Send a message',
    href: `mailto:${profile.email}`,
    icon: 'fa-solid fa-envelope',
    tint: '#ffd460',
  },
  {
    label: 'Résumé',
    sub: 'Download PDF',
    href: profile.resume,
    icon: 'fa-solid fa-file-arrow-down',
    tint: '#a855f7',
  },
];
