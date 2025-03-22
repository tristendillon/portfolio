"use client"

import { MotionDiv, MotionSection } from "@/components/ui/motion"

export default function AboutSection() {
  return (
    <MotionSection
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-accent/10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg">
              Hello! I'm Tristen, a passionate full-stack developer with a keen eye for detail and a love for creating seamless user experiences.
            </p>
            
            <p>
              I enjoy tackling complex problems and turning them into simple, beautiful, and intuitive solutions. My approach combines technical expertise with creative thinking to build applications that are not only functional but also a joy to use.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border rounded-xl p-6 shadow-sm space-y-4"
          >
            <h3 className="text-xl font-semibold">Experience Highlights</h3>
            
            <div className="space-y-4">
              <div className="border-l-2 pl-4 py-1 border-primary">
                <h4 className="font-medium">Senior Frontend Developer</h4>
                <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                <p className="mt-1">Leading UI/UX initiatives and mentoring junior developers</p>
              </div>
              
              <div className="border-l-2 pl-4 py-1 border-primary">
                <h4 className="font-medium">Full Stack Engineer</h4>
                <p className="text-sm text-muted-foreground">WebSolutions • 2018 - 2021</p>
                <p className="mt-1">Developed scalable web applications with modern frameworks</p>
              </div>
              
              <div className="border-l-2 pl-4 py-1 border-primary">
                <h4 className="font-medium">Junior Developer</h4>
                <p className="text-sm text-muted-foreground">Digital Agency • 2016 - 2018</p>
                <p className="mt-1">Created responsive websites and e-commerce solutions</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}