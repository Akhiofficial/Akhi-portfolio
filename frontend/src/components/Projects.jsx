import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
    return (
        <section id="projects" className="mt-40">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-20">
                <h2 className="text-sm uppercase tracking-widest text-subtext font-mono">Selected Work</h2>
                <div className="h-px grow mx-12 bg-white/10" />
                <span className="text-sm font-mono text-subtext">01 // 0{projects.length}</span>
            </div>

            <div className="relative flex flex-col">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Projects
