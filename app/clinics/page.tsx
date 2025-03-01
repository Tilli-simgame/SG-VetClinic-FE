"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Globe, MapPin } from "lucide-react"

// This would typically come from your API or database
const mockClinics = [
  {
    id: 1,
    name: "NIMI",
    address: "Eläintie 123, 00100 Helsinki",
    country: "Suomi",
    email: "maili@osoite.com"
  },
  {
    id: 2,
    name: "NIMI",
    address: "123 Pet Street, London W1A 1AA",
    country: "Englanti",
    email: "maili@osoite.com"
  },
  {
    id: 3,
    name: "NIMI",
    address: "Tiergartenstraße 123, 10115 Berlin",
    country: "Saksa",
    email: "maili@osoite.com"
  },
]

export default function ClinicsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")

  const filteredClinics = mockClinics.filter(
    (clinic) =>
      (clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.address.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCountry === "all" || clinic.country === selectedCountry),
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Virtuaaliklinikat</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Esti..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Filter by country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Kaikki</SelectItem>
            <SelectItem value="Suomi">Suomi</SelectItem>
            <SelectItem value="Englanti">Englanti</SelectItem>
            <SelectItem value="Saksa">Saksa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        {filteredClinics.map((clinic) => (
          <Card key={clinic.id}>
            <CardHeader>
              <CardTitle>{clinic.name}</CardTitle>
              <CardDescription>{clinic.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                  <p className="flex items-center mb-2">
                    <MapPin className="mr-2 h-4 w-4" />
                    {clinic.country}
                  </p>
                  <p className="flex items-center mb-2">
                    <Mail className="mr-2 h-4 w-4" />
                    {clinic.email}
                  </p>
                </div>
                <div className="flex flex-col justify-end space-y-4">
                  <Button asChild>
                    <Link href={`/clinics/${clinic.id}`}>Klinikan tiedot</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/appointment?clinic=${clinic.id}`}>Varaa aika</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

