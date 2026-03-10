import { motion } from 'framer-motion'
import { ArrowUpRight, User, Code2, Rocket } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="py-40">
            <div className="flex flex-col gap-20">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#00FF9C] font-mono mb-8 block font-bold">about me</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12">
                        building tools for <br />
                        the next generation.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Bio Card */}
                    <div className="lg:col-span-2 p-10 md:p-12 border border-white/10 rounded-[40px] bg-white/5 relative overflow-hidden group">
                        <div className="z-10 relative">
                            <User className="text-[#00FF9C] mb-8 w-10 h-10" />
                            <p className="text-xl md:text-2xl font-medium leading-[1.4] text-white/80">
                                Hello! I'm Akhilesh, a Full Stack Developer passionate about crafting seamless digital experiences.
                                My journey started with a fascination for how the web works, which evolved into building scalable
                                applications for campuses, cities, and movie enthusiasts.
                            </p>
                            <p className="mt-8 text-subtext text-sm md:text-base leading-relaxed max-w-2xl">
                                I focus on high-performance code and delightful interactions. Whether it's architecting a recruitment portal
                                for Smart Cities or building high-utility chatbots, I love solving complex technical challenges.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF9C]/5 blur-[120px] rounded-full group-hover:bg-[#00FF9C]/10 transition-colors" />
                    </div>

                    {/* Quick Stats / Philo Cards */}
                    <div className="flex flex-col gap-8">
                        <div className="flex-1 p-10 border border-white/10 rounded-[40px] bg-white/5 group hover:border-[#00FF9C]/30 transition-colors">
                            <Code2 className="text-[#00FF9C] mb-6 w-8 h-8" />
                            <h3 className="text-xl font-bold mb-4">Clean Code</h3>
                            <p className="text-subtext text-sm leading-relaxed">
                                I believe in modularity and maintainability.
                            </p>
                        </div>
                        <div className="flex-1 p-10 border border-white/10 rounded-[40px] bg-white/5 group hover:border-[#00FF9C]/30 transition-colors">
                            <Rocket className="text-[#00FF9C] mb-6 w-8 h-8" />
                            <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
                            <p className="text-subtext text-sm leading-relaxed">
                                Rapid prototyping without compromising quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
