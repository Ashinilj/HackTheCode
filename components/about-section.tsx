"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Users } from "lucide-react"
import { useState } from "react"

export function AboutSection() {
  const [hoverVenue, setHoverVenue] = useState(false)
  const [hoverOrganizer, setHoverOrganizer] = useState(false)

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
          className="text-5xl md:text-7xl font-bold mb-12 text-center text-white"
        >
          About This Hackathon
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
                  What The Hack, organized by the Sci-Fi Innovation Club, is a platform for passionate individuals, tech
                  enthusiasts, and innovators to solve real-world problems creatively. We aim to foster collaboration,
                  learning, and innovation through this immersive hackathon experience.
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
            onMouseEnter={() => setHoverVenue(true)}
            onMouseLeave={() => setHoverVenue(false)}
            className="perspective-1000"
          >
            <motion.div
              animate={{
                rotateX: hoverVenue ? 5 : 0,
                rotateY: hoverVenue ? -5 : 0,
                scale: hoverVenue ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full h-full"
            >
              <Card className="w-full bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] backdrop-blur-sm overflow-hidden border border-purple-500/30">
                <CardContent className="p-8 relative">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#fc6b32]/20 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 1,
                      }}
                    />
                  </div>

                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0 bg-gradient-to-br from-purple-600 to-[#fc6b32] p-4 rounded-2xl shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                        Event Venue
                        <motion.span
                          className="ml-2 inline-block"
                          animate={{ y: hoverVenue ? [0, -5, 0] : 0 }}
                          transition={{
                            duration: 0.5,
                            repeat: hoverVenue ? Number.POSITIVE_INFINITY : 0,
                            repeatDelay: 1,
                          }}
                        >
                          {/* 🏢 */}
                        </motion.span>
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-[#fc6b32] rounded-full mb-4"></div>
                      <p className="text-white text-xl leading-relaxed">
                        Chandigarh University
                        <br />
                        Mohali, Punjab
                      </p>

                      {/* Reveal on hover */}
                      <motion.div
                        className="mt-4 text-sm text-purple-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoverVenue ? 1 : 0,
                          height: hoverVenue ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* <p>
                          Join us at the state-of-the-art campus facilities equipped with high-speed internet, modern
                          workspaces, and all the amenities you&apos;ll need for a productive hackathon experience.
                        </p> */}
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-[#fc6b32] rounded-lg blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoverVenue ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Organizer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onMouseEnter={() => setHoverOrganizer(true)}
            onMouseLeave={() => setHoverOrganizer(false)}
            className="perspective-1000"
          >
            <motion.div
              animate={{
                rotateX: hoverOrganizer ? 5 : 0,
                rotateY: hoverOrganizer ? 5 : 0,
                scale: hoverOrganizer ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full h-full"
            >
              <Card className="w-full bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] backdrop-blur-sm overflow-hidden border border-purple-500/30">
                <CardContent className="p-8 relative">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.div
                      className="absolute -top-20 -left-20 w-40 h-40 bg-[#fc6b32]/20 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 0.5,
                      }}
                    />
                  </div>

                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0 bg-gradient-to-br from-[#fc6b32] to-purple-600 p-4 rounded-2xl shadow-lg"
                      whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                        Organized By
                        <motion.span
                          className="ml-2 inline-block"
                          animate={{ y: hoverOrganizer ? [0, -5, 0] : 0 }}
                          transition={{
                            duration: 0.5,
                            repeat: hoverOrganizer ? Number.POSITIVE_INFINITY : 0,
                            repeatDelay: 1,
                          }}
                        >
                          {/* 🚀 */}
                        </motion.span>
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-[#fc6b32] to-purple-500 rounded-full mb-4"></div>
                      <p className="text-white text-xl leading-relaxed">
                        Sci-Fi Innovation Club
                        <br />
                        <span className="italic">Fuel Your Innovation!!</span>
                      </p>

                      {/* Reveal on hover */}
                      <motion.div
                        className="mt-4 text-sm text-purple-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoverOrganizer ? 1 : 0,
                          height: hoverOrganizer ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* <p>
                          A student-led organization dedicated to fostering innovation, creativity, and technological
                          advancement through collaborative events, workshops, and hackathons.
                        </p> */}
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fc6b32] to-purple-600 rounded-lg blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoverOrganizer ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Guidelines Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="text-lg bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white border border-black px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              onClick={() => console.log("Downloading guidelines...")}
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Event Guidelines
              </span>
              <motion.span className="absolute inset-0 bg-gradient-to-r from-purple-900 to-[#fc6b32] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

