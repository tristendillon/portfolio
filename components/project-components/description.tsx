'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'

interface DescriptionProps {
  text: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  withDivider?: boolean
  index?: number
}

export default function Description({
  text,
  align = 'left',
  size = 'md',
  withDivider = false,
  index
}: DescriptionProps) {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className="max-w-3xl mx-auto py-4"
    >
      {withDivider && <div className="w-24 h-1 bg-primary mb-6 mx-auto" />}
      <div 
        className={cn(
          'text-muted-foreground whitespace-pre-line', 
          textAlign[align],
          textSize[size]
        )}
      >
        {text}
      </div>
    </MotionDiv>
  )
}