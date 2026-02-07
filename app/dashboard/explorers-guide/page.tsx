"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Navigation,
  UtensilsCrossed,
  Coffee,
  Library,
  Home,
  Heart,
  Search,
  Star,
  Clock,
  Phone,
  Map,
  Route,
  Building2
} from "lucide-react";

export default function ExplorersGuidePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample nearby places data
  const nearbyPlaces = [
    {
      id: 1,
      name: "Cafe Coffee Day",
      category: "food",
      type: "Cafe",
      distance: "0.5 km",
      rating: 4.2,
      timings: "8:00 AM - 11:00 PM",
      contact: "+91 98765 12345",
      description: "Popular hangout spot for students",
      price: "₹₹",
    },
    {
      id: 2,
      name: "Punjab Sweets & Restaurant",
      category: "food",
      type: "Restaurant",
      distance: "1.2 km",
      rating: 4.5,
      timings: "10:00 AM - 10:00 PM",
      contact: "+91 98765 12346",
      description: "Best North Indian food nearby",
      price: "₹₹",
    },
    {
      id: 3,
      name: "Central Library",
      category: "library",
      type: "Public Library",
      distance: "0.8 km",
      rating: 4.0,
      timings: "6:00 AM - 10:00 PM",
      contact: "+91 98765 12347",
      description: "Quiet study space with AC",
      price: "Free",
    },
    {
      id: 4,
      name: "Civil Hospital Rupnagar",
      category: "hospital",
      type: "Hospital",
      distance: "2.5 km",
      rating: 3.8,
      timings: "24/7",
      contact: "108 (Emergency)",
      description: "Emergency medical services",
      price: "Govt. Hospital",
    },
    {
      id: 5,
      name: "PG Accommodation - Boys",
      category: "hostel",
      type: "Hostel/PG",
      distance: "0.3 km",
      rating: 4.1,
      timings: "Contact Owner",
      contact: "+91 98765 12348",
      description: "Clean rooms, Wi-Fi, meals available",
      price: "₹5000/month",
    },
    {
      id: 6,
      name: "Domino's Pizza",
      category: "food",
      type: "Fast Food",
      distance: "1.5 km",
      rating: 4.3,
      timings: "11:00 AM - 11:00 PM",
      contact: "+91 98765 12349",
      description: "Pizza delivery & dine-in",
      price: "₹₹",
    },
    {
      id: 7,
      name: "Green Park",
      category: "hangout",
      type: "Park",
      distance: "0.7 km",
      rating: 4.4,
      timings: "5:00 AM - 8:00 PM",
      contact: "N/A",
      description: "Perfect for evening walks",
      price: "Free",
    },
    {
      id: 8,
      name: "Starbucks",
      category: "hangout",
      type: "Cafe",
      distance: "1.8 km",
      rating: 4.6,
      timings: "9:00 AM - 11:00 PM",
      contact: "+91 98765 12350",
      description: "Premium coffee and ambiance",
      price: "₹₹₹",
    },
  ];

  const categories = [
    { id: "all", label: "All Places", icon: MapPin },
    { id: "food", label: "Food Stalls", icon: UtensilsCrossed },
    { id: "library", label: "Libraries", icon: Library },
    { id: "hostel", label: "Hostels/PG", icon: Home },
    { id: "hospital", label: "Hospitals", icon: Heart },
    { id: "hangout", label: "Hangout Spots", icon: Coffee },
  ];

  const filteredPlaces = nearbyPlaces.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryIcons: Record<string, any> = {
    food: UtensilsCrossed,
    library: Library,
    hostel: Home,
    hospital: Heart,
    hangout: Coffee,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Explorer's Guide</h1>
          <p className="text-muted-foreground">Discover nearby places and smart navigation</p>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="nearby" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="nearby" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Nearby Hub
          </TabsTrigger>
          <TabsTrigger value="navigation" className="flex items-center gap-2">
            <Navigation className="h-4 w-4" />
            Navigate Smarter
          </TabsTrigger>
        </TabsList>

        {/* Nearby Hub Tab */}
        <TabsContent value="nearby" className="space-y-6">
          {/* Search and Filter */}
          <Card className="border-border bg-card/50 backdrop-blur-sm p-4">
            <div className="flex flex-col gap-4">
              {/* Search Bar */}
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for places..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  
                  return (
                    <Badge
                      key={category.id}
                      variant={isActive ? "default" : "outline"}
                      className={`cursor-pointer ${isActive ? "bg-accent hover:bg-accent/90" : "hover:bg-accent/10"}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <Icon className="h-3 w-3 mr-1" />
                      {category.label}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Places Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => {
              const CategoryIcon = categoryIcons[place.category] || MapPin;
              
              return (
                <Card 
                  key={place.id}
                  className="border-border bg-card/50 backdrop-blur-sm p-5 hover:shadow-lg transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <CategoryIcon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg mb-1 line-clamp-1">{place.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {place.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {place.description}
                  </p>

                  {/* Details Grid */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Navigation className="h-4 w-4" />
                        <span>Distance</span>
                      </div>
                      <span className="font-semibold">{place.distance}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Star className="h-4 w-4" />
                        <span>Rating</span>
                      </div>
                      <span className="font-semibold text-accent">{place.rating} / 5</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Timings</span>
                      </div>
                      <span className="font-semibold text-xs">{place.timings}</span>
                    </div>

                    {place.contact !== "N/A" && (
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>Contact</span>
                        </div>
                        <span className="font-semibold text-xs">{place.contact}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                      <span className="text-muted-foreground">Price Range</span>
                      <span className="font-bold text-accent">{place.price}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 rounded-full text-xs">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button className="flex-1 rounded-full bg-accent hover:bg-accent/90 text-xs">
                      <Map className="h-3 w-3 mr-1" />
                      Directions
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredPlaces.length === 0 && (
            <Card className="border-border bg-card/50 backdrop-blur-sm p-12 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="font-bold text-lg mb-2">No places found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </Card>
          )}
        </TabsContent>

        {/* Navigate Smarter Tab */}
        <TabsContent value="navigation" className="space-y-6">
          {/* Quick Routes */}
          <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Route className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Quick Routes</h2>
                <p className="text-sm text-muted-foreground">Popular destinations from campus</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  destination: "Chandigarh Airport",
                  distance: "45 km",
                  duration: "50 mins",
                  mode: "Car",
                },
                {
                  destination: "Chandigarh Railway Station",
                  distance: "42 km",
                  duration: "45 mins",
                  mode: "Car",
                },
                {
                  destination: "Rupnagar Bus Stand",
                  distance: "5 km",
                  duration: "15 mins",
                  mode: "Auto",
                },
                {
                  destination: "Ropar Wetland",
                  distance: "8 km",
                  duration: "20 mins",
                  mode: "Bike",
                },
              ].map((route, index) => (
                <Card 
                  key={index}
                  className="border-border bg-secondary/30 p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold mb-1">{route.destination}</h3>
                      <Badge variant="outline" className="text-xs">
                        {route.mode}
                      </Badge>
                    </div>
                    <Building2 className="h-5 w-5 text-accent" />
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm mb-3">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Navigation className="h-4 w-4" />
                      <span>{route.distance}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{route.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full rounded-full bg-accent hover:bg-accent/90" size="sm">
                    <Map className="h-3 w-3 mr-2" />
                    Get Directions
                  </Button>
                </Card>
              ))}
            </div>
          </Card>

          {/* Map Integration Placeholder */}
          <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/5 backdrop-blur-sm p-8">
            <div className="text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                <Map className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're working on integrating an interactive map with real-time navigation, 
                live traffic updates, and custom route planning for students.
              </p>
              <Button variant="outline" className="rounded-full">
                Stay Tuned
              </Button>
            </div>
          </Card>

          {/* Travel Tips */}
          <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
            <h3 className="font-bold text-lg mb-4">Travel Tips</h3>
            <div className="space-y-3">
              {[
                "Use Cab Pool feature to save money on long-distance travel",
                "Local auto-rickshaws are available outside campus gate",
                "Book bus tickets in advance for weekend travel to nearby cities",
                "Keep emergency numbers saved for quick access",
              ].map((tip, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-secondary/30 p-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
