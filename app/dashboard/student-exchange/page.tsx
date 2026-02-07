"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  ShoppingBag, 
  Car,
  Search,
  Plus,
  BookOpen,
  Laptop,
  Package,
  MapPin,
  Calendar,
  Users,
  Phone,
  DollarSign,
  Clock,
  Navigation
} from "lucide-react";

export default function StudentExchangePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample marketplace items
  const marketplaceItems = [
    {
      id: 1,
      title: "Data Structures & Algorithms Textbook",
      category: "Books",
      price: 450,
      condition: "Like New",
      seller: "Rahul Kumar",
      sellerContact: "+91 98765 43210",
      image: "/images/book-placeholder.jpg",
      description: "Cormen's classic textbook, barely used",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "HP Laptop (i5, 8GB RAM)",
      category: "Electronics",
      price: 25000,
      condition: "Good",
      seller: "Priya Sharma",
      sellerContact: "+91 98765 43211",
      image: "/images/laptop-placeholder.jpg",
      description: "Well maintained laptop, 2 years old",
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "Scientific Calculator",
      category: "Accessories",
      price: 800,
      condition: "Excellent",
      seller: "Amit Patel",
      sellerContact: "+91 98765 43212",
      image: "/images/calculator-placeholder.jpg",
      description: "Casio fx-991EX, perfect condition",
      posted: "1 day ago",
    },
    {
      id: 4,
      title: "Engineering Drawing Kit",
      category: "Accessories",
      price: 300,
      condition: "New",
      seller: "Sneha Reddy",
      sellerContact: "+91 98765 43213",
      image: "/images/drawing-kit-placeholder.jpg",
      description: "Complete set, never used",
      posted: "4 days ago",
    },
    {
      id: 5,
      title: "Python Programming Book",
      category: "Books",
      price: 350,
      condition: "Good",
      seller: "Vikram Singh",
      sellerContact: "+91 98765 43214",
      image: "/images/book-placeholder.jpg",
      description: "Learn Python the Hard Way - Great condition",
      posted: "5 days ago",
    },
  ];

  // Sample cab pool listings
  const cabPoolListings = [
    {
      id: 1,
      from: "IIT Ropar Campus",
      to: "Chandigarh Airport",
      date: "Feb 10, 2026",
      time: "6:00 AM",
      seatsAvailable: 3,
      totalSeats: 4,
      pricePerSeat: 300,
      organizer: "Arjun Mehta",
      organizerContact: "+91 98765 43220",
      status: "Confirmed",
    },
    {
      id: 2,
      from: "IIT Ropar Campus",
      to: "Chandigarh Railway Station",
      date: "Feb 12, 2026",
      time: "4:30 PM",
      seatsAvailable: 2,
      totalSeats: 4,
      pricePerSeat: 250,
      organizer: "Meera Joshi",
      organizerContact: "+91 98765 43221",
      status: "Open",
    },
    {
      id: 3,
      from: "IIT Ropar Campus",
      to: "Rupnagar Market",
      date: "Feb 8, 2026",
      time: "10:00 AM",
      seatsAvailable: 1,
      totalSeats: 3,
      pricePerSeat: 100,
      organizer: "Karan Verma",
      organizerContact: "+91 98765 43222",
      status: "Almost Full",
    },
    {
      id: 4,
      from: "Chandigarh",
      to: "IIT Ropar Campus",
      date: "Feb 9, 2026",
      time: "8:00 PM",
      seatsAvailable: 4,
      totalSeats: 4,
      pricePerSeat: 200,
      organizer: "Divya Agarwal",
      organizerContact: "+91 98765 43223",
      status: "Open",
    },
  ];

  const categoryIcons: Record<string, any> = {
    Books: BookOpen,
    Electronics: Laptop,
    Accessories: Package,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Student Exchange</h1>
          <p className="text-muted-foreground">Buy, sell, and share rides with fellow students</p>
        </div>
        <Button className="rounded-full bg-accent hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" />
          Post Listing
        </Button>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="marketplace" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="marketplace" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Buy/Sell Marketplace
          </TabsTrigger>
          <TabsTrigger value="cabpool" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            Cab-Pool Coordinator
          </TabsTrigger>
        </TabsList>

        {/* Marketplace Tab */}
        <TabsContent value="marketplace" className="space-y-6">
          {/* Search Bar */}
          <Card className="border-border bg-card/50 backdrop-blur-sm p-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for books, gadgets, accessories..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </Card>

          {/* Category Filters */}
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary" className="cursor-pointer hover:bg-accent/20">
              All Items
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent/10">
              <BookOpen className="h-3 w-3 mr-1" />
              Books
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent/10">
              <Laptop className="h-3 w-3 mr-1" />
              Electronics
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent/10">
              <Package className="h-3 w-3 mr-1" />
              Accessories
            </Badge>
          </div>

          {/* Marketplace Items Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {marketplaceItems.map((item) => {
              const CategoryIcon = categoryIcons[item.category] || Package;
              
              return (
                <Card 
                  key={item.id}
                  className="border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center">
                    <CategoryIcon className="h-16 w-16 text-muted-foreground/30" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                        {item.condition}
                      </Badge>
                    </div>

                    <h3 className="font-bold text-lg mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-accent">
                          ₹{item.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Posted</p>
                        <p className="text-xs font-medium">{item.posted}</p>
                      </div>
                    </div>

                    {/* Seller Info */}
                    <div className="border-t border-border pt-3 mb-3">
                      <p className="text-xs text-muted-foreground mb-1">Seller</p>
                      <p className="font-semibold text-sm">{item.seller}</p>
                    </div>

                    {/* Contact Button */}
                    <Button className="w-full rounded-full bg-accent hover:bg-accent/90">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Seller
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Cab Pool Tab */}
        <TabsContent value="cabpool" className="space-y-6">
          {/* Info Card */}
          <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/5 backdrop-blur-sm p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Share Your Ride, Save Money</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow students traveling to the same destination. Split costs and travel together!
                </p>
              </div>
            </div>
          </Card>

          {/* Cab Pool Listings */}
          <div className="space-y-4">
            {cabPoolListings.map((ride) => {
              const statusStyles = {
                Confirmed: "bg-green-500/10 text-green-600 border-green-500/30",
                Open: "bg-accent/10 text-accent border-accent/30",
                "Almost Full": "bg-orange-500/10 text-orange-600 border-orange-500/30",
              };

              return (
                <Card 
                  key={ride.id}
                  className="border-border bg-card/50 backdrop-blur-sm p-5 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Route Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Navigation className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="font-bold">{ride.from}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>→</span>
                            <span>{ride.to}</span>
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={statusStyles[ride.status as keyof typeof statusStyles]}
                        >
                          {ride.status}
                        </Badge>
                      </div>

                      {/* Date and Time */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Date</p>
                            <p className="text-sm font-semibold">{ride.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Time</p>
                            <p className="text-sm font-semibold">{ride.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Seats</p>
                            <p className="text-sm font-semibold">
                              {ride.seatsAvailable}/{ride.totalSeats}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Per Seat</p>
                            <p className="text-sm font-semibold text-accent">₹{ride.pricePerSeat}</p>
                          </div>
                        </div>
                      </div>

                      {/* Organizer Info */}
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground">Organized by</p>
                          <p className="font-semibold">{ride.organizer}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="lg:w-40">
                      <Button 
                        className="w-full rounded-full bg-accent hover:bg-accent/90"
                        disabled={ride.seatsAvailable === 0}
                      >
                        {ride.seatsAvailable === 0 ? "Full" : "Join Ride"}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Expand the Exchange Placeholder */}
          <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-sm p-6">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                <Plus className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expand the Exchange</h3>
              <p className="text-muted-foreground mb-4">
                More student collaboration features coming soon! Share ideas, form study groups, and collaborate on projects.
              </p>
              <Button variant="outline" className="rounded-full">
                Coming Soon
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
