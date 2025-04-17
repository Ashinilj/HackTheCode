"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CardContent } from "@/components/ui/card"
import { GlareCard } from "@/components/ui/glare-card"

type Theme = {
  name: string;
  description: string;
  image: string;
};

const themes: Theme[] = [
  { name: "Theme 1", description: "Explore the world of decentralized finance and digital currencies.", image: "/images/blockchain.svg" },
  { name: "Theme 2", description: "Harness the power of data and artificial intelligence for innovative solutions.", image: "/images/data-ai.svg" },
  { name: "Theme 3", description: "Engage in capture the flag challenges and enhance your cybersecurity skills.", image: "/images/cybersecurity.svg" },
  { name: "Theme 4", description: "Connect and manage devices in a smart ecosystem.", image: "/images/iot.svg" },
  { name: "Theme 5", description: "Dive into augmented and virtual reality experiences.", image: "/images/ar-vr.svg" },
  { name: "Theme 6", description: "Build responsive web and mobile applications.", image: "/images/web-mobile.svg" },
  { name: "Theme 7", description: "Apply artificial intelligence to geographic data for insightful analysis.", image: "/images/geo-ai.svg" },
  { name: "Theme 8", description: "Innovate in financial technology and digital transactions.", image: "/images/fintech-logo.svg" },
  { name: "Theme 9", description: "Collaborate and innovate through open-source projects.", image: "/images/open-innovation.svg" }
];

export function ThemeSection() {
  return (
    <section id="theme" className="relative flex flex-col items-center justify-center min-h-screen w-full bg-background px-6 py-24">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent)]" />

      <div className="max-w-[90%] mx-auto z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-8 text-center"
        >
          Themes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        />

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-items-center max-w-[97%] mx-auto">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <GlareCard className="h-full hover:from-gray-900/60 hover:to-purple-900/40 transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center space-y-4">
                  <Image 
                    src={theme.image} 
                    alt={theme.name} 
                    width={200}  
                    height={200} 
                    className="w-48 h-48 object-contain"
                  />
                  <h3 className="text-xl font-semibold">{theme.name}</h3>
                </CardContent>
              </GlareCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
