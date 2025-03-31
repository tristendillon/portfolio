'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectMeta } from '@/lib/types'
import {
  MotionDiv,
  AnimatePresence,
  Card,
  CardContent,
  Button,
  SocialButton,
} from '@/components/ui'

interface ProjectGridProps {
  projects: Record<string, { meta: ProjectMeta; env: string }>
}

const PROJECTS_PER_LOAD = 6

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD)

  // Filter projects based on environment
  const isProduction = process.env.NODE_ENV === 'production'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filteredProjects = Object.entries(projects).filter(([_, project]) =>
    !isProduction || project.env === 'production'
  )

  const hasMoreProjects = visibleCount < filteredProjects.length
  const handleLoadMore = () => {
    if (window.location.hash) {
      try {
        window.history.replaceState(
          '',
          '',
          window.location.pathname + window.location.search
        )
      } catch (error) {
        console.error('Error clearing hash:', error)
      }
    }
    setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length))
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')

      if (hash && hash.startsWith('project-')) {
        const projectSlug = hash.replace('project-', '')
        const projectIndex = filteredProjects.findIndex(
          ([slug]) => slug === projectSlug
        )

        if (projectIndex >= 0) {
          const requiredLoadCount =
            Math.ceil((projectIndex + 1) / PROJECTS_PER_LOAD) *
            PROJECTS_PER_LOAD

          setVisibleCount((prev) => Math.max(prev, requiredLoadCount))

          document.body.style.overflow = 'hidden'

          setTimeout(() => {
            const projectRef = projectRefs.current[projectSlug]
            if (projectRef) {
              projectRef.scrollIntoView({ behavior: 'smooth', block: 'center' })

              setTimeout(() => {
                document.body.style.overflow = ''
              }, 800)
            } else {
              document.body.style.overflow = ''
            }
          }, 300)
        }
      }
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      document.body.style.overflow = ''
    }
  }, [filteredProjects])

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visibleProjects.map(([slug, { meta }], index) => (
            <MotionDiv
              key={slug}
              ref={(el) => {
                projectRefs.current[slug] = el
              }}
              id={`project-${slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                delay: (index % PROJECTS_PER_LOAD) * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="h-full relative isolate"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={meta.image}
                    alt={meta.title}
                    fill
                    priority
                    quality={100}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold line-clamp-1">
                    {meta.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-grow">
                    {meta.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={`/projects/${slug}`}
                      className="text-sm text-primary "
                    >
                      <span className="absolute inset-0"></span>
                      View project →
                    </Link>
                    {meta.github && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="z-10"
                      >
                        <SocialButton.Github
                          type="icon"
                          size="sm"
                          href={meta.github}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </AnimatePresence>
      </div>

      {hasMoreProjects && (
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Button
            onClick={handleLoadMore}
            variant="outline"
            className="font-medium"
          >
            Load More Projects
          </Button>
        </MotionDiv>
      )}
    </div>
  )
}
