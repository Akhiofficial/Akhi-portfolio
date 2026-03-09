import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const SayHello = () => {
    return (
        <section className="py-40 relative border-t border-white/5">
            <div className="flex items-center gap-4 mb-20">
                <span className="text-[10px] font-mono text-subtext uppercase tracking-[0.3em]">.say hello</span>
                <div className="h-[0.5px] grow bg-white/10" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl"
            >
                <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-24">
                    i'm open for freelance projects, feel
                    free to email me to see how can we
                    collaborate
                </h2>

                <div className="flex justify-center md:justify-start">
                    <motion.a
                        href="mailto:contact@akhi.design"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-3 px-12 py-6 border border-white/10 rounded-sm hover:border-white/20 transition-colors bg-white/2"
                    >
                        <span className="text-xs font-mono uppercase tracking-[0.4em] text-subtext group-hover:text-white transition-colors">
                            contact me
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-subtext group-hover:text-[#00FF9C] transition-colors" />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}

export default SayHello
