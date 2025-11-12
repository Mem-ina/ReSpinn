"use client"

import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Shield, DollarSign, Clock, ArrowRight } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Quality Tested",
      description: "Every part is inspected and tested before listing",
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Save up to 70% compared to new parts",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick response and easy pickup or delivery",
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Browse Our Catalog",
      description: "Search through thousands of quality parts by make, model, or category",
    },
    {
      number: "2",
      title: "Contact Us",
      description: "Call or visit us to confirm availability and get expert advice",
    },
    {
      number: "3",
      title: "Purchase & Install",
      description: "Pick up your part or arrange delivery and get back on the road",
    },
  ]

  const featuredParts = [
    {
      id: 1,
      name: "Engine Block Assembly",
      compatibility: "Honda Civic 2015-2018",
      condition: "Excellent",
      price: "R11500",
      image: "/car-engine-block.jpg",
    },
    {
      id: 2,
      name: "Front Bumper",
      compatibility: "Toyota Camry 2016-2020",
      condition: "Good",
      price: "R1300",
      image: "/car-front-bumper.png",
    },
    {
      id: 3,
      name: "Transmission Assembly",
      compatibility: "Ford F-150 2014-2019",
      condition: "Excellent",
      price: "R12000",
      image: "/car-transmission.png",
    },
    {
      id: 4,
      name: "Headlight Assembly",
      compatibility: "Nissan Altima 2017-2021",
      condition: "Like New",
      price: "R1200",
      image: "/car-headlight.jpg",
    },
    {
      id: 5,
      name: "Alternator",
      compatibility: "Chevrolet Silverado 2015-2020",
      condition: "Good",
      price: "R1450",
      image: "/car-alternator.jpg",
    },
    {
      id: 6,
      name: "Door Panel Set",
      compatibility: "BMW 3 Series 2016-2019",
      condition: "Excellent",
      price: "R2500",
      image: "/car-door-panel.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/auto-parts-warehouse.jpg')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance mb-6">
                Quality Second-Hand Car Parts You Can Trust
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Save money without compromising on quality. Browse thousands of tested and certified auto parts for all
                makes and models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                  <a href="/catalog">
                    Browse Parts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Why Choose ReSpinn?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                We're committed to providing quality parts at affordable prices with exceptional service
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 rounded-full bg-secondary/10 p-4">
                        <feature.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 rounded-lg overflow-hidden max-w-4xl mx-auto">
              <img
                src="/mechanic-working.jpg"
                alt="Mechanic working on car parts"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Getting the parts you need is simple and straightforward
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Parts Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">Featured Parts</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Popular items from our extensive inventory
                </p>
              </div>
              <Button variant="outline" asChild className="hidden md:flex bg-transparent">
                <a href="/catalog">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredParts.map((part) => (
                <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={part.image || "/placeholder.svg"}
                      alt={part.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {part.condition}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-1">{part.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{part.compatibility}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{part.price}</span>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`/catalog/${part.id}`}>View Details</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <a href="/catalog">
                  View All Parts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-balance">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact us directly and our team will help you find the exact part you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="/catalog">Browse Catalog</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
