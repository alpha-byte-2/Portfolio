export const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
];

export const TERMINAL_LINES = [
   {
        prompt: '$ cat about.txt',
        output: "Electrical Engineering student at NIT Patna. I have interest in software development, smart contracts, and competitive programming.",
    },
    
    {
        prompt: '$ status --check',
        output: 'available for new opportunities',
        isStatus: true,
    },
];

export const EXPERIENCE = [
    {
        role: 'Research Intern ',
        company: 'IIT Ropar (NPTEL)',
        dates: 'Jan 2026 — Apr 2026',
        description: "Selected for a 10-week virtual internship under Prof. Sudarshan Iyengar. Applied programming and analytical skills to solve computing problem statements and gained exposure to research-oriented technical workflows.",
    },
    {
        role: 'Blockchain Team Member',
        company: 'Tesla, NITP',
        dates: 'Mar 2025 — Present',
        description: "Active member of the college blockchain team, exploring decentralized technologies and smart contract development.",
    },
];

export const PROJECTS = [
    {
        name: 'Decentralized Voting DApp',
        description: "Engineered a transparent, secure voting system using smart contracts to ensure tamper-proof elections. Integrated MetaMask for seamless user authentication and transaction signing.",
        tags: ['Ethereum', 'Solidity', 'React', 'MetaMask'],
        link: 'https://youtu.be/4ZVpy3LzpKc?si=zk6RR1590XTWadZF', 
    },
    {
        name: 'Helpak AI Assistant',
        description: "Built an AI-powered DSA assistant backend using Node.js and the Gemini API for real-time responses. Deployed on AWS EC2 utilizing PM2 for 24/7 high availability.",
        tags: ['Node.js', 'Gemini API', 'AWS EC2'],
        link: 'http://13.63.154.225:3000/', 
    },
    {
        name: 'Quiz-App',
        description: "Developed a responsive quiz platform for DSA and Web Dev concepts. Utilized Fetch API for dynamic data retrieval and Local Storage to track user progress.",
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://quizz-app-delta-rose.vercel.app/', 
    },
];

export const SKILL_GROUPS = [
    { label: 'Languages', dot: 'var(--accent)', items: ['C/C++', 'Python', 'Java', 'JavaScript', 'Solidity'] },
    { label: 'Technologies', dot: 'var(--accent-2)', items: ['React.js', 'Node.js', 'Blockchain (Ethereum)', 'DSA', 'OOPs'] },
    { label: 'Tools & Cloud', dot: 'var(--text-muted)', items: ['Git/GitHub', 'AWS EC2', 'MetaMask', 'Remix IDE', 'Vercel', 'Netlify'] },
];

export const EDUCATION = [
    {
        degree: 'B.Tech, Electrical Engineering',
        school: 'National Institute of Technology, Patna',
        dates: '2024 — 2028',
        description: "CGPA: 8.16. Active as a Teacher at Sankalp,BlockChain member at Tesla, NITP alongside academic studies.",
    },
    {
        degree: 'Senior Secondary',
        school: 'BSEB',
        dates: 'Completed April 2024',
        description: "Completed with an 84.4% aggregate.",
    },
     {
        degree: 'Secondary',
        school: 'CBSE',
        dates: 'Completed April 2022',
        description: "Completed with an 91.4% aggregate.",
    }
];

export const ACHIEVEMENTS = [
   {
        title: 'Competitive Programming',
        description: "Achieved Knight Badge on LeetCode for consistent high-quality problem solving, Pupil rank on Codeforces , and a 2-star rating on CodeChef.",
        links: [
            { label: 'LeetCode Profile', url: 'https://leetcode.com/u/_alpha-byte2/' },
            { label: 'Codeforces Profile', url: 'https://codeforces.com/profile/_alpha_byte' },
            { label: 'CodeChef Profile', url: 'https://www.codechef.com/users/alpha_byte2' }
        ]
    },
    
   
];
