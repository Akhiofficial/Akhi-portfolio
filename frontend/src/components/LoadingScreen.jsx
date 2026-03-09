import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)
    const [wordIndex, setWordIndex] = useState(0)
    const words = ["Design", "Create", "Inspire"]
    const onCompleteRef = useRef(onComplete)

    // Update ref to avoid stale closures
    useEffect(() => {
        onCompleteRef.current = onComplete
    }, [onComplete])

    // Word Rotation Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => {
                if (prev < words.length - 1) return prev + 1
                clearInterval(interval)
                return prev
            })
        }, 900)
        return () => clearInterval(interval)
    }, [])

    // Counter Logic (0 to 100 over 2.7s)
    useEffect(() => {
        let startTime
        const duration = 2700

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const currentProgress = Math.min((elapsed / duration) * 100, 100)

            setProgress(currentProgress)

            if (currentProgress < 100) {
                requestAnimationFrame(animate)
            } else {
                // Wait 400ms after reaching 100
                setTimeout(() => {
                    onCompleteRef.current()
                }, 400)
            }
        }

        requestAnimationFrame(animate)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-9999 bg-[#0a0a0a] flex flex-col overflow-hidden"
        >
            {/* Element 1: Portfolio Label */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-8 left-8 md:top-12 md:left-12"
            >
                <span className="text-xs md:text-sm text-[#888888] uppercase tracking-[0.3em]">Portfolio</span>
            </motion.div>

            {/* Element 2: Rotating Words */}
            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[#f5f5f5]/80"
                    >
                        {words[wordIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Element 3: Counter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
            >
                <span className="text-6xl md:text-8xl lg:text-9xl font-display text-[#f5f5f5] tabular-nums">
                    {Math.round(progress).toString().padStart(3, '0')}
                </span>
            </motion.div>

            {/* Element 4: Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1f1f1f]/50">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                    style={{
                        originX: 0,
                        background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
                        boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)"
                    }}
                    className="h-full w-full"
                />
            </div>
        </motion.div>
    )
}

export default LoadingScreen
