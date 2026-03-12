import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { Linkedin, Github, Instagram, Send, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
    const socials = [
        { 
            icon: <Linkedin size={20} />, 
            name: "LinkedIn", 
            handle: "akhilesh-mandawgane", 
            link: "https://www.linkedin.com/in/akhilesh-mandawgane-a1883b283" 
        },
        { 
            icon: <Github size={20} />, 
            name: "GitHub", 
            handle: "Akhiofficial", 
            link: "https://github.com/Akhiofficial" 
        },
        { 
            icon: <Instagram size={20} />, 
            name: "Instagram", 
            handle: "akhilesh_mandawgane", 
            link: "https://www.instagram.com/akhilesh_mandawgane/" 
        }
    ]

    return (
        <div className="bg-black text-white px-6 md:px-12">
            <Navbar />

            {/* Header Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-32 md:pt-40 pb-20"
            >
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">.say hello</span>
                    <div className="h-[0.5px] grow bg-white/10" />
                </div>

                <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-bold tracking-tighter leading-[0.8] mb-12 md:mb-20 max-w-4xl uppercase">
                    say hello
                </h1>

                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] max-w-5xl text-white/90">
                    let's collaborate. feel free to drop me a line about your project or follow me on social networks
                </p>
            </motion.section>

            {/* Content Section: Form & Socials */}
            <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start border-t border-white/5">
                {/* Left Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[40px] shadow-2xl backdrop-blur-sm"
                >
                    <ContactForm />
                </motion.div>

                {/* Right Side: Social Media Grid */}
                <div className="space-y-8">
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between p-6 border border-white/5 hover:border-white/10 rounded-sm bg-white/2 transition-all group"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-[#111] rounded-sm text-white/60 group-hover:text-white transition-colors">
                                    {social.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest uppercase">{social.name}</h4>
                                    <span className="text-[10px] font-mono text-subtext">{social.handle}</span>
                                </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00FF9C] transition-all" />
                        </motion.a>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactPage
