"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-accent/20 shadow-lg shadow-accent/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse" />
              <span className="relative text-2xl md:text-3xl font-orbitron font-bold text-foreground">
                Tiny<span className="text-accent animate-pulse">E</span>bikePro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent/20 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/reviews"
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/about"
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
