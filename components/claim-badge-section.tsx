"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Users, Key } from "lucide-react"
import html2canvas from "html2canvas"
import Image from "next/image"
import { useAuth } from "../context/auth";
 // Ensure this is your authentication context

export function ClaimBadgeSection() {
  const { isAuthenticated, login } = useAuth(); // Fetch authentication status
  const [participantInfo, setParticipantInfo] = useState({
    participantName: "",
    teamName: "",
    teamCode: "",
  })
  const [showBadge, setShowBadge] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParticipantInfo({ ...participantInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAuthenticated) {
      login("defaultUser") // Provide a valid username
      return
    }
    setShowBadge(true)
    setMessageVisible(true)
  }
  

  const handleDownload = () => {
    const badge = document.getElementById("badge");
    if (badge) {
      setTimeout(() => {
        html2canvas(badge, {
          scale: 3,
          useCORS: true,
          backgroundColor: null,
          foreignObjectRendering: true,
        }).then((canvas) => {
          const imageURL = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imageURL;
          link.download = "badge.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      }, 500);
    }
  };

  return (
    <section id="claim-badge" className="relative flex items-center justify-center min-h-screen w-full bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
      <div className="container mx-auto px-6 py-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-12 text-center"
        >
          Claim Your Badge
        </motion.h2>
        {isAuthenticated ? (
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 max-w-md"
            >
              <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] text-white shadow-lg border border-black">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Participant Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="participantName" className="text-lg font-medium">
                        Participant Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <Input
                          id="participantName"
                          name="participantName"
                          value={participantInfo.participantName}
                          onChange={handleChange}
                          className="pl-10 !text-lg !h-[56px] !py-3 !leading-relaxed bg-white text-black border border-black"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="teamName" className="text-lg font-medium">
                        Team Name
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <Input
                          id="teamName"
                          name="teamName"
                          value={participantInfo.teamName}
                          onChange={handleChange}
                          className="pl-10 !text-lg !h-[56px] !py-3 !leading-relaxed bg-white text-black border border-black"
                          placeholder="Enter team name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="teamCode" className="text-lg font-medium">
                        Team Code
                      </label>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <Input
                          id="teamCode"
                          name="teamCode"
                          value={participantInfo.teamCode}
                          onChange={handleChange}
                          className="pl-10 !text-lg !h-[56px] !py-3 !leading-relaxed bg-white text-black border border-black"
                          placeholder="Enter team code"
                          required
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full text-lg bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 border border-black"
                    >
                      Claim Your Badge
                    </Button>
                    {messageVisible && (
                      <p className="text-center text-sm mt-2 text-gray-200">
                        Share your badge on LinkedIn and tag us!
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 max-w-md"
            >
              <Card className="relative bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg border-4 border-yellow-700 overflow-hidden">
                {showBadge ? (
                  <CardContent id="badge" className="flex flex-col items-center space-y-4 p-6 relative z-10">
                    <Image
                      src="/images/badge1.png"
                      alt="Event Logo"
                      width={200}
                      height={200}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-2xl font-bold text-center">What The Hack 2025</h3>
                    <div className="text-center">
                      <p className="text-xl font-semibold">{participantInfo.participantName}</p>
                      <p className="text-lg">{participantInfo.teamName}</p>
                    </div>
                    <p className="text-center font-medium">4th & 5th April 2025</p>
                    <div className="bg-yellow-200 rounded-full px-4 py-2 text-yellow-800 font-bold">
                      Official Participant
                    </div>
                    <p className="text-center text-sm">Awarded for successfully contributing to the event.</p>
                  </CardContent>
                ) : (
                  <div className="flex flex-col text-xl items-center justify-center h-80">
                    <span className="text-6xl font-bold">❓</span>
                    <p>Your badge appears here</p>
                  </div>
                )}
              </Card>
              {showBadge && (
                <Button onClick={handleDownload} className="mt-4 w-full">
                  Download Badge
                </Button>
              )}
            </motion.div>
          </div>
        ) : (
          <p className="text-center text-lg">You must be logged in to claim a badge.</p>
        )}
      </div>
    </section>
  )
}
