"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Menu,
  X,
  Trophy,
  BrainCircuit,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Trophy, label: "Achievements", href: "#achievements" },
  { icon: BrainCircuit, label: "CP", href: "#competitive-programming" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function FloatingNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 md:hidden w-12 h-12 bg-card/80 backdrop-blur-md rounded-full border border-border flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Desktop Floating Navigation */}
      <motion.nav
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 1 }}
  className="fixed right-8 top-10 bottom-10 z-40 hidden md:flex flex-col justify-between"
>

<div className="flex-1 bg-card/80 backdrop-blur-md rounded-2xl border border-border p-2 flex flex-col justify-between">

          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`relative w-12 h-12 rounded-xl mb-2 flex items-center justify-center transition-all duration-300 group ${
                activeSection === item.href.slice(1)
                  ? "bg-primary/20 text-primary"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-cursor-hover
            >
              <item.icon className="w-5 h-5" />
              <motion.div
                className="absolute right-full mr-3 px-2 py-1 bg-popover border border-border text-popover-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                initial={{ x: 10 }}
                whileHover={{ x: 0 }}
              >
                {item.label}
              </motion.div>
            </motion.button>
          ))}

          {/* Theme Toggle */}
          <div className="mt-2 pt-2 border-t border-border">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-card/90 backdrop-blur-md border-l border-border p-6"
            >
              <div className="mt-16 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}

                {/* Mobile Theme Toggle */}
                <div className="pt-4 border-t border-border">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
