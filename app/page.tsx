"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ScreenshotsSection from "@/components/screenshots-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="stars-bg fixed inset-0 z-0 opacity-50"></div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <Footer />

      <style jsx global>{`
        .stars-bg {
          background-image: radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0, 0, 0, 0)),
                            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
                            radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
                            radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
                            radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)),
                            radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }
      `}</style>
    </main>
  )
}
