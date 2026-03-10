import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const HorizontalProjects = () => {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    useGSAP(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: `-${(projects.length - 1) * 85}vw`, // 85vw is the card width
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: 1.5,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        )
        return () => {
            pin.kill()
        }
    }, [])

    return (
        <section className="overflow-hidden">
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex flex-row relative h-screen items-center px-[7.5vw] gap-[5vw]"
                    style={{ width: `${projects.length * 85 + (projects.length - 1) * 5}vw` }}
                >
                    {projects.map((project, index) => (
                        <div key={project.id} className="w-[85vw] shrink-0">
                            <ProjectCard project={project} index={index} isHorizontal={true} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HorizontalProjects
