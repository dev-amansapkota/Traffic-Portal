"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function TrafficMapPage() {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null)

  const trafficData = [
    {
      id: "ring-road-east",
      name: "Ring Road (East)",
      status: "heavy",
      delay: "25-30 min",
      description: "Heavy congestion from Koteshwor to Tinkune",
      lastUpdated: "2 min ago",
    },
    {
      id: "ring-road-west",
      name: "Ring Road (West)",
      status: "moderate",
      delay: "10-15 min",
      description: "Moderate traffic near Kalanki intersection",
      lastUpdated: "5 min ago",
    },
    {
      id: "tribhuvan-highway",
      name: "Tribhuvan Highway",
      status: "clear",
      delay: "Normal",
      description: "Traffic flowing smoothly",
      lastUpdated: "1 min ago",
    },
    {
      id: "ratna-park",
      name: "Ratna Park Area",
      status: "heavy",
      delay: "20-25 min",
      description: "Construction work causing delays",
      lastUpdated: "3 min ago",
    },
    {
      id: "new-baneshwor",
      name: "New Baneshwor",
      status: "moderate",
      delay: "8-12 min",
      description: "Peak hour traffic buildup",
      lastUpdated: "4 min ago",
    },
    {
      id: "maharajgunj",
      name: "Maharajgunj",
      status: "clear",
      delay: "Normal",
      description: "Light traffic, good flow",
      lastUpdated: "2 min ago",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "heavy":
        return "bg-red-500"
      case "moderate":
        return "bg-yellow-500"
      case "clear":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "heavy":
        return <XCircle className="h-4 w-4" />
      case "moderate":
        return <AlertTriangle className="h-4 w-4" />
      case "clear":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

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
              <h1 className="text-2xl font-bold">Live Traffic Map</h1>
              <p className="text-gray-600">Real-time traffic conditions across Kathmandu</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Kathmandu Traffic Map</span>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Last updated: 1 min ago</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full">
                {/* Simplified Map Representation */}
                <div className="relative h-full bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                      <p className="text-gray-600 max-w-md">
                        Interactive map showing real-time traffic conditions would be integrated here using services
                        like Google Maps or OpenStreetMap.
                      </p>
                    </div>
                  </div>

                  {/* Traffic Status Indicators */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Clear Traffic</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium">Moderate Traffic</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">Heavy Traffic</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Status List */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Traffic Status</CardTitle>
                <CardDescription>Live updates from major routes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trafficData.map((route) => (
                  <div
                    key={route.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedRoute === route.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedRoute(route.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{route.name}</h4>
                      <Badge variant="secondary" className={`${getStatusColor(route.status)} text-white`}>
                        {getStatusIcon(route.status)}
                        <span className="ml-1 capitalize">{route.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{route.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="font-medium">Delay: {route.delay}</span>
                      <span>{route.lastUpdated}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start">
                  <Link href="/report">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Report Traffic Issue
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Alternative Route
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Set Traffic Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
