import { MotionSection } from '@/components/ui/motion'
import { projects } from '@/lib/projects'
import ProjectGrid from './project-grid'

export default function ProjectsSection() {
  return (
    <MotionSection
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
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
