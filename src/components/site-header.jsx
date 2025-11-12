"use client"

// import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Logo from "./logo"

export function SiteHeader() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo/>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-md font-medium text-foreground/80 transition-colors hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden md:flex items-center gap-2 bg-secondary hover:bg-secondary/90">
            <Phone className="h-4 w-4" />
            Call Us
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8 m-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4 bg-secondary hover:bg-secondary/90">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
