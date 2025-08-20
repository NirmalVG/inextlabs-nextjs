"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const productLinks = [
    {
      name: "inFlow DocsAI",
      href: "/products/docsai",
      description: "Automate document processing with AI",
    },
    {
      name: "inFlow InsightsAI",
      href: "/products/insightsai",
      description: "Uncover real-time insights with conversational analytics",
    },
    {
      name: "inFlow EngageAI",
      href: "/products/engageai",
      description: "Enhance customer interactions with intelligent AI",
    },
    {
      name: "inFlow AssistAI",
      href: "/products/assistai",
      description: "Smarter support with AI for agents",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/inextlabs-logo.jpg"
            alt="iNextLabs"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 transition-colors font-medium">
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2 bg-white border shadow-lg">
              {productLinks.map((product) => (
                <DropdownMenuItem key={product.href} asChild>
                  <Link
                    href={product.href}
                    className="flex flex-col items-start p-3 rounded-md hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-medium text-slate-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {product.description}
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/solutions"
            className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
          >
            Solutions
          </Link>
          <Link
            href="/partners"
            className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
          >
            Partners
          </Link>
          <Link
            href="/resources"
            className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
          >
            Resources
          </Link>
          <Link
            href="/company"
            className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
          >
            Company
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium bg-transparent"
          >
            Contact Us
          </Button>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium"
          >
            Start Your Free Trial
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-10 w-10 text-slate-700"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-80 bg-white">
            <div className="flex flex-col space-y-6 mt-6">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/inextlabs-logo.jpg"
                  alt="iNextLabs"
                  width={128}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3 text-slate-900">
                    Products
                  </h3>
                  <div className="space-y-3 pl-4">
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="font-medium text-sm text-slate-900">
                          {product.name}
                        </div>
                        <div className="text-xs text-slate-600">
                          {product.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/solutions"
                    className="block font-medium text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/partners"
                    className="block font-medium text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    Partners
                  </Link>
                  <Link
                    href="/resources"
                    className="block font-medium text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/company"
                    className="block font-medium text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    Company
                  </Link>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent h-11 border-slate-300 text-slate-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Button>
                  <Button
                    className="w-full h-11 bg-orange-500 hover:bg-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Your Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
