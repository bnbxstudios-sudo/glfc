export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative bg-secondary py-24 lg:py-32 overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      {/* Background texture image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=80')`,
        }}
        role="img"
        aria-label="Global shipping and logistics background"
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Industry Expertise
            </p>
            <h2
              id="leadership-heading"
              className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance"
            >
              Leadership &amp; Industry Involvement
            </h2>
          </div>

          <div>
            <p className="text-white/70 font-sans text-base leading-relaxed mb-6">
              GLFC's leadership maintains strong involvement in international trade and logistics networks.
              With experience in export organisations and port industry collaboration, GLFC understands the
              importance of communication and coordination across all levels of the supply chain.
            </p>
            <p className="text-white/50 font-sans text-sm leading-relaxed">
              Our network spans freight forwarders, customs brokers, shipping lines, and project managers —
              ensuring every consignment receives expert attention from the first mile to the last.
            </p>
          </div>
        </div>

        {/* Feature row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          {[
            { label: "Export Organisations", desc: "Active membership and involvement in key trade bodies." },
            { label: "Port Collaboration", desc: "Established relationships with port authorities and agents." },
            { label: "End-to-End Coordination", desc: "Oversight from origin to final destination, every time." },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              <div className="w-8 h-px bg-primary" aria-hidden="true" />
              <h3 className="text-white font-serif text-lg">{item.label}</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
