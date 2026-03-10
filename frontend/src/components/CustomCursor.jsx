import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
    const cursorDotRef = useRef(null)
    const cursorCircleRef = useRef(null)

    useEffect(() => {
        const dot = cursorDotRef.current
        const circle = cursorCircleRef.current

        const onMouseMove = (e) => {
            const { clientX, clientY } = e

            // Immediate movement for the dot
            gsap.to(dot, {
                x: clientX,
                y: clientY,
                duration: 0,
            })

            // Lagging movement for the circle
            gsap.to(circle, {
                x: clientX,
                y: clientY,
                duration: 0.5,
                ease: "expo.out",
            })
        }

        const onMouseEnter = (e) => {
            const target = e.target
            if (target.closest('a, button, [data-cursor="pointer"]')) {
                gsap.to(circle, {
                    scale: 1.8,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    duration: 0.3,
                })
                gsap.to(dot, {
                    scale: 0,
                    duration: 0.3,
                })
            }
        }

        const onMouseLeave = (e) => {
            const target = e.target
            if (target.closest('a, button, [data-cursor="pointer"]')) {
                gsap.to(circle, {
                    scale: 1,
                    backgroundColor: "transparent",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    duration: 0.3,
                })
                gsap.to(dot, {
                    scale: 1,
                    duration: 0.3,
                })
            }
        }

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseover', onMouseEnter)
        window.addEventListener('mouseout', onMouseLeave)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseover', onMouseEnter)
            window.removeEventListener('mouseout', onMouseLeave)
        }
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-9999 hidden md:block">
            {/* Main Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
            {/* Lagging Circle */}
            <div
                ref={cursorCircleRef}
                className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    )
}

export default CustomCursor
