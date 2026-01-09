
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const BackgroundAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const flashRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Create some floating graphic elements (Dark clouds/orbs)
        const colors = ['#2a2a2a', '#1a1a1a', '#333333']
        const elements: HTMLDivElement[] = []

        // Reduced from 15 to 8 for better performance
        for (let i = 0; i < 8; i++) {
            const el = document.createElement('div')
            el.classList.add('absolute', 'rounded-full', 'opacity-20', 'blur-xl', 'will-change-transform')

            const size = Math.random() * 300 + 50
            el.style.width = `${size}px`
            el.style.height = `${size}px`
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            el.style.left = `${Math.random() * 100}%`
            el.style.top = `${Math.random() * 100}%`

            containerRef.current.appendChild(el)
            elements.push(el)

            gsap.to(el, {
                x: 'random(-100, 100)',
                y: 'random(-100, 100)',
                duration: 'random(10, 20)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                rotation: 'random(0, 360)',
                scale: 'random(0.8, 1.2)',
            })
        }

        // Thunder Effect
        const triggerLightning = () => {
            if (!flashRef.current || !containerRef.current) return

            // Get container dimensions to use transforms instead of left/top
            const { clientWidth, clientHeight } = containerRef.current

            // Random position for the flash source (mostly top half)
            const x = (Math.random() * clientWidth) - (clientWidth / 2)
            const y = (Math.random() * clientHeight * 0.6) - (clientHeight / 2)

            gsap.set(flashRef.current, {
                x: x, // Use transform instead of left
                y: y, // Use transform instead of top
                opacity: 0,
                scale: Math.random() * 3 + 2
            })

            // Flash sequence
            const tl = gsap.timeline({
                onComplete: () => {
                    // Schedule next flash - Frequent (2-6 seconds)
                    gsap.delayedCall(Math.random() * 4 + 2, triggerLightning)
                }
            })

            // Quick double flash or single flash
            const isDouble = Math.random() > 0.6

            tl.to(flashRef.current, {
                opacity: 0.6,
                duration: 0.05,
                ease: 'power4.in'
            })
                .to(flashRef.current, {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power4.out'
                })

            if (isDouble) {
                tl.to(flashRef.current, {
                    opacity: 0.8,
                    duration: 0.05,
                    ease: 'rough'
                })
                    .to(flashRef.current, {
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    })
            }
        }

        // Start the lightning loop
        triggerLightning()

        return () => {
            elements.forEach(el => el.remove())
            if (flashRef.current) gsap.killTweensOf(flashRef.current)
        }
    }, [])

    return (
        <div className='fixed inset-0 z-[-1] overflow-hidden bg-theme-black pointer-events-none'>
            {/* Floating Orbs Container */}
            <div ref={containerRef} className='absolute inset-0 w-full h-full' />

            {/* Lightning Flash Overlay - Centered initially for transform positioning */}
            <div
                ref={flashRef}
                className='absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-screen will-change-[transform,opacity]'
            />
        </div>
    )
}

export default BackgroundAnimation
