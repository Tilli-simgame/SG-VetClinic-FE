"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Printer, Share2 } from "lucide-react"

// This would typically come from your API or database
const mockAppointmentReport = {
  id: "APT12345",
  date: "2025-03-15",
  time: "14:30",
  petName: "Musti",
  petType: "Koira",
  petBreed: "Labradorinnoutaja",
  petAge: "5 vuotta",
  ownerName: "Matti Meikäläinen",
  veterinarian: "ELL Sanna Järvinen",
  reason: "Vuosittainen terveystarkastus",
  diagnosis: "Yleinen terveys hyvä, lievää hammaskiveä",
  treatment: "Hammaskiven poisto suoritettu, suositeltu säännöllistä hampaiden harjausta",
  medications: [{ name: "LÄÄKE", dosage: "1 päivässä", duration: "Jatkuva" }],
  followUp: "Seuraava tarkastus 6 kuukauden kuluttua",
  notes:
    "Musti on yleisesti ottaen terve ja hyväkuntoinen. Omistajaa neuvottu tarkkailemaan Mustin ruokavaliota painonhallinnan vuoksi.",
  vitals: {
    weight: "32 kg",
    temperature: "38.5°C",
    heartRate: "80 lyöntiä/min",
    respiratoryRate: "20 hengitystä/min",
  },
  vaccinations: [
    { name: "ROKOTUS 1", date: "2024-09-01", nextDue: "2025-09-01" },
    { name: "ROKOTUS 2", date: "2024-09-01", nextDue: "2025-09-01" },
  ],
}

export default function AppointmentReportPage() {
  const [activeTab, setActiveTab] = useState("yhteenveto")

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Link href="/appointments" className="text-primary hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Takaisin ajanvarauksiin
        </Link>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Käyntiraportti: {mockAppointmentReport.petName}</h1>
          <p className="text-muted-foreground">
            Käynti: {new Date(mockAppointmentReport.date).toLocaleDateString("fi-FI")} klo {mockAppointmentReport.time}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Tulosta
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Lataa PDF
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Jaa
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="yhteenveto">Yhteenveto</TabsTrigger>
              <TabsTrigger value="diagnoosi">Diagnoosi & Hoito</TabsTrigger>
              <TabsTrigger value="laakitys">Lääkitys</TabsTrigger>
              <TabsTrigger value="jatkohoito">Jatkohoito</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="yhteenveto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Potilaan Tiedot</h3>
                    <dl className="grid grid-cols-2 gap-2">
                      <dt className="text-muted-foreground">Nimi:</dt>
                      <dd>{mockAppointmentReport.petName}</dd>
                      <dt className="text-muted-foreground">Laji:</dt>
                      <dd>{mockAppointmentReport.petType}</dd>
                      <dt className="text-muted-foreground">Rotu:</dt>
                      <dd>{mockAppointmentReport.petBreed}</dd>
                      <dt className="text-muted-foreground">Ikä:</dt>
                      <dd>{mockAppointmentReport.petAge}</dd>
                      <dt className="text-muted-foreground">Omistaja:</dt>
                      <dd>{mockAppointmentReport.ownerName}</dd>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Käynnin Tiedot</h3>
                    <dl className="grid grid-cols-2 gap-2">
                      <dt className="text-muted-foreground">Päivämäärä:</dt>
                      <dd>{new Date(mockAppointmentReport.date).toLocaleDateString("fi-FI")}</dd>
                      <dt className="text-muted-foreground">Aika:</dt>
                      <dd>{mockAppointmentReport.time}</dd>
                      <dt className="text-muted-foreground">Eläinlääkäri:</dt>
                      <dd>{mockAppointmentReport.veterinarian}</dd>
                      <dt className="text-muted-foreground">Syy:</dt>
                      <dd>{mockAppointmentReport.reason}</dd>
                    </dl>
                  </div>
                </div>
                <Separator className="my-6" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Elintoiminnot</h3>
                  <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <dt className="text-muted-foreground text-sm">Paino</dt>
                      <dd className="text-2xl font-semibold">{mockAppointmentReport.vitals.weight}</dd>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <dt className="text-muted-foreground text-sm">Lämpötila</dt>
                      <dd className="text-2xl font-semibold">{mockAppointmentReport.vitals.temperature}</dd>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <dt className="text-muted-foreground text-sm">Syke</dt>
                      <dd className="text-2xl font-semibold">{mockAppointmentReport.vitals.heartRate}</dd>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <dt className="text-muted-foreground text-sm">Hengitystiheys</dt>
                      <dd className="text-2xl font-semibold">{mockAppointmentReport.vitals.respiratoryRate}</dd>
                    </div>
                  </dl>
                </div>
              </TabsContent>
              <TabsContent value="diagnoosi">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Diagnoosi</h3>
                    <p>{mockAppointmentReport.diagnosis}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hoito</h3>
                    <p>{mockAppointmentReport.treatment}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Lisätiedot</h3>
                    <p>{mockAppointmentReport.notes}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="laakitys">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-2">Määrätyt Lääkkeet</h3>
                  {mockAppointmentReport.medications.map((med, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{med.name}</CardTitle>
                        <CardDescription>Annostus: {med.dosage}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Kesto: {med.duration}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="jatkohoito">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Jatkohoito-ohjeet</h3>
                    <p>{mockAppointmentReport.followUp}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rokotukset</h3>
                    <div className="grid gap-4">
                      {mockAppointmentReport.vaccinations.map((vacc, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div>
                            <h4 className="font-semibold">{vacc.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              Annettu: {new Date(vacc.date).toLocaleDateString("fi-FI")}
                            </p>
                          </div>
                          <Badge variant="outline">
                            Seuraava: {new Date(vacc.nextDue).toLocaleDateString("fi-FI")}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

