'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'

interface SubtitleProps {
  text: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  index?: number
}

export default function Subtitle({
  text,
  align = 'left',
  size = 'md',
  className,
  index
}: SubtitleProps) {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const textSize = {
    sm: 'text-base font-medium',
    md: 'text-lg font-medium',
    lg: 'text-xl font-medium'
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className="mb-6"
    >
      <h3 className={cn(
        'text-muted-foreground',
        textAlign[align],
        textSize[size],
        className
      )}>
        {text}
      </h3>
    </MotionDiv>
  )
}