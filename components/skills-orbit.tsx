// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// const skills = [
//   { name: "React", color: "from-blue-400 to-cyan-400" },
//   { name: "C++", color: "from-blue-400 to-cyan-400" },
//   { name: "C", color: "from-blue-400 to-cyan-400" },
//   { name: "Next.js", color: "from-gray-400 to-white" },
//   { name: "TypeScript", color: "from-blue-600 to-blue-400" },
//   { name: "Node.js", color: "from-green-400 to-emerald-400" },
//   { name: "Python", color: "from-yellow-400 to-orange-400" },
//   { name: "PostgreSQL", color: "from-blue-500 to-indigo-500" },
//   { name: "AWS", color: "from-orange-400 to-yellow-400" },
//   { name: "Docker", color: "from-blue-400 to-blue-600" },
// ]

// export function SkillsOrbit() {
//   const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

//   return (
//     <section id="skills" className="py-32 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4"
//           >
//             {"<skills>"}
//           </motion.div>

//           <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             TECH UNIVERSE
//           </h2>
//         </motion.div>

//         <div className="relative flex items-center justify-center min-h-[600px]">
//           {/* Central core */}
//           <motion.div
//             className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 backdrop-blur-md border border-white/20 flex items-center justify-center z-10"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//           >
//             <div className="text-center">
//               <div className="text-cyan-400 font-mono text-xs mb-1">CORE</div>
//               <div className="text-white font-semibold text-sm">TECH</div>
//             </div>
//           </motion.div>

//           {/* Orbiting skills */}
//           {skills.map((skill, index) => {
//             const angle = (index / skills.length) * 360
//             const radius = 200

//             return (
//               <motion.div
//                 key={skill.name}
//                 className="absolute"
//                 style={{
//                   x: Math.cos((angle * Math.PI) / 180) * radius,
//                   y: Math.sin((angle * Math.PI) / 180) * radius,
//                 }}
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 30 + index * 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "linear",
//                 }}
//               >
//                 <motion.div
//                   className="relative group cursor-pointer"
//                   onHoverStart={() => setHoveredSkill(skill.name)}
//                   onHoverEnd={() => setHoveredSkill(null)}
//                   whileHover={{ scale: 1.2 }}
//                   data-cursor-hover
//                 >
//                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
//                     <div className="text-white font-semibold text-xs text-center">
//                       {skill.name}
//                     </div>
//                   </div>

//                   {/* Tooltip */}
//                   {hoveredSkill === skill.name && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
//                     >
//                       {skill.name}
//                     </motion.div>
//                   )}
//                 </motion.div>
//               </motion.div>
//             )
//           })}

//           {/* Orbit rings */}
//           <div className="absolute w-96 h-96 rounded-full border border-white/10" />
//           <div className="absolute w-80 h-80 rounded-full border border-white/5" />
//           <div className="absolute w-64 h-64 rounded-full border border-white/5" />
//         </div>
//       </div>
//     </section>
//   )
// }


// new code

"use client"

import type React from "react"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiPostgresql, SiTailwindcss, SiMongodb, SiGraphql } from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact, level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, level: 90, color: "from-slate-300 to-slate-600" },
  { name: "TypeScript", icon: SiTypescript, level: 88, color: "from-blue-400 to-blue-600" },
  { name: "Node.js", icon: FaNodeJs, level: 85, color: "from-green-400 to-green-600" },
  { name: "Python", icon: FaPython, level: 82, color: "from-yellow-400 to-blue-500" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "from-blue-400 to-indigo-500" },
  { name: "AWS", icon: FaAws, level: 75, color: "from-orange-400 to-yellow-500" },
  { name: "Docker", icon: FaDocker, level: 78, color: "from-blue-400 to-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, level: 92, color: "from-cyan-300 to-blue-400" },
  { name: "MongoDB", icon: SiMongodb, level: 83, color: "from-green-500 to-emerald-600" },
  { name: "GraphQL", icon: SiGraphql, level: 77, color: "from-pink-400 to-purple-500" },
  { name: "Git", icon: FaGitAlt, level: 89, color: "from-orange-500 to-red-500" },
]

export function SkillsOrbit() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<number>(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left - rect.width / 2) / 10)
    mouseY.set((event.clientY - rect.top - rect.height / 2) / 10)
  }

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          x: springX,
          y: springY,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          x: useTransform(springX, (x) => -x),
          y: useTransform(springY, (y) => -y),
        }}
      />

      <div className="max-w-7xl mx-auto px-4" onMouseMove={handleMouseMove}>
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
            className="inline-block text-primary font-mono text-sm tracking-wider mb-4"
          >
            {"<expertise />"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            NEURAL SKILLS MATRIX
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive 3D visualization of my technical expertise across multiple domains
          </p>
        </motion.div>

        {/* 3D Hexagonal Grid */}
        <div className="relative flex items-center justify-center min-h-[700px] perspective-[1000px]">
          <div className="relative w-full max-w-5xl">
            {/* Central display */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ x: springX, y: springY }}
            >
              <motion.div
                className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border-2 border-primary/30 shadow-2xl overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.3)",
                    "0 0 40px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--primary) / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Skill icon - Fixed dynamic icon rendering */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                  <motion.div
                    key={selectedSkill}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {(() => {
                      const SelectedIcon = skills[selectedSkill].icon
                      return <SelectedIcon className="w-24 h-24 mb-4 text-primary" />
                    })()}
                  </motion.div>

                  <motion.h3
                    key={`name-${selectedSkill}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-orbitron font-bold text-foreground mb-3"
                  >
                    {skills[selectedSkill].name}
                  </motion.h3>

                  {/* Progress bar */}
                  <div className="w-full bg-muted/30 rounded-full h-3 mb-2">
                    <motion.div
                      key={`progress-${selectedSkill}`}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${skills[selectedSkill].level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <motion.p
                    key={`level-${selectedSkill}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-primary font-mono text-lg"
                  >
                    {skills[selectedSkill].level}% Mastery
                  </motion.p>
                </div>

                {/* Scanning line effect */}
                <motion.div
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ y: [0, 256, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>
            </motion.div>

            {/* Hexagonal skill grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                const isSelected = index === selectedSkill

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group"
                    style={{ perspective: "1000px" }}
                  >
                    <motion.div
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                          : "border-border bg-card/50 backdrop-blur-sm hover:border-primary/50"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        rotateX: 5,
                        rotateY: 5,
                        z: 50,
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      onClick={() => setSelectedSkill(index)}
                      data-cursor-hover
                    >
                      {/* Icon */}
                      <motion.div
                        className="mb-3"
                        animate={isSelected ? { rotate: [0, 360] } : {}}
                        transition={{ duration: 2, repeat: isSelected ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
                      >
                        <Icon className="w-12 h-12 text-primary mx-auto" />
                      </motion.div>

                      {/* Name */}
                      <h4 className="text-center font-semibold mb-2 text-foreground">{skill.name}</h4>

                      {/* Mini progress */}
                      <div className="w-full bg-muted/30 rounded-full h-1.5">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>

                      {/* Level badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary flex items-center justify-center"
                        animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 1, repeat: isSelected ? Number.POSITIVE_INFINITY : 0 }}
                      >
                        <span className="text-xs font-bold text-primary">{skill.level}</span>
                      </motion.div>

                      {/* Glow effect on hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 -z-10 blur-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Connecting lines animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.line
              x1="50%"
              y1="50%"
              x2="20%"
              y2="20%"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.line
              x1="50%"
              y1="50%"
              x2="80%"
              y2="20%"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
