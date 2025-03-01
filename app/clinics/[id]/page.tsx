import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Clock } from "lucide-react"

// This would typically come from your API or database
const mockClinics = [
  {
    id: 1,
    name: "NIMI",
    address: "VIRTUAALIMAAILMA",
    country: "Suomi",
    email: "maili@osoite.com",
    hours: "Ma-Pe: 8:00-20:00, La: 10:00-16:00, Su: Suljettu",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "[TODO]",
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
    services: ["TODO"],
  },
  // ... add other clinics here
]

export default function ClinicPage({ params }: { params: { id: string } }) {
  const clinic = mockClinics.find((c) => c.id === Number.parseInt(params.id))

  if (!clinic) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{clinic.name}</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src={clinic.image || "/placeholder.svg"}
            alt={clinic.name}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Clinic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center mb-2">
                <MapPin className="mr-2 h-4 w-4" />
                {clinic.address}, {clinic.country}
              </p>
              <p className="flex items-center mb-2">
                <Mail className="mr-2 h-4 w-4" />
                {clinic.email}
              </p>
              <p className="flex items-center mb-4">
                <Clock className="mr-2 h-4 w-4" />
                {clinic.hours}
              </p>
              <Button asChild>
                <Link href={`/appointment?clinic=${clinic.id}`}>Varaa aika</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">KLinikkamme</h2>
        <p>{clinic.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Henkilökuntamme</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinic.staff.map((member, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Erikoistunut: {member.specialties.join(", ")}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Palvelumme</h2>
        <ul className="grid md:grid-cols-2 gap-2">
          {clinic.services.map((service, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-primary">•</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

