import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"

const blogPosts = {
  "battery-life": {
    title: "How to Extend Your E-Bike Battery Life?",
    image: "/blog-battery-maintenance.jpg",
    date: "January 15, 2025",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Maintenance",
    content: [
      {
        heading: "Understanding Your Battery",
        text: "E-bike batteries are the heart of your electric ride. Understanding how they work and what affects their lifespan is crucial for getting the most out of your investment. Most e-bikes use lithium-ion batteries, which can last 3-5 years with proper care.",
      },
      {
        heading: "Optimal Charging Practices",
        text: "Never let your battery completely drain before charging. Ideally, charge when it reaches 20-30% capacity. Avoid leaving your battery on the charger for extended periods after it reaches 100%. Store your battery at around 40-60% charge if you won't be using it for a while.",
      },
      {
        heading: "Temperature Matters",
        text: "Extreme temperatures are the enemy of battery life. Store your battery in a cool, dry place between 50-77°F (10-25°C). In winter, bring your battery indoors and let it warm to room temperature before charging. In summer, avoid leaving it in direct sunlight or hot cars.",
      },
      {
        heading: "Regular Maintenance Tips",
        text: "Clean the battery contacts regularly with a dry cloth. Check for any signs of damage or swelling. Use only the manufacturer's recommended charger. If you notice decreased range or performance, have your battery checked by a professional.",
      },
      {
        heading: "Riding Habits That Help",
        text: "Use pedal assist modes wisely - lower assist levels extend battery life. Maintain proper tire pressure to reduce rolling resistance. Avoid rapid acceleration and maintain steady speeds when possible. Plan your routes to minimize steep climbs.",
      },
    ],
  },
  "urban-accessories": {
    title: "TOP 10 Accessories for Urban Riding",
    image: "/blog-urban-accessories.jpg",
    date: "January 12, 2025",
    author: "Mike Chen",
    readTime: "7 min read",
    category: "Accessories",
    content: [
      {
        heading: "Essential Safety Gear",
        text: "Urban riding requires visibility and protection. High-quality lights, reflective gear, and a reliable helmet are non-negotiable. Consider adding a rear-view mirror for better awareness of traffic behind you.",
      },
      {
        heading: "Storage Solutions",
        text: "Panniers, baskets, and frame bags transform your e-bike into a practical commuting machine. Look for waterproof options to protect your belongings from unexpected rain. A good lock is essential - invest in a high-quality U-lock or chain lock.",
      },
      {
        heading: "Comfort Upgrades",
        text: "Ergonomic grips, a comfortable saddle, and suspension seat posts can make long commutes much more enjoyable. Fenders keep you clean in wet conditions, while a kickstand makes parking convenient.",
      },
      {
        heading: "Tech Accessories",
        text: "Phone mounts with wireless charging, GPS trackers for theft prevention, and smart lights that sync with your phone add convenience and security. Consider a bike computer to track your rides and monitor battery life.",
      },
      {
        heading: "Weather Protection",
        text: "Waterproof covers for your display and battery, rain gear, and handlebar mitts for cold weather extend your riding season. A good quality rain jacket designed for cycling makes all the difference.",
      },
    ],
  },
  "night-lights": {
    title: "How to Choose Lights for Night Rides",
    image: "/blog-night-lights.jpg",
    date: "January 10, 2025",
    author: "Emma Rodriguez",
    readTime: "6 min read",
    category: "Safety",
    content: [
      {
        heading: "Understanding Lumens",
        text: "Lumens measure light output. For urban riding with street lights, 200-400 lumens is sufficient. For unlit roads, aim for 600-1000 lumens. Off-road night riding requires 1000+ lumens. Remember, more isn't always better - extremely bright lights can blind other road users.",
      },
      {
        heading: "Beam Patterns Matter",
        text: "A good bike light should have a focused beam that illuminates the road ahead without blinding oncoming traffic. Look for lights with adjustable beam angles. Some lights offer multiple beam patterns for different riding conditions.",
      },
      {
        heading: "Battery Life Considerations",
        text: "Check the runtime at different brightness levels. Many lights offer multiple modes - high, medium, low, and flashing. USB-rechargeable lights are convenient, but consider carrying a backup or choosing lights with replaceable batteries for long rides.",
      },
      {
        heading: "Mounting and Durability",
        text: "Ensure the mounting system is secure and easy to remove. Look for IPX4 or higher water resistance rating. Aluminum or reinforced plastic housings provide better durability than cheap plastic. Consider lights with memory functions that remember your last setting.",
      },
      {
        heading: "Rear Light Essentials",
        text: "Don't neglect your rear light - it's crucial for visibility from behind. Look for lights with wide-angle visibility (at least 180 degrees). Flashing modes are more attention-grabbing in traffic. Consider lights with brake sensors that increase brightness when you slow down.",
      },
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0D0F12] text-[#EAEAEA]">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F0A0]/5 via-transparent to-[#FFEA00]/5 animate-pulse" />
      </div>

      <div className="relative">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
          <Link href="/">
            <Button variant="ghost" className="text-[#00F0A0] hover:text-[#00F0A0]/80 hover:bg-[#00F0A0]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden border border-[#3A3D45]">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent" />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 pb-20">
          <Badge className="mb-4 bg-[#00F0A0] text-[#0D0F12]">{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-[#EAEAEA]/70 mb-12 pb-8 border-b border-[#3A3D45]">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#00F0A0]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-[#00F0A0]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#00F0A0]" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#00F0A0]">{section.heading}</h2>
                <p className="text-[#EAEAEA]/80 leading-relaxed text-pretty">{section.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="mt-16 bg-[#3A3D45]/30 border-[#00F0A0] p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Ride?</h3>
            <p className="text-[#EAEAEA]/80 mb-6 text-pretty">
              Check out our curated selection of top-rated e-bike accessories
            </p>
            <Link href="/reviews">
              <Button
                size="lg"
                className="bg-[#00F0A0] text-[#0D0F12] hover:bg-[#00F0A0]/90 shadow-[0_0_20px_rgba(0,240,160,0.5)] hover:shadow-[0_0_40px_rgba(0,240,160,0.8)] transition-all"
              >
                View Products
              </Button>
            </Link>
          </Card>
        </article>
      </div>
    </div>
  )
}
