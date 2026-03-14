import { Navbar } from "@/components/glfc/navbar"
import { HeroSection } from "@/components/glfc/hero-section"
import { AboutSection } from "@/components/glfc/about-section"
import { ServicesSection } from "@/components/glfc/services-section"
import { LeadershipSection } from "@/components/glfc/leadership-section"
import { ContactSection } from "@/components/glfc/contact-section"
import { Footer } from "@/components/glfc/footer"

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Gale Lotheringen Freight Consultants',
  alternateName: 'GLFC',
  description: 'Personalised import and export logistics support, helping companies navigate international trade efficiently across Africa and the world.',
  url: 'https://glfc.co.za',
  logo: 'https://glfc.co.za/og-image.png',
  image: 'https://glfc.co.za/og-image.png',
  telephone: '+27823722551',
  email: 'gale@glfc.co.za',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
    addressRegion: 'South Africa',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.9249,
    longitude: 18.4241,
  },
  areaServed: [
    { '@type': 'Country', name: 'South Africa' },
    { '@type': 'Continent', name: 'Africa' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
  serviceType: [
    'Freight Consulting',
    'Import and Export Logistics',
    'Customs Compliance',
    'Supply Chain Management',
    'International Trade Consulting',
  ],
  knowsAbout: [
    'Freight Forwarding',
    'Customs Clearance',
    'International Shipping',
    'Supply Chain Optimization',
    'Africa Trade Routes',
  ],
  founder: {
    '@type': 'Person',
    name: 'Gale Lotheringen',
    jobTitle: 'Founder & Principal Consultant',
  },
  sameAs: [
    'https://www.linkedin.com/in/gale-lotheringen',
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
}

export default function GLFCLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
