import { Package, Globe, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Import & Export Logistics",
    description:
      "End-to-end freight consulting and coordination — from documentation and customs compliance to final-mile delivery across international borders.",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Support",
    description:
      "Comprehensive logistics planning and supplier coordination, ensuring your supply chain operates efficiently and transparently at every stage.",
  },
  {
    icon: Globe,
    title: "Africa Trade Expertise",
    description:
      "Extensive experience supporting large-scale projects across African markets, navigating local regulations, routes, and relationships with confidence.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-serif text-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance"
          >
            Our Core Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="bg-card border border-border p-8 group hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-muted-foreground/30 font-serif text-4xl font-light leading-none">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-foreground text-xl mb-4 leading-snug">{service.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{service.description}</p>
                <div className="mt-8 w-8 h-px bg-primary group-hover:w-16 transition-all duration-300" aria-hidden="true" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
