import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Shield, Users, Leaf, Award, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"


export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every part is thoroughly inspected and tested before being listed in our inventory.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize customer satisfaction with expert advice and reliable service.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting eco-friendly practices by giving quality parts a second life.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Over 5 years of experience in the auto parts industry.",
    },
  ]

  const stats = [
    { number: "5+", label: "Years in Business" },
    { number: "10K+", label: "Parts Sold" },
    { number: "15K+", label: "Happy Customers" },
    { number: "50+", label: "Car Makes & Models" },
  ]

  const reasons = [
    "Extensive inventory of quality tested parts",
    "Competitive pricing - save up to 70%",
    "Expert staff with years of experience",
    "Warranty on all major components",
    "Fast and reliable service",
    "Environmentally responsible recycling",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-balance">
                About ReSpinn Catalog
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Your trusted partner for quality second-hand auto parts since 2020. We're committed to providing
                affordable, reliable parts while promoting sustainable automotive practices.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, ReSpinn Catalog began with a simple mission: to provide quality auto parts at
                    affordable prices while reducing automotive waste. What started as a small family-owned salvage yard
                    has grown into one of the region's most trusted sources for second-hand auto parts.
                  </p>
                  <p>
                    Over the years, we've helped thousands of customers save money on repairs while keeping
                    perfectly good parts out of landfills. Our commitment to quality, customer service, and
                    environmental responsibility has made us a leader in the automotive recycling industry.
                  </p>
                  <p>
                    Today, we maintain an extensive inventory of parts from over 50 different makes and models, all
                    carefully inspected and tested to ensure they meet our high standards. Whether you're a professional
                    mechanic or a DIY enthusiast, we're here to help you find exactly what you need.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/auto-salvage-yard.jpg"
                  alt="ReSpinn salvage yard with organized car parts"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                These core principles guide everything we do
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 rounded-full bg-secondary/10 p-4">
                        <value.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src="/quality-inspection.jpg"
                  alt="Quality inspection of auto parts"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-8">Why Choose ReSpinn?</h2>
                <div className="grid gap-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-balance">
              Ready to Find Your Perfect Part?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Browse our extensive catalog or contact us for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                <Link href="/catalog">Browse Catalog</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
