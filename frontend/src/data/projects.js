import placemateImg from '../assets/PlaceMate.png'
import bedNbasicsImg from '../assets/bedNbasics.png'
import careervartaImg from '../assets/CareerVarta.png'
import securehouseImg from '../assets/SecureHouse.png'
import sabahsiddiquiImg from '../assets/Sabah_Siddqui.png'
import movieplatformImg from '../assets/MoviePlatform.png'
import synapseImg from '../assets/synapse.png'
import quickmp3Img from '../assets/quickmp3.png'
import aiBattleArenaImg from '../assets/ai-battle-arena.png'
import perplexityCloneImg from '../assets/perplexity-clone.png'
const placeholderImg = 'https://placehold.co/600x400'


export const projects = [
    {
        id: 8,
        title: "AI Battle Arena",
        year: "2025",
        subtitle: "LLM Competition Platform",
        description: "A sophisticated full-stack platform where top-tier LLMs (Mistral, Cohere) compete to solve problems, judged by Google Gemini with detailed reasoning and scoring.",
        category: "AI / Full Stack",
        tags: ["React", "Node.js", "Mistral AI", "Cohere", "Gemini API"],
        color: "#1E1B4B",
        link: "https://aibaatlearena.netlify.app/login",
        github: "https://github.com/Akhiofficial/AI-Battle-Arena",
        image: aiBattleArenaImg,
        featured: true
    },
    {
        id: 9,
        title: "Synapse",
        year: "2025",
        subtitle: "MERN Collaborative Platform",
        description: "Built a robust MERN stack application for seamless collaboration and data management, featuring a modern dashboard and real-time updates.",
        category: "MERN Stack",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        color: "#083344",
        link: "https://synapse-k8vn.onrender.com/",
        github: "https://github.com/Akhiofficial/synapse",
        image: synapseImg,
        featured: true
    },
    {
        id: 11,
        title: "Perplexity Clone",
        year: "2025",
        subtitle: "AI Search Engine Clone",
        description: "Full-stack AI search application designed to replicate Perplexity AI's functionality, integrating search and metadata capabilities.",
        category: "AI / Full Stack",
        tags: ["React", "AI Integration", "Metadata", "Full Stack"],
        color: "#022C22",
        link: "https://perplexity-clone-l8js.onrender.com/",
        github: "https://github.com/Akhiofficial/Perplexity-clone",
        image: perplexityCloneImg,
        featured: true
    },
    {
        id: 10,
        title: "QuickMP3",
        year: "2025",
        subtitle: "YouTube Metadata & MP3 Converter",
        description: "Premium, high-performance web app for YouTube metadata extraction and high-quality MP3 conversion. Built for speed and a sleek UX.",
        category: "MERN Stack",
        tags: ["Next.js", "React", "API Integration", "Tailwind CSS"],
        color: "#450A0A",
        link: "https://quick-mp-3.vercel.app/",
        github: "https://github.com/Akhiofficial/QuickMP3",
        image: quickmp3Img,
        featured: true
    },
    {
        id: 1,
        title: "Movie Platform",
        year: "2024",
        subtitle: "Full Stack Movie Discovery Application",
        description: "Developed a movie discovery web application using the MERN stack. Integrated the TMDB API to fetch real-time movie data, trending titles, and ratings. Built interactive UI components with Framer Motion.",
        category: "MERN Stack",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TMDB API", "Framer Motion"],
        color: "#1E1B4B",
        link: "https://movieplatform-flix.onrender.com",
        github: "https://github.com/Akhiofficial/MoviePlatform-cohort-2.0.git",
        image: movieplatformImg,
        featured: true
    },
    {
        id: 2,
        title: "PlaceMate",
        year: "2025",
        subtitle: "Campus Placement Management System",
        description: "Built a role-based placement management platform for students, recruiters, and administrators. Implemented authentication, dashboards, and full CRUD operations.",
        category: "MERN Stack",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
        color: "#1E293B",
        link: "https://placemate-pi.vercel.app",
        github: "https://github.com/Akhiofficial/placemate-campus-placement-system.git",
        image: placemateImg,
        featured: false
    },
    {
        id: 3,
        title: "bedsNbasics",
        year: "2024",
        subtitle: "Hotel Management System",
        description: "Developed complete hotel reservation and management system for a real business. Built secure admin dashboard with role-based access control and designed database schema.",
        category: "PHP",
        tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
        color: "#161B22",
        link: "#",
        github: "https://github.com/Akhiofficial/hotel-app.git",
        image: bedNbasicsImg,
        featured: false
    },
    {
        id: 4,
        title: "Secure House",
        year: "2024",
        subtitle: "SEO & Structure Optimization",
        description: "Optimized meta titles, descriptions, heading structure, and internal linking. Improved content alignment with keyword strategy and search intent for technical SEO improvements.",
        category: "WordPress",
        tags: ["WordPress", "SEO", "Technical SEO", "Content Strategy"],
        color: "#0D253F",
        link: "https://secure-house.co.uk",
        github: "#",
        image: securehouseImg,
        featured: false
    },
    {
        id: 5,
        title: "Sabah Siddiqui",
        year: "2024",
        subtitle: "Portfolio Website",
        description: "Designed and developed responsive personal portfolio website. Customized themes and layouts for branding and project showcase using WordPress CMS.",
        category: "WordPress",
        tags: ["WordPress", "UI Design", "Responsive Design", "Customization"],
        color: "#064E3B",
        link: "https://sabahsiddiqui.com",
        github: "#",
        image: sabahsiddiquiImg,
        featured: false
    },
    {
        id: 6,
        title: "PrimeSol Edu",
        year: "2024",
        subtitle: "Product Page Development",
        description: "Contributed to product page development and UI customization. Ensured responsive design and consistent user experience across the platform.",
        category: "WordPress",
        tags: ["WordPress", "UI Customization", "Responsive Web Design"],
        color: "#1e3a8a",
        link: "https://primesoledu.com",
        github: "#",
        image: placeholderImg,
        featured: false
    },
    {
        id: 7,
        title: "Career Varta",
        year: "2024",
        subtitle: "Career Guidance Platform",
        description: "Designed and deployed career guidance website using WordPress CMS. Customized themes and plugins for structured content publishing.",
        category: "WordPress",
        tags: ["WordPress", "CMS", "Plugin Customization", "Deployment"],
        color: "#4c0519",
        link: "https://careervarta.com",
        github: "#",
        image: careervartaImg,
        featured: false
    }
];
