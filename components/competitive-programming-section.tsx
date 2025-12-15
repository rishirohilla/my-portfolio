// "use client"

// import { motion } from "framer-motion"
// import { ExternalLink, Trophy, Target, Code } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// const platforms = [
//   {
//     name: "Codeforces",
//     handle: "rishirohilla12",
//     rating: 1671,
//     maxRating: 1671,
//     rank: "Expert",
//     color: "text-blue-600",
//     url: "https://codeforces.com/profile/rishirohilla12",
//     icon: Code,
//   },
//   {
//     name: "LeetCode",
//     handle: "DarkChemist",
//     rating: 1926,
//     maxRating: 1926,
//     rank: "Knight",
//     color: "text-orange-600",
//     url: "https://leetcode.com/u/DarkChemist/",
//     icon: Target,
//   },
//   {
//     name: "CodeChef",
//     handle: "rishirohilla05",
//     rating: 1832,
//     maxRating: 1832,
//     rank: "4 Star",
//     color: "text-yellow-600",
//     url: "https://codechef.com/users/rishirohilla05",
//     icon: Trophy,
//   },
// ]

// const achievements = [
//   "Solved 1800+ problems across various platforms",
//   "Ranked 100 among 45k participants in Codeforces Round 1016(Div 3).",
//   "Consistent participation in weekly contests",
//   "Strong problem-solving skills in algorithms and data structures",
//   "Ranked 1115 among 30k participants in Codeforces Round 982(Div 2).",
//   "Achieved Global rank 33 in Codechef Starters 167 out of 15K participants.",
//   "Achieved Global rank 33 in Codechef Starters 167 out of 15K participants.",
//   "Completed Hactoberfest’2023 with 4 merge/pull requests.",
//   "Selected for Hack The Mountains 4.0 (Hackathon 2023).",
// ]

// export function CompetitiveProgrammingSection() {
//   return (
//     <section id="competitive-programming" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Competitive Programming</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             My journey in competitive programming and problem-solving across various platforms.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {platforms.map((platform, index) => (
//             <motion.div
//               key={platform.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full">
//                 <CardHeader className="text-center">
//                   <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
//                     <platform.icon className={`h-8 w-8 ${platform.color}`} />
//                   </div>
//                   <CardTitle className="text-xl">{platform.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center space-y-4">
//                   <div>
//                     <p className="text-sm text-muted-foreground">Handle</p>
//                     <p className="font-mono font-semibold">{platform.handle}</p>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-muted-foreground">Current</p>
//                       <p className={`text-lg font-bold ${platform.color}`}>{platform.rating}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-muted-foreground">Max</p>
//                       <p className="text-lg font-bold text-muted-foreground">{platform.maxRating}</p>
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-sm text-muted-foreground">Rank</p>
//                     <p className={`font-semibold ${platform.color}`}>{platform.rank}</p>
//                   </div>

//                   <Button variant="outline" className="w-full" onClick={() => window.open(platform.url, "_blank")}>
//                     <ExternalLink className="mr-2 h-4 w-4" />
//                     View Profile
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-center">Key Achievements</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid md:grid-cols-2 gap-4">
//                 {achievements.map((achievement, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-start space-x-3"
//                   >
//                     <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2" />
//                     <p className="text-muted-foreground">{achievement}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// new code->   

"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ExternalLink, Trophy, Code, Target, Zap, Flame, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const platforms = [
  {
    name: "Codeforces",
    handle: "rishirohilla12",
    rating: 1672,
    maxRating: 1672,
    rank: "Expert",
    color: "from-blue-500 to-cyan-500",
    url: "https://codeforces.com/profile/rishirohilla12",
    icon: Code,
    solved: 1200,
    contests: 30,
  },
  {
    name: "LeetCode",
    handle: "DarkChemist",
    rating: 1926,
    maxRating: 1926,
    rank: "Knight",
    color: "from-orange-500 to-yellow-500",
    url: "https://leetcode.com/u/DarkChemist/",
    icon: Target,
    solved: 500,
    contests: 5,
  },
  {
    name: "CodeChef",
    handle: "rishirohilla05",
    rating: 1832,
    maxRating: 1832,
    rank: "4 Star",
    color: "from-purple-500 to-pink-500",
    url: "https://codechef.com/users/rishirohilla05",
    icon: Trophy,
    solved: 50,
    contests: 20,
  },
]

