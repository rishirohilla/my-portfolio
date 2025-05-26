"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download, ExternalLink } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { HolographicCard } from "@/components/holographic-card"

export function HeroSection() {
  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 border-2 border-purple-400/40"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Glitch effect name */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-cyan-400 font-mono text-lg tracking-wider"
            >
              {"<Competitive Programmer>"}
            </motion.div>

            {/* Avatar Image */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-lg shadow-cyan-500/30 animate-pulse bg-gradient-to-br from-cyan-800/20 to-purple-800/20">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQFOu20VPwdbAg/profile-displayphoto-shrink_400_400/B56ZUpmKexHsAg-/0/1740159630418?e=1753920000&v=beta&t=oXQsTDCTgj0scwgh0ZYwVdCyP9xj0C9ctGCNpvWo_NE"
                  alt="Rishi Rohilla"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Name */}
            <GlitchText text="Rishi Rohilla" className="text-6xl md:text-8xl font-orbitron font-bold" />


            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-cyan-400 font-mono text-lg tracking-wider"
            >
              {"</developer>"}
            </motion.div>
          </div>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting code, scaling ideas - a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
            tech-savvy
            </span>{" "}
             creator from IIIT Lucknow
          </motion.div>

          {/* Holographic cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            {/* View Resume Card */}
            <a
              href="https://drive.google.com/file/d/1Zt8MTpSfCHDV-B1PMVpbQoNK6As4BN2G/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
              data-cursor-hover
            >
              <HolographicCard>
                <div className="flex items-center space-x-3 p-6">
                  <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
                  <span className="font-medium">View Resume</span>
                </div>
              </HolographicCard>
            </a>

            {/* View Projects Card */}
            {/* View Projects */}
            <a
              href="https://github.com/rishirohilla"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
              data-cursor-hover
            >
              <HolographicCard>
                <div className="flex items-center space-x-3 p-6">
                  <ExternalLink className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />
                  <span className="font-medium">View Projects</span>
                </div>
              </HolographicCard>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToNext}
            data-cursor-hover
          >
            {/* <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <span className="text-sm font-mono">scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
