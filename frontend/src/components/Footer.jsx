const Footer = () => {
    return (
        <footer className="py-20 flex flex-col md:flex-row justify-between items-center gap-12 text-subtext text-[10px] font-mono tracking-widest uppercase">
            <div>© 2026 AKHI PORTFOLIO — BUILT WITH PASSION</div>
            <div className="flex gap-12">
                <span>EST. 2024</span>
                <span className="opacity-40 select-none">/</span>
                <span>KARNATAKA, IN</span>
            </div>
            <div className="opacity-60">HANDCRAFTED IN REACT & VITE</div>
        </footer>
    )
}

export default Footer
