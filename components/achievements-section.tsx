"use client"

import { motion } from "framer-motion"
import { Award, Users, Code, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  
  {
    icon: Code,
    title: "Expert @Codeforces",
    description: "Secured a top rating of 1668 on Codeforces as a Expert (Solved Over 1000 questions).",
    year: "2025",
  },
  {
    icon: Code,
    title: "4Star @Codechef",
    description: "Attained a peak rating of 1832 on Codechef as a 4-Star coder.",
    year: "2024",
  },
  {
    icon: Code,
    title: "Problem Solved",
    description: "Solved over 1800 questions on coding platforms such as Codeforces, LeetCode, Codechef, Code360.",
    year: "2022-2025",
  },
  {
    icon: Code,
    title: "Knight @LeetCode",
    description: "Max Rated as Knight at Leetcode, (Max Rating 1926).",
    year: "2024",
  },
  {
    icon: Code,
    title: "Contest 1",
    description: "Ranked 100 among 45k participants in Codeforces Round 1016(Div 3).",
    year: "2024",
  },
  {
    icon: Code,
    title: "Contest 2",
    description: "Achieved Global rank 33 in Codechef Starters 167 out of 15K participants.",
    year: "2024",
  },
  {
    icon: Award,
    title: "Google",
    description: "Completed Google Student Upskilling Launchpad Program.",
    year: "2025",
  },
  {
    icon: Star,
    title: "GitHub",
    description: "Completed Hactoberfest 2023 with 4 merge/pull requests.",
    year: "2023",
  },
]

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "Python", "FastAPI", "FireBase"],
  Database: ["PostgreSQL", "MongoDB", "SQL", "Spring Boot"],
  "Tools & Others": [ "C++", "C", "Java", "Python","Git", "Docker", "AWS", "Vercel", "Figma",],
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements & Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and the technologies I work with to build amazing projects.
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8"
          >
            Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit">
                      <achievement.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <p className="text-xs text-blue-600 font-medium">{achievement.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-center">{category}</h4>
                    <div className="space-y-2">
                      {technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="text-sm text-muted-foreground text-center py-1 px-2 bg-muted rounded"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
