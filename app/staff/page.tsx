import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function StaffPage() {
  const veterinarians = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Veterinarian",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Johnson has been practicing veterinary medicine for over 15 years. She received her DVM from Cornell University and has special interests in internal medicine and preventive care. She shares her home with two rescue dogs and a cat.",
      specialties: ["Internal Medicine", "Preventive Care", "Senior Pet Care"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Michael Chen",
      title: "Veterinary Surgeon",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Chen specializes in orthopedic and soft tissue surgeries. After receiving his veterinary degree from UC Davis, he completed a surgical residency at the University of Pennsylvania. He is passionate about providing the highest quality surgical care for pets.",
      specialties: ["Orthopedic Surgery", "Soft Tissue Surgery", "Minimally Invasive Procedures"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Associate Veterinarian",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Rodriguez joined our team after graduating from Texas A&M. She has a special interest in dermatology and dental health. Her gentle approach makes her a favorite among anxious pets and their owners.",
      specialties: ["Dermatology", "Dental Care", "Behavior Counseling"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. James Wilson",
      title: "Associate Veterinarian",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Wilson brings over 10 years of emergency medicine experience to our practice. He excels in critical care and complex medical cases. When not at the clinic, he enjoys hiking with his two Labrador retrievers.",
      specialties: ["Emergency Medicine", "Critical Care", "Ultrasound"],
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
  ]

  const staff = [
    {
      name: "Lisa Martinez",
      title: "Practice Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Lisa ensures our clinic runs smoothly and efficiently. With a background in business administration and a love for animals, she's the perfect person to manage our day-to-day operations.",
    },
    {
      name: "Carlos Diaz",
      title: "Lead Veterinary Technician",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Carlos has been a certified veterinary technician for 8 years. He assists in surgeries, dental procedures, and ensures our patients receive the best care during their stay.",
    },
    {
      name: "Taylor Kim",
      title: "Veterinary Technician",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Taylor specializes in laboratory work and patient monitoring. Her calm demeanor helps anxious pets feel at ease during their visits.",
    },
    {
      name: "Alex Johnson",
      title: "Veterinary Assistant",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex assists our veterinarians and technicians with examinations and treatments. He's currently pursuing his veterinary technician certification.",
    },
    {
      name: "Olivia Smith",
      title: "Client Care Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Olivia is often the first friendly face you'll see at our clinic. She manages appointments, answers questions, and ensures a positive experience for all our clients.",
    },
    {
      name: "Marcus Lee",
      title: "Client Care Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Marcus helps clients understand treatment plans and handles insurance and billing questions. His knowledge and patience make him an invaluable team member.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground">
              Our compassionate and skilled team is dedicated to providing the highest quality care for your beloved
              pets.
            </p>
          </div>
        </div>
      </section>

      {/* Veterinarians Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Veterinarians</h2>
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
                      <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Our Support Staff</h2>
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
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're always looking for passionate, skilled professionals to join our veterinary family. If you love
              animals and want to make a difference in their lives, we'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team in Person</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Schedule an appointment today and experience our compassionate care firsthand.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

