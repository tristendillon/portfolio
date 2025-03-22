'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'
import LinkCard from './link-card'

type LinkPlatform = 'github' | 'website' | 'figma' | 'docs' | 'demo' | 'custom'

interface LinkItem {
  title: string
  url: string
  description?: string
  platform?: LinkPlatform
  icon?: React.ReactNode
}

interface LinkGridProps {
  title?: string
  description?: string
  links: LinkItem[]
  columns?: 1 | 2 | 3 | 4
  variant?: 'default' | 'outline' | 'ghost'
  className?: string
  index?: number
}

export default function LinkGrid({
  title,
  description,
  links,
  columns = 2,
  variant = 'default',
  className,
  index
}: LinkGridProps) {
  const columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={className}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      )}
      
      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}
      
      <div className={cn('grid gap-4', columnClass[columns])}>
        {links.map((link, i) => (
          <LinkCard
            key={i}
            title={link.title}
            url={link.url}
            description={link.description}
            platform={link.platform}
            icon={link.icon}
            variant={variant}
            index={i}
          />
        ))}
      </div>
    </MotionDiv>
  )
}