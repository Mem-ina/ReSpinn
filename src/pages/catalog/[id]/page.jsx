"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "../../../components/site-header"
import { SiteFooter } from "../../../components/site-footer"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Separator } from "../../../components/ui/separator"
import { Phone, Mail, MapPin, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useParams } from "react-router-dom"

// Sample parts data - in a real app, this would come from a database
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
    description:
      "Complete engine block assembly in excellent condition. This unit has been thoroughly tested and inspected to ensure optimal performance. Includes all major components and is ready for installation.",
    specifications: {
      "Part Number": "ENG-HON-CIV-2015",
      Displacement: "2.0L",
      Cylinders: "4",
      "Fuel Type": "Gasoline",
      Mileage: "65,000 miles",
      Warranty: "90 days",
    },
    features: [
      "Professionally tested and inspected",
      "No cracks or damage",
      "All gaskets included",
      "Ready for installation",
      "Compatible with multiple model years",
    ],
    compatibility: ["Honda Civic 2015", "Honda Civic 2016", "Honda Civic 2017", "Honda Civic 2018"],
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
    description:
      "Front bumper in good condition with minor cosmetic wear. Structurally sound and ready for installation. May require paint to match your vehicle's color.",
    specifications: {
      "Part Number": "BMP-TOY-CAM-2016",
      Material: "Plastic/ABS",
      Color: "Unpainted",
      "Mounting Hardware": "Included",
      Weight: "15 lbs",
      Warranty: "30 days",
    },
    features: [
      "Structurally sound",
      "All mounting points intact",
      "Minor scratches only",
      "Easy installation",
      "OEM quality",
    ],
    compatibility: [
      "Toyota Camry 2016",
      "Toyota Camry 2017",
      "Toyota Camry 2018",
      "Toyota Camry 2019",
      "Toyota Camry 2020",
    ],
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
    description:
      "Automatic transmission assembly in excellent working condition. Fully tested with no slipping or grinding. Includes torque converter and all necessary components.",
    specifications: {
      "Part Number": "TRN-FOR-F15-2014",
      Type: "Automatic",
      Speeds: "6-Speed",
      Mileage: "72,000 miles",
      "Fluid Capacity": "13.9 quarts",
      Warranty: "90 days",
    },
    features: [
      "Fully tested and verified",
      "Smooth shifting",
      "No leaks or damage",
      "Torque converter included",
      "Professional installation recommended",
    ],
    compatibility: [
      "Ford F-150 2014",
      "Ford F-150 2015",
      "Ford F-150 2016",
      "Ford F-150 2017",
      "Ford F-150 2018",
      "Ford F-150 2019",
    ],
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
    description:
      "LED headlight assembly in like-new condition. Crystal clear lens with no yellowing or cracks. Plug-and-play installation with all wiring included.",
    specifications: {
      "Part Number": "HLT-NIS-ALT-2017",
      Type: "LED",
      Side: "Driver Side",
      Voltage: "12V",
      Bulbs: "Included",
      Warranty: "60 days",
    },
    features: [
      "Crystal clear lens",
      "LED technology",
      "Plug-and-play installation",
      "All wiring included",
      "OEM quality",
    ],
    compatibility: [
      "Nissan Altima 2017",
      "Nissan Altima 2018",
      "Nissan Altima 2019",
      "Nissan Altima 2020",
      "Nissan Altima 2021",
    ],
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
    description:
      "120A alternator in good working condition. Tested and verified to charge properly. Includes pulley and all necessary connections.",
    specifications: {
      "Part Number": "ALT-CHV-SIL-2015",
      Output: "120A",
      Voltage: "12V",
      Rotation: "Clockwise",
      Pulley: "Included",
      Warranty: "60 days",
    },
    features: [
      "Tested and verified",
      "Proper charging output",
      "Pulley included",
      "Easy installation",
      "Reliable performance",
    ],
    compatibility: [
      "Chevrolet Silverado 2015",
      "Chevrolet Silverado 2016",
      "Chevrolet Silverado 2017",
      "Chevrolet Silverado 2018",
      "Chevrolet Silverado 2019",
      "Chevrolet Silverado 2020",
    ],
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
    description:
      "Complete set of 4 door panels with leather interior in excellent condition. Minimal wear with no tears or stains. Includes all clips and hardware.",
    specifications: {
      "Part Number": "DRP-BMW-3SR-2016",
      Material: "Leather",
      Color: "Black",
      Pieces: "4 (Complete Set)",
      Hardware: "Included",
      Warranty: "30 days",
    },
    features: [
      "Genuine leather",
      "No tears or stains",
      "All clips included",
      "Complete set of 4",
      "Excellent condition",
    ],
    compatibility: ["BMW 3 Series 2016", "BMW 3 Series 2017", "BMW 3 Series 2018", "BMW 3 Series 2019"],
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
    description:
      "Aluminum radiator in good condition with no leaks. Pressure tested and ready for installation. Includes drain plug and mounting hardware.",
    specifications: {
      "Part Number": "RAD-HON-ACC-2013",
      Material: "Aluminum",
      Rows: "2-Row",
      "Core Size": "26 x 17 inches",
      "Inlet/Outlet": "1.25 inches",
      Warranty: "60 days",
    },
    features: [
      "No leaks",
      "Pressure tested",
      "Aluminum construction",
      "Mounting hardware included",
      "Efficient cooling",
    ],
    compatibility: [
      "Honda Accord 2013",
      "Honda Accord 2014",
      "Honda Accord 2015",
      "Honda Accord 2016",
      "Honda Accord 2017",
    ],
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
    description:
      "Leather steering wheel with integrated controls in like-new condition. No wear on leather and all buttons function perfectly. Includes airbag module.",
    specifications: {
      "Part Number": "STW-TOY-COR-2018",
      Material: "Leather",
      Color: "Black",
      Controls: "Audio & Cruise",
      Airbag: "Included",
      Warranty: "30 days",
    },
    features: ["Genuine leather", "All controls working", "Airbag included", "No wear or damage", "Easy installation"],
    compatibility: [
      "Toyota Corolla 2018",
      "Toyota Corolla 2019",
      "Toyota Corolla 2020",
      "Toyota Corolla 2021",
      "Toyota Corolla 2022",
    ],
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
    description:
      "Performance-grade front brake caliper set in excellent condition. No leaks or seized pistons. Professionally cleaned and tested for optimal braking performance.",
    specifications: {
      "Part Number": "BRK-FOR-MUS-2015",
      Type: "Front Calipers",
      Pistons: "4-Piston",
      Material: "Cast Iron",
      Finish: "Powder Coated",
      Warranty: "90 days",
    },
    features: [
      "Performance grade",
      "No leaks",
      "Smooth piston operation",
      "Professionally cleaned",
      "Ready to install",
    ],
    compatibility: [
      "Ford Mustang 2015",
      "Ford Mustang 2016",
      "Ford Mustang 2017",
      "Ford Mustang 2018",
      "Ford Mustang 2019",
      "Ford Mustang 2020",
    ],
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
    description:
      "Electric fuel pump in good working condition. Tested for proper pressure and flow. Includes fuel strainer and all necessary seals.",
    specifications: {
      "Part Number": "FLP-CHV-MAL-2016",
      Type: "Electric",
      Pressure: "58 PSI",
      "Flow Rate": "255 LPH",
      Voltage: "12V",
      Warranty: "60 days",
    },
    features: [
      "Tested and verified",
      "Proper pressure output",
      "Fuel strainer included",
      "All seals included",
      "Reliable performance",
    ],
    compatibility: ["Chevrolet Malibu 2016", "Chevrolet Malibu 2017", "Chevrolet Malibu 2018", "Chevrolet Malibu 2019"],
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
    description:
      "LED tail light assembly in excellent condition. Clear lens with no cracks or moisture. Both driver and passenger sides available.",
    specifications: {
      "Part Number": "TLT-NIS-ROG-2017",
      Type: "LED",
      Side: "Driver Side",
      Voltage: "12V",
      Bulbs: "Included",
      Warranty: "60 days",
    },
    features: ["LED technology", "Clear lens", "No cracks or moisture", "Plug-and-play", "Both sides available"],
    compatibility: ["Nissan Rogue 2017", "Nissan Rogue 2018", "Nissan Rogue 2019", "Nissan Rogue 2020"],
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
    description:
      "OEM catalytic converter in good working condition. Tested and verified to meet emissions standards. Includes all necessary gaskets and hardware.",
    specifications: {
      "Part Number": "CAT-HON-CRV-2015",
      Type: "OEM",
      Material: "Stainless Steel",
      "EPA Compliant": "Yes",
      Gaskets: "Included",
      Warranty: "90 days",
    },
    features: [
      "OEM quality",
      "EPA compliant",
      "Tested and verified",
      "All gaskets included",
      "Stainless steel construction",
    ],
    compatibility: ["Honda CR-V 2015", "Honda CR-V 2016", "Honda CR-V 2017", "Honda CR-V 2018", "Honda CR-V 2019"],
  },
]

