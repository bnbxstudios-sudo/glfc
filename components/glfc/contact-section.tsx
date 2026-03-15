"use client"

import { useState } from "react"
import { Mail, Phone, Building2, Send, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError("")
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("company", formState.company)
      formData.append("message", formState.message)
      // FormSubmit.co special fields
      formData.append("_subject", `New enquiry from ${formState.name} – ${formState.company}`)
      formData.append("_captcha", "false") // Disable captcha for better UX
      formData.append("_autoresponse", "Thank you for contacting GLFC. We've received your message and will get back to you within 24 hours.")

      const response = await fetch("https://formsubmit.co/gale@glfc.co.za", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        setFormState({ name: "", company: "", email: "", message: "" })
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again or email us directly.")
      console.error("[v0] Form submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "info@glfc.co.za",
      href: "mailto:info@glfc.co.za",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 (0) 00 000 0000",
      href: "tel:+27000000000",
    },
    {
      icon: Building2,
      label: "Company",
      value: "Gale Lotheringen Freight Consultants",
      href: undefined,
    },
  ]

  return (
    <section id="contact" className="bg-background py-24 lg:py-32" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <div>
            <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-8"
            >
              Let&apos;s Discuss Your Logistics Needs
            </h2>
            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-12">
              Whether you have an urgent shipment, a complex project, or simply want to understand how
              GLFC can serve as your outsourced shipping department — we&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-muted-foreground font-sans text-xs uppercase tracking-widest mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-sans text-sm hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-sans text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-muted p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-foreground text-2xl">Message Sent Successfully</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. A confirmation email has been sent to you, and we'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-sans text-sm underline-offset-4 hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-sm p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-red-700 font-sans text-sm">{error}</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                      Name <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    Email <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    Message <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your logistics needs…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground font-sans font-medium text-sm py-3 px-8 hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
