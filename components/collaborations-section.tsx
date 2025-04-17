"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const collaborators = [
  { name: "Club 1", linkedin: "https://www.linkedin.com/in/ashinilj/" },
  { name: "Club 2", linkedin: "https://www.linkedin.com/in/ashinilj/" },
  { name: "Club 3", linkedin: "https://www.linkedin.com/in/ashinilj/" },
];

export function CollaborationsSection() {
  return (
    <section id="collaborations" className="relative py-24 w-screen overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl sm:text-7xl font-bold text-center mb-12 text-white">Our Collaborators</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex justify-center"
            >
              {/* Moving Border */}
              <div className="absolute -inset-0.5 rounded-xl overflow-hidden z-0">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-[#fc6b32] to-purple-500 blur-lg opacity-75"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <Link href={collaborator.linkedin} target="_blank" rel="noopener noreferrer" className="w-80 z-10">
                <Card className="w-80 h-80 flex flex-col items-center justify-center bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-6 hover:scale-105 transition-transform">
                  <CardContent className="flex flex-col items-center">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-center text-white leading-tight">
                      {collaborator.name}
                    </CardTitle>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
