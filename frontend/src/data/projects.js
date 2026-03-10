import placemateImg from '../assets/placemate.png'
// Assume placeholders for now, user can add images later
const placeholder = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"

export const projects = [
    {
        id: 1,
        title: "Nitro Cinema",
        year: "2024",
        description: "A premium movie streaming experience with real-time data sync, advanced search filters, and a cinematic UI.",
        category: "MERN Stack",
        tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "GSAP"],
        color: "#1E293B",
        link: "#",
        github: "#",
        image: placeholder,
        featured: true
    },
    {
        id: 2,
        title: "PlaceMate Pro",
        year: "2024",
        description: "Enterprise-grade recruitment management system for universities and corporate hiring partners.",
        category: "MERN Stack",
        tags: ["React", "Express", "PostgreSQL", "Prisma", "Framer Motion"],
        color: "#161B22",
        link: "#",
        github: "#",
        image: placemateImg,
        featured: true
    },
    {
        id: 3,
        title: "Artisan Collective",
        year: "2023",
        description: "A high-end WordPress e-commerce solution for independent artists with custom Gutenberg blocks.",
        category: "WordPress",
        tags: ["PHP", "WordPress", "WooCommerce", "SASS", "GSAP"],
        color: "#0D253F",
        link: "#",
        github: "#",
        image: placeholder,
        featured: true
    },
    {
        id: 4,
        title: "Neural Mesh",
        year: "2024",
        description: "Experimental 3D visualization of neural networks using Three.js and real-time data processing.",
        category: "Experiments",
        tags: ["Three.js", "React Three Fiber", "GLSL", "GSAP"],
        color: "#064E3B",
        link: "#",
        github: "#",
        image: placeholder,
        featured: false
    },
    {
        id: 5,
        title: "EcoPulse",
        year: "2023",
        description: "Environmental monitoring dashboard with interactive maps and predictive weather patterns.",
        category: "MERN Stack",
        tags: ["React", "Node.js", "Redis", "Leaflet", "Chart.js"],
        color: "#1e3a8a",
        link: "#",
        github: "#",
        image: placeholder,
        featured: false
    },
    {
        id: 6,
        title: "Design System V2",
        year: "2023",
        description: "Internal design system and component library built for rapid prototyping and consistent branding.",
        category: "Experiments",
        tags: ["React", "Storybook", "Styled Components", "Vite"],
        color: "#4c0519",
        link: "#",
        github: "#",
        image: placeholder,
        featured: false
    },
    {
        id: 7,
        title: "Corporate Hub",
        year: "2022",
        description: "A multi-site WordPress installation for a global logistics firm with multilingual support.",
        category: "WordPress",
        tags: ["WordPress", "Elementor", "PHP", "MySQL"],
        color: "#1e1b4b",
        link: "#",
        github: "#",
        image: placeholder,
        featured: false
    }
];

