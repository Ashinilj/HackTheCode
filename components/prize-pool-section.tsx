"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PrizePoolSection() {
  return (
    <section id="prize-pool" className="relative py-24 w-screen overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl sm:text-7xl font-bold text-center mb-12">Prize Pool</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-8">
          {["Grand Prize", "1st Runner-Up", "2nd Runner-Up"].map((title, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex justify-center relative"
            >
              {/* Animated Border - Always Active */}
              <div className="absolute -inset-0.5 rounded-xl overflow-hidden z-0">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-[#fc6b32] to-purple-500 blur-lg opacity-75"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <Card className="relative w-full sm:w-80 bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-4 z-10">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-center">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl sm:text-5xl font-bold text-center">XXXXX</p>
                  <p className="text-center mt-2 sm:mt-4">
                    {index === 0 ? "For the winning team" : index === 1 ? "For the 1st runner-up" : "For the 2nd runner-up"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
