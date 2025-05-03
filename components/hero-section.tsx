"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { StoreButton } from "@/components/ui/store-button"
import { Apple, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [spinning, setSpinning] = useState(false)

  const spinRoulette = () => {
    if (!spinning) {
      setSpinning(true)
      setTimeout(() => setSpinning(false), 3000)
    }
  }

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Discover Your Next <span className="text-amber-500">Favorite</span> Show
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              LuckFlix uses a unique roulette-style system to help you discover movies and TV shows you'll love. No more
              endless scrolling!
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <StoreButton store="app-store" />
              <StoreButton store="google-play" />
            </div>
          </div>

          {/* Image Mockup */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="./3_Mochup.png" // Path relative to the public folder
              alt="LuckFlix App Mockup"
              width={600} // Adjust width as needed for visual balance
              height={600} // Adjust height as needed for visual balance
              className="object-contain max-w-full h-auto" // Maintain aspect ratio and prevent overflow
              priority // Prioritize loading this image
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  )
}
