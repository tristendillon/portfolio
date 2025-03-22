'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'
import { Quote as QuoteIcon } from 'lucide-react'

interface QuoteProps {
  text: string
  author?: string
  source?: string
  variant?: 'default' | 'simple' | 'highlight'
  className?: string
  index?: number
}

export default function Quote({
  text,
  author,
  source,
  variant = 'default',
  className,
  index,
}: QuoteProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={cn(
        'my-8 max-w-2xl mx-auto',
        variant === 'highlight' && 'bg-primary/10 rounded-lg p-6',
        variant === 'default' && 'border-l-4 border-primary pl-6 py-2',
        className
      )}
    >
      {variant === 'simple' && (
        <QuoteIcon className="h-8 w-8 text-primary/40 mb-2" />
      )}

      <blockquote
        className={cn(
          'text-lg italic',
          variant === 'highlight' && 'text-primary-foreground',
          variant !== 'highlight' && 'text-muted-foreground'
        )}
      >
        &ldquo;{text}&ldquo;
      </blockquote>

      {(author || source) && (
        <footer className="mt-2 text-sm">
          {author && <span className="font-medium">{author}</span>}
          {author && source && <span>, </span>}
          {source && <cite>{source}</cite>}
        </footer>
      )}
    </MotionDiv>
  )
}
