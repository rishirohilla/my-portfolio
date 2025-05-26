"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface HolographicCardProps {
  children: React.ReactNode
  className?: string
}

export function HolographicCard({ children, className = "" }: HolographicCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Holographic effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-cyan-400/50 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse" />
      </div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
