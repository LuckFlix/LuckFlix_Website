"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface StoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  store: "app-store" | "google-play"
}

export function StoreButton({
  store,
  className,
  ...props
}: StoreButtonProps) {
  // Use the provided image assets
  const imageSrc = store === "app-store" 
    ? "./images/app-store-logo.svg" 
    : "./images/google-play-badge.png"
  
  // According to guidelines, maintain proper clear space around badges
  // We'll use the same container height for both buttons to ensure visual consistency
  return (
    <button
      className={cn(
        "flex items-center justify-center transition-opacity duration-200 hover:opacity-80 bg-transparent py-1 px-0",
        className
      )}
      {...props}
    >
      <Image 
        src={imageSrc}
        alt={store === "app-store" ? "Download on App Store" : "Get it on Google Play"}
        width={store === "app-store" ? 169 : 194} // Increased width proportionally 
        height={50} // Increased height from 40px to 50px
        className="h-[50px] w-auto" // Increased height to 50px
        style={{ objectFit: "contain" }} // Ensure aspect ratio is preserved
      />
    </button>
  )
}
