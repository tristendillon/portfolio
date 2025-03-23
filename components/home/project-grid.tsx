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
  projects: Record<string, { meta: ProjectMeta }>
}

const PROJECTS_PER_LOAD = 6

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const projectEntries = Object.entries(projects)
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD)
  const hasMoreProjects = visibleCount < projectEntries.length
  const handleLoadMore = () => {
    // Clear the hash from the URL when loading more projects
    if (window.location.hash) {
      try {
        // Use replaceState instead of pushState for better iOS compatibility
        try {
          window.history.replaceState(
            '',
            '',
            window.location.pathname + window.location.search
          )
        } catch (e) {
          // Fallback for environments where history API is restricted
          console.log('Could not update URL history')
        }
      } catch (error) {
        console.error('Error clearing hash:', error)
      }
    }

    setVisibleCount((prev) => Math.min(prev + 3, projectEntries.length))
  }

  // Find project from hash and load/scroll to it
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')

      if (hash && hash.startsWith('project-')) {
        const projectSlug = hash.replace('project-', '')
        const projectIndex = projectEntries.findIndex(
          ([slug]) => slug === projectSlug
        )

        if (projectIndex >= 0) {
          // Calculate how many items we need to load to show this project
          const requiredLoadCount =
            Math.ceil((projectIndex + 1) / PROJECTS_PER_LOAD) *
            PROJECTS_PER_LOAD

          // Set visible count to show the project
          setVisibleCount((prev) => Math.max(prev, requiredLoadCount))

          // Disable scrolling while we prepare to scroll to the project
          document.body.style.overflow = 'hidden'

          // Scroll to the project after a small delay to ensure rendering
          setTimeout(() => {
            const projectRef = projectRefs.current[projectSlug]
            if (projectRef) {
              projectRef.scrollIntoView({ behavior: 'smooth', block: 'center' })

              // Re-enable scrolling after the scroll animation completes
              setTimeout(() => {
                document.body.style.overflow = ''
              }, 800) // Allow enough time for the smooth scroll to complete
            } else {
              // Re-enable scrolling if project ref not found
              document.body.style.overflow = ''
            }
          }, 300)
        }
      }
    }

    // Handle hash on initial load
    handleHashChange()

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      // Ensure scrolling is re-enabled when component unmounts
      document.body.style.overflow = ''
    }
  }, [projectEntries])

  const visibleProjects = projectEntries.slice(0, visibleCount)

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
