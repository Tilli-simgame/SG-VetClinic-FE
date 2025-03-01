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
              Parasta hoitoa <span className="text-primary">kaikille virtuaalilemmikeille!</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              TassuHoito Eläinklinikalla kohtelemme lemmikkejäsi kuin perhettä. Kokenut tiimimme tarjoaa kattavaa hoitoa
              uusimmalla teknologialla ja lempeällä otteella.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/appointment">Varaa aika</Link>
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
              Tarjoamme laajan valikoiman eläinlääkäripalveluja pitääksemme virtuaalilemmikkisi terveinä ja onnellisina koko
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
                  Säännölliset tarkastukset auttavat havaitsemaan terveysongelmat varhain ja pitävät virtuaalilemmikkisi
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
                  Suojaa virtuaalilemmikkisi yleisiltä sairauksilta ja varmista, että ne ylläpitävät terveitä elämäntapoja.
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

      {/* CTA Section */}
      <section className="py-16  bg-secondary/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Valmis Varaamaan Käynnin?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Olemme täällä tarjoamassa parasta hoitoa karvaisille, höyhenisille tai suomuisille virtuaalieläimille. Varaa
            aika tänään!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Varaa aika
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

