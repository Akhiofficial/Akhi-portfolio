import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        if (!cardRef.current) return;

        // 1. Initial Entry Animation
        gsap.fromTo(cardRef.current,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 95%",
                    toggleActions: "play none none reverse",
                }
            }
        )

        // 2. Stacking Scale Animation
        gsap.to(cardRef.current, {
            scale: 0.92,
            y: -120,
            ease: "none",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80px",
                end: "bottom 80px",
                scrub: true,
                invalidateOnRefresh: true,
            }
        })

        // 3. Parallax Effect on Image
        gsap.to(imageRef.current, {
            y: "15%",
            ease: "none",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

    }, { scope: cardRef, dependencies: [project.id] })

    // We use a small offset so cards stack visibly
    const stickyTop = 80 + (index * 40)

    return (
        <div
            ref={cardRef}
            style={{
                backgroundColor: project.color,
                top: `${stickyTop}px`,
                zIndex: index + 1
            }}
            className="sticky w-full h-[85vh] mb-[15vh] rounded-[40px] overflow-hidden flex flex-col shadow-2xl border border-white/5"
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
                        <a
                            href={project.github}
                            className="flex items-center gap-2 bg-black/40 hover:bg-black/60 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all border border-white/10"
                        >
                            <Github className="w-4 h-4" /> Code
                        </a>
                        <a
                            href={project.link}
                            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                        >
                            <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                    </div>
                </div>
            </div>

            {/* Mockup area */}
            <div className="grow px-8 md:px-12 pb-12 mt-4 relative overflow-hidden">
                <div className="w-full h-full rounded-[24px] bg-black/20 flex items-center justify-center border border-white/5 overflow-hidden relative shadow-inner">
                    {project.image ? (
                        <img
                            ref={imageRef}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[130%] object-cover absolute top-[-15%]"
                        />
                    ) : (
                        <div className="text-white/5 text-[10rem] md:text-[20rem] font-black rotate-[-10deg] tracking-tighter">.nitro</div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
