import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, MapPin, Phone, Users, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Kathmandu Traffic Portal</h1>
              <p className="text-sm text-gray-600">Smart City Solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/report" className="text-gray-700 hover:text-blue-600 font-medium">
              Report Issue
            </Link>
            <Link href="/traffic-map" className="text-gray-700 hover:text-blue-600 font-medium">
              Traffic Map
            </Link>
            <Link href="/emergency" className="text-gray-700 hover:text-blue-600 font-medium">
              Emergency
            </Link>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Making Kathmandu
            <span className="text-blue-600 block">Traffic Smarter</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Report traffic issues, get real-time updates, and help build a better transportation system for our
            beautiful city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <Link href="/report">Report an Issue</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3">
              <Link href="/traffic-map">View Traffic Map</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">1,247</CardTitle>
                <CardDescription>Issues Reported This Month</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">8,932</CardTitle>
                <CardDescription>Active Community Members</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">2.4 hrs</CardTitle>
                <CardDescription>Average Response Time</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">73%</CardTitle>
                <CardDescription>Issues Resolved</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">How We're Helping Kathmandu</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle>Real-Time Traffic Updates</CardTitle>
                <CardDescription>
                  Get live traffic conditions across major routes in Kathmandu valley including Ring Road, Tribhuvan
                  Highway, and city centers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertTriangle className="h-10 w-10 text-red-600 mb-4" />
                <CardTitle>Issue Reporting</CardTitle>
                <CardDescription>
                  Report traffic jams, road damage, signal problems, and other urban issues directly to authorities with
                  photo evidence.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Emergency Services</CardTitle>
                <CardDescription>
                  Quick access to emergency contacts, nearest hospitals, police stations, and traffic police for
                  immediate assistance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button asChild size="lg" className="h-20 flex-col space-y-2">
              <Link href="/report">
                <AlertTriangle className="h-6 w-6" />
                <span>Report Traffic Issue</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-20 flex-col space-y-2">
              <Link href="/traffic-map">
                <MapPin className="h-6 w-6" />
                <span>Check Traffic Map</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-20 flex-col space-y-2">
              <Link href="/emergency">
                <Phone className="h-6 w-6" />
                <span>Emergency Contacts</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-20 flex-col space-y-2">
              <Link href="/dashboard">
                <TrendingUp className="h-6 w-6" />
                <span>View Dashboard</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="font-bold">Kathmandu Traffic Portal</span>
              </div>
              <p className="text-gray-400">Building smarter transportation solutions for Kathmandu valley.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/report" className="hover:text-white">
                    Report Issues
                  </Link>
                </li>
                <li>
                  <Link href="/traffic-map" className="hover:text-white">
                    Traffic Map
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="hover:text-white">
                    Emergency
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-white">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Emergency Contacts</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Police: 100</li>
                <li>Traffic Police: 103</li>
                <li>Ambulance: 102</li>
                <li>Fire: 101</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kathmandu Traffic Portal. Made with ❤️ for Nepal.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
