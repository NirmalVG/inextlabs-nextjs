import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Clock,
  Users,
  Zap,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export default function AssistAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Products", href: "/#products" },
            { label: "inFlow AssistAI" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                AI for Agents
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground mb-6">
                Smarter Support Starts Here—
                <br />
                <span className="text-primary">with AI for Agents</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empower your support agents with intelligent tools that simplify
                support workflows, provide instant recommendations, and enable
                agents to deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/chat">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white rounded-lg shadow-2xl p-6 border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Agent Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-sm text-gray-600">
                      Customer: &quot;I need help with my order&quot;
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded p-3 border-l-4 border-primary">
                    <div className="text-sm font-medium text-primary">
                      AI Suggestion:
                    </div>
                    <div className="text-sm text-gray-700">
                      &quot;I can help you track your order. Let me look that up
                      for you...&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Empower agents with intelligent tools that simplify support
              workflows
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Give your support team the AI-powered tools they need to work
              smarter, respond faster, and deliver better customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Agent Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keep agents focused on customers with intelligent
                  recommendations and automated workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Real-Time Assistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get instant AI-powered suggestions and knowledge base
                  recommendations during conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  AI-powered Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leverage machine learning to suggest the best responses and
                  next actions for each customer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Ready to Deploy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrate seamlessly with your existing support tools and
                  workflows in minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Everything Agents Need Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Everything agents need to work smarter—not harder
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Smart Case Routing
                  </h3>
                  <p className="text-muted-foreground">
                    Automatically route cases to the right agents based on
                    expertise, workload, and customer priority.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Intelligent Knowledge Base
                  </h3>
                  <p className="text-muted-foreground">
                    Get instant access to relevant articles, FAQs, and solutions
                    based on customer inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Automated Response Suggestions
                  </h3>
                  <p className="text-muted-foreground">
                    Receive AI-generated response suggestions that maintain your
                    brand voice and tone.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Performance Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Track agent performance, customer satisfaction, and identify
                    areas for improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white rounded-lg shadow-2xl p-6 border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Agent Workspace</h4>
                    <Badge className="bg-green-100 text-green-800">
                      Online
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                      <div className="text-sm font-medium">
                        Suggested Response:
                      </div>
                      <div className="text-sm text-gray-700">
                        &quot;I can help you track your order. Let me look that
                        up for you...&quot;
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded p-3 border-l-4 border-yellow-400">
                      <div className="text-sm font-medium">Knowledge Base:</div>
                      <div className="text-sm text-gray-700">
                        Order Tracking Guide - Article #247
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Channels Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Deploy Everywhere Your Customers Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrate AssistAI across all your customer touchpoints for
              consistent support experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Website Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Embedded chat widgets</li>
                  <li>Proactive engagement</li>
                  <li>Custom branding</li>
                  <li>Mobile responsive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Messaging Apps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>WhatsApp Business</li>
                  <li>Facebook Messenger</li>
                  <li>Telegram</li>
                  <li>Slack integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Voice Channels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Phone support</li>
                  <li>Voice assistants</li>
                  <li>IVR integration</li>
                  <li>Call routing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Email & Social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Email automation</li>
                  <li>Twitter support</li>
                  <li>LinkedIn messaging</li>
                  <li>Instagram DMs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
                Transform Customer Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Deliver exceptional support that builds loyalty and drives
                growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Reduce Response Time by 95%
                    </h3>
                    <p className="text-muted-foreground">
                      Provide instant responses to customer inquiries,
                      eliminating wait times completely.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Increase Satisfaction Scores
                    </h3>
                    <p className="text-muted-foreground">
                      Achieve higher CSAT scores with consistent, helpful, and
                      personalized interactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Lower Support Costs
                    </h3>
                    <p className="text-muted-foreground">
                      Reduce support team workload by handling 80% of inquiries
                      automatically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Scale Support Operations
                    </h3>
                    <p className="text-muted-foreground">
                      Handle unlimited concurrent conversations without adding
                      staff or infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Improve Agent Productivity
                    </h3>
                    <p className="text-muted-foreground">
                      Free human agents to focus on complex issues while AI
                      handles routine inquiries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Generate Actionable Insights
                    </h3>
                    <p className="text-muted-foreground">
                      Analyze conversation data to identify trends, pain points,
                      and improvement opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
            Ready to Revolutionize Customer Support?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join leading companies using AssistAI to deliver exceptional
            customer experiences at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white"
              >
                Start Your Free Trial
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
