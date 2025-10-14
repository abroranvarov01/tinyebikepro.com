"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about e-bike accessories? We're here to help you find the perfect gear for your ride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-accent/20">
            <h2 className="text-2xl font-orbitron font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-accent/20 focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-accent/20 focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background/50 border-accent/20 focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-accent/20 focus:border-accent min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-background font-semibold">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:support@tinyebikepro.com" className="text-accent hover:underline">
                    support@tinyebikepro.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 6pm EST</p>
                  <a href="tel:+1234567890" className="text-accent hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    123 E-Bike Street
                    <br />
                    San Francisco, CA 94102
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </Card>

            {/* FAQ Link */}
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <h3 className="font-orbitron font-bold mb-2">Quick Questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check out our FAQ section for instant answers to common questions about e-bike accessories.
              </p>
              <Button variant="outline" className="border-accent/50 hover:bg-accent/10 bg-transparent">
                View FAQ
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
