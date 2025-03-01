import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Virtuaalieläinten Eläinklinikka Tietokanta</h3>
            <p className="text-sm opacity-90">
              Virtuaalisten ELäinklinikoiden Tietokanta vuodesta 2025.
            </p>  
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Pikalinkit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent">
                  Etusivu
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent">
                  Palvelut
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="hover:text-accent">
                  Klinikat
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Palvelut</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#wellness" className="hover:text-accent">
                  Terveystarkastukset
                </Link>
              </li>
              <li>
                <Link href="/services#vaccinations" className="hover:text-accent">
                  Rokotukset
                </Link>
              </li>
              <li>
                <Link href="/services#surgery" className="hover:text-accent">
                  Kirurgia
                </Link>
              </li>
              <li>
                <Link href="/services#dental" className="hover:text-accent">
                  Hammashoito
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ota Yhteyttä</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Virtuaalimaailma</p>
              <p>Sähköposti: virtuaali@proton.me</p>
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Virtuaalieläinten Eläinklinikka Tietokanta. Kaikki sivuilla oleva on mielikuvitusta.</p>
        </div>
      </div>
    </footer>
  )
}

