"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

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
              <Button className="bg-amber-500 hover:bg-amber-600 text-black gap-2">
                <Apple className="h-5 w-5" />
                App Store
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 gap-2">
                <Play className="h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[280px] h-[560px]">
              {/* Phone mockup */}
              <div className="absolute inset-0 rounded-[40px] border-4 border-gray-800 bg-black z-10 overflow-hidden">
                {/* App screen */}
                <div className="relative h-full w-full bg-gradient-to-b from-black to-purple-900/30">
                  {/* App content */}
                  <div className="absolute top-12 left-0 right-0 text-center">
                    <h3 className="text-amber-500 text-2xl font-bold">LuckFlix</h3>
                  </div>

                  {/* Roulette wheel */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    onClick={spinRoulette}
                  >
                    <div
                      className={`w-56 h-56 rounded-full bg-gradient-to-br from-purple-700 to-amber-500 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        spinning ? "animate-spin" : ""
                      }`}
                    >
                      <div className="w-48 h-48 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-amber-500 text-lg font-bold">Spin for luck!</span>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-8 bg-amber-500 clip-triangle"></div>
                  </div>

                  <div className="absolute bottom-12 left-0 right-0 text-center">
                    <p className="text-white/80 text-sm">Tap the wheel to discover</p>
                  </div>
                </div>
              </div>

              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-700/30 to-amber-500/30 rounded-[60px] blur-xl z-0"></div>
            </div>
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
