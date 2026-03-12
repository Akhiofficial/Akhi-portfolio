import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const { scrollY } = useScroll()

    // Parallax effect for the grid
    const gridY = useTransform(scrollY, [0, 500], [0, 100])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.8,
            }
        }
    }

    const lineVariants = {
        hidden: {
            opacity: 0,
            y: 80,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out 
            }
        }
    }

    const gridVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 0.15,
            height: '100%',
            transition: {
                duration: 2,
                ease: "easeInOut",
                delay: 0.2
            }
        }
    }

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
            {/* Cinematic Vertical Grid */}
            <motion.div
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                style={{ y: gridY }}
                className="absolute inset-0 z-0 bg-grid-vertical pointer-events-none"
            />

            {/* Subtle Glow behind text */}
            <div className="absolute inset-0 z-0 glow-bg pointer-events-none opacity-50" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[10px] font-mono text-subtext uppercase tracking-[0.5em] mb-12 block"
                >
                    HEY, I'M AKHILESH
                </motion.span>

                <div className="flex flex-col gap-2">
                    <motion.h1 variants={lineVariants} className="text-[clamp(2.5rem,9vw,9rem)] font-bold leading-[0.85] tracking-[-0.05em] text-white text-glow">
                        a full-stack developer
                    </motion.h1>
                    <motion.h1 variants={lineVariants} className="text-[clamp(2.5rem,9vw,9rem)] font-bold leading-[0.85] tracking-[-0.05em] text-white text-glow">
                        building modern
                    </motion.h1>
                    <motion.h1 variants={lineVariants} className="text-[clamp(2.5rem,9vw,9rem)] font-bold leading-[0.85] tracking-[-0.05em] text-white text-glow">
                        web applications
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-8 mt-12 md:mt-20"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#00FF9C', color: '#000' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/projects')}
                        className="w-full sm:w-auto bg-[#00FF9C] text-black px-12 py-5 rounded-full font-bold text-lg shadow-[0_0_50px_rgba(0,255,156,0.2)] transition-colors"
                    >
                        Explore Projects
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, borderColor: '#fff' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="w-full sm:w-auto border border-white/10 text-white/60 hover:text-white px-12 py-5 rounded-full font-bold text-lg transition-all"
                    >
                        Contact Me
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
