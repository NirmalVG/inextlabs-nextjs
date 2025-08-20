"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Send,
  Paperclip,
  Search,
  Bot,
  User,
  FileText,
  ImageIcon,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  status?: "sending" | "sent" | "delivered"
  attachments?: Array<{
    name: string
    type: string
    size: number
    url?: string
  }>
}

interface ChatInterfaceProps {
  className?: string
}

export function ChatInterface({ className }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(Date.now() - 60000),
      status: "delivered",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const mockAIResponses = [
    "I understand your question. Let me help you with that.",
    "That's a great point! Here's what I can tell you about that topic.",
    "I'd be happy to assist you with this. Based on your query, I recommend...",
    "Thank you for providing that information. Let me process this and get back to you.",
    "I can help you troubleshoot this issue. Let's start by checking a few things.",
    "That's an interesting question! Here's a comprehensive answer for you.",
    "I've analyzed your request and here are some suggestions that might help.",
    "Based on our conversation, I think the best approach would be to...",
  ]

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI processing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1500 + Math.random() * 2000)
    )

    // Simple keyword-based responses for demo
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
      return "I'm here to help! I can assist you with product information, troubleshooting, account questions, and general inquiries. What specific area would you like help with?"
    }

    if (lowerMessage.includes("product") || lowerMessage.includes("feature")) {
      return "Our AI products include DocsAI for document processing, InsightsAI for data analytics, EngageAI for visualizations, and AssistAI for customer support. Which product interests you most?"
    }

    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("pricing")
    ) {
      return "We offer flexible pricing plans to suit different needs. Our basic plan starts at $29/month, with enterprise solutions available. Would you like me to connect you with our sales team for a custom quote?"
    }

    if (lowerMessage.includes("demo") || lowerMessage.includes("trial")) {
      return "We offer a 14-day free trial for all our products. I can help you get started right away. Which product would you like to try first?"
    }

    // Default to random response
    return mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() && !selectedFile) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      status: "sending",
      attachments: selectedFile
        ? [
            {
              name: selectedFile.name,
              type: selectedFile.type,
              size: selectedFile.size,
            },
          ]
        : undefined,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setSelectedFile(null)
    setIsTyping(true)

    // Update message status to sent
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: "sent" } : msg
        )
      )
    }, 500)

    // Generate AI response
    try {
      const aiResponse = await generateAIResponse(userMessage.content)

      setIsTyping(false)

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
        status: "delivered",
      }

      setMessages((prev) => [...prev, aiMessage])

      // Update user message status to delivered
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === userMessage.id ? { ...msg, status: "delivered" } : msg
          )
        )
      }, 1000)
    } catch (error) {
      setIsTyping(false)
      console.error("Error generating AI response:", error)
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const removeSelectedFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const filteredMessages = messages.filter(
    (message) =>
      searchQuery === "" ||
      message.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    )
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <ImageIcon className="h-4 w-4" />
    return <FileText className="h-4 w-4" />
  }

  return (
    <Card className={cn("flex flex-col h-[500px] sm:h-[600px]", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 sm:pb-4 px-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-chart-3/10 flex items-center justify-center">
            <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-chart-3" />
          </div>
          <div>
            <CardTitle className="text-base sm:text-lg">
              AssistAI Support
            </CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">
              AI-powered customer support
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSearch(!showSearch)}
            className={cn(showSearch && "bg-muted", "h-8 w-8 sm:h-9 sm:w-9")}
          >
            <Search className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 text-xs"
          >
            Online
          </Badge>
        </div>
      </CardHeader>

      {showSearch && (
        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-9 sm:h-10"
            />
          </div>
        </div>
      )}

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-3 sm:px-6">
          <div className="space-y-3 sm:space-y-4 py-3 sm:py-4">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start space-x-2 sm:space-x-3",
                  message.sender === "user" &&
                    "flex-row-reverse space-x-reverse"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    message.sender === "ai" ? "bg-chart-3/10" : "bg-primary/10"
                  )}
                >
                  {message.sender === "ai" ? (
                    <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-chart-3" />
                  ) : (
                    <User className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  )}
                </div>

                <div
                  className={cn(
                    "flex flex-col space-y-1 max-w-[85%] sm:max-w-[80%]",
                    message.sender === "user" && "items-end"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-lg px-3 sm:px-4 py-2 text-sm",
                      message.sender === "ai"
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    {message.content}

                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {message.attachments.map((attachment, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 p-2 bg-background/50 rounded"
                          >
                            {getFileIcon(attachment.type)}
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium truncate">
                                {attachment.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatFileSize(attachment.size)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className={cn(
                      "flex items-center space-x-2 text-xs text-muted-foreground",
                      message.sender === "user" &&
                        "flex-row-reverse space-x-reverse"
                    )}
                  >
                    <span>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {message.sender === "user" && message.status && (
                      <span
                        className={cn(
                          message.status === "sending" && "text-yellow-600",
                          message.status === "sent" && "text-blue-600",
                          message.status === "delivered" && "text-green-600"
                        )}
                      >
                        {message.status === "sending" && "⏳"}
                        {message.status === "sent" && "✓"}
                        {message.status === "delivered" && "✓✓"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-chart-3/10 flex items-center justify-center">
                  <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-chart-3" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        <div className="border-t p-3 sm:p-4 space-y-2 sm:space-y-3">
          {selectedFile && (
            <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
              <div className="flex items-center space-x-2">
                {getFileIcon(selectedFile.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={removeSelectedFile}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="flex items-end space-x-2">
            <div className="flex-1">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="resize-none h-10 sm:h-11"
              />
            </div>

            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              accept="image/*,.pdf,.doc,.docx,.txt"
            />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="flex-shrink-0 h-10 w-10 sm:h-11 sm:w-11"
            >
              <Paperclip className="h-4 w-4" />
            </Button>

            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() && !selectedFile}
              className="flex-shrink-0 h-10 w-10 sm:h-11 sm:w-11"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
