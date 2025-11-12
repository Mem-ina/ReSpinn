"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import Logo from "./logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>

            <Logo/>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for quality second-hand car parts. Affordable, reliable, and tested.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/catalog" className="text-muted-foreground hover:text-secondary transition-colors">
                  Browse Catalog
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Engine Parts</li>
              <li className="text-muted-foreground">Transmission</li>
              <li className="text-muted-foreground">Body Parts</li>
              <li className="text-muted-foreground">Electronics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-secondary" />
                <span className="text-muted-foreground">+27 60 800 1900</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-secondary" />
                <span className="text-muted-foreground">info@ReSpinn.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <span className="text-muted-foreground">118 High Street Turffontein, Johannesburg South</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ReSpinn Catalog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