export default function PartDetailPage() {
  const [part, setPart] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const foundPart = allParts.find((p) => p.id === Number.parseInt(id))
    if (foundPart) {
      setPart(foundPart)
    } else {
      setNotFound(true)
    }
  }, [id])

  if (notFound) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Part Not Found</h1>
            <p className="text-muted-foreground mb-6">The part you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/catalog">Back to Catalog</a>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  if (!part) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div>Loading...</div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-4">
            <a
              href="/catalog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalog
            </a>
          </div>
        </section>

        {/* Part Details */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                  <img src={part.image || "/placeholder.svg"} alt={part.name} className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <Badge variant="secondary">{part.condition}</Badge>
                    <Badge variant="outline">{part.category}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight mb-2 text-balance">{part.name}</h1>
                  <p className="text-lg text-muted-foreground">
                    {part.make} {part.model} ({part.year})
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">R{part.price}</span>
                  <span className="text-sm text-muted-foreground">ZAR</span>
                </div>

                <Separator />

                <div>
                  <h2 className="text-lg font-semibold mb-3">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{part.description}</p>
                </div>

                <Separator />

                {/* Contact Options */}
                <div>
                  <h2 className="text-lg font-semibold mb-3">Contact Us About This Part</h2>
                  <div className="space-y-3">
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Call: +27 60 800 1900
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
                      <a href="/contact">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Inquiry
                      </a>
                    </Button>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 text-sm">
                      <MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">118 High Street Turffontein, Johannesburg South</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Specifications */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                  <dl className="space-y-2">
                    {Object.entries(part.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <dt className="text-muted-foreground">{key}:</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <ul className="space-y-2">
                    {part.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Compatibility */}
              <Card className="md:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Compatibility</h3>
                  <div className="space-y-2">
                    {part.compatibility.map((model, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">{model}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
