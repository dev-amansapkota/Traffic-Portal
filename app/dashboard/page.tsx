"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, Users, MapPin } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const recentReports = [
    {
      id: "KTM-001",
      type: "Traffic Jam",
      location: "Ring Road East",
      status: "In Progress",
      priority: "High",
      time: "2 hours ago",
    },
    {
      id: "KTM-002",
      type: "Road Damage",
      location: "Ratna Park",
      status: "Resolved",
      priority: "Medium",
      time: "5 hours ago",
    },
    {
      id: "KTM-003",
      type: "Signal Problem",
      location: "Koteshwor",
      status: "Pending",
      priority: "High",
      time: "1 day ago",
    },
  ]

  const trafficStats = [
    { route: "Ring Road", congestion: 85, trend: "up" },
    { route: "Tribhuvan Highway", congestion: 45, trend: "down" },
    { route: "Ratna Park Area", congestion: 70, trend: "up" },
    { route: "New Baneshwor", congestion: 60, trend: "stable" },
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
              <h1 className="text-2xl font-bold">Traffic Dashboard</h1>
              <p className="text-gray-600">Overview of Kathmandu traffic conditions and reports</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports Today</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8%</span> resolution rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4h</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">+15min</span> from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+23%</span> this month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Latest traffic issues reported by citizens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium">{report.id}</span>
                        <Badge variant={report.priority === "High" ? "destructive" : "secondary"}>
                          {report.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {report.type} - {report.location}
                      </p>
                      <p className="text-xs text-gray-500">{report.time}</p>
                    </div>
                    <Badge
                      variant={
                        report.status === "Resolved"
                          ? "default"
                          : report.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Congestion */}
          <Card>
            <CardHeader>
              <CardTitle>Traffic Congestion Levels</CardTitle>
              <CardDescription>Current congestion on major routes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {trafficStats.map((stat) => (
                  <div key={stat.route} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{stat.route}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{stat.congestion}%</span>
                        {stat.trend === "up" && <TrendingUp className="h-4 w-4 text-red-500" />}
                        {stat.trend === "down" && <TrendingDown className="h-4 w-4 text-green-500" />}
                        {stat.trend === "stable" && <div className="h-4 w-4 bg-gray-400 rounded-full" />}
                      </div>
                    </div>
                    <Progress value={stat.congestion} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild className="h-20 flex-col space-y-2">
                <Link href="/report">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Report New Issue</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col space-y-2">
                <Link href="/traffic-map">
                  <MapPin className="h-6 w-6" />
                  <span>View Traffic Map</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col space-y-2">
                <Link href="/emergency">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Emergency Services</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
