'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'

interface TitleProps {
  text: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  withLine?: boolean
  className?: string
  index?: number
}

export default function Title({
  text,
  align = 'left',
  size = 'lg',
  withLine = false,
  className,
  index
}: TitleProps) {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const textSize = {
    sm: 'text-lg md:text-xl font-semibold',
    md: 'text-xl md:text-2xl font-semibold',
    lg: 'text-2xl md:text-3xl font-bold',
    xl: 'text-3xl md:text-4xl font-bold'
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className="mb-4"
    >
      <h2 className={cn(
        textAlign[align],
        textSize[size],
        className
      )}>
        {text}
        {withLine && (
          <div 
            className={cn(
              'h-1 bg-primary mt-2 w-16',
              align === 'center' && 'mx-auto',
              align === 'right' && 'ml-auto'
            )}
          />
        )}
      </h2>
    </MotionDiv>
  )
}