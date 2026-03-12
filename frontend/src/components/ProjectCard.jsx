import { useRef, useState } from 'react'
import { Github, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Magnetic from './Magnetic'


gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ project, index, isHorizontal = false }) => {
    const cardRef = useRef(null)
    const containerRef = useRef(null)
    const imageRef = useRef(null)
    const reflectionRef = useRef(null)

    // 3D Tilt and Reflection Logic
    const onMouseMove = (e) => {
        if (!cardRef.current) return
        const { clientX, clientY } = e
        const { left, top, width, height } = cardRef.current.getBoundingClientRect()

        const x = (clientX - left) / width
        const y = (clientY - top) / height

        const tiltX = (y - 0.5) * 16 // -8 to 8
        const tiltY = (0.5 - x) * 16 // -8 to 8

        gsap.to(cardRef.current, {
            rotateX: tiltX,
            rotateY: tiltY,
            duration: 0.5,
            ease: "power2.out"
        })

        // Reflection movement
        if (reflectionRef.current) {
            const relX = x * 100
            const relY = y * 100
            gsap.to(reflectionRef.current, {
                background: `radial-gradient(circle at ${relX}% ${relY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                duration: 0.2
            })
        }

        // Image subtle scale/move
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                scale: 1.05,
                duration: 0.5
            })
        }
    }

    const onMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
        })
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                scale: 1,
                duration: 0.5
            })
        }
    }

    useGSAP(() => {
        if (!containerRef.current) return;

        // 1. Initial Entry Animation (keep for both)
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: isHorizontal ? 0 : 80, x: isHorizontal ? 100 : 0 },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: isHorizontal ? "left 95%" : "top 95%",
                    toggleActions: "play none none reverse",
                    // Disable scrollTrigger for horizontal if it conflicts with the main pin
                }
            }
        )

        // 2. Stacking Scale Animation (ONLY for vertical stacking)
        if (!isHorizontal) {
            gsap.to(containerRef.current, {
                scale: 0.92,
                y: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80px",
                    end: "bottom 80px",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            })
        }

        // 3. Parallax Effect on Image
        gsap.to(imageRef.current, {
            y: isHorizontal ? 0 : "15%",
            x: isHorizontal ? "10%" : 0,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: isHorizontal ? "left right" : "top bottom",
                end: isHorizontal ? "right left" : "bottom top",
                scrub: true,
                horizontal: isHorizontal ? false : false // Actually vertically scrolling window triggers horizontal move
            }
        })

    }, { scope: containerRef, dependencies: [project.id, isHorizontal] })

    const stickyTop = 80 + (index * 40)

    return (
        <div
            ref={containerRef}
            style={{
                top: isHorizontal ? 'auto' : `${stickyTop}px`,
                zIndex: isHorizontal ? 1 : index + 1,
                perspective: "1000px"
            }}
            className={`${isHorizontal ? 'relative w-full' : 'sticky w-full mb-[15vh]'} h-[85vh] rounded-[40px] overflow-visible`}
        >
            <div
                ref={cardRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    backgroundColor: project.color,
                    transformStyle: "preserve-3d"
                }}
                className="w-full h-full rounded-[40px] overflow-hidden flex flex-col shadow-2xl border border-white/5 relative"
            >
                {/* Reflection Overlay */}
                <div
                    ref={reflectionRef}
                    className="absolute inset-0 pointer-events-none z-10 opacity-60"
                />

                {/* Header info */}
                <div className="px-6 md:px-12 pt-6 md:pt-8 pb-4 relative z-20">
                    <div className="flex justify-between items-center text-[8px] md:text-sm font-mono text-white/60 uppercase tracking-widest mb-4">
                        <span>{project.year}</span>
                        <span>{project.category}</span>
                    </div>
                    <div className="w-full h-[0.5px] bg-white/10" />
                </div>

                {/* Title and Description */}
                <div className="px-6 md:px-12 py-4 md:py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-start relative z-20">
                    <div>
                        <div className="mb-4">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                                {project.title}
                            </h2>
                            {project.subtitle && (
                                <p className="text-[10px] md:text-base font-mono text-white/40 mt-2 md:mt-3 uppercase tracking-[0.2em]">{project.subtitle}</p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-[8px] md:text-[10px] font-mono uppercase bg-white/10 px-2 md:px-3 py-1 rounded-full text-white/80">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-full py-0 md:py-2">
                        <p className="text-white/70 text-xs md:text-base font-medium max-w-sm leading-relaxed mb-4 md:mb-8">
                            {project.description}
                        </p>

                         <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-auto">
                            <Magnetic>
                                <a
                                    href={project.github}
                                    data-cursor="pointer"
                                    className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border border-white/10 backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Github className="w-4 h-4" /> CODE
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a
                                    href={project.link}
                                    data-cursor="pointer"
                                    className="flex items-center justify-center gap-2.5 bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-white/10 w-full sm:w-auto"
                                >
                                    <ArrowUpRight className="w-4 h-4" /> DEMO
                                </a>
                            </Magnetic>
                        </div>
                    </div>
                </div>

                {/* Mockup area */}
                <div className="grow px-6 md:px-12 pb-8 md:pb-12 mt-2 md:mt-4 relative overflow-hidden z-20">
                    <div className="w-full h-full rounded-[20px] md:rounded-[24px] bg-black/20 flex items-center justify-center border border-white/5 overflow-hidden relative shadow-inner min-h-[150px]">
                        {project.image ? (
                            <img
                                ref={imageRef}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[130%] object-cover absolute top-[-15%]"
                            />
                        ) : (
                            <div className="text-white/5 text-[5rem] md:text-[20rem] font-black rotate-[-10deg] tracking-tighter">.nitro</div>
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
