'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'

interface TechItem {
  name: string
  icon?: React.ReactNode
  url?: string
}

interface TechStackProps {
  title?: string
  technologies: (string | TechItem)[]
  columns?: 2 | 3 | 4 | 5
  variant?: 'default' | 'pills' | 'grid'
  className?: string
  index?: number
}

export default function TechStack({
  title = 'Technologies Used',
  technologies,
  columns = 3,
  variant = 'default',
  className,
  index,
}: TechStackProps) {
  // Normalize technologies to TechItem format
  const techItems = technologies.map((tech) => {
    if (typeof tech === 'string') {
      return { name: tech }
    }
    return tech
  })

  const columnClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-5',
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={cn('my-6', className)}
    >
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}

      {variant === 'default' && (
        <ul className="space-y-2">
          {techItems.map((tech, i) => (
            <li key={i} className="flex items-center gap-2">
              {tech.icon && <span>{tech.icon}</span>}
              {tech.url ? (
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {tech.name}
                </a>
              ) : (
                <span>{tech.name}</span>
              )}
            </li>
          ))}
        </ul>
      )}

      {variant === 'pills' && (
        <div className="flex flex-wrap gap-2">
          {techItems.map((tech, i) => (
            <span
              key={i}
              className="bg-muted px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"
            >
              {tech.icon && <span>{tech.icon}</span>}
              {tech.name}
            </span>
          ))}
        </div>
      )}

      {variant === 'grid' && (
        <div className={cn('grid gap-4', columnClass[columns])}>
          {techItems.map((tech, i) => (
            <div
              key={i}
              className="flex gap-2 items-center  bg-muted p-4 rounded-lg transition-colors hover:bg-muted/80"
            >
              {tech.icon}
              <span className="text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      )}
    </MotionDiv>
  )
}
