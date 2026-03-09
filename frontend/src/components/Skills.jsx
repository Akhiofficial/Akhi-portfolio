import { motion } from 'framer-motion'

const SkillCategory = ({ title, skills }) => (
    <div className="flex flex-col gap-6">
        <h3 className="text-subtext font-mono text-[10px] uppercase tracking-[0.3em]">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
                <motion.span
                    key={i}
                    whileHover={{ y: -2, color: '#00FF9C' }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-default"
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </div>
)

const Skills = () => {
    return (
        <section id="skills" className="py-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
                        technical <br />
                        stacks.
                    </h2>
                    <p className="text-subtext max-w-sm text-sm font-mono leading-relaxed">
                        Continuously evolving my toolkit to build high-performance, user-centric web applications.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    <SkillCategory
                        title="frontend"
                        skills={['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion']}
                    />
                    <SkillCategory
                        title="backend"
                        skills={['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Supabase']}
                    />
                    <SkillCategory
                        title="tools"
                        skills={['Git', 'GitHub', 'Figma', 'Docker', 'Vercel', 'Postman']}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills
