"use client"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import { useTheme } from "@/app/contexts/ThemeContext" // Adjust path as needed
import ThemeToggleButton from "../ThemeToggle" // Adjust path as needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef(null)
  const { isDarkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Simple, professional header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 },
    )
  }, [])

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#buysubscription" },
    { name: "Features", href: "#features" },
    { name: "Blogs", href: "#blogs" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <nav
      ref={headerRef}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? "bg-black/80 backdrop-blur-md border-b border-white/10" 
            : "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={isDarkMode ? "/logowhite.png" : "/logoblack.png"}
                alt="Logo"
                className="h-10 lg:h-12 w-auto transition-opacity duration-200 hover:opacity-80"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggleButton 
              isDarkMode={isDarkMode} 
              toggleTheme={toggleTheme}
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggleButton 
              isDarkMode={isDarkMode} 
              toggleTheme={toggleTheme}
              className="w-10 h-10"
            />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-200 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-200 translate-y-2.5 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-200 ${
                    isMobileMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className={`py-6 space-y-1 border-t ${
            isDarkMode ? 'border-white/10' : 'border-gray-200/50'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header