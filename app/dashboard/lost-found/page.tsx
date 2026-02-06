"use client";

import React from "react"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Camera,
  Upload,
  Search,
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { useState, useRef } from "react";

// Mock database of found items
const foundItemsDatabase = [
  {
    id: 1,
    type: "Wallet",
    color: "Brown leather",
    location: "Library - Room 201",
    dateFound: "Feb 5, 2026",
    image: "/placeholder.svg",
    features: ["leather", "brown", "wallet", "rectangular"],
  },
  {
    id: 2,
    type: "Water Bottle",
    color: "Blue metal",
    location: "Cafeteria - Counter 3",
    dateFound: "Feb 4, 2026",
    image: "/placeholder.svg",
    features: ["blue", "bottle", "metal", "cylindrical"],
  },
  {
    id: 3,
    type: "ID Card",
    color: "White with photo",
    location: "Admin Office - Reception",
    dateFound: "Feb 3, 2026",
    image: "/placeholder.svg",
    features: ["card", "white", "id", "rectangular"],
  },
  {
    id: 4,
    type: "Backpack",
    color: "Black with laptop compartment",
    location: "Hostel Block A - Common Room",
    dateFound: "Feb 2, 2026",
    image: "/placeholder.svg",
    features: ["black", "bag", "backpack", "large"],
  },
  {
    id: 5,
    type: "Keys",
    color: "Silver keychain with blue tag",
    location: "Sports Complex - Locker Room",
    dateFound: "Feb 1, 2026",
    image: "/placeholder.svg",
    features: ["silver", "keys", "metal", "small"],
  },
];

interface MatchResult {
  found: boolean;
  item?: typeof foundItemsDatabase[0];
  confidence?: number;
  detectedObject?: string;
}

