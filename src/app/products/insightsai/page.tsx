import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Database,
  MessageSquare,
} from "lucide-react"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export default function InsightsAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Products", href: "/#products" },
            { label: "inFlow InsightsAI" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Conversational Analytics
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground mb-6">
                Uncover Real-Time Insights
                <br />
                <span className="text-secondary">
                  with Conversational Analytics
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform complex data into actionable insights through natural
                language conversations. Ask questions, get instant answers, and
                discover patterns that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-white"
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
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Analytics Chat</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-sm text-gray-600">
                      &quot;Show me sales trends for Q4&quot;
                    </div>
                  </div>
                  <div className="bg-secondary/5 rounded p-3 border-l-4 border-secondary">
                    <div className="text-sm font-medium text-secondary">
                      AI Response:
                    </div>
                    <div className="text-sm text-gray-700">
                      Q4 sales increased 23% with peak in December
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
              Accelerate decisions with real-time, conversational intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get instant answers to complex business questions through natural
              language conversations with your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-secondary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Natural Language Queries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ask questions in plain English and get instant insights from
                  your data without complex queries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Automated Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discover hidden patterns and trends automatically with
                  AI-powered analysis and recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Interactive Dashboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create dynamic dashboards that respond to conversational
                  queries and update in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Multi-source Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect multiple data sources and query across them seamlessly
                  with unified conversational interface.
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
              Everything you need to simplify complex data
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Advanced Time-Series Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    Analyze trends, seasonality, and forecasts with
                    sophisticated time-series algorithms and visualizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Cohort Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    Track user behavior and retention patterns over time with
                    powerful cohort analysis tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Custom Event Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Define and track custom business events with flexible
                    attribution and conversion analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold font-space-grotesk mb-2 text-lg">
                    Predictive Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Forecast future trends and outcomes with machine learning
                    models trained on your historical data.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white rounded-lg shadow-2xl p-6 border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Insights Dashboard</h4>
                    <Badge className="bg-green-100 text-green-800">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                      <div className="text-sm font-medium">Revenue Trend:</div>
                      <div className="text-sm text-gray-700">
                        ↗ 15% increase this month
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded p-3 border-l-4 border-yellow-400">
                      <div className="text-sm font-medium">Customer Churn:</div>
                      <div className="text-sm text-gray-700">
                        ⚠ 3.2% - needs attention
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Transform Every Department
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              InsightsAI delivers value across your entire organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Sales & Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Customer segmentation and targeting</li>
                  <li>• Campaign performance optimization</li>
                  <li>• Lead scoring and conversion analysis</li>
                  <li>• Revenue forecasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Supply chain optimization</li>
                  <li>• Quality control monitoring</li>
                  <li>• Resource allocation planning</li>
                  <li>• Process efficiency analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-lg">
                  Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Financial risk assessment</li>
                  <li>• Budget variance analysis</li>
                  <li>• Cash flow forecasting</li>
                  <li>• Fraud detection</li>
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
                Drive Results with Data
              </h2>
              <p className="text-lg text-muted-foreground">
                See measurable improvements across key business metrics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Increase Decision Speed by 75%
                    </h3>
                    <p className="text-muted-foreground">
                      Make faster, data-driven decisions with real-time insights
                      and automated analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Improve Forecast Accuracy
                    </h3>
                    <p className="text-muted-foreground">
                      Achieve up to 95% accuracy in predictions with advanced
                      machine learning models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Reduce Analysis Time
                    </h3>
                    <p className="text-muted-foreground">
                      Automate complex analysis tasks that previously took weeks
                      to complete.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Discover Hidden Opportunities
                    </h3>
                    <p className="text-muted-foreground">
                      Uncover insights and patterns that human analysis might
                      miss.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Scale Data Operations
                    </h3>
                    <p className="text-muted-foreground">
                      Handle petabytes of data without compromising on
                      performance or accuracy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Democratize Analytics
                    </h3>
                    <p className="text-muted-foreground">
                      Enable non-technical users to perform complex analysis
                      with intuitive interfaces.
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
            Ready to Unlock Your Data&apos;s Potential?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join leading companies using InsightsAI to transform their data into
            competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-white"
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
