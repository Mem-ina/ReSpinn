"use client"

import { useState } from "react"
import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 text-balance">Get in Touch</h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Have questions about a part or need help finding what you're looking for? We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 rounded-lg overflow-hidden max-w-5xl mx-auto">
              <img
                src="/customer-service.jpg"
                alt="Friendly customer service team"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Reach out to us through any of these channels. We're ready to assist you with your auto parts needs.
                  </p>
                </div>

                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-secondary/10 p-2">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-sm text-muted-foreground">+27 60 800 1900</p>
                        <p className="text-xs text-muted-foreground mt-1">Mon-Fri: 8am-6pm</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-secondary/10 p-2">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground">info@ReSpinn.com</p>
                        <p className="text-xs text-muted-foreground mt-1">We reply within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-secondary/10 p-2">
                        <MapPin className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-sm text-muted-foreground">118 High Street Turffontein</p>
                        <p className="text-sm text-muted-foreground">Johannesburg South</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-secondary/10 p-2">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                        <p className="text-sm text-muted-foreground">Saturday: 9am - 4pm</p>
                        <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="johndoe@gmail.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+27..."
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="What is this regarding?"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about the part you're looking for or any questions you have..."
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.4205255342595!2d28.03690477536036!3d-26.248011865759572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f2186b55b67%3A0xc87226a4ada09f1a!2s118%20High%20St%2C%20Turffontein%2C%20Johannesburg%20South%2C%202091!5e0!3m2!1sen!2sza!4v1761590591458!5m2!1sen!2sza" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
