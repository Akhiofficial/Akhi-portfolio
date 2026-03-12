import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SayHello from '../components/SayHello'
import { Briefcase, MapPin, Clock, Camera, Code, Cpu, Figma, Globe, Palette } from 'lucide-react'

const AboutPage = () => {
    const experiences = [
        { year: "2025 — 2025", company: "Tynkspire Innovations", role: "Engineer Intern", desc: "Worked on WordPress website development for client projects, customized themes, optimized performance, and supported production deployment of websites." },
        { year: "2025 — 2025", company: "Concepts Lab", role: "Development Intern", desc: "Assisted in frontend and backend development, implemented new features, and supported debugging and testing of web applications." }
    ]

    const skills = [
        { icon: <Code size={18} />, name: "Web Development", label: "React, JavaScript, HTML, CSS" },
        { icon: <Cpu size={18} />, name: "Backend Development", label: "Node.js, Express.js" },
        { icon: <Palette size={18} />, name: "Database", label: "MongoDB, MySQL" },
        { icon: <Globe size={18} />, name: "WordPress Development", label: "Custom Themes, CMS, Deployment" },
        { icon: <Figma size={18} />, name: "SEO Optimization", label: "Technical SEO & Performance" },
        { icon: <Camera size={18} />, name: "Tools & Workflow", label: "Git, GitHub, REST APIs" }
    ]

    return (
        <div className="bg-black text-white px-6 md:px-12">
            <Navbar />

            {/* Header section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-32 md:pt-40 pb-20"
            >
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">.about</span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>
                <h1 className="text-[clamp(2.5rem,8vw,10rem)] font-bold tracking-tighter leading-[0.8] mb-12 md:mb-20 max-w-4xl uppercase">
                    about
                </h1>

                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] max-w-5xl text-white/90">
                    i'm a full-stack developer focused on
                    building <span className="font-display italic font-light text-[#00FF9C]">scalable web applications</span> and
                    high-performance websites.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mt-20">
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                        I'm Akhilesh Mandawgane, a B.Tech Artificial Intelligence student and full-stack developer based in India.
                        I specialize in building modern web applications using the MERN stack and crafting professional WordPress websites.
                    </p>
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                        I focus on delivering high-performance, user-centric solutions through internships and freelance work,
                        constantly solving complex technical challenges with clean and scalable code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t border-white/5 pt-16">
                    <div className="space-y-3">
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-bold">Experience</span>
                        <p className="text-2xl font-bold tracking-tight">2+ years</p>
                    </div>
                    <div className="space-y-3">
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-bold">Location</span>
                        <p className="text-2xl font-bold tracking-tight">Maharashtra, India</p>
                    </div>
                    <div className="space-y-3">
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-bold">Availability</span>
                        <p className="text-2xl font-bold tracking-tight text-[#00FF9C]">Open for work</p>
                    </div>
                </div>
            </motion.section>

            {/* Core Craft Section */}
            <section className="py-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-white/5">
                <div className="rounded-[40px] overflow-hidden bg-white/5 aspect-square relative group border border-white/10 hover:border-white/20 transition-all duration-700">
                    <div className="absolute inset-0 bg-[url('/images/profile01.png')] bg-cover bg-center grayscale contrast-125 opacity-70 group-hover:opacity-80 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:opacity-20" />
                </div>
                <div className="space-y-10">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em] font-bold">.my craft</span>
                    <h3 className="text-4xl md:text-5xl font-bold leading-none tracking-tighter">
                        my <span className="font-display italic font-light text-[#00FF9C]">craft</span> is building digital products that solve real problems.
                    </h3>
                    <p className="text-xl text-white/50 leading-relaxed font-light max-w-lg">
                        I transform complex ideas into intuitive, efficient, and user-centric web experiences.
                        Whether it's a full-stack MERN application or a WordPress site, I enjoy creating meaningful value for users.
                    </p>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-20">
                <div className="flex items-center gap-4 mb-20">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] font-bold">.work experience</span>
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
                            className="group grid grid-cols-1 md:grid-cols-3 gap-8 py-14 border-b border-white/5 hover:bg-white/2 transition-colors"
                        >
                            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{exp.year}</span>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold tracking-tight text-white/90">{exp.company}</h4>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#00FF9C] font-mono font-bold leading-none">{exp.role}</span>
                            </div>
                            <p className="text-base text-white/40 leading-relaxed md:text-right font-light italic">{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skills Grid */}
            <section className="py-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8, borderColor: 'rgba(0, 255, 156, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                            className="p-12 border border-white/10 rounded-[40px] bg-white/5 group transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="text-[#00FF9C] mb-8 group-hover:scale-110 transition-transform duration-500 bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#00FF9C]/30">
                                {skill.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-3 tracking-tight text-white/90">{skill.name}</h4>
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] font-bold">{skill.label}</span>
                            
                            {/* Inner accent */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-[#00FF9C]/5 transition-all duration-500" />
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
