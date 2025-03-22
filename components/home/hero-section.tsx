"use client"

import { Button } from "@/components/ui/button"
import { MotionDiv, MotionH1, MotionP, MotionSection } from "@/components/ui/motion"
import { Mail, FileText } from "lucide-react"

export default function HeroSection() {
  return (
    <MotionSection
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-32 container mx-auto px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <MotionH1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          Tristen Dillon
        </MotionH1>
        
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Full-stack developer passionate about creating beautiful, functional experiences 
          with a strong focus on performance and accessibility.
        </MotionP>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button asChild className="gap-2">
            <a href="#contact">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <a href="#projects">
              <FileText className="w-4 h-4" />
              View Projects
            </a>
          </Button>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}