import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import ProjectGridCard from '../components/ProjectGridCard'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const Categories = ["All", "MERN Stack", "WordPress", "Experiments"]

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All")
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const filterRef = useRef(null)

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory)

    const featuredProjects = filteredProjects.filter(p => p.featured)
    const gridProjects = filteredProjects.filter(p => !p.featured)

    useGSAP(() => {
        // Hero Animation
        const tl = gsap.timeline()
        tl.from(".hero-title span", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        })
            .from(".hero-subtitle", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6")
            .from(filterRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4")

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8 overflow-hidden">
                    <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]"
                    >
                        .selected work
                    </motion.span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>

                <h1 className="hero-title text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-tighter leading-[0.85] mb-12">
                    {["Selected", "Work"].map((word, i) => (
                        <span key={i} className="inline-block mr-4">
                            {word}
                        </span>
                    ))}
                </h1>

                <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
                    A collection of my projects across MERN stack, WordPress, and experimental builds.
                </p>
            </section>

            {/* Filter Section */}
            <section ref={filterRef} className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-y border-white/5 py-6 mb-20">
                <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mr-4">Filter By</span>
                    <div className="flex flex-wrap gap-2">
                        {Categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="px-6 md:px-12 max-w-7xl mx-auto pb-40">

                {/* Featured Projects (Top 3) */}
                {featuredProjects.length > 0 && (
                    <div className="space-y-32 mb-40">
                        {featuredProjects.map((project, index) => (
                            <div key={project.id} className="featured-project-proxy">
                                {/* Using Horizontal = false for stacking effect */}
                                <ProjectCard project={project} index={index} isHorizontal={false} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Grid Projects */}
                {gridProjects.length > 0 && (
                    <div>
                        <div className="flex items-center gap-4 mb-16">
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">.more projects</span>
                            <div className="h-[0.5px] grow bg-white/10" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <AnimatePresence mode="popLayout">
                                {gridProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <ProjectGridCard project={project} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                )}

                {filteredProjects.length === 0 && (
                    <div className="py-40 text-center">
                        <p className="text-white/40 font-mono uppercase tracking-widest">No projects found in this category.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default ProjectsPage

