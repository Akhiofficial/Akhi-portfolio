import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import SayHello from '../components/SayHello'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="relative min-h-screen w-full bg-black">
            {/* Background Effects */}
            <div className="bg-grid absolute inset-0 z-0 pointer-events-none opacity-20" />
            <div className="fixed inset-0 z-50 pointer-events-none border-[0.5px] border-white/5" />

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <SayHello />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home
