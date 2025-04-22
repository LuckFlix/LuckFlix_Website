"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ScreenshotsSection() {
  const screenshots = [
    {
      src: "/screenshots/home_screen.png", // Example path
      alt: "LuckFlix Home Screen",
      title: "Home Screen",
      description: "Spin the wheel or browse categories to find your next watch.", // Updated description
    },
    {
      src: "/screenshots/genre_selection.png", // Updated path
      alt: "LuckFlix Genre Selection Screen", // Updated alt text
      title: "Genre Selection", // Updated title
      description: "Choose your preferred genres for tailored recommendations.", // Updated description
    },
    {
      src: "/screenshots/movie_details.png", // Example path
      alt: "LuckFlix Movie Details",
      title: "Movie Details",
      description: "View trailers, cast, ratings, and more for any movie or show.", // Updated description
    },
    {
      src: "/screenshots/history_screen.png", // Changed path (assuming a new screenshot exists)
      alt: "LuckFlix History Screen", // Changed alt text
      title: "Viewing History", // Changed title
      description: "Easily access your previously watched or discovered titles.", // Changed description
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1))
  }

  return (
    <section id="screenshots" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Take a peek at the sleek interface and exciting features of LuckFlix
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Mobile view - single screenshot with navigation */}
          <div className="md:hidden relative">
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[605px]"> {/* Adjusted height */}
                {/* Phone mockup */}
                <div className="absolute inset-0 rounded-[40px] border-4 border-gray-800 bg-black z-10 overflow-hidden">
                  <Image
                    src={screenshots[currentIndex].src || "/placeholder.svg"}
                    alt={screenshots[currentIndex].alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-700/30 to-amber-500/30 rounded-[60px] blur-xl z-0"></div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold text-amber-500">{screenshots[currentIndex].title}</h3>
              <p className="text-white/70 mt-2">{screenshots[currentIndex].description}</p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="border-purple-700 text-purple-700 hover:bg-purple-700/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-amber-500 text-amber-500 hover:bg-amber-500/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Desktop view - multiple screenshots */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative w-[160px] h-[346px] mx-auto"> {/* Adjusted height */}
                  {/* Phone mockup */}
                  <div className="absolute inset-0 rounded-[30px] border-2 border-gray-800 bg-black z-10 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={screenshot.src || "/placeholder.svg"}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-700/30 to-amber-500/30 rounded-[40px] blur-md z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-amber-500">{screenshot.title}</h3>
                  <p className="text-white/70 mt-1 text-sm">{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
