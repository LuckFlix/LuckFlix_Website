"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScrollTo } from "@/utils/scroll-utils"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    smoothScrollTo(sectionId)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen ? "bg-black py-4" : scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 relative z-[60]">
          <Image src="/logo.png" alt="LuckFlix Logo" width={48} height={48} className="h-12 w-auto" />
          <span className="font-bold text-2xl">
            <span className="text-amber-500">Luck</span>
            <span className="text-white">Flix</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            onClick={(e) => handleNavLinkClick(e, "features")}
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            onClick={(e) => handleNavLinkClick(e, "screenshots")}
          >
            Screenshots
          </Link>
          <Link
            href="/privacy"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">Download Now</Button>
        </div>

        {/* Mobile Menu Button - Now with higher z-index */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white relative z-[60]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu - Now with fixed styles and proper z-index */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-[55] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-20 flex flex-col gap-6">
          <Link
            href="#features"
            className="text-xl text-gray-300 hover:text-amber-500 transition-colors duration-300 font-medium"
            onClick={(e) => handleNavLinkClick(e, "features")}
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="text-xl text-gray-300 hover:text-amber-500 transition-colors duration-300 font-medium"
            onClick={(e) => handleNavLinkClick(e, "screenshots")}
          >
            Screenshots
          </Link>
          <Link
            href="/privacy"
            className="text-xl text-gray-300 hover:text-amber-500 transition-colors duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black mt-4 w-full py-6 text-lg font-bold shadow-lg">
            Download Now
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
