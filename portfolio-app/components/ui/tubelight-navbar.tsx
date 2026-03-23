"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll spy to update active tab
  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll spy during programmatic scrolling
      if (isScrolling) return

      const sections = items.map((item) => {
        const id = item.url.startsWith("#") ? item.url.slice(1) : ""
        return {
          name: item.name,
          element: id ? document.getElementById(id) : null,
        }
      })

      const scrollPosition = window.scrollY + 100 // Offset for fixed navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const offsetTop = section.element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveTab(section.name)
            break
          }
        }
      }
    }

    handleScroll() // Check on mount
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items, isScrolling])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[9999] mb-6 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-white border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault()
            setActiveTab(item.name)
            setIsScrolling(true)

            // Smooth scroll to section
            if (item.url.startsWith("#")) {
              const sectionId = item.url.slice(1)
              const element = document.getElementById(sectionId)
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              } else if (sectionId === "") {
                // Scroll to top for home
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }

            // Re-enable scroll spy after scroll animation completes
            setTimeout(() => {
              setIsScrolling(false)
            }, 1000)
          }

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={handleClick}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-gray-700 hover:text-primary",
                isActive && "bg-gray-100 text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10 pointer-events-none"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full pointer-events-none">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2 pointer-events-none" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 pointer-events-none" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2 pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
