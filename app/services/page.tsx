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
      title: "Wellness Exams",
      description: "Comprehensive physical examinations to assess your pet's overall health",
      details:
        "Our thorough wellness exams include checking vital signs, weight, eyes, ears, mouth, skin, coat, and internal organs. We recommend annual exams for adult pets and bi-annual exams for senior pets.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "vaccinations",
      icon: <Syringe className="h-8 w-8 text-primary" />,
      title: "Vaccinations",
      description: "Core and lifestyle vaccines to protect your pet from common diseases",
      details:
        "We offer all core vaccines for dogs and cats, as well as additional vaccines based on your pet's lifestyle and risk factors. Our veterinarians will create a customized vaccination schedule for your pet.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "surgery",
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Surgical Services",
      description: "From routine spay/neuter to complex procedures",
      details:
        "Our surgical suite is equipped with advanced monitoring equipment and our team is trained in the latest surgical techniques. We perform routine procedures like spay/neuter as well as more complex soft tissue and orthopedic surgeries.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "dental",
      icon: <Tooth className="h-8 w-8 text-primary" />,
      title: "Dental Care",
      description: "Professional cleaning and dental treatments to maintain oral health",
      details:
        "Our dental services include comprehensive oral exams, digital dental X-rays, professional cleaning, extractions when necessary, and guidance on at-home dental care to maintain your pet's oral health between visits.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "preventive",
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Preventive Care",
      description: "Parasite prevention and control for a healthier pet",
      details:
        "We offer comprehensive parasite prevention programs including heartworm, flea, tick, and intestinal parasite control. Our team will recommend the best preventive products based on your pet's needs and lifestyle.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "diagnostics",
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Diagnostic Services",
      description: "Advanced testing and imaging for accurate diagnosis",
      details:
        "Our in-house laboratory and diagnostic imaging capabilities allow for quick and accurate diagnosis. Services include blood work, urinalysis, fecal testing, digital X-rays, ultrasound, and more.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "senior",
      icon: <PawPrint className="h-8 w-8 text-primary" />,
      title: "Senior Pet Care",
      description: "Specialized care for aging pets to maintain quality of life",
      details:
        "As pets age, they require more specialized care. Our senior pet programs include more frequent check-ups, comprehensive blood work, and management of age-related conditions to keep your older pet comfortable and healthy.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "pharmacy",
      icon: <Pill className="h-8 w-8 text-primary" />,
      title: "Pharmacy Services",
      description: "Convenient access to medications and prescription diets",
      details:
        "Our in-house pharmacy provides immediate access to medications your pet may need. We also offer online prescription refills and carry a variety of prescription diets to address specific health concerns.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Veterinary Services</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive care for every stage of your pet's life, from preventive wellness to specialized treatments.
            </p>
            <Button size="lg" asChild>
              <Link href="/appointment">Schedule an Appointment</Link>
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
                    <Link href="/appointment">Book This Service</Link>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How often should I bring my pet for a check-up?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We recommend annual wellness exams for adult pets and bi-annual exams for senior pets (generally
                    over 7 years for dogs and over 10 years for cats). Puppies and kittens need more frequent visits for
                    vaccinations and development monitoring.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What vaccinations does my pet need?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Core vaccines for dogs include rabies, distemper, parvovirus, and adenovirus. For cats, core
                    vaccines include rabies, panleukopenia, calicivirus, and herpesvirus. Additional vaccines may be
                    recommended based on your pet's lifestyle and risk factors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I prepare my pet for surgery?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Typically, we ask that you withhold food for 8-12 hours before surgery, though water is usually
                    allowed until the morning of the procedure. We'll provide specific instructions during your
                    pre-surgical consultation based on your pet's individual needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you offer emergency services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We offer urgent care during our regular business hours. For after-hours emergencies, we work closely
                    with local emergency clinics and can direct you to the nearest facility. Please call us even after
                    hours for guidance on emergency situations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule a Visit?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Whether your pet needs a routine check-up or specialized care, our team is here to help.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

