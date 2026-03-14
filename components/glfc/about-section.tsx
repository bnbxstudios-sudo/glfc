export function AboutSection() {
  const markets = ["Kenya", "Tanzania", "Zanzibar", "Nigeria", "Zambia", "Mozambique"]

  return (
    <section id="about" className="bg-background py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              About GLFC
            </p>
            <h2
              id="about-heading"
              className="font-serif text-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-8"
            >
              Personal Service.<br />Global Reach.
            </h2>
            <div className="space-y-5 text-muted-foreground font-sans text-base leading-relaxed">
              <p>
                GLFC is an Import and Export company that focuses on personal service. We pride ourselves
                on the relationships built up over the years with both Clients and Suppliers alike,
                allowing us to go further and do more for our customers.
              </p>
              <p>
                We act as an effective <span className="text-foreground font-medium">"off-site in-house shipping department"</span>,
                giving our clients the best of both worlds when outsourcing logistics operations.
              </p>
              <p>
                GLFC has successfully supported logistics supply chains for large projects across Africa,
                with a particular focus on manufactured goods.
              </p>
            </div>
          </div>

          {/* Markets panel */}
          <div className="bg-secondary p-10 lg:p-12">
            <p className="text-primary font-sans text-xs tracking-[0.2em] uppercase mb-6 font-medium">
              Proven African Market Experience
            </p>
            <div className="grid grid-cols-2 gap-4">
              {markets.map((market) => (
                <div key={market} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-white font-sans text-sm tracking-wide">{market}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/50 font-sans text-xs leading-relaxed">
                Extensive cross-border experience spanning East, West, and Southern Africa,
                supporting complex project logistics from inception to delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
