import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const ProjectsPage = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
    const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

    return (
        <div ref={containerRef} className="relative min-h-screen bg-black text-white px-6 md:px-12">
            <Navbar />

            {/* Cinematic Header Section */}
            <motion.section
                style={{ y: headerY, opacity: headerOpacity }}
                className="pt-40 pb-20 sticky top-0 z-0"
            >
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.3em]">.archive</span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>

                <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-bold tracking-tighter leading-[0.9] mb-20 max-w-4xl">
                    projects
                </h1>

                <p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-5xl text-white/90">
                    I help startups and series A—D teams to establish a strong connection between their product and customers
                </p>
            </motion.section>

            {/* Clients Grid Section */}
            <section className="relative z-10 py-32 border-y border-white/5 bg-black">
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.3em]">.clients</span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {/* Placeholder Client Logos */}
                    {['лого', 'LOGO!', 'LOOO', 'IPSUM', '///', 'logoipsum', 'logo-ipsum', '(@)'].map((logo, i) => (
                        <div key={i} className="flex justify-center items-center h-20 text-2xl font-black italic tracking-tighter">
                            {logo}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Stacking List */}
            <section className="relative z-10 py-20">
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ProjectsPage
