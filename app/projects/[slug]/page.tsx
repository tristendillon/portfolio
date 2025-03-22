import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import projectComponents from '@/lib/projectComponents'
import { ComponentPropsMap } from '@/lib/types'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { MotionDiv } from '@/components/ui/motion'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: { slug: string }
}

export const generateMetadata = ({ params }: ProjectPageProps): Metadata => {
  const { slug } = params
  const project = projects[slug]

  if (!project) return notFound()

  return {
    title: project.meta.title,
    description: project.meta.description,
    openGraph: {
      title: project.meta.title,
      description: project.meta.description,
      images: [{ url: project.meta.image }],
    },
  }
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params
  const projectData = projects[slug]

  if (!projectData) return notFound()

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <header className="h-16 border-b sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16 max-w-5xl">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {projectData.meta.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {projectData.meta.description}
          </p>
        </MotionDiv>

        <div className="space-y-16">
          {projectData.components.map((comp, index) => {
            const SpecificComponent = projectComponents[
              comp.component
            ] as React.ComponentType<ComponentPropsMap[typeof comp.component]>

            return (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <SpecificComponent {...comp.props} index={index} />
              </MotionDiv>
            )
          })}
        </div>
      </main>

      <footer className="border-t py-6 bg-background mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tristen Dillon</p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="/#projects"
              className="hover:text-foreground transition-colors"
            >
              More Projects
            </Link>
            <Link
              href="/#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
