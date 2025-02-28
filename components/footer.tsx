import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PawCare</h3>
            <p className="text-sm opacity-90">Professional veterinary care for your beloved pets since 2005.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-accent">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-accent">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#wellness" className="hover:text-accent">
                  Wellness Exams
                </Link>
              </li>
              <li>
                <Link href="/services#vaccinations" className="hover:text-accent">
                  Vaccinations
                </Link>
              </li>
              <li>
                <Link href="/services#surgery" className="hover:text-accent">
                  Surgery
                </Link>
              </li>
              <li>
                <Link href="/services#dental" className="hover:text-accent">
                  Dental Care
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>123 Pet Care Lane</p>
              <p>Anytown, ST 12345</p>
              <p>Phone: 555-123-4567</p>
              <p>Email: info@pawcare.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} PawCare Veterinary Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

