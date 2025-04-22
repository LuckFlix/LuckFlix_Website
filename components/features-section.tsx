"use client"

import { motion } from "framer-motion"
import { Dices, Tv, Smile, HelpCircle } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Dices className="h-10 w-10 text-amber-500" />,
      title: "Movie Roulette",
      description: "Spin the wheel and discover new movies based on your preferences and viewing history.",
    },
    {
      icon: <Tv className="h-10 w-10 text-amber-500" />,
      title: "TV Show Recommendations",
      description: "Get personalized TV show suggestions from all major streaming platforms in one place.",
    },
    {
      icon: <Smile className="h-10 w-10 text-amber-500" />,
      title: "Emoji Quiz",
      description: "Test your movie knowledge with our fun emoji-based movie guessing game.",
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-amber-500" />,
      title: "Movie Quiz",
      description: "Challenge yourself with trivia about your favorite films and discover new facts.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            LuckFlix brings the excitement of discovery back to your entertainment experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-700/50 to-amber-500/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-xl h-full flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-purple-900/30 rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
