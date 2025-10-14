import Link from "next/link"
import { ArrowLeft, Zap, Shield, Users, Award, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-balance">
            About <span className="text-accent">TinyEbikePro</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Your trusted source for premium e-bike accessories and expert recommendations. We're passionate about
            helping riders enhance their electric biking experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-accent/40 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At TinyEbikePro, we believe that every e-bike rider deserves access to high-quality accessories that
                enhance safety, comfort, and performance. Our mission is to curate and recommend the best products on
                the market, helping you make informed decisions for your electric biking journey.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality First",
                description:
                  "We only recommend products that meet our strict quality standards and have been thoroughly tested.",
              },
              {
                icon: Users,
                title: "Community Driven",
                description:
                  "Our recommendations are based on real user feedback and experiences from the e-bike community.",
              },
              {
                icon: Zap,
                title: "Innovation Focus",
                description:
                  "We stay ahead of the curve, bringing you the latest innovations in e-bike technology and accessories.",
              },
              {
                icon: Award,
                title: "Expert Reviews",
                description:
                  "Our team of e-bike enthusiasts provides honest, detailed reviews to help you choose wisely.",
              },
              {
                icon: Heart,
                title: "Rider Support",
                description:
                  "We're here to support your journey with helpful guides, tips, and responsive customer service.",
              },
              {
                icon: Target,
                title: "Transparency",
                description:
                  "We're upfront about our affiliate partnerships and always prioritize your best interests.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/5 group"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TinyEbikePro was born from a simple observation: e-bike riders needed a reliable source for accessory
                recommendations that they could trust. As passionate e-bike enthusiasts ourselves, we experienced
                firsthand the challenge of finding quality products in a market flooded with options.
              </p>
              <p>
                We started by testing products ourselves, reading countless reviews, and connecting with the e-bike
                community. What began as a personal project quickly grew into a comprehensive resource that thousands of
                riders now rely on for their accessory needs.
              </p>
              <p>
                Today, we continue to expand our knowledge base, test new products, and provide honest recommendations
                that help riders of all levels enhance their e-biking experience. Whether you're commuting to work or
                exploring mountain trails, we're here to help you find the perfect accessories for your journey.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Stay updated with the latest product reviews, e-bike tips, and exclusive recommendations.
            </p>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
