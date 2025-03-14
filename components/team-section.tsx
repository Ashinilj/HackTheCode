"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamSection() {
  const facultyCoordinators = [
    { name: " Prof. (Dr.) Sartajvir Singh", role: "Faculty Coordinator", image: "/images/sartajvir-sir.jpg" },
    { name: "Prof. (Dr.) Abhishek Kumar Pandey", role: "Faculty Coordinator", image: "/images/abhishek-sir.jpeg" },
  ]

  const teamMembers = [
    { name: "Ashish", role: "Secretary", image: "/images/Ashish.jpg" },
    { name: "Sarthak", role: "Secretary", image: "/images/sarthak-cuec.jpg" },
    { name: "Vaibhav Kushwaha", role: "Secretary", image: "/images/vaibhav.jpeg" },
    { name: "Siddhant Tiwari", role: "Secretary", image: "/images/siddhant.jpg" },
    { name: "Rishi", role: "Jt. Secretary", image: "/images/Rishi.jpg" },
    { name: "Krish", role: "Jt. Secretary", image: "/images/Krish.jpg" },
    { name: "Harshita", role: "Jt. Secretary", image: "/images/Harshita.jpg" },
    { name: "Aditya Khurana", role: "Jt. Secretary", image: "/images/aditya.jpg" },
    { name: "Anant Inder Singh", role: "Jt. Secretary", image: "/images/anant.jpg" },
    { name: "Rajeshwari Pradhan", role: "Jt. Secretary", image: "/images/rajeshwari.jpg" },
    { name: "Ashini", role: "Core Team Lead", image: "/images/Ashini.jpeg" },
    { name: "Utkarsh", role: "Core Team Lead", image: "/images/Utkarsh.jpg" },
    { name: "Vivek", role: "Core Team Lead", image: "/images/vivek.jpg" },
    { name: "Sujal Kumar", role: "Core Team Lead", image: "/images/sujal-kumar.jpg" },
    { name: "Anirudh", role: "Core Team Lead", image: "/images/anirudh1.jpg" },
    // { name: "Adith", role: "Core Team Lead", image: "/images/Adith.jpg" },
    { name: "Atish", role: "Core Team Lead", image: "/images/Atish.jpg" },
    { name: "Nabeel Akhther", role: "Core Team Lead", image: "/images/nabeel.jpg" },
    { name: "Aditi", role: "Core Team Lead", image: "/images/aditi.jpg" },
    { name: "Atharva Barge", role: "Core Team Lead", image: "/images/atharva.jpg" },
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
          This event is organized by the dedicated members of the Sci-Fi Innovation Club in collaboration with C Square, CypherLock and Chandigarh University Engineering Community. We extend our heartfelt gratitude to all the core members for their unwavering hard work and invaluable contributions.
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
