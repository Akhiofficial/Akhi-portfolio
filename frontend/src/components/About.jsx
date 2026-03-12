import { motion } from 'framer-motion'
import { ArrowUpRight, User, Code2, Rocket } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="py-40">
            <div className="flex flex-col gap-20">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#00FF9C] font-mono mb-8 block font-bold">about me</span>
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.8] mb-16">
                        building tools for <br />
                        <span className="font-display italic font-light text-[#00FF9C]">the next generation.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Bio Card */}
                    <div className="lg:col-span-2 p-10 md:p-14 border border-white/10 rounded-[40px] bg-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                        <div className="z-10 relative">
                            <div className="w-12 h-12 rounded-2xl bg-[#00FF9C]/10 flex items-center justify-center mb-8 border border-[#00FF9C]/20">
                                <User className="text-[#00FF9C] w-6 h-6" />
                            </div>
                            <p className="text-xl md:text-3xl font-medium leading-[1.3] text-white/90 tracking-tight">
                                Hello! I'm Akhilesh, a Full Stack Developer passionate about crafting seamless digital experiences.
                                My journey started with a fascination for how the web works, which evolved into building scalable
                                applications for campuses, cities, and movie enthusiasts.
                            </p>
                            <p className="mt-8 text-white/50 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                                I focus on high-performance code and delightful interactions. Whether it's architecting a recruitment portal
                                for Smart Cities or building high-utility chatbots, I love solving complex technical challenges.
                            </p>
                        </div>
                        {/* Interactive accent */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00FF9C]/5 blur-[80px] rounded-full group-hover:bg-[#00FF9C]/10 transition-all duration-700" />
                    </div>

                    {/* Side Cards */}
                    <div className="flex flex-col gap-8">
                        <div className="flex-1 p-10 border border-white/10 rounded-[40px] bg-white/5 group hover:border-[#00FF9C]/30 transition-all duration-500 hover:bg-white/[0.07] relative overflow-hidden">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#00FF9C]/30 transition-colors">
                                <Code2 className="text-[#00FF9C] w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight text-white/90">Clean Code</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                I believe in modularity and maintainability, writing code that is as beautiful as the interface.
                            </p>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-[#00FF9C]/5 transition-all duration-500" />
                        </div>

                        <div className="flex-1 p-10 border border-white/10 rounded-[40px] bg-white/5 group hover:border-[#00FF9C]/30 transition-all duration-500 hover:bg-white/[0.07] relative overflow-hidden">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#00FF9C]/30 transition-colors">
                                <Rocket className="text-[#00FF9C] w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight text-white/90">Fast Delivery</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                Rapid prototyping without compromising quality, ensuring projects reach users efficiently.
                            </p>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-[#00FF9C]/5 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
