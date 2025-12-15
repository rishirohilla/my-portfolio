// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
// import { HolographicCard } from "@/components/holographic-card"

// const contactMethods = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "rishirohilla14@gmail.com",
//     href: "rishirohilla14@gmail.com",
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+91 8078607075",
//     href: "+91 8078607075",
//   },
// ]

// const socialLinks = [
//   { icon: Github, href: "https://github.com/rishirohilla", label: "GitHub" },
//   { icon: Linkedin, href: "https://linkedin.com/in/rishirohilla88", label: "LinkedIn" },
// ]

// export function ContactPortal() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     setFormData({ name: "", email: "", message: "" })
//     setIsSubmitting(false)
//   }

//   return (
//     <section id="contact" className="py-32 relative">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="inline-block text-cyan-400 font-mono text-sm tracking-wider mb-4"
//           >
//             {"<contact>"}
//           </motion.div>

//           <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             INITIATE CONNECTION
//           </h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 max-w-3xl mx-auto"
//           >
//             Ready to bring your ideas to life? Let's create something extraordinary together.
//           </motion.p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <HolographicCard className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <textarea
//                     name="message"
//                     placeholder="Your Message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
//                   />
//                 </div>
//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   data-cursor-hover
//                 >
//                   {isSubmitting ? (
//                     <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       <span>Launch Message</span>
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             </HolographicCard>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <HolographicCard className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactMethods.map((method, index) => (
//                   <motion.div
//                     key={method.label}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.5 }}
//                     viewport={{ once: true }}
//                     className="flex items-center space-x-4 group"
//                   >
//                     <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       <method.icon className="w-6 h-6 text-cyan-400" />
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">{method.label}</p>
//                       {method.href !== "#" ? (
//                         <a
//                           href={method.href}
//                           className="text-white font-medium hover:text-cyan-400 transition-colors"
//                           data-cursor-hover
//                         >
//                           {method.value}
//                         </a>
//                       ) : (
//                         <p className="text-white font-medium">{method.value}</p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </HolographicCard>

            // <HolographicCard className="p-8">
            //   <h3 className="text-2xl font-bold text-white mb-8">Connect Online</h3>
            //   <div className="flex space-x-4">
            //     {socialLinks.map((social, index) => (
            //       <motion.a
            //         key={social.label}
            //         href={social.href}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
            //         initial={{ opacity: 0, scale: 0.5 }}
            //         whileInView={{ opacity: 1, scale: 1 }}
            //         transition={{ delay: index * 0.1, duration: 0.5 }}
            //         viewport={{ once: true }}
            //         whileHover={{ y: -5 }}
            //         data-cursor-hover
            //       >
            //         <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
            //       </motion.a>
            //     ))}
            //   </div>
            // </HolographicCard>

//             {/* Availability Status */}
//             {/* <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <HolographicCard className="p-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
//                   <span className="text-white font-medium">Available for new projects</span>
//                 </div>
//                 <p className="text-gray-400 text-sm mt-2">Currently accepting freelance and full-time opportunities</p>
//               </HolographicCard>
//             </motion.div> */}
//           </motion.div>
//         </div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mt-20 pt-12 border-t border-white/10"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-cyan-400 font-mono text-sm tracking-wider mb-8"
//           >
//             {"</contact>"}
//           </motion.div>

//           <p className="text-gray-400 mb-4">© 2025 Rishi Rohilla. Crafted with passion and cutting-edge technology.</p>
//           <p className="text-gray-500 text-sm">Built with Next.js, TypeScript, Framer Motion, and a lot of ☕</p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// ndw code->   


// FILE: app/components/ContactPortal.tsx
// React client component (use this to replace your existing ContactPortal)

"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone } from "lucide-react"
import { Github, Linkedin } from "lucide-react"
import { HolographicCard } from "@/components/holographic-card"
const socialLinks = [
  { icon: Github, href: "https://github.com/rishirohilla", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/rishirohilla88", label: "LinkedIn" },
]

type FormState = {
  name: string
  email: string
  message: string
  company?: string // honeypot field
}

export function ContactPortal() {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "", company: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>(
    { type: "idle" }
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "idle" })

    // basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill all required fields." })
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to send message")
      }

      setStatus({ type: "success", message: "Message sent — I will get back to you soon!" })
      setFormData({ name: "", email: "", message: "", company: "" })
    } catch (err: any) {
      console.error("Contact send error:", err)
      setStatus({ type: "error", message: err?.message || "Something went wrong. Try again later." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 relative">
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
            {"<contact>"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            INITIATE CONNECTION
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HolographicCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Honeypot: bots often fill this; humans won't because we hide it */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Launch Message</span>
                    </>
                  )}
                </motion.button>

                {status.type === "success" && (
                  <p className="text-green-400 text-sm">{status.message}</p>
                )}
                {status.type === "error" && (
                  <p className="text-red-400 text-sm">{status.message}</p>
                )}
              </form>
            </HolographicCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <HolographicCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:rishirohilla14@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors" data-cursor-hover>
                      rishirohilla14@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 8078607075</p>
                  </div>
                </div>
              </div>
            </HolographicCard>

            <HolographicCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Connect Online</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    data-cursor-hover
                  >
                    <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </HolographicCard>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-sm tracking-wider mb-8"
          >
            {"</contact>"}
          </motion.div>

          <p className="text-gray-400 mb-4">© 2025 Rishi Rohilla. Crafted with intent, patience, and precision — much like a good innings. Built with modern web technologies including Next.js, TypeScript, and Framer Motion, and fueled by curiosity, music in the background, and countless cups of coffee.</p>
          {/* <p className="text-gray-500 text-sm">Built with Next.js, TypeScript, Framer Motion, and a lot of ☕</p> */}
        </motion.div>
      </div>
    </section>
  )
}
