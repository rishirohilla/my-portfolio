"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Check } from "lucide-react"

const themes = [
  { name: "light", label: "Light", colors: ["#ffffff", "#f1f5f9", "#0f172a"] },
  { name: "dark", label: "Dark", colors: ["#0f172a", "#1e293b", "#f1f5f9"] },
  { name: "cupcake", label: "Cupcake", colors: ["#faf7f5", "#e7e2df", "#291334"] },
  { name: "bumblebee", label: "Bumblebee", colors: ["#fffbeb", "#fef3c7", "#451a03"] },
  { name: "emerald", label: "Emerald", colors: ["#ecfdf5", "#a7f3d0", "#064e3b"] },
  { name: "corporate", label: "Corporate", colors: ["#ffffff", "#e5e7eb", "#1f2937"] },
  { name: "synthwave", label: "Synthwave", colors: ["#2a0845", "#7c3aed", "#fbbf24"] },
  { name: "retro", label: "Retro", colors: ["#fef3c7", "#f59e0b", "#7c2d12"] },
  { name: "cyberpunk", label: "Cyberpunk", colors: ["#0f0f23", "#06b6d4", "#8b5cf6"] },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-cursor-hover
      >
        <Palette className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

            {/* Theme Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute bottom-full mb-2 right-0 z-50 w-64 bg-popover border border-border rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-3 border-b border-border">
                <h3 className="font-semibold text-sm text-popover-foreground">Choose Theme</h3>
              </div>

              <div className="p-2 max-h-80 overflow-y-auto">
                {themes.map((themeOption) => (
                  <motion.button
                    key={themeOption.name}
                    onClick={() => {
                      setTheme(themeOption.name)
                      setIsOpen(false)
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                    whileHover={{ x: 5 }}
                    data-cursor-hover
                  >
                    <div className="flex items-center space-x-3">
                      {/* Theme Color Preview */}
                      <div className="flex space-x-1">
                        {themeOption.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full border border-border/50"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>

                      <span className="text-sm font-medium text-popover-foreground">{themeOption.label}</span>
                    </div>

                    {theme === themeOption.name && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-primary">
                        <Check className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
