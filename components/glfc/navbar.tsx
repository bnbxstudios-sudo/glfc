"use client"

import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#leadership", label: "Expertise" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="GLFC Home">
          <span className="text-primary font-bold text-xl tracking-tight leading-none">GLFC</span>
          <span className="hidden sm:block h-5 w-px bg-primary/40 mx-1" aria-hidden="true" />
          <span className="hidden sm:block text-xs text-white/70 font-sans uppercase tracking-widest leading-tight">
            Freight<br />Consultants
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/75 hover:text-primary transition-colors font-sans tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-primary text-primary-foreground px-4 py-2 font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-secondary border-t border-white/10 px-6 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/80 hover:text-primary transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm bg-primary text-primary-foreground px-4 py-2 font-medium text-center hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  )
}
