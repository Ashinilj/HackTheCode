"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden py-20"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent)]" />

      <div className="container mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-12 text-center bg-clip-text text-transparent text-white"
        >
          About What The Hack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Section - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Card className="w-full h-full bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-3xl -mr-16 -mt-16" />
                <h3 className="text-3xl font-bold mb-6 text-white relative z-10">Our Mission</h3>
                <p className="text-gray-200 relative z-10 text-lg leading-relaxed">
                  What The Hack, organized by the Sci-Fi Innovation Club, is a platform for passionate individuals,
                  tech enthusiasts, and innovators to solve real-world problems creatively. We aim to foster
                  collaboration, learning, and innovation through this immersive hackathon experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Section - What to Expect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Card className="w-full h-full bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-3xl -ml-16 -mt-16" />
                <h3 className="text-3xl font-bold mb-6 text-white relative z-10">What to Expect?</h3>
                <p className="text-gray-200 relative z-10 text-lg leading-relaxed">
                  Participants will form teams, select challenges, and develop innovative solutions under time
                  constraints. The event fosters learning, networking, and growth. You&apos;ll have access to mentors,
                  workshops, and resources to help bring your ideas to life.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info Cards - Venue and Organizer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Venue Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-center">
                <div className="mr-4 bg-purple-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">Event Venue</h3>
                  <p className="text-white text-xl">
                    Chandigarh University
                    <br />
                    Mohali, Punjab
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Organizer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-center">
                <div className="mr-4 bg-purple-600 p-3 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">Organized By</h3>
                  <p className="text-white text-xl">
                    Sci-Fi Innovation Club
                    <br />
                    Fuel Your Innovation!!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Guidelines Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            className="text-lg bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white border border-black  px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => console.log("Downloading guidelines...")}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Event Guidelines
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

