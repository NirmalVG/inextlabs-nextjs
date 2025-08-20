import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { ChatInterface } from "@/components/chat/chat-interface"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Zap,
  FileText,
  Search,
  Clock,
  Shield,
} from "lucide-react"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Products", href: "/#products" },
            { label: "AssistAI", href: "/products/assistai" },
            { label: "Live Chat Demo" },
          ]}
        />
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-chart-3/10 text-chart-3 border-chart-3/20">
              Live Demo
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
              Experience AssistAI in Action
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try our AI-powered chat interface with real-time responses, file
              uploads, and intelligent conversation handling.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <ChatInterface />
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-space-grotesk">
                    Demo Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-chart-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">
                        Natural Conversations
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        AI understands context and provides relevant responses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">Typing Indicators</h3>
                      <p className="text-xs text-muted-foreground">
                        Real-time typing status and message delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">File Uploads</h3>
                      <p className="text-xs text-muted-foreground">
                        Share documents, images, and files seamlessly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Search className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">Message Search</h3>
                      <p className="text-xs text-muted-foreground">
                        Find previous conversations instantly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-chart-4 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">Message History</h3>
                      <p className="text-xs text-muted-foreground">
                        Complete conversation tracking and timestamps
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-chart-5 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">Secure & Private</h3>
                      <p className="text-xs text-muted-foreground">
                        Enterprise-grade security for all conversations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-space-grotesk">
                    Try These Examples
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">
                      Product Information
                    </p>
                    <p className="text-xs text-muted-foreground">
                      &quot;Tell me about your AI products&quot;
                    </p>
                  </div>

                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">Pricing Inquiry</p>
                    <p className="text-xs text-muted-foreground">
                      &quot;What are your pricing plans?&quot;
                    </p>
                  </div>

                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">Demo Request</p>
                    <p className="text-xs text-muted-foreground">
                      &quot;I&apos;d like to schedule a demo&quot;
                    </p>
                  </div>

                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">Support Help</p>
                    <p className="text-xs text-muted-foreground">
                      &quot;I need help with integration&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
