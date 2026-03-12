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
                className="pt-40 pb-20"
            >
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.3em]">.about</span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>
                <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-bold tracking-tighter leading-[0.9] mb-20 max-w-4xl">
                    about
                </h1>

                <p className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-tight max-w-5xl text-white/90">
                    i'm a full-stack developer focused on
                    building scalable web applications and
                    high-performance websites.
                </p>

                <p className="text-lg md:text-xl text-subtext mt-12 leading-relaxed max-w-3xl">
                    I'm Akhilesh Mandawgane, a B.Tech Artificial Intelligence student and full-stack developer based in Maharashtra, India.
                    <br /><br />
                    I build modern web applications using React, Node.js, and MongoDB while also developing production-ready WordPress websites.
                    <br /><br />
                    Through internships and freelance work, I've built real-world applications, optimized website performance, and delivered client-focused solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t border-white/5 pt-12">
                    <div className="space-y-2">
                        <span className="text-[10px] font-mono text-subtext uppercase tracking-widest">Experience</span>
                        <p className="text-xl font-bold">2+ years</p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-mono text-subtext uppercase tracking-widest">Location</span>
                        <p className="text-xl font-bold">Maharashtra, India</p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-mono text-subtext uppercase tracking-widest">Availability</span>
                        <p className="text-xl font-bold text-[#00FF9C]">Open for Internship & Freelance</p>
                    </div>
                </div>
            </motion.section>

            {/* Core Craft Section */}
            <section className="py-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-white/5">
                <div className="rounded-[40px] overflow-hidden bg-white/5 aspect-square relative group">
                    {/* Profile image - grayscale by default, colorful on hover */}
                    <div className="absolute inset-0 bg-[url('/images/profile01.png')] bg-cover bg-center grayscale contrast-125 opacity-70 group-hover:opacity-70 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:opacity-0" />
                </div>
                <div className="space-y-8">
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.4em]">.my craft</span>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight max-w-lg">
                        my craft is building digital products that solve real problems.
                    </h3>
                    <p className="text-lg md:text-xl text-subtext leading-relaxed max-w-xl">
                        I focus on creating web applications that are scalable, user-friendly, and efficient.
                        Whether it's a full-stack MERN application or a production WordPress website, I enjoy transforming ideas into real products that people can use.
                        <br /><br />
                        I believe great software is not only about code but about delivering meaningful experiences that create value for users.
                    </p>
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
