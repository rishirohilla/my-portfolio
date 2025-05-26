"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rishirohilla",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rishirohilla88",
    label: "LinkedIn",
  },

]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Rishi Rohilla</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
            A tech enthusiast and passionate competitive programme
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-background rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Rishi Rohilla
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} Rishi Rohilla. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
