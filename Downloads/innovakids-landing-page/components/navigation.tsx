"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const { scrollY } = useScroll()
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(3, 7, 18, 0)", "rgba(3, 7, 18, 0.95)"]
  )
  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  )
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(77, 208, 225, 0)", "rgba(77, 208, 225, 0.1)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ["programa", "metodologia", "testimonios", "precio"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const calendlyUrl =
    "https://calendly.com/innovakidslatam/reunion-informativa-innovakids?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=4dd0e1"

  const navLinks = [
    { href: "/#programa", label: "El Programa", section: "programa" },
    { href: "/metodologia-aprender-creando", label: "Metodología", section: "metodologia" },
    { href: "/#testimonios", label: "Resultados", section: "testimonios" },
    { href: "/blog", label: "Blog", section: "blog" },
  ]

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: navBlur,
        borderBottomColor: navBorder,
      }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${isScrolled ? "shadow-lg shadow-primary/5" : ""
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with subtle glow on hover */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Image
              src="/logo-innovakids-v4.png"
              alt="Innovakids"
              width={240}
              height={80}
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm xl:text-base text-white hover:text-primary font-medium transition-colors group ${activeSection === link.section ? "text-primary" : ""
                    }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                  {/* Animated underline - always visible when active */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-[#8b5cf6]"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === link.section ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Active dot indicator */}
                  {activeSection === link.section && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                asChild
                className="magnetic-btn relative overflow-hidden bg-gradient-to-r from-primary to-[#26C6DA] hover:from-[#26C6DA] hover:to-primary text-[#0a1628] px-5 py-2 xl:px-6 xl:py-3 font-bold text-xs xl:text-sm uppercase tracking-wide rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 hidden lg:inline">AGENDAR EVALUACIÓN</span>
                  <span className="relative z-10 lg:hidden">AGENDAR</span>
                  <span className="absolute inset-0 shimmer opacity-0 hover:opacity-100" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-primary/10"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`font-medium transition-colors py-3 px-4 rounded-lg min-h-[44px] flex items-center ${activeSection === link.section
                    ? "text-primary bg-primary/10"
                    : "text-white hover:text-primary hover:bg-primary/5"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {activeSection === link.section && (
                    <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                  )}
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-[#26C6DA] hover:from-[#26C6DA] hover:to-primary text-[#0a1628] w-full font-bold uppercase tracking-wide mt-2 py-6 text-base min-h-[56px] rounded-xl"
                >
                  <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    AGENDAR EVALUACIÓN
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
