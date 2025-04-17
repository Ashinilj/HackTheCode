"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamSection() {
  const facultyCoordinators = [
    { name: " Prof. (Dr.) Virus", role: "Faculty Coordinator", image: "/images/virus.png" },
    { name: "Prof. (Dr.) Chatur Ramalingham", role: "Faculty Coordinator", image: "/images/chatur.png" },
  ]

  const teamMembers = [
    { name: "Ashini L J", role: "Design Team", image: "/images/Ashini.jpeg" },
    { name: "Ranchod Das", role: "Technical Team", image: "/images/rancho.png" },
    { name: "Farhan Qureshi", role: "Camera Team", image: "/images/farhan.png" },
    { name: "Raju Rastogi", role: "Management Team", image: "/images/raju.png" },
  ]

  return (
    <section id="our-team" className="relative flex items-center justify-center w-full min-h-screen bg-background pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-8"
        >
          Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-muted-foreground text-white"
        >
          This event is organized by the dedicated members of the X-Factor Club. We extend our heartfelt gratitude to all the core members for their unwavering hard work and invaluable contributions.
        </motion.p>

        {/* Faculty Coordinators Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl font-semibold mt-16 mb-6 text-white"
        >
          Faculty Coordinators
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {facultyCoordinators.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#632182] via-[#ea623e] to-[#934d76] z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <Image
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4 object-cover aspect-square border-4 border-transparent group-hover:border-white transition-all"
                  priority
                  placeholder="blur"
                  blurDataURL="/placeholder.svg"
                />
                <h3 className="text-xl font-semibold text-white">{faculty.name}</h3>
                <p className="text-muted-foreground text-white">{faculty.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Team Members Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-semibold mt-16 mb-6 text-white"
        >
          Organizers
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#632182] via-[#ea623e] to-[#934d76] z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4 object-cover aspect-square border-4 border-transparent group-hover:border-white transition-all"
                  priority
                  placeholder="blur"
                  blurDataURL="/placeholder.svg"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-muted-foreground text-white">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
