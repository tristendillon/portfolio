"use client"

import Link from "next/link"
import Image from "next/image"
import { ProjectMeta } from "@/lib/types"
import { MotionDiv, AnimatePresence } from "@/components/ui/motion"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectGridProps {
  projects: Record<string, { meta: ProjectMeta }>
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {Object.entries(projects).map(([slug, { meta }], index) => (
          <MotionDiv
            key={slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
            className="h-full"
          >
            <Link href={`/projects/${slug}`} className="h-full block">
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={meta.image} 
                    alt={meta.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold line-clamp-1">{meta.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-grow">
                    {meta.description}
                  </p>
                  <div className="mt-4 text-sm text-primary">View project →</div>
                </CardContent>
              </Card>
            </Link>
          </MotionDiv>
        ))}
      </AnimatePresence>
    </div>
  )
}