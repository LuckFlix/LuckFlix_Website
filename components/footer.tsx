import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { StoreButton } from "@/components/ui/store-button"

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-purple-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-amber-500 font-bold text-2xl">LuckFlix</h3>
            <p className="text-white/70">
              Discover movies and TV shows with our unique roulette-style recommendation system.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#features" className="text-white/70 hover:text-amber-500 transition-colors">
                Features
              </Link>
              <Link href="#screenshots" className="text-white/70 hover:text-amber-500 transition-colors">
                Screenshots
              </Link>
              <Link href="/privacy" className="text-white/70 hover:text-amber-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 hover:text-amber-500 transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Download</h4>
            <div className="flex flex-row gap-3">
              <StoreButton store="app-store" />
              <StoreButton store="google-play" />
            </div>
            <div className="pt-2">
              <Link
                href="mailto:luckflix.app@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-amber-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                luckflix.app@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} LuckFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
