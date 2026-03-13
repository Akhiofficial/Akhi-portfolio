import placemateImg from '../assets/PlaceMate.png'
import bedNbasicsImg from '../assets/bedNbasics.png'
import careervartaImg from '../assets/CareerVarta.png'
import securehouseImg from '../assets/SecureHouse.png'
import sabahsiddiquiImg from '../assets/Sabah_Siddqui.png'
import movieplatformImg from '../assets/MoviePlatform.png'
const placeholderImg = 'https://placehold.co/600x400'


export const projects = [
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
        featured: true
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
        featured: true
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

