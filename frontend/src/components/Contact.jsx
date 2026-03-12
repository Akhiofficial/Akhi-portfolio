import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail } from 'lucide-react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section id="contact" className="py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                {/* Left Side: Text and Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[10px] font-mono text-[#00FF9C] uppercase tracking-[0.4em] mb-12 block">get in touch</span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]">
                        let's create <br />
                        something <br />
                        <span className="text-subtext italic font-serif">meaningful.</span>
                    </h2>

                    <div className="space-y-4">
                        <a href="mailto:contact@akhi.design" className="flex items-center gap-4 text-white/60 hover:text-[#00FF9C] transition-colors group">
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-lg font-medium">contact@akhi.design</span>
                        </a>
                        <div className="flex gap-6 pt-8">
                            {[
                                { icon: <Github />, label: 'GitHub', link: '#' },
                                { icon: <Linkedin />, label: 'LinkedIn', link: '#' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-[#00FF9C]/10 transition-colors"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form UI */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[40px] shadow-2xl backdrop-blur-sm"
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
