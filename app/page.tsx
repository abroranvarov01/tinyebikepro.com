"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Battery, Lightbulb, Shield, Plug, Backpack, Settings, Zap, Star, ChevronRight, Check } from "lucide-react"

export default function TinyEbikeProPage() {
  const [email, setEmail] = useState("")
  const [cookieAccepted, setCookieAccepted] = useState(false)

  return (
    <div className="min-h-screen bg-[#0D0F12] text-[#EAEAEA] overflow-hidden">
      {/* Navigation Component */}
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F0A0]/5 via-transparent to-[#FFEA00]/5 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F0A0] to-transparent animate-[slide_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#FFEA00] to-transparent animate-[slide_4s_ease-in-out_infinite]" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('/electric-bike-riding-through-neon-city-at-night.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-5xl md:text-7xl font-bold font-mono">
            <span className="text-[#EAEAEA]">TinyEbik</span>
            <span className="text-[#00F0A0] animate-pulse">E</span>
            <span className="text-[#EAEAEA]">Pro</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            The Future of Movement — In Your Hands.
          </h1>
          <p className="text-xl md:text-2xl text-[#EAEAEA]/80 text-pretty max-w-3xl mx-auto">
            Accessories for compact e-bikes that make your ride brighter.
          </p>
          <Link href="/reviews">
            <Button
              size="lg"
              className="bg-[#00F0A0] text-[#0D0F12] hover:bg-[#00F0A0]/90 text-lg px-8 py-6 rounded-full font-semibold shadow-[0_0_30px_rgba(0,240,160,0.5)] hover:shadow-[0_0_50px_rgba(0,240,160,0.8)] transition-all duration-300"
            >
              View Collection <Zap className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Product */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4 bg-[#00F0A0] text-[#0D0F12] text-lg px-4 py-2 mx-auto block w-fit">
            Top Product of the Week
          </Badge>
          <Card className="bg-[#3A3D45]/30 border-[#00F0A0] p-8 md:p-12 backdrop-blur-sm shadow-[0_0_50px_rgba(0,240,160,0.2)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFEA00]/20 blur-3xl rounded-full" />
                <img
                  src="/electric-bike-headlight-glowing-bright.jpg"
                  alt="Ancheer Electric Bike Headlight"
                  className="relative z-10 w-full rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-balance">Ancheer Electric Bike Headlight</h3>
                <p className="text-xl text-[#EAEAEA]/80 text-pretty">
                  Brightness, reliability, and autonomy — all in one.
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-6 w-6 fill-[#FFEA00] text-[#FFEA00]" />
                  ))}
                </div>
                <Link href="/reviews">
                  <Button
                    size="lg"
                    className="bg-[#00F0A0] text-[#0D0F12] hover:bg-[#00F0A0]/90 shadow-[0_0_20px_rgba(0,240,160,0.5)] hover:shadow-[0_0_40px_rgba(0,240,160,0.8)] transition-all"
                  >
                    Read Review <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why TinyEbikePro */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Why <span className="text-[#00F0A0]">TinyEbikePro</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Battery, title: "Energy Efficient", desc: "Maximum power with minimum cost" },
              { icon: Lightbulb, title: "Smart Technology", desc: "Innovation for your comfort" },
              { icon: Zap, title: "Urban Style", desc: "Design for the modern city" },
              { icon: Settings, title: "Trusted Brands", desc: "Only quality manufacturers" },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 text-center hover:border-[#00F0A0] hover:shadow-[0_0_30px_rgba(0,240,160,0.3)] transition-all duration-500 group backdrop-blur-sm"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <item.icon className="h-16 w-16 mx-auto mb-4 text-[#00F0A0] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#EAEAEA]/70 text-pretty">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="relative py-20 px-4 bg-[#0D0F12]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Product <span className="text-[#FFEA00]">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "Lighting", emoji: "💡", color: "#FFEA00" },
              { icon: Shield, title: "Safety", emoji: "🧠", color: "#00F0A0" },
              { icon: Plug, title: "Chargers", emoji: "🔌", color: "#00F0A0" },
              { icon: Backpack, title: "Mounts & Bags", emoji: "👜", color: "#FFEA00" },
              { icon: Settings, title: "Tuning & Upgrades", emoji: "⚙️", color: "#00F0A0" },
            ].map((cat, i) => (
              <Card
                key={i}
                className="bg-[#3A3D45]/20 border-[#3A3D45] p-8 hover:border-[#00F0A0] hover:shadow-[0_0_40px_rgba(0,240,160,0.4)] transition-all duration-300 cursor-pointer group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <cat.icon className="h-12 w-12 text-[#00F0A0] group-hover:scale-110 transition-transform" />
                  <span className="text-4xl">{cat.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-20 px-4 bg-[#0D0F12]/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
            Top 5 <span className="text-[#00F0A0]">E-Bike Accessories</span> for 2025
          </h2>
          <div className="relative aspect-video bg-[#3A3D45]/30 rounded-lg overflow-hidden border border-[#3A3D45] hover:border-[#00F0A0] transition-all group hover:shadow-[0_0_40px_rgba(0,240,160,0.3)]">
            <img
              src="/electric-bike-accessories-showcase-neon-lights.jpg"
              alt="Top E-Bike Accessories Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
              <p className="text-lg text-[#EAEAEA]/90 text-pretty">
                Discover the essential accessories that will transform your e-bike experience in 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Model <span className="text-[#FFEA00]">Comparison</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#3A3D45]">
                  <th className="p-4 text-left text-[#00F0A0]">Model</th>
                  <th className="p-4 text-center text-[#00F0A0]">Speed</th>
                  <th className="p-4 text-center text-[#00F0A0]">Power</th>
                  <th className="p-4 text-center text-[#00F0A0]">Lighting</th>
                  <th className="p-4 text-center text-[#00F0A0]">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Ancheer", speed: "25 km/h", power: "350W", light: "⭐⭐⭐⭐⭐", price: "$$$" },
                  { name: "Aventon", speed: "28 km/h", power: "500W", light: "⭐⭐⭐⭐", price: "$$$$" },
                  { name: "Fiido", speed: "25 km/h", power: "250W", light: "⭐⭐⭐", price: "$$" },
                  { name: "Himo", speed: "20 km/h", power: "250W", light: "⭐⭐⭐⭐", price: "$$" },
                ].map((model, i) => (
                  <tr key={i} className="border-b border-[#3A3D45]/50 hover:bg-[#3A3D45]/20 transition-colors">
                    <td className="p-4 font-bold">{model.name}</td>
                    <td className="p-4 text-center">{model.speed}</td>
                    <td className="p-4 text-center">{model.power}</td>
                    <td className="p-4 text-center">{model.light}</td>
                    <td className="p-4 text-center text-[#00F0A0]">{model.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative py-20 px-4 bg-[#0D0F12]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Customer <span className="text-[#00F0A0]">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Alex M.", text: "Excellent lighting! Now I ride at night without any problems.", rating: 5 },
              { name: "Maria K.", text: "Fast delivery and quality accessories. Highly recommend!", rating: 5 },
              { name: "Dmitry P.", text: "The charger works perfectly. Very satisfied with the purchase.", rating: 5 },
            ].map((review, i) => (
              <Card
                key={i}
                className="bg-[#3A3D45]/30 border-[#3A3D45] p-6 hover:border-[#00F0A0] hover:shadow-[0_0_30px_rgba(0,240,160,0.3)] transition-all backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFEA00] text-[#FFEA00]" />
                  ))}
                </div>
                <p className="text-[#EAEAEA]/80 mb-4 text-pretty">"{review.text}"</p>
                <p className="font-semibold text-[#00F0A0]">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Tips & <span className="text-[#FFEA00]">Blog</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "How to Extend Your E-Bike Battery Life?",
                img: "/blog-battery-maintenance.jpg",
                slug: "battery-life",
              },
              {
                title: "TOP 10 Accessories for Urban Riding",
                img: "/blog-urban-accessories.jpg",
                slug: "urban-accessories",
              },
              { title: "How to Choose Lights for Night Rides", img: "/blog-night-lights.jpg", slug: "night-lights" },
            ].map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <Card className="bg-[#3A3D45]/20 border-[#3A3D45] overflow-hidden hover:border-[#00F0A0] hover:shadow-[0_0_40px_rgba(0,240,160,0.4)] transition-all cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.img || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-balance">{post.title}</h3>
                    <div className="flex items-center text-[#00F0A0] font-semibold group-hover:translate-x-2 transition-transform">
                      Read More <ChevronRight className="ml-1 h-5 w-5" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* User Gallery */}
      <section className="relative py-20 px-4 bg-[#0D0F12]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            User <span className="text-[#00F0A0]">Gallery</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/gallery-1.jpg",
              "/gallery-2.jpg",
              "/gallery-3.jpg",
              "/gallery-4.jpg",
              "/gallery-5.jpg",
              "/gallery-6.jpg",
              "/gallery-7.jpg",
              "/gallery-8.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg border border-[#3A3D45] hover:border-[#00F0A0] hover:shadow-[0_0_30px_rgba(0,240,160,0.5)] transition-all group cursor-pointer"
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`User photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#00F0A0]/0 group-hover:bg-[#00F0A0]/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="h-16 w-16 mx-auto mb-6 text-[#00F0A0] animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Stay Ahead of the Tech Wave</h2>
          <p className="text-xl text-[#EAEAEA]/80 mb-8 text-pretty">Subscribe for updates and get exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#3A3D45]/50 border-[#3A3D45] focus:border-[#00F0A0] text-[#EAEAEA] placeholder:text-[#EAEAEA]/50 flex-1"
            />
            <Button className="bg-[#00F0A0] text-[#0D0F12] hover:bg-[#00F0A0]/90 shadow-[0_0_20px_rgba(0,240,160,0.5)] hover:shadow-[0_0_40px_rgba(0,240,160,0.8)] transition-all">
              Subscribe <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 px-4 bg-[#0D0F12]/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Contact</h2>
          <Card className="bg-[#3A3D45]/30 border-[#00F0A0] p-8 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your name"
                  className="bg-[#3A3D45]/50 border-[#3A3D45] focus:border-[#00F0A0] text-[#EAEAEA] placeholder:text-[#EAEAEA]/50 flex-1"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#3A3D45]/50 border-[#3A3D45] focus:border-[#00F0A0] text-[#EAEAEA] placeholder:text-[#EAEAEA]/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="w-full bg-[#3A3D45]/50 border border-[#3A3D45] focus:border-[#00F0A0] rounded-md p-3 text-[#EAEAEA] placeholder:text-[#EAEAEA]/50 outline-none focus:ring-2 focus:ring-[#00F0A0]/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#00F0A0] text-[#0D0F12] hover:bg-[#00F0A0]/90 shadow-[0_0_20px_rgba(0,240,160,0.5)] hover:shadow-[0_0_40px_rgba(0,240,160,0.8)] transition-all"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-[#3A3D45]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-3xl font-bold font-mono">
              <span className="text-[#EAEAEA]">TinyEbik</span>
              <span className="text-[#00F0A0] animate-pulse">E</span>
              <span className="text-[#EAEAEA]">Pro</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[#EAEAEA]/70">
              <Link href="/privacy" className="hover:text-[#00F0A0] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#00F0A0] transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-[#00F0A0] transition-colors">
                Contact
              </Link>
              <Link href="/about" className="hover:text-[#00F0A0] transition-colors">
                About Us
              </Link>
            </div>
          </div>
          <div className="text-center text-[#EAEAEA]/50 text-sm space-y-2">
            <p>All rights reserved © 2025 TinyEbikePro.com</p>
            <p className="text-pretty">
              🛒 Amazon Affiliate Program Participant. As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#3A3D45]/95 backdrop-blur-lg border-t border-[#00F0A0] p-6 z-50 animate-slide-up">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#EAEAEA] text-sm text-pretty flex-1">
              🍪 This website uses cookies to improve your experience and analyze site usage. By continuing, you consent
              to the use of cookies.
            </p>
            <Button
              onClick={() => setCookieAccepted(true)}
              className="bg-[#00F0A0] text-[#0D0F12] hover:bg-[#00F0A0]/90 shadow-[0_0_20px_rgba(0,240,160,0.5)] hover:shadow-[0_0_40px_rgba(0,240,160,0.8)] transition-all whitespace-nowrap"
            >
              Accept <Check className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
