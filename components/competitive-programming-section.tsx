"use client"

import { motion } from "framer-motion"
import { ExternalLink, Trophy, Target, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const platforms = [
  {
    name: "Codeforces",
    handle: "rishirohilla12",
    rating: 1671,
    maxRating: 1671,
    rank: "Expert",
    color: "text-blue-600",
    url: "https://codeforces.com/profile/rishirohilla12",
    icon: Code,
  },
  {
    name: "LeetCode",
    handle: "DarkChemist",
    rating: 1926,
    maxRating: 1926,
    rank: "Knight",
    color: "text-orange-600",
    url: "https://leetcode.com/u/DarkChemist/",
    icon: Target,
  },
  {
    name: "CodeChef",
    handle: "rishirohilla05",
    rating: 1832,
    maxRating: 1832,
    rank: "4 Star",
    color: "text-yellow-600",
    url: "https://codechef.com/users/rishirohilla05",
    icon: Trophy,
  },
]

const achievements = [
  "Solved 1800+ problems across various platforms",
  "Ranked 100 among 45k participants in Codeforces Round 1016(Div 3).",
  "Consistent participation in weekly contests",
  "Strong problem-solving skills in algorithms and data structures",
  "Ranked 1115 among 30k participants in Codeforces Round 982(Div 2).",
  "Achieved Global rank 33 in Codechef Starters 167 out of 15K participants.",
  "Achieved Global rank 33 in Codechef Starters 167 out of 15K participants.",
  "Completed Hactoberfest’2023 with 4 merge/pull requests.",
  "Selected for Hack The Mountains 4.0 (Hackathon 2023).",
]

export function CompetitiveProgrammingSection() {
  return (
    <section id="competitive-programming" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Competitive Programming</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in competitive programming and problem-solving across various platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                    <platform.icon className={`h-8 w-8 ${platform.color}`} />
                  </div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Handle</p>
                    <p className="font-mono font-semibold">{platform.handle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Current</p>
                      <p className={`text-lg font-bold ${platform.color}`}>{platform.rating}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Max</p>
                      <p className="text-lg font-bold text-muted-foreground">{platform.maxRating}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Rank</p>
                    <p className={`font-semibold ${platform.color}`}>{platform.rank}</p>
                  </div>

                  <Button variant="outline" className="w-full" onClick={() => window.open(platform.url, "_blank")}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
