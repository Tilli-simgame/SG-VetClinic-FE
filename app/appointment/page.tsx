"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { fi } from "date-fns/locale"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Varaa Aika</h1>
            <p className="text-lg text-muted-foreground">
              Varaa käynti lemmikillesi kokeneen eläinlääkäritiimimme kanssa.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Varaa aika</CardTitle>
                  <CardDescription>
                    Täytä alla oleva lomake varataksesi ajan. Otamme sinuun yhteyttä vahvistaaksemme tiedot.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Yhteystietosi</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Etunimi</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Sukunimi</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Sähköposti</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Puhelin</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Lemmikin Tiedot</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="petName">Lemmikin Nimi</Label>
                          <Input id="petName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="petType">Lemmikin Tyyppi</Label>
                          <Select>
                            <SelectTrigger id="petType">
                              <SelectValue placeholder="Valitse lemmikin tyyppi" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dog">Koira</SelectItem>
                              <SelectItem value="cat">Kissa</SelectItem>
                              <SelectItem value="bird">Lintu</SelectItem>
                              <SelectItem value="reptile">Matelija</SelectItem>
                              <SelectItem value="other">Muu</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="petBreed">Rotu</Label>
                          <Input id="petBreed" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="petAge">Ikä</Label>
                          <Input id="petAge" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Onko tämä uusi potilas?</Label>
                        <RadioGroup defaultValue="no" className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="new-yes" />
                            <Label htmlFor="new-yes">Kyllä</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="new-no" />
                            <Label htmlFor="new-no">Ei</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Ajanvarauksen Tiedot</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="appointmentType">Ajanvarauksen Tyyppi</Label>
                          <Select>
                            <SelectTrigger id="appointmentType">
                              <SelectValue placeholder="Valitse tyyppi" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wellness">Terveystarkastus</SelectItem>
                              <SelectItem value="vaccination">Rokotus</SelectItem>
                              <SelectItem value="illness">Sairaskäynti</SelectItem>
                              <SelectItem value="surgery">Kirurginen Konsultaatio</SelectItem>
                              <SelectItem value="dental">Hammashoito</SelectItem>
                              <SelectItem value="other">Muu</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Toivottu Päivämäärä</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP", { locale: fi }) : <span>Valitse päivämäärä</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                locale={fi}
                                disabled={(date) => {
                                  // Disable past dates and weekends in this example
                                  const today = new Date()
                                  today.setHours(0, 0, 0, 0)
                                  const day = date.getDay()
                                  return date < today || day === 0 || day === 6
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Toivottu Aika</Label>
                        <Select>
                          <SelectTrigger id="preferredTime">
                            <SelectValue placeholder="Valitse aika" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Aamu (9-12)</SelectItem>
                            <SelectItem value="afternoon">Iltapäivä (13-16)</SelectItem>
                            <SelectItem value="evening">Ilta (16-18)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reason">Käynnin Syy</Label>
                        <Textarea
                          id="reason"
                          placeholder="Kuvaile käyntisi syy ja mahdolliset oireet, joita lemmikillä on."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Pyydä Ajanvarausta
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="text-center py-8">
                <CardContent>
                  <div className="flex flex-col items-center space-y-4">
                    <CheckCircle2 className="h-16 w-16 text-primary" />
                    <h2 className="text-2xl font-bold">Ajanvarauspyyntö Lähetetty!</h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Kiitos ajanvarauspyynnöstäsi. Tiimimme käy läpi tietosi ja ottaa sinuun yhteyttä 24 tunnin
                      kuluessa vahvistaakseen ajanvarauksesi tiedot.
                    </p>
                    <Button asChild className="mt-4">
                      <a href="/">Palaa Etusivulle</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Ajanvaraustietoja</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Aukioloajat</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Maanantai - Perjantai</span>
                      <span>8:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lauantai</span>
                      <span>9:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunnuntai</span>
                      <span>Suljettu</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mitä Tuoda Mukana</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Lemmikkisi terveystiedot (uusille potilaille)</li>
                    <li>Nykyiset lääkkeet, joita lemmikkisi käyttää</li>
                    <li>Tuore ulostenäyte (jos pyydetty)</li>
                    <li>Kysymykset, joita sinulla on eläinlääkärille</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

