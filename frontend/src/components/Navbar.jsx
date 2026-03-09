import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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
                <Link to="/" className="text-xl font-bold tracking-tighter text-white">.nitro</Link>
            </div>

            <div className="hidden md:flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.3em] text-subtext">
                <Link to="/" className={`hover:text-white transition-colors cursor-pointer ${pathname === '/' ? 'text-white' : ''}`}>home</Link>
                <Link to="/projects" className={`hover:text-white transition-colors cursor-pointer ${pathname === '/projects' ? 'text-white' : ''}`}>projects</Link>
                <Link to="/about" className={`hover:text-white transition-colors cursor-pointer ${pathname === '/about' ? 'text-white' : ''}`}>about</Link>
                <Link to="/contact" className={`hover:text-white transition-colors cursor-pointer ${pathname === '/contact' ? 'text-white' : ''}`}>contact</Link>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full animate-pulse shadow-[0_0_8px_#00FF9C]" />
                    <span className="text-[10px] font-mono text-subtext uppercase tracking-widest leading-none">open for work</span>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
