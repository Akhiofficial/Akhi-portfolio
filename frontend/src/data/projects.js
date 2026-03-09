import placemateImg from '../assets/placemate.png'
// Assume placeholders for now, user can add images later
const placeholder = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"

export const projects = [
    {
        id: 1,
        title: "Movie Platform",
        year: "2024",
        description: "A comprehensive movie discovery platform powered by the TMDB API, featuring search, watchlists, and dynamic categories.",
        category: "Full Stack Project",
        tags: ["React", "Express", "Node.js", "MongoDB", "TMDB API"],
        color: "#1E293B",
        link: "#",
        github: "#",
        image: placeholder // Replace with movie-platform screenshot later
    },
    {
        id: 2,
        title: "PlaceMate",
        year: "2024",
        description: "Unified recruitment portal connecting campuses, students, and top recruiters for a streamlined placement process.",
        category: "Placement Portal",
        tags: ["React", "TailwindCSS", "Framer Motion", "Supabase"],
        color: "#161B22",
        link: "https://github.com/akhil/placemate",
        github: "#",
        image: placemateImg
    },
    {
        id: 3,
        title: "Smart Mumbai",
        year: "2023",
        description: "A smart city dashboard visualizing real-time urban data, infrastructure projects, and civic amenities in Mumbai.",
        category: "Visual Presentation",
        tags: ["Vite", "MapBox", "DataViz", "Vanilla JS"],
        color: "#0D253F",
        link: "#",
        github: "#",
        image: placeholder
    },
    {
        id: 4,
        title: "Prakriti Chat",
        year: "2023",
        description: "An AI-powered environmental chatbot that provides information on natural conservation and real-time sustainability metrics.",
        category: "AI / ML",
        tags: ["Python", "Flask", "OpenAI API", "React"],
        color: "#064E3B",
        link: "#",
        github: "#",
        image: placeholder
    }
];
