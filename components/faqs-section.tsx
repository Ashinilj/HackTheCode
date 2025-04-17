"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQsSection() {
  const faqs = [
    {
      question: "What is the Hack The Code?",
      answer:
        "Hack The Code is a competitive event where participants collaborate to build innovative solutions to real-world problems. It brings together developers, designers, and thinkers to ideate, create, and present their projects.",
    },
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is open to students, professionals, and enthusiasts from all backgrounds. Whether you're a beginner or an experienced coder, everyone is welcome to participate and showcase their skills.",
    },
    {
      question: "Do I need a team to participate?",
      answer:
        "Yes, you must be a part of a team to participate. Minimum of 3 and maximum of 5 participants are allowed in each team",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects will be judged based on innovation, feasibility, technical implementation, user experience, and overall impact. The judging panel will consist of industry experts and mentors.",
    },
    {
      question: "Do I need to bring anything to the event?",
      answer:
        "Participants should bring their laptops, chargers, and any other necessary hardware or software tools needed for development. A stable internet connection and other basic amenities will be provided at the venue.",
    },
    {
      question: "Will there be mentors available?",
      answer:
        "Yes, experienced mentors from various domains will be available throughout the hackathon to provide guidance, technical support, and feedback on your project.",
    },
    {
      question: "How can I register for the hackathon?",
      answer:
        "You can register by clicking on the register button in the home page. You will be redirected for filling out the registration form. Keep an eye on the deadlines to ensure your participation.",
    },
  ];

  return (
    <section id="faqs" className="relative flex items-center justify-center min-h-screen w-full bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
      <div className="container mx-auto px-6 py-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-semibold py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
