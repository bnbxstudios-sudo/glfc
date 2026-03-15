"use client"

import { OrbitalNetwork } from "@/components/glfc/orbital-network"

export function AboutSection() {
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

            {/* Legend */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <p className="text-primary font-sans text-xs tracking-[0.15em] uppercase mb-3 font-medium">Cargo Mix</p>
                <div className="space-y-2">
                  {[
                    { name: "Manufactured", color: "#f06402", share: 60 },
                    { name: "Agricultural", color: "#34D399", share: 20 },
                    { name: "Bulk",         color: "#60A5FA", share: 10 },
                    { name: "Other",        color: "#A78BFA", share: 10 },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                      <span className="text-muted-foreground font-sans text-xs">{item.name}</span>
                      <span className="text-foreground font-sans text-xs ml-auto">{item.share}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-primary font-sans text-xs tracking-[0.15em] uppercase mb-3 font-medium">Key Markets</p>
                <div className="space-y-2">
                  {[
                    { country: "Nigeria",    color: "#EF4444", share: 20 },
                    { country: "Kenya",      color: "#14B8A6", share: 18 },
                    { country: "Mozambique", color: "#F59E0B", share: 16 },
                    { country: "Tanzania",   color: "#06B6D4", share: 14 },
                    { country: "Zambia",     color: "#8B5CF6", share: 12 },
                    { country: "Zanzibar",   color: "#EC4899", share:  8 },
                  ].map((item) => (
                    <div key={item.country} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                      <span className="text-muted-foreground font-sans text-xs">{item.country}</span>
                      <span className="text-foreground font-sans text-xs ml-auto">{item.share}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Orbital network visualization */}
          <div className="flex flex-col items-center gap-4">
            <OrbitalNetwork />
            <p className="text-muted-foreground font-sans text-xs text-center max-w-xs leading-relaxed">
              Live logistics network — inner ring: cargo mix · outer ring: project distribution across Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

