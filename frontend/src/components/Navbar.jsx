import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Magnetic from './Magnetic'

const Navbar = () => {
    const { pathname } = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="sticky top-0 z-100 flex items-center justify-between py-6 -mx-4 md:-mx-12 px-4 md:px-12 backdrop-blur-md bg-black/5 border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <Magnetic>
                    <Link to="/" className="text-xl font-bold tracking-tighter text-white px-4 py-2" data-cursor="pointer">.nitro</Link>
                </Magnetic>
            </div>

            <div className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-subtext">
                <Magnetic>
                    <Link to="/" className={`hover:text-white transition-colors cursor-pointer px-4 py-2 ${pathname === '/' ? 'text-white' : ''}`} data-cursor="pointer">home</Link>
                </Magnetic>
                <Magnetic>
                    <Link to="/projects" className={`hover:text-white transition-colors cursor-pointer px-4 py-2 ${pathname === '/projects' ? 'text-white' : ''}`} data-cursor="pointer">projects</Link>
                </Magnetic>
                <Magnetic>
                    <Link to="/about" className={`hover:text-white transition-colors cursor-pointer px-4 py-2 ${pathname === '/about' ? 'text-white' : ''}`} data-cursor="pointer">about</Link>
                </Magnetic>
                <Magnetic>
                    <Link to="/contact" className={`hover:text-white transition-colors cursor-pointer px-4 py-2 ${pathname === '/contact' ? 'text-white' : ''}`} data-cursor="pointer">contact</Link>
                </Magnetic>
            </div>

            <div className="flex items-center gap-4">
                <Magnetic>
                    <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10" data-cursor="pointer">
                        <span className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full animate-pulse shadow-[0_0_8px_#00FF9C]" />
                        <span className="text-[10px] font-mono text-subtext uppercase tracking-widest leading-none">open for work</span>
                    </div>
                </Magnetic>
            </div>
        </motion.nav>
    )
}

export default Navbar
