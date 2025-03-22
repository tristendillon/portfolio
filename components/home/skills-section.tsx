"use client"

import { MotionDiv, MotionSection } from "@/components/ui/motion"

interface SkillCategoryProps {
  title: string
  skills: string[]
  delay?: number
}

function SkillCategory({ title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border rounded-xl p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </MotionDiv>
  )
}

export default function SkillsSection() {
  return (
    <MotionSection
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-accent/10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory 
            title="Frontend" 
            skills={[
              "JavaScript/TypeScript",
              "React & Next.js",
              "HTML5/CSS3",
              "Tailwind CSS",
              "Framer Motion",
              "Redux/Zustand"
            ]}
            delay={0}
          />
          
          <SkillCategory 
            title="Backend" 
            skills={[
              "Node.js",
              "Express",
              "Python/Django",
              "REST APIs",
              "GraphQL",
              "Authentication"
            ]}
            delay={0.1}
          />
          
          <SkillCategory 
            title="Database & Cloud" 
            skills={[
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "AWS/Azure",
              "Docker",
              "CI/CD Pipelines"
            ]}
            delay={0.2}
          />
          
          <SkillCategory 
            title="Tools & Methods" 
            skills={[
              "Git/GitHub",
              "Agile/Scrum",
              "Jest/Testing Library",
              "Responsive Design",
              "Performance Optimization",
              "Accessibility (a11y)"
            ]}
            delay={0.3}
          />
        </div>
      </div>
    </MotionSection>
  )
}