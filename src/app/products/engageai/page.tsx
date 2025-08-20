import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Shield,
  MessageSquare,
  Target,
} from "lucide-react"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export default function EngageAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Products", href: "/#products" },
            { label: "inFlow EngageAI" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Intelligent Customer AI
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground mb-6">
                Enhance Customer
                <br />
                <span className="text-accent">
                  Interactions with Intelligent AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Deliver personalized, scalable customer experiences across all
                touchpoints. Build intelligent, cross-channel interactions that
                adapt to each customer&apos;s unique needs and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Customer Engagement</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-sm text-gray-600">
                      Customer: &quot;I need help with my subscription&quot;
                    </div>
                  </div>
                  <div className="bg-accent/5 rounded p-3 border-l-4 border-accent">
                    <div className="text-sm font-medium text-accent">
                      Personalized Response:
                    </div>
                    <div className="text-sm text-gray-700">
                      Based on your Premium plan, here are your options...
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                    <div className="text-sm font-medium">
                      Suggested Response:
                    </div>
                    <div className="text-sm text-gray-700">
                      &quot;I can help you track your order. Let me look that up
                      for you...&quot;
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded p-3 border-l-4 border-yellow-400">
                    <div className="text-sm font-medium">Knowledge Base:</div>
                    <div className="text-sm text-gray-700">
                      &quot;Order Tracking Guide - Article #247&quot;
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
              Deliver personalized, scalable support—anytime, anywhere
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Create meaningful customer interactions that scale across all
              channels while maintaining the personal touch your customers
              expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-accent/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Omnichannel Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provide consistent, personalized experiences across web,
                  mobile, social, and voice channels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Personalized AI Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy AI agents that understand customer context, history,
                  and preferences for tailored interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Omnichannel Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamlessly integrate with existing CRM, helpdesk, and
                  communication platforms for unified experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Proactive Outreach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Anticipate customer needs and reach out proactively with
                  relevant offers and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Everything you need to build intelligent, cross-channel
              experiences
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Conversational AI & Chatbots
                  </h3>
                  <p className="text-muted-foreground">
                    Deploy intelligent chatbots that understand context and
                    provide human-like conversations across channels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Voice Recognition & Synthesis
                  </h3>
                  <p className="text-muted-foreground">
                    Enable voice interactions with advanced speech recognition
                    and natural-sounding voice responses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Sentiment Analysis & Intent
                  </h3>
                  <p className="text-muted-foreground">
                    Understand customer emotions and intentions to provide
                    appropriate responses and escalation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Customer Journey Mapping
                  </h3>
                  <p className="text-muted-foreground">
                    Track and optimize customer interactions across all
                    touchpoints for improved experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white rounded-lg shadow-2xl p-6 border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Engagement Analytics</h4>
                    <Badge className="bg-purple-100 text-purple-800">
                      Active
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded p-3 border-l-4 border-green-400">
                      <div className="text-sm font-medium">
                        Customer Satisfaction:
                      </div>
                      <div className="text-sm text-gray-700">
                        ↗ 94% (up 8% this month)
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                      <div className="text-sm font-medium">Response Time:</div>
                      <div className="text-sm text-gray-700">
                        ⚡ 2.3 seconds average
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Every Chart Type You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple bar charts to complex network diagrams, create any
              visualization you can imagine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Statistical Charts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Bar & Column Charts</li>
                  <li>Line & Area Charts</li>
                  <li>Pie & Donut Charts</li>
                  <li>Scatter Plots</li>
                  <li>Histograms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Heatmaps</li>
                  <li>Box Plots</li>
                  <li>Violin Plots</li>
                  <li>Regression Lines</li>
                  <li>Correlation Matrices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Geographic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Choropleth Maps</li>
                  <li>Bubble Maps</li>
                  <li>Flow Maps</li>
                  <li>Satellite Imagery</li>
                  <li>Custom Regions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background text-center">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Specialized
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Network Diagrams</li>
                  <li>Sankey Diagrams</li>
                  <li>Treemaps</li>
                  <li>Gantt Charts</li>
                  <li>Custom Widgets</li>
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
                Engage Your Audience
              </h2>
              <p className="text-lg text-muted-foreground">
                Create visualizations that captivate, inform, and inspire action
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Increase Engagement by 300%
                    </h3>
                    <p className="text-muted-foreground">
                      Interactive visualizations keep audiences engaged 3x
                      longer than static reports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Faster Comprehension
                    </h3>
                    <p className="text-muted-foreground">
                      Visual data is processed 60,000x faster by the brain than
                      text-based information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Reduce Creation Time
                    </h3>
                    <p className="text-muted-foreground">
                      Create professional visualizations in minutes instead of
                      hours with AI assistance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Improve Decision Making
                    </h3>
                    <p className="text-muted-foreground">
                      Clear visualizations lead to better understanding and more
                      confident decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Universal Accessibility
                    </h3>
                    <p className="text-muted-foreground">
                      Share insights across language and technical barriers with
                      intuitive visuals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Brand Consistency
                    </h3>
                    <p className="text-muted-foreground">
                      Maintain professional brand standards across all your data
                      presentations.
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
            Ready to Transform Customer Interactions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of companies using EngageAI to create exceptional
            customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
            >
              Start Your Free Trial
            </Button>
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
