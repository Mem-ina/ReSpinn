"use client"

import { useState } from "react"
import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { PartsFilters } from "../../components/parts-filters"
import { PartsGrid } from "../../components/parts-grid"
import { Input } from "../../components/ui/input"
import { Search } from "lucide-react"

// Sample parts data - 
const allParts = [
  {
    id: 1,
    name: "Engine Block Assembly",
    category: "Engine",
    make: "Honda",
    model: "Civic",
    year: "2015-2018",
    condition: "Excellent",
    price: 11500,
    image: "/car-engine-block.jpg",
    description: "Complete engine block assembly, tested and verified",
  },
  {
    id: 2,
    name: "Front Bumper",
    category: "Body",
    make: "Toyota",
    model: "Camry",
    year: "2016-2020",
    condition: "Good",
    price: 1300,
    image: "/car-front-bumper.png",
    description: "Front bumper with minor scratches, fully functional",
  },
  {
    id: 3,
    name: "Transmission Assembly",
    category: "Transmission",
    make: "Ford",
    model: "F-150",
    year: "2014-2019",
    condition: "Excellent",
    price: 12000,
    image: "/car-transmission.png",
    description: "Automatic transmission, fully tested",
  },
  {
    id: 4,
    name: "Headlight Assembly",
    category: "Lighting",
    make: "Nissan",
    model: "Altima",
    year: "2017-2021",
    condition: "Like New",
    price: 1200,
    image: "/car-headlight.jpg",
    description: "LED headlight assembly, perfect condition",
  },
  {
    id: 5,
    name: "Alternator",
    category: "Electrical",
    make: "Chevrolet",
    model: "Silverado",
    year: "2015-2020",
    condition: "Good",
    price: 1450,
    image: "/car-alternator.jpg",
    description: "120A alternator, tested and working",
  },
  {
    id: 6,
    name: "Door Panel Set",
    category: "Interior",
    make: "BMW",
    model: "3 Series",
    year: "2016-2019",
    condition: "Excellent",
    price: 2500,
    image: "/car-door-panel.jpg",
    description: "Complete set of 4 door panels, leather interior",
  },
  {
    id: 7,
    name: "Radiator",
    category: "Cooling",
    make: "Honda",
    model: "Accord",
    year: "2013-2017",
    condition: "Good",
    price: 1950,
    image: "/car-radiator.png",
    description: "Aluminum radiator, no leaks",
  },
  {
    id: 8,
    name: "Steering Wheel",
    category: "Interior",
    make: "Toyota",
    model: "Corolla",
    year: "2018-2022",
    condition: "Like New",
    price: 1100,
    image: "/car-steering-wheel.jpg",
    description: "Leather steering wheel with controls",
  },
  {
    id: 9,
    name: "Brake Caliper Set",
    category: "Brakes",
    make: "Ford",
    model: "Mustang",
    year: "2015-2020",
    condition: "Excellent",
    price: 3800,
    image: "/brake-calipers.jpg",
    description: "Front brake caliper set, performance grade",
  },
  {
    id: 10,
    name: "Fuel Pump",
    category: "Fuel System",
    make: "Chevrolet",
    model: "Malibu",
    year: "2016-2019",
    condition: "Good",
    price: 1600,
    image: "/vintage-fuel-pump.png",
    description: "Electric fuel pump, tested",
  },
  {
    id: 11,
    name: "Tail Light Assembly",
    category: "Lighting",
    make: "Nissan",
    model: "Rogue",
    year: "2017-2020",
    condition: "Excellent",
    price: 1250,
    image: "/car-tail-light.jpg",
    description: "LED tail light, both sides available",
  },
  {
    id: 12,
    name: "Catalytic Converter",
    category: "Exhaust",
    make: "Honda",
    model: "CR-V",
    year: "2015-2019",
    condition: "Good",
    price: 3000,
    image: "/catalytic-converter.jpg",
    description: "OEM catalytic converter, tested",
  },
]

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "all",
    make: "all",
    condition: "all",
    
    priceRange: [0, 20000],
  })

  // Filter parts based on search and filters
  const filteredParts = allParts.filter((part) => {
    const matchesSearch =
      searchQuery === "" ||
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.model.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = filters.category === "all" || part.category === filters.category
    const matchesMake = filters.make === "all" || part.make === filters.make
    const matchesCondition = filters.condition === "all" || part.condition === filters.condition
    const matchesPrice = part.price >= filters.priceRange[0] && part.price <= filters.priceRange[1]

    return matchesSearch && matchesCategory && matchesMake && matchesCondition && matchesPrice
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">Parts Catalog</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Browse our extensive inventory of quality second-hand auto parts
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="border-b border-border bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by part name, make, or model..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Filters and Parts Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                <PartsFilters filters={filters} onFiltersChange={setFilters} parts={allParts} />
              </aside>

              {/* Parts Grid */}
              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredParts.length} of {allParts.length} parts
                  </p>
                </div>
                <PartsGrid parts={filteredParts} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
