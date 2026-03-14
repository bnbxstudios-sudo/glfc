import { Linkedin } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-2xl tracking-tight">GLFC</span>
            </div>
            <p className="text-white/40 font-sans text-xs uppercase tracking-widest">
              Logistics Freight Consultants
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#leadership", label: "Expertise" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 font-sans text-xs hover:text-primary transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GLFC on LinkedIn"
              className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-sans text-xs">
            &copy; {year} Gale Lotheringen Freight Consultants. All rights reserved.
          </p>
          <p className="text-white/20 font-sans text-xs">
            Your Logistical Gateway to Africa and the World
          </p>
        </div>
      </div>
    </footer>
  )
}
