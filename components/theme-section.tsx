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
  { name: "⁠Blockchain & Web3", description: "Explore the world of decentralized finance and digital currencies.", image: "/images/blockchain.svg" },
  { name: "Artificial Intelligence & Machine Learning", description: "Harness the power of data and artificial intelligence for innovative solutions.", image: "/images/data-ai.svg" },
  { name: "⁠Cybersecurity & Digital Privacy", description: "Engage in capture the flag challenges and enhance your cybersecurity skills.", image: "/images/cybersecurity.svg" },
  { name: "⁠Internet of Things & Smart Tech", description: "Connect and manage devices in a smart ecosystem.", image: "/images/iot.svg" },
  { name: "⁠Augmented & Virtual Reality", description: "Dive into augmented and virtual reality experiences.", image: "/images/ar-vr.svg" },
  { name: "Cloud Computing", description: "Utilize cloud technologies and DevOps practices for efficient development.", image: "/images/cloud-devops.svg" },
  { name: "Web & Mobile App Development", description: "Build responsive web and mobile applications.", image: "/images/web-mobile.svg" },
  { name: "Geo AI & Location Intelligence", description: "Apply artificial intelligence to geographic data for insightful analysis.", image: "/images/geo-ai.svg" },
];

const specialThemes: Theme[] = [
  { name: "FinTech & Digital Payments", description: "Innovate in financial technology and digital transactions.", image: "/images/fintech-logo.svg" },
  { name: "Open Innovation", description: "Collaborate and innovate through open-source projects.", image: "/images/open-innovation.svg" },
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

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 justify-items-center max-w-[97%] mx-auto">
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

        {/* Centered Last Two Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-12">
          {specialThemes.map((theme, index) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-md"
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
