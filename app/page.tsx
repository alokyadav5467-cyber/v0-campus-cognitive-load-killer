"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Mail, Sparkles, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/images/from-20klickpin-20cf-20ghim-20c-e1-bb-a7a-20claire-20ostre-20tr-c3-aan-20mapping-20-20-e1-ba-a2nh-20b-e1-ba-a7u-20tr-e1-bb-9di-20-c4-91-c3-aam-20thi-e1-ba-bft-20k-e1-ba-bf-20t-e1-ba-a1p-20ch-c3-ad-20ph-c3-b4ng-20n-e1-bb-81n.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/50 to-background/60" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-primary/5 blur-3xl animate-pulse-glow-alt" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden px-4 py-24 md:py-32 lg:py-40">
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <div 
              className={`flex justify-center mb-6 ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <span className="text-3xl font-bold">CA</span>
              </div>
            </div>
            <h1 
              className={`mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              Campus
              <br />
              <span className="text-accent">All Rounder</span>
            </h1>
            <p 
              className={`mx-auto mb-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              We don't just summarize emails. We show consequences.
            </p>
            <p 
              className={`mx-auto mb-12 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              Simulate the impact of your academic decisions with AI-powered prediction before you act.
            </p>
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '1s' }}
            >
              <Link href="/login">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-accent px-8 text-base font-medium text-accent-foreground hover:bg-accent/90 transition-all group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-accent/30 bg-transparent px-8 text-base font-medium text-accent hover:bg-accent/10 transition-all"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 px-4 py-20 bg-background/80">
        <div className="container mx-auto max-w-6xl">
          <div 
            className={`mb-16 text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              From campus emails to actionable insights in three AI-powered steps
            </p>
          </div>

          {/* Visual Flow */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 via-accent/30 to-accent/50 lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {[
                {
                  step: "01",
                  icon: Mail,
                  title: "Campus Email Collection",
                  description: "Connect your email, LMS, and calendar. AI automatically gathers all campus communications.",
                  features: ["Email Integration", "LMS Sync", "Calendar Events", "Automated Parsing"],
                },
                {
                  step: "02",
                  icon: Sparkles,
                  title: "AI Mail Summarizer",
                  description: "Machine learning extracts action items, deadlines, and categories from long emails.",
                  features: ["NLP Processing", "Deadline Extraction", "Priority Categorization", "Action Item Detection"],
                },
                {
                  step: "03",
                  icon: TrendingUp,
                  title: "What-If Simulation",
                  description: "Simulate academic decisions and see predicted consequences before you act.",
                  features: ["Attendance Impact", "Risk Assessment", "Recovery Suggestions", "Informed Decisions"],
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  {/* Step Number */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 lg:flex hidden h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-accent/10 text-2xl font-bold text-accent z-10">
                    {step.step}
                  </div>

                  {/* Content */}
                  <Card
                    className={`border-border bg-card/80 backdrop-blur-sm p-8 ${
                      index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3 lg:hidden">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">
                        {step.step}
                      </div>
                    </div>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-card-foreground">{step.title}</h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div 
            className={`mb-16 text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Powered By Advanced AI
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              The main innovation is what-if decision simulation with consequence prediction
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Mail,
                title: "Smart Mail Intelligence",
                description: "AI reads and condenses long campus emails into key action points with extracted deadlines.",
              },
              {
                icon: Sparkles,
                title: "Scenario Generator",
                description: "Understand selected actions with full academic context using machine learning.",
              },
              {
                icon: TrendingUp,
                title: "Impact Predictor",
                description: "Predict changes in attendance, academic risk level, and recovery difficulty with precision.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group relative h-full overflow-hidden border-border bg-card/80 backdrop-blur-sm p-8 transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/10" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-card-foreground">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <Card 
            className={`border-accent/20 bg-accent/5 backdrop-blur-sm p-12 text-center ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Brain className="h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">Ready to Make Informed Decisions?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join students who simulate consequences before taking academic actions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-accent px-8 text-base font-medium text-accent-foreground hover:bg-accent/90 transition-all group"
                >
                  Start Simulating Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-accent/30 bg-transparent px-8 text-base font-medium text-accent hover:bg-accent/10 transition-all"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-4 py-12 bg-background/80">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold">Campus What-If Simulator</h3>
              <p className="text-sm text-muted-foreground">AI-Powered Academic Decision Tool</p>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              <p>Built for IIT Ropar Hackathon 2026</p>
              <p className="mt-1">We don't just summarize. We show consequences.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
