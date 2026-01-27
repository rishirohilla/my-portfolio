// "use client"

// import { motion } from "framer-motion"
// import { ChevronDown, Download, ExternalLink } from "lucide-react"
// import { GlitchText } from "@/components/glitch-text"
// import { HolographicCard } from "@/components/holographic-card"

// export function HeroSection() {
//   const scrollToNext = () => {
//     document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Animated geometric shapes */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45"
//           animate={{ rotate: [45, 405] }}
//           transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//           transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-10 w-16 h-16 border-2 border-purple-400/40"
//           animate={{ y: [-20, 20, -20] }}
//           transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="space-y-8"
//         >
//           {/* Glitch effect name */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-cyan-400 font-mono text-lg tracking-wider"
//             >
//               {"<Competitive Programmer>"}
//             </motion.div>

//             {/* Avatar Image */}
            // <motion.div
            //   initial={{ opacity: 0, y: -20, scale: 0.8 }}
            //   animate={{ opacity: 1, y: 0, scale: 1 }}
            //   transition={{ duration: 1, delay: 0.3 }}
            //   className="flex justify-center"
            // >
            //   <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-lg shadow-cyan-500/30 animate-pulse bg-gradient-to-br from-cyan-800/20 to-purple-800/20">
            //     <img
            //       src="https://media.licdn.com/dms/image/v2/D5603AQH1NU2mJvksYA/profile-displayphoto-scale_400_400/B56ZsjOLqKIYAg-/0/1765822503573?e=1767225600&v=beta&t=NJ4YbKOJEH9sc4ZnIQ8Ro7mvTrpae_6kjCra7E7mV8o"
            //       alt="Rishi Rohilla"
            //       className="object-cover w-full h-full"
            //     />
            //   </div>
            // </motion.div>

//             {/* Name */}
//             <GlitchText text="Rishi Rohilla" className="text-6xl md:text-8xl font-orbitron font-bold" />


//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1, duration: 0.8 }}
//               className="text-cyan-400 font-mono text-lg tracking-wider"
//             >
//               {"</developer>"}
//             </motion.div>
//           </div>

//           {/* Animated subtitle */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//           >
//             Crafting code, scaling ideas - a{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
//             tech-savvy
//             </span>{" "}
//              creator from IIIT Lucknow
//           </motion.div>

//           {/* Holographic cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 0.8 }}
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
//           >
//             {/* View Resume Card */}
//             <a
//               href="https://drive.google.com/file/d/1B8tpAMh_2fKKuHYv5Qy7nmI3iHl8cBS7/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group cursor-pointer"
//               data-cursor-hover
//             >
//               <HolographicCard>
//                 <div className="flex items-center space-x-3 p-6">
//                   <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
//                   <span className="font-medium">View Resume</span>
//                 </div>
//               </HolographicCard>
//             </a>

//             {/* View Projects Card */}
//             {/* View Projects */}
//             <a
//               href="https://github.com/rishirohilla"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group cursor-pointer"
//               data-cursor-hover
//             >
//               <HolographicCard>
//                 <div className="flex items-center space-x-3 p-6">
//                   <ExternalLink className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />
//                   <span className="font-medium">View Projects</span>
//                 </div>
//               </HolographicCard>
//             </a>
//           </motion.div>

//           {/* Scroll indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2, duration: 1 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//             onClick={scrollToNext}
//             data-cursor-hover
//           >
//             {/* <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors"
//             >
//               <span className="text-sm font-mono">scroll</span>
//               <ChevronDown className="w-5 h-5" />
//             </motion.div> */}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// new code->/\ 


"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Download, ExternalLink, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
          y,
          scale,
        }}
      />

      {/* Floating 3D Orbs */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              background: `radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4), transparent 70%)`,
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated geometric shapes with 3D effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-primary/40"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-accent/40 rotate-45"
            animate={{
              rotate: [45, -315],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-primary/30" />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/3 w-24 h-24"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
          animate={{
            y: [-20, 20],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/30 transform rotate-45" />
        </motion.div>
      </div>

      <motion.div className="max-w-6xl mx-auto px-4 text-center relative z-10" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Floating Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/50 bg-card/50 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-foreground">Welcome to my portfolio</span>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-black-400/60 shadow-lg shadow-black-500/30 animate-pulse bg-gradient-to-br from-cyan-800/20 to-purple-800/20">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQH1NU2mJvksYA/profile-displayphoto-scale_200_200/B56ZsjOLqKIYAY-/0/1765822503573?e=1770854400&v=beta&t=J3xkpedpuDVAEjuwkC-ORZq_EStLolU6Qr9Mu2OYWH8"
                  alt="Rishi Rohilla"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

          {/* 3D Animated Name */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-bold text-foreground relative">
                <motion.span
                  className="inline-block"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                  }}
                >
                  {"Rishi Rohilla".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.7 + i * 0.05,
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      whileHover={{
                        scale: 1.2,
                        color: "hsl(var(--primary))",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>

                

                {/* 3D Shadow Effect */}
                <motion.span
                  className="absolute inset-0 text-primary/30 blur-sm"
                  style={{
                    transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
                  }}
                  aria-hidden="true"
                >
                  Rishi Rohilla
                </motion.span>

              </h1>
            </motion.div>
          </div>

          {/* Animated Subtitle with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
          >
            <span className="text-muted-foreground">Crafting code, scaling ideas - a </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              tech-savvy
            </motion.span>
            <span className="text-muted-foreground"> creator from IIIT Lucknow</span>
          </motion.div>

          {/* Role Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {["Full Stack Developer", "Developer", "Problem Solver"].map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.1, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm text-sm font-medium text-foreground cursor-pointer"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Action Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl overflow-hidden bg-primary text-primary-foreground font-semibold transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <span className="relative flex items-center space-x-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl border-2 border-primary bg-card/50 backdrop-blur-sm text-foreground font-semibold transition-all duration-300 overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
              }}
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center space-x-2">
                <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                <span>View Projects</span>
              </span>
            </motion.button>
          </motion.div> */}

          {/* 3d actions buttons */}
          {/* 3D Action Buttons */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8, duration: 0.8 }}
  className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
>
  {/* View Resume */}
  <motion.a
    href="https://drive.google.com/file/d/1B8tpAMh_2fKKuHYv5Qy7nmI3iHl8cBS7/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="group relative px-8 py-4 rounded-xl overflow-hidden bg-primary text-primary-foreground font-semibold transition-all duration-300"
    style={{
      transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
    }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
      animate={{ x: ["-100%", "100%"] }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
    <span className="relative flex items-center space-x-2">
      <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      <span>View Resume</span>
    </span>
  </motion.a>

  {/* View Projects (GitHub) */}
  <motion.a
    href="https://github.com/rishirohilla"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="group relative px-8 py-4 rounded-xl border-2 border-primary bg-card/50 backdrop-blur-sm text-foreground font-semibold transition-all duration-300 overflow-hidden"
    style={{
      transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
    }}
  >
    <motion.div
      className="absolute inset-0 bg-primary/10"
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 2, opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
    <span className="relative flex items-center space-x-2">
      <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      <span>View Projects</span>
    </span>
  </motion.a>
</motion.div>


          {/* Scroll Indicator with 3D Effect */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToNext}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-2"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2"
                whileHover={{ borderColor: "hsl(var(--accent))" }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
    </section>
  )
}
