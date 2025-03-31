'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'

interface EmbedProps {
  src: string
  title?: string
  caption?: string
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16'
  allowFullScreen?: boolean
  sandbox?: string
  className?: string
  index?: number
}

export default function Embed({
  src,
  title,
  caption,
  aspectRatio = '16:9',
  allowFullScreen = true,
  sandbox,
  className,
  index
}: EmbedProps) {
  const [isError, setIsError] = useState(false)
  
  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]'
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={cn('rounded-lg overflow-hidden', className)}
    >
      <div className={cn('w-full', aspectRatioClass[aspectRatio])}>
        <iframe
          src={src}
          title={title || 'Embedded content'}
          sandbox={sandbox}
          allowFullScreen={allowFullScreen}
          className="w-full h-full border-0"
          onError={() => setIsError(true)}
        />

        {isError && (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Error loading embedded content</p>
          </div>
        )}
      </div>

      {caption && (
        <div className="mt-2 text-sm text-center text-muted-foreground">
          {caption}
        </div>
      )}
    </MotionDiv>
  )
}