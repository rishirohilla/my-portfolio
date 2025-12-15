"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Began my coding journey at IIIT Lucknow",
    company: "Indian Institute of Information Technology Lucknow",
    location: "Lucknow, Uttar Pradesh",
    period: "Nov 2022 - June 2026",
    description: [
      "Discovered a deep interest in problem-solving and technology while pursuing B.Tech in CS & Business.",
    ],
    technologies: [],
  },
  {
    title: "Competitive Programming Enthusiast",
    company: "Codeforces",
    location: "Online (Codeforces, CodeChef, LeetCode)",
    period: "Nov 2022 - Present",
    description: [
      "Over the past few years, I’ve built the habit of solving competitive programming problem, maintained a 300+ day streak across platforms like Codeforces, CodeChef, and LeetCode. This daily practice has shaped the way I think, improving problem-solving skills, consistency, and the ability to learn something new every single day.",
    ],
    technologies: [
      "C++ (STL)",
      "Data Structures (Arrays, Trees, Graphs, Heaps)",
      "Algorithms (DP, Greedy, Graph Algorithms)",
      "Number Theory",
      "Bit Manipulation",
      "Binary Search",
      "Two Pointers",
    ],
  },
  {
    title: "Full Stack Engineering Intern",
    company: "Innomatics Research Labs",
    location: "Remote (India)",
    period: "Jan 2025 - Mar 2025",
    description: [
      "Hi Developed and maintained full-stack web applications using modern technologies including React.js, Node.js, Ex- press.js, and MongoDB. Built responsive and dynamic user interfaces with React.js, enhancing interactivity and im- proving user experience across modules. Implemented user authentication and authorization using JWT and OAuth2.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDb", "OAuth2"],
  },
  {
    title: "Evolving as a Full-Stack Developer",
    company: "Web Development",
    location: "Self-Directed (Remote)",
    period: "Nov 2022 - Present",
    description: [
      "Exploring Next.js, AI APIs & modern architectures to craft human-centered digital experiences.",
    ],
    technologies: ["React", "Node.js", "JavaScript", "Next.js", "Redux"],
  },
  {
    title: "Hacktoberfest Contributor",
    company: "Open Source Projects",
    location: "Remote",
    period: "October 2023",
    description: [
      "Contributed to multiple open source projects during Hacktoberfest 2023",
      "Implemented features and fixed bugs in various repositories",
      "Collaborated with maintainers and community members to improve project documentation",
      "Gained experience in version control and collaborative development",
    ],
    technologies: ["Git", "JavaScript", "Python", "HTML", "CSS", "React"],
  },

]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
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
            {"<experience>"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            JOURNEY TIMELINE
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
              </motion.div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{experience.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
