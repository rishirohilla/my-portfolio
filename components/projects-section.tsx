"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Play } from "lucide-react"
import { HolographicCard } from "@/components/holographic-card"

const projects = [
  {
    title: "BlockPitch",
    description: ["Developed a Next.js-based platform connecting startups and investors, enabling seamless funding opportunities with AI-driven (TensorFlow/OpenAI) risk assessment,automate investment agreements and fund disbursements","Leveraged blockchain (Ethereum, Solidity, IPFS) for secure and transparent transactions, ensuring trust between in- vestors and startups, Designed a dynamic investor dashboard featuring interactive data visualizations."],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Node.js", "Ethereum", "Solidity", "AI", "WebRTC"],
    github: "https://github.com/capsy14/BlockPitch",
    featured: false,
  },
  {
    title: "DesTecho",
    description: ["Developed a full-stack design marketplace inspired by Dribbble, enabling users to upload, explore, and interact with creative projects. Managed the upload and display of UI/UX designs on the marketplace, offering a diverse range of options for users to explore and purchase","Implemented a subscription model granting access to premium designs, allowing users to stay updated with the latest trends. Integrated secure user authentication using Firebase, and implemented a subscription-based access model for premium UI/UX designs."],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React.js", "Node.js", "Express.js", "FireBase", "Stripe"],
    github: "https://github.com/rishirohilla/Destecho.",
    featured: false,
  },
  {
    title: "Nestopia",
    description: ["Created a Integrative design market place website that streamlined property transactions, enabling users toe ffortlessly buy and sell properties, resulting in a 25% reduction in transaction time and a 30% increase in successful deals, while securing optimal deals and achieving superior market outcomes.", "Implemented advanced search and filter functionalities, allowing users to quickly find properties that match their criteria,increasing search efficiency by 40% and leading to higher market success."],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "MongoDB", "Node.js", "Express.js", "Firebase"],
    github: "https://github.com/rishirohilla/estate-project-rishi",
    featured: false,
  },
  
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
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
            {"<projects>"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            DIGITAL CREATIONS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <HolographicCard className="group overflow-hidden h-full">
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-cursor-hover
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      {/* <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-cursor-hover
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a> */}
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors group"
                        whileHover={{ x: 5 }}
                        data-cursor-hover
                      >
                        <Play className="w-4 h-4" />
                        <span>View Project</span>
                      </motion.button>
                    </div>
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <HolographicCard className="group p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          data-cursor-hover
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        {/* <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          data-cursor-hover
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a> */}
                      </div>
                    </div>
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
