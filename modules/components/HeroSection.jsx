// "use client"
// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { Bounded } from "./Bounded"

// const HeroSection = ({ heroData }) => {
//   const { title, tagLines, hero_image } = heroData
//   const containerRef = useRef(null)
//   const titleRef = useRef(null)
//   const taglineRef = useRef(null)
//   const buttonsRef = useRef(null)
//   const imageRef = useRef(null)
//   const cubesRef = useRef(null)
//   const backgroundRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Split title into individual characters and wrap each in a span
//       const titleElement = titleRef.current
//       if (titleElement) {
//         const text = titleElement.textContent
//         titleElement.innerHTML = text
//           .split('')
//           .map((char, index) => 
//             char === ' ' 
//               ? '<span class="char-space">&nbsp;</span>' 
//               : `<span class="char" style="display: inline-block; transform-style: preserve-3d;">${char}</span>`
//           )
//           .join('')
//       }

//       // Set initial states with more dramatic effects
//       gsap.set(".char", {
//         opacity: 0,
//         y: 150,
//         rotationX: -90,
//         rotationY: 15,
//         scale: 0.5,
//         transformOrigin: "50% 50% -100px",
//       })
      
//       gsap.set([taglineRef.current, buttonsRef.current], {
//         opacity: 0,
//         y: 80,
//         scale: 0.8,
//       })
      
//       gsap.set(imageRef.current, {
//         opacity: 0,
//         scale: 0.6,
//         rotationY: 25,
//       })
      
//       gsap.set(".cube", {
//         opacity: 0,
//         rotationX: -90,
//         rotationY: -90,
//         scale: 0,
//         z: -200,
//       })

//       // Background animation
//       gsap.set(backgroundRef.current, {
//         opacity: 0,
//         scale: 1.1,
//       })

//       // Create enhanced timeline with slower, more premium animations
//       const tl = gsap.timeline({ delay: 1.5 }) // Longer delay for header to settle

//       // Background fade in
//       tl.to(backgroundRef.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 2,
//         ease: "power2.out",
//       })
//         // Animate cubes with more dramatic effect
//         .to(".cube", {
//           opacity: 1,
//           rotationX: 0,
//           rotationY: 0,
//           scale: 1,
//           z: 0,
//           duration: 2.5,
//           stagger: 0.3,
//           ease: "elastic.out(1, 0.6)",
//         }, "-=1.5")
//         // Animate title characters with premium stagger
//         .to(".char", {
//           opacity: 1,
//           y: 0,
//           rotationX: 0,
//           rotationY: 0,
//           scale: 1,
//           duration: 1.5,
//           stagger: {
//             amount: 2.5, // Much slower stagger
//             from: "start",
//             ease: "power2.out"
//           },
//           ease: "elastic.out(1, 0.7)",
//         }, "-=1")
//         // Animate tagline with smooth entrance
//         .to(
//           taglineRef.current,
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 1.8,
//             ease: "power3.out",
//           },
//           "-=1.5",
//         )
//         // Animate buttons with bounce
//         .to(
//           buttonsRef.current,
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 1.5,
//             ease: "back.out(1.4)",
//           },
//           "-=1.2",
//         )
//         // Animate image with 3D effect
//         .to(
//           imageRef.current,
//           {
//             opacity: 1,
//             scale: 1,
//             rotationY: 0,
//             duration: 2,
//             ease: "power3.out",
//           },
//           "-=1.8",
//         )

