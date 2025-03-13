"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const collaborators = [
  { name: "CypherLock Club", logo: "/images/cypher-lock-logo.svg", linkedin: "https://www.linkedin.com/company/cypherlock/" },
  { name: "C Square Club", logo: "/images/csquare-logo.png", linkedin: "https://www.linkedin.com/company/csquare-club/" },
  { name: "CU Engineering Community", logo: "/images/cuec.png", linkedin: "https://www.linkedin.com/in/engineering-community-cuec-698774320/" },
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
            >
              <Link href={collaborator.linkedin} target="_blank" rel="noopener noreferrer" className="w-80">
                <Card className="w-80 h-80 flex flex-col items-center justify-between bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-6 hover:scale-105 transition-transform">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src={collaborator.logo || "/placeholder.svg"}
                      alt={collaborator.name}
                      width={250}  // Increased width
                      height={250} // Increased height
                      className="h-32 w-auto object-contain" // Increased display size
                    />
                  </CardHeader>
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
