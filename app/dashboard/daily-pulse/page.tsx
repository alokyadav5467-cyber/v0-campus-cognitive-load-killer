"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Coffee, 
  Sun, 
  Sandwich, 
  Moon,
  Bell,
  Calendar,
  Info,
  TrendingUp,
  Clock,
  MapPin
} from "lucide-react";

export default function DailyPulsePage() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Sample mess menu data
  const messMenu = {
    breakfast: [
      { item: "Aloo Paratha", type: "Main", vegetarian: true },
      { item: "Butter & Curd", type: "Side", vegetarian: true },
      { item: "Tea & Coffee", type: "Beverage", vegetarian: true },
      { item: "Seasonal Fruits", type: "Dessert", vegetarian: true },
    ],
    lunch: [
      { item: "Rice", type: "Main", vegetarian: true },
      { item: "Roti / Chapati", type: "Main", vegetarian: true },
      { item: "Dal Tadka", type: "Curry", vegetarian: true },
      { item: "Paneer Butter Masala", type: "Curry", vegetarian: true },
      { item: "Mix Veg", type: "Side", vegetarian: true },
      { item: "Salad & Raita", type: "Side", vegetarian: true },
      { item: "Gulab Jamun", type: "Dessert", vegetarian: true },
    ],
    snacks: [
      { item: "Samosa", type: "Snack", vegetarian: true },
      { item: "Green Chutney", type: "Side", vegetarian: true },
      { item: "Tea & Coffee", type: "Beverage", vegetarian: true },
    ],
    dinner: [
      { item: "Jeera Rice", type: "Main", vegetarian: true },
      { item: "Roti / Chapati", type: "Main", vegetarian: true },
      { item: "Chole Masala", type: "Curry", vegetarian: true },
      { item: "Mixed Dal", type: "Curry", vegetarian: true },
      { item: "Aloo Gobi", type: "Side", vegetarian: true },
      { item: "Salad & Pickle", type: "Side", vegetarian: true },
      { item: "Ice Cream", type: "Dessert", vegetarian: true },
    ],
  };

  // Sample campus updates
  const campusUpdates = [
    {
      id: 1,
      title: "Tech Fest 2026 Registration Open",
      description: "Register for the annual tech fest. Exciting competitions, workshops, and prizes await!",
      category: "Event",
      date: "2 hours ago",
      priority: "high",
    },
    {
      id: 2,
      title: "Library Hours Extended",
      description: "Due to mid-semester exams, library will remain open 24/7 from next week.",
      category: "Announcement",
      date: "5 hours ago",
      priority: "medium",
    },
    {
      id: 3,
      title: "Hostel Internet Maintenance",
      description: "Internet services will be down for maintenance on Saturday 2 AM - 6 AM.",
      category: "Notice",
      date: "1 day ago",
      priority: "low",
    },
    {
      id: 4,
      title: "Guest Lecture: AI in Healthcare",
      description: "Join Dr. Sharma for an insightful session on AI applications in healthcare sector.",
      category: "Event",
      date: "1 day ago",
      priority: "medium",
    },
    {
      id: 5,
      title: "Sports Day Next Friday",
      description: "Annual sports day scheduled. All students are encouraged to participate in various events.",
      category: "Event",
      date: "2 days ago",
      priority: "medium",
    },
  ];

  const mealIcons = {
    breakfast: Coffee,
    lunch: Sun,
    snacks: Sandwich,
    dinner: Moon,
  };

  const mealTimes = {
    breakfast: "7:30 AM - 9:30 AM",
    lunch: "12:30 PM - 2:30 PM",
    snacks: "4:30 PM - 5:30 PM",
    dinner: "7:30 PM - 9:30 PM",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Daily Pulse</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {today}
          </p>
        </div>
      </div>

      {/* Live Mess Menu Section */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Coffee className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Live Mess Menu</h2>
            <p className="text-sm text-muted-foreground">Today's meals at campus mess</p>
          </div>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {Object.keys(messMenu).map((meal) => {
              const Icon = mealIcons[meal as keyof typeof mealIcons];
              return (
                <TabsTrigger 
                  key={meal} 
                  value={meal}
                  className="flex items-center gap-2 capitalize"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{meal}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(messMenu).map(([meal, items]) => (
            <TabsContent key={meal} value={meal} className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {mealTimes[meal as keyof typeof mealTimes]}
                  </span>
                </div>
                <Badge variant="outline" className="border-accent/30 text-accent">
                  {items.length} Items
                </Badge>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {items.map((item, index) => (
                  <Card 
                    key={index}
                    className="border-border bg-secondary/30 p-4 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{item.item}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      {item.vegetarian && (
                        <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-green-500">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Card>

      {/* Beyond the Basics - Campus Updates */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Beyond the Basics</h2>
            <p className="text-sm text-muted-foreground">Campus updates, tips, and announcements</p>
          </div>
        </div>

        <div className="space-y-3">
          {campusUpdates.map((update, index) => {
            const priorityStyles = {
              high: "border-l-4 border-l-destructive bg-destructive/5",
              medium: "border-l-4 border-l-accent bg-accent/5",
              low: "border-l-4 border-l-muted bg-muted/30",
            };

            const categoryIcons = {
              Event: Calendar,
              Announcement: Bell,
              Notice: Info,
            };

            const CategoryIcon = categoryIcons[update.category as keyof typeof categoryIcons] || Info;

            return (
              <Card 
                key={update.id}
                className={`border-border p-4 transition-all hover:shadow-lg ${
                  priorityStyles[update.priority as keyof typeof priorityStyles]
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CategoryIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-lg">{update.title}</h3>
                      <Badge variant="secondary" className="shrink-0">
                        {update.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {update.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {update.date}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      {/* Quick Tips Section */}
      <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/5 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold">Student Tip of the Day</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Stay hydrated and take regular breaks while studying. The Pomodoro Technique (25 minutes focus, 5 minutes break) can boost your productivity significantly during exam preparation.
        </p>
      </Card>
    </div>
  );
}
