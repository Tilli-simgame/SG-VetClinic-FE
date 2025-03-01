import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function StaffPage() {
  const veterinarians = [
    {
      name: "ELL Sanna Järvinen",
      title: "Johtava Eläinlääkäri",
      image: "/placeholder.svg?height=400&width=400",
      bio: "ELL Järvinen on harjoittanut eläinlääketiedettä yli 15 vuotta. Hän sai eläinlääketieteen tohtorin tutkintonsa Helsingin yliopistosta ja on erityisen kiinnostunut sisätaudeista ja ennaltaehkäisevästä hoidosta. Hän jakaa kotinsa kahden rescue-koiran ja kissan kanssa.",
      specialties: ["Sisätaudit", "Ennaltaehkäisevä hoito", "Seniorieläinten hoito"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "ELL Mikko Korhonen",
      title: "Eläinkirurgi",
      image: "/placeholder.svg?height=400&width=400",
      bio: "ELL Korhonen on erikoistunut ortopedisiin ja pehmytkudosleikkauksiin. Saatuaan eläinlääkärin tutkintonsa Helsingin yliopistosta hän suoritti kirurgisen erikoistumisen Uppsalan yliopistossa. Hän on intohimoinen tarjoamaan korkealaatuisinta kirurgista hoitoa lemmikeille.",
      specialties: ["Ortopedinen kirurgia", "Pehmytkudoskirurgia", "Minimaalisesti invasiiviset toimenpiteet"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "ELL Emilia Rodriguez",
      title: "Eläinlääkäri",
      image: "/placeholder.svg?height=400&width=400",
      bio: "ELL Rodriguez liittyi tiimiimme valmistuttuaan Helsingin yliopistosta. Hänellä on erityinen kiinnostus dermatologiaan ja hammasterveyteen. Hänen lempeä lähestymistapansa tekee hänestä suosikin ahdistuneiden lemmikkien ja heidän omistajiensa keskuudessa.",
      specialties: ["Dermatologia", "Hammashoito", "Käyttäytymisneuvonta"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "ELL Juhani Virtanen",
      title: "Eläinlääkäri",
      image: "/placeholder.svg?height=400&width=400",
      bio: "ELL Virtanen tuo yli 10 vuoden päivystyslääketieteen kokemuksen käytäntöömme. Hän loistaa kriittisessä hoidossa ja monimutkaisissa lääketieteellisissä tapauksissa. Kun hän ei ole klinikalla, hän nauttii vaelluksesta kahden labradorinnoutajansa kanssa.",
      specialties: ["Päivystyslääketiede", "Tehohoito", "Ultraääni"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
  ]

  const staff = [
    {
      name: "Liisa Mäkinen",
      title: "Klinikan omistaja/johtaja",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Liisa varmistaa, että klinikkamme toimii sujuvasti ja tehokkaasti. Liiketalouden taustalla ja eläinrakkaudella varustettuna hän on täydellinen henkilö johtamaan päivittäisiä toimintojamme.",
    },
    {
      name: "Kalle Nieminen",
      title: "Eläintenhoitaja",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Kalle on ollut sertifioitu eläintenhoitaja 8 vuotta. Hän avustaa leikkauksissa, hammastoimenpiteissä ja varmistaa, että potilaamme saavat parasta hoitoa oleskelunsa aikana.",
    },
    {
      name: "Tiina Koskinen",
      title: "Eläintenhoitaja",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Tiina on erikoistunut laboratoriotyöhön ja potilaiden valvontaan. Hänen rauhallinen käytöksensä auttaa ahdistuneita lemmikkejä tuntemaan olonsa mukavaksi käyntiensä aikana.",
    },
    {
      name: "Aleksi Jokinen",
      title: "Eläintenhoitajan avustaja",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Aleksi avustaa eläinlääkäreitämme ja hoitajiamme tutkimuksissa ja hoidoissa. Hän opiskelee tällä hetkellä ja suorittaa meillä harjoitustaan.",
    },
    {
      name: "Olivia Salonen",
      title: "Vastaanotto",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Olivia on usein ensimmäinen ystävällinen kasvo, jonka näet klinikallamme. Hän hallinnoi ajanvarauksia, vastaa kysymyksiin ja varmistaa positiivisen kokemuksen kaikille asiakkaillemme.",
    },
    {
      name: "Markus Lehtonen",
      title: "Asiakaspalveluasiantuntija",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Markus auttaa asiakkaita ymmärtämään hoitosuunnitelmia ja käsittelee vakuutus- ja laskutuskysymyksiä. Hänen tietämyksensä ja kärsivällisyytensä tekevät hänestä korvaamattoman tiimin jäsenen.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Tutustu tiimiimme</h1>
            <p className="text-lg text-muted-foreground">
              Myötätuntoinen ja taitava tiimimme on omistautunut tarjoamaan korkealaatuisinta hoitoa rakkaille
              lemmikeillesi.
            </p>
          </div>
        </div>
      </section>

      {/* Veterinarians Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Eläinlääkärimme</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {veterinarians.map((vet, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image src={vet.image || "/placeholder.svg"} alt={vet.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{vet.name}</h3>
                    <p className="text-primary font-medium mb-3">{vet.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">{vet.bio}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Erikoisalat:</h4>
                      <ul className="text-sm space-y-1">
                        {vet.specialties.map((specialty, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex space-x-3">
                      <a href={vet.social.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a href={vet.social.facebook} className="text-muted-foreground hover:text-primary">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a href={vet.social.instagram} className="text-muted-foreground hover:text-primary">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Muu Henkilökuntamme</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {staff.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Liity tiimiimme</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Etsimme aina intohimoisia, taitavia ammattilaisia liittymään klinikallemme. Jos rakastat eläimiä
              ja olet valmis auttamaan, haluaisimme kuulla sinusta.
            </p>
            <Button size="lg" asChild>
              <Link href="/careers">Katso avoimet työpaikat</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

