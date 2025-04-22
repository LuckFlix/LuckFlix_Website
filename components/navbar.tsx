"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="LuckFlix Logo" width={48} height={48} className="h-12 w-auto" />
          <span className="text-amber-500 font-bold text-2xl">LuckFlix</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-white/80 hover:text-amber-500 transition-colors">
            Features
          </Link>
          <Link href="#screenshots" className="text-white/80 hover:text-amber-500 transition-colors">
            Screenshots
          </Link>
          <Link href="/privacy" className="text-white/80 hover:text-amber-500 transition-colors">
            Privacy Policy
          </Link>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">Download Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-white/80 hover:text-amber-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              className="text-white/80 hover:text-amber-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Screenshots
            </Link>
            <Link
              href="/privacy"
              className="text-white/80 hover:text-amber-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full">Download Now</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