const stats = [
  { label: "Total Problems", value: 2000, icon: Code, color: "text-blue-500" },
  { label: "Contest Participated", value: 50, icon: Trophy, color: "text-yellow-500" },
  { label: "Max Day Streak", value: 300, icon: Flame, color: "text-orange-500" },
  { label: "Best GLobal Rank", value: 33, icon: Star, color: "text-purple-500" },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, value, { duration })
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest))
    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [value, duration, count, rounded])

  return <span>{displayValue.toLocaleString()}</span>
}

export function CompetitiveProgrammingSection() {
  const [selectedPlatform, setSelectedPlatform] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="competitive-programming" className="py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
              <Award className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Battle-tested skills across top coding platforms. Here's my competitive programming journey.
          </p>
        </motion.div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Cards with 3D Effect */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            const isHovered = hoveredCard === index

            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{ perspective: 1000 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedPlatform(index)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                />

                {/* Card */}
                <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 h-full overflow-hidden">
                  {/* Animated corner accent */}
                  <motion.div
                    animate={{ rotate: isHovered ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-10 rounded-bl-full`}
                  />

                  {/* Platform Icon */}
                  <div className="relative flex items-center justify-center mb-6">
                    <motion.div
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                      className={`p-4 bg-gradient-to-br ${platform.color} rounded-2xl shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-2xl font-bold text-center mb-2">{platform.name}</h3>
                  <p className="text-center text-sm opacity-70 font-mono mb-6">{platform.handle}</p>

                  {/* Stats Grid */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-70">Current Rating</span>
                      <span
                        className={`text-xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}
                      >
                        {platform.rating}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-70">Max Rating</span>
                      <span className="text-lg font-semibold">{platform.maxRating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-70">Rank</span>
                      <span className={`font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                        {platform.rank}
                      </span>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="flex justify-between text-xs opacity-70 mb-1">
                        <span>Problems Solved</span>
                        <span>{platform.solved}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(platform.solved / 1500) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${platform.color}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs opacity-70 mb-1">
                        <span>Contests</span>
                        <span>{platform.contests}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(platform.contests / 100) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${platform.color}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full group/btn relative overflow-hidden bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(platform.url, "_blank")
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Profile
                    </span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover/btn:opacity-20 transition-opacity`}
                    />
                  </Button>

                  {/* Floating particles */}
                  {isHovered && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: [0, 1, 0], y: -100 }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className={`absolute bottom-0 left-[${20 + i * 30}%] w-2 h-2 bg-gradient-to-r ${platform.color} rounded-full`}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl" />
          <div className="relative bg-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-center">Key Achievements</h3>
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Secured Global Rank 100 out of 45,000+ participants in Codeforces Round 1016 (Div. 3).",
                "Ranked 1115 among 30,000+ participants in Codeforces Round 982 (Div. 2), showcasing speed and accuracy.",
                "Achieved Global Rank 33 out of 15,000+ participants in Codechef Starters 167 and Global Rank 64 in Starters 156.",
                "Specialized in dynamic programming, graph algorithms, and data structures",
                "Solved over 1800+ problems across leading coding platforms such as Codeforces, LeetCode, Codechef.",
                "Achieved a top rating of 1668 on Codeforces, earning the title of Expert, and solved over 1200 problems.",
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className="flex-shrink-0 w-6 h-6 mt-1 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                  <p className="opacity-80 group-hover:opacity-100 transition-opacity">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
