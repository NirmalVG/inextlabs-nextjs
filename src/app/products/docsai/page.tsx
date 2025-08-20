import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  ArrowRight,
  CheckCircle,
  FileText,
  MessageSquare,
  Zap,
  Users,
  Shield,
} from "lucide-react"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export default function DocsAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Products", href: "/#products" },
            { label: "inFlow DocsAI" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Gen AI-Powered Assistant
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-foreground mb-6">
              inFlow <span className="text-primary">DocsAI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your document workflows with intelligent omnichannel
              assistants powered by generative AI. Process, understand, and
              interact with documents like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to revolutionize your document processing
              workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Intelligent Document Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Extract, analyze, and understand content from any document
                  format with advanced AI algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Omnichannel Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy across web, mobile, email, and messaging platforms with
                  consistent AI-powered responses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Automated Workflows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create custom automation rules that trigger actions based on
                  document content and context.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Natural Language Understanding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interact with documents using natural language queries and
                  receive intelligent, contextual responses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Enterprise Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bank-level encryption, compliance certifications, and granular
                  access controls for your documents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-5/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="font-space-grotesk">
                  AI Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuously improving AI that learns from your documents and
                  user interactions over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
                Why Choose DocsAI?
              </h2>
              <p className="text-lg text-muted-foreground">
                Transform your document workflows and unlock new levels of
                productivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Reduce Processing Time by 90%
                    </h3>
                    <p className="text-muted-foreground">
                      Automate document analysis and extraction tasks that
                      traditionally take hours or days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Improve Accuracy
                    </h3>
                    <p className="text-muted-foreground">
                      Eliminate human errors with AI-powered document
                      understanding and validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Scale Effortlessly
                    </h3>
                    <p className="text-muted-foreground">
                      Handle thousands of documents simultaneously without
                      additional infrastructure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Enhanced User Experience
                    </h3>
                    <p className="text-muted-foreground">
                      Provide instant, intelligent responses across all customer
                      touchpoints.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Cost Reduction
                    </h3>
                    <p className="text-muted-foreground">
                      Reduce operational costs by automating manual document
                      processing tasks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold font-space-grotesk mb-2">
                      Easy Integration
                    </h3>
                    <p className="text-muted-foreground">
                      Seamlessly integrate with your existing systems and
                      workflows via APIs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
            Ready to Transform Your Document Workflows?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of companies using DocsAI to revolutionize their
            document processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
