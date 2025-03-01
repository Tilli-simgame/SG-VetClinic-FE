import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react"

// This would typically come from your API or database
const clinics = [
  {
    id: 1,
    name: "TassuHoito Helsinki",
    address: "Eläintie 123, 00100 Helsinki",
    country: "Finland",
    phone: "+358 50 123 4567",
    email: "helsinki@tassuhoito.fi",
    website: "https://helsinki.tassuhoito.fi",
    hours: "Mon-Fri: 8:00-20:00, Sat-Sun: 10:00-16:00",
    image: "/placeholder.svg?height=300&width=400",
    staff: [
      {
        name: "ELL Sanna Järvinen",
        role: "Johtava Eläinlääkäri",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Sisätaudit", "Kirurgia"],
      },
      {
        name: "ELL Mikko Korhonen",
        role: "Eläinkirurgi",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Ortopedia", "Pehmytkudoskirurgia"],
      },
      {
        name: "Liisa Mäkinen",
        role: "Vastaava Hoitaja",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Hoitotyö", "Asiakaspalvelu"],
      },
      {
        name: "Antti Virtanen",
        role: "Eläintenhoitaja",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Laboratoriotyöt", "Röntgen"],
      },
    ],
  },
  {
    id: 2,
    name: "PawCare London",
    address: "123 Pet Street, London W1A 1AA",
    country: "United Kingdom",
    phone: "+44 20 1234 5678",
    email: "london@pawcare.co.uk",
    website: "https://london.pawcare.co.uk",
    hours: "Mon-Fri: 9:00-21:00, Sat-Sun: 10:00-18:00",
    image: "/placeholder.svg?height=300&width=400",
    staff: [
      {
        name: "Dr. Emily Watson",
        role: "Lead Veterinarian",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Internal Medicine", "Dermatology"],
      },
      {
        name: "Dr. James Brown",
        role: "Veterinary Surgeon",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Soft Tissue Surgery", "Orthopedics"],
      },
      {
        name: "Sarah Thompson",
        role: "Head Nurse",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Emergency Care", "Anesthesia"],
      },
      {
        name: "Oliver Green",
        role: "Veterinary Technician",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Dentistry", "Radiology"],
      },
    ],
  },
  {
    id: 3,
    name: "TierPflege Berlin",
    address: "Tiergartenstraße 123, 10115 Berlin",
    country: "Germany",
    phone: "+49 30 1234 5678",
    email: "berlin@tierpflege.de",
    website: "https://berlin.tierpflege.de",
    hours: "Mon-Fri: 8:30-19:30, Sat: 9:00-16:00, Sun: Closed",
    image: "/placeholder.svg?height=300&width=400",
    staff: [
      {
        name: "Dr. Hans Müller",
        role: "Leitender Tierarzt",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Innere Medizin", "Kardiologie"],
      },
      {
        name: "Dr. Anna Schmidt",
        role: "Fachtierärztin für Chirurgie",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Weichteilchirurgie", "Neurochirurgie"],
      },
      {
        name: "Markus Weber",
        role: "Leitender Pfleger",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Intensivpflege", "Physiotherapie"],
      },
      {
        name: "Lisa Bauer",
        role: "Tiermedizinische Fachangestellte",
        image: "/placeholder.svg?height=100&width=100",
        specialties: ["Labortechnik", "Ernährungsberatung"],
      },
    ],
  },
]

export default function LocationsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Locations</h1>

      <div className="grid gap-8">
        {clinics.map((clinic) => (
          <Card key={clinic.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  src={clinic.image || "/placeholder.svg"}
                  alt={clinic.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <CardHeader>
                  <CardTitle>{clinic.name}</CardTitle>
                  <CardDescription>{clinic.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 mb-4">
                    <p className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {clinic.country}
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      {clinic.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      {clinic.email}
                    </p>
                    <p className="flex items-center">
                      <Globe className="mr-2 h-4 w-4" />
                      <a
                        href={clinic.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {clinic.website}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {clinic.hours}
                    </p>
                  </div>
                  <Tabs defaultValue="staff" className="w-full">
                    <TabsList>
                      <TabsTrigger value="staff">Staff</TabsTrigger>
                      <TabsTrigger value="services">Services</TabsTrigger>
                    </TabsList>
                    <TabsContent value="staff">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {clinic.staff.map((member, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={60}
                              height={60}
                              className="rounded-full"
                            />
                            <div>
                              <p className="font-semibold">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                              <p className="text-sm text-muted-foreground">{member.specialties.join(", ")}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="services">
                      <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Wellness Exams</li>
                        <li>Vaccinations</li>
                        <li>Surgery</li>
                        <li>Dental Care</li>
                        <li>Emergency Services</li>
                        <li>Diagnostic Imaging</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href={`/appointment?clinic=${clinic.id}`}>Book Appointment</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

