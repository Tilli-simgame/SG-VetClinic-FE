import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">PawCare</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/staff" className="text-sm font-medium transition-colors hover:text-primary">
              Our Team
            </Link>
            <Link href="/appointment" className="text-sm font-medium transition-colors hover:text-primary">
              Book Appointment
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">555-123-4567</span>
          </div>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/appointment">Book Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/services" className="text-lg font-medium transition-colors hover:text-primary">
                  Services
                </Link>
                <Link href="/staff" className="text-lg font-medium transition-colors hover:text-primary">
                  Our Team
                </Link>
                <Link href="/appointment" className="text-lg font-medium transition-colors hover:text-primary">
                  Book Appointment
                </Link>
                <div className="flex items-center gap-2 mt-4">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">555-123-4567</span>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

