"use client"

import { HeroSection } from "@/components/hero-section"
import { DigitalAvatarSection } from "@/components/digital-avatar-section"
import { AboutSection } from "@/components/about-section"
import { ThemeSection } from "@/components/theme-section"
import { TeamSection } from "@/components/team-section"
import { FAQsSection } from "@/components/faqs-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      <HeroSection />
      <DigitalAvatarSection />
      <AboutSection />
      <ThemeSection />
      <TeamSection />
      <FAQsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

