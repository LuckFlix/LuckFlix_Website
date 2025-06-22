"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-amber-900/90 to-black/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-8 max-w-md mx-4 text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        {/* Content */}
        <div className="space-y-4">
          <div className="text-6xl">🚀</div>
          <h3 className="text-2xl font-bold text-white">
            Coming Soon!
          </h3>
          <p className="text-white/80">
            LuckFlix iOS app is currently in development. 
            We'll notify you when it's available on the App Store!
          </p>
          <div className="pt-4">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
