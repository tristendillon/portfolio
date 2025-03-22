import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import projectComponents from '@/lib/project-components'
import { ComponentPropsMap, ProjectSection } from '@/lib/types'
import { ThemeToggle, MotionDiv, SocialButton } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { GridSection } from '@/components/project-components'
import Script from 'next/script'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params
  const project = projects[slug]

  if (!project) return notFound()

  const title = `${project.meta.title} | Tristen Dillon Portfolio`
  const description = project.meta.description

  return {
    title,
    description,
    keywords: [
      ...(project.meta.technologies || []),
      'case study',
      'portfolio project',
      'Tristen Dillon',
    ],
    openGraph: {
      type: 'article',
      title,
      description,
      images: [{ url: project.meta.image, alt: project.meta.title }],
      url: `https://portfolio.tdilly.com/projects/${slug}`,
      siteName: 'Tristen Dillon Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.meta.image],
    },
    alternates: {
      canonical: `https://portfolio.tdilly.com/projects/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

const renderSection = (section: ProjectSection, index: number) => {
  if (section.type === 'grid') {
    return (
      <GridSection
        title={section.title}
        description={section.description}
        items={section.items}
        index={index}
      />
    )
  } else {
    const componentKey = section.component
      .component as keyof typeof projectComponents
    const SpecificComponent = projectComponents[
      componentKey
    ] as React.ComponentType<ComponentPropsMap[typeof componentKey]>

    return <SpecificComponent {...section.component.props} index={index} />
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const projectData = projects[slug]
  if (!projectData) return notFound()

  // Create project schema for structured data
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: projectData.meta.title,
    description: projectData.meta.description,
    author: {
      '@type': 'Person',
      name: 'Tristen Dillon',
      url: 'https://tristendillon.com',
    },
    image: projectData.meta.image,
    url: `https://tristendillon.com/projects/${slug}`,
    ...(projectData.meta.github && { codeRepository: projectData.meta.github }),
    keywords: (projectData.meta.technologies || []).join(', '),
  }

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden flex flex-col">
      <Script
        id="schema-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <header className="h-16 border-b fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href={`/#project-${slug}`}
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

      <main className="container mx-auto px-4 py-12 space-y-16 max-w-5xl pt-24">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 sr-only">
            {projectData.meta.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {projectData.meta.description}
          </p>
          {projectData.meta.github && (
            <SocialButton
              platform="github"
              type="icon-text"
              href={projectData.meta.github}
              variant="ghost"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            />
          )}
        </MotionDiv>

        <div className="md:space-y-16 space-y-8">
          {projectData.sections.map((section, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {renderSection(section, index)}
            </MotionDiv>
          ))}
        </div>
      </main>

      <footer className="border-t py-6 bg-background mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tristen Dillon</p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href={`/#project-${slug}`}
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
