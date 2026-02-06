import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, BookOpen, Bell, Zap, Brain, Target, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              AI-Powered Campus Intelligence
            </p>
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Campus Cognitive
              <br />
              <span className="text-accent">Load Killer</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              Instead of adding more features, we removed mental noise using AI.
            </p>
            <Button
              size="lg"
              className="h-12 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-accent/20"
            >
              View Today's Actions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Information Overload Is Real
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Students face hundreds of notifications, emails, and announcements daily.
              Most of it is noise. We filter out what matters.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Mail,
                title: "Emails",
                description: "Dozens of promotional and administrative emails every day",
              },
              {
                icon: BookOpen,
                title: "LMS Updates",
                description: "Assignment deadlines, course materials, and announcements",
              },
              {
                icon: Calendar,
                title: "Timetable",
                description: "Classes, events, and schedule changes across platforms",
              },
              {
                icon: Bell,
                title: "Announcements",
                description: "Campus notifications from multiple channels and groups",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group border-border bg-card p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              How AI Intelligence Works
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Our AI system processes all your campus inputs and delivers only what you need to act on today.
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 via-accent/30 to-accent/50 lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {[
                {
                  step: "01",
                  title: "Campus Inputs",
                  description: "Connect your email, LMS, and calendar to gather all information sources.",
                  details: ["Email Integration", "LMS Sync", "Calendar Events", "Announcements Feed"],
                },
                {
                  step: "02",
                  title: "AI Categorization & Priority Scoring",
                  description: "Machine learning algorithms analyze content, detect urgency, and score importance.",
                  details: ["Natural Language Processing", "Deadline Detection", "Priority Scoring", "Contextual Analysis"],
                },
                {
                  step: "03",
                  title: "Daily Action Feed",
                  description: "Receive 3-5 curated tasks every morning. No clutter. Just what matters.",
                  details: ["Personalized Feed", "Action-Oriented", "Time-Sensitive", "Distraction-Free"],
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative grid gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Step Number */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 lg:flex hidden h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-accent/10 text-2xl font-bold text-accent">
                    {step.step}
                  </div>

                  {/* Content */}
                  <Card
                    className={`border-border bg-card p-8 backdrop-blur-sm ${
                      index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3 lg:hidden">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-card-foreground">{step.title}</h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {detail}
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

      {/* AI Intelligence Features Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Powered By Advanced AI
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Our intelligent system understands context, urgency, and personal patterns to deliver precision-focused insights.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Mail,
                title: "Mail Summarization",
                description: "AI reads and condenses long emails into key action points, saving you hours of reading time.",
              },
              {
                icon: Target,
                title: "Priority Scoring",
                description: "Machine learning ranks tasks by deadline proximity, importance, and impact on your academic success.",
              },
              {
                icon: Zap,
                title: "Personalized Action Feed",
                description: "Adaptive algorithms learn your patterns and preferences to show only the most relevant daily actions.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
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

      {/* Demo Preview Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Your Daily Action Feed
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Every morning, wake up to a clear, actionable list. No distractions. No overwhelm.
            </p>
          </div>

          <Card className="border-border bg-card/50 p-8 backdrop-blur-sm md:p-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Date</p>
                <p className="text-xl font-semibold">Thursday, February 6, 2026</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Brain className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  priority: "High",
                  task: "Complete Data Structures Assignment 3",
                  deadline: "Due tomorrow at 11:59 PM",
                  source: "LMS",
                },
                {
                  priority: "High",
                  task: "Respond to Prof. Kumar's meeting request",
                  deadline: "Requested for this week",
                  source: "Email",
                },
                {
                  priority: "Medium",
                  task: "Register for Spring Semester Electives",
                  deadline: "Registration closes in 3 days",
                  source: "Announcement",
                },
                {
                  priority: "Medium",
                  task: "Review slides for tomorrow's ML Quiz",
                  deadline: "Quiz at 2:00 PM tomorrow",
                  source: "Calendar",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-secondary/30 p-4 transition-all hover:border-accent/50 hover:bg-secondary/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-xs font-bold text-accent">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold uppercase ${
                          item.priority === "High" ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {item.priority} Priority
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{item.source}</span>
                    </div>
                    <p className="mb-1 font-medium text-card-foreground">{item.task}</p>
                    <p className="text-sm text-muted-foreground">{item.deadline}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
              >
                View All Actions
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold">Campus Cognitive Load Killer</h3>
              <p className="text-sm text-muted-foreground">AI-Powered Campus Intelligence</p>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              <p>Built for IIT Ropar Hackathon 2026</p>
              <p className="mt-1">Reducing mental noise, one student at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
