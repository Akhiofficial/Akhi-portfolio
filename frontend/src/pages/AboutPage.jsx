import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SayHello from '../components/SayHello'
import { Briefcase, MapPin, Clock, Camera, Code, Cpu, Figma, Globe, Palette } from 'lucide-react'

const AboutPage = () => {
    const experiences = [
        { year: "2021 — Now", company: "LMN Technologies", role: "lead product designer", desc: "Spearheaded the design of next-gen SaaS platforms and mobile apps." },
        { year: "2019 — 2021", company: "OPQ Solutions", role: "senior design manager", desc: "Managed a cross-functional team across multiple web products." },
        { year: "2017 — 2019", company: "RST Innovations", role: "UI/UX lead", desc: "Lead the UI overhaul for several major fintech platforms." },
        { year: "2015 — 2017", company: "XYZ Design Studio", role: "product designer", desc: "Delivered user-centered solutions for a variety of startups." },
        { year: "2012 — 2015", company: "ABC Corporation", role: "Web Designer", desc: "Focused on frontend development and interaction design." }
    ]

    const skills = [
        { icon: <Palette size={18} />, name: "Design", label: "visual systems" },
        { icon: <Figma size={18} />, name: "Product", label: "UI & UX Design" },
        { icon: <Cpu size={18} />, name: "Engine", label: "Architecture" },
        { icon: <Code size={18} />, name: "Web", label: "Development" },
        { icon: <Globe size={18} />, name: "SEO", label: "Optimization" },
        { icon: <Camera size={18} />, name: "Style", label: "Visual Art" }
    ]

    return (
        <div className="bg-black text-white px-6 md:px-12">
            <Navbar />

            {/* Header section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-40 pb-20"
            >
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.3em]">.about</span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>
                <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-bold tracking-tighter leading-[0.9] mb-20 max-w-4xl">
                    about
                </h1>

                <p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-5xl text-white/90">
                    i'm a designer, maker, nomad, and coffee lover obsessed with the world of digital
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t border-white/5 pt-12">
                    <div className="space-y-2">
                        <span className="text-[10px] font-mono text-subtext uppercase tracking-widest">Experience</span>
                        <p className="text-xl font-bold">12 years</p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-mono text-subtext uppercase tracking-widest">Location</span>
                        <p className="text-xl font-bold">Mumbai, India</p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-mono text-subtext uppercase tracking-widest">Availability</span>
                        <p className="text-xl font-bold text-[#00FF9C]">Available</p>
                    </div>
                </div>
            </motion.section>

            {/* Core Craft Section */}
            <section className="py-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-white/5">
                <div className="rounded-[40px] overflow-hidden bg-white/5 aspect-square relative group">
                    {/* Using a placeholder stippled image feel */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-70 transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="space-y-8">
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.4em]">.my craft</span>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight max-w-lg">
                        my craft is building experiences that bring value to people and celebrate function over form. let's hide the ego and give some freedom to creativity and make the first small step changing the world to a better place
                    </h3>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-20">
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.3em]">.work experience</span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>

                <div className="space-y-0">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-white/5 hover:bg-white/2 transition-colors"
                        >
                            <span className="text-sm font-mono text-subtext">{exp.year}</span>
                            <div className="space-y-1">
                                <h4 className="text-xl font-bold">{exp.company}</h4>
                                <span className="text-xs uppercase tracking-widest text-subtext italic">{exp.role}</span>
                            </div>
                            <p className="text-sm text-subtext/80 leading-relaxed md:text-right">{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skills / Brands Grid */}
            <section className="py-40">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                            className="p-10 border border-white/10 rounded-[40px] bg-white/5 group transition-all"
                        >
                            <div className="text-[#00FF9C] mb-6 group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                            <span className="text-xs font-mono text-subtext uppercase">{skill.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <SayHello />
            <Footer />
        </div>
    )
}

export default AboutPage
