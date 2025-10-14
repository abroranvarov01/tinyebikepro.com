import { Star, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function ReviewsPage() {
  const productReviews = [
    {
      slug: "blitzu-bike-lights",
      name: "BLITZU Bike Lights",
      rating: 4.6,
      reviewCount: 20131,
      price: "$22.99",
      category: "Lighting",
      image: "https://m.media-amazon.com/images/I/716dr6oRGML._AC_SX679_.jpg",
      excerpt:
        "Super bright USB-C rechargeable headlight, taillight & bell set. Waterproof safety front & rear lights for night riding, easy to install for men, women, kids, road cycling.",
      featured: true,
    },
    {
      slug: "seatylock-foldylock-compact",
      name: "Seatylock FoldyLock Compact Folding Bike Lock",
      rating: 4.6,
      reviewCount: 3391,
      price: "$94.98",
      category: "Security",
      image: "https://m.media-amazon.com/images/I/71p7CjjZJdL._AC_SX679_.jpg",
      excerpt:
        "Award-winning patented lightweight high security bicycle lock. Heavy duty anti-theft smart secure guard with keys & case for bikes or scooters.",
      featured: true,
    },
    {
      slug: "lamicall-bike-phone-holder",
      name: "Lamicall Bike Phone Holder",
      rating: 4.7,
      reviewCount: 1500,
      price: "$19.99",
      category: "Accessories",
      image: "https://m.media-amazon.com/images/I/61fC18PiL9L._AC_SX679_.jpg",
      excerpt: "Motorcycle phone mount - handlebar cell phone clamp, scooter phone clip for iPhone and other devices.",
      featured: false,
    },
    {
      slug: "rockbros-bike-panniers",
      name: "ROCKBROS Bike Panniers",
      rating: 4.5,
      reviewCount: 1200,
      price: "$49.99",
      category: "Storage",
      image: "https://m.media-amazon.com/images/I/71LMuwVgDBL._AC_SX679_.jpg",
      excerpt: "Bike panniers for bicycle rear rack bag accessories. Shoulder bag with large capacity for cycling.",
      featured: false,
    },
    {
      slug: "adjustable-handlebar-mirror",
      name: "Adjustable Handlebar Mirror",
      rating: 4.6,
      reviewCount: 800,
      price: "$14.99",
      category: "Safety",
      image: "https://m.media-amazon.com/images/I/61FuJOOtAcL._AC_SX679_.jpg",
      excerpt: "Shatterproof universal compatible rear view mirror for bikes. Enhances safety with wide-angle view.",
      featured: false,
    },
    {
      slug: "rockbros-release-luggage-rack",
      name: "ROCKBROS Quick Release Luggage Rack",
      rating: 4.7,
      reviewCount: 950,
      price: "$59.99",
      category: "Storage",
      image: "https://m.media-amazon.com/images/I/71fOQPwihXL._AC_SX679_.jpg",
      excerpt: "Quick release bike luggage carrier for mountain bikes. Large capacity rear rack for cycling.",
      featured: false,
    },
    {
      slug: "bike-turn-signals",
      name: "Bike Turn Signals",
      rating: 4.8,
      reviewCount: 600,
      price: "$29.99",
      category: "Safety",
      image: "https://m.media-amazon.com/images/I/61kIG8Tdj8L._AC_SX679_.jpg",
      excerpt:
        "Wireless turn signals for bicycles with USB charging. Integrated waterproof lights for enhanced visibility.",
      featured: true,
    },
    {
      slug: "aventon-suspension-seat-post",
      name: "AVENTON Advanced Suspension Bike Seat Post",
      rating: 4.6,
      reviewCount: 68,
      price: "$84.97",
      category: "Comfort",
      image: "https://m.media-amazon.com/images/I/41gYmv1WXuL._AC_SX679_.jpg",
      excerpt:
        "27.2mm seatpost with dust sleeve, ideal for road & mountain bikes, e-bikes. Patented parallelogram mechanism for unmatched comfort.",
      featured: false,
    },
    {
      slug: "wittkop-bike-grips",
      name: "Wittkop Bike Grips",
      rating: 4.6,
      reviewCount: 956,
      price: "$19.99",
      category: "Comfort",
      image: "https://m.media-amazon.com/images/I/810aDWIek+L._AC_SX679_.jpg",
      excerpt:
        "Innovative 3-zone design made in Germany. Ergonomic non-slip comfort and EFC zones for optimized grip & comfort on handlebars.",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Product <span className="text-accent">Reviews</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In-depth reviews of the best e-bike accessories. Find the perfect upgrades for your ride.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4.8</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1,907</div>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">96%</div>
              <p className="text-sm text-muted-foreground">Recommend Rate</p>
            </div>
          </Card>
        </div>

        {/* Product Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productReviews.map((product) => (
            <Link key={product.slug} href={`/reviews/${product.slug}`}>
              <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/20 cursor-pointer">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  {product.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent text-background">Featured</Badge>
                  )}
                  <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground">
                    {product.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-accent">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.excerpt}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                    <div className="flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all">
                      Read Review
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
