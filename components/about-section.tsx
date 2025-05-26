"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Globe } from "lucide-react"
import { HolographicCard } from "@/components/holographic-card"

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Blending aesthetics with functionality to create memorable user experiences.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing every aspect for lightning-fast load times and smooth interactions.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building solutions that reach and positively impact users worldwide.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
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
            {"<about>"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            CRAFTING THE FUTURE
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A tech enthusiast and passionate competitive programmer, currently pursuing a B.Tech in Computer Science at IIIT Lucknow. As a Full-Stack Web Developer, I thrive on turning challenges into opportunities to innovate, solve real-world problems, and deliver impactful solutions. With a strong foundation in data structures, algorithms, and cloud technologies, I enjoy building scalable web applications and continuously expanding my skill set in AI, blockchain, and modern software development.A tech enthusiast and passionate competitive programmer, currently pursuing a B.Tech in Computer Science at IIIT Lucknow. As a Full-Stack Web Developer, I thrive on turning challenges into opportunities to innovate, solve real-world problems, and deliver impactful solutions. With a strong foundation in data structures, algorithms, and cloud technologies, I enjoy building scalable web applications and continuously expanding my skill set in AI, blockchain, and modern software development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-sm tracking-wider mt-8"
          >
            {"</about>"}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <HolographicCard className="h-full p-8 text-center group cursor-pointer" data-cursor-hover>
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
