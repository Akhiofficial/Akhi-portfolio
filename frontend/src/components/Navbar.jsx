import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Magnetic from './Magnetic'

const Navbar = () => {
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    // Scroll to top on route change & close menu
    useEffect(() => {
        window.scrollTo(0, 0)
        setIsOpen(false)
    }, [pathname])

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const navLinks = [
        { name: 'home', path: '/' },
        { name: 'projects', path: '/projects' },
        { name: 'about', path: '/about' },
        { name: 'contact', path: '/contact' },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="sticky top-0 z-100 flex items-center justify-between py-6 -mx-4 md:-mx-12 px-4 md:px-12 backdrop-blur-md bg-black/5 border-b border-white/5"
            >
                <div className="flex items-center gap-2">
                    <Magnetic>
                        <Link to="/" className="text-xl font-bold tracking-tighter text-white px-4 py-2" data-cursor="pointer">.akhilesh</Link>
                    </Magnetic>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-subtext">
                    {navLinks.map((link) => (
                        <Magnetic key={link.path}>
                            <Link
                                to={link.path}
                                className={`hover:text-white transition-colors cursor-pointer px-4 py-2 ${pathname === link.path ? 'text-white font-bold' : ''}`}
                                data-cursor="pointer"
                            >
                                {link.name}
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Magnetic>
                        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10" data-cursor="pointer">
                            <span className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full animate-pulse shadow-[0_0_8px_#00FF9C]" />
                            <span className="text-[10px] font-mono text-subtext uppercase tracking-widest leading-none">open for work</span>
                        </div>
                    </Magnetic>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden items-center justify-center p-3 text-white z-110"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-90 bg-black flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-4xl font-bold tracking-tighter uppercase ${pathname === link.path ? 'text-[#00FF9C]' : 'text-white/60'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Accent */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                            <span className="w-1.5 h-1.5 bg-[#00FF9C] rounded-full animate-pulse shadow-[0_0_8px_#00FF9C]" />
                            <span className="text-[10px] font-mono text-subtext uppercase tracking-widest leading-none">open for work</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
