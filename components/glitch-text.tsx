"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    let interval: NodeJS.Timeout

    const glitch = () => {
      let iterations = 0
      interval = setInterval(() => {
        setGlitchText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return text[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )

        if (iterations >= text.length) {
          clearInterval(interval)
          setGlitchText(text)
        }

        iterations += 1 / 3
      }, 30)
    }

    const timeout = setTimeout(glitch, 1000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text])

  return (
    <motion.h1
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{glitchText}</span>
      <motion.span
        className="absolute inset-0 text-cyan-400"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0, 1, 0, 1, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-purple-400"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 1, 0, 1, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
          delay: 0.1,
        }}
      >
        {text}
      </motion.span>
    </motion.h1>
  )
}
