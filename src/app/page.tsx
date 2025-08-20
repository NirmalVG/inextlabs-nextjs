import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Bot,
  BarChart3,
  Zap,
  MessageSquare,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk text-slate-800 mb-6 leading-tight max-w-5xl mx-auto">
            Building <span className="text-orange-500">Agentic AI</span> for
            Enterprise Excellence
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Empower your business with state-of-the-art Generative AI solutions
            designed to enhance efficiency, accuracy, and growth. From telco to
            FSI, healthcare to government, we have delivered transformative AI
            solutions that drive real-world impact and value across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600 text-white"
            >
              Start Your Free Trial
            </Button>
            <p className="text-sm text-orange-500 mt-2 sm:mt-8">
              *No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-600 mb-8 font-medium">
            Recognized by the world&apos;s top organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            <span className="text-sm font-medium">Microsoft</span>
            <span className="text-sm font-medium">Amazon Web Services</span>
            <span className="text-sm font-medium">Google Cloud</span>
            <span className="text-sm font-medium">IBM</span>
            <span className="text-sm font-medium">Oracle</span>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-slate-800 mb-4">
              Generative value from AI across business use cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-orange-100 flex items-center justify-center">
                <Bot className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Agent Focus</h3>
              <p className="text-sm text-slate-600">
                Create agents that respond and adapt to customer needs with
                intelligent automation
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Real-Time Assistance
              </h3>
              <p className="text-sm text-slate-600">
                Provide instant support with AI-powered real-time
                recommendations and insights
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-green-100 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                AI-powered Recommendations
              </h3>
              <p className="text-sm text-slate-600">
                Leverage machine learning to deliver personalized
                recommendations at scale
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-purple-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Ready to Deploy
              </h3>
              <p className="text-sm text-slate-600">
                Enterprise-ready solutions that integrate seamlessly with your
                existing systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-slate-800 mb-4">
              Designed to solutions scale
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive AI platform delivers intelligent solutions
              across every aspect of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AssistAI */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="font-space-grotesk text-xl text-slate-800">
                  AssistAI
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Smarter Support with AI for Agents
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 mb-6">
                  Empower your support agents with intelligent tools that
                  amplify support workflows and enhance customer experiences.
                </p>
                <Link href="/products/assistai">
                  <Button
                    variant="outline"
                    className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* DocsAI */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="font-space-grotesk text-xl text-slate-800">
                  DocsAI
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Automate Document Processing with AI
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 mb-6">
                  Speed every process with intelligent document processing in
                  the flow of work, from data extraction to workflow automation.
                </p>
                <Link href="/products/docsai">
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* InsightsAI */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="font-space-grotesk text-xl text-slate-800">
                  InsightsAI
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Conversational Analytics Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 mb-6">
                  Accelerate decisions with real-time, conversational
                  intelligence that turns complex data into actionable insights.
                </p>
                <Link href="/products/insightsai">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* EngageAI */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="font-space-grotesk text-xl text-slate-800">
                  EngageAI
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Intelligent Customer Interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 mb-6">
                  Deliver personalized, scalable support—anytime, anywhere with
                  omnichannel AI that enhances every customer touchpoint.
                </p>
                <Link href="/products/engageai">
                  <Button
                    variant="outline"
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-slate-800 mb-4">
              Why choose us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Expert & experienced
              </h3>
              <p className="text-slate-600">
                Deep AI expertise with proven track record across industries and
                use cases
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Flexibility
              </h3>
              <p className="text-slate-600">
                Adaptable solutions that scale with your business needs and
                requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                24/7 customer support
              </h3>
              <p className="text-slate-600">
                Round-the-clock support to ensure your AI solutions perform
                optimally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Workshop CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
              Start Your AI Journey with Our Discovery Workshop
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Experience the transformative power of AI with our hands-on
              Discovery Workshop. Explore how our solutions can revolutionize
              your business operations.
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Book Your Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-8">
            Our Strategic Partners in Driving Innovation & Excellence
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            <span className="text-sm font-medium">Salesforce</span>
            <span className="text-sm font-medium">ServiceNow</span>
            <span className="text-sm font-medium">Zendesk</span>
            <span className="text-sm font-medium">HubSpot</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