export default function LostFoundPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [dateLost, setDateLost] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // AI Computer Vision Simulation
  const detectObjectFromImage = (imageData: string): string => {
    console.log("[v0] Running AI object detection...");
    
    // Simulate object detection based on mock logic
    const randomDetection = Math.random();
    
    if (randomDetection < 0.2) return "wallet";
    if (randomDetection < 0.4) return "bottle";
    if (randomDetection < 0.6) return "card";
    if (randomDetection < 0.8) return "backpack";
    return "keys";
  };

  // Feature Matcher AI
  const matchFeatures = (detectedObject: string): MatchResult => {
    console.log("[v0] Matching features against database...");
    
    // Find items that match the detected object
    const matchingItems = foundItemsDatabase.filter(item =>
      item.features.includes(detectedObject) || 
      item.type.toLowerCase().includes(detectedObject)
    );

    if (matchingItems.length > 0) {
      // Pick the most recent one
      const matchedItem = matchingItems[0];
      const confidence = 75 + Math.floor(Math.random() * 20); // 75-95%
      
      console.log("[v0] Match found with", confidence, "% confidence");
      
      return {
        found: true,
        item: matchedItem,
        confidence,
        detectedObject: matchedItem.type,
      };
    }

    console.log("[v0] No match found in database");
    
    return {
      found: false,
      detectedObject: detectedObject.charAt(0).toUpperCase() + detectedObject.slice(1),
    };
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("[v0] File uploaded:", file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("[v0] Camera capture:", file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!uploadedImage) {
      alert("Please upload an image first");
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    console.log("[v0] Starting AI analysis...");
    console.log("[v0] Optional inputs - Location:", location || "Not provided", "Date:", dateLost || "Not provided");

    // Simulate AI processing
    setTimeout(() => {
      const detectedObject = detectObjectFromImage(uploadedImage);
      const matchResult = matchFeatures(detectedObject);
      
      setResult(matchResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setLocation("");
    setDateLost("");
    setResult(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold mb-2">Smart Lost & Found</h1>
        <p className="text-muted-foreground">
          If you don't remember the details, show the object — AI will do the rest.
        </p>
      </div>

      {/* Upload Section */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-xl font-bold mb-6">Upload Object Photo</h2>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          {/* Upload from Files */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="group relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border bg-secondary/30 p-8 transition-all hover:border-accent/50 hover:bg-secondary/50 cursor-pointer"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
              <Upload className="h-8 w-8" />
            </div>
            <div className="text-center">
              <p className="font-semibold mb-1">Upload Photo</p>
              <p className="text-sm text-muted-foreground">
                Click to browse files
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Camera Capture */}
          <div
            onClick={() => cameraInputRef.current?.click()}
            className="group relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border bg-secondary/30 p-8 transition-all hover:border-accent/50 hover:bg-secondary/50 cursor-pointer"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
              <Camera className="h-8 w-8" />
            </div>
            <div className="text-center">
              <p className="font-semibold mb-1">Use Camera</p>
              <p className="text-sm text-muted-foreground">
                Capture photo directly
              </p>
            </div>
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleCameraCapture}
              className="hidden"
            />
          </div>
        </div>

        {/* Image Preview */}
        {uploadedImage && (
          <div className="mb-6 animate-fade-in">
            <Label className="text-sm font-medium mb-2 block">Uploaded Image:</Label>
            <div className="relative rounded-lg overflow-hidden border border-border bg-secondary/50">
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded object"
                className="w-full h-64 object-contain"
              />
            </div>
          </div>
        )}

        {/* Optional Fields */}
        <div className="space-y-4 mb-6">
          <p className="text-sm text-muted-foreground italic">
            Optional: These fields help improve accuracy but are not required
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Approximate Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-secondary/30 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select location...</option>
                  <option value="library">Library</option>
                  <option value="cafeteria">Cafeteria</option>
                  <option value="hostel">Hostel</option>
                  <option value="sports">Sports Complex</option>
                  <option value="admin">Admin Office</option>
                  <option value="classroom">Classroom</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateLost" className="text-sm font-medium">
                Date Lost
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="dateLost"
                  type="date"
                  value={dateLost}
                  onChange={(e) => setDateLost(e.target.value)}
                  className="pl-10 border-border bg-secondary/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            size="lg"
            onClick={handleAnalyze}
            disabled={!uploadedImage || isAnalyzing}
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                Analyzing with AI...
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Find My Item
              </>
            )}
          </Button>
          {uploadedImage && (
            <Button
              size="lg"
              variant="outline"
              onClick={handleReset}
              disabled={isAnalyzing}
              className="border-border bg-transparent hover:bg-secondary/50"
            >
              Reset
            </Button>
          )}
        </div>
      </Card>

      {/* Results Section */}
      {result && (
        <Card className="border-border bg-card/50 backdrop-blur-sm p-8 animate-fade-in-up">
          {result.found ? (
            // Item Found
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-accent">Item Matched Successfully!</h2>
                  <p className="text-sm text-muted-foreground">AI has found a matching item in our database</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <span className="text-xs font-semibold text-accent uppercase">AI Detection</span>
                    </div>
                    <p className="text-lg font-semibold mb-1">{result.detectedObject}</p>
                    <p className="text-sm text-muted-foreground">{result.item?.color}</p>
                  </div>

                  <div className="rounded-lg border border-border bg-secondary/30 p-4">
                    <p className="text-xs text-muted-foreground mb-1">Confidence Score</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full bg-accent transition-all"
                          style={{ width: `${result.confidence}%` }}
                        />
                      </div>
                      <span className="text-lg font-bold text-accent">{result.confidence}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg border border-border bg-secondary/30 p-4">
                    <p className="text-xs text-muted-foreground mb-2">Availability Status</p>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
                      <span className="text-lg font-bold text-accent">AVAILABLE</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-secondary/30 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <p className="text-xs font-semibold text-accent uppercase">Location</p>
                    </div>
                    <p className="text-lg font-semibold">{result.item?.location}</p>
                    <p className="text-sm text-muted-foreground mt-1">Found on: {result.item?.dateFound}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-accent mb-1">Next Steps:</p>
                    <p className="text-sm text-foreground">
                      Visit <span className="font-semibold">{result.item?.location}</span> with your student ID card to claim your item. 
                      Office hours: Monday-Friday, 9:00 AM - 5:00 PM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Item Not Found
            <div className="space-y-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground">
                  <XCircle className="h-12 w-12" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">No Matching Item Found</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Our AI detected a <span className="font-semibold text-foreground">{result.detectedObject}</span>, 
                    but it doesn't match any items in our current database.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-secondary/30 p-6 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground mb-4">
                  Your item may not have been submitted yet, or it might be in a different location.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Create Lost Item Alert
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  We'll notify you if a matching item is found
                </p>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Info Section */}
      <Card className="border-border bg-accent/5 backdrop-blur-sm p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-accent mb-2">How Smart Lost & Found Works</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Upload a photo or capture an image of your lost item</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Our AI detects the object type, color, and visual features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>The system matches features against our found items database</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Get instant results with location and availability status</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
