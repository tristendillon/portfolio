'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'
import { ExternalLink, Github, Figma, ArrowRight } from 'lucide-react'

type LinkPlatform = 'github' | 'website' | 'figma' | 'docs' | 'demo' | 'custom'

interface LinkCardProps {
  title: string
  url: string
  description?: string
  platform?: LinkPlatform
  icon?: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  className?: string
  index?: number
}

export default function LinkCard({
  title,
  url,
  description,
  platform = 'custom',
  icon,
  variant = 'default',
  className,
  index
}: LinkCardProps) {
  // Determine icon based on platform
  const platformIcon = {
    github: <Github className="h-5 w-5" />,
    website: <ExternalLink className="h-5 w-5" />,
    figma: <Figma className="h-5 w-5" />,
    docs: <ExternalLink className="h-5 w-5" />,
    demo: <ExternalLink className="h-5 w-5" />,
    custom: icon || <ExternalLink className="h-5 w-5" />
  }

  // Styles for different variants
  const variantClass = {
    default: 'bg-card hover:bg-card/80 border shadow-sm',
    outline: 'bg-background hover:bg-muted/10 border',
    ghost: 'hover:bg-muted'
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          'block rounded-lg p-4 transition-all',
          'group hover:translate-y-[-2px]',
          variantClass[variant],
          className
        )}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-muted-foreground">
                {platformIcon[platform]}
              </span>
              <h3 className="font-medium">{title}</h3>
            </div>
            
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-x-1" />
        </div>
      </a>
    </MotionDiv>
  )
}