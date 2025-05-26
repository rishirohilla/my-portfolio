"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skills = [
  { name: "React", color: "from-blue-400 to-cyan-400" },
  { name: "C++", color: "from-blue-400 to-cyan-400" },
  { name: "C", color: "from-blue-400 to-cyan-400" },
  { name: "Next.js", color: "from-gray-400 to-white" },
  { name: "TypeScript", color: "from-blue-600 to-blue-400" },
  { name: "Node.js", color: "from-green-400 to-emerald-400" },
  { name: "Python", color: "from-yellow-400 to-orange-400" },
  { name: "PostgreSQL", color: "from-blue-500 to-indigo-500" },
  { name: "AWS", color: "from-orange-400 to-yellow-400" },
  { name: "Docker", color: "from-blue-400 to-blue-600" },
]

export function SkillsOrbit() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4"
          >
            {"<skills>"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            TECH UNIVERSE
          </h2>
        </motion.div>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central core */}
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 backdrop-blur-md border border-white/20 flex items-center justify-center z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="text-center">
              <div className="text-cyan-400 font-mono text-xs mb-1">CORE</div>
              <div className="text-white font-semibold text-sm">TECH</div>
            </div>
          </motion.div>

          {/* Orbiting skills */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360
            const radius = 200

            return (
              <motion.div
                key={skill.name}
                className="absolute"
                style={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30 + index * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="relative group cursor-pointer"
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.2 }}
                  data-cursor-hover
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <div className="text-white font-semibold text-xs text-center">
                      {skill.name}
                    </div>
                  </div>

                  {/* Tooltip */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                    >
                      {skill.name}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}

          {/* Orbit rings */}
          <div className="absolute w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute w-80 h-80 rounded-full border border-white/5" />
          <div className="absolute w-64 h-64 rounded-full border border-white/5" />
        </div>
      </div>
    </section>
  )
}