//       // Enhanced floating animation for cubes
//       gsap.to(".cube", {
//         y: "random(-30, 30)",
//         x: "random(-15, 15)",
//         rotation: "random(-10, 10)",
//         duration: "random(4, 7)",
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         stagger: {
//           amount: 3,
//           from: "random",
//         },
//       })

//       // Premium hover effects for title characters
//       const chars = gsap.utils.toArray(".char")
//       chars.forEach(char => {
//         char.addEventListener("mouseenter", () => {
//           gsap.to(char, {
//             scale: 1.2,
//             rotationY: 10,
//             color: "#60a5fa",
//             textShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
//             duration: 0.4,
//             ease: "back.out(1.7)"
//           })
//         })
        
//         char.addEventListener("mouseleave", () => {
//           gsap.to(char, {
//             scale: 1,
//             rotationY: 0,
//             color: "inherit",
//             textShadow: "none",
//             duration: 0.4,
//             ease: "power2.out"
//           })
//         })
//       })

//       // Subtle parallax effect on mouse move
//       const handleMouseMove = (e) => {
//         const { clientX: x, clientY: y } = e
//         const centerX = window.innerWidth / 2
//         const centerY = window.innerHeight / 2
//         const moveX = (x - centerX) / centerX
//         const moveY = (y - centerY) / centerY

//         gsap.to(".cube", {
//           x: moveX * 20,
//           y: moveY * 20,
//           rotation: moveX * 5,
//           duration: 0.8,
//           ease: "power2.out",
//         })
//       }

//       window.addEventListener("mousemove", handleMouseMove)

//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove)
//       }

//     }, containerRef)

//     return () => ctx.revert()
//   }, [title])

//   return (
//     <Bounded
//       id="herocta"
//       className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
//       style={{ zIndex: 10 }} // Ensure hero is above header
//     >
//       {/* Enhanced Background */}
//       <div 
//         ref={backgroundRef}
//         className="absolute inset-0"
//         style={{
//           background: `
//             radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
//             linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0a0a0a 100%)
//           `,
//         }}
//       />

//       {/* Enhanced Geometric Background Elements */}
//       <div ref={cubesRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
//         <div
//           className="cube absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-blue-700/30 backdrop-blur-sm transform rotate-45 border border-blue-400/20"
//           style={{ 
//             clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
//             boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)"
//           }}
//         />
//         <div className="cube absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-purple-700/30 backdrop-blur-sm rounded-2xl transform rotate-12 border border-purple-400/20" 
//              style={{ boxShadow: "0 0 40px rgba(147, 51, 234, 0.2)" }} />
//         <div
//           className="cube absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-emerald-700/30 backdrop-blur-sm transform -rotate-12 border border-emerald-400/20"
//           style={{ 
//             clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             boxShadow: "0 0 40px rgba(16, 185, 129, 0.2)"
//           }}
//         />
//         <div className="cube absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-pink-500/20 to-pink-700/20 backdrop-blur-sm rounded-full border border-pink-400/20" 
//              style={{ boxShadow: "0 0 60px rgba(236, 72, 153, 0.2)" }} />
//         <div className="cube absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-br from-yellow-500/30 to-yellow-700/30 backdrop-blur-sm transform rotate-45 border border-yellow-400/20" 
//              style={{ boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)" }} />
//         <div
//           className="cube absolute top-1/3 right-10 w-18 h-18 bg-gradient-to-br from-indigo-500/30 to-indigo-700/30 backdrop-blur-sm transform -rotate-45 border border-indigo-400/20"
//           style={{ 
//             clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
//             boxShadow: "0 0 40px rgba(99, 102, 241, 0.2)"
//           }}
//         />
//       </div>

//       {/* Main Content */}
//       <div ref={containerRef} className="relative container mx-auto px-4 py-12 text-white" style={{ zIndex: 20 }}>
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
//           {/* Enhanced Text Content */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left space-y-10 mb-12 lg:mb-0">
//             <h1
//               ref={titleRef}
//               className="text-3xl sm:text-4xl lg:text-4xl xl:text-8xl font-bold leading-tight tracking-tight"
//               style={{
//                 fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
//                 fontWeight: 900,
//                 letterSpacing: "-0.025em",
//                 perspective: "1000px",
//                 textShadow: "0 2px 40px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               {title}
//             </h1>

//             <div ref={taglineRef} className="space-y-6">
//               <p className="text-xl sm:text-2xl lg:text-3xl opacity-90 font-light leading-relaxed max-w-2xl">
//                 {tagLines && tagLines.length > 0 ? tagLines[0] : "Transform your vision into reality with AI-powered innovation"}
//               </p>
//             </div>

//             <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 pt-10 justify-center lg:justify-start">
//               <a
//                 href="https://app.perktify.com/login?demo=true"
//                 className="group relative bg-gradient-to-r from-white to-gray-100 text-black font-semibold px-10 py-4 rounded-full hover:scale-105 transition-all duration-500 overflow-hidden shadow-2xl"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   Experience Demo
//                   <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </a>
//               <button
//                 onClick={() => document.getElementById("buysubscription")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group relative border-2 border-white/30 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500 hover:border-white hover:scale-105"
//               >
//                 <span className="relative z-10">Start Building</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
//             </div>
//           </div>

//           {/* Enhanced Hero Image */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <div ref={imageRef} className="relative max-w-md lg:max-w-lg xl:max-w-2xl">
//               <img
//                 src={hero_image || "/placeholder.svg?height=600&width=600"}
//                 alt="AI Innovation Hero"
//                 className="w-full h-auto object-contain filter drop-shadow-2xl"
//                 style={{ filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))" }}
//               />
//               {/* Enhanced multi-layered glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 scale-110 animate-pulse" />
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-2xl -z-20 scale-125" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced bottom gradient overlay */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
//     </Bounded>
//   )
// }

// export default HeroSection

"use client"
import { useTheme } from '@/app/contexts/ThemeContext';
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import * as THREE from "three"
import { Bounded } from "./Bounded"

const HeroSection = ({ heroData }) => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const buttonsRef = useRef(null)
  const threeContainerRef = useRef(null)
  const floatingElementsRef = useRef(null)
  const { title, tagLines } = heroData

  useEffect(() => {
    // Three.js 3D Grid Setup (unchanged)
    let scene, camera, renderer, gridGroup1, gridGroup2, animationId

    const initThreeJS = () => {
      if (!threeContainerRef.current) return

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      threeContainerRef.current.appendChild(renderer.domElement)

      // Create 3D Grid (keeping original blue color)
      const createGrid = () => {
        const createSingleGrid = () => {
          const grid = new THREE.Group()
          const gridSize = 50
          const gridDivisions = 100
          const gridColor = new THREE.Color(0x3B82F6) // Keeping original blue color
          
          // Horizontal lines
          for (let i = 0; i <= gridDivisions; i++) {
            const geometry = new THREE.BufferGeometry()
            const positions = new Float32Array([
              -gridSize, 0, -gridSize + (i * (gridSize * 2) / gridDivisions),
              gridSize, 0, -gridSize + (i * (gridSize * 2) / gridDivisions)
            ])
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            const material = new THREE.LineBasicMaterial({ 
              color: gridColor,
              opacity: 0.3,
              transparent: true
            })
            const line = new THREE.Line(geometry, material)
            grid.add(line)
          }
          
          // Vertical lines  
          for (let i = 0; i <= gridDivisions; i++) {
            const geometry = new THREE.BufferGeometry()
            const positions = new Float32Array([
              -gridSize + (i * (gridSize * 2) / gridDivisions), 0, -gridSize,
              -gridSize + (i * (gridSize * 2) / gridDivisions), 0, gridSize
            ])
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            const material = new THREE.LineBasicMaterial({ 
              color: gridColor,
              opacity: 0.3,
              transparent: true
            })
            const line = new THREE.Line(geometry, material)
            grid.add(line)
          }
          
          grid.position.set(0, -10, -20)
          grid.rotation.x = -Math.PI / 3
          return grid
        }

        gridGroup1 = createSingleGrid()
        gridGroup2 = createSingleGrid()
        gridGroup2.position.z = -120
        
        scene.add(gridGroup1)
        scene.add(gridGroup2)
      }

      createGrid()

      camera.position.set(0, 10, 20)
      camera.lookAt(0, 0, 0)

      const animate = () => {
        animationId = requestAnimationFrame(animate)
        const speed = 0.15
        
        if (gridGroup1 && gridGroup2) {
          gridGroup1.position.z += speed
          gridGroup2.position.z += speed
          
          if (gridGroup1.position.z > 80) gridGroup1.position.z = gridGroup2.position.z - 100
          if (gridGroup2.position.z > 80) gridGroup2.position.z = gridGroup1.position.z - 100
        }
        
        renderer.render(scene, camera)
      }
      
      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      
      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animationId)
        if (renderer?.domElement) {
          threeContainerRef.current?.removeChild(renderer.domElement)
          renderer.dispose()
        }
      }
    }

    const cleanup = initThreeJS()

    // GSAP Animations (unchanged)
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, taglineRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
      })
      
      gsap.set(".floating-element", {
        opacity: 0,
        scale: 0.8,
        y: 20,
      })

      const tl = gsap.timeline({ delay: 0.3 })

      tl.to(".floating-element", {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power2.out",
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=1")
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.8")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.6")

      gsap.to(".floating-element", {
        y: "random(-15, 15)",
        rotation: "random(-3, 3)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      })

    }, containerRef)

    return () => {
      ctx.revert()
      cleanup?.()
    }
  }, [title, isDarkMode])

  return (
    <Bounded
      id="herocta"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        zIndex: 10,
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
      }}
    >
      {/* Three.js 3D Grid Container (unchanged) */}
      <div 
        ref={threeContainerRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating Elements (updated colors) */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        {/* Top right card */}
        <div className="floating-element absolute top-32 right-24" style={{ transform: 'perspective(800px) rotateY(20deg) rotateX(-5deg)' }}>
          <div className={`w-32 h-22 backdrop-blur-sm border rounded-xl shadow-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-br from-blue-600/20 to-blue-700/30 border-blue-400/25' 
              : 'bg-gradient-to-br from-blue-100/50 to-blue-200/60 border-blue-400/25'
          }`}>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-4 h-4 rounded ${isDarkMode ? 'bg-blue-400/50' : 'bg-blue-400/50'}`}></div>
                <div className={`w-12 h-1.5 rounded ${isDarkMode ? 'bg-blue-300/35' : 'bg-blue-300/35'}`}></div>
              </div>
              <div className="space-y-1.5">
                <div className={`w-20 h-1 rounded ${isDarkMode ? 'bg-blue-300/30' : 'bg-blue-300/30'}`}></div>
                <div className={`w-16 h-1 rounded ${isDarkMode ? 'bg-blue-300/25' : 'bg-blue-300/25'}`}></div>
                <div className={`w-10 h-1 rounded ${isDarkMode ? 'bg-blue-300/20' : 'bg-blue-300/20'}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom left card */}
        <div className="floating-element absolute bottom-32 left-32" style={{ transform: 'perspective(800px) rotateY(10deg) rotateX(15deg)' }}>
          <div className={`w-24 h-18 backdrop-blur-sm border rounded-lg shadow-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-br from-blue-500/12 to-blue-600/22 border-blue-400/30' 
              : 'bg-gradient-to-br from-blue-100/40 to-blue-200/50 border-blue-400/30'
          }`}>
            <div className="p-3">
              <div className={`w-4 h-4 rounded-full mb-2 ${isDarkMode ? 'bg-blue-400/45' : 'bg-blue-400/45'}`}></div>
              <div className="space-y-1">
                <div className={`w-14 h-1 rounded ${isDarkMode ? 'bg-blue-300/25' : 'bg-blue-300/25'}`}></div>
                <div className={`w-10 h-1 rounded ${isDarkMode ? 'bg-blue-300/20' : 'bg-blue-300/20'}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content (updated colors) */}
      <div ref={containerRef} className="relative container mx-auto px-4 py-12 text-center pt-[10rem]" style={{ zIndex: 20 }}>
        <div className="max-w-5xl mx-auto space-y-12">
          <h1
            ref={titleRef}
            className={`text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight bg-clip-text text-transparent ${
              isDarkMode 
                ? 'bg-gradient-to-b from-white via-white to-gray-300' 
                : 'bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700'
            }`}
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              textShadow: isDarkMode ? "0 0 40px rgba(255, 255, 255, 0.1)" : "0 0 40px rgba(59, 130, 246, 0.1)",
            }}
          >
            {title}
          </h1>

          <div ref={taglineRef} className="max-w-3xl mx-auto">
            <p className={`text-xl sm:text-2xl lg:text-3xl opacity-70 font-light leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-blue-900/80'
            }`}>
              {tagLines?.[0] || "Transform your vision into reality with AI-powered innovation"}
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => document.getElementById("buysubscription")?.scrollIntoView({ behavior: "smooth" })}
              className={`group relative font-semibold px-10 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl ${
                isDarkMode
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/25'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-500/25'
              }`}
            >
              <span className="relative z-10">Get Perktify</span>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                  : 'bg-gradient-to-r from-blue-400 to-blue-500'
              }`} />
            </button>
            
            <a
              href="https://app.perktify.com/login?demo=true"
              className={`group relative border-2 backdrop-blur-sm font-semibold px-10 py-4 rounded-xl transition-all duration-300 ${
                isDarkMode
                  ? 'border-blue-500/40 text-white hover:bg-blue-500/10 hover:border-blue-400'
                  : 'border-blue-500/40 text-blue-800 hover:bg-blue-500/10 hover:border-blue-400'
              }`}
            >
              <span className="relative z-10">View Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade (updated) */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t pointer-events-none ${
        isDarkMode ? 'from-black' : 'from-white'
      } to-transparent`} style={{ zIndex: 5 }} />
    </Bounded>
  )
}

export default HeroSection