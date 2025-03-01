import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Stethoscope, Syringe, Scissors, SmileIcon as Tooth, PawPrint, Microscope, Pill } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "wellness",
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "Terveystarkastukset",
      description: "Kattavat fyysiset tutkimukset virtuaalilemmikkisi yleisen terveyden arvioimiseksi",
      details:
        "Perusteelliset terveystarkastuksemme sisältävät elintoimintojen, painon, silmien, korvien, suun, ihon, turkin ja sisäelinten tarkistuksen. Suosittelemme vuosittaisia tarkastuksia aikuisille lemmikeille ja puolivuosittaisia tarkastuksia seniorilemmikeille.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "vaccinations",
      icon: <Syringe className="h-8 w-8 text-primary" />,
      title: "Rokotukset",
      description: "Perus- ja elämäntaparokotukset virtuaalilemmikkisi suojaamiseksi yleisiltä sairauksilta",
      details:
        "Tarjoamme kaikki perusrokotukset koirille ja kissoille sekä lisärokotuksia virtuaalilemmikkisi elämäntavan ja riskitekijöiden perusteella. Eläinlääkärimme luovat yksilöllisen rokotusaikataulun lemmikillesi.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "surgery",
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Kirurgiset palvelut",
      description: "Rutiininomaisesta kastraatiosta/sterilisaatiosta monimutkaisiin toimenpiteisiin",
      details:
        "Leikkaussalimme on varustettu edistyneillä valvontalaitteilla ja tiimimme on koulutettu uusimpiin kirurgisiin tekniikoihin. Suoritamme rutiininomaisia toimenpiteitä kuten kastraatio/sterilisaatio sekä monimutkaisempia pehmytkudos- ja ortopedisiä leikkauksia.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "dental",
      icon: <Tooth className="h-8 w-8 text-primary" />,
      title: "Hammashoito",
      description: "Ammattimainen puhdistus ja hammashoidot suun terveyden ylläpitämiseksi",
      details:
        "Hammaspalveluihimme kuuluvat kattavat suun tutkimukset, digitaaliset hammasröntgenkuvat, ammattimainen puhdistus, tarvittaessa poistot ja ohjaus kotona tapahtuvaan hammashoitoon virtuaalilemmikkisi suun terveyden ylläpitämiseksi käyntien välillä.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "preventive",
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Ennaltaehkäisevä hoito",
      description: "Loisten ehkäisy ja torjunta terveemmälle lemmikille",
      details:
        "Tarjoamme kattavia loisten ehkäisyohjelmia, mukaan lukien sydänmadon, kirppujen, punkkien ja suolistoloisten torjunta. Tiimimme suosittelee parhaita ennaltaehkäiseviä tuotteita virtuaalilemmikkisi tarpeiden ja elämäntavan perusteella.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "diagnostics",
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Diagnostiikkapalvelut",
      description: "Edistyneet testit ja kuvantaminen tarkkaa diagnoosia varten",
      details:
        "Sisäinen laboratoriomme ja diagnostiset kuvantamisvalmiutemme mahdollistavat nopean ja tarkan diagnoosin. Palveluihin kuuluvat verikokeet, virtsa-analyysit, ulostenäytteiden tutkimukset, digitaaliset röntgenkuvat, ultraääni ja paljon muuta.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "senior",
      icon: <PawPrint className="h-8 w-8 text-primary" />,
      title: "Seniorieläinten hoito",
      description: "Erikoistunut hoito ikääntyville lemmikeille elämänlaadun ylläpitämiseksi",
      details:
        "virtuaalilemmikkien ikääntyessä ne tarvitsevat erikoistuneempaa hoitoa. Seniorieläinohjelmiimme kuuluvat tiheämmät tarkastukset, kattavat verikokeet ja ikään liittyvien sairauksien hallinta pitääksemme vanhemman virtuaalilemmikkisi mukavana ja terveenä.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "pharmacy",
      icon: <Pill className="h-8 w-8 text-primary" />,
      title: "Apteekkipalvelut",
      description: "Kätevä pääsy lääkkeisiin ja reseptiruokavalioihin",
      details:
        "Sisäinen apteekkimme tarjoaa välittömän pääsyn lääkkeisiin, joita virtuaalilemmikkisi saattaa tarvita. Tarjoamme myös verkossa reseptien uusimisen ja meillä on valikoima reseptiruokavalioita erityisten terveyshuolien käsittelemiseksi.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Eläinlääkäripalvelumme</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Kattavaa hoitoa virtuaalilemmikkisi elämän jokaiseen vaiheeseen, ennaltaehkäisevästä hyvinvoinnista
              erikoishoitoihin.
            </p>
            <Button size="lg" asChild>
              <Link href="/appointment">Varaa Aika</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">{service.description}</p>
                  <p className="mb-6">{service.details}</p>
                  <Button asChild>
                    <Link href="/appointment">Varaa aika</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Usein Kysytyt Kysymykset</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kuinka usein minun pitäisi tuoda virtuaalilemmikkini tarkastukseen?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Suosittelemme vuosittaisia terveystarkastuksia aikuisille lemmikeille ja puolivuosittaisia
                    tarkastuksia seniorilemmikeille (yleensä yli 7-vuotiaat koirat ja yli 10-vuotiaat kissat). Pennut ja
                    kissanpennut tarvitsevat tiheämpiä käyntejä rokotuksia ja kehityksen seurantaa varten.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mitä rokotuksia virtuaalilemmikkini tarvitsee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Koirien perusrokotuksiin kuuluvat rabies, penikkatauti, parvovirus ja adenovirus. Kissojen
                    perusrokotuksiin kuuluvat rabies, panleukopenia, calicivirus ja herpesvirus. Lisärokotuksia voidaan
                    suositella virtuaalilemmikkisi elämäntavan ja riskitekijöiden perusteella.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Miten valmistelen virtuaalilemmikkini leikkaukseen?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Tyypillisesti pyydämme, että pidät lemmikin ravinnotta 8-12 tuntia ennen leikkausta, vaikka vettä
                    saa yleensä antaa leikkauspäivän aamuun asti. Annamme tarkat ohjeet leikkausta edeltävässä
                    konsultaatiossa virtuaalilemmikkisi yksilöllisten tarpeiden perusteella.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tarjoatteko päivystyspalveluja?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                  Tarjoamme hoitoa normaalien aukioloaikojemme puitteissa. Aukioloaikojen ulkopuolella meillä on 24/7 päivystysvalmius jolloin vastaanotamme potilaita vain kiireelisissä ja hätätilanteissa. Soita meille myös aukioloaikojen ulkopuolella saadaksesi ohjeita hätätilanteissa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

