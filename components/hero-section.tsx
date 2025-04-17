"use client"
import { motion } from "framer-motion"
import { BackgroundLines } from "./ui/background-lines"
import Image from "next/image"
import Countdown from "./ui/Countdown"
import { Iceland } from "next/font/google"

// Import Iceland font
const iceland = Iceland({ subsets: ["latin"], weight: "400" })

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)] z-0" />
      <BackgroundLines className="absolute inset-0 z-0 opacity-40">
        <></>
      </BackgroundLines>

      {/* Text Container with Background Image */}
      <div
        className="relative container mx-auto px-2 text-center z-10  
        bg-[url('/images/bg-texture.png')] bg-cover bg-top 
        pt-32 pb-20"
        style={{ top: "55px" }} // Adjust this value to push down
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Image above the title */}
          <div className="flex justify-center mb-1">
            <Image
              src="/images/x-factor-club.png" // Replace with your actual image path
              alt="Event Logo"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-tight text-white ${iceland.className}`}
          >
            Hack The Code
          </h1>

          <Image src="/images/24-hours.svg" alt="24 Hours Icon" width={400} height={400} className="mx-auto" />

          {/* WhatsApp Join Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-8">
            <a
              // href="https://wthscifi.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iceland.className} bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-12 px-8 text-xl rounded-md transition-all duration-300 border border-black-400]] flex items-center justify-center`}
            >
              Register Here
            </a>

            <a
              // href="https://chat.whatsapp.com/DNTw4OEGO280XF0bDpvraH"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iceland.className} h-12 px-8 bg-transparent text-white text-xl rounded-md border border-[#fc6b32] hover:bg-[#fc6b32]/10 transition-all duration-300 shadow-[0_0_10px_rgba(252,107,50,0.3)] hover:shadow-[0_0_15px_rgba(252,107,50,0.5)] flex items-center justify-center`}
            >
              Join Community
            </a>
          </div>

          {/* Countdown Timer - Fixed Separation Issue */}
          <div className="relative flex justify-center items-center -mt-12">
            {/* Background Image & Countdown Wrapper */}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              {/* Background Image */}
              <Image src="/images/registration-ends.png" alt="Countdown Background" fill className="object-contain mt-6" />

              {/* Countdown Positioned Absolutely Inside */}
              <div className={`absolute flex items-center justify-center ${iceland.className}`}>
                <Countdown />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}