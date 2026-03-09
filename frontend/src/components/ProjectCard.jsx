import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const stickyTop = 80 + (index * 40)

    return (
        <div ref={container} className="relative h-[120vh] w-full flex flex-col items-center">
            <motion.div
                style={{
                    backgroundColor: project.color,
                    scale,
                    opacity,
                    top: stickyTop
                }}
                className="sticky h-[85vh] w-full rounded-[40px] overflow-hidden flex flex-col group shadow-2xl transition-all duration-500 border border-white/5"
            >
                {/* Header info */}
                <div className="px-8 md:px-12 pt-8 pb-4">
                    <div className="flex justify-between items-center text-[10px] md:text-sm font-mono text-white/60 uppercase tracking-widest mb-4">
                        <span>{project.year}</span>
                        <span>{project.category}</span>
                    </div>
                    <div className="w-full h-[0.5px] bg-white/10" />
                </div>

                {/* Title and Description */}
                <div className="px-8 md:px-12 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none mb-6">
                            {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-[10px] font-mono uppercase bg-white/10 px-3 py-1 rounded-full text-white/80">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-full py-2">
                        <p className="text-white/70 text-sm md:text-base font-medium max-w-sm leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.github}
                                className="flex items-center gap-2 bg-black/40 hover:bg-black/60 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all border border-white/10"
                            >
                                <Github className="w-4 h-4" /> Code
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link}
                                className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                            >
                                <ExternalLink className="w-4 h-4" /> Demo
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Mockup area */}
                <div className="grow px-8 md:px-12 pb-12 mt-4">
                    <div className="w-full h-full rounded-[24px] bg-black/20 flex items-center justify-center border border-white/5 overflow-hidden relative shadow-inner">
                        {project.image ? (
                            <motion.img
                                src={project.image}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2 }}
                            />
                        ) : (
                            <div className="text-white/5 text-[10rem] md:text-[20rem] font-black rotate-[-10deg] tracking-tighter">.nitro</div>
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard
