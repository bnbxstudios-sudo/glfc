export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80')`,
        }}
        role="img"
        aria-label="Container ships in port representing global freight logistics"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-secondary/60" aria-hidden="true" />

      {/* Orange left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center md:text-left">
        <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
          Import &amp; Export Logistics
        </p>
        <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance mb-6">
          Your Logistical Gateway<br className="hidden md:block" /> to Africa and the World
        </h1>
        <p className="text-white/70 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
          Gale Lotheringen Freight Consultants provides personalised import and export logistics support,
          helping companies navigate international trade efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-sans font-medium px-8 py-3 text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="mailto:info@glfc.co.za"
            className="border border-white/40 text-white font-sans font-medium px-8 py-3 text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
          >
            Email Us
          </a>
        </div>

        {/* Stat bar */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">
          {[
            { value: "6+", label: "African Markets" },
            { value: "20+", label: "Years Experience" },
            { value: "100%", label: "Personal Service" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-primary font-serif text-2xl sm:text-3xl">{stat.value}</p>
              <p className="text-white/50 font-sans text-xs sm:text-sm mt-1 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30" aria-hidden="true">
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
