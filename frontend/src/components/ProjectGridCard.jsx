import { useRef } from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Magnetic from './Magnetic'

const ProjectGridCard = ({ project }) => {
    const cardRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(cardRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        )
    }, { scope: cardRef })

    const onMouseEnter = () => {
        gsap.to(imageRef.current, { scale: 1.05, duration: 0.6, ease: "power2.out" })
    }

    const onMouseLeave = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.6, ease: "power2.out" })
    }

    return (
        <div
            ref={cardRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
        >
            <div className="aspect-16/10 overflow-hidden relative">
                <img
                    ref={imageRef}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">{project.category}</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-center gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">{project.year}</span>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight truncate">{project.title}</h3>
                        {project.subtitle && (
                            <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mt-1 line-clamp-1">{project.subtitle}</p>
                        )}
                    </div>
                    <div className="flex gap-2 shrink-0">
                        <Magnetic>
                            <a 
                                href={project.github} 
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group/btn"
                                title="View Code"
                            >
                                <Github className="w-3.5 h-3.5 text-white/60 group-hover/btn:text-white" />
                                <span className="text-[10px] font-bold text-white/60 group-hover/btn:text-white uppercase">CODE</span>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a 
                                href={project.link} 
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black border border-white/10 rounded-full transition-all hover:scale-105"
                                title="Live Demo"
                            >
                                <ArrowUpRight className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase">DEMO</span>
                            </a>
                        </Magnetic>
                    </div>
                </div>

                <p className="text-sm text-white/60 line-clamp-2 mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[9px] font-mono uppercase bg-white/5 px-2 py-0.5 rounded-md text-white/40 border border-white/5">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-[9px] font-mono uppercase text-white/20 px-2 py-0.5">+ {project.tags.length - 3} more</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectGridCard
