import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Heart, Medal, Stethoscope, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Myötätuntoista hoitoa <span className="text-primary">karvaisille perheenjäsenillesi</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              TassuHoito Eläinklinikalla kohtelemme lemmikkejäsi kuin perhettä. Kokenut tiimimme tarjoaa kattavaa hoitoa
              uusimmalla teknologialla ja lempeällä otteella.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/appointment">Varaa Aika</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Palvelumme</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Eläinlääkäri koiran kanssa"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Palvelumme</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tarjoamme laajan valikoiman eläinlääkäripalveluja pitääksemme lemmikkisi terveinä ja onnellisina koko
              elämänsä ajan.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Stethoscope className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Terveystarkastukset</CardTitle>
                <CardDescription>Kattavat terveystarkastukset kaikenikäisille lemmikeille</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Säännölliset tarkastukset auttavat havaitsemaan terveysongelmat varhain ja pitävät lemmikkisi
                  optimaalisessa kunnossa.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#wellness">Lue Lisää</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Ennaltaehkäisevä Hoito</CardTitle>
                <CardDescription>Rokotukset, loishäädöt ja ravitsemusneuvonta</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Suojaa lemmikkisi yleisiltä sairauksilta ja varmista, että ne ylläpitävät terveitä elämäntapoja.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#preventive">Lue Lisää</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Medal className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Erikoishoito</CardTitle>
                <CardDescription>Kirurgia, hammashoito ja seniorieläinten palvelut</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Edistyneet hoidot ja erikoistunut hoito lemmikeille, joilla on erityisiä terveystarpeita.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#specialized">Lue Lisää</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/services">Katso Kaikki Palvelut</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tutustu Tiimiimme</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kokeneet eläinlääkärimme ja henkilökuntamme ovat sitoutuneet tarjoamaan parasta mahdollista hoitoa
              lemmikeillesi.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Tiimin jäsen ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    ELL {["Sanna Järvinen", "Mikko Korhonen", "Emilia Rodriguez"][i - 1]}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {["Johtava Eläinlääkäri", "Eläinkirurgi", "Eläintenhoitaja"][i - 1]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {
                      [
                        "Yli 15 vuoden kokemuksella ELL Järvinen on erikoistunut ennaltaehkäisevään hoitoon ja sisätauteihin.",
                        "ELL Korhonen on kirurgian asiantuntijamme, jolla on edistynyt koulutus ortopedisiin ja pehmytkudosleikkauksiin.",
                        "Emilia varmistaa, että potilaamme saavat myötätuntoista hoitoa ja avustaa kaikissa lääketieteellisissä toimenpiteissä.",
                      ][i - 1]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/staff">Tapaa Koko Tiimi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Valmis Varaamaan Käynnin?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Olemme täällä tarjoamassa parasta hoitoa karvaisille, höyhenisille tai suomuisille perheenjäsenillesi. Varaa
            aika tänään!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Varaa Aika
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="tel:0501234567">
                <Phone className="mr-2 h-5 w-5" />
                Soita Meille
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mitä Lemmikinomistajat Sanovat</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Älä usko vain meidän sanaamme - kuule tyytyväisiltä asiakkailtamme ja heidän lemmikeiltään.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-secondary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src={`/placeholder.svg?height=50&width=50`} alt="Asiakas" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{["Anna P.", "Roope T.", "Jaana M."][i - 1]}</h4>
                      <p className="text-sm text-muted-foreground">
                        Lemmikin {["Maxin", "Bellan", "Oliverin"][i - 1]} omistaja
                      </p>
                    </div>
                  </div>
                  <p className="text-sm italic">
                    {
                      [
                        "TassuHoidon tiimi on mahtava! He ovat huolehtineet koirastani Maxista vuosien ajan, enkä luottaisi kenenkään muun huolehtivan hänen terveydestään.",
                        "ELL Korhonen leikkasi kissani Bellan, ja hänen saamansa hoito oli poikkeuksellista. Jälkihoito oli perusteellista ja myötätuntoista.",
                        "Arvostan sitä, miten henkilökunta ottaa aikaa selittääkseen kaiken ja vastatakseen kaikkiin kysymyksiini Oliverin hoidosta. Todella paras eläinklinikka!",
                      ][i - 1]
                    }
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

