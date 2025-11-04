"use client"
import { Star, Calendar, ThumbsUp, ShoppingCart, ArrowLeft, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

// Product data
const products = {
	"blitzu-bike-lights": {
		name: "BLITZU Bike Lights",
		rating: 4.6,
		reviewCount: 20131,
		price: "$22.99",
		category: "Lighting",
		image: "https://m.media-amazon.com/images/I/716dr6oRGML._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/BLITZU-Rechargeable-Powerful-Headlight-Flashlight/dp/B014QEWX2I",
		description:
			"Illuminate your ride with the BLITZU Bike Lights set, featuring a super bright USB-C rechargeable LED headlight, taillight, and bell. Designed for ultimate safety, this waterproof set ensures superior visibility for night riding, making it ideal for men, women, and kids on road or mountain bikes.",
		features: [
			"550-lumen LED headlight with 7-hour battery life",
			"Taillight with 10-hour battery life",
			"USB-C rechargeable",
			"Waterproof IPX5 rating",
			"5 lighting modes (High, Medium, Low, Strobe, Flash)",
			"Easy handlebar mount installation",
			"Includes bike bell and reflectors",
			"Lightweight at 3.2 ounces",
		],
		specs: {
			Weight: "3.2 ounces",
			Dimensions: "4cm x 4cm x 1cm",
			Battery: "Rechargeable Lithium-ion",
			Charging: "USB-C",
			Material: "Aluminum",
			Brightness: "550 lumens",
			Waterproof: "IPX5",
			Warranty: "1 year",
		},
	},
	"seatylock-foldylock-compact": {
		name: "Seatylock FoldyLock Compact Folding Bike Lock",
		rating: 4.6,
		reviewCount: 3391,
		price: "$94.98",
		category: "Security",
		image: "https://m.media-amazon.com/images/I/71p7CjjZJdL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/FoldyLock-Compact-Folding-Bike-Lock/dp/B0C7QV339C",
		description:
			"Secure your bike with the award-winning Seatylock FoldyLock Compact. This lightweight, high-security folding lock is bolt cutter, drill, and saw-proof, offering peace of mind for urban and outdoor cycling. Includes keys and a carrying case for easy transport.",
		features: [
			"Hardened steel with anti-tamper rivets",
			"33.5-inch chain link circumference",
			"Sold Secure Silver safety rating",
			"Weatherproof and rust-resistant",
			"Includes 3 master keys",
			"Silent frame mount for rattle-free ride",
			"Folds compactly into carrying case",
			"2020 European Design Award winner",
		],
		specs: {
			Weight: "1kg",
			Dimensions: "Folds to 18cm x 5cm x 4cm",
			LockLength: "33.5 inches",
			Material: "Hardened steel",
			Mounting: "Frame mount included",
			Warranty: "3 years",
		},
	},
	"lamicall-bike-phone-holder": {
		name: "Lamicall Bike Phone Holder",
		rating: 4.7,
		reviewCount: 1500,
		price: "$19.99",
		category: "Accessories",
		image: "https://m.media-amazon.com/images/I/61fC18PiL9L._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Lamicall-Motorcycle-Phone-Mount-Holder/dp/B0CNT3S8WD/",
		description:
			"Navigate effortlessly with the Lamicall Bike Phone Holder. This handlebar-mounted clamp securely holds phones up to 7 inches, offering a shock-absorbing grip and 360° rotation for perfect viewing angles. Ideal for motorcycles, scooters, and bicycles.",
		features: [
			"Fits phones up to 7 inches",
			"360° rotation for adjustable viewing",
			"Shock-absorbing silicone padding",
			"Universal handlebar fit (15-30mm)",
			"Quick-release mechanism",
			"Anti-slip design",
			"Durable and lightweight",
			"Compatible with iPhone, Samsung, and more",
		],
		specs: {
			Weight: "150g",
			Dimensions: "15cm x 8cm x 3cm",
			Compatibility: "Phones up to 7 inches",
			Material: "ABS plastic + silicone",
			Fit: "15-30mm handlebars",
			Warranty: "1 year",
		},
	},
	"rockbros-bike-panniers": {
		name: "ROCKBROS Bike Panniers",
		rating: 4.5,
		reviewCount: 1200,
		price: "$49.99",
		category: "Storage",
		image: "https://m.media-amazon.com/images/I/71LMuwVgDBL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/ROCKBROS-Panniers-Accessories-Shoulder-Capacity/dp/B07PD2MP59",
		description:
			"Carry your essentials with the ROCKBROS Bike Panniers. Designed for durability and convenience, these large-capacity bags feature a shoulder strap and reflective strips for safety. Perfect for commuting or long-distance cycling.",
		features: [
			"Large storage capacity",
			"Water-resistant ripstop nylon",
			"Reflective strips for visibility",
			"Convertible to shoulder bag",
			"Quick-release mounting system",
			"Reinforced stitching",
			"Side pockets for organization",
			"Fits most rear racks",
		],
		specs: {
			Weight: "500g",
			Capacity: "20 liters (per bag)",
			Dimensions: "35cm x 15cm x 30cm",
			Material: "Ripstop nylon + PVC coating",
			Waterproof: "Water-resistant",
			Warranty: "1 year",
		},
	},
	"adjustable-handlebar-mirror": {
		name: "Adjustable Handlebar Mirror",
		rating: 4.6,
		reviewCount: 800,
		price: "$14.99",
		category: "Safety",
		image: "https://m.media-amazon.com/images/I/61FuJOOtAcL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Adjustable-Handlebar-Shatterproof-Universal-Compatible/dp/B0DXBPV1HY",
		description:
			"Stay aware of your surroundings with the Adjustable Handlebar Mirror. Its shatterproof convex design provides a wide-angle view, enhancing safety for urban and trail riders. Easy to install and universally compatible with most bikes.",
		features: [
			"Shatterproof convex mirror",
			"Wide-angle visibility",
			"360° adjustable rotation",
			"Fits 22-32mm handlebars",
			"Anti-vibration design",
			"Tool-free installation",
			"Lightweight and durable",
			"Single mirror included",
		],
		specs: {
			Weight: "100g",
			Mirror: "7cm diameter",
			Material: "ABS plastic + glass",
			Fit: "22-32mm handlebars",
			Warranty: "1 year",
		},
	},
	"rockbros-release-luggage-rack": {
		name: "ROCKBROS Quick Release Luggage Rack",
		rating: 4.7,
		reviewCount: 950,
		price: "$59.99",
		category: "Storage",
		image: "https://m.media-amazon.com/images/I/71fOQPwihXL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/ROCKBROS-Release-Luggage-Mountain-Capacity/dp/B08LCQXJXG",
		description:
			"Haul your gear with ease using the ROCKBROS Quick Release Luggage Rack. Built from durable aluminum, this rack supports heavy loads and features a quick-release system for easy installation. Ideal for mountain bikes and commuting.",
		features: [
			"Supports up to 50kg",
			"Aluminum alloy construction",
			"Quick-release mounting system",
			"Adjustable height and width",
			"Pannier bag compatible",
			"Corrosion-resistant coating",
			"Reflector mounting points",
			"Universal bike fit",
		],
		specs: {
			Weight: "700g",
			Capacity: "50kg",
			Dimensions: "38cm x 14cm x 12cm",
			Material: "Aluminum alloy",
			Fit: "Most bikes with rear mounts",
			Warranty: "2 years",
		},
	},
	"bike-turn-signals": {
		name: "Bike Turn Signals",
		rating: 4.8,
		reviewCount: 600,
		price: "$29.99",
		category: "Safety",
		image: "https://m.media-amazon.com/images/I/61kIG8Tdj8L._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Signals-Bicycles-Charging-Integrated-Waterproof/dp/B0CLGXN3D5",
		description:
			"Signal your intentions with these Wireless Bike Turn Signals. Featuring USB-rechargeable LED lights, these waterproof signals enhance visibility in low-light conditions. Easy to install and perfect for safer commuting.",
		features: [
			"Wireless LED turn signals",
			"USB rechargeable",
			"Waterproof design",
			"Multiple flashing modes",
			"Easy strap mounting",
			"Visible from 300m",
			"Integrated brake light",
			"Lightweight at 80g",
		],
		specs: {
			Weight: "80g",
			Battery: "Rechargeable Li-ion",
			Brightness: "60 lumens",
			Material: "ABS plastic",
			Waterproof: "IPX5",
			Warranty: "1 year",
		},
	},
	"aventon-suspension-seat-post": {
		name: "AVENTON Advanced Suspension Bike Seat Post",
		rating: 4.6,
		reviewCount: 68,
		price: "$84.97",
		category: "Comfort",
		image: "https://m.media-amazon.com/images/I/41gYmv1WXuL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/AVENTON-Advanced-Suspension-seatpost-Mountain/dp/B0D3LKLC6R",
		description:
			"Experience unmatched comfort with the AVENTON Advanced Suspension Bike Seat Post. Its patented parallelogram mechanism offers 50mm of travel to absorb bumps, ideal for road, mountain, and e-bikes. Includes a dust sleeve for low maintenance.",
		features: [
			"50mm suspension travel",
			"Patented parallelogram mechanism",
			"Adjustable preload for rider weight",
			"Fits 27.2mm, 30.4mm, 30.9mm posts",
			"Aluminum alloy construction",
			"Dust sleeve for debris protection",
			"Weight limit: 420 lbs",
			"Compatible with Aventon eBikes",
		],
		specs: {
			Weight: "1.04kg",
			Diameter: "27.2mm (adapters for 30.4mm, 30.9mm)",
			Length: "365mm",
			MaxExtension: "250mm",
			Material: "Aluminum alloy",
			Warranty: "1 year",
		},
	},
	"wittkop-bike-grips": {
		name: "Wittkop Bike Grips",
		rating: 4.6,
		reviewCount: 956,
		price: "$19.99",
		category: "Comfort",
		image: "https://m.media-amazon.com/images/I/810aDWIek+L._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Wittkop-Innovative-Ergonomic-Optimized-Handlebar/dp/B0C7L64VQ4",
		description:
			"Upgrade your ride with Wittkop Bike Grips, featuring an innovative 3-zone ergonomic design made in Germany. These non-slip grips reduce wrist pain and enhance comfort, perfect for long rides on mountain or road bikes.",
		features: [
			"3-zone ergonomic design (non-slip, comfort, EFC)",
			"Reduces wrist pain",
			"UV and weather-resistant rubber",
			"Easy installation with hex key",
			"Fits 22.2mm handlebars",
			"Made in Germany",
			"Lightweight at 240g",
			"Over a century of Wittkop expertise",
		],
		specs: {
			Weight: "240g",
			Length: "13.1cm",
			Diameter: "22.2mm",
			Material: "Rubber",
			Colors: "Black",
			Warranty: "1 year",
		},
	},
}

const customerReviews = [
	{
		name: "Alex Thompson",
		rating: 5,
		date: "March 15, 2024",
		review:
			"Absolutely brilliant! The brightness is incredible and the battery lasts for hours. Perfect for my night commutes through the city. The neon glow effect is a nice touch too!",
		helpful: 24,
		verified: true,
	},
	{
		name: "Sarah Chen",
		rating: 5,
		date: "March 12, 2024",
		review:
			"Best investment I've made for my e-bike. The quality is outstanding and it works exactly as advertised. Installation was super easy too.",
		helpful: 18,
		verified: true,
	},
	{
		name: "Mike Rodriguez",
		rating: 4,
		date: "March 10, 2024",
		review:
			"Great product overall. Does exactly what it's supposed to do. Only minor complaint is I wish it came in more color options, but that's just personal preference.",
		helpful: 15,
		verified: true,
	},
]

export default function ProductReviewPage() {

	const params = useParams();
	const slug = params.slug;
	const product = products[params.slug as keyof typeof products]

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.box === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"box=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="min-h-screen bg-background pt-24 pb-16">
			<div className="container mx-auto px-4">
				{/* Back Link */}
				<Link
					href="/reviews"
					className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Reviews
				</Link>

				{/* Product Header */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* Image */}
					<div className="relative h-[400px] rounded-lg overflow-hidden">
						<Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
						<Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground">
							{product.category}
						</Badge>
					</div>

					{/* Info */}
					<div>
						<h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">{product.name}</h1>

						{/* Rating */}
						<div className="flex items-center gap-4 mb-6">
							<div className="flex items-center gap-2">
								<div className="flex items-center gap-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
												}`}
										/>
									))}
								</div>
								<span className="text-xl font-bold text-accent">{product.rating}</span>
							</div>
							<span className="text-muted-foreground">({product.reviewCount} reviews)</span>
						</div>

						{/* Price */}
						<div className="mb-6">

						</div>

						{/* Description */}
						<p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

						{/* CTA Button */}
						<a href={product.amazonUrl} data-auto>
							<Button
								size="lg"
								className="w-full bg-accent text-background hover:bg-accent/90 shadow-[0_0_20px_rgba(0,240,160,0.5)] hover:shadow-[0_0_40px_rgba(0,240,160,0.8)] transition-all"
							>
								<ShoppingCart className="w-5 h-5 mr-2" />
								Buy on Amazon
							</Button>
						</a>
					</div>
				</div>

				{/* Features */}
				<Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 mb-12">
					<h2 className="text-2xl font-orbitron font-bold mb-6">Key Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{product.features.map((feature, index) => (
							<div key={index} className="flex items-start gap-3">
								<Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
								<span className="text-muted-foreground">{feature}</span>
							</div>
						))}
					</div>
				</Card>

				{/* Specifications */}
				<Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 mb-12">
					<h2 className="text-2xl font-orbitron font-bold mb-6">Technical Specifications</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{Object.entries(product.specs).map(([key, value]) => (
							<div key={key} className="flex justify-between items-center pb-4 border-b border-accent/10">
								<span className="font-medium">{key}</span>
								<span className="text-muted-foreground">{value}</span>
							</div>
						))}
					</div>
				</Card>

				{/* Customer Reviews */}
				<div className="mb-12">
					<h2 className="text-2xl font-orbitron font-bold mb-6">Customer Reviews</h2>
					<div className="space-y-6">
						{customerReviews.map((review, index) => (
							<Card
								key={index}
								className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all"
							>
								{/* Header */}
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center gap-2 mb-1">
											<h3 className="font-semibold">{review.name}</h3>
											{review.verified && <Badge className="bg-accent/20 text-accent text-xs">Verified Purchase</Badge>}
										</div>
										<div className="flex items-center gap-2">
											<div className="flex items-center gap-1">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
															}`}
													/>
												))}
											</div>
											<div className="flex items-center gap-1 text-xs text-muted-foreground">
												<Calendar className="w-3 h-3" />
												{review.date}
											</div>
										</div>
									</div>
								</div>

								{/* Review Text */}
								<p className="text-muted-foreground mb-4 leading-relaxed">{review.review}</p>

								{/* Footer */}
								<div className="flex items-center gap-4 pt-4 border-t border-accent/10">
									<button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
										<ThumbsUp className="w-4 h-4" />
										Helpful ({review.helpful})
									</button>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
