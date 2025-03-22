'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'

interface DividerProps {
  type?: 'line' | 'dots' | 'icon' | 'space'
  icon?: React.ReactNode
  color?: 'primary' | 'muted' | 'foreground'
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
  index?: number
}

export default function Divider({
  type = 'line',
  icon,
  color = 'muted',
  spacing = 'md',
  className,
  index
}: DividerProps) {
  const colorClass = {
    primary: 'bg-primary',
    muted: 'bg-muted-foreground/20',
    foreground: 'bg-foreground/10'
  }

  const spacingClass = {
    sm: 'my-4',
    md: 'my-8',
    lg: 'my-16'
  }

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={cn(spacingClass[spacing], className)}
    >
      {type === 'line' && (
        <div className={cn('w-full h-px', colorClass[color])} />
      )}

      {type === 'dots' && (
        <div className="flex justify-center">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  'w-1.5 h-1.5 rounded-full',
                  colorClass[color]
                )} 
              />
            ))}
          </div>
        </div>
      )}

      {type === 'icon' && icon && (
        <div className="flex justify-center">
          <div className={cn(
            'p-2 rounded-full',
            color === 'primary' && 'bg-primary/10 text-primary',
            color === 'muted' && 'bg-muted text-muted-foreground',
            color === 'foreground' && 'bg-foreground/5 text-foreground/80'
          )}>
            {icon}
          </div>
        </div>
      )}

      {type === 'space' && <div className={spacingClass[spacing]} />}
    </MotionDiv>
  )
}