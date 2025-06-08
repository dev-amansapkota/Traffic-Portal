"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Camera, Send, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReportPage() {
  const [formData, setFormData] = useState({
    issueType: "",
    location: "",
    description: "",
    severity: "",
    contactInfo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Issue reported successfully! Tracking ID: KTM-" + Math.random().toString(36).substr(2, 9).toUpperCase())
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
              <h1 className="text-2xl font-bold">Report Traffic Issue</h1>
              <p className="text-gray-600">Help us improve Kathmandu's traffic conditions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Report New Issue</span>
              </CardTitle>
              <CardDescription>
                Provide detailed information about the traffic or infrastructure issue you've encountered.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="issueType">Issue Type</Label>
                  <Select
                    value={formData.issueType}
                    onValueChange={(value) => setFormData({ ...formData, issueType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traffic-jam">Heavy Traffic Jam</SelectItem>
                      <SelectItem value="road-damage">Road Damage/Potholes</SelectItem>
                      <SelectItem value="signal-problem">Traffic Signal Problem</SelectItem>
                      <SelectItem value="accident">Traffic Accident</SelectItem>
                      <SelectItem value="construction">Road Construction</SelectItem>
                      <SelectItem value="parking">Illegal Parking</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ring-road">Ring Road</SelectItem>
                      <SelectItem value="ratna-park">Ratna Park</SelectItem>
                      <SelectItem value="new-baneshwor">New Baneshwor</SelectItem>
                      <SelectItem value="koteshwor">Koteshwor</SelectItem>
                      <SelectItem value="kalanki">Kalanki</SelectItem>
                      <SelectItem value="balaju">Balaju</SelectItem>
                      <SelectItem value="maharajgunj">Maharajgunj</SelectItem>
                      <SelectItem value="lagankhel">Lagankhel</SelectItem>
                      <SelectItem value="chabahil">Chabahil</SelectItem>
                      <SelectItem value="other">Other Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the issue in detail. Include landmarks, time of occurrence, and any other relevant information..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level</Label>
                  <Select
                    value={formData.severity}
                    onValueChange={(value) => setFormData({ ...formData, severity: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Minor inconvenience</SelectItem>
                      <SelectItem value="medium">Medium - Moderate delay</SelectItem>
                      <SelectItem value="high">High - Significant disruption</SelectItem>
                      <SelectItem value="critical">Critical - Emergency situation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Information (Optional)</Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="Your phone number or email for follow-up"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Photo Evidence (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Upload photos of the issue</p>
                    <Button type="button" variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Report
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Emergency Notice */}
          <Card className="mt-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-900">Emergency Situations</h3>
                  <p className="text-red-700 text-sm mt-1">
                    For immediate emergencies, please call: Police (100), Traffic Police (103), or Ambulance (102)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
