import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, ArrowLeft, Hospital, Shield, Truck, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      service: "Police",
      number: "100",
      icon: Shield,
      description: "General police emergency",
      color: "text-blue-600",
    },
    {
      service: "Traffic Police",
      number: "103",
      icon: AlertTriangle,
      description: "Traffic accidents and violations",
      color: "text-orange-600",
    },
    {
      service: "Ambulance",
      number: "102",
      icon: Hospital,
      description: "Medical emergencies",
      color: "text-red-600",
    },
    {
      service: "Fire Department",
      number: "101",
      icon: Truck,
      description: "Fire and rescue services",
      color: "text-red-500",
    },
  ]

  const hospitals = [
    {
      name: "Tribhuvan University Teaching Hospital",
      location: "Maharajgunj",
      phone: "01-4412303",
      emergency: "01-4412404",
    },
    {
      name: "Bir Hospital",
      location: "Mahaboudha",
      phone: "01-4221119",
      emergency: "01-4221988",
    },
    {
      name: "Patan Hospital",
      location: "Lagankhel, Lalitpur",
      phone: "01-5522266",
      emergency: "01-5522278",
    },
    {
      name: "Nepal Medical College",
      location: "Jorpati",
      phone: "01-4911008",
      emergency: "01-4911009",
    },
  ]

  const trafficPoliceStations = [
    {
      name: "Metropolitan Traffic Police Division",
      location: "Ramshah Path",
      phone: "01-4227015",
    },
    {
      name: "Traffic Police Office",
      location: "Kalanki",
      phone: "01-4270982",
    },
    {
      name: "Traffic Police Office",
      location: "Koteshwor",
      phone: "01-4600119",
    },
    {
      name: "Traffic Police Office",
      location: "Maharajgunj",
      phone: "01-4412761",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Emergency Services</h1>
              <p className="text-gray-600">Quick access to emergency contacts and services</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Emergency Hotlines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Emergency Hotlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact) => (
              <Card key={contact.service} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <contact.icon className={`h-12 w-12 mx-auto mb-2 ${contact.color}`} />
                  <CardTitle className="text-lg">{contact.service}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-4">{contact.number}</div>
                  <Button asChild className="w-full">
                    <a href={`tel:${contact.number}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hospitals */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Major Hospitals</h2>
            <div className="space-y-4">
              {hospitals.map((hospital) => (
                <Card key={hospital.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Hospital className="h-5 w-5 text-red-600" />
                      <span>{hospital.name}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{hospital.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={`tel:${hospital.phone}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Main: {hospital.phone}
                        </a>
                      </Button>
                      <Button size="sm" asChild className="flex-1">
                        <a href={`tel:${hospital.emergency}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Emergency: {hospital.emergency}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Traffic Police Stations */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Traffic Police Stations</h2>
            <div className="space-y-4">
              {trafficPoliceStations.map((station) => (
                <Card key={station.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span>{station.name}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{station.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={`tel:${station.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        {station.phone}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Emergency Tips */}
        <section className="mt-12">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-800">
                <AlertTriangle className="h-5 w-5" />
                <span>Emergency Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-700">
              <ul className="space-y-2 list-disc list-inside">
                <li>Stay calm and assess the situation</li>
                <li>Call the appropriate emergency number immediately</li>
                <li>Provide clear location details and landmarks</li>
                <li>Don't move injured persons unless they're in immediate danger</li>
                <li>Keep emergency numbers saved in your phone</li>
                <li>Always carry identification and emergency contact information</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
