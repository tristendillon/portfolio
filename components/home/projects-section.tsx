'use client'

import { MotionSection } from '@/components/ui/motion'
import { projects } from '@/lib/projects'
import ProjectGrid from './project-grid'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export default function ProjectsSection() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <MotionSection
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      initial={{ opacity: 0 }}
      animate={{ opacity: isIntersecting ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 container mx-auto px-4"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work and personal projects. Each demonstrates
          different skills and technologies.
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </MotionSection>
  )
}
