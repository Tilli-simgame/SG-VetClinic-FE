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
              Compassionate Care for Your <span className="text-primary">Furry Family</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At PawCare Veterinary Clinic, we treat your pets like family. Our experienced team provides comprehensive
              care with the latest technology and a gentle touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/appointment">Book an Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Veterinarian with dog"
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
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of veterinary services to keep your pets healthy and happy throughout their lives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Stethoscope className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Wellness Exams</CardTitle>
                <CardDescription>Comprehensive health checks for pets of all ages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Regular check-ups help detect health issues early and keep your pet in optimal health.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#wellness">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Preventive Care</CardTitle>
                <CardDescription>Vaccinations, parasite control, and nutrition counseling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Protect your pet from common diseases and ensure they maintain a healthy lifestyle.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#preventive">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Medal className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Specialized Care</CardTitle>
                <CardDescription>Surgery, dental care, and senior pet services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced treatments and specialized care for pets with specific health needs.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services#specialized">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced veterinarians and staff are dedicated to providing the highest quality care for your pets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Dr. {["Sarah Johnson", "Michael Chen", "Emily Rodriguez"][i - 1]}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {["Chief Veterinarian", "Veterinary Surgeon", "Veterinary Technician"][i - 1]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {
                      [
                        "With over 15 years of experience, Dr. Johnson specializes in preventive care and internal medicine.",
                        "Dr. Chen is our surgical expert with advanced training in orthopedic and soft tissue procedures.",
                        "Emily ensures our patients receive compassionate care and assists in all medical procedures.",
                      ][i - 1]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/staff">Meet the Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule a Visit?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            We're here to provide the best care for your furry, feathered, or scaly family members. Book an appointment
            today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="tel:5551234567">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Pet Parents Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients and their pets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-secondary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src={`/placeholder.svg?height=50&width=50`} alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{["Amanda P.", "Robert T.", "Jessica M."][i - 1]}</h4>
                      <p className="text-sm text-muted-foreground">Pet Parent to {["Max", "Bella", "Oliver"][i - 1]}</p>
                    </div>
                  </div>
                  <p className="text-sm italic">
                    {
                      [
                        "The team at PawCare is amazing! They've been taking care of my dog Max for years, and I wouldn't trust anyone else with his health.",
                        "Dr. Chen performed surgery on my cat Bella, and the care she received was exceptional. The follow-up care was thorough and compassionate.",
                        "I appreciate how the staff takes the time to explain everything and answer all my questions about Oliver's care. Truly the best vet clinic!",
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

